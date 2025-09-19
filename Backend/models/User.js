const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["Doctor", "Patient", "Admin"], // roles
      required: true,
    },

    // Common fields
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    contact: {
      phone: { type: String },
    },

    // Doctor-specific fields
    specialization: { type: String }, // Ayurveda Nutrition, General, etc.
    clinic_name: { type: String },

    // Patient-specific fields
    age: { type: Number },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    health_conditions: [{ type: String }],
    dosha_type: {
      type: String,
      enum: ["Vata", "Pitta", "Kapha", "Mixed", "Unknown"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
