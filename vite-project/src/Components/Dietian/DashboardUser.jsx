import React from "react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";

export default function DashboardUser() {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      {/* Search Bar */}
      <div className="flex-1 max-w-md relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          placeholder="Search patients, diet plans..."
          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* User Profile and Notifications */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <FaBell className="h-5 w-5 text-gray-700" />
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Settings */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FaCog className="h-5 w-5 text-gray-700" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <img
            src="/api/placeholder/32/32"
            alt="Dr. Priya Sharma"
            className="h-8 w-8 rounded-full"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium">Dr. Priya Sharma</p>
            <p className="text-xs text-gray-500">Ayurvedic Practitioner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
