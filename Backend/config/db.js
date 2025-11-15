// config/db.js
import mongoose from "mongoose";

export const connectDB = async (mongoURI) => {
  const uri =
    mongoURI || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/worknai";

  try {
    // No deprecated options needed on driver v4+
    await mongoose.connect(uri);

    console.log(
      "MongoDB connected:",
      uri.includes("mongodb+srv") ? "Atlas" : uri
    );
  } catch (err) {
    console.error("MongoDB connection error:", err.message || err);
    process.exit(1);
  }
};
