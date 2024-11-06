import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import MissionCard from './MissionCard';

const Home = () => {
  const missionCards = [
    {
      title: "Youth",
      description: "Showcase your talent and skills for employment or project participation.",
      icon: "👥"
    },
    {
      title: "Stakeholders",
      description: "Connect with verified talent and businesses within the community.",
      icon: "🤝"
    },
    {
      title: "Existing Partners",
      description: "Access real-time data and insights to improve outreach and operations.",
      icon: "📊"
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

      <Footer />
    </div>
  );
};

export default Home;