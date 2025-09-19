// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
// import { UserPlus } from "lucide-react";
import React from "react";
const recentPatients = [
  {
    id: 1,
    name: "Sangeeta Sharma",
    joinDate: "Today",
    condition: "Digestive Issues",
    dosha: "Pitta",
    avatar: "/api/placeholder/32/32",
    initials: "SS"
  },
  {
    id: 2,
    name: "Vikram Joshi",
    joinDate: "Yesterday",
    condition: "Weight Management",
    dosha: "Kapha",
    avatar: "/api/placeholder/32/32",
    initials: "VJ"
  },
  {
    id: 3,
    name: "Anita Reddy",
    joinDate: "2 days ago",
    condition: "Stress & Anxiety",
    dosha: "Vata",
    avatar: "/api/placeholder/32/32",
    initials: "AR"
  },
  {
    id: 4,
    name: "Kiran Mehta",
    joinDate: "3 days ago",
    condition: "Diabetes Management",
    dosha: "Kapha-Pitta",
    avatar: "/api/placeholder/32/32",
    initials: "KM"
  }
];

const doshaColors = {
  Vata: "bg-blue-100 text-blue-800",
  Pitta: "bg-red-100 text-red-800",
  Kapha: "bg-green-100 text-green-800",
  "Kapha-Pitta": "bg-orange-100 text-orange-800"
};

export function RecentPatients() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5 text-primary" />
          Recent Patients
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPatients.map((patient) => (
            <div key={patient.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={patient.avatar} alt={patient.name} />
                  <AvatarFallback>{patient.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-muted-foreground">{patient.condition}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge 
                  variant="secondary" 
                  className={doshaColors[patient.dosha]}
                >
                  {patient.dosha}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">{patient.joinDate}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
