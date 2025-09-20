import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


// Imports 
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

// Imports
import authRoutes from './routes/authRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
import appointmentRoutes from './routes/appointmentRoute.js';
import dietRoutes from './routes/dietroutes.js';


// Middleware to parse JSON
app.use(express.json());

// CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

=======
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', UserRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/diet', dietRoutes);


// Connect to database
connectDB();

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
