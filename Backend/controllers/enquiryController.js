import Enquiry from "../models/Enquiry.js";

/* ----------------- Create Student Enquiry ----------------- */
export const createEnquiry = async (req, res) => {
  try {
    const b = req.body || {};
    const contactNumber = b.contactNo || b.phone;

    if (!b.name || !b.email || !contactNumber || !b.address || !b.course) {
      return res.status(400).json({
        message:
          "All fields (name, email, contactNo/phone, address, course) are required",
      });
    }

    const enquiry = await Enquiry.create({
      name: b.name.trim(),
      email: b.email.trim(),
      contactNo: contactNumber.trim(),
      address: b.address.trim(),
      course: b.course.trim(),
      enquiryType: "Student",
      status: "Pending",
    });

    res.status(201).json({
      message: "Student Enquiry created successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/* ----------------- Create Contact Enquiry ----------------- */
export const createContactEnquiry = async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !email) {
      return res
        .status(400)
        .json({ message: "Name, phone, and email are required" });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      contactNo: phone,
      address: message || "No address provided",
      course: subject || "General Enquiry",
      enquiryType: "Contact",
      status: "Pending",
    });

    res.status(201).json({
      message: "Contact form submitted successfully",
      enquiry,
    });
  } catch (error) {
    console.error("Error creating contact enquiry:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/* ----------------- List All Enquiries ----------------- */
export const listEnquiries = async (_req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries); // IMPORTANT
  } catch (err) {
    console.error("Error fetching enquiries:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

/* ----------------- Update enquiry ----------------- */
export const updateEnquiry = async (req, res) => {
  try {
    const updated = await Enquiry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Enquiry not found" });
    res.json({ message: "Enquiry updated successfully", updated });
  } catch (err) {
    console.error("Error updating enquiry:", err);
    res
      .status(500)
      .json({ message: "Error updating enquiry", error: err.message });
  }
};

/* ----------------- Delete enquiry ----------------- */
export const deleteEnquiry = async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Enquiry deleted successfully" });
  } catch (err) {
    console.error("Error deleting enquiry:", err);
    res
      .status(500)
      .json({ message: "Error deleting enquiry", error: err.message });
  }
};
