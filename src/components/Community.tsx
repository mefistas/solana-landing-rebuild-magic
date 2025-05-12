
import React from 'react';
import { Twitter } from 'lucide-react';

const Community = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Animated background with gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        {/* Glowing effect in background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-solana-green/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Solana + Abstract chain
          </h2>
        </div>
        
        {/* Two column layout with figures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Left column */}
          <div className="relative">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Higher performance</h3>
              <p className="text-xl text-gray-300">
                Lightning-fast transactions with ultra-low fees
              </p>
            </div>
            
            {/* SVG placeholder - left figure */}
            <div className="svg-container h-80 relative">
              {/* This div will be used to insert SVG */}
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                {/* Silver runner figure would go here */}
              </div>
              
              {/* Floating blue cube decorations */}
              <div className="absolute top-10 left-10 animate-bounce">
                <div className="w-8 h-8 bg-blue-500 rounded-md rotate-45"></div>
              </div>
              <div className="absolute top-20 right-20 animate-pulse delay-300">
                <div className="w-6 h-6 bg-blue-600 rounded-md rotate-12"></div>
              </div>
              <div className="absolute bottom-20 left-36 animate-bounce delay-500">
                <div className="w-8 h-8 bg-blue-400 rounded-md rotate-45"></div>
              </div>
            </div>
            
            {/* Twitter button - styled as in the image */}
            <div className="mt-10">
              <a 
                href="https://twitter.com/solana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all"
              >
                <span>Go over</span>
                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                  <Twitter className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Right column */}
          <div className="relative">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Greater sustainability</h3>
              <p className="text-xl text-gray-300">
                Eco-friendly blockchain with minimal carbon footprint
              </p>
            </div>
            
            {/* SVG placeholder - right figure */}
            <div className="svg-container h-80 relative">
              {/* This div will be used to insert SVG */}
              <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end">
                {/* Silver runner figure would go here */}
              </div>
              
              {/* Floating green cube decorations */}
              <div className="absolute top-16 right-10 animate-bounce">
                <div className="w-8 h-8 bg-green-500 rounded-md rotate-45"></div>
              </div>
              <div className="absolute top-32 right-32 animate-pulse delay-300">
                <div className="w-10 h-10 bg-green-400 rounded-md rotate-12"></div>
              </div>
              <div className="absolute bottom-40 right-16 animate-bounce delay-700">
                <div className="w-6 h-6 bg-green-600 rounded-md rotate-45"></div>
              </div>
            </div>
            
            {/* Twitter button - styled as in the image */}
            <div className="mt-10">
              <a 
                href="https://twitter.com/abstractxyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all"
              >
                <span>Go over</span>
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <Twitter className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Connect wallet button in center */}
        <div className="mt-20 text-center">
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                (window as any).openModal?.();
              }
            }}
            className="relative overflow-hidden group inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-green-400 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative z-10 px-12 py-4 bg-gradient-to-r from-purple-600 to-green-400 text-white text-lg font-medium rounded-full flex items-center gap-2">
              <span>Connect wallet</span>
              <span className="w-4 h-4 bg-white rounded-full"></span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
