import React, { useState, useEffect } from "react";
import { createAppointment } from "../../api/Book.js";
import { getDOctor } from "../../api/User.js";
import DashboardLayout from "./DashboardLayout.jsx";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorId: "",
    date: "",
    time: "",
    reason: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch doctors list
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await getDOctor();
        setDoctors(res || []);
      } catch (err) {
        setMessage("❌ Failed to load doctors. Please refresh.");
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Map frontend form to backend schema
      const payload = {
        name: formData.patientName,
        age: Number(formData.age), // Make sure it's a number
        dietician: doctors.find(d => d._id === formData.doctorId)?.name || "",
        date: formData.date,
        problem: formData.reason,
      };

      await createAppointment(payload);
      setMessage("✅ Appointment booked successfully with AyurDiet Dietitian!");
      setFormData({ patientName: "", age: "", doctorId: "", date: "", time: "", reason: "" });
    } catch (error) {
      setMessage("❌ Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-6">
      <DashboardLayout/>
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-emerald-100">

            {/* AyurDiet Logo / Heading */}
            <div className="flex flex-col items-center mb-6">
              <img
                src="/finlog.jpg"
                alt="AyurDiet Logo"
                className="h-16 w-16 mb-2 rounded-full shadow-md"
              />
              <h2 className="text-3xl font-extrabold text-emerald-700 tracking-wide">
                Book Appointment
              </h2>
              <p className="text-gray-600 text-center mt-1 text-sm">
                Connect with our Ayurvedic Dietitians for personalized guidance 🌿
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Patient Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Select Doctor
                </label>
                <select
                  name="doctorId"
                  value={formData.doctorId}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
                >
                  <option value="">-- Choose a Doctor --</option>
                  {doctors.map((doc) => (
                    <option key={doc._id} value={doc._id}>
                      {doc.name} – {doc.specialization}
                    </option>
                  ))}
                </select>
              </div>
              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
                  placeholder="Enter your age"
                />
              </div>


              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
                />
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Reason for Appointment
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-sm"
                  placeholder="E.g., weight management, diet plan, lifestyle guidance..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-600 transition font-semibold"
              >
                {loading ? "Booking..." : "Book Appointment"}
              </button>
            </form>

            {/* Status Message */}
            {message && (
              <p
                className={`mt-4 text-center font-medium ${message.startsWith("✅") ? "text-emerald-600" : "text-red-500"
                  }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
    </div>
  );
}
