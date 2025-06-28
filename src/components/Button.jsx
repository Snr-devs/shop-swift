import React, {  useState } from 'react';

function Button({product}){
  const [buttonText, setButtonText] = useState('Buy now');

  const handleClick = (e) => {
    e.preventDefault(); 
    setButtonText('Added to cart');}
    
      fetch("https://shop-swift-back-end-6.onrender.com/orders",{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(product)
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)})

  return (
    <div>
      <button className='break'onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Button;
