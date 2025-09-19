import React from "react";
import { Link, useLocation } from "react-router-dom"; // 👈 import Link
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
    <div className="w-64 bg-card border-r border-border flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <FaLeaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-serif text-lg">AyurDiet</h2>
            <p className="text-xs text-muted-foreground">Wellness Platform</p>
          </div>
        </div>
      </div>

      <hr className="border-border" />

      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {mainNavItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`w-full flex items-center justify-start h-10 px-3 rounded-md transition ${
              location.pathname === item.path
                ? "bg-secondary text-secondary-foreground"
                : "hover:bg-muted text-foreground"
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
              <span className="text-xs text-muted-foreground">{item.count}</span>
            )}
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t">
        <div className="space-y-1">
          {bottomNavItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="w-full flex items-center justify-start h-10 px-3 rounded-md hover:bg-muted transition"
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
