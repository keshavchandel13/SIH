import axios from "axios";

const API_URL = "http://localhost:5000/api/appointments"; // 👈 backend endpoint

// Create new appointment
export const createAppointment = async (appointmentData) => {
  const response = await axios.post(API_URL, appointmentData);
  return response.data;
};

// Get all appointments
export const getAppointments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get single appointment
export const getAppointmentById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Update appointment
export const updateAppointment = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

// Delete appointment
export const deleteAppointment = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
