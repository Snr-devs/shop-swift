import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './components/LoginPage';
import CartPage from './components/CartPage';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Add this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<LoginPage />} />       
        <Route path="/cart" element={<CartPage />} />    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
