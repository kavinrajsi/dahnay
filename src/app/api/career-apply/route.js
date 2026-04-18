import { NextResponse } from "next/server";
import { headers } from "next/headers";

const MAX_FILE_BYTES = 15 * 1024 * 1024;

function logEmail(entry) {
  console.log("[ZeptoMail Log]", JSON.stringify(entry));
}

function getClientIP(headersList) {
  return (
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown"
  );
}

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

    const {
      ZEPTOMAIL_URL,
      ZEPTOMAIL_TOKEN,
      ZEPTOMAIL_FROM_EMAIL,
      ZEPTOMAIL_FROM_NAME,
      ZEPTOMAIL_CAREER_APPLY_TO_EMAIL,
      ZEPTOMAIL_TO_NAME,
    } = process.env;

    if (
      !ZEPTOMAIL_URL ||
      !ZEPTOMAIL_TOKEN ||
      !ZEPTOMAIL_FROM_EMAIL ||
      !ZEPTOMAIL_FROM_NAME ||
      !ZEPTOMAIL_CAREER_APPLY_TO_EMAIL ||
      !ZEPTOMAIL_TO_NAME
    ) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const resumeBase64 = Buffer.from(await resume.arrayBuffer()).toString(
      "base64"
    );

    let utm = {};
    try {
      utm = utmRaw ? JSON.parse(utmRaw) : {};
    } catch {
      utm = {};
    }

    const utmHtml =
      Object.keys(utm).length > 0
        ? Object.entries(utm)
            .map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`)
            .join("")
        : "<p>N/A</p>";

    const fullName = `${firstName} ${lastName}`;

    const payload = {
      from: { address: ZEPTOMAIL_FROM_EMAIL, name: ZEPTOMAIL_FROM_NAME },
      to: [
        {
          email_address: {
            address: ZEPTOMAIL_CAREER_APPLY_TO_EMAIL,
            name: ZEPTOMAIL_TO_NAME,
          },
        },
      ],
      subject: jobTitle
        ? `Application for ${jobTitle} — ${fullName}`
        : `Job Application from ${fullName}`,
      htmlbody: `
        <h2>New Job Application</h2>
        ${jobTitle ? `<p><strong>Role:</strong> ${jobTitle}</p>` : ""}
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Current Location:</strong> ${location}</p>
        <hr />
        <h3>Tracking Info</h3>
        <p><strong>IP Address:</strong> ${ip}</p>
        <p><strong>Page URL:</strong> ${pageUrl || "N/A"}</p>
        <p><strong>Previous Page:</strong> ${previousPage || "N/A"}</p>
        <h4>UTM Parameters</h4>
        ${utmHtml}
      `,
      attachments: [
        {
          name: resume.name || "resume.pdf",
          content: resumeBase64,
          mime_type: "application/pdf",
        },
      ],
    };

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
      status: response.ok ? "sent" : "failed",
      zeptoResponse: result,
    });

    if (!response.ok) {
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
