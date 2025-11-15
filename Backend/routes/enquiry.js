// routes/enquiry.js
import express from "express";
import {
  createEnquiry,
  createContactEnquiry,
  listEnquiries,
  updateEnquiry,
  deleteEnquiry,
} from "../controllers/enquiryController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

/**
 * 🟢 Public: Create enquiry (for students)
 */
router.post("/", createEnquiry);

/**
 * 🟢 Public: Contact form enquiry
 */
router.post("/contact", createContactEnquiry);

/**
 * 🔐 Admin: Get all enquiries
 */
router.get("/", protect, adminOnly, listEnquiries);

/**
 * 🔐 Admin: Update enquiry (e.g., status or details)
 */
router.put("/:id", protect, adminOnly, updateEnquiry);

/**
 * 🔐 Admin: Delete enquiry
 */
router.delete("/:id", protect, adminOnly, deleteEnquiry);

export default router;
