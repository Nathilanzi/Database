import React from 'react';

const MissionCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="text-4xl text-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#683800] text-center mb-3">
        {title}
      </h3>
      <p className="text-[#683800] text-center">
        {description}
      </p>
    </div>
  );
};

export default MissionCard;