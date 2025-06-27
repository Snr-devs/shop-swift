import React, { useEffect, useState } from 'react'
import Button from './Button'

function Productdisplay(){
    const[product,setProduct]=useState([])
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/photos')
       .then(res=>res.json())
       .then(data=>{setProduct(data)})
    },[])
  return (
    <div className='products'>
        {product.map(product=>
        <div className='singleproduct'>
            <p>{product.title}</p>
            <img src={product.url}></img>
            <Button product={product}/>
        </div>
        )}
    </div>
  )
}

export default Productdisplay