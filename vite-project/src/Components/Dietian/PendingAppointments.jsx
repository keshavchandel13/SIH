import React, { useState, useEffect } from 'react';
import { appointmentApi } from '../../api/appointmentApi';
import { useAuth } from '../../Context/authContext';

const PendingAppointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchPendingAppointments();
  }, []);

  const fetchPendingAppointments = async () => {
    try {
      setLoading(true);
      const response = await appointmentApi.getPendingAppointments(user._id);
      setAppointments(response.data || []);
    } catch (error) {
      setMessage(error.message || 'Failed to fetch pending appointments');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmAppointment = async (appointmentId, requestedTime) => {
    try {
      setMessage('');
      await appointmentApi.confirmAppointment(appointmentId, requestedTime);
      setMessage('Appointment confirmed successfully!');
      fetchPendingAppointments(); // Refresh the list
    } catch (error) {
      setMessage(error.message || 'Failed to confirm appointment');
    }
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Pending Appointments</h3>
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Pending Appointments</h3>
      
      {message && (
        <div className={`mb-4 p-3 rounded-md ${
          message.includes('success') 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {message}
        </div>
      )}

      {appointments.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No pending appointments</p>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment._id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">
                    {appointment.clientId?.name || 'Unknown Client'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Email: {appointment.clientId?.email || 'N/A'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Requested Time: {formatDateTime(appointment.requestedTime)}
                  </p>
                  {appointment.clientId?.age && (
                    <p className="text-sm text-gray-600">
                      Age: {appointment.clientId.age}
                    </p>
                  )}
                  {appointment.clientId?.health_conditions && appointment.clientId.health_conditions.length > 0 && (
                    <p className="text-sm text-gray-600">
                      Health Conditions: {appointment.clientId.health_conditions.join(', ')}
                    </p>
                  )}
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleConfirmAppointment(appointment._id, appointment.requestedTime)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingAppointments;
