

// import React, { useState, useEffect } from 'react'; // ✅ added useEffect
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './Pages/Home';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import EventsPages from "./Pages/EventsPages";
// import EventDetails from "./Pages/EventDetails";
// import RegistrationPage from "./Pages/RegistrationPage";
// import AdminLogin from "./Pages/AdminLogin";

// const App = () => {
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [isLogin, setIsLogin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ added state

//   // ✅ check token on page load
//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // ✅ handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <div className="min-h-[70vh]">
//         <Navbar
//           onLoginClick={() => {
//             setIsLogin(true);
//             setShowAuthModal(true);
//           }}
//           isLoggedIn={isLoggedIn} // ✅ pass login state
//           onLogout={handleLogout} // ✅ pass logout handler
//         />

//         <Routes>
//           <Route path="/" element={<Home onShowSignup={() => {
//             setIsLogin(false);        // make sure signup is shown
//             setShowAuthModal(true);   // open modal
//           }} />} />
//           <Route path="/events" element={<EventsPages />} />
//           <Route path="/events/:id" element={<EventDetails />} />
//           <Route path="/register" element={<RegistrationPage />} />
//           <Route path="/admin-login" element={<AdminLogin />} />
//         </Routes>
//       </div>

//       {/* Auth Modal (Signup/Login) */}
//       {showAuthModal && !isLoggedIn && (  // ✅ hide modal if already logged in
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="relative bg-white rounded-lg shadow-lg">
//             {/* Close button */}
//             <button
//               onClick={() => setShowAuthModal(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//             >
//               ✕
//             </button>

//             {/* ✅ Toggle between Login and Signup */}
//             {isLogin ? (
//               <Login
//                 onShowSignup={() => setIsLogin(false)}
//                 onLoginSuccess={() => {
//                   setIsLoggedIn(true); // ✅ mark as logged in
//                   setShowAuthModal(false); // ✅ close modal after login
//                 }}
//               />
//             ) : (
//               <Signup onShowLogin={() => setIsLogin(true)} />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from './Pages/Home';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import EventsPages from "./Pages/EventsPages";
// import EventDetails from "./Pages/EventDetails";
// import RegistrationPage from "./Pages/RegistrationPage";
// import AdminLogin from "./Pages/AdminLogin";
// import AdminDashboard from "./Pages/AdminDashboard"; // ✅ import dashboard


// const App = () => {
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [isLogin, setIsLogin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // ✅ admin login state

//   // Check user token
//   useEffect(() => {
//     if (localStorage.getItem("token")) setIsLoggedIn(true);
//     if (localStorage.getItem("adminToken")) setIsAdminLoggedIn(true); // ✅ check admin token
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//   };

//   const handleAdminLogout = () => {
//     localStorage.removeItem("adminToken");
//     setIsAdminLoggedIn(false);
//   };

//   return (
//     <Router>
//       <div className="min-h-[70vh]">
//         <Navbar
//           onLoginClick={() => { setIsLogin(true); setShowAuthModal(true); }}
//           isLoggedIn={isLoggedIn}
//           onLogout={handleLogout}
//         />

//         <Routes>
//           {/* User routes */}
//           <Route path="/" element={<Home onShowSignup={() => { setIsLogin(false); setShowAuthModal(true); }} />} />
//           <Route path="/events" element={<EventsPages />} />
//           <Route path="/events/:id" element={<EventDetails />} />
//           <Route path="/register" element={<RegistrationPage />} />
//           <Route path="/admin-login" element={<AdminLogin onLoginSuccess={() => setIsAdminLoggedIn(true)} />} />
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />

//           {/* Admin protected route */}
//           <Route
//             path="/admin-dashboard"
//             element={
//               isAdminLoggedIn ? (
//                 <AdminDashboard onLogout={handleAdminLogout} />
//               ) : (
//                 <Navigate to="/admin-login" />
//               )
//             }
//           />

//           {/* Redirect unknown routes */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>

//       {/* Auth Modal */}
//       {showAuthModal && !isLoggedIn && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="relative bg-white rounded-lg shadow-lg">
//             <button
//               onClick={() => setShowAuthModal(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//             >
//               ✕
//             </button>

//             {isLogin ? (
//               <Login
//                 onShowSignup={() => setIsLogin(false)}
//                 onLoginSuccess={() => { setIsLoggedIn(true); setShowAuthModal(false); }}
//               />
//             ) : (
//               <Signup onShowLogin={() => setIsLogin(true)} />
//             )}
//           </div>
//         </div>
//       )}
//     </Router>
//   );
// };

// export default App;







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

  // Check tokens on mount
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
  {/* ...existing code... */}
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
              isAdminLoggedIn={isAdminLoggedIn}      // ✅ pass admin state
              onAdminLogout={handleAdminLogout}
            />
          }
        />
        <Route path="/events" element={<EventsPages />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/register" element={<RegistrationPage />} />

  {/* ...existing code... */}

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Auth Modal */}
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
