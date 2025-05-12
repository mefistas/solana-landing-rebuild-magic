
import React from 'react';

const EngineeredForBuilders = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background effects - enhanced green light fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-full h-96 bg-gradient-to-r from-emerald-500/20 to-green-400/10 opacity-20 blur-[120px]"
          style={{
            animation: 'pulseSlowly 10s infinite alternate ease-in-out',
            top: '10%',
          }}
        ></div>
        
        <div className="absolute w-96 h-96 bg-emerald-400 opacity-5 rounded-full blur-[130px]"
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
        
        {/* Fully rounded button with green glow effect - no square frames */}
        <div className="inline-block">
          <a 
            href="https://docs.abs.xyz/overview"
            target="_blank" 
            rel="noopener noreferrer"
            className="relative rounded-full inline-flex group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
            <button className="relative rounded-full flex items-center justify-center px-8 py-3 bg-black text-white font-medium z-10 transition-all duration-200 group-hover:bg-black/90">
              Dev Docs
            </button>
          </a>
        </div>
      </div>
      
      {/* Add keyframes for animations */}
      <style>
        {`
          @keyframes pulseSlowly {
            0% { opacity: 0.1; transform: scale(0.98); }
            100% { opacity: 0.25; transform: scale(1.02); }
          }
          
          @keyframes moveGlow {
            0% { transform: translateX(-5%) translateY(5%); opacity: 0.05; }
            50% { transform: translateX(5%) translateY(-5%); opacity: 0.1; }
            100% { transform: translateX(-5%) translateY(5%); opacity: 0.05; }
          }
        `}
      </style>
    </section>
  );
};

export default EngineeredForBuilders;
