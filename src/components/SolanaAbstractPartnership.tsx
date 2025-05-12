
import React from 'react';

const SolanaAbstractPartnership = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      
      {/* Floating SVG elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Purple cube SVGs - left side - replaced with 20.svg */}
        <div className="absolute left-[5%] top-[15%]">
          <img 
            src="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/20.svg" 
            alt="Purple Element" 
            className="w-[60px] h-[60px]" 
            style={{ background: 'transparent' }}
          />
        </div>
        <div className="absolute left-[15%] top-[50%]">
          <img 
            src="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/20.svg" 
            alt="Purple Element" 
            className="w-[40px] h-[40px]" 
            style={{ background: 'transparent' }}
          />
        </div>
        <div className="absolute left-[8%] bottom-[20%]">
          <img 
            src="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/20.svg" 
            alt="Purple Element" 
            className="w-[80px] h-[80px]" 
            style={{ background: 'transparent' }}
          />
        </div>
        
        {/* Green cube SVGs - right side - replaced with 17.svg */}
        <div className="absolute right-[5%] top-[20%]">
          <img 
            src="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/17.svg" 
            alt="Green Element" 
            className="w-[60px] h-[60px]" 
            style={{ background: 'transparent' }}
          />
        </div>
        <div className="absolute right-[20%] bottom-[15%]">
          <img 
            src="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/17.svg" 
            alt="Green Element" 
            className="w-[40px] h-[40px]" 
            style={{ background: 'transparent' }}
          />
        </div>
        <div className="absolute right-[10%] top-[50%]">
          <img 
            src="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/17.svg" 
            alt="Green Element" 
            className="w-[70px] h-[70px]" 
            style={{ background: 'transparent' }}
          />
        </div>

        {/* Chrome figurine SVGs */}
        <div className="absolute left-[10%] bottom-[10%] opacity-70">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="#">
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
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="#">
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
          {/* Left text box - Updated with new SVG and bigger size */}
          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800/80 rounded-xl border border-purple-500/20 backdrop-blur-sm shadow-lg pulse">
            <div className="flex items-start mb-4">
              <img 
                src="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/1.svg" 
                alt="Abstract Logo" 
                className="w-12 h-12 mr-3"
                style={{ background: 'transparent' }}
              />
              <h3 className="text-2xl font-bold">To complete for Abstract</h3>
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
              AIRDROP REQUAIREMENTS 
            </h2>
            
            {/* Connect wallet button with no dot and no square frames */}
            <button
              onClick={() => window.openModal?.()}
              className="rounded-full px-8 py-3 bg-gradient-to-r from-solana-purple to-solana-green text-white font-medium"
            >
              Connect wallet
            </button>
          </div>
          
          {/* Right text box - Made equal size and bigger with the same styling */}
          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800/80 rounded-xl border border-green-500/20 backdrop-blur-sm shadow-lg pulse">
            <div className="flex items-start mb-4">
              <img 
                src="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/3.svg" 
                alt="Solana Icon" 
                className="w-12 h-12 mr-3"
                style={{ background: 'transparent' }}
              />
              <h3 className="text-2xl font-bold">To complete for Solana</h3>
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
      
      {/* Animation styles - add pulsating effect to text boxes */}
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
          
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(142, 89, 255, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(142, 89, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(142, 89, 255, 0); }
          }
          
          .pulse {
            animation: pulse 2s infinite;
            transform: scale(1);
          }
        `}
      </style>
    </section>
  );
};

export default SolanaAbstractPartnership;
