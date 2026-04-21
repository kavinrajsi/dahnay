const HTML_ESCAPE_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => HTML_ESCAPE_MAP[ch]);
}

export function sanitizeSubject(value) {
  return String(value ?? "").replace(/[\r\n]+/g, " ").trim();
}

export function buildUtmHtml(utm) {
  if (!utm || typeof utm !== "object") return "<p>N/A</p>";
  const entries = Object.entries(utm);
  if (entries.length === 0) return "<p>N/A</p>";
  return entries
    .map(
      ([k, v]) =>
        `<p><strong>${escapeHtml(k)}:</strong> ${escapeHtml(v)}</p>`,
    )
    .join("");
}

export function buildTrackingHtml({ ip, pageUrl, previousPage, utm }) {
  return `
    <hr />
    <h3>Tracking Info</h3>
    <p><strong>IP Address:</strong> ${escapeHtml(ip)}</p>
    <p><strong>Page URL:</strong> ${pageUrl ? escapeHtml(pageUrl) : "N/A"}</p>
    <p><strong>Previous Page:</strong> ${previousPage ? escapeHtml(previousPage) : "N/A"}</p>
    <h4>UTM Parameters</h4>
    ${buildUtmHtml(utm)}
  `;
}
