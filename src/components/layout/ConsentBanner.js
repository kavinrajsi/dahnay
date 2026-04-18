"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONSENT_EVENT,
  DEFAULT_CATEGORIES,
  applyConsent,
  readConsentCookie,
  writeConsentCookie,
} from "@/lib/consent";

export default function ConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

  // Client-only mount gate — reads cookie once, applies gtag consent signals.
  // The setState calls here are intentional: we can't know the cookie state
  // server-side, so we must bootstrap client-only UI after hydration.
  useEffect(() => {
    const existing = readConsentCookie();
    if (existing) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration bootstrap
      setCategories(existing);
      applyConsent(existing);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = () => {
      setCategories(readConsentCookie() || DEFAULT_CATEGORIES);
      setShowSettings(true);
      setForceOpen(true);
    };
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  const save = (next) => {
    const toSave = { ...next, necessary: true };
    writeConsentCookie(toSave);
    applyConsent(toSave);
    setCategories(toSave);
    setForceOpen(false);
    setShowSettings(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    save({ necessary: true, analytics: false, marketing: false });
  const saveSelection = () => save(categories);

  if (!mounted) return null;
  const hasStoredConsent = Boolean(readConsentCookie());
  const visible = forceOpen || !hasStoredConsent;
  if (!visible) return null;

  return (
    <div
      className="consent-banner"
      role="dialog"
      aria-labelledby="consent-banner-title"
      aria-modal="false"
    >
      <div className="consent-banner__inner">
        {!showSettings ? (
          <>
            <h2
              id="consent-banner-title"
              className="consent-banner__title"
            >
              Consent for Data Processing
            </h2>
            <p className="consent-banner__body">
              This website uses cookies and similar technologies (hereinafter
              &ldquo;Technologies&rdquo;) that enable us to provide an
              optimized online experience and tailor content to your
              interests. By clicking &ldquo;Accept all&rdquo;, you consent
              that these Technologies may be stored and read on your device.
              This includes the creation of profiles to make our services as
              easy to use and as customer-specific as possible and to support
              our marketing activities. Your consent includes the transfer of
              data to countries with a level of data protection not
              equivalent to the European Union. For more information and the
              option to withdraw or adjust your consent, please refer to
              &ldquo;Consent Settings&rdquo; at the bottom of the website.
              {" "}
              <Link href="/privacy-policy" className="consent-banner__link">
                Privacy Policy
              </Link>
              {" · "}
              <Link href="/cookie-policy" className="consent-banner__link">
                Cookie Policy
              </Link>
            </p>
            <div className="consent-banner__actions">
              <button
                type="button"
                className="consent-banner__btn consent-banner__btn--primary"
                onClick={acceptAll}
              >
                Accept all
              </button>
              <button
                type="button"
                className="consent-banner__btn"
                onClick={rejectAll}
              >
                Reject all
              </button>
              <button
                type="button"
                className="consent-banner__btn consent-banner__btn--ghost"
                onClick={() => setShowSettings(true)}
              >
                Cookie settings
              </button>
            </div>
          </>
        ) : (
          <>
            <h2
              id="consent-banner-title"
              className="consent-banner__title"
            >
              Cookie Settings
            </h2>
            <p className="consent-banner__body">
              Choose which categories of Technologies you allow on this
              website. Your choice applies only to this browser.
            </p>
            <ul className="consent-banner__categories">
              <li className="consent-banner__category">
                <label className="consent-banner__category-label">
                  <input type="checkbox" checked disabled />
                  <span className="consent-banner__category-text">
                    <strong>Necessary</strong>
                    <span>
                      Required for the website to function. Cannot be
                      disabled.
                    </span>
                  </span>
                </label>
              </li>
              <li className="consent-banner__category">
                <label className="consent-banner__category-label">
                  <input
                    type="checkbox"
                    checked={categories.analytics}
                    onChange={(e) =>
                      setCategories((c) => ({
                        ...c,
                        analytics: e.target.checked,
                      }))
                    }
                  />
                  <span className="consent-banner__category-text">
                    <strong>Analytics</strong>
                    <span>
                      Help us understand how visitors use the site.
                    </span>
                  </span>
                </label>
              </li>
              <li className="consent-banner__category">
                <label className="consent-banner__category-label">
                  <input
                    type="checkbox"
                    checked={categories.marketing}
                    onChange={(e) =>
                      setCategories((c) => ({
                        ...c,
                        marketing: e.target.checked,
                      }))
                    }
                  />
                  <span className="consent-banner__category-text">
                    <strong>Marketing</strong>
                    <span>
                      Used to deliver personalized content and ads, and to
                      measure their effectiveness.
                    </span>
                  </span>
                </label>
              </li>
            </ul>
            <div className="consent-banner__actions">
              <button
                type="button"
                className="consent-banner__btn consent-banner__btn--primary"
                onClick={acceptAll}
              >
                Accept all
              </button>
              <button
                type="button"
                className="consent-banner__btn"
                onClick={rejectAll}
              >
                Reject all
              </button>
              <button
                type="button"
                className="consent-banner__btn consent-banner__btn--ghost"
                onClick={saveSelection}
              >
                Save selection
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
