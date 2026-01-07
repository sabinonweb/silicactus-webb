import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "business.silicactus@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "business.silicactus@gmail.com",
      to: "business.silicactus@gmail.com",
      replyTo: data["Your Email"],
      subject: `New Contact Form Submission`,
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${data["Your Name"] || "N/A"}</p>
        <p><b>Email:</b> ${data["Your Email"] || "N/A"}</p>
        <p><b>Company:</b> ${data["Company name"] || "N/A"}</p>
        <p><b>Services:</b> ${data.services?.join(", ")}</p>
        <p><b>Budget:</b> ${data.budget}</p>
        <p><b>Message:</b><br/>${data["Tell us about your project"]}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
