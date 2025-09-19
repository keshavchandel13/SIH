import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { appointmentApi } from "../../api/appointmentApi";
import { useAuth } from "../../Context/authContext";

export function UpcomingAppointments() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUpcomingAppointments();
  }, []);

  const fetchUpcomingAppointments = async () => {
    try {
      setLoading(true);
      const response = await appointmentApi.getUpcomingAppointments(user._id);
      setAppointments(response.data || []);
    } catch (error) {
      console.error('Failed to fetch upcoming appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const canJoinCall = (scheduledTime) => {
    const now = new Date();
    const appointmentTime = new Date(scheduledTime);
    const timeDiff = appointmentTime.getTime() - now.getTime();
    const minutesDiff = timeDiff / (1000 * 60);
    
    // Can join 10 minutes before the scheduled time
    return minutesDiff <= 10 && minutesDiff >= -30; // Allow 30 minutes after scheduled time
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="flex items-center text-xl font-semibold mb-4 text-gray-800">
          <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Upcoming Appointments
        </h2>
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="flex items-center text-xl font-semibold mb-4 text-gray-800">
        <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Upcoming Appointments
      </h2>

      {appointments.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No upcoming appointments</p>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => {
            const isClient = appointment.clientId?._id === user._id;
            const otherPerson = isClient ? appointment.dietitianId : appointment.clientId;
            const canJoin = canJoinCall(appointment.scheduledTime);
            
            return (
              <div
                key={appointment._id}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                    {getInitials(otherPerson?.name || 'Unknown')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {otherPerson?.name || 'Unknown'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {isClient ? 'Dietitian' : 'Client'} • {formatDate(appointment.scheduledTime)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-600">
                    {formatTime(appointment.scheduledTime)}
                  </span>
                  
                  {canJoin ? (
                    <Link
                      to={`/session/${appointment.sessionId}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium transition"
                    >
                      Join Call
                    </Link>
                  ) : (
                    <span className="px-3 py-1 text-xs text-gray-500">
                      {new Date(appointment.scheduledTime) > new Date() ? 'Not yet available' : 'Call ended'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
