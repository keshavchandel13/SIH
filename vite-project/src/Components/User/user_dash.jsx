import { useState } from "react";
import { FaUsers, FaFileAlt, FaCalendarAlt, FaChartBar, FaChartLine, FaClock } from "react-icons/fa";

import { DashboardHeader } from "./components/dashboard-header";
import { DashboardSidebar } from "./components/dashboard-sidebar";
import { StatCard } from "./components/stat-card";
import { UpcomingAppointments } from "./components/upcoming-appointments";
import { RecentPatients } from "./components/recent-patients";
import { TodayMealsPanel } from "./components/today-meals-panel";
import { ProgressWidget } from "./components/ProgressWidget";
import { MealDetailModal } from "./components/MealDetailModal";

// Mock data
const todaysMeals = [
  {
    id: "1",
    name: "Golden Turmeric Porridge",
    time: "8:00 AM",
    isUpcoming: false,
    isLogged: true,
    description: "Warm, nourishing breakfast to start your day"
  },
  {
    id: "2",
    name: "Mung Dal Khichdi",
    time: "1:00 PM",
    isUpcoming: true,
    isLogged: false,
    description: "Easy to digest, balances all doshas"
  },
  {
    id: "3",
    name: "Spiced Vegetable Curry",
    time: "7:00 PM",
    isUpcoming: false,
    isLogged: false,
    description: "Seasonal vegetables with warming spices"
  },
  {
    id: "4",
    name: "Herbal Tea & Almonds",
    time: "3:30 PM",
    isUpcoming: false,
    isLogged: false,
    description: "Afternoon snack for sustained energy"
  }
];

const mealDetails = {
  "2": {
    name: "Mung Dal Khichdi",
    time: "1:00 PM",
    description:
      "A complete, easy-to-digest meal that balances all three doshas. This traditional Ayurvedic dish is perfect for cleansing and nourishing the body.",
    prepTime: "30 mins",
    servings: 2,
    doshaBalance: "Tridoshic (All Doshas)",
    ingredients: [
      "1/2 cup split mung dal (yellow)",
      "1/4 cup basmati rice",
      "1 tsp ghee",
      "1/2 tsp cumin seeds",
      "1/4 tsp turmeric powder",
      "1 inch fresh ginger, minced",
      "2 cups water",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Wash and soak mung dal and rice together for 15 minutes.",
      "Heat ghee in a pot over medium heat. Add cumin seeds and let them splutter.",
      "Add minced ginger and sauté for 30 seconds until fragrant.",
      "Drain and add the soaked dal and rice. Stir gently for 2 minutes.",
      "Add turmeric powder and salt. Mix well.",
      "Add water and bring to a boil. Reduce heat and simmer covered for 20-25 minutes.",
      "Stir occasionally until the mixture becomes soft and porridge-like.",
      "Garnish with fresh cilantro and serve warm."
    ]
  }
};

export default function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleMealClick = (mealId) => {
    setSelectedMeal(mealId);
  };

  const selectedMealData = selectedMeal ? mealDetails[selectedMeal] : null;

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
              Here's what's happening with your wellness practice today.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Active Patients"
              value="248"
              change="+12 this month"
              changeType="positive"
              icon={FaUsers}
              iconColor="text-primary"
            />
            <StatCard
              title="Personalized Plans"
              value="89"
              change="+5 new plans"
              changeType="positive"
              icon={FaFileAlt}
              iconColor="text-secondary"
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
              title="Progress Reports"
              value="34"
              change="+7 pending review"
              changeType="positive"
              icon={FaChartBar}
              iconColor="text-green-600"
            />
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Average Compliance"
              value="84%"
              change="+3% from last month"
              changeType="positive"
              icon={FaChartLine}
              iconColor="text-primary"
            />
            <StatCard
              title="Response Time"
              value="12 min"
              change="2 min faster"
              changeType="positive"
              icon={FaClock}
              iconColor="text-accent"
            />
            <div className="md:col-span-1">
              <ProgressWidget />
            </div>
          </div>

          {/* Bottom Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <TodayMealsPanel meals={todaysMeals} onMealClick={handleMealClick} />
            </div>
            <UpcomingAppointments />
            <RecentPatients />
          </div>
        </main>
      </div>

      {/* Meal Detail Modal */}
      <MealDetailModal
        isOpen={!!selectedMeal}
        onClose={() => setSelectedMeal(null)}
        meal={selectedMealData}
      />
    </div>
  );
}
