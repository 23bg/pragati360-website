
// src/lib/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1', // ✅ empty base URL — relative to the current domain
  headers: { "Content-Type": "application/json" },
  withCredentials: true,

  timeout: 5000
});

export default api;
