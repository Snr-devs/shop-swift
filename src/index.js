import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './components/LoginPage'; 
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Account from './components/Account'; 
import App from './App';
import CartPage from './components/CartPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path:"/account",
    element:<Account />
  },
  {
    path:"/mainpage",
    element:<App />
  },
  {
    path:"/cartpage",
    element:<CartPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
