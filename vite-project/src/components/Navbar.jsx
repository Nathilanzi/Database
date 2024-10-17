import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Close dropdown when clicking outside:

  useEffect (() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".account-toggle")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "shadow-lg");
      } else {
        navbar.classList.remove("bg-white", "shadow-lg");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar bg-blue-200 sticky top-0 bg-transparent p-4 transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Logo
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/youthupload" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Youth Upload
              </Link>

            <Link
              to="/dashboard" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Dashboard
              </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
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
              className="text-gray-700 hover:text-blue-600"
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
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/dashboard" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <Link
              to="/youthupload" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Youth Upload
              </Link>
                Dashboard
              </Link>
            <Link
              to="/login"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="block py-2 text-gray-700 hover:text-blue-600"
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
