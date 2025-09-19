import { FaCalendarAlt } from "react-icons/fa";
import { MealCard } from "./MealCard";

export function TodayMealsPanel({ meals, onMealClick }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-card rounded-lg shadow p-4">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <FaCalendarAlt className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">{currentDate}</span>
        </div>
        <h3 className="text-lg font-serif font-medium">Today's Meal Plan</h3>
      </div>

      {/* Meal Cards */}
      <div className="space-y-3">
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
            onClick={() => onMealClick(meal.id)}
          />
        ))}
      </div>
    </div>
  );
}
