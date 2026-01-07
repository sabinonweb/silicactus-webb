import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Find the project description field dynamically
    const projectKey = Object.keys(data).find((key) =>
      key.toLowerCase().includes("project")
    );
    const projectDescription = projectKey ? data[projectKey] : "N/A";

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
      replyTo: data["Your Email"] || undefined,
      subject: `New Contact Form Submission`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${data["Your Name"] || "N/A"}</p>
        <p><strong>Email:</strong> ${data["Your Email"] || "N/A"}</p>
        <p><strong>Company:</strong> ${data["Company name"] || "N/A"}</p>
        <p><strong>Services:</strong> ${data.services?.join(", ") || "N/A"}</p>
        <p><strong>Budget:</strong> ${data.budget || "N/A"}</p>
        <p><strong>About the project:</strong> ${projectDescription}</p>
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
