import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Logging in with:", formData);
    } else {
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div className="main">
      <h2 className='main2'>Shop Swift App</h2>
      <div className="loginbox">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? 'Login to your account' : 'Create a new account'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          /><br></br>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          /><br></br>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="b">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}</p>
          <button
            onClick={toggleForm}
            className="bottompage"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        
      </div>
    </div>
  );
};

export default LoginPage;
