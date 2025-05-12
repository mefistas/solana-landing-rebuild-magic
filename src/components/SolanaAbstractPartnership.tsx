
import React from 'react';

const SolanaAbstractPartnership = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      
      {/* Floating SVG elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Purple cube SVGs - left side */}
        <div className="absolute left-[5%] top-[15%]">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="4" fill="#8E59FF" fillOpacity="0.7" />
          </svg>
        </div>
        <div className="absolute left-[15%] top-[50%]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="2" fill="#8E59FF" fillOpacity="0.5" />
          </svg>
        </div>
        <div className="absolute left-[8%] bottom-[20%]">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="65" height="65" rx="4" fill="#8E59FF" fillOpacity="0.6" />
          </svg>
        </div>
        
        {/* Green cube SVGs - right side */}
        <div className="absolute right-[5%] top-[20%]">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="4" fill="#14F195" fillOpacity="0.7" />
          </svg>
        </div>
        <div className="absolute right-[20%] bottom-[15%]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="2" fill="#14F195" fillOpacity="0.5" />
          </svg>
        </div>
        <div className="absolute right-[10%] top-[50%]">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" rx="4" fill="#14F195" fillOpacity="0.6" />
          </svg>
        </div>

        {/* Chrome figurine SVGs */}
        <div className="absolute left-[10%] bottom-[10%] opacity-70">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 20 L80 40 L70 120 L60 140 L50 120 L40 40 Z" fill="url(#chrome-gradient-1)" />
            <defs>
              <linearGradient id="chrome-gradient-1" x1="0" y1="0" x2="100%" y2="100%">
                <stop stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="1" stopColor="#CCCCCC" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute right-[10%] bottom-[10%] opacity-70">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 20 L80 60 L75 130 L60 150 L45 130 L40 60 Z" fill="url(#chrome-gradient-2)" />
            <defs>
              <linearGradient id="chrome-gradient-2" x1="0" y1="0" x2="100%" y2="100%">
                <stop stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="1" stopColor="#CCCCCC" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left text box */}
          <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800/80 rounded-xl border border-purple-500/20 backdrop-blur-sm">
            <div className="flex items-start mb-4">
              <svg className="w-8 h-8 mr-3 text-solana-purple" viewBox="0 0 24 24" fill="none" xmlns="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/3.svg">
                <rect width="20" height="20" rx="4" fill="#8E59FF" />
              </svg>
              <h3 className="text-2xl font-bold">Add a heading</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Add a subheading with your content here. Describe benefits, features or details
              about the Solana integration with Abstract chain.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-solana-purple" viewBox="0 0 20 20" fill="#8E59FF">
                  <circle cx="10" cy="10" r="8" />
                </svg>
                <span>Benefit or feature point</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-solana-purple" viewBox="0 0 20 20" fill="#8E59FF">
                  <circle cx="10" cy="10" r="8" />
                </svg>
                <span>Another integration detail</span>
              </li>
            </ul>
          </div>
          
          {/* Center content */}
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Solana + Abstract chain
            </h2>
            
            {/* Connect wallet button with no dot and no square frames */}
            <button
              onClick={() => window.openModal?.()}
              className="rounded-full px-8 py-3 bg-gradient-to-r from-solana-purple to-solana-green text-white font-medium"
            >
              Connect wallet
            </button>
          </div>
          
          {/* Right text box */}
          <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800/80 rounded-xl border border-green-500/20 backdrop-blur-sm">
            <div className="flex items-start mb-4">
              <svg className="w-8 h-8 mr-3 text-solana-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="4" fill="#14F195" />
              </svg>
              <h3 className="text-2xl font-bold">Add a heading</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Add a subheading with your content here. Describe additional benefits, features 
              or other important details about this partnership.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-solana-green" viewBox="0 0 20 20" fill="#14F195">
                  <circle cx="10" cy="10" r="8" />
                </svg>
                <span>Key highlight or statistic</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-solana-green" viewBox="0 0 20 20" fill="#14F195">
                  <circle cx="10" cy="10" r="8" />
                </svg>
                <span>Important feature or benefit</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Animation styles - add animation to SVGs in text boxes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          .p-6 svg {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default SolanaAbstractPartnership;
