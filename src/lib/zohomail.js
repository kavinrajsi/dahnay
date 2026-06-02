import nodemailer from "nodemailer";

export function getClientIP(headersList) {
  return (
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown"
  );
}

export function logEmail(entry) {
  console.log("[ZohoMail Log]", JSON.stringify(entry));
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

export async function sendZohoMail({ toEmail, subject, html, attachments }) {
  const {
    ZOHO_SMTP_USER,
    ZOHO_SMTP_PASS,
    ZOHO_FROM_NAME,
    ZOHO_TO_NAME,
  } = process.env;

  if (!ZOHO_SMTP_USER || !ZOHO_SMTP_PASS || !ZOHO_FROM_NAME || !ZOHO_TO_NAME || !toEmail) {
    return { ok: false, configError: true };
  }

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.in",
    port: 465,
    secure: true,
    auth: {
      user: ZOHO_SMTP_USER,
      pass: ZOHO_SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${ZOHO_FROM_NAME}" <${ZOHO_SMTP_USER}>`,
    to: `"${ZOHO_TO_NAME}" <${toEmail}>`,
    subject,
    html,
  };

  if (attachments?.length) {
    mailOptions.attachments = attachments.map((a) => ({
      filename: a.name,
      content: a.content,
      encoding: "base64",
      contentType: a.mime_type,
    }));
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    return { ok: true, result: info };
  } catch (err) {
    return { ok: false, result: { message: err.message } };
  }
}
