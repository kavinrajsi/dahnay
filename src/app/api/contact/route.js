import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { isValidEmail, isValidMobile } from "@/lib/validators";
import { escapeHtml, sanitizeSubject, buildTrackingHtml } from "@/lib/html";
import { getClientIP, logEmail, sendZohoMail, sendConfirmation } from "@/lib/zohomail";

export async function POST(request) {
  try {
    const headersList = await headers();
    const ip = getClientIP(headersList);
    const {
      name,
      email,
      mobile,
      message,
      utm,
      previousPage,
      pageUrl,
      website,
    } = await request.json();

    if (website) {
      logEmail({
        timestamp: new Date().toISOString(),
        form: "contact",
        status: "honeypot",
        ip,
        website: String(website).slice(0, 200),
        previousPage: previousPage || "",
        pageUrl: pageUrl || "",
      });
      return NextResponse.json({ success: true });
    }

    if (!name?.trim() || !email?.trim() || !mobile?.trim()) {
      return NextResponse.json(
        { error: "Name, email and mobile are required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 }
      );
    }
    if (!isValidMobile(mobile)) {
      return NextResponse.json(
        { error: "Enter a valid mobile number." },
        { status: 400 }
      );
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
      <p><strong>Message:</strong> ${message ? escapeHtml(message) : "N/A"}</p>
      ${buildTrackingHtml({ ip, pageUrl, previousPage, utm })}
    `;

    const { ok, configError, result } = await sendZohoMail({
      toEmail: process.env.ZEPTOMAIL_TO_EMAIL,
      subject: sanitizeSubject(`New Inquiry from ${name}`),
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
      form: "contact",
      name,
      email,
      mobile,
      message: message || "",
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

    void sendConfirmation({
      toEmail: email,
      toName: name.trim(),
      subject: "We've received your enquiry — DahNAY",
      html: `
        <p>Hi ${escapeHtml(name.trim())},</p>
        <p>Thank you for reaching out to DahNAY. We've received your enquiry and our team will get back to you within 1–2 business days.</p>
        <p>If your matter is urgent, please call us or email <a href="mailto:info@dahnay.com">info@dahnay.com</a> directly.</p>
        <p>Best regards,<br>The DahNAY Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    logEmail({
      timestamp: new Date().toISOString(),
      form: "contact",
      status: "error",
      error: error.message,
    });
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
