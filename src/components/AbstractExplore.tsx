
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const AbstractExplore = () => {
  const [spotsLeft, setSpotsLeft] = useState(5669);
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
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Explore the most powerful collaboration of the year
          </h2>
          <p className="text-xl text-gray-300">
            {spotsLeft} / {totalSpots} 1SOL ABS airdrop spots left
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-[#0B0F19] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all"
            >
              <div className="h-14 w-14 bg-solana-green rounded-full mb-6 flex items-center justify-center">
                {/* Empty green circle with no number */}
              </div>
              <h3 className="text-2xl font-bold mb-4">Featured App {item}</h3>
              <p className="text-gray-400 mb-8">
                Discover incredible applications built on Solana's fast and scalable blockchain.
              </p>
              <Button 
                variant="outline" 
                className="border-solana-green text-solana-green hover:bg-transparent hover:text-white rounded-full px-8 py-2 hover:border-white transition-all"
              >
                Explore
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://abs.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-solana-green text-black hover:bg-opacity-90 rounded-full px-12 py-4 text-lg font-medium transition-all">
              Explore All Apps
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AbstractExplore;
