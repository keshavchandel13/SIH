import React from "react";

export default function StatCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  iconColor = "text-blue-500"
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {Icon && <Icon className={`h-5 w-5 ${iconColor}`} />}
      </div>

      {/* Content */}
      <div>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p
            className={`text-xs mt-1 ${
              changeType === "positive" ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </p>
        )}
      </div>
    </div>
  );
}
