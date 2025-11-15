// src/config/api.js
// Use Vite env var if set, otherwise fallback to your server IP (use https in production)
// src/config/api.js

// Use .env if defined, else fallback
// src/config/api.js

export const API_BASE =
  process.env.REACT_APP_API_URL ||
  "https://worknai.online/api";
