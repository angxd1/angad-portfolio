import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isEmail(input: string) {
  // Intentionally simple: good enough for client-side contact forms.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

function normalize(input: unknown) {
  return typeof input === "string" ? input.trim() : "";
}

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail =
    process.env.CONTACT_TO_EMAIL ?? "Singa401@mcmaster.ca";
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey) {
    return NextResponse.json(
      { ok: false, error: "Server is missing RESEND_API_KEY." },
      { status: 500 }
    );
  }
  if (!contactFromEmail) {
    return NextResponse.json(
      { ok: false, error: "Server is missing CONTACT_FROM_EMAIL." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON." },
      { status: 400 }
    );
  }

  const { name, email, message } = (body ?? {}) as Partial<ContactPayload>;

  const payload: ContactPayload = {
    name: normalize(name),
    email: normalize(email),
    message: normalize(message),
  };

  if (payload.name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name." },
      { status: 400 }
    );
  }
  if (!isEmail(payload.email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email." },
      { status: 400 }
    );
  }
  if (payload.message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Message is too short." },
      { status: 400 }
    );
  }
  if (payload.message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "Message is too long." },
      { status: 400 }
    );
  }

  const resend = new Resend(resendApiKey);

  const subject = `Portfolio contact: ${payload.name}`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    payload.message,
  ].join("\n");

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: payload.email,
      subject,
      text,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

