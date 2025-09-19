const Appointment = require('../models/Appointment');
const { v4: uuidv4 } = require('uuid');

// Request a new appointment
const requestAppointment = async (req, res) => {
  try {
    const { dietitianId, requestedTime, clientId } = req.body;

    // Validate required fields
    if (!dietitianId || !requestedTime || !clientId) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: dietitianId, requestedTime, clientId'
      });
    }

    // Create new appointment
    const appointment = new Appointment({
      clientId,
      dietitianId,
      requestedTime: new Date(requestedTime),
      status: 'pending'
    });

    await appointment.save();

    res.status(201).json({
      success: true,
      message: 'Appointment request created successfully',
      data: appointment
    });
  } catch (error) {
    console.error('Error creating appointment request:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Confirm a pending appointment
const confirmAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { scheduledTime } = req.body;

    // Find the appointment
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    // Check if appointment is pending
    if (appointment.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'Appointment is not in pending status'
      });
    }

    // Generate unique session ID
    const sessionId = uuidv4();

    // Update appointment
    appointment.status = 'confirmed';
    appointment.sessionId = sessionId;
    appointment.scheduledTime = scheduledTime ? new Date(scheduledTime) : appointment.requestedTime;

    await appointment.save();

    res.json({
      success: true,
      message: 'Appointment confirmed successfully',
      data: appointment
    });
  } catch (error) {
    console.error('Error confirming appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get upcoming appointments for a user
const getUpcomingAppointments = async (req, res) => {
  try {
    const { userId } = req.params;
    const currentTime = new Date();

    // Find appointments where user is either client or dietitian
    const appointments = await Appointment.find({
      $or: [
        { clientId: userId },
        { dietitianId: userId }
      ],
      status: 'confirmed',
      scheduledTime: { $gte: currentTime }
    })
    .sort({ scheduledTime: 1 });

    // Since we're using string IDs instead of ObjectIds, we need to fetch user details separately
    // In a production app, you'd want to use proper ObjectId references
    const populatedAppointments = await Promise.all(
      appointments.map(async (appointment) => {
        // This is a simplified approach - in production you'd want proper user lookups
        return {
          ...appointment.toObject(),
          clientId: { _id: appointment.clientId, name: 'Client Name', email: 'client@example.com' },
          dietitianId: { _id: appointment.dietitianId, name: 'Dietitian Name', email: 'dietitian@example.com', specialization: 'Ayurvedic Nutrition' }
        };
      })
    );

    res.json({
      success: true,
      data: populatedAppointments
    });
  } catch (error) {
    console.error('Error fetching upcoming appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get pending appointments for dietitian
const getPendingAppointments = async (req, res) => {
  try {
    const { dietitianId } = req.params;

    const appointments = await Appointment.find({
      dietitianId,
      status: 'pending'
    })
    .sort({ requestedTime: 1 });

    // Populate client data (simplified approach)
    const populatedAppointments = appointments.map(appointment => ({
      ...appointment.toObject(),
      clientId: { 
        _id: appointment.clientId, 
        name: 'Client Name', 
        email: 'client@example.com',
        age: 30,
        gender: 'Male',
        health_conditions: ['Diabetes', 'Hypertension']
      }
    }));

    res.json({
      success: true,
      data: populatedAppointments
    });
  } catch (error) {
    console.error('Error fetching pending appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = {
  requestAppointment,
  confirmAppointment,
  getUpcomingAppointments,
  getPendingAppointments
};
