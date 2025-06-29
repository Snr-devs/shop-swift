import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div>
        <Navbar />
        <div className='account'>
          <p >No user data found. Please log in.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='bars'><Navbar /></div>

      <div className='account'>
        <img className='image' src="/account-icon-25500.png" alt="user" />
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone number:</strong> {user.phone_number}</p>
        <p><strong>Nationality:</strong> Kenya</p>
      </div>
    </div>
  );
}

export default Account;
