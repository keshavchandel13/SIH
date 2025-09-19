# Video Consultation Feature Setup Guide

This document provides instructions for setting up the complete video consultation feature that has been implemented.

## Features Implemented

### Backend (Node.js, Express, MongoDB)
- ✅ Appointment Mongoose model with all required fields
- ✅ Express server with MongoDB connection
- ✅ API endpoints for appointment management:
  - `POST /api/appointments/request` - Request new appointment
  - `POST /api/appointments/:id/confirm` - Confirm pending appointment
  - `GET /api/appointments/upcoming/:userId` - Get upcoming appointments
  - `GET /api/appointments/pending/:dietitianId` - Get pending appointments

### Frontend (React, JSX)
- ✅ Booking UI component for dietitian profile page
- ✅ Confirmation UI component for dietitian dashboard
- ✅ Updated UpcomingAppointments components with Join Call functionality
- ✅ Dynamic route for `/session/:sessionId`
- ✅ SessionPage component using useParams
- ✅ VideoCall component using agora-react-uikit

## Setup Instructions

### 1. Backend Setup

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies (already done):
   ```bash
   npm install uuid
   ```

3. Create a `.env` file in the Backend directory with your MongoDB connection string:
   ```env
   MONGO_URL=your_mongodb_atlas_connection_string
   PORT=5000
   FRONTEND_URL=http://localhost:5173
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd vite-project
   ```

2. Install dependencies (already done):
   ```bash
   npm install agora-react-uikit --legacy-peer-deps
   ```

3. Create a `.env` file in the vite-project directory:
   ```env
   REACT_APP_AGORA_APP_ID=your_agora_app_id_here
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

### 3. Agora Video SDK Setup

1. Sign up for a free account at [Agora Console](https://console.agora.io)
2. Create a new project
3. Copy your App ID from the project dashboard
4. Add the App ID to your `.env` file as `REACT_APP_AGORA_APP_ID`

### 4. Database Setup

The Appointment model will be automatically created when you first run the application. Make sure your MongoDB Atlas connection is properly configured.

## Usage Flow

### For Clients (Patients):
1. Navigate to a dietitian's profile page
2. Use the BookingForm component to request a consultation
3. Wait for the dietitian to confirm the appointment
4. When the appointment time approaches (10 minutes before), a "Join Call" button will appear
5. Click "Join Call" to enter the video consultation

### For Dietitians:
1. View pending appointment requests in the dashboard
2. Confirm appointments to generate session IDs
3. When appointment time approaches, use the "Join Call" button to enter the video consultation

## File Structure

### Backend Files Created/Modified:
- `Backend/models/Appointment.js` - Mongoose model for appointments
- `Backend/controllers/appointmentController.js` - Appointment API logic
- `Backend/routes/appointmentRoutes.js` - Appointment routes
- `Backend/index.js` - Updated to include appointment routes

### Frontend Files Created/Modified:
- `vite-project/src/Context/authContext.jsx` - Authentication context
- `vite-project/src/api/appointmentApi.js` - API service for appointments
- `vite-project/src/Components/Common/BookingForm.jsx` - Booking UI component
- `vite-project/src/Components/Dietian/PendingAppointments.jsx` - Pending appointments component
- `vite-project/src/Components/Dietian/UpcomingAppointments.jsx` - Updated with Join Call functionality
- `vite-project/src/Components/User/UpcomingAppointments.jsx` - Updated with Join Call functionality
- `vite-project/src/Pages/SessionPage.jsx` - Video session page
- `vite-project/src/Components/Common/VideoCall.jsx` - Video call component using Agora
- `vite-project/src/routes/Approutes.jsx` - Updated with session route
- `vite-project/src/App.jsx` - Updated with AuthProvider

## Important Notes

1. **Agora App ID**: The video calling feature requires a valid Agora App ID. Without it, users will see a configuration message instead of the video interface.

2. **Authentication**: The current implementation assumes basic authentication. You may need to implement proper JWT token validation in the backend.

3. **Time Validation**: The "Join Call" button appears 10 minutes before the scheduled time and remains available for 30 minutes after the scheduled time.

4. **Error Handling**: The components include basic error handling and loading states.

5. **Responsive Design**: All components are built with responsive design using Tailwind CSS.

## Testing

1. Start both backend and frontend servers
2. Create test users (both client and dietitian roles)
3. Request an appointment as a client
4. Confirm the appointment as a dietitian
5. Test the video call functionality (requires Agora App ID)

## Troubleshooting

- **Video not working**: Ensure you have a valid Agora App ID configured
- **API errors**: Check that the backend server is running and MongoDB is connected
- **Authentication issues**: Verify that the auth context is properly set up
- **CORS errors**: Ensure the backend CORS configuration includes your frontend URL
