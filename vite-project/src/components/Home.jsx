// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 p-6">
      <header className="text-center bg-blue-600 text-white py-20">
        <h1 className="text-4xl font-bold mb-4">Empowering Youth. Connecting Communities. Supporting Stakeholders.</h1>
        <p className="text-lg mb-8">
          A platform for youth to showcase their skills, stakeholders to engage with verified talent, and community leaders to manage impactful initiatives.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/youthupload" className="bg-white text-blue-600 py-2 px-4 rounded shadow hover:bg-blue-200 transition">Upload Your CV</Link>
          <Link to="/login" className="bg-white text-blue-600 py-2 px-4 rounded shadow hover:bg-blue-200 transition">Stakeholder Login</Link>
          <Link to="/contact" className="bg-white text-blue-600 py-2 px-4 rounded shadow hover:bg-blue-200 transition">Contact Us</Link>
        </div>
      </header>

      <section className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Our Mission: Building Opportunities and Fostering Growth</h2>
        <p className="text-center mb-4">
          Our community-driven database is designed to help:
        </p>
        <ul className="list-disc list-inside max-w-xl mx-auto mb-4">
          <li><strong>Youth:</strong> showcase their talent and skills for employment or project participation.</li>
          <li><strong>Stakeholders:</strong> connect with verified talent and businesses within the community.</li>
          <li><strong>Existing Partners:</strong> access real-time data and insights to improve outreach and operations.</li>
        </ul>
        <p className="text-center">
          Whether you are an aspiring youth or a community stakeholder, this platform bridges the gap between opportunity and resources.
        </p>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">How It Works for Youth</h2>
        <ol className="list-decimal list-inside max-w-xl mx-auto mb-4">
          <li>Click on the Youth Upload button in the header or below </li>
          <li>Complete Your Profile: Add your name, skills, and community chief's reference.</li>
          <li>Upload Your CV: Ensure your CV is in PDF format.</li>
          <li>Stay Updated: Stakeholders can reach out if your profile matches a project or job.</li>
        </ol>
        <div className="text-center">
          <Link to="/youthupload" className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">Upload Now</Link>
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Information for Stakeholders</h2>
        <p className="text-center mb-4">
          If you are new to our platform, contact us to gain access to:
        </p>
        <ul className="list-disc list-inside max-w-xl mx-auto mb-4">
          <li>Verified profiles of youth and businesses within the community.</li>
          <li>Community-based data to support employment, training, or outreach projects.</li>
        </ul>
        <h3 className="text-xl font-semibold text-center mb-2">How to Get In Touch:</h3>
        <p className="text-center mb-1">Email: nathilanziv@gmail.com</p>
        <p className="text-center mb-1">Phone: +27 63 687 3558</p>
        <p className="text-center mb-4">Address: Phokeng, North West</p>
        <div className="text-center">
          <Link to="/contact" className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">Contact Us</Link>
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Login Instructions for Existing Stakeholders</h2>
        <p className="text-center mb-4">
          Follow these steps to log in:
        </p>
        <ol className="list-decimal list-inside max-w-xl mx-auto mb-4">
          <li>Click the "Login" button on the top right.</li>
          <li>Enter your credentials provided during onboarding.</li>
          <li>Navigate to the Dashboard to view youth profiles, download CVs, and manage data.</li>
        </ol>
        <div className="text-center">
          <Link to="/login" className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">Login</Link>
        </div>
      </section>

      <footer className="text-center py-6 mt-12 bg-gray-200">
        <p>© 2024 Community Database | All Rights Reserved</p>
        <p><Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> | <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link></p>
      </footer>
    </div>
  );
};

export default Home;
