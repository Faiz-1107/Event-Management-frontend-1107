

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EventsPages from "./Pages/EventsPages";
import EventDetails from "./Pages/EventDetails";
import RegistrationPage from "./Pages/RegistrationPage";

const App = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Checks if the user and admin tokens exist on localstorage
  useEffect(() => {
    if (localStorage.getItem("token")) setIsLoggedIn(true);
    if (localStorage.getItem("adminToken")) setIsAdminLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdminLoggedIn(false);
  };

  return (
    <div className="min-h-[70vh]">
      <Navbar
        onLoginClick={() => {
          setIsLogin(true);
          setShowAuthModal(true);
        }}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

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
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* authentication modal */}
      {showAuthModal && !isLoggedIn && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

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
