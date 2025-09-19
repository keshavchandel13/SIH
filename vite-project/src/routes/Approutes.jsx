import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Dietitian from "../Pages/Dietitian";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import User from "../Pages/User";
import SessionPage from "../Pages/SessionPage";
import DietitianProfile from "../Pages/DietitianProfile";

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

        {/* Dietitian profile for booking */}
        <Route path="/dietitian/:dietitianId" element={<DietitianProfile />} />

        {/* Video session route */}
        <Route path="/session/:sessionId" element={<SessionPage />} />

        {/* Fallback route */}
        <Route path="*" element={<h1 className="text-center mt-10">404 Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}
