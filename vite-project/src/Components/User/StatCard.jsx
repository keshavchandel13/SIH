import React from "react";
export function StatCard({ title, value, change, changeType, icon: Icon, iconColor = "text-primary" }) {
  const changeColor =
    changeType === "positive"
      ? "text-green-600"
      : changeType === "negative"
      ? "text-red-600"
      : "text-muted-foreground";

  return (
    <div className="bg-card rounded-lg shadow p-4 hover:shadow-md transition">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div className="mt-2">
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${changeColor}`}>{change}</p>
      </div>
    </div>
  );
}
