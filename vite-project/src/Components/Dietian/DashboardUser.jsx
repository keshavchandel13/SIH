import React from "react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";

export default function DashboardUser() {
const user = JSON.parse(localStorage.getItem("user")) || {};
const userName = user.name || "User";
const userRole = user.role || "Role";

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* 🔍 Search Bar */}
      <div className="flex-1 max-w-md relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          placeholder="Search patients, diet plans..."
          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
        />
      </div>

      {/* 🔔 User Actions */}
      <div className="flex items-center gap-5 ml-6">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <FaBell className="h-5 w-5 text-gray-700" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center shadow">
            3
          </span>
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <FaCog className="h-5 w-5 text-gray-700" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src={`https://i.pravatar.cc/150?u=${userName}`} // dynamic
            alt={userName}
            className="h-10 w-10 rounded-full border-2 border-emerald-400 group-hover:scale-105 transition"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">{userName}</p>
            <p className="text-xs text-gray-500">{userRole}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
