import React, { useEffect, useState } from "react";   
import { useNavigate } from "react-router-dom";

export default function EventsPage() {
  const navigate = useNavigate();
  // store all events from database
  const [events, setEvents] = useState([]);  

  // get events when page loads
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:8888/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  // go to event details page
  const handleViewDetails = (event) => {
    navigate(`/events/${event.id}`, { state: { event } });
  };

  // Delete event function
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      // send delete request to backend
      const res = await fetch(`http://localhost:8888/events/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        // remove deleted event from list
        setEvents(events.filter((event) => event.id !== id)); 
      } else {
        alert(data.error || "Failed to delete event");
      }
    } catch (err) {
      console.error("Error deleting event:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="relative min-h-screen text-white">

      <div className="pt-28 px-6 pb-10">
        {/* page header with title and create button */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center text-yellow-400 
                 px-8 py-4 rounded-2xl shadow-lg 
                 bg-gradient-to-r from-gray-500 via-gray-650 to-zinc-900">
             Upcoming Events
          </h1>

          <button
            onClick={() => navigate("/create-event")}
            className="ml-4 bg-cyan-800 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            + Create Event
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#0B1221]/90 rounded-2xl shadow-xl p-4 flex flex-col"
            >
              
              {event.banner_image && (
                <img
                  src={event.banner_image}
                  alt={event.title}
                  className="rounded-xl mb-4 h-48 w-full object-cover"
                />
              )}

              {/* event info */}
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-300 text-sm mb-3">{event.description}</p>

              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>📍 {event.location}</span>
                <span>⏰ {event.time}</span>
              </div>

              <div className="flex justify-between text-sm font-medium mb-4">
                <span className="text-yellow-400">Seats Left: {event.left_seats}</span>
                <span className="text-yellow-300">📅 {event.date}</span>
              </div>

              {/* buttons */}
              <div className="flex justify-between gap-2 mt-auto">
                <button
                  onClick={() => handleViewDetails(event)}
                  className="flex-1 bg-yellow-600 text-black py-2 px-4 rounded-lg font-bold hover:bg-yellow-300 transition-all"
                >
                  View Details →
                </button>
 
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-700 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-500 transition-all"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}