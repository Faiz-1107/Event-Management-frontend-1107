
import React, { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    total_seats: "",
    left_seats: "",
    location: "",
    tags: "",
    highlights: "",
    organizer: "",
    description: "",
    banner_image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8888/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("✅ Event created successfully!");
      } else {
        alert("❌ Failed: " + data.error);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center relative z-10">
      <div className="bg-[#0B1221]/90 p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">🎉 Create New Event</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white col-span-2" />
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white" />
          <input type="time" name="time" value={formData.time} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white" />
          <input name="total_seats" placeholder="Total Seats" value={formData.total_seats} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white" />
          <input name="left_seats" placeholder="Seats Left" value={formData.left_seats} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white" />
          <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white col-span-2" />
          <input name="tags" placeholder="Tags" value={formData.tags} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white col-span-2" />
          <input name="highlights" placeholder="Highlights" value={formData.highlights} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white col-span-2" />
          <input name="organizer" placeholder="Organizer" value={formData.organizer} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white col-span-2" />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white col-span-2" />
          <input name="banner_image" placeholder="Banner Image URL" value={formData.banner_image} onChange={handleChange} className="p-2 rounded bg-gray-800 text-white col-span-2" />
          <button type="submit" className="col-span-2 bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-bold">🚀 Create Event</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
