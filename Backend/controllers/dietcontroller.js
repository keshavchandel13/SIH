const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.5-flash";

exports.recommendDiet = async (req, res) => {
  const { name, age, gender, dosha, goal, allergies } = req.body;

  if (!age || !gender || !dosha) {
    return res.status(400).json({ error: "age, gender, dosha required" });
  }

  const prompt = `
You are an Ayurvedic nutritionist. Based on:
- Name: ${name || "N/A"}
- Age: ${age}
- Gender: ${gender}
- Dosha: ${dosha}
- Goal: ${goal || "general wellness"}
- Allergies: ${allergies && allergies.length ? allergies.join(", ") : "none"}

Provide a daily diet plan in JSON:
{
  "diet_plan": {
    "morning": "...",
    "breakfast": "...",
    "lunch": "...",
    "evening": "...",
    "dinner": "..."
  },
  "lifestyle_tips": ["...", "...", "..."]
}
`;

  try {
    const response = await axios.post(
      `https://gemini.generativeai.googleapis.com/v1alpha/models/${GEMINI_MODEL}:generateContent`,
      { contents: [{ text: prompt }], temperature: 0.8, maxOutputTokens: 400 },
      { headers: { "Authorization": `Bearer ${GEMINI_API_KEY}`, "Content-Type": "application/json" } }
    );

    let resultText = response.data?.candidates?.[0]?.content?.[0]?.text || "";
    let result;
    try {
      result = JSON.parse(resultText);
    } catch {
      result = { raw: resultText };
    }

    res.json(result);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to generate diet recommendation" });
  }
};
