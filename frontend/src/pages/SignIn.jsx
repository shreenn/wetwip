
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import logo from '../assets/logo.png';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('Login success! Token stored.');
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed. Please check your email and password.');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Google decoded response:', decoded);

      const response = await axios.post('http://localhost:8000/api/google-login', {
        token: credentialResponse.credential,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log('Google Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Google login failed:', error);
      setError('Google login failed. Try again.');
    }
  };

  const handleGoogleFailure = () => {
    setError('Google Sign-In failed. Please try again.');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
      <div className="w-full max-w-md mx-4 p-8 bg-white rounded-xl shadow-lg border border-gray-100 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-100 opacity-30"></div>

        <div className="text-center mb-8 relative z-10">
          <img src={logo} alt="Embuer Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-[#123458] mb-2">Welcome back to Embuer :)</h1>
          <p className="text-gray-500">Sign in to manage your account</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2a5e8f] focus:border-[#2a5e8f] placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2a5e8f] focus:border-[#2a5e8f] placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#123458] text-white font-semibold rounded-lg hover:bg-[#0e2e4f] transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center justify-center text-gray-400">
          <hr className="w-1/4" />
          <span className="mx-2">OR</span>
          <hr className="w-1/4" />
        </div>

        <div className="text-center z-10">
          <h3 className="text-gray-700 mb-3"></h3>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
