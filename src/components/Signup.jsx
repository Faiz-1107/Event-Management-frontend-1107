

import React, { useState } from "react";

export default function Signup({ onShowLogin }) {
    // form input states
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userData = { name: username, email, mobile, password, role };

        try {
            // send signup data to backend
            const res = await fetch("http://localhost:8888/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                // clear form after successful signup
                setUsername("");
                setEmail("");
                setMobile("");
                setPassword("");
            } else {
                alert(data.error || "Signup failed");
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    return (
        // signup form
        <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
        >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Sign Up
            </h2>

            {/* Username */}
            <input
                id="username"
                className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />

            {/* Email */}
            <input
                id="email"
                className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            {/* Mobile */}
            <input
                id="mobile"
                className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                type="text"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
            />

            {/* Password */}
            <input
                id="password"
                className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            {/* Role Dropdown */}
            <select
                id="role"
                className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
            >
                <option value="" disabled>Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>


            {/* Submit button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium disabled:opacity-50"
            >
                {loading ? "Creating..." : "Create Account"}
            </button>

            {/* switch to login */}
            <p className="text-center mt-4">
                Already have an account?{" "}
                <button
                    type="button"
                    onClick={onShowLogin}
                    className="text-blue-500 underline"
                >
                    Log In
                </button>
            </p>
        </form>
    );
}
