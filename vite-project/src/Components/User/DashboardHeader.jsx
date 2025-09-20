import React from "react";
import { FaBell, FaSearch, FaChevronDown } from "react-icons/fa";

export function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-gradient-to-r from-emerald-50 to-green-100 border-b border-emerald-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        
        {/* Left side - Search */}
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-emerald-600" />
            <input
              type="text"
              placeholder="Search patients, meals, or recipes..."
              className="pl-10 w-full border border-emerald-300 rounded-lg px-3 py-2 text-sm 
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                         bg-white shadow-sm placeholder-emerald-400"
            />
          </div>
        </div>

        {/* Center - Date */}
        <div className="hidden md:block text-center">
          <p className="text-sm font-medium text-emerald-700">{currentDate}</p>
        </div>

        {/* Right side - Notifications and Profile */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-emerald-100 transition">
            <FaBell className="w-5 h-5 text-emerald-700" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full 
                             bg-red-500 text-white text-xs font-semibold 
                             flex items-center justify-center shadow-md">
              3
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg hover:bg-emerald-100 transition">
            <img
              src="https://i.pravatar.cc/100?u=shivamsharma"
              alt="Shivam Sharma"
              className="w-8 h-8 rounded-full border-2 border-emerald-400 object-cover"
            />
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-emerald-800">Shivam Sharma</p>
              <p className="text-xs text-emerald-600">Cricketer</p>
            </div>
            <FaChevronDown className="w-4 h-4 text-emerald-600 hidden md:block" />
          </div>
        </div>
      </div>
    </header>
  );
}
