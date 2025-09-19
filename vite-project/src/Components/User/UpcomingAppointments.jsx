import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaVideo, FaComment } from "react-icons/fa";
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
      <div className="bg-card rounded-lg shadow p-4">
        <div className="flex items-center gap-2 mb-4">
          <FaClock className="w-5 h-5" />
          <h3 className="text-md font-medium">Today's Appointments</h3>
        </div>
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaClock className="w-5 h-5" />
        <h3 className="text-md font-medium">Today's Appointments</h3>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {appointments.length === 0 ? (
          <div className="text-center py-4 text-gray-500">
            <p>No upcoming appointments</p>
          </div>
        ) : (
          appointments.map((appointment) => {
            const isClient = appointment.clientId?._id === user._id;
            const otherPerson = isClient ? appointment.dietitianId : appointment.clientId;
            const canJoin = canJoinCall(appointment.scheduledTime);
            
            return (
              <div
                key={appointment._id}
                className="flex items-center gap-3 p-3 rounded-lg border"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center">
                  {getInitials(otherPerson?.name || 'Unknown')}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{otherPerson?.name || 'Unknown'}</h4>
                    <span className="text-xs px-2 py-0.5 border rounded-full bg-muted text-muted-foreground">
                      {isClient ? 'Dietitian' : 'Client'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <FaClock className="w-3 h-3" />
                    {formatTime(appointment.scheduledTime)} • {formatDate(appointment.scheduledTime)}
                    <FaVideo className="w-3 h-3" />
                  </div>
                </div>

                {canJoin ? (
                  <Link
                    to={`/session/${appointment.sessionId}`}
                    className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Join Call
                  </Link>
                ) : (
                  <span className="text-sm px-3 py-1 text-gray-500">
                    {new Date(appointment.scheduledTime) > new Date() ? 'Not yet available' : 'Call ended'}
                  </span>
                )}
              </div>
            );
          })
        )}

        <button className="w-full text-sm px-3 py-2 border rounded-md hover:bg-muted transition">
          View All Appointments
        </button>
      </div>
    </div>
  );
}
