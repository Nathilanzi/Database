// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('bg-darkGray', 'shadow-lg'); // Add sticky styles
      } else {
        navbar.classList.remove('bg-darkGray', 'shadow-lg'); // Remove sticky styles
      }
    };

    // Add event listener on mount
    document.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar sticky top-0 bg-royalBlue p-4 rounded-md transition-shadow duration-300">
      <ul className="flex justify-between items-center gap-4">
        <li>
          <Link to="/" className="text-gold hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/signup" className="text-gold hover:underline">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-gold hover:underline">
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
