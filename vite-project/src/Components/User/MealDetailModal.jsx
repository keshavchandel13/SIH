import { FaClock, FaUsers, FaHourglassHalf, FaTimes } from "react-icons/fa";

export function MealDetailModal({ isOpen, onClose, meal }) {
  if (!meal || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{meal.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* Meal Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <FaClock className="w-4 h-4" /> {meal.time}
          </div>
          <div className="flex items-center gap-1">
            <FaHourglassHalf className="w-4 h-4" /> {meal.prepTime}
          </div>
          <div className="flex items-center gap-1">
            <FaUsers className="w-4 h-4" /> {meal.servings} serving{meal.servings > 1 ? "s" : ""}
          </div>
        </div>

        {/* Dosha Badge */}
        <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium mb-4">
          {meal.doshaBalance}
        </div>

        {/* Description */}
        {meal.description && (
          <div className="mb-6">
            <h4 className="font-medium mb-2">About this meal</h4>
            <p className="text-sm text-muted-foreground">{meal.description}</p>
          </div>
        )}

        <hr className="my-4" />

        {/* Ingredients */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Ingredients</h4>
          <ul className="space-y-2">
            {meal.ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-4" />

        {/* Instructions */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Instructions</h4>
          <ol className="space-y-3">
            {meal.instructions.map((instruction, index) => (
              <li key={index} className="text-sm flex gap-3">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                {instruction}
              </li>
            ))}
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 pt-4 border-t">
          <button className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary-dark">
            Mark as Eaten
          </button>
          <button className="flex-1 border border-primary text-primary py-2 rounded-lg hover:bg-primary/10">
            Save Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
