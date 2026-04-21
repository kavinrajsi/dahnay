export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MOBILE_RE = /^\d{10}$/;

export function isValidEmail(email) {
  return EMAIL_RE.test(String(email || "").trim());
}

export function isValidMobile(mobile) {
  const digits = String(mobile || "").replace(/\D/g, "");
  return MOBILE_RE.test(digits);
}
