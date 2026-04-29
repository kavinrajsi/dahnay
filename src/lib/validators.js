import { isValidPhoneNumber } from "libphonenumber-js/min";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return EMAIL_RE.test(String(email || "").trim());
}

// Expects E.164 format (e.g. "+919876543210"). Validates against
// libphonenumber-js's per-country length and pattern rules.
export function isValidMobile(mobile) {
  const value = String(mobile || "").trim();
  if (!value) return false;
  try {
    return isValidPhoneNumber(value);
  } catch {
    return false;
  }
}

export function normalizeMobile(mobile) {
  return String(mobile || "").replace(/\D/g, "");
}
