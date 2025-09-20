import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../controllers/Appointment.js";

const router = express.Router();

router.post("/", createAppointment);       // Book new appointment
router.get("/", getAppointments);          // Get all appointments
router.get("/:id", getAppointmentById);    // Get appointment by ID
router.put("/:id", updateAppointment);     // Update appointment
router.delete("/:id", deleteAppointment);  // Delete appointment

export default router;
