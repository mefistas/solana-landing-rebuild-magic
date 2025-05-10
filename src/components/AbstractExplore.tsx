
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const AbstractExplore = () => {
  const [spotsLeft, setSpotsLeft] = useState(5678);
  const totalSpots = 10000;
  
  useEffect(() => {
    // Decrease spots every hour
    const decreaseInterval = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 0) return prev - Math.floor(Math.random() * 10 + 1);
        return 0;
      });
    }, 60 * 60 * 1000); // Every hour
    
    // For demo purposes, also decrease more frequently
    const demoInterval = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 0) return prev - 1;
        return 0;
      });
    }, 246 * 1000); // Every 246 seconds
    
    return () => {
      clearInterval(decreaseInterval);
      clearInterval(demoInterval);
    };
  }, []);
  
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore the most powerful collaboration of the year</h2>
          <p className="text-xl text-gray-300">
            {spotsLeft} / {totalSpots} 1SOL ABS airdrop spots left
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-70 transition-all border border-gray-700"
            >
              <div className="h-12 w-12 bg-solana-green rounded-full mb-4 flex items-center justify-center">
                <span className="font-bold text-black">#{item}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Featured App {item}</h3>
              <p className="text-gray-300 mb-6">
                Discover incredible applications built on Solana's fast and scalable blockchain.
              </p>
              <Button variant="outline" className="border-solana-green text-solana-green hover:bg-solana-green/10">
                Explore
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-solana-green text-black hover:bg-opacity-90 px-8 py-6 text-lg">
            <a href="https://abs.xyz/" target="_blank" rel="noopener noreferrer">
              Explore All Apps
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AbstractExplore;
