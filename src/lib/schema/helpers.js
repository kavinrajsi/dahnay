const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dahnay.com";

export function siteUrl() {
  return SITE_URL.replace(/\/$/, "");
}

export function absoluteUrl(path) {
  if (!path) return siteUrl();
  if (/^https?:\/\//i.test(path)) return path;
  return siteUrl() + (path.startsWith("/") ? path : `/${path}`);
}

// XSS-mitigation per Next.js JSON-LD guide: escape `<` so a stray `</script>` in
// content cannot terminate the JSON-LD <script> block.
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
