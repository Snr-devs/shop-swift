import React, { useEffect, useState } from 'react'

function Productdisplay() {
    const[product,setProduct]=useState([])
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/photos')
       .then(res=>res.json())
       .then(data=>{setProduct(data)})
    },[])
  return (
    <div>
        {product.map(product=>
        <div className='single-product'>
            <p>{product.title}</p>
            <img src={product.url}></img>
        </div>
        )}
    </div>
  )
}

export default Productdisplay