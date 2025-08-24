import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EventDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const event = state?.event;

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>No event details available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white flex justify-center items-center px-6 py-10">
      <div className="bg-[#0B1221]/90 p-6 rounded-2xl shadow-xl w-full max-w-3xl">
        {/* Banner Image */}
        {event.banner_image && (
          <img
            src={event.banner_image}
            alt={event.title}
            className="rounded-xl mb-6 w-full h-64 object-cover"
          />
        )}

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-yellow-400">{event.title}</h1>

        {/* Description */}
        <p className="text-gray-300 mb-6">{event.description}</p>

        {/* Meta Info */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex flex-col bg-gray-800/50 p-3 rounded-lg">
            <span className="text-gray-400">📍 Location</span>
            <span className="font-semibold">{event.location}</span>
          </div>
          <div className="flex flex-col bg-gray-800/50 p-3 rounded-lg">
            <span className="text-gray-400">🕒 Time</span>
            <span className="font-semibold">{event.time}</span>
          </div>
          <div className="flex flex-col bg-gray-800/50 p-3 rounded-lg">
            <span className="text-gray-400">🎟️ Seats Left</span>
            <span className="text-yellow-400 font-semibold">{event.left_seats}</span>
          </div>
          <div className="flex flex-col bg-gray-800/50 p-3 rounded-lg">
            <span className="text-gray-400">📅 Date</span>
            <span className="text-yellow-300 font-semibold">{event.date}</span>
          </div>
        </div>

        {/* Extra Info */}
        {event.tags && (
          <p className="mb-2"><span className="text-yellow-300">🏷️ Tags:</span> {event.tags}</p>
        )}
        {event.organizer && (
          <p className="mb-2"><span className="text-yellow-300">👤 Organizer:</span> {event.organizer}</p>
        )}
        {event.highlights && (
          <p className="mb-4"><span className="text-yellow-300">✨ Highlights:</span> {event.highlights}</p>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg"
          >
            ← Back
          </button>
          <button
            onClick={() => navigate("/register", { state: { event } })}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-2 rounded-lg"
          >
            Register Now 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
