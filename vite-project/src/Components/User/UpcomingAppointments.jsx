import { FaClock, FaVideo, FaComment } from "react-icons/fa";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const mockAppointments = [
  {
    id: "1",
    patientName: "Sarah Johnson",
    patientImage:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODMwMTM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "2:00 PM",
    type: "follow-up",
    mode: "video",
    status: "upcoming"
  },
  {
    id: "2",
    patientName: "Michael Chen",
    patientImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTgzMDEzODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "3:30 PM",
    type: "consultation",
    mode: "chat",
    status: "upcoming"
  },
  {
    id: "3",
    patientName: "Emma Wilson",
    patientImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhY2V8ZW58MXx8fHwxNzU4MzAxMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    time: "4:45 PM",
    type: "new-patient",
    mode: "video",
    status: "upcoming"
  }
];

export function UpcomingAppointments() {
  return (
    <div className="bg-card rounded-lg shadow p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaClock className="w-5 h-5" />
        <h3 className="text-md font-medium">Today's Appointments</h3>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {mockAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center gap-3 p-3 rounded-lg border"
          >
            <ImageWithFallback
              src={appointment.patientImage}
              alt={appointment.patientName}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{appointment.patientName}</h4>
                <span className="text-xs px-2 py-0.5 border rounded-full bg-muted text-muted-foreground">
                  {appointment.type.replace("-", " ")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <FaClock className="w-3 h-3" />
                {appointment.time}
                {appointment.mode === "video" ? (
                  <FaVideo className="w-3 h-3" />
                ) : (
                  <FaComment className="w-3 h-3" />
                )}
              </div>
            </div>

            <button className="text-sm px-3 py-1 border rounded-md hover:bg-muted transition">
              Start
            </button>
          </div>
        ))}

        <button className="w-full text-sm px-3 py-2 border rounded-md hover:bg-muted transition">
          View All Appointments
        </button>
      </div>
    </div>
  );
}
