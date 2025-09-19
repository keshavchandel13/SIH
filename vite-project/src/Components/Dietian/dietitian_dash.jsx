import { DashboardHeader } from "./components/dashboard-header";
import { DashboardSidebar } from "./components/dashboard-sidebar";
import { StatCard } from "./components/stat-card";
import { UpcomingAppointments } from "./components/upcoming-appointments";
import { RecentPatients } from "./components/recent-patients";

// React Icons (FontAwesome set as example)
import { FaUsers, FaFileAlt, FaCalendarAlt, FaChartBar } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader />

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Sharma!</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your patients today.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Patients"
              value="248"
              change="+12 this month"
              changeType="positive"
              icon={FaUsers}
              iconColor="text-primary"
            />
            <StatCard
              title="Active Diet Plans"
              value="89"
              change="+5 new plans"
              changeType="positive"
              icon={FaFileAlt}
              iconColor="text-accent"
            />
            <StatCard
              title="Appointments Today"
              value="8"
              change="2 completed"
              changeType="positive"
              icon={FaCalendarAlt}
              iconColor="text-blue-600"
            />
            <StatCard
              title="Nutrient Reports"
              value="34"
              change="+7 pending"
              changeType="positive"
              icon={FaChartBar}
              iconColor="text-green-600"
            />
          </div>

          {/* Bottom Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UpcomingAppointments />
            <RecentPatients />
          </div>
        </main>
      </div>
    </div>
  );
}
