import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './components/LoginPage'; 
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Account from './components/Account';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/account",
    element:<Account />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< Arnold-Maruti
    <RouterProvider router={router} />
=======
    <LoginPage /> 
>>>>>>> main
  </React.StrictMode>
);

reportWebVitals();
