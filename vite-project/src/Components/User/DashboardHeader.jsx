import { FaBell, FaSearch, FaChevronDown } from "react-icons/fa";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Search */}
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search patients, meals, or recipes..."
              className="pl-10 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-primary"
            />
          </div>
        </div>

        {/* Center - Date */}
        <div className="hidden md:block text-center">
          <p className="text-sm text-muted-foreground">{currentDate}</p>
        </div>

        {/* Right side - Notifications and Profile */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-muted transition">
            <FaBell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="flex items-center gap-2 cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBheXVydmVkaWMlMjBkb2N0b3J8ZW58MXx8fHwxNzU4MzAxMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dr. Priya Sharma"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium">Dr. Priya Sharma</p>
              <p className="text-xs text-muted-foreground">Ayurvedic Practitioner</p>
            </div>
            <FaChevronDown className="w-4 h-4 text-muted-foreground hidden md:block" />
          </div>
        </div>
      </div>
    </header>
  );
}