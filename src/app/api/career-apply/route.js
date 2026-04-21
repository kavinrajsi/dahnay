import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { isValidEmail, isValidMobile } from "@/lib/validators";
import { escapeHtml, sanitizeSubject, buildTrackingHtml } from "@/lib/html";
import { getClientIP, logEmail, sendZeptoMail } from "@/lib/zeptomail";

const MAX_FILE_BYTES = 15 * 1024 * 1024;

export async function POST(request) {
  try {
    const headersList = await headers();
    const ip = getClientIP(headersList);
    const formData = await request.formData();

    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const mobile = formData.get("mobile")?.toString().trim();
    const experience = formData.get("experience")?.toString().trim();
    const location = formData.get("location")?.toString().trim();
    const jobTitle = formData.get("jobTitle")?.toString().trim() || "";
    const previousPage = formData.get("previousPage")?.toString() || "";
    const pageUrl = formData.get("pageUrl")?.toString() || "";
    const utmRaw = formData.get("utm")?.toString() || "";
    const resume = formData.get("resume");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobile ||
      !experience ||
      !location
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
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
    if (!resume || typeof resume === "string") {
      return NextResponse.json(
        { error: "Resume is required." },
        { status: 400 }
      );
    }
    if (resume.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Resume must be a PDF." },
        { status: 400 }
      );
    }
    if (resume.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: "Resume must be 15MB or smaller." },
        { status: 400 }
      );
    }

    let utm = {};
    try {
      utm = utmRaw ? JSON.parse(utmRaw) : {};
    } catch {
      utm = {};
    }

    const resumeBase64 = Buffer.from(await resume.arrayBuffer()).toString(
      "base64"
    );
    const fullName = `${firstName} ${lastName}`;

    const html = `
      <h2>New Job Application</h2>
      ${jobTitle ? `<p><strong>Role:</strong> ${escapeHtml(jobTitle)}</p>` : ""}
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
      <p><strong>Experience:</strong> ${escapeHtml(experience)}</p>
      <p><strong>Current Location:</strong> ${escapeHtml(location)}</p>
      ${buildTrackingHtml({ ip, pageUrl, previousPage, utm })}
    `;

    const { ok, configError, result } = await sendZeptoMail({
      toEmail: process.env.ZEPTOMAIL_CAREER_APPLY_TO_EMAIL,
      subject: sanitizeSubject(
        jobTitle
          ? `Application for ${jobTitle} — ${fullName}`
          : `Job Application from ${fullName}`
      ),
      html,
      attachments: [
        {
          name: resume.name || "resume.pdf",
          content: resumeBase64,
          mime_type: "application/pdf",
        },
      ],
    });

    if (configError) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    logEmail({
      timestamp: new Date().toISOString(),
      form: "career-apply",
      name: fullName,
      email,
      mobile,
      jobTitle,
      experience,
      location,
      resumeFilename: resume.name,
      resumeSize: resume.size,
      ip,
      utm,
      previousPage,
      pageUrl,
      status: ok ? "sent" : "failed",
      zeptoResponse: result,
    });

    if (!ok) {
      return NextResponse.json(
        { error: "Failed to send application.", details: result },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    logEmail({
      timestamp: new Date().toISOString(),
      form: "career-apply",
      status: "error",
      error: error.message,
    });
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
