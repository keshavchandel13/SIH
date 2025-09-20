import React from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 bg-white/60 backdrop-blur-sm rounded-tl-3xl shadow-inner overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
