const User = require("../models/User");

// GET all doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: "Doctor" }).select("-password"); 
    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ message: "Server error while fetching doctors" });
  }
};

module.exports = { getDoctors };
