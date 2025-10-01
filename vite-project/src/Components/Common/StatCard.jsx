import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function StatCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon,
  iconColor = "bg-blue-100 text-blue-600"
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
        {Icon && (
          <div className={`p-2 rounded-full ${iconColor} flex items-center justify-center`}>
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>

      {/* Value */}
      <div className="text-3xl font-bold text-gray-800">{value}</div>

      {/* Change */}
      {change && (
        <div className="flex items-center mt-2 text-sm font-medium">
          {changeType === "positive" ? (
            <FaArrowUp className="text-green-600 mr-1" />
          ) : (
            <FaArrowDown className="text-red-600 mr-1" />
          )}
          <span className={changeType === "positive" ? "text-green-600" : "text-red-600"}>
            {change}
          </span>
        </div>
      )}
    </div>
  );
}
