import React from 'react'
import Cart from './Cart';
import { useState,useEffect } from 'react';
import Navbar from './Navbar';

function CartPage() {
  const [data, setData] = useState(null);  
  const [error, setError] = useState(false); 

  useEffect(() => {
    fetch('https://shop-swift-back-end-6.onrender.com/orders') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        if (json.length === 0) {
          setError(true); 
        } else {
          setData(json);
        }
      })
      .catch(() => {
        setError(true); 
      });
  }, []);

  if (error || data === null || data.length === 0) {
    return <Cart />;
  }
  return (
    <div>
      <Navbar />
      {
        data.map(dats=>
          <div className='order'>
            <p>{dats.total_price}</p>


          </div>  
        )
      }
    </div>
  )
}

export default CartPage