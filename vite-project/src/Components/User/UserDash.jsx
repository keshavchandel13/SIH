import React from "react";
import { useState } from "react";
import { FaPlus, FaUtensils, FaHeartbeat, FaCommentDots, FaChartLine } from "react-icons/fa";
import { TodayMealsPanel } from "./TodayMealsPanel";
import { ProgressWidget } from "./ProgressWidget";
// import { MealDetailModal } from "./MealDetailModal";

const todaysMeals = [
  { id: "1", name: "Golden Turmeric Porridge", time: "8:00 AM", isUpcoming: true, isLogged: false },
  { id: "2", name: "Mung Dal Khichdi", time: "1:00 PM", isUpcoming: false, isLogged: false },
  { id: "3", name: "Spiced Vegetable Curry", time: "7:00 PM", isUpcoming: false, isLogged: false }
];

const dietitianInfo = {
  name: "Dr. Sharma",
  image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c",
  unreadMessages: 2
};

export default function UserDashboard() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealClick = (mealId) => setSelectedMeal(mealId);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Good Morning, {dietitianInfo.name.split(" ")[0]}!</h1>
          <p className="text-gray-500">Here's your wellness plan for today.</p>
        </div>

        {/* Today's Plan Widget */}
        <TodayMealsPanel meals={todaysMeals} onMealClick={handleMealClick} />

<<<<<<< HEAD
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Attended Sessions"
              value="24"
              change="+8 this month"
              changeType="positive"
              icon={FaUsers}
              iconColor="text-primary"
            />
            <StatCard
              title="Personalized Plan"
              value="7"
              change="+1 new plans"
              changeType="positive"
              icon={FaFileAlt}
              iconColor="text-secondary"
            />
            <StatCard
              title="Monthly Appointments"
              value="4"
              change="2 completed"
              changeType="positive"
              icon={FaCalendarAlt}
              iconColor="text-blue-600"
            />
            <StatCard
              title="Progress Reports"
              value="34"
              change="+7 pending review"
              changeType="positive"
              icon={FaChartBar}
              iconColor="text-green-600"
            />
          </div>
=======
        {/* Quick Action Buttons */}
        <div className="flex gap-4 mt-4 md:mt-6">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark">
            <FaUtensils /> Log Meal
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-secondary text-white rounded-lg shadow-md hover:bg-secondary-dark">
            <FaHeartbeat /> Log Symptom
          </button>
        </div>
>>>>>>> fbc084f034630eb39a40dc2a89966f27ed260cf6

        {/* Progress Snapshot */}
        <ProgressWidget />

        {/* Dietitian Contact Widget */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src={dietitianInfo.image}
              alt={dietitianInfo.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{dietitianInfo.name}</p>
              {dietitianInfo.unreadMessages > 0 && (
                <span className="text-xs text-red-500">{dietitianInfo.unreadMessages} unread messages</span>
              )}
            </div>
          </div>
          <button className="py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center gap-2">
            <FaCommentDots /> Chat
          </button>
        </div>
      </div>

      {/* Bottom Navigation for mobile */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t flex justify-around py-2">
        <button className="flex flex-col items-center text-primary">
          <FaChartLine className="w-5 h-5" />
          <span className="text-xs">Dashboard</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaUtensils className="w-5 h-5" />
          <span className="text-xs">Full Plan</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaCommentDots className="w-5 h-5" />
          <span className="text-xs">Chat</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaUser className="w-5 h-5" />
          <span className="text-xs">Profile</span>
        </button>
      </nav>

      {/* Meal Detail Modal */}
      {/* <MealDetailModal
        isOpen={!!selectedMeal}
        onClose={() => setSelectedMeal(null)}
        meal={selectedMeal ? todaysMeals.find((m) => m.id === selectedMeal) : null}
      />
        meal={selectedMealData}
      /> */}
    </div>
  );

