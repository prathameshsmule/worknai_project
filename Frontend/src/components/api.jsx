// src/config/api.js
// Use Vite env var if set, otherwise fallback to your server IP (use https in production)
export const API_BASE =
  import.meta.env.VITE_API_URL ||
  // fallback to your server IP (use only for local/dev if you haven't set VITE_API_URL)
  "http://89.116.32.49:5000/api";
