import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Home, Upload, LayoutDashboard, User } from "lucide-react"; // Added icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
              className="text-white flex flex-col items-center hover:text-[#187ABF] transition-colors duration-300"
            >
              <Home className="h-6 w-6 mb-1" /> {/* Icon for Home */}
              Home
            </Link>
            <Link
              to="/youthupload"
              className="text-white flex flex-col items-center hover:text-[#187ABF] transition-colors duration-300"
            >
              <Upload className="h-6 w-6 mb-1" /> {/* Icon for Youth Upload */}
              Youth Upload
            </Link>
            <Link
              to="/dashboard"
              className="text-white flex flex-col items-center hover:text-[#187ABF] transition-colors duration-300"
            >
              <LayoutDashboard className="h-6 w-6 mb-1" /> {/* Icon for Dashboard */}
              Dashboard
            </Link>

            {/* Account with Dropdown */}
            <div className="relative group account-toggle">
              <button
                className="text-white flex flex-col items-center hover:text-[#187ABF] transition-colors duration-300"
              >
                <User className="h-6 w-6 mb-1" /> {/* Icon for Account */}
                Account <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block"> {/* Shows on hover */}
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Log In
                </Link>
                {/* <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Up
                </Link> */}
              </div>
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
              className=" py-2 text-white flex flex-col items-center hover:text-[#187ABF] transition-colors duration-300"
            >
              <Home className="h-6 w-6 mb-1" />
              Home
            </Link>
            <Link
              to="/youthupload"
              className=" py-2 text-white flex flex-col items-center hover:text-[#187ABF] transition-colors duration-300"
            >
              <Upload className="h-6 w-6 mb-1" />
              Youth Upload
            </Link>
            <Link
              to="/dashboard"
              className=" py-2 text-white flex flex-col items-center hover:text-[#187ABF] transition-colors duration-300"
            >
              <LayoutDashboard className="h-6 w-6 mb-1" />
              Dashboard
            </Link>
            <Link
              to="/login"
              className=" py-2 text-white flex flex-col items-center hover:text-[#187ABF] transition-colors duration-300"
            >
              <User className="h-6 w-6 mb-1" />
              Log In
            </Link>
            {/* <Link
              to="/signup"
              className=" py-2 text-white flex flex-col items-center hover:text-[#187ABF] transition-colors duration-300"
            >
              <User className="h-6 w-6 mb-1" />
              Sign Up
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
