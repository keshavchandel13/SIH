// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
// import { Clock } from "lucide-react";
import React from "react";
const appointments = [
  {
    id: 1,
    patient: "Rajesh Kumar",
    time: "10:00 AM",
    type: "Diet Consultation",
    avatar: "/api/placeholder/32/32",
    initials: "RK"
  },
  {
    id: 2,
    patient: "Meera Patel",
    time: "11:30 AM",
    type: "Follow-up",
    avatar: "/api/placeholder/32/32",
    initials: "MP"
  },
  {
    id: 3,
    patient: "Amit Singh",
    time: "2:00 PM",
    type: "Initial Assessment",
    avatar: "/api/placeholder/32/32",
    initials: "AS"
  },
  {
    id: 4,
    patient: "Priya Desai",
    time: "3:30 PM",
    type: "Diet Review",
    avatar: "/api/placeholder/32/32",
    initials: "PD"
  }
];

export function UpcomingAppointments() {
  return (
    <></>
    // <Card>
    //   <CardHeader>
    //     <CardTitle className="flex items-center gap-2">
    //       <Clock className="h-5 w-5 text-primary" />
    //       Upcoming Appointments
    //     </CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="space-y-4">
    //       {appointments.map((appointment) => (
    //         <div key={appointment.id} className="flex items-center justify-between">
    //           <div className="flex items-center gap-3">
    //             <Avatar className="h-10 w-10">
    //               <AvatarImage src={appointment.avatar} alt={appointment.patient} />
    //               <AvatarFallback>{appointment.initials}</AvatarFallback>
    //             </Avatar>
    //             <div>
    //               <p className="font-medium">{appointment.patient}</p>
    //               <p className="text-sm text-muted-foreground">{appointment.type}</p>
    //             </div>
    //           </div>
    //           <Badge variant="secondary">{appointment.time}</Badge>
    //         </div>
    //       ))}
    //     </div>
    //   </CardContent>
    // </Card>
  );
}
