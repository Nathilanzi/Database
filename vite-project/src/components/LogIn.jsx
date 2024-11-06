import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br ">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 relative">
        {/* Icon Circle */}
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-[#2F855A] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#FFFFFF"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 18.364A8.001 8.001 0 0112 4m0 0a8.001 8.001 0 0111.879 14.364M5.121 18.364A8.001 8.001 0 0112 4m0 0v8.5m4.243 4.243a4.001 4.001 0 00-5.656 0"
            />
          </svg>
        </div>
        
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#4A5568] mt-16">
          Login
        </h2>
        
        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-[#E53E3E] rounded-md text-sm border border-red-200">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogIn} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#4A5568]">
              Email ID
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-2 border border-[#A0AEC0] rounded-md shadow-sm 
                       placeholder-[#A0AEC0] text-[#4A5568]
                       focus:outline-none focus:border-[#38A169] focus:ring-1 focus:ring-[#38A169] text-sm"
            />
          </div>
          
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#4A5568]">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 block w-full px-4 py-2 border border-[#A0AEC0] rounded-md shadow-sm 
                         placeholder-[#A0AEC0] text-[#4A5568]
                         focus:outline-none focus:border-[#38A169] focus:ring-1 focus:ring-[#38A169] text-sm"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 text-[#A0AEC0] hover:text-[#4A5568] focus:outline-none"
              >
                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="form-checkbox h-4 w-4 text-[#38A169] border-[#A0AEC0]" 
              />
              <span className="ml-2 text-[#4A5568]">Remember me</span>
            </label>
            <a href="#" className="text-[#4A5568] hover:text-[#38A169] transition-colors duration-200">
              Forgot Password?
            </a>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 mt-6 bg-[#38A169] text-white rounded-md shadow-md 
                     hover:bg-[#2F855A] transition duration-200 ease-in-out font-medium"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;