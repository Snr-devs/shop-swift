import React, { useEffect, useState } from 'react';

function Button({product}){
  const [buttonText, setButtonText] = useState('Buy now');

  const handleClick = (e) => {
    e.preventDefault(); 
    setButtonText('Added to cart');
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts"{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(product)
      })
      .then(res=>res.json())
      .then(data=>{console.log(product)})
    },[])
  };

  return (
    <div>
      <button className='break'onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Button;
