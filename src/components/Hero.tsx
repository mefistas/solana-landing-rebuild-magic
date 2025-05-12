
import React from 'react';
import { Wallet } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-4 py-40 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Build faster on Solana
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300">
          The world's most performant blockchain with the tools you need to build quickly
        </p>
        <div className="flex flex-col items-center">
          <p className="text-xl text-gray-300 mb-6">
            5669 / 10000 1SOL ABS airdrop spots left
          </p>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                // Call openModal function that will be defined in external script
                (window as any).openModal?.();
              }
            }}
            className="bg-solana-purple hover:bg-opacity-90 text-white px-8 py-6 text-lg flex items-center gap-2 rounded-md"
          >
            <Wallet className="w-5 h-5" />
            Connect Wallet
          </button>
        </div>
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
