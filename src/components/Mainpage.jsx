import React from 'react'
import Productdisplay from './Productdisplay'


function Mainpage() {
  return (
    <div>
        <p>Welcome to Shop swift app</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiPlCWOWpRtR2bThU5GzJXGYav4QZEIms-A&s' alt='Company logo'></img>
        <div className='Products'>
           <Productdisplay />
        </div>
        
    </div>
  )
}

export default Mainpage