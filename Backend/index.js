require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

// Imports 
const authRoutes = require("./routes/authRoutes");

// Middleware to parse JSON
app.use(express.json());

// Cors
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

// routes
app.use("/api/auth", authRoutes);


// Connect to database
connectDB();
//  Routes 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


//Ai diet
const dietRoutes = require("./routes/dietroutes");

// existing routes
app.use("/api/auth", authRoutes);

// new Gemini diet route
app.use("/api/diet", dietRoutes);
