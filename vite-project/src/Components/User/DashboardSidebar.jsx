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
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userName = user.name || "User";
  const userRole = user.role || "Role";

  const mainNavItems = [
    { icon: FaHome, name: "Dashboard", path: "/dashboard" },
    { icon: FaCreditCard, name: "Dietitian", path: "/book" },
    { icon: FaCreditCard, name: "AI Diet", path: "/aidiet" },
    { icon: FaCalendarAlt, name: "Diet Schedule", path: "/schedule", badge: "3" },
    { icon: FaComments, name: "Messages", path: "/messages", badge: "5" },
    { icon: FaVideo, name: "Sessions", path: "/sessions", count: "12" },
    { icon: FaCreditCard, name: "Billing", path: "/billing" },
  ];

  const bottomNavItems = [
    { icon: FaCog, label: "Settings", path: "/settings" },
    { icon: FaSignOutAlt, label: "Sign Out", path: "/logout" }
  ];

  return (
    <div className="w-64 flex flex-col h-screen text-white bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-800 shadow-lg sticky top-0">
      
      {/* Logo Section */}
            <div className="flex items-center gap-3 p-6 border-b border-emerald-500/40">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
                <FaLeaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-wide">AyurDiet</span>
            </div>

      <hr className="border-emerald-500/40" />

      {/* Main Navigation */}
      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300
                    ${item.current 
                      ? "bg-white/20 border-l-4 border-yellow-300 text-yellow-200 shadow-md" 
                      : "text-white/80 hover:bg-white/10 hover:text-yellow-100"
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Footer / Profile */}
      <div className="p-4 border-t border-emerald-500/40">
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/150?u=${userName}`} // dynamic placeholder
            alt={userName}
            className="w-10 h-10 rounded-full border-2 border-yellow-300"
          />
          <div>
            <p className="text-sm font-semibold">{userName}</p>
            <p className="text-xs text-white/70">{userRole}</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-0 pl-1.5 border-emerald-500/40">
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
