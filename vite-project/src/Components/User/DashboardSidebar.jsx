import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaCalendarAlt, 
  FaUsers, 
  FaComments, 
  FaVideo, 
  FaCreditCard, 
  FaChartBar, 
  FaCog, 
  FaSignOutAlt, 
  FaLeaf 
} from "react-icons/fa";

export function DashboardSidebar() {
  const location = useLocation();

  const mainNavItems = [
    { icon: FaHome, label: "Dashboard", path: "/dashboard" },
    { icon: FaCreditCard, label: "Dietitian", path: "/book" },
    { icon: FaCalendarAlt, label: "Diet Schedule", path: "/schedule", badge: "3" },
    { icon: FaComments, label: "Messages", path: "/messages", badge: "5" },
    { icon: FaVideo, label: "Sessions", path: "/sessions", count: "12" },
    { icon: FaCreditCard, label: "Billing", path: "/billing" },
  ];

  const bottomNavItems = [
    { icon: FaCog, label: "Settings", path: "/settings" },
    { icon: FaSignOutAlt, label: "Sign Out", path: "/logout" }
  ];

  return (
    <div className="w-64 flex flex-col h-screen text-white 
      bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-800 shadow-lg">
      
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <FaLeaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-serif text-lg font-bold">AyurDiet</h2>
            <p className="text-xs text-white/70">Wellness Platform</p>
          </div>
        </div>
      </div>

      <hr className="border-emerald-500/40" />

      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {mainNavItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`w-full flex items-center justify-start h-10 px-3 rounded-md transition ${
              location.pathname === item.path
                ? "bg-white/20 border-l-4 border-yellow-300 text-yellow-200 shadow-md"
                : "hover:bg-white/10 text-white/80 hover:text-yellow-100"
            }`}
          >
            <item.icon className="w-4 h-4 mr-3" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="ml-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
            {item.count && (
              <span className="text-xs text-white/60">{item.count}</span>
            )}
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-emerald-500/40">
        <div className="space-y-1">
          {bottomNavItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="w-full flex items-center justify-start h-10 px-3 rounded-md hover:bg-white/10 transition text-white/80 hover:text-yellow-100"
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
