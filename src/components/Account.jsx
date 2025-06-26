import React from 'react'
import Navbar from './Navbar'

function Account({account}) {    
  return (
    <div>
        <Navbar />

        <div className='account'>
       <img src='' alt='user'></img>
       <p>Username:</p>
       <p>Email:</p>
       <p>Phone number:</p>
       </div>
       
    </div>
  )
}

export default Account