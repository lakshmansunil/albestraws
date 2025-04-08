// src/UnderDevelopment.js
import Lottie from 'lottie-react';
import React from 'react';
import underdev from '../assets/animations/underDev.json';

const UnderDevelopment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 max-w-lg mx-auto flex flex-col justify-center items-center">
      <div className=""><Lottie animationData={underdev} loop={true} className="h-56! md:h-96!" /></div>
      <h1 className="text-4xl font-bol mb-4">
          Still under development
        </h1>
        <p className="text-lg text-gray-700">
          We're working hard to bring you new features and improvements. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default UnderDevelopment;
