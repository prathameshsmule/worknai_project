import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    // Common Fields (for all types of enquiries)
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required"],
      trim: true,
      match: [/^[0-9]{10}$/, "Please provide a valid 10-digit phone number"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },

    // Student Enquiry Fields
    course: {
      type: String,
      trim: true,
      default: null,
    },

    // Company Enquiry Fields (for future use)
    companyName: {
      type: String,
      trim: true,
      default: null,
    },
    companyDetails: {
      type: String,
      trim: true,
      default: null,
    },
    companyAddress: {
      type: String,
      trim: true,
      default: null,
    },
    contactPersonName: {
      type: String,
      trim: true,
      default: null,
    },

    // Enquiry Type (to differentiate between Student / Company)
    enquiryType: {
      type: String,
      enum: ["Student", "Company", "Contact"], // ✅ added "Contact"
      default: "Student",
    },

    // Enquiry Status (for admin tracking)
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved", "Closed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Enquiry", enquirySchema);
