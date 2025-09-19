import React from "react";

const appointments = [
  { id: 1, patient: "Rajesh Kumar", time: "10:00 AM", type: "Diet Consultation", initials: "RK" },
  { id: 2, patient: "Meera Patel", time: "11:30 AM", type: "Follow-up", initials: "MP" },
  { id: 3, patient: "Amit Singh", time: "2:00 PM", type: "Initial Assessment", initials: "AS" },
  { id: 4, patient: "Priya Desai", time: "3:30 PM", type: "Diet Review", initials: "PD" },
];

export function UpcomingAppointments() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="flex items-center text-xl font-semibold mb-4 text-gray-800">
        <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Upcoming Appointments
      </h2>

      <div className="space-y-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                {appt.initials}
              </div>
              <div>
                <p className="font-medium text-gray-800">{appt.patient}</p>
                <p className="text-sm text-gray-500">{appt.type}</p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-medium 
              {appt.type === 'Follow-up' ? 'bg-blue-100 text-blue-600' :
               appt.type === 'Diet Consultation' ? 'bg-emerald-100 text-emerald-600' :
               appt.type === 'Initial Assessment' ? 'bg-yellow-100 text-yellow-600' :
               'bg-purple-100 text-purple-600'}">
              {appt.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
