const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];
const STORAGE_KEY = "dahnay_utm";

function readFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) utms[key] = val;
  }
  return utms;
}

export function captureUTMs() {
  if (typeof window === "undefined") return;
  const fresh = readFromUrl();
  if (Object.keys(fresh).length === 0) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  } catch {}
}

export function getUTMParams() {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch {}
  return readFromUrl();
}
