// // frontend/src/Pages/AdminLogin.jsx
// import React, { useState } from "react";

// const AdminLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const res = await fetch("http://localhost:5000/api/admin/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Login failed");
//         return;
//       }

//       setSuccess("✅ Admin login successful!");
//       localStorage.setItem("adminToken", data.token); // save token for auth
//     } catch (err) {
//       setError("Something went wrong");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
//           <span role="img" aria-label="lock">🔒</span> Admin Login
//         </h2>

//         {error && <p className="text-red-400 mb-3">{error}</p>}
//         {success && <p className="text-green-400 mb-3">{success}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Username */}
//           <div>
//             <label className="block text-sm mb-1 text-gray-300">Username</label>
//             <input
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm mb-1 text-gray-300">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold flex justify-center items-center gap-2 transition"
//           >
//             🚀 Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ for navigation

// const AdminLogin = ({ onLoginSuccess}) => {
//   const [email, setEmail] = useState("");      // changed from username
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();               // ✅ hook for redirect

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const res = await fetch("http://localhost:8888/admin/login", { // ✅ updated port & route
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }), // ✅ send email, not username
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Login failed");
//         return;
//       }

//       // ✅ Save token
//       localStorage.setItem("adminToken", data.token);

//       setSuccess("✅ Admin login successful!");

//       // ✅ Redirect to dashboard after 1s
//       setTimeout(() => {
//         navigate("/admin-dashboard");
//       }, 500);
//     } catch (err) {
//       setError("Something went wrong");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
//           <span role="img" aria-label="lock">🔒</span> Admin Login
//         </h2>

//         {error && <p className="text-red-400 mb-3">{error}</p>}
//         {success && <p className="text-green-400 mb-3">{success}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Email */}
//           <div>
//             <label className="block text-sm mb-1 text-gray-300">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm mb-1 text-gray-300">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold flex justify-center items-center gap-2 transition"
//           >
//             🚀 Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;







