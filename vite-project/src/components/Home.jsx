// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-[#F5EEC2] p-6">
      {/* Header Section */}
      <header className="text-center py-20" style={{ backgroundColor: '#285B23', color: '#F2CFF1' }}>
        <h1 className="text-4xl font-bold mb-4">
          Empowering Youth. Connecting Communities. Supporting Stakeholders.
        </h1>
        <p className="text-lg mb-8">
          A platform for youth to showcase their skills, stakeholders to engage with verified talent, and community leaders to manage impactful initiatives.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/youthupload" className="bg-[#F5EEC2] text-[#285B23] py-2 px-4 rounded shadow hover:bg-[#F2CFF1] hover:text-white transition">
            Upload Your CV
          </Link>
          <Link to="/login" className="bg-[#F5EEC2] text-[#285B23] py-2 px-4 rounded shadow hover:bg-[#F2CFF1] hover:text-white transition">
            Stakeholder Login
          </Link>
          <Link to="/contact" className="bg-[#F5EEC2] text-[#285B23] py-2 px-4 rounded shadow hover:bg-[#F2CFF1] hover:text-white transition">
            Contact Us
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <section className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4" style={{ color: '#285B23' }}>
          Our Mission: Building Opportunities and Fostering Growth
        </h2>
        <p className="text-center mb-4" style={{ color: '#285B23' }}>
          Our community-driven database is designed to help:
        </p>
        <ul className="list-disc list-inside max-w-xl mx-auto mb-4" style={{ color: '#285B23' }}>
          <li><strong>Youth:</strong> showcase their talent and skills for employment or project participation.</li>
          <li><strong>Stakeholders:</strong> connect with verified talent and businesses within the community.</li>
          <li><strong>Existing Partners:</strong> access real-time data and insights to improve outreach and operations.</li>
        </ul>
        <p className="text-center" style={{ color: '#285B23' }}>
          Whether you are an aspiring youth or a community stakeholder, this platform bridges the gap between opportunity and resources.
        </p>
      </section>

      {/* Other sections omitted for brevity... */}

      {/* Footer Section */}
      <footer className="text-center py-6 mt-12" style={{ backgroundColor: '#285B23', color: '#F2CFF1' }}>
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
