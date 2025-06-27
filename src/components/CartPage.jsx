import React, { useState } from 'react';

import Navbar from './Navbar';
import Cart from './Cart';

const CartPage = () => {
  const [data,setData]=useState([])
  const [value,setValue]=useState(false)

  ;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        { value ? <p>prrr</p>: <Cart />}
    </div>
  );
};

export default CartPage;