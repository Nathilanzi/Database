// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-[#F5EEC2] p-6">
      <header className="text-center py-20" style={{ background: 'linear-gradient(135deg, #518035, #9CCEDD)' }}>
        <h1 className="text-4xl font-bold mb-4 text-[#2A2A5A]">
          Empowering Youth. Connecting Communities. Supporting Stakeholders.
        </h1>
        <p className="text-lg mb-8 text-[#2A2A5A]">
          A platform for youth to showcase their skills, stakeholders to engage with verified talent, and community leaders to manage impactful initiatives.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/youthupload" className="bg-[#F5EEC2] text-[#518035] py-2 px-4 rounded shadow hover:bg-[#9CCEDD] hover:text-white transition">
            Upload Your CV
          </Link>
          <Link to="/login" className="bg-[#F5EEC2] text-[#518035] py-2 px-4 rounded shadow hover:bg-[#9CCEDD] hover:text-white transition">
            Stakeholder Login
          </Link>
          <Link to="/contact" className="bg-[#F5EEC2] text-[#518035] py-2 px-4 rounded shadow hover:bg-[#9CCEDD] hover:text-white transition">
            Contact Us
          </Link>
        </div>
      </header>

      <section className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2A2A5A]">
          Our Mission: Building Opportunities and Fostering Growth
        </h2>
        <p className="text-center mb-4 text-[#2A2A5A]">
          Our community-driven database is designed to help:
        </p>
        <ul className="list-disc list-inside max-w-xl mx-auto mb-4 text-[#2A2A5A]">
          <li><strong>Youth:</strong> showcase their talent and skills for employment or project participation.</li>
          <li><strong>Stakeholders:</strong> connect with verified talent and businesses within the community.</li>
          <li><strong>Existing Partners:</strong> access real-time data and insights to improve outreach and operations.</li>
        </ul>
        <p className="text-center text-[#2A2A5A]">
          Whether you are an aspiring youth or a community stakeholder, this platform bridges the gap between opportunity and resources.
        </p>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2A2A5A]">How It Works for Youth</h2>
        <ol className="list-decimal list-inside max-w-xl mx-auto mb-4 text-[#2A2A5A]">
          <li>Click on the Youth Upload button in the header or below</li>
          <li>Complete Your Profile: Add your name, skills, and community chief's reference.</li>
          <li>Upload Your CV: Ensure your CV is in PDF format.</li>
          <li>Stay Updated: Stakeholders can reach out if your profile matches a project or job.</li>
        </ol>
        <div className="text-center">
          <Link to="/youthupload" className="bg-[#187ABF] text-white py-2 px-4 rounded shadow hover:bg-[#9CCEDD] transition">
            Upload Now
          </Link>
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2A2A5A]">Information for Stakeholders</h2>
        <p className="text-center mb-4 text-[#2A2A5A]">
          If you are new to our platform, contact us to gain access to:
        </p>
        <ul className="list-disc list-inside max-w-xl mx-auto mb-4 text-[#2A2A5A]">
          <li>Verified profiles of youth and businesses within the community.</li>
          <li>Community-based data to support employment, training, or outreach projects.</li>
        </ul>
        <h3 className="text-xl font-semibold text-center mb-2 text-[#2A2A5A]">How to Get In Touch:</h3>
        <p className="text-center mb-1 text-[#2A2A5A]">Email: info@communitydatabase.org</p>
        <p className="text-center mb-1 text-[#2A2A5A]">Phone: +27 12 345 6789</p>
        <p className="text-center mb-4 text-[#2A2A5A]">Address: Community Hub, Pretoria, Gauteng</p>
        <div className="text-center">
          <Link to="/contact" className="bg-[#187ABF] text-white py-2 px-4 rounded shadow hover:bg-[#9CCEDD] transition">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2A2A5A]">Login Instructions for Existing Stakeholders</h2>
        <p className="text-center mb-4 text-[#2A2A5A]">
          Follow these steps to log in:
        </p>
        <ol className="list-decimal list-inside max-w-xl mx-auto mb-4 text-[#2A2A5A]">
          <li>Click the "Login" button on the top right.</li>
          <li>Enter your credentials provided during onboarding.</li>
          <li>Navigate to the Dashboard to view youth profiles, download CVs, and manage data.</li>
        </ol>
        <div className="text-center">
          <Link to="/login" className="bg-[#187ABF] text-white py-2 px-4 rounded shadow hover:bg-[#9CCEDD] transition">
            Login
          </Link>
        </div>
      </section>

      <footer className="text-center py-6 mt-12 bg-[#518035] text-white">
        <p>© 2024 Community Database | All Rights Reserved</p>
        <p>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link> |{' '}
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
