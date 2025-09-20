import mongoose from "mongoose";
const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    sessionId: {
      type: String,
      unique: true,
      sparse: true, // allows multiple null values but enforces uniqueness for non-null values
    },
    clientId: {
      type: String,
      required: true,
    },
    dietitianId: {
      type: String,
      required: true,
    },
    requestedTime: {
      type: Date,
      required: true,
    },
    scheduledTime: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',



const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    problem: { type: String, required: true },
    date: { type: Date, required: true },
    dietician: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",

    },
  },
  { timestamps: true }
);


const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
export default mongoose.model("Appointment", appointmentSchema);

