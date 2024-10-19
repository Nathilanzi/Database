// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import YouthUpload from './components/YouthUpload';
import Signup from './components/SignUp';
import Login from './components/LogIn';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './components/Home'; 

const App = () => {
  return (
    <Router>
     
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/youthupload' element={<YouthUpload />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={ <AuthChecker> <Dashboard /> </AuthChecker>} />
          </Routes>
        </Layout>
    </Router>
  );
};

const AuthChecker = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login'); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [auth, navigate]);

  return children;
};

export default App;
