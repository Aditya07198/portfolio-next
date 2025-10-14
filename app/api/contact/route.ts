import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const data = schema.parse(await req.json());

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1️⃣ Send email to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${data.name}`,
      html: `
        <h3>New message via portfolio</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Message:</b><br>${data.message}</p>
      `,
    });

    // 2️⃣ Auto-reply to sender
    await transporter.sendMail({
      from: `"Adityakumar Galiara" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "Thanks for reaching out!",
      html: `
        <p>Hi ${data.name},</p>
        <p>Thanks for contacting me! I’ve received your message:</p>
        <blockquote>${data.message}</blockquote>
        <p>I’ll reply to you soon.</p>
        <p>— Adityakumar Galiara</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
