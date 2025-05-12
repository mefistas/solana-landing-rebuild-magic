import React from 'react';

const SolanaAbstractPartnership = () => {
  // Common SVG element creation function
  const renderFloatingElement = (src: string, position: string, size: string) => (
    <div className={`absolute ${position}`}>
      <img 
        src={src} 
        alt="Floating Element" 
        className={`${size}`} 
        style={{ background: 'transparent' }}
      />
    </div>
  );

  // Common box component
  const PartnershipBox = ({ 
    logoSrc, 
    title, 
    borderColor, 
    dotColor 
  }: { 
    logoSrc: string; 
    title: string; 
    borderColor: string; 
    dotColor: string;
  }) => (
    <div className={`p-8 bg-gradient-to-br from-gray-900 to-gray-800/80 rounded-xl border ${borderColor} backdrop-blur-sm shadow-lg pulse`}>
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 mr-3 flex items-center justify-center">
          <img 
            src={logoSrc} 
            alt={`${title} Logo`} 
            className="w-10 h-10"
            style={{ background: 'transparent' }}
          />
        </div>
        <h3 className="text-2xl font-bold">To complete for {title}</h3>
      </div>
      <p className="text-gray-300 mb-4">
        Add a subheading with your content here. Describe benefits, features or details
        about this partnership.
      </p>
      <ul className="space-y-2">
        <li className="flex items-center">
          <svg className={`w-5 h-5 mr-2 ${dotColor}`} viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="8" />
          </svg>
          <span>Key highlight or statistic</span>
        </li>
        <li className="flex items-center">
          <svg className={`w-5 h-5 mr-2 ${dotColor}`} viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="8" />
          </svg>
          <span>Important feature or benefit</span>
        </li>
      </ul>
    </div>
  );

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Purple elements (left side) */}
        {renderFloatingElement("https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/20.svg", "left-[5%] top-[15%]", "w-[60px] h-[60px]")}
        {renderFloatingElement("https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/20.svg", "left-[15%] top-[50%]", "w-[40px] h-[40px]")}
        {renderFloatingElement("https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/20.svg", "left-[8%] bottom-[20%]", "w-[80px] h-[80px]")}
        
        {/* Green elements (right side) */}
        {renderFloatingElement("https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/17.svg", "right-[5%] top-[20%]", "w-[60px] h-[60px]")}
        {renderFloatingElement("https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/17.svg", "right-[20%] bottom-[15%]", "w-[40px] h-[40px]")}
        {renderFloatingElement("https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/17.svg", "right-[10%] top-[50%]", "w-[70px] h-[70px]")}

        {/* Chrome figurine SVGs - simplified */}
        <div className="absolute left-[10%] bottom-[10%] opacity-70">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="url(#chrome-gradient-1)" xmlns="#">
            <path d="M60 20 L80 40 L70 120 L60 140 L50 120 L40 40 Z" />
            <defs>
              <linearGradient id="chrome-gradient-1" x1="0" y1="0" x2="100%" y2="100%">
                <stop stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="1" stopColor="#CCCCCC" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute right-[10%] bottom-[10%] opacity-70">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="url(#chrome-gradient-2)" xmlns="#">
            <path d="M60 20 L80 60 L75 130 L60 150 L45 130 L40 60 Z" />
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
          <PartnershipBox 
            logoSrc="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/1.svg"
            title="Abstract"
            borderColor="border-purple-500/20"
            dotColor="text-solana-purple"
          />
          
          {/* Center content */}
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              AIRDROP REQUAIREMENTS 
            </h2>
            
            <button
              onClick={() => window.openModal?.()}
              className="rounded-full px-8 py-3 bg-gradient-to-r from-solana-purple to-solana-green text-white font-medium"
            >
              Connect wallet
            </button>
          </div>
          
          {/* Right text box */}
          <PartnershipBox 
            logoSrc="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/3.svg"
            title="Solana"
            borderColor="border-green-500/20"
            dotColor="text-solana-green"
          />
        </div>
      </div>
      
      {/* Animation styles */}
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
