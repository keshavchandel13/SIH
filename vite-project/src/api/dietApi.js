// src/api/dietApi.js
export const getDietRecommendation = async (userData) => {
  const res = await axios.post("http://localhost:5000/api/recommend-diet", userData);
  return res.data;
};
