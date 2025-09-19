const express = require('express');
const router = express.Router();
const {
  requestAppointment,
  confirmAppointment,
  getUpcomingAppointments,
  getPendingAppointments
} = require('../controllers/appointmentController');

// POST /api/appointments/request - Request a new appointment
router.post('/request', requestAppointment);

// POST /api/appointments/:id/confirm - Confirm a pending appointment
router.post('/:id/confirm', confirmAppointment);

// GET /api/appointments/upcoming/:userId - Get upcoming appointments for a user
router.get('/upcoming/:userId', getUpcomingAppointments);

// GET /api/appointments/pending/:dietitianId - Get pending appointments for a dietitian
router.get('/pending/:dietitianId', getPendingAppointments);

module.exports = router;
