import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect to Dashboard after successful login
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-600 to-green-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-green-700 w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 18.364A8.001 8.001 0 0112 4m0 0a8.001 8.001 0 0111.879 14.364M5.121 18.364A8.001 8.001 0 0112 4m0 0v8.5m4.243 4.243a4.001 4.001 0 00-5.656 0"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700 mt-16">
          Login
        </h2>
        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email ID
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                         focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm"
            />
          </div>
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-gray-500 hover:text-green-600">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-green-700 text-white rounded-md shadow-sm hover:bg-green-800 transition duration-150 ease-in-out"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
