const response = await axios.post(
  `https://gemini.generativeai.googleapis.com/v1alpha/models/${GEMINI_MODEL}:generateContent`,
  {
    contents: [{ text: prompt }],  // Your tailored Ayurvedic diet prompt
    temperature: 0.8,
    maxOutputTokens: 400,
  },
  {
    headers: {
      "Authorization": `Bearer ${GEMINI_API_KEY}`,
      "Content-Type": "application/json",
    },
  }
);
