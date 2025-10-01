import { useState } from "react";
import { signupUser } from "../api/auth"; // 👈 import API

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", // role field already in state
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser(signupData);
      console.log("Signup success:", res.data);

      alert("Account created successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
      
      {/* 🌿 Ayurved Logo */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/finlog.jpg"
          alt="Ayurved Logo"
          className="h-16 w-16 mb-3"
        />
        <h1 className="text-3xl font-bold text-emerald-700">AyurDiet</h1>
        <p className="text-gray-600 text-center mt-1">
          Begin your journey to holistic wellness
        </p>
      </div>

      {/* Signup Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Create an Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-5">
          
          {/* Full Name */}
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={signupData.name}
            onChange={(e) =>
              setSignupData({ ...signupData, name: e.target.value })
            }
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={signupData.email}
            onChange={(e) =>
              setSignupData({ ...signupData, email: e.target.value })
            }
            required
          />

          {/* Role Selection */}
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={signupData.role}
            onChange={(e) =>
              setSignupData({ ...signupData, role: e.target.value })
            }
            required
          >
            <option value="" disabled>
              Select your role
            </option>
            <option value="Doctor">Doctor</option>
            <option value="Patient">Patient</option>
          </select>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-emerald-600 font-semibold hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
