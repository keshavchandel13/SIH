import React, { useState } from 'react';
import { appointmentApi } from '../../api/appointmentApi';
import { useAuth } from '../../Context/authContext';

const BookingForm = ({ dietitianId, onBookingSuccess }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    requestedTime: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.requestedTime) {
      setMessage('Please select a preferred time');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      await appointmentApi.requestAppointment({
        dietitianId,
        clientId: user._id,
        requestedTime: formData.requestedTime
      });

      setMessage('Appointment request sent successfully!');
      setFormData({ requestedTime: '', message: '' });
      if (onBookingSuccess) {
        onBookingSuccess();
      }
    } catch (error) {
      setMessage(error.message || 'Failed to send appointment request');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Request Consultation</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="requestedTime" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Date & Time
          </label>
          <input
            type="datetime-local"
            id="requestedTime"
            name="requestedTime"
            value={formData.requestedTime}
            onChange={handleChange}
            min={new Date().toISOString().slice(0, 16)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder="Any specific concerns or questions you'd like to discuss..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {message && (
          <div className={`p-3 rounded-md ${
            message.includes('success') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md font-medium ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          } text-white`}
        >
          {loading ? 'Sending Request...' : 'Request Consultation'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
