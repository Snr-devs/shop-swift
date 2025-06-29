import React, { useEffect, useState } from 'react'
import Button from './Button'

function Productdisplay(){
    const[products,setProduct]=useState([])
    useEffect(()=>{
       fetch('https://shop-swift-back-end-6.onrender.com/products')
       .then(res=>res.json())
       .then(data=>{setProduct(data)})
    },[])
  return (
    <div className='products'>
        {products.map(product=>
        <div className='singleproduct'>
            <p>{product.name}</p>
            <img src={product.image_url} alt={product.name}></img>
            <Button product={product}/>
        </div>
        )}
    </div>
  )
}

export default Productdisplay