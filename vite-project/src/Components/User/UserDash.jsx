
import React, { useState } from "react";
import { FaAppleAlt, FaCalendarCheck, FaFistRaised, FaHeartbeat, FaRegClock } from "react-icons/fa";
import { HiX } from 'react-icons/hi';

// Child Components (Assuming these exist)
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";

import React from "react";
import { useState } from "react";
import { FaUsers, FaFileAlt, FaCalendarAlt, FaChartBar, FaChartLine, FaClock } from "react-icons/fa";
// import { DashboardHeader } from "./DashboardHeader";
// import { DashboardSidebar } from "./DashboardSidebar";

import { StatCard } from "./StatCard";

// --- MOCK DATA ---
const todaysMeals = [
  { id: "1", name: "Golden Turmeric Porridge", time: "8:00 AM", isUpcoming: false, isLogged: true },
  { id: "2", name: "Mung Dal Khichdi", time: "1:00 PM", isUpcoming: true, isLogged: false },
  { id: "3", name: "Spiced Vegetable Curry", time: "7:00 PM", isUpcoming: false, isLogged: false },
];

const mealDetails = {
  "2": {
    name: "Mung Dal Khichdi",
    time: "1:00 PM",
    description: "A complete, easy-to-digest meal that balances all three doshas. This traditional Ayurvedic dish is perfect for cleansing and nourishing the body.",
    prepTime: "30 mins",
    servings: 2,
    doshaBalance: "Tridoshic (All Doshas)",
    ingredients: [ "1/2 cup split mung dal (yellow)", "1/4 cup basmati rice", "1 tsp ghee", "1/2 tsp cumin seeds", "1/4 tsp turmeric powder", "1 inch fresh ginger, minced", "2 cups water", "Salt to taste", "Fresh cilantro for garnish" ],
    instructions: [ "Wash and soak mung dal and rice together for 15 minutes.", "Heat ghee in a pot over medium heat. Add cumin seeds and let them splutter.", "Add minced ginger and sauté for 30 seconds until fragrant.", "Drain and add the soaked dal and rice. Stir gently for 2 minutes.", "Add turmeric powder and salt. Mix well.", "Add water and bring to a boil. Reduce heat and simmer covered for 20-25 minutes.", "Stir occasionally until the mixture becomes soft and porridge-like.", "Garnish with fresh cilantro and serve warm." ]
  }
};
const upcomingAppointmentsData = [
    { name: "Follow-up Consultation", time: "Sept 22nd, 4:00 PM", doctor: "Dr. Sharma" },
];

// --- Mock Child Components for Demonstration ---
const TodayMealsPanel = ({ meals, onMealClick }) => (
    <div className="space-y-4 h-full">
        <h2 className="text-xl font-bold text-gray-800">Today's Meals</h2>
        {meals.map(meal => (
            <div key={meal.id} className={`p-4 rounded-lg flex justify-between items-center cursor-pointer hover:shadow-md transition-shadow ${meal.isUpcoming ? 'bg-yellow-100 border-l-4 border-yellow-500' : 'bg-gray-100'}`} onClick={() => onMealClick(meal.id)}>
                <div>
                    <p className="font-semibold text-gray-700">{meal.name}</p>
                    <p className="text-sm text-gray-600 flex items-center"><FaRegClock className="mr-2"/>{meal.time}</p>
                </div>
                {meal.isLogged ? <span className="text-xs font-bold text-green-600 bg-green-100 py-1 px-3 rounded-full">LOGGED</span> : <button className="text-xs font-bold text-blue-600 bg-blue-100 py-1 px-3 rounded-full hover:bg-blue-200">LOG MEAL</button>}
            </div>
        ))}
    </div>
);
const UpcomingAppointments = () => (
    <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Upcoming Appointments</h2>
        {upcomingAppointmentsData.map((appt, i) => (
            <div key={i} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold text-gray-700">{appt.name}</p>
                <p className="text-sm text-gray-600">{appt.time}</p>
            </div>
        ))}
    </div>
);
const ProgressWidget = () => (
    <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Wellness Score</h2>
        <div className="bg-gray-200 rounded-full h-2.5">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '82%'}}></div>
        </div>
        <p className="text-center mt-2 text-sm text-gray-600">Score: 82 (+5 from last week)</p>
    </div>
);
const MealDetailModal = ({ isOpen, onClose, meal }) => {
    if (!isOpen || !meal) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
                <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center"><h2 className="text-2xl font-bold text-gray-800">{meal.name}</h2><button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-800"><HiX /></button></div>
                <div className="p-6 space-y-6"><p className="text-gray-600">{meal.description}</p><div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"><div className="bg-gray-100 p-3 rounded-lg"><p className="font-bold text-sm text-gray-700">Prep Time</p><p className="text-gray-600">{meal.prepTime}</p></div><div className="bg-gray-100 p-3 rounded-lg"><p className="font-bold text-sm text-gray-700">Servings</p><p className="text-gray-600">{meal.servings}</p></div><div className="bg-gray-100 p-3 rounded-lg col-span-2"><p className="font-bold text-sm text-gray-700">Dosha Balance</p><p className="text-gray-600">{meal.doshaBalance}</p></div></div><div><h3 className="text-xl font-semibold mb-2 text-gray-800">Ingredients</h3><ul className="list-disc list-inside space-y-1 text-gray-700">{meal.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}</ul></div><div><h3 className="text-xl font-semibold mb-2 text-gray-800">Instructions</h3><ol className="list-decimal list-inside space-y-2 text-gray-700">{meal.instructions.map((step, index) => <li key={index}>{step}</li>)}</ol></div></div>
            </div>
        </div>
    );
};


export default function UserDashboard() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const handleMealClick = (mealId) => { setSelectedMeal(mealDetails[mealId] ? mealId : null); };
  const selectedMealData = selectedMeal ? mealDetails[selectedMeal] : null;

  return (

    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 space-y-8">
=======
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      {/* <DashboardSidebar /> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {/* <DashboardHeader /> */}

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Section */}

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">Welcome back, Priya!</h1>
            <p className="text-gray-600 text-lg">Your wellness journey for today looks great. Stay consistent!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Meals Logged This Week" value="15 / 21" change="Great consistency!" changeType="positive" icon={FaAppleAlt} iconColor="bg-green-100 text-green-600" />
            <StatCard title="Upcoming Appointments" value="2" change="Next: Sept 22nd" changeType="neutral" icon={FaCalendarCheck} iconColor="bg-blue-100 text-blue-600" />
            <StatCard title="Days on Plan" value="18" change="You're building a habit!" changeType="positive" icon={FaFistRaised} iconColor="bg-purple-100 text-purple-600" />
            <StatCard title="Wellness Score" value="82" change="+5 from last week" changeType="positive" icon={FaHeartbeat} iconColor="bg-red-100 text-red-500" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
              <TodayMealsPanel meals={todaysMeals} onMealClick={handleMealClick} />
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <UpcomingAppointments />
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <ProgressWidget />
              </div>
            </div>
          </div>
        </main>
      </div>
      <MealDetailModal isOpen={!!selectedMeal} onClose={() => setSelectedMeal(null)} meal={selectedMealData} />
    </div>
  );
}
