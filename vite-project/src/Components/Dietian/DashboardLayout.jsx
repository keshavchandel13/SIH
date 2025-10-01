import {useState} from "react";
import DashboardHeader from "../Common/DashboardHeader.jsx";
import DashboardSidebar from "../Common/DashboardSidebar.jsx";
import { FaHome, FaUsers, FaFileAlt, FaCalendarAlt, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function DashboarLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigation = [
      { name: "Home", href: "#", icon: FaHome, current: true },
      { name: "Patients", href: "#", icon: FaUsers, current: false },
      { name: "Diet Plans", href: "#", icon: FaFileAlt, current: false },
      { name: "Nutrient Analysis", href: "#", icon: FaChartBar, current: false },
      { name: "Appointments", href: "/appointment", icon: FaCalendarAlt, current: false },
      { name: "Settings", href: "#", icon: FaCog, current: false },
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