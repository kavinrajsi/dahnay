export function getClientIP(headersList) {
  return (
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown"
  );
}

export function logEmail(entry) {
  console.log("[ZeptoMail Log]", JSON.stringify(entry));
}

export function maskEmail(email) {
  const str = String(email || "").trim();
  const at = str.indexOf("@");
  if (at < 1) return "***";
  const local = str.slice(0, at);
  const domain = str.slice(at + 1);
  const dot = domain.lastIndexOf(".");
  const domainName = dot > 0 ? domain.slice(0, dot) : domain;
  const tld = dot > 0 ? domain.slice(dot) : "";
  return `${local[0]}***@${domainName[0] || ""}***${tld}`;
}

export async function sendZeptoMail({ toEmail, subject, html, attachments }) {
  const {
    ZEPTOMAIL_URL,
    ZEPTOMAIL_TOKEN,
    ZEPTOMAIL_FROM_EMAIL,
    ZEPTOMAIL_FROM_NAME,
    ZEPTOMAIL_TO_NAME,
  } = process.env;

  if (
    !ZEPTOMAIL_URL ||
    !ZEPTOMAIL_TOKEN ||
    !ZEPTOMAIL_FROM_EMAIL ||
    !ZEPTOMAIL_FROM_NAME ||
    !ZEPTOMAIL_TO_NAME ||
    !toEmail
  ) {
    return { ok: false, configError: true };
  }

  const payload = {
    from: { address: ZEPTOMAIL_FROM_EMAIL, name: ZEPTOMAIL_FROM_NAME },
    to: [{ email_address: { address: toEmail, name: ZEPTOMAIL_TO_NAME } }],
    subject,
    htmlbody: html,
  };
  if (attachments?.length) payload.attachments = attachments;

  const response = await fetch(ZEPTOMAIL_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: ZEPTOMAIL_TOKEN,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  return { ok: response.ok, result };
}
