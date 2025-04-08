// src/pages/NotFound.js
import React from 'react';
import {Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Notfound from './assets/animations/404.json'

const pageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div><Lottie animationData={Notfound}/> </div>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-4">Page Not Found</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default pageNotFound;
