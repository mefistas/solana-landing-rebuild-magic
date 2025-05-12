
import React, { useState, useEffect } from 'react';
import { Wallet } from 'lucide-react';

const Hero = () => {
  const [spotsLeft, setSpotsLeft] = useState(5669);
  
  useEffect(() => {
    // Randomly decrease spots every few seconds
    const interval = setInterval(() => {
      setSpotsLeft(prev => {
        const decrease = Math.floor(Math.random() * 3) + 1;
        return Math.max(prev - decrease, 0);
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-4 py-40 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Explore the most powerful collaboration of the year
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300">
          The world's most performant blockchain with the tools you need to build quickly
        </p>
        <div className="flex flex-col items-center">
          <div className="relative mb-8 py-3 px-6 rounded-lg bg-black/40 backdrop-blur-sm border border-solana-purple/20">
            <p className="text-xl">
              <span className="text-solana-green font-bold">{spotsLeft}</span>
              <span className="text-gray-300"> / </span>
              <span className="text-white">10000</span>
              <span className="text-solana-purple font-bold"> 1SOL ABS </span>
              <span className="text-gray-300">airdrop spots left</span>
            </p>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-solana-green/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                // Call openModal function if it exists
                (window as any).openModal?.();
              }
            }}
            className="relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-solana-purple rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="bg-gradient-to-br from-solana-purple to-purple-700 relative z-10 px-8 py-4 text-lg flex items-center gap-2 rounded-xl border border-white/10 shadow-lg group-hover:shadow-solana-purple/30 transition-all duration-300">
              <Wallet className="w-5 h-5" />
              <span className="text-white font-semibold">Connect Wallet</span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Dynamic background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Purple glow */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-solana-purple opacity-20 rounded-full blur-[100px] animate-pulse"></div>
        
        {/* Green glow */}
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-solana-green opacity-20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        
        {/* Extra purple accent */}
        <div className="absolute top-2/3 -right-20 w-60 h-60 bg-purple-700 opacity-15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      </div>
    </div>
  );
};

export default Hero;
