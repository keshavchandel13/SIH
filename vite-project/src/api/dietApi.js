import axios from "axios";

export const getDietRecommendation = async (userData) => {
  try {
    const res = await axios.post("http://localhost:5000/api/recommend-diet", userData);
    return res.data;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
