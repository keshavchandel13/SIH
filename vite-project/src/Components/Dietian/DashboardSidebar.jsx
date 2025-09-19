import { 
  FaHome, 
  FaUsers, 
  FaFileAlt, 
  FaChartBar, 
  FaCalendarAlt, 
  FaCog, 
  FaLeaf
} from "react-icons/fa";
import { cn } from "./ui/utils";

const navigation = [
  { name: "Home", href: "#", icon: FaHome, current: true },
  { name: "Patients", href: "#", icon: FaUsers, current: false },
  { name: "Diet Plans", href: "#", icon: FaFileAlt, current: false },
  { name: "Nutrient Analysis", href: "#", icon: FaChartBar, current: false },
  { name: "Appointments", href: "#", icon: FaCalendarAlt, current: false },
  { name: "Settings", href: "#", icon: FaCog, current: false },
];

export function DashboardSidebar() {
  return (
    <div className="flex flex-col w-64 bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-3 p-6 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
          <FaLeaf className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold text-sidebar-foreground">AyurDiet</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                    item.current
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
