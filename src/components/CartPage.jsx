import React, { useContext } from 'react'
import Cart from './Cart';
import Navbar from './Navbar';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cartItems } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return <Cart />;
  }

  return (
    <div>
      <Navbar />
      <div className='order'>
        {cartItems.map(item => (
          <div key={item.id}>
            <p>{item.name} - Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartPage
