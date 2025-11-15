// src/config/api.js
// Use Vite env var if set, otherwise fallback to your server IP (use https in production)
// src/config/api.js

// Use .env if defined, else fallback
export const API_BASE =
  process.env.REACT_APP_API_URL ||
  "http://api.worknai.online/api";
