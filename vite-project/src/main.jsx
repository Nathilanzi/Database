import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Only here
import App from './App.jsx';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
);
