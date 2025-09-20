import React from "react";
import { FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const mockPatients = [
  {
    id: "1",
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODMwMTM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lastActivity: "2 hours ago",
    compliance: 85,
    complianceTrend: "up",
    doshaType: "Vata",
    hasUnreadMessages: true
  },
  {
    id: "2",
    name: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTgzMDEzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lastActivity: "1 day ago",
    compliance: 92,
    complianceTrend: "up",
    doshaType: "Pitta",
    hasUnreadMessages: false
  },
  {
    id: "3",
    name: "Emma Wilson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhY2V8ZW58MXx8fHwxNzU4MzAxMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lastActivity: "3 hours ago",
    compliance: 78,
    complianceTrend: "down",
    doshaType: "Kapha",
    hasUnreadMessages: true
  },
  {
    id: "4",
    name: "David Rodriguez",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmYWNlfGVufDF8fHx8MTc1ODMwMTM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lastActivity: "5 hours ago",
    compliance: 88,
    complianceTrend: "stable",
    doshaType: "Vata-Pitta",
    hasUnreadMessages: false
  }
];

export function RecentPatients() {
  return (
    <div className="bg-card rounded-lg shadow p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-md font-medium">Recent Patient Activity</h3>
        <button className="text-sm px-3 py-1 border rounded-md hover:bg-muted transition">
          View All
        </button>
      </div>

      {/* Patients List */}
      <div className="space-y-4">
        {mockPatients.map((patient) => (
          <div
            key={patient.id}
            className="flex items-center gap-3 p-3 rounded-lg border"
          >
            <div className="relative">
              {/* <ImageWithFallback
                src={patient.image}
                alt={patient.name}
                className="w-10 h-10 rounded-full object-cover"
              /> */}
              {patient.hasUnreadMessages && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                  <FaComment className="w-2 h-2 text-white" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{patient.name}</h4>
                <span className="text-xs px-2 py-0.5 border rounded-full bg-muted text-muted-foreground">
                  {patient.doshaType}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>Last activity: {patient.lastActivity}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 justify-end">
                <span className="text-sm font-medium">{patient.compliance}%</span>
                {patient.complianceTrend === "up" && (
                  <FaArrowUp className="w-3 h-3 text-green-600" />
                )}
                {patient.complianceTrend === "down" && (
                  <FaArrowDown className="w-3 h-3 text-red-600" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">Compliance</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
