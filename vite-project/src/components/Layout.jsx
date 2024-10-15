// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-lightGray">
      <Navbar />
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
