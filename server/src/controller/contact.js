import Contact from "../model/contact.js";
import createHttpError from "http-errors";
import { sendEmail } from "../utils/email.js";

export const contactUs = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return next(createHttpError(400, "All field are required"));
    }
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        await sendEmail({
          to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject.replace(/\n/g, "<br>")}</p>
            <p><strong>Message:</strong> ${message.replace(/\n/g, "<br>")}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError.message);
      }
    }

    res.status(201).json({
      success: true,
      message: "Message created successfully",
      contact: {
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
      },
    });
  } catch (error) {
    next(error);
  }
};
