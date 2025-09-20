import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 for navigation
import { loginUser } from "../api/auth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(loginData.email, loginData.password);
      console.log("Login success:", res.data);

      // ✅ Store token & role
      localStorage.setItem("token", res.data.user.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Login successful!");

      // ✅ Redirect based on role
      if (res.data.user.role === "Doctor") {
        navigate("/doc");
      } else if (res.data.user.role === "Patient") {
        navigate("/user");
      } else {
        navigate("/"); // fallback
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
      {/* 🌿 Ayurved Logo */}
      <div className="flex flex-col items-center mb-8">
        <img src="/finlog.jpg" alt="Ayurved Logo" className="h-16 w-16 mb-3" />
        <h1 className="text-3xl font-bold text-emerald-700">AyurDiet</h1>
        <p className="text-gray-600 text-center mt-1">
          Ancient Wisdom for Modern Wellness
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-emerald-600 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
