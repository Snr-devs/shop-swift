import React from 'react'
import Navbar from './Navbar'


function Account({account}) {    
  return (
    <div>
        <div className='bars'><Navbar /></div>

        <div className='account'>
       <img className='image'src="/account-icon-25500.png" alt="user" />

       <p>Username:</p>
       <p>Email:</p>
       <p>Phone number:</p>
       <p>Nationality: Kenya</p>
       <p></p>
       </div>
       
    </div>
  )
}

export default Account