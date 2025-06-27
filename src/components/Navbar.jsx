import React from 'react'
import { Link} from 'react-router-dom'

function Navbar({value,arrays}) {
  return (
    <div>
        <nav className='navbar'>
          <Link to="/account">Account</Link>
          <Link to="/mainpage">Home</Link>
          <Link to="/cartpage" state={{values:value, block:arrays}}>Cart</Link>

        </nav>
    </div>
  )
}

export default Navbar