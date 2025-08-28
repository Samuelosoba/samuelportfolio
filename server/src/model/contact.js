import { Schema, model } from "mongoose";
const contactSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "email is required"],
    },
    subject: {
      type: String,
      trim: true,
      required: [true, "subject is required"],
    },
    message: {
      type: String,
      trim: true,
      required: [true, "message is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Contact = model("Contact", contactSchema);
export default Contact;
