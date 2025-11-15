// controllers/adminController.js
import bcrypt from "bcryptjs";
import User from "../models/User.js";

/**
 * POST /api/admin/users
 * Create user or admin by existing admin
 */
export const createUserByAdmin = async (req, res) => {
  try {
    const { name, phone, email, role, password, AddharNo, address, documents } =
      req.body;

    if (!name || !phone || !role) {
      return res.status(400).json({ message: "name, phone and role required" });
    }

    if (email) {
      const existing = await User.findOne({ email });
      if (existing)
        return res.status(409).json({ message: "Email already in use" });
    }

    let hashed;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashed = await bcrypt.hash(password, salt);
    }

    const user = new User({
      name,
      phone,
      email: email || undefined,
      role,
      password: hashed,
      AddharNo,
      address,
      documents,
    });

    await user.save();
    res.status(201).json({ message: "User created by admin", user });
  } catch (err) {
    console.error("Error creating user by admin:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/admin/users/:role
 * Get all users by role (driver, vendor, admin, etc.)
 */
export const listByCategory = async (req, res) => {
  const role = req.params.role;
  const { page = 1, limit = 20, search } = req.query;

  try {
    const query = {};
    if (role && role !== "all") query.role = role;

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await User.countDocuments(query);
    const users = await User.find(query)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    res.json({
      role: role || "all",
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      users,
    });
  } catch (err) {
    console.error("Error listing users:", err);
    res.status(500).json({ message: "Error fetching users" });
  }
};

/**
 * GET /api/admin/stats
 * Count all users by role
 */
export const getStats = async (_req, res) => {
  try {
    const roles = ["driver", "vendor", "mechanic", "cleaner", "admin"];
    const counts = {};
    await Promise.all(
      roles.map(async (r) => {
        counts[r] = await User.countDocuments({ role: r });
      })
    );
    const total = await User.countDocuments({});
    res.json({ total, counts });
  } catch (err) {
    console.error("Error fetching stats:", err);
    res.status(500).json({ message: "Error fetching stats" });
  }
};

/**
 * GET /api/admin/user/:id
 */
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Error fetching user" });
  }
};

/**
 * PUT /api/admin/user/:id
 * Update user or admin
 */
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    if (updates.email) {
      const existing = await User.findOne({
        email: updates.email,
        _id: { $ne: id },
      });
      if (existing)
        return res.status(409).json({ message: "Email already in use" });
    }

    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    } else {
      delete updates.password;
    }

    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
    }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated successfully", user });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Error updating user" });
  }
};

/**
 * DELETE /api/admin/user/:id
 */
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Error deleting user" });
  }
};
