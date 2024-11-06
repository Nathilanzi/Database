import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, BarChart3, Mail, Phone, MapPin, LogIn, FileSpreadsheet, AlertCircle } from 'lucide-react';
import Footer from './Footer';
import MissionCard from './MissionCard';

const Home = () => {
  const missionCards = [
    {
      title: "Youth",
      description: "Showcase your talent and skills for employment or project participation.",
      icon: <Users className="w-8 h-8 text-[#456703]" />
    },
    {
      title: "Stakeholders",
      description: "Connect with verified talent and businesses within the community.",
      icon: <Building2 className="w-8 h-8 text-[#456703]" />
    },
    {
      title: "Existing Partners",
      description: "Access real-time data and insights to improve outreach and operations.",
      icon: <BarChart3 className="w-8 h-8 text-[#456703]" />
    }
  ];

  return (
    <div className="bg-[#f9f6f2] p-6 mt-20">
      {/* Header Section */}
      <header className="text-center py-20 bg-[#f9f6f2]">
        <h1 className="text-4xl font-bold mb-4 text-[#683800]">
          Empowering Youth. Connecting Communities. Supporting Stakeholders.
        </h1>
        <p className="text-lg mb-8 text-[#683800]">
          A platform for youth to showcase their skills, stakeholders to engage with verified talent, 
          and community leaders to manage impactful initiatives.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/youthupload" 
            className="bg-[#456703] text-white py-2 px-6 rounded-lg shadow hover:bg-[#557714] transition duration-300 ease-in-out"
          >
            Upload Your CV
          </Link>
          <Link 
            to="/login" 
            className="bg-[#456703] text-white py-2 px-6 rounded-lg shadow hover:bg-[#557714] transition duration-300 ease-in-out"
          >
            Stakeholder Login
          </Link>
          <Link 
            to="/contact" 
            className="bg-[#456703] text-white py-2 px-6 rounded-lg shadow hover:bg-[#557714] transition duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Mission Section */}
      <section className="mt-16 mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#683800]">
          Our Mission: Building Opportunities and Fostering Growth
        </h2>
        <p className="text-center mb-12 text-[#683800] max-w-2xl mx-auto">
          Whether you are an aspiring youth or a community stakeholder, 
          this platform bridges the gap between opportunity and resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {missionCards.map((card, index) => (
            <MissionCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>

      {/* Stakeholder Information Section */}
      <section className="mt-12 mb-8 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Building2 className="w-10 h-10 text-[#683800] mr-3" />
          <h2 className="text-3xl font-semibold text-[#683800]">Information for Stakeholders</h2>
        </div>
        
        <p className="text-center mb-6 text-[#683800]">
          If you are new to our platform, contact us to gain access to:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <FileSpreadsheet className="w-6 h-6 text-[#456703] flex-shrink-0 mt-1" />
            <p className="text-[#683800]">Verified profiles of youth and businesses within the community.</p>
          </div>
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-[#456703] flex-shrink-0 mt-1" />
            <p className="text-[#683800]">Community-based data to support employment, training, or outreach projects.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-center mb-4 text-[#683800]">How to Get In Touch:</h3>
        <div className="space-y-3 max-w-md mx-auto mb-6">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-5 h-5 text-[#456703]" />
            <p className="text-[#683800]">nathilanziv@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="w-5 h-5 text-[#456703]" />
            <p className="text-[#683800]">+27 63 687 3558</p>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="w-5 h-5 text-[#456703]" />
            <p className="text-[#683800]">Phokeng, North West</p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-[#456703] text-white py-2 px-6 rounded-lg shadow hover:bg-[#557714] transition duration-300 ease-in-out inline-flex items-center space-x-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>
        </div>
      </section>

      {/* Login Instructions Section */}
      <section className="mt-12 mb-8 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <LogIn className="w-10 h-10 text-[#683800] mr-3" />
          <h2 className="text-3xl font-semibold text-[#683800]">Login Instructions for Existing Stakeholders</h2>
        </div>
        
        <p className="text-center mb-6 text-[#683800]">
          Follow these steps to log in:
        </p>
        
        <div className="space-y-4 max-w-xl mx-auto mb-8">
          <div className="flex items-start space-x-3">
            <div className="bg-[#456703] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</div>
            <p className="text-[#683800]">Click the "Login" button on the top right.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-[#456703] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</div>
            <p className="text-[#683800]">Enter your credentials provided during onboarding.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-[#456703] text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</div>
            <p className="text-[#683800]">Navigate to the Dashboard to view youth profiles, download CVs, and manage data.</p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/login" 
            className="bg-[#456703] text-white py-2 px-6 rounded-lg shadow hover:bg-[#557714] transition duration-300 ease-in-out inline-flex items-center space-x-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;