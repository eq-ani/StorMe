import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, password });
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        setEmail("");
        setPassword("");
        window.location.href = "/"; 
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Fetch error: ", err);
      setError("An error occurred. Please try again.");
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="relative flex items-center justify-center h-screen">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="text-2xl font-bold text-center mb-4">Login</div>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#881c1c] text-white font-semibold rounded-md hover:bg-[#991c1c] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>

            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <span
                onClick={() => (window.location.href = "/signup")}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Sign up here
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
