import React, { useEffect, useState } from "react";
import { getAppointments, updateAppointment } from "../../api/Book.js";
import { DashboardSidebar } from "./DashboardSidebar.jsx";
import DashboardUser from "./DashboardUser.jsx";

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get logged-in doctor info
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const doctorName = user.name;

  useEffect(() => {
    fetchMyAppointments();
  }, [doctorName]);

  const fetchMyAppointments = async () => {
    setLoading(true);
    try {
      const allAppointments = await getAppointments();
      const myAppointments = allAppointments.filter(
        (a) => a.dietician === doctorName
      );
      setAppointments(myAppointments);
    } catch (err) {
      setError("Failed to load appointments.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateAppointment(id, { status });
      // Update local state without refetching
      setAppointments((prev) =>
        prev.map((a) => (a._id === id ? { ...a, status } : a))
      );
    } catch (err) {
      alert("Failed to update status.");
    }
  };

  return (
    <div className="flex min-h-screen bg-emerald-50">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardUser />

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-emerald-700">
            Appointments
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : appointments.length === 0 ? (
            <p>No appointments assigned to you yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow-md border border-emerald-200">
                <thead>
                  <tr className="bg-emerald-200 text-emerald-900 font-semibold">
                    <th className="px-4 py-2 text-left">Patient Name</th>
                    <th className="px-4 py-2 text-left">Age</th>
                    <th className="px-4 py-2 text-left">Problem</th>
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt) => (
                    <tr
                      key={appt._id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-2">{appt.name}</td>
                      <td className="px-4 py-2">{appt.age}</td>
                      <td className="px-4 py-2">{appt.problem}</td>
                      <td className="px-4 py-2">
                        {new Date(appt.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2">{appt.status}</td>
                      <td className="px-4 py-2 flex gap-2">
                        {appt.status !== "Confirmed" && (
                          <button
                            onClick={() => handleStatusUpdate(appt._id, "Confirmed")}
                            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                          >
                            Confirm
                          </button>
                        )}
                        {appt.status !== "Cancelled" && (
                          <button
                            onClick={() => handleStatusUpdate(appt._id, "Cancelled")}
                            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                          >
                            Cancel
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
