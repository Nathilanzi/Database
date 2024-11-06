import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Upload,
  LayoutDashboard,
  User,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          ? "bg-brown-800/80 shadow-md backdrop-blur-lg"
          : "bg-[#683800]"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="RoyalBafokeng.png" // Replace with your logo image path
              alt="Logo"
              className="h-12 w-auto md:h-16 md:w-auto object-contain" // Adjusted for larger size
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-[#fbab01] flex flex-col items-center hover:text-[#456703] transition-colors duration-300"
            >
              <Home className="h-6 w-6 mb-1" />
              Home
            </Link>
            <Link
              to="/youthupload"
              className="text-[#fbab01] flex flex-col items-center hover:text-[#456703] transition-colors duration-300"
            >
              <Upload className="h-6 w-6 mb-1" />
              Youth Upload
            </Link>
            <Link
              to="/dashboard"
              className="text-[#fbab01] flex flex-col items-center hover:text-[#456703] transition-colors duration-300"
            >
              <LayoutDashboard className="h-6 w-6 mb-1" />
              Dashboard
            </Link>

            {/* Account with Dropdown */}
            <div className="relative group account-toggle">
              <button
                className="text-[#fbab01] flex flex-col items-center hover:text-[#456703] transition-colors duration-300"
              >
                <User className="h-6 w-6 mb-1" />
                Account <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
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
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#fbab01] hover:text-[#456703]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 md:hidden">
            <Link
              to="/"
              className="py-2 text-[#fbab01] flex flex-col items-center hover:text-[#456703] transition-colors duration-300"
            >
              <Home className="h-6 w-6 mb-1" />
              Home
            </Link>
            <Link
              to="/youthupload"
              className="py-2 text-[#fbab01] flex flex-col items-center hover:text-[#456703] transition-colors duration-300"
            >
              <Upload className="h-6 w-6 mb-1" />
              Youth Upload
            </Link>
            <Link
              to="/dashboard"
              className="py-2 text-[#fbab01] flex flex-col items-center hover:text-[#456703] transition-colors duration-300"
            >
              <LayoutDashboard className="h-6 w-6 mb-1" />
              Dashboard
            </Link>
            <Link
              to="/login"
              className="py-2 text-[#fbab01] flex flex-col items-center hover:text-[#456703] transition-colors duration-300"
            >
              <User className="h-6 w-6 mb-1" />
              Log In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
