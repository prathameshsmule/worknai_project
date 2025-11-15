// routes/auth.js
import express from "express";
import { registerUser, adminLogin } from "../controllers/authController.js";

const router = express.Router();

// public registration
router.post("/register", registerUser);

// admin login
router.post("/admin/login", adminLogin);

export default router;
