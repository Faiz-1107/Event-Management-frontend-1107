// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function EventDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const event = state?.event;

//   if (!event) {
//     return (
//       <div className="text-center mt-20 text-white">
//         <h2 className="text-2xl font-bold">Event not found ❌</h2>
//         <button
//           onClick={() => navigate("/events")}
//           className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg"
//         >
//           Back to Events
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="relative min-h-screen flex justify-center items-center text-white">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-90"
//       >
//         <source src="/src/assets/homevideo.mp4" type="video/mp4" />
//       </video>

//       {/* Card */}
//       <div className="bg-[#0B1221]/90 rounded-2xl shadow-xl p-8 max-w-xl w-full">
//         {event.image && (
//           <img
//             src={event.image}
//             alt={event.title}
//             className="rounded-xl mb-4"
//           />
//         )}
//         <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
//         <p className="text-gray-300 mb-4">{event.desc}</p>
//         <p className="mb-2">📍 {event.location}</p>
//         <p className="mb-2">🕒 {event.time}</p>
//         <p className="mb-2">📅 {event.date}</p>
//         <p className="mb-4 text-yellow-400">Seats Left: {event.seats}</p>

//         <button
//           onClick={() => navigate("/events")}
//           className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-300"
//         >
//           Back to Events
//         </button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EventDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const event = state?.event;

  if (!event) {
    return (
      <div className="text-center mt-20 text-white">
        <h2 className="text-2xl font-bold">Event not found ❌</h2>
        <button
          onClick={() => navigate("/events")}
          className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg"
        >
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex justify-center items-center text-white">
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

      {/* Card */}
      <div className="bg-[#0B1221]/90 rounded-2xl shadow-xl p-8 max-w-xl w-full">
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="rounded-xl mb-4"
          />
        )}
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
        <p className="text-gray-300 mb-4">{event.desc}</p>
        <p className="mb-2">📍 {event.location}</p>
        <p className="mb-2">🕒 {event.time}</p>
        <p className="mb-2">📅 {event.date}</p>
        <p className="mb-4 text-yellow-400">Seats Left: {event.seats}</p>

        {/* 🔴 Book Now Button */}
        <button
          onClick={() => navigate("/register", { state: { event } })}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 w-full"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
