import React from "react";

export default function DietRecommendation({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2>Diet Plan</h2>
      {data.diet_plan && Object.entries(data.diet_plan).map(([time, meal]) => (
        <p key={time}><strong>{time}:</strong> {meal}</p>
      ))}
      <h3>Lifestyle Tips</h3>
      {data.lifestyle_tips && data.lifestyle_tips.map((tip, i) => <li key={i}>{tip}</li>)}
    </div>
  );
}
