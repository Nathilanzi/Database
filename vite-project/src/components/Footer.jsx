import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#683800] text-[#F2CFF1] py-6 text-sm md:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="font-medium">
          © 2024 Community Database | All Rights Reserved
        </p>
        <div className="flex space-x-6">
          <Link
            to="/privacy"
            className="hover:text-[#fbab01] transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <span className="text-[#F2CFF1]">|</span>
          <Link
            to="/terms"
            className="hover:text-[#fbab01] transition-colors duration-300"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
