import React, { useState } from 'react';

function Button() {
  const [buttonText, setButtonText] = useState('Buy now');

  const handleClick = (e) => {
    e.preventDefault(); 
    setButtonText('Added to cart');
  };

  return (
    <div>
      <button className='break'onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Button;
