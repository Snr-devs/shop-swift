import React from 'react'
import Productdisplay from './Productdisplay'
import Navbar from './Navbar';


function Mainpage() {
  
  return (
    <div>
        <div className='bar'>
          <div className='left'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiPlCWOWpRtR2bThU5GzJXGYav4QZEIms-A&s' alt='Company logo'></img>
        <p>Welcome to Shop swift app</p>
        </div>
        <Navbar />
        </div>
        <div>
            
           <Productdisplay />
        </div>
        
    </div>
  )
}

export default Mainpage