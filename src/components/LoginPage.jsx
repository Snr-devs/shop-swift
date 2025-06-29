import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate=useNavigate()

  const toggleForm = () => setIsLogin(!isLogin);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4, 'Too short!').required('Required'),
  });

  const SignupSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Too short!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4, 'Too short!').required('Required'),
  });




  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
  try {
    const payload = isLogin
      ? { email: values.email, password: values.password }  // Only what backend expects
      : values;

    const url = isLogin
      ? 'https://shop-swift-back-end-6.onrender.com/api/login'
      : 'https://shop-swift-back-end-6.onrender.com/api/register';

    const res = await axios.post(url, payload);

    console.log(isLogin ? '✅ Logged in:' : '✅ Signed up:', res.data);
    if (isLogin && res.data.access_token) {
  localStorage.setItem('token', res.data.access_token);
}
    navigate('/mainpage');
  } catch (err) {
    console.error('❌ Error:', err.response?.data || err.message);
    setErrors({ email: err.response?.data?.error || 'Invalid credentials or user already exists' });
  } finally {
    setSubmitting(false);
  }
};


  // const handleSubmit = async (values, { setSubmitting, setErrors }) => {
  //   try {
  //     if (isLogin) {
  //       const res = await axios.post('https://shop-swift-back-end-6.onrender.com/api/login', values);
  //       console.log('✅ Logged in:', res.data);
  //       navigate('/mainpage');
  //       // Redirect or store token here
  //     } else {
  //       const res = await axios.post('https://shop-swift-back-end-6.onrender.com/api/register', values);
  //       console.log('✅ Signed up:', res.data);
  //       navigate('/mainpage');
  //       // Redirect or notify success
  //     }
  //   } catch (err) {
  //     console.error('❌ Error:', err.response);
  //     setErrors({ email: 'Invalid credentials or user already exists' });
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <div className="main">
      <h2 className='main2'>Shop Swift App</h2>
      <div className="loginbox">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? 'Login to your account' : 'Create a new account'}
        </h2>

        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={isLogin ? LoginSchema : SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {!isLogin && (
                <div>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                </div>
              )}

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                {isSubmitting
                  ? isLogin ? 'Logging in...' : 'Signing up...'
                  : isLogin ? 'Login' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>

        <p className="b">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
        </p>
        <button onClick={toggleForm} className="bottompage">
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
