const axios = require("axios");

const OPENAI_API_KEY = "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"; // set your OpenAI key in environment

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
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
        max_tokens: 400
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    let resultText = response.data?.choices?.[0]?.message?.content || "";
    console.log("Raw model output:", resultText);

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
