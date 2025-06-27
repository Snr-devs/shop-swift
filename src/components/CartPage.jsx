import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import Cart from './Cart';
import NewCart from './NewCart';

const CartPage = () => {
  // const [data,setData]=useState([])
  // const [value,setValue]=useState(false)

  // const location = useLocation();
  //  const {value,block}= location.state||{};

  ;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        { value ? <NewCart blocks={block}/>: <Cart />}
    </div>
  );
};

export default CartPage;