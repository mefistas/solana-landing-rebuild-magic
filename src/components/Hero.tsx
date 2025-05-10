
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      {/* This is a placeholder for the hero section - will be custom designed later */}
      <div className="container mx-auto px-4 py-40">
        {/* Content will be added later */}
      </div>
      {/* Background gradient effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-solana-purple opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-solana-green opacity-20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
