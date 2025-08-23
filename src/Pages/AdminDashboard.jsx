// frontend/src/Pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalSeats: 0,
    seatsLeft: 0,
  });

  // ✅ Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:8888/events");
        const data = await res.json();
        setEvents(data);

        // simple stats calculation
        const totalSeats = data.reduce((sum, ev) => sum + (ev.total_seats || 0), 0);
        const seatsLeft = data.reduce((sum, ev) => sum + (ev.seats_left || 0), 0);

        setStats({
          totalEvents: data.length,
          totalSeats,
          seatsLeft,
        });
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  const handleLogout = () => {
    onLogout();
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">⚡ Admin Dashboard</h1>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Messages</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">View Registrants</button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Add Event</button>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">Register Admin</button>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">Feedback</button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-500">Total Events</h2>
          <p className="text-3xl font-bold">{stats.totalEvents}</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-500">Total Seats</h2>
          <p className="text-3xl font-bold">{stats.totalSeats}</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-500">Seats Left</h2>
          <p className="text-3xl font-bold">{stats.seatsLeft}</p>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Events</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">S.No</th>
              <th className="p-3">Event ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Date</th>
              <th className="p-3">Tags</th>
              <th className="p-3">Seats</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length > 0 ? (
              events.map((event, index) => (
                <tr key={event.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{event.id}</td>
                  <td className="p-3">{event.title}</td>
                  <td className="p-3">{event.date}</td>
                  <td className="p-3">{event.tags}</td>
                  <td className="p-3">{event.seats_left}/{event.total_seats}</td>
                  <td className="p-3 flex gap-2">
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Export</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No events available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;




// src/Pages/AdminDashboard.jsx
// import React from "react";

// const AdminDashboard = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <p>Welcome to the admin panel 🚀</p>
//     </div>
//   );
// };

// export default AdminDashboard;
