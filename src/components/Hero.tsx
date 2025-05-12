
import React, { useState, useEffect } from 'react';
import { Wallet } from 'lucide-react';

const Hero = () => {
  const [spotsLeft, setSpotsLeft] = useState(9345);
  
  useEffect(() => {
    // Decrease spots more slowly than before
    const interval = setInterval(() => {
      setSpotsLeft(prev => {
        const decrease = Math.floor(Math.random() * 2) + 1; // 1-2 spots decrease
        return Math.max(prev - decrease, 0);
      });
    }, 8000); // Slower interval: 8 seconds
    
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
          {/* Rounded display for spots left, similar to solana.com */}
          <div className="relative mb-10 py-3 px-6 rounded-full bg-black/40 backdrop-blur-sm border border-solana-purple/30 shadow-lg shadow-solana-purple/10">
            <p className="text-xl flex items-center justify-center gap-2">
              <span className="text-solana-green font-bold bg-clip-text text-transparent bg-gradient-to-r from-solana-green to-emerald-400">{spotsLeft}</span>
              <span className="text-gray-300"> / </span>
              <span className="text-white">10000</span>
              <span className="font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-purple to-indigo-400"> SOL </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-solana-green to-emerald-400">ABS</span>
              </span>
              <span className="text-gray-300 ml-1">airdrop spots left</span>
            </p>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-solana-green/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
          
          {/* Circular button similar to solana.com */}
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                // Call openModal function if it exists
                (window as any).openModal?.();
              }
            }}
            className="relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-solana-purple rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="bg-gradient-to-br from-solana-purple to-purple-700 relative z-10 px-10 py-5 text-lg flex items-center gap-3 rounded-full border border-white/10 shadow-lg group-hover:shadow-solana-purple/30 transition-all duration-300">
              <Wallet className="w-6 h-6" />
              <span className="text-white font-semibold">Connect Wallet</span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Dynamic background effects - animated similar to solana.com */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Purple glow */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-solana-purple opacity-20 rounded-full blur-[100px] animate-pulse"></div>
        
        {/* Green glow with position animation */}
        <div 
          className="absolute w-80 h-80 bg-solana-green opacity-20 rounded-full blur-[100px]"
          style={{
            animation: 'moveGlow 20s infinite alternate ease-in-out',
            left: '10%',
            bottom: '-10%',
          }}
        ></div>
        
        {/* Extra purple accent with different animation */}
        <div 
          className="absolute w-60 h-60 bg-purple-700 opacity-15 rounded-full blur-[80px]"
          style={{
            animation: 'moveGlow 30s infinite alternate-reverse ease-in-out',
            right: '5%',
            top: '60%',
          }}
        ></div>
        
        {/* Additional glow for more visual interest */}
        <div 
          className="absolute w-72 h-72 bg-indigo-500 opacity-10 rounded-full blur-[90px]"
          style={{
            animation: 'pulseAndMove 25s infinite alternate ease-in-out',
            left: '30%',
            top: '20%',
          }}
        ></div>
      </div>
      
      {/* Add keyframes for the background animations */}
      <style jsx>{`
        @keyframes moveGlow {
          0% { transform: translate(0, 0); }
          50% { transform: translate(100px, -50px); }
          100% { transform: translate(-50px, 100px); }
        }
        
        @keyframes pulseAndMove {
          0% { opacity: 0.1; transform: translate(0, 0) scale(0.9); }
          50% { opacity: 0.2; transform: translate(50px, 30px) scale(1); }
          100% { opacity: 0.1; transform: translate(-30px, -50px) scale(0.8); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
