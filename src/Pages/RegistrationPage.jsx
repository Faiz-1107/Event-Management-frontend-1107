import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  // get event data from previous page
  const { state } = useLocation();
  const navigate = useNavigate();
  const event = state?.event;

  // form data for registration
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // update form when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit registration form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // send data to backend
      const res = await fetch("http://localhost:8888/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, eventId: event?.id }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Registration successful!");
        navigate("/events");
      } else {
        alert("❌ " + data.error);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="min-h-screen text-white flex justify-center items-center px-6 py-10">
      {/* registration form container */}
      <div className="bg-[#0B1221]/90 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          Register for {event?.title || "Event"}
        </h2>

        {/* registration form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* name input */}
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white"
            required
          />
          {/* email input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white"
            required
          />
          {/* phone number input */}
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white"
          />

          {/* submit button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            🚀 Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
