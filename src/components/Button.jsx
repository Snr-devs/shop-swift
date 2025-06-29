import React, {  useState } from 'react';

function Button({product}){
  const [buttonText, setButtonText] = useState('Buy now');

  const handleClick = (e) => {
    e.preventDefault(); 
    setButtonText('Added to cart');}

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. User might not be logged in.");
      return;
    }
    
      fetch(`https://shop-swift-back-end-6.onrender.com/orders`,{
        method:'POST',
        headers:{
          "Authorization": `Bearer ${token}`,
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
