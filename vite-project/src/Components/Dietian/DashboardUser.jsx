import React from "react";
import { FaSearch, FaBell, FaCog, FaBars } from "react-icons/fa";
import Logo from "../Common/Logo.jsx";

export default function DashboardUser({ onMenuClick }) {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userName = user.name || "User";
  const userRole = user.role || "Role";

  return (
    <header className="flex items-center justify-between px-2 py-3 bg-emerald-700 backdrop-blur-md z-50 relative">
      <button onClick={onMenuClick} className="pl-2 pr-5">
        <FaBars className="text-white h-5 w-5"/>
      </button>

      <div className="hidden sm:flex items-center w-full">
        <Logo/>
        <span className="text-xl font-bold tracking-wide pl-2 text-white">AyurDiet</span>
      </div>
    
      {/* User Actions */}
      <div className="flex items-center gap-5 ml-6">
        <button className="relative p-2 rounded-full hover:bg-white transition">
          <FaSearch className=" h-4.5 w-4.5 text-white  hover:text-emerald-700"/>
        </button>

        <button className="relative p-2 rounded-full hover:bg-white transition">
          <FaBell className="h-5 w-5 text-white  hover:text-emerald-700" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center shadow">
            3
          </span>
        </button>

        <button className="p-2 rounded-full hover:bg-white transition">
          <FaCog className="h-5 w-5 text-white  hover:text-emerald-700" />
        </button>
      </div>
    </header>
  );
}

