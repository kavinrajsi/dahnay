export const CONSENT_COOKIE = "dahnay_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 395; // ~13 months, matches GDPR guidance
export const CONSENT_EVENT = "dahnay:open-consent";

export const DEFAULT_CATEGORIES = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function readConsentCookie() {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`)
  );
  if (!match) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(match[1]));
    if (parsed?.version === CONSENT_VERSION && parsed?.categories) {
      return {
        ...DEFAULT_CATEGORIES,
        ...parsed.categories,
        necessary: true,
      };
    }
  } catch {}
  return null;
}

export function writeConsentCookie(categories) {
  if (typeof document === "undefined") return;
  const payload = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    categories: { ...DEFAULT_CATEGORIES, ...categories, necessary: true },
  };
  const value = encodeURIComponent(JSON.stringify(payload));
  const secure = location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${CONSENT_MAX_AGE}; samesite=lax${secure}`;
}

export function applyConsent(categories) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("consent", "update", {
    analytics_storage: categories.analytics ? "granted" : "denied",
    ad_storage: categories.marketing ? "granted" : "denied",
    ad_user_data: categories.marketing ? "granted" : "denied",
    ad_personalization: categories.marketing ? "granted" : "denied",
    personalization_storage: categories.marketing ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });
}
