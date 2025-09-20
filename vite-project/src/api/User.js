import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; 



// Get doctor
export const getDOctor = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/getdoc`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: "Server error" };
  }
};


