import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const leadsToEmail = process.env.LEADS_TO_EMAIL || "joe.brokka@cimba.ai";
const leadsFromEmail = process.env.LEADS_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

type DemoRequestPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  role?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    if (!resend || !leadsToEmail || !leadsFromEmail) {
      return NextResponse.json(
        { error: "Server email configuration is incomplete." },
        { status: 500 }
      );
    }

    const payload = (await req.json()) as DemoRequestPayload;
    const firstName = clean(payload.firstName);
    const lastName = clean(payload.lastName);
    const email = clean(payload.email);
    const company = clean(payload.company);
    const role = clean(payload.role);
    const message = clean(payload.message);

    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid work email." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: leadsFromEmail,
      to: leadsToEmail,
      subject: `New demo request from ${firstName} ${lastName}`,
      replyTo: email,
      text: [
        "New demo request",
        "",
        `First name: ${firstName}`,
        `Last name: ${lastName}`,
        `Work email: ${email}`,
        `Company: ${company}`,
        `Role: ${role || "N/A"}`,
        "",
        "What are they looking to solve?",
        message || "N/A",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit demo request. Please try again." },
      { status: 500 }
    );
  }
}
