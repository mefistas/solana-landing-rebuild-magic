
import React from 'react';
import { Button } from '@/components/ui/button';

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
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-solana-purple hover:bg-opacity-90 text-white px-8 py-6 text-lg">
            <a href="https://solana.com/developers" target="_blank" rel="noopener noreferrer">
              Start Building
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
            <a href="https://solana.com/ecosystem" target="_blank" rel="noopener noreferrer">
              Explore Ecosystem
            </a>
          </Button>
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
