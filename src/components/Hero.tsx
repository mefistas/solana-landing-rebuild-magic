
import React, { useState, useEffect } from 'react';
import { Wallet } from 'lucide-react';

const Hero = () => {
  const [spotsLeft, setSpotsLeft] = useState(9345);
  
  useEffect(() => {
    // Decrease spots more slowly
    const interval = setInterval(() => {
      setSpotsLeft(prev => {
        const decrease = Math.floor(Math.random() * 2) + 1; // 1-2 spots decrease
        return Math.max(prev - decrease, 0);
      });
    }, 12000); // Slower interval: 12 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Handle wallet connection
  const handleConnectWallet = () => {
    if (typeof window !== 'undefined' && window.openModal) {
      window.openModal();
    } else {
      console.error("Error: window.openModal is not defined");
    }
  };

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
          {/* Rounded display for spots left */}
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
          </div>
          
          {/* Connect wallet button */}
          <div className="relative z-20">
            <button 
              type="button"
              onClick={handleConnectWallet}
              className="relative z-20 rounded-full overflow-hidden w-64 h-16 cursor-pointer pointer-events-auto"
            >
              <div className="w-full h-full bg-gradient-to-r from-solana-purple to-solana-green flex items-center justify-center gap-3 rounded-full">
                <Wallet className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-xl">Connect Wallet</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-solana-purple opacity-20 rounded-full blur-[100px]"></div>
        <div className="absolute w-80 h-80 bg-solana-green opacity-20 rounded-full blur-[100px]" style={{left: '10%', bottom: '-10%'}}></div>
        <div className="absolute w-60 h-60 bg-purple-700 opacity-15 rounded-full blur-[80px]" style={{right: '5%', top: '60%'}}></div>
        <div className="absolute w-72 h-72 bg-indigo-500 opacity-10 rounded-full blur-[90px]" style={{left: '30%', top: '20%'}}></div>
        <div className="absolute w-64 h-64 bg-solana-green opacity-15 rounded-full blur-[120px]" style={{right: '25%', bottom: '15%'}}></div>
      </div>
    </div>
  );
};

export default Hero;
