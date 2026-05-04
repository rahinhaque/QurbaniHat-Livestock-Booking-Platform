"use client";

import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = ({ fullScreen = false, message = "Loading..." }) => {
  const containerClasses = fullScreen 
    ? "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm"
    : "w-full flex flex-col items-center justify-center py-20";

  return (
    <div className={containerClasses}>
      <div className="relative flex flex-col items-center">
        {/* Spinner */}
        <HashLoader
          color="#d97706" // amber-600
          size={60}
          speedMultiplier={1}
        />
        
        {/* Branding */}
        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-3xl font-black tracking-tighter text-gray-900">
            Qurbani<span className="text-amber-600">Hat</span>
          </h2>
          <div className="mt-2 h-1 w-12 bg-amber-600 rounded-full animate-pulse" />
          <p className="mt-4 text-sm font-medium text-gray-500 uppercase tracking-widest">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
