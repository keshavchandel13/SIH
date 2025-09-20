import axios from "axios";

const API_URL = "http://localhost:5000/api/appointments"; // Change if deployed

// Create a new appointment
export const createAppointment = async (appointmentData) => {
  try {
    const res = await axios.post(API_URL, appointmentData);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Server error" };
  }
};

// Get all appointments
export const getAppointments = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Server error" };
  }
};

// Get appointment by ID
export const getAppointmentById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Server error" };
  }
};

// Update appointment (status or details)
export const updateAppointment = async (id, updateData) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updateData);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Server error" };
  }
};

// Delete appointment
export const deleteAppointment = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Server error" };
  }
};