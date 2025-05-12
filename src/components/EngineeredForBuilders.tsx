
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
        
        {/* Empty button with green neon frame */}
        <button 
          onClick={() => window.open("https://docs.abs.xyz/overview", "_blank")}
          className="rounded-full px-8 py-3 border-2 border-emerald-500 text-white font-medium transition duration-200 hover:opacity-90 shadow-[0_0_15px_rgba(20,241,149,0.5)] bg-transparent"
        >
          Dev Docs
        </button>
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
