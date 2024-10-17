// src/App.jsx
import {React, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home' // Import your Home component
import Signup from './components/SignUp'; // Import your Signup component
import Login from './components/LogIn'; // Import your Login component
import Layout from './components/Layout'; // Import the Layout component\
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Dashboard from './components/Dashboard';

const App = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/'); // Redirect to login if not authenticated
      }
    });
  }, [auth, navigate]);

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
  );
};

export default App;
