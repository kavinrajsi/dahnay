import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { isValidEmail } from "@/lib/validators";
import { escapeHtml, sanitizeSubject, buildTrackingHtml } from "@/lib/html";
import { getClientIP, logEmail, sendZeptoMail, maskEmail } from "@/lib/zeptomail";

export async function POST(request) {
  try {
    const headersList = await headers();
    const ip = getClientIP(headersList);
    const { email, utm, previousPage, pageUrl } = await request.json();

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    const html = `
      <h2>New Newsletter Subscription</h2>
      <p>The following address submitted the newsletter signup form. Please add them to the mailing list manually.</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${buildTrackingHtml({ ip, pageUrl, previousPage, utm })}
    `;

    const { ok, configError, result } = await sendZeptoMail({
      toEmail: process.env.ZEPTOMAIL_NEWSLETTER_TO_EMAIL,
      subject: sanitizeSubject(`Newsletter Subscription: ${maskEmail(email)}`),
      html,
    });

    if (configError) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    logEmail({
      timestamp: new Date().toISOString(),
      form: "newsletter",
      email,
      ip,
      utm: utm || {},
      previousPage: previousPage || "",
      pageUrl: pageUrl || "",
      status: ok ? "sent" : "failed",
      zeptoResponse: result,
    });

    if (!ok) {
      return NextResponse.json(
        { error: "Failed to send email.", details: result },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    logEmail({
      timestamp: new Date().toISOString(),
      form: "newsletter",
      status: "error",
      error: error.message,
    });
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
