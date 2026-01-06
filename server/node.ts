"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);

export type ContactFormData = {
  services: string[];
  name: string;
  email: string;
  organization: string;
  message: string;
  budget: string;
};

export async function sendContactEmail(formData: ContactFormData) {
  const { error } = await resend.emails.send({
    from: "Silicactus Contact <onboarding@resend.dev>",
    to: ["business.silicactus@gmail.com"],
    subject: `New Contact Form Submission from ${formData.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Organization:</strong> ${formData.organization}</p>
      <p><strong>Services:</strong> ${formData.services.join(", ")}</p>
      <p><strong>Budget:</strong> ${formData.budget}</p>
      <p>${formData.message}</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
