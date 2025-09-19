import React, { useState } from "react";
import DietForm from "../components/DietForm";
import DietRecommendation from "../components/DietRecommendation";
import { getDietRecommendation } from "../api/dietApi";

export default function AyurvedicDiet() {
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (userData) => {
    setLoading(true);
    try {
      const data = await getDietRecommendation(userData);
      setRecommendation(data);
    } catch {
      alert("Failed to get recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Ayurvedic Diet Recommendation</h1>
      <DietForm onSubmit={handleSubmit} />
      {loading && <p>Loading...</p>}
      <DietRecommendation data={recommendation} />
    </div>
  );
}
