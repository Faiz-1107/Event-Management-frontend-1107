

import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventsPage() {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Premium Basmati Rice",
      desc: "Experience the finest aged Basmati rice sourced directly from Punjab, known for its long grains and unmatched aroma. Perfect for biryani lovers and fine dining.",
      location: "Lahore, Pakistan",
      time: "06:11",
      seats: 100,
      date: "2025-08-02",
      image: "/src/assets/Pakistan.png",
    },
    {
      id: 2,
      title: "Luxury Arabian Dry Fruits",
      desc: "A special collection of premium dry fruits including Omani dates, Iranian pistachios, Turkish apricots, and Saudi almonds. Ideal for festive gifting and healthy snacking.",
      location: "Dubai, United Arab Emirates",
      time: "06:13",
      seats: 199,
      date: "2025-08-07",
      image: "/src/assets/UAE.jpg",
    },
    {
      id: 3,
      title: "Turkish Exotic Fruits",
      desc: "Discover and bid on Türkiye’s most famous fruits, including sweet figs from Aydın, juicy cherries from Konya, pomegranates from Antalya, and the world-renowned Sultana grapes from Manisa. A rare chance to taste and own the best harvests of Turkish orchards.",
      location: "Istanbul, Türkiye",
      time: "18:08",
      seats: 100,
      date: "2025-08-08",
      image: "/src/assets/Turkeyy.jpeg",
    },
  ];

  const handleViewDetails = (event) => {
    navigate(`/events/${event.id}`, { state: { event } });
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-90"
      >
        <source src="/src/assets/homevideo.mp4" type="video/mp4" />
      </video>

      {/* Content Wrapper (padding for navbar) */}
      <div className="pt-28 px-6 pb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 text-yellow-400 
               px-8 py-4 rounded-2xl shadow-lg 
               bg-gradient-to-r from-gray-500 via-gray-650 to-zinc-900 
               w-fit mx-auto block">
           Upcoming Events
        </h1>


        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#0B1221]/90 rounded-2xl shadow-xl p-6 flex flex-col"
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-xl mb-4"
                />
              )}

              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-300 flex-grow">{event.desc}</p>

              {/* Meta Info */}
              <div className="flex justify-between text-sm text-gray-400 mt-4">
                <span>📍 {event.location}</span>
                <span>🕒 {event.time}</span>
              </div>
              <div className="flex justify-between mt-2 text-yellow-400 font-medium">
                <span>Seats Left: {event.seats}</span>
                <span>📅 {event.date}</span>
              </div>

              {/* Button */}
              <button
                onClick={() => handleViewDetails(event)}
                className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded-lg font-bold hover:bg-yellow-300 transition-all"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
