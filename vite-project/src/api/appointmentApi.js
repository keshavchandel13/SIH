import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/appointments';

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Create axios instance with auth header
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const appointmentApi = {
  // Request a new appointment
  requestAppointment: async (appointmentData) => {
    try {
      const response = await apiClient.post('/request', appointmentData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to request appointment' };
    }
  },

  // Confirm a pending appointment
  confirmAppointment: async (appointmentId, scheduledTime) => {
    try {
      const response = await apiClient.post(`/${appointmentId}/confirm`, {
        scheduledTime
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to confirm appointment' };
    }
  },

  // Get upcoming appointments for a user
  getUpcomingAppointments: async (userId) => {
    try {
      const response = await apiClient.get(`/upcoming/${userId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch upcoming appointments' };
    }
  },

  // Get pending appointments for a dietitian
  getPendingAppointments: async (dietitianId) => {
    try {
      const response = await apiClient.get(`/pending/${dietitianId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch pending appointments' };
    }
  },
};
