// // src/pages/RegistrationPage.jsx
// import React, { useState } from "react";

// export default function RegistrationPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("✅ Registration Successful!");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#0B1221]/90 text-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-600"
//       >
//         <h2 className="text-2xl font-bold mb-6 flex items-center text-yellow-400">
//           <span className="mr-2">📝</span> Register for Event
//         </h2>
//         <hr className="mb-6 border-gray-600" />

//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-3 mb-4 rounded-md bg-[#111827] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-3 mb-4 rounded-md bg-[#111827] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           required
//         />

//         <input
//           type="tel"
//           name="mobile"
//           placeholder="Mobile Number"
//           value={formData.mobile}
//           onChange={handleChange}
//           className="w-full p-3 mb-4 rounded-md bg-[#111827] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           required
//         />

//         <textarea
//           name="message"
//           placeholder="Message (optional)"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//           className="w-full p-3 mb-4 rounded-md bg-[#111827] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-md font-semibold transition-all"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }



// src/pages/RegistrationPage.jsx
import React, { useState } from "react";

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false); // ⬅️ NEW

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {  // ⬅️ UPDATED
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8888/registrations", {  // ⬅️ NEW
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true); // ⬅️ NEW
        setFormData({ name: "", email: "", mobile: "", message: "" }); // reset form
      } else {
        const data = await response.json();
        alert("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Failed to register. Try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0B1221]/90 text-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-600"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center text-yellow-400">
          <span className="mr-2">📝</span> Register for Event
        </h2>
        <hr className="mb-6 border-gray-600" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md bg-[#111827] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md bg-[#111827] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-md bg-[#111827] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 mb-4 rounded-md bg-[#111827] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-md font-semibold transition-all"
        >
          Submit
        </button>
      </form>

      {/* Success Modal ⬅️ NEW */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-2xl w-96 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">✅ Registration Successful!</h2>
            <p className="mb-6">You have successfully registered for the event.</p>
            <button
              onClick={() => setShowModal(false)} // Close on click
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
