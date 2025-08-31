import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EventsPages from "./Pages/EventsPages";
import EventDetails from "./Pages/EventDetails";
import RegistrationPage from "./Pages/RegistrationPage";
import CreateEvent from "./Pages/CreateEvent";


const App = () => {
  // State management
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Check if user is already logged in on page load
  useEffect(() => {
    if (localStorage.getItem("token")) setIsLoggedIn(true);
    if (localStorage.getItem("adminToken")) setIsAdminLoggedIn(true);
  }, []);

  // Logout functions
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdminLoggedIn(false);
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-90"
      >
        <source src="/src/assets/homevideo.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <Navbar
        onLoginClick={() => {
          setIsLogin(true);
          setShowAuthModal(true);
        }}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {/* Application routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onShowSignup={() => {
                setIsLogin(false);
                setShowAuthModal(true);
              }}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              isAdminLoggedIn={isAdminLoggedIn}
              onAdminLogout={handleAdminLogout}
            />
          }
        />
        <Route path="/events" element={<EventsPages />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/create-event" element={<CreateEvent /> } />

        {/* Protected Route for Registration Page */}
        <Route path="/register" element={<RegistrationPage />} />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Popup for login/signup */}
      {showAuthModal && !isLoggedIn && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg">
            {/* close button */}
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Show login or signup form */}
            {isLogin ? (
              <Login
                onShowSignup={() => setIsLogin(false)}
                onLoginSuccess={() => {
                  setIsLoggedIn(true);
                  setShowAuthModal(false);
                }}
              />
            ) : (
              <Signup onShowLogin={() => setIsLogin(true)} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
