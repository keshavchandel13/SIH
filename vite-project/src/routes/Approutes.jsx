import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Dietitian from "../Pages/Dietitian";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import User from "../Pages/User";
import BookAppointment from "../Components/User/BookAppointment";
import Appointment from "../Components/Dietian/Appointment";
import DietRecommendationPage from "../Pages/DietReccomendationPage.jsx";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Login />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard (after login) */}
        <Route path="/doc" element={<Dietitian />} />
        <Route path="/user" element={<User />} />

        {/* User routes */}
        <Route path="/book" element={<BookAppointment />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/aidiet" element={<DietRecommendationPage />} />
        

        {/* Fallback route */}
        <Route path="*" element={<h1 className="text-center mt-10">404 Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}
