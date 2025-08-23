import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showLogin ? (
        <Login />
      ) : (
        <Signup onShowLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}
