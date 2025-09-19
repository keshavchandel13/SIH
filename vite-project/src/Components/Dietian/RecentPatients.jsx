import React, { useState } from "react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";

export default function DashboardUser() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      {/* 🔍 Search Bar */}
      <div className="flex-1 max-w-md relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          placeholder="Search patients, diet plans..."
          className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 shadow-sm transition"
        />
      </div>

      {/* 🔔 User Actions */}
      <div className="flex items-center gap-5 ml-6 relative">
        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <FaBell className="h-5 w-5 text-gray-700" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center shadow">
            3
          </span>
        </button>

        {/* Settings */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <FaCog className="h-5 w-5 text-gray-700" />
        </button>

        {/* Profile */}
        <div
          className="flex items-center gap-3 cursor-pointer group relative"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Dr. Shivam"
            className="h-10 w-10 rounded-full border-2 border-emerald-400 group-hover:scale-105 transition-transform"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Dr. Shivam Sharma
            </p>
            <p className="text-xs text-gray-500">Ayurvedic Practitioner</p>
          </div>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
