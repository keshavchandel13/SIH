import { useState } from "react";
import axios from "axios";
import DashboardHeader from "../Components/Common/DashboardHeader.jsx";
import DashboardSidebar from "../Components/Common/DashboardSidebar.jsx";

// Reuse your form component
function DietForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    dosha: "",
    goal: "",
    allergies: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, allergies: form.allergies.split(",").map(a => a.trim()) };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg"/>
      <input name="age" placeholder="Age" type="number" value={form.age} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg"/>
      
      <select name="gender" value={form.gender} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select name="dosha" value={form.dosha} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg">
        <option value="">Select Dosha</option>
        <option value="vata">Vata</option>
        <option value="pitta">Pitta</option>
        <option value="kapha">Kapha</option>
      </select>

      <input name="goal" placeholder="Goal (weight loss, wellness, etc)" value={form.goal} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg"/>
      <input name="allergies" placeholder="Allergies (comma separated)" value={form.allergies} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg"/>
      
      <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition">Get Diet Recommendation</button>
    </form>
  );
}

// Display diet recommendation
function DietRecommendation({ data }) {
  if (!data) return null;

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-emerald-700">Diet Plan</h2>
      {data.diet_plan && Object.entries(data.diet_plan).map(([time, meal]) => (
        <p key={time}><strong>{time}:</strong> {meal}</p>
      ))}

      {data.lifestyle_tips && (
        <>
          <h3 className="text-lg font-semibold text-emerald-600 mt-4">Lifestyle Tips</h3>
          <ul className="list-disc list-inside">
            {data.lifestyle_tips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </>
      )}

      {data.raw && (
        <div className="mt-2 text-sm text-gray-700">
          <strong>Raw Response:</strong>
          <pre className="whitespace-pre-wrap">{data.raw}</pre>
        </div>
      )}
    </div>
  );
}

// Main page
export default function DietRecommendationPage() {
  const [dietData, setDietData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError("");
    setDietData(null);
    try {
      const res = await axios.post("http://localhost:5000/api/diet/recommend-diet", formData);
      setDietData(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch diet recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="flex min-h-screen bg-emerald-50">
    {/* Sidebar */}
    <DashboardSidebar />

    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <DashboardHeader />

      {/* Page Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-emerald-700 text-center mb-8">
          Ayurvedic Diet Recommendation
        </h1>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Form */}
          <DietForm onSubmit={handleSubmit} />

          {/* Status Messages */}
          {loading && (
            <p className="text-center text-gray-700 text-lg">Generating diet recommendation...</p>
          )}
          {error && <p className="text-center text-red-500 text-lg">{error}</p>}

          {/* Diet Recommendation */}
          {dietData && <DietRecommendation data={dietData} />}
        </div>
      </div>
    </div>
  </div>
);

}
