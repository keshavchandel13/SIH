import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "../Pages/Dietitian";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

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
        <Route path="/home" element={<Home />} />

        {/* Fallback route */}
        <Route path="*" element={<h1 className="text-center mt-10">404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
