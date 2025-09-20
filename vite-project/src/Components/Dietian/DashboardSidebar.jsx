import React from "react";
import { 
  FaHome, FaUsers, FaFileAlt, FaChartBar, FaCalendarAlt, FaCog, FaLeaf 
} from "react-icons/fa";

const navigation = [
  { name: "Home", href: "#", icon: FaHome, current: true },
  { name: "Patients", href: "#", icon: FaUsers, current: false },
  { name: "Diet Plans", href: "#", icon: FaFileAlt, current: false },
  { name: "Nutrient Analysis", href: "#", icon: FaChartBar, current: false },
  { name: "Appointments", href: "/appointment", icon: FaCalendarAlt, current: false },
  { name: "Settings", href: "#", icon: FaCog, current: false },
];

export function DashboardSidebar() {
const user = JSON.parse(localStorage.getItem("user")) || {};
const userName = user.name || "User";
const userRole = user.role || "Role";

  return (
    <div className="flex flex-col w-64 min-h-screen bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-800 text-white shadow-xl">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-6 border-b border-emerald-500/40">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
          <FaLeaf className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold tracking-wide">AyurDiet</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {navigation.map((item) => {
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
    </div>
  );
}
