import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-card border-b border-border">
      {/* Search Bar */}
      <div className="flex-1 max-w-md relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search patients, diet plans..."
          className="pl-10 bg-input-background border-border"
        />
      </div>

      {/* User Profile and Notifications */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <FaBell className="h-5 w-5" />
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            3
          </Badge>
        </Button>

        {/* Settings */}
        <Button variant="ghost" size="sm">
          <FaCog className="h-5 w-5" />
        </Button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/api/placeholder/32/32" alt="Dr. Priya Sharma" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-sm font-medium">Dr. Priya Sharma</p>
            <p className="text-xs text-muted-foreground">Ayurvedic Practitioner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
