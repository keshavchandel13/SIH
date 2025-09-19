import React from "react";
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
  const mainNavItems = [
    { icon: FaHome, label: "Dashboard", active: true },
    {icon:FaCreditCard, label:"Dietitian"},
    { icon: FaCalendarAlt, label: "Diet Schedule", badge: "3" },
    // { icon: FaUsers, label: "My Patients", count: "248" },
    { icon: FaComments, label: "Messages", badge: "5" },
    { icon: FaVideo, label: "Sessions", count: "12" },
    // { icon: FaChartBar, label: "Analytics" },
    { icon: FaCreditCard, label: "Billing" },
  ];

  const bottomNavItems = [
    { icon: FaCog, label: "Settings" },
    { icon: FaSignOutAlt, label: "Sign Out" }
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
          <button
            key={index}
            className={`w-full flex items-center justify-start h-10 px-3 rounded-md transition ${
              item.active
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
          </button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t">
        <div className="space-y-1">
          {bottomNavItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-start h-10 px-3 rounded-md hover:bg-muted transition"
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
