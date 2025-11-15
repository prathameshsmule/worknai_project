import express from "express";
import {
  createUserByAdmin,
  listByCategory,
  getStats,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

// 🛡️ All routes below require admin access
router.use(protect, adminOnly);

// ➕ Create user (admin, student, etc.)
router.post("/users", createUserByAdmin);

// 👑 Get all admins
router.get("/admins", async (req, res) => {
  try {
    const User = (await import("../models/User.js")).default;
    const admins = await User.find({ role: "admin" }).select("-password");
    res.json({ total: admins.length, admins });
  } catch (err) {
    res.status(500).json({ message: "Error fetching admins", err });
  }
});

// ✏️ Update an admin
router.put("/admin/:id", async (req, res) => {
  try {
    const User = (await import("../models/User.js")).default;
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("-password");
    if (!updated) return res.status(404).json({ message: "Admin not found" });
    res.json({ message: "Admin updated", updated });
  } catch (err) {
    console.error("Error updating admin:", err);
    res.status(500).json({ message: "Error updating admin", err });
  }
});

// ❌ Delete an admin
router.delete("/admin/:id", async (req, res) => {
  try {
    const User = (await import("../models/User.js")).default;
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Admin not found" });
    res.json({ message: "Admin deleted" });
  } catch (err) {
    console.error("Error deleting admin:", err);
    res.status(500).json({ message: "Error deleting admin", err });
  }
});

// 📋 Other management routes
router.get("/users/:role", listByCategory);
router.get("/stats", getStats);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
