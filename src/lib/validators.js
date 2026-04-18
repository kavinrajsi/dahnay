export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MOBILE_RE = /^[+\d][\d\s\-()]{6,}$/;

export function isValidEmail(email) {
  return EMAIL_RE.test(String(email || "").trim());
}

export function isValidMobile(mobile) {
  return MOBILE_RE.test(String(mobile || "").trim());
}
