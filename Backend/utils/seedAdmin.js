// utils/seedAdmin.js
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { connectDB } from "../config/db.js";

const run = async () => {
  try {
    // Connect to MongoDB (uses process.env.MONGO_URI)
    await connectDB(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");

    // Fetch admin details from .env (with fallback defaults)
    const email = process.env.SEED_ADMIN_EMAIL || "admin@worknai.com";
    const password = process.env.SEED_ADMIN_PASSWORD || "admin123";
    const name = process.env.SEED_ADMIN_NAME || "WorknAI Admin";
    const phone = process.env.SEED_ADMIN_PHONE || "0000000000";

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Upsert (create or update) admin user
    const admin = await User.findOneAndUpdate(
      { email, role: "admin" },
      {
        $set: {
          name,
          email,
          phone,
          password: hashedPassword,
          role: "admin",
          isActive: true,
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log("🌟 Admin User Created/Updated Successfully");
    console.log("-------------------------------------------------");
    console.log(`👤 Name: ${admin.name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`🔑 Password: ${password}`);
    console.log("-------------------------------------------------");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error Seeding Admin:", error);
    process.exit(1);
  }
};

run();
