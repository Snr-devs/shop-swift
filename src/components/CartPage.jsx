import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/300x300?text=Empty+Cart"
          alt="Empty Cart"
          className="w-full max-w-xs mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
        <Link to="/shop">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;