
import React from 'react';
import { Button } from '@/components/ui/button';

const EngineeredForBuilders = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-full h-80 bg-gradient-to-r from-solana-green/20 to-solana-purple/20 opacity-20 blur-[100px]"
          style={{
            animation: 'pulseSlowly 10s infinite alternate ease-in-out',
            top: '10%',
          }}
        ></div>
        
        <div className="absolute w-96 h-96 bg-solana-purple opacity-10 rounded-full blur-[130px]"
          style={{
            animation: 'moveGlow 30s infinite alternate-reverse ease-in-out',
            right: '15%',
            bottom: '10%',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Engineered for Builders
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Discover the Abstract Portal - your gateway to onchain discovery.
        </p>
        
        {/* Neon button with glow effect - ensuring proper rounded styling */}
        <div className="inline-block">
          <a 
            href="https://docs.abs.xyz/overview"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-solana-green to-solana-purple rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
              <button className="relative bg-black hover:bg-black/80 text-white rounded-full px-8 py-3 font-medium z-10 transition-all duration-300 group-hover:shadow-lg">
                Dev Docs
              </button>
            </div>
          </a>
        </div>
      </div>
      
      {/* Add keyframes for pulse animation */}
      <style>
        {`
          @keyframes pulseSlowly {
            0% { opacity: 0.1; transform: scale(0.98); }
            100% { opacity: 0.25; transform: scale(1.02); }
          }
          
          @keyframes moveGlow {
            0% { transform: translateX(-5%) translateY(5%); opacity: 0.1; }
            50% { transform: translateX(5%) translateY(-5%); opacity: 0.2; }
            100% { transform: translateX(-5%) translateY(5%); opacity: 0.1; }
          }
        `}
      </style>
    </section>
  );
};

export default EngineeredForBuilders;
