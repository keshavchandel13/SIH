// src/api/auth.js
import axios from "axios";

// ✅ Base URL of your backend
const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // adjust if your backend runs elsewhere
});

// ✅ Login request
export const loginUser = async (email, password) => {
  return await API.post("/login", { email, password });
};

// ✅ Signup request
export const signupUser = async (data) => {
  return await API.post("/signup", data);
};

// ✅ Forgot password request
export const forgetPassword = async (email) => {
  return await API.post("/forget-password", { email });
};

// ✅ Reset password request
export const resetPassword = async (token, newPassword) => {
  return await API.post("/reset-password", { token, newPassword });
};
