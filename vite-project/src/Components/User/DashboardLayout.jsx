import {useState} from "react";
import DashboardHeader from "../Common/DashboardHeader.jsx";
import DashboardSidebar from "../Common/DashboardSidebar.jsx";
import { FaHome, FaCreditCard, FaCalendarAlt, FaComments, FaVideo, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigation = [
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
    <div>
        <DashboardHeader onMenuClick={toggleSidebar} /> 
        <DashboardSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} mainNav={navigation} bottomNav={bottomNavItems}/>
  
        {isSidebarOpen && (
          <div 
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/70 z-40"
          ></div>
        )}
    </div>
  );
}