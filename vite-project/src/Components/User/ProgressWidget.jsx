import { FaArrowUp } from "react-icons/fa";

export function ProgressWidget() {
  return (
    <div className="bg-card rounded-lg shadow p-4">
      {/* Header */}
      <div className="pb-2 mb-4">
        <h3 className="text-base flex items-center gap-2">
          <span className="text-lg">🌿</span>
          My Progress
        </h3>
      </div>

      {/* Plan Streak */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Plan Streak</span>
            <span className="font-medium">5 Days</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Energy Level */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-1 text-sm">
            <FaArrowUp className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Energy Level</span>
            <span className="font-medium">8.2/10</span>
          </div>
        </div>

        {/* Dosha Balance */}
        <div className="pt-2 border-t">
          <div className="text-center">
            <div className="text-2xl mb-1">⚖️</div>
            <div className="text-sm text-muted-foreground">Dosha Balance</div>
            <div className="text-sm font-medium text-primary">Improving</div>
          </div>
        </div>
      </div>
    </div>
  );
}
