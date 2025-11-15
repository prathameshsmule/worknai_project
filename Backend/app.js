// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors";
import { connectDB } from "./config/db.js";
import enquiryRoutes from "./routes/enquiry.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

// --- Connect to MongoDB ---
connectDB(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/worknai");

// --- Base Route ---
app.get("/", (_req, res) => res.send("✅ WorknAI Backend Running..."));

// --- API Routes ---
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/enquiry", enquiryRoutes);

// --- Error Handler Middleware ---
app.use(errorHandler);

// --- Start Server (with fallback port + graceful shutdown) ---
const startServer = async (desiredPort) => {
  let port = desiredPort;

  const server = app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`);
  });

  // Handle port conflicts
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.warn(`⚠️  Port ${port} in use, trying ${port + 1}...`);
      port += 1;
      startServer(port);
    } else {
      console.error("❌ Server error:", err);
      process.exit(1);
    }
  });

  // Graceful shutdown
  const shutdown = () => {
    console.log("🛑 Shutting down server...");
    server.close(() => {
      console.log("✅ Server stopped cleanly.");
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
};

// --- Initial Port Start ---
const initialPort = parseInt(process.env.PORT || "5000", 10);
startServer(initialPort);
