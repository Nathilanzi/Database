// src/components/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userData, setUserData] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = userData;

    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.email === email)) {
      setError('Email is already registered.');
      return;
    }

    localStorage.setItem('users', JSON.stringify([...users, { email, password }]));
    navigate('/login');
  };

  return (
    <div className="signup-form-container max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-center text-2xl font-semibold text-royalBlue mb-5">Sign Up</h2>
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          className="p-3 border border-lightGray rounded-md focus:ring-2 focus:ring-gold"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          className="p-3 border border-lightGray rounded-md focus:ring-2 focus:ring-gold"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          onChange={handleChange}
          className="p-3 border border-lightGray rounded-md focus:ring-2 focus:ring-gold"
          required
        />
        {error && <div className="text-red-500 text-center">{error}</div>}
        <button
          type="submit"
          className="p-3 bg-royalBlue text-white rounded-md hover:bg-gold transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
