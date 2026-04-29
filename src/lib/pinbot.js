import { normalizeMobile } from "@/lib/validators";

const TEMPLATE_LANG = process.env.PINBOT_TEMPLATE_LANG || "en";

function buildUrl(phoneNumberId) {
  return `https://partnersv1.pinbot.ai/v3/${phoneNumberId}/messages`;
}

async function postToPinbot({ payload, apiKey, phoneNumberId }) {
  const response = await fetch(buildUrl(phoneNumberId), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));
  return { ok: response.ok, status: response.status, result };
}

export function logWhatsApp(entry) {
  console.log("[PINBOT WhatsApp Log]", JSON.stringify(entry));
}

function getConfig() {
  const apiKey = process.env.PINBOT_API_KEY;
  const phoneNumberId = process.env.PINBOT_PHONE_NUMBER_ID;
  return { apiKey, phoneNumberId };
}

export async function sendWhatsAppText({ to, body }) {
  const { apiKey, phoneNumberId } = getConfig();
  const recipient = normalizeMobile(to);
  if (!apiKey || !phoneNumberId) {
    return { ok: false, configError: true };
  }
  if (!recipient) {
    return { ok: false, error: "missing_recipient" };
  }

  const payload = {
    messaging_product: "whatsapp",
    preview_url: false,
    recipient_type: "individual",
    to: recipient,
    type: "text",
    text: { body },
  };

  return postToPinbot({ payload, apiKey, phoneNumberId });
}

export async function sendWhatsAppTemplate({ to, templateName, parameters = [] }) {
  const { apiKey, phoneNumberId } = getConfig();
  const recipient = normalizeMobile(to);
  if (!apiKey || !phoneNumberId || !templateName) {
    return { ok: false, configError: true };
  }
  if (!recipient) {
    return { ok: false, error: "missing_recipient" };
  }

  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: recipient,
    type: "template",
    template: {
      name: templateName,
      language: { code: TEMPLATE_LANG },
      components: [
        {
          type: "body",
          parameters: parameters.map((text) => ({ type: "text", text: String(text ?? "") })),
        },
      ],
    },
  };

  return postToPinbot({ payload, apiKey, phoneNumberId });
}

export async function notifyAdminAndUser({
  form,
  adminTemplateEnv,
  userTemplateEnv,
  userMobile,
  parameters,
}) {
  const adminNumber = process.env.PINBOT_ADMIN_NUMBER;
  const adminTemplate = process.env[adminTemplateEnv];
  const userTemplate = process.env[userTemplateEnv];

  const results = {};

  if (adminNumber && adminTemplate) {
    const adminResult = await sendWhatsAppTemplate({
      to: adminNumber,
      templateName: adminTemplate,
      parameters,
    }).catch((err) => ({ ok: false, error: err.message }));
    logWhatsApp({
      timestamp: new Date().toISOString(),
      form,
      recipient: "admin",
      to: adminNumber,
      template: adminTemplate,
      ok: adminResult.ok,
      response: adminResult.result || adminResult.error,
    });
    results.admin = adminResult;
  } else {
    logWhatsApp({
      timestamp: new Date().toISOString(),
      form,
      recipient: "admin",
      skipped: true,
      reason: !adminNumber ? "missing_admin_number" : "missing_admin_template",
    });
  }

  if (userMobile && userTemplate) {
    const userResult = await sendWhatsAppTemplate({
      to: userMobile,
      templateName: userTemplate,
      parameters,
    }).catch((err) => ({ ok: false, error: err.message }));
    logWhatsApp({
      timestamp: new Date().toISOString(),
      form,
      recipient: "user",
      to: normalizeMobile(userMobile),
      template: userTemplate,
      ok: userResult.ok,
      response: userResult.result || userResult.error,
    });
    results.user = userResult;
  } else if (userMobile) {
    logWhatsApp({
      timestamp: new Date().toISOString(),
      form,
      recipient: "user",
      skipped: true,
      reason: "missing_user_template",
    });
  }

  return results;
}
