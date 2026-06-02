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

// Sends a fixed-template confirmation directly to the submitter.
// The body must be entirely DahNAY-authored — never include user-supplied
// message/inquiry content here, as that would recreate the email-relay
// phishing vector that the cc field previously caused.
export async function sendConfirmation({ toEmail, toName, subject, html }) {
  const { ZOHO_SMTP_USER, ZOHO_SMTP_PASS, ZOHO_FROM_NAME } = process.env;
  if (!ZOHO_SMTP_USER || !ZOHO_SMTP_PASS || !ZOHO_FROM_NAME || !toEmail) return;

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.in",
    port: 465,
    secure: true,
    auth: { user: ZOHO_SMTP_USER, pass: ZOHO_SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"${ZOHO_FROM_NAME}" <${ZOHO_SMTP_USER}>`,
      to: toName ? `"${toName}" <${toEmail}>` : toEmail,
      subject,
      html,
    });
  } catch {
    // Confirmation failure is non-fatal — the enquiry was already received.
  }
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
