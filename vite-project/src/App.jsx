// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home' // Import your Home component
import Signup from './components/SignUp'; // Import your Signup component
import Login from './components/LogIn'; // Import your Login component
import Layout from './components/Layout'; // Import the Layout component

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
