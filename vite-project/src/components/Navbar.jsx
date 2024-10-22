import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".account-toggle")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDropdownOpen]);

  // Change Navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-lg shadow-lg"
          : "bg-gradient-to-r from-[#518035] via-[#9CCEDD] to-[#F5EEC2]"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#2A2A5A]">
            Logo
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-[#187ABF] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/youthupload"
              className="text-white hover:text-[#187ABF] transition-colors duration-300"
            >
              Youth Upload
            </Link>
            <Link
              to="/dashboard"
              className="text-white hover:text-[#187ABF] transition-colors duration-300"
            >
              Dashboard
            </Link>
            <div className="relative account-toggle">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-[#187ABF] transition-colors duration-300 flex items-center"
              >
                Account <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#187ABF]"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 md:hidden">
            <Link
              to="/"
              className="block py-2 text-white hover:text-[#187ABF] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/youthupload"
              className="block py-2 text-white hover:text-[#187ABF] transition-colors duration-300"
            >
              Youth Upload
            </Link>
            <Link
              to="/dashboard"
              className="block py-2 text-white hover:text-[#187ABF] transition-colors duration-300"
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="block py-2 text-white hover:text-[#187ABF] transition-colors duration-300"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="block py-2 text-white hover:text-[#187ABF] transition-colors duration-300"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
