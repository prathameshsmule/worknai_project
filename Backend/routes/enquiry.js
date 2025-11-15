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
 * 🟢 Public: Create enquiry (Student Enrollment Form)
 * Route: POST /api/enquiry
 */
router.post("/", createEnquiry);

/**
 * 🟢 Public: Contact form enquiry
 * Route: POST /api/enquiry/contact
 */
router.post("/contact", createContactEnquiry);

/**
 * 🔐 Admin: Get all enquiries
 * Route: GET /api/enquiry/all
 */
router.get("/all", protect, adminOnly, listEnquiries);

/**
 * 🔐 Admin: Update enquiry (status or details)
 * Route: PUT /api/enquiry/:id
 */
router.put("/:id", protect, adminOnly, updateEnquiry);

/**
 * 🔐 Admin: Delete enquiry
 * Route: DELETE /api/enquiry/:id
 */
router.delete("/:id", protect, adminOnly, deleteEnquiry);

export default router;
