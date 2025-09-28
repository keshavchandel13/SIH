import React, { useState } from "react";
import DashboardUser from "./DashboardUser";
import { DashboardSidebar } from "./DashboardSidebar";
import StatCard from './StatCard';
import { UpcomingAppointments } from "./UpcomingAppointments";
import { FaUsers, FaFileAlt, FaCalendarAlt, FaChartBar } from "react-icons/fa";

export default function DietitianDash() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <DashboardUser onMenuClick={toggleSidebar} /> 

      <DashboardSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/70 z-40"
        ></div>
      )}

      {/* Main Dashboard */}
      <main className="p-6 space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
            Welcome back, Dr. Sharma!
          </h1>
          <p className="text-gray-600 text-lg">
            Here's a quick overview of your patients and diet plans today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Patients"
            value="248"
            change="+12 this month"
            changeType="positive"
            icon={FaUsers}
            iconColor="bg-blue-100 text-blue-600"
          />
          <StatCard
            title="Active Diet Plans"
            value="89"
            change="+5 new plans"
            changeType="positive"
            icon={FaFileAlt}
            iconColor="bg-purple-100 text-purple-600"
          />
          <StatCard
            title="Appointments Today"
            value="8"
            change="2 completed"
            changeType="positive"
            icon={FaCalendarAlt}
            iconColor="bg-green-100 text-green-600"
          />
          <StatCard
            title="Nutrient Reports"
            value="34"
            change="+7 pending"
            changeType="positive"
            icon={FaChartBar}
            iconColor="bg-yellow-100 text-yellow-600"
          />
        </div>

        {/* Bottom Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 overflow-auto">
            <UpcomingAppointments />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 overflow-auto">
            <UpcomingAppointments/>
          </div>
        </div>
      </main>
    </div>
  );
}

