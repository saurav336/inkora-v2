
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Send notification to Inkora and confirmation to customer
export async function sendContactEmails({ name, email, need, details }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    throw new Error("SMTP credentials are missing.");
  }

  const businessEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

  // Email to Inkora
  await transporter.sendMail({
    from: `"Inkora Website" <${process.env.SMTP_USER}>`,
    to: businessEmail,
    replyTo: email,
    subject: `New Contact Inquiry: ${need}`,
    text: `
New contact form submission

Name: ${name}
Email: ${email}
Service: ${need}

Project Details:
${details || "No additional details provided."}
    `,
  });

  // Confirmation email to customer
  await transporter.sendMail({
    from: `"Inkora" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Thank you for contacting Inkora",
    text: `
Hi ${name},

Thank you for contacting Inkora!

We have received your project inquiry regarding:
${need}

Our team will review your request and get back to you within one business day.

Best regards,
Inkora Team
    `,
  });
}
