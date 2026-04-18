import { NextResponse } from "next/server";
import { headers } from "next/headers";

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
    const { name, email, mobile, message, utm, previousPage, pageUrl } =
      await request.json();

    if (!name || !email || !mobile) {
      return NextResponse.json(
        { error: "Name, email and mobile are required." },
        { status: 400 }
      );
    }

    const {
      ZEPTOMAIL_URL,
      ZEPTOMAIL_TOKEN,
      ZEPTOMAIL_FROM_EMAIL,
      ZEPTOMAIL_FROM_NAME,
      ZEPTOMAIL_TO_EMAIL,
      ZEPTOMAIL_TO_NAME,
    } = process.env;

    if (
      !ZEPTOMAIL_URL ||
      !ZEPTOMAIL_TOKEN ||
      !ZEPTOMAIL_FROM_EMAIL ||
      !ZEPTOMAIL_FROM_NAME ||
      !ZEPTOMAIL_TO_EMAIL ||
      !ZEPTOMAIL_TO_NAME
    ) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const utmHtml = utm && Object.keys(utm).length > 0
      ? Object.entries(utm)
          .map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`)
          .join("")
      : "<p>N/A</p>";

    const payload = {
      from: {
        address: ZEPTOMAIL_FROM_EMAIL,
        name: ZEPTOMAIL_FROM_NAME,
      },
      to: [
        {
          email_address: {
            address: ZEPTOMAIL_TO_EMAIL,
            name: ZEPTOMAIL_TO_NAME,
          },
        },
      ],
      subject: `New Inquiry from ${name}`,
      htmlbody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
        <hr />
        <h3>Tracking Info</h3>
        <p><strong>IP Address:</strong> ${ip}</p>
        <p><strong>Page URL:</strong> ${pageUrl || "N/A"}</p>
        <p><strong>Previous Page:</strong> ${previousPage || "N/A"}</p>
        <h4>UTM Parameters</h4>
        ${utmHtml}
      `,
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

    const logEntry = {
      timestamp: new Date().toISOString(),
      name,
      email,
      mobile,
      message: message || "",
      ip,
      utm: utm || {},
      previousPage: previousPage || "",
      pageUrl: pageUrl || "",
      status: response.ok ? "sent" : "failed",
      zeptoResponse: result,
    };
    logEmail(logEntry);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send email.", details: result },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    logEmail({
      timestamp: new Date().toISOString(),
      status: "error",
      error: error.message,
    });
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
