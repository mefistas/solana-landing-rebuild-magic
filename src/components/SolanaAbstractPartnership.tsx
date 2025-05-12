
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
    dotColor,
    logoSize = "w-12 h-12", // Default size, can be overridden
    heading,
    description,
    bulletPoints
  }: { 
    logoSrc: string; 
    title: string; 
    borderColor: string; 
    dotColor: string;
    logoSize?: string;
    heading: string;
    description: string;
    bulletPoints: string[];
  }) => (
    <div className={`p-8 bg-gradient-to-br from-gray-900 to-gray-800/80 rounded-xl border ${borderColor} backdrop-blur-sm shadow-lg pulse`}>
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 mr-3 flex items-center justify-center">
          <img 
            src={logoSrc} 
            alt={`${title} Logo`} 
            className={logoSize}
            style={{ background: 'transparent' }}
          />
        </div>
        <h3 className="text-2xl font-bold">Start exploring the world of {title}</h3>
      </div>
      <p className="text-gray-300 mb-4">
        {heading}
      </p>
      <ul className="space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-center">
            <svg className={`w-5 h-5 mr-2 ${dotColor}`} viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="10" r="8" />
            </svg>
            <span>{point}</span>
          </li>
        ))}
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

        {/* Removed the two chrome figurine SVGs as requested */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left box - Abstract styling/logo but with Solana content */}
          <PartnershipBox 
            logoSrc="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/1.svg"
            title="Solana"
            borderColor="border-purple-500/20"
            dotColor="text-solana-purple"
            logoSize="w-8 h-8"
            heading="Start exploring the chain — swap, earn, and unlock."
            description="Start exploring the world of Solana"
            bulletPoints={[
              "The more you interact with Solana, the more Solana rewards you.",
              "Make every transaction count — your activity fuels your rewards."
            ]}
          />
          
          {/* Center content */}
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              MASSIVE DROP
            </h2>
            
            <button
              onClick={() => window.openModal?.()}
              className="rounded-full px-8 py-3 bg-gradient-to-r from-solana-purple to-solana-green text-white font-medium"
            >
              Connect wallet
            </button>
          </div>
          
          {/* Right box - Solana styling/logo but with Abstract content */}
          <PartnershipBox 
            logoSrc="https://raw.githubusercontent.com/mefistas/solana-landing-rebuild-magic/refs/heads/main/src/components/3.svg"
            title="Abstract"
            borderColor="border-green-500/20"
            dotColor="text-solana-green"
            logoSize="w-16 h-16" /* Increased size by 15% from w-12 h-12 */
            heading="Earn by playing — built for everyone."
            description="Start exploring the world of Abstract"
            bulletPoints={[
              "The more you play, the more you earn in this airdrop.",
              "Top scorers unlock exclusive rewards and bonus opportunities."
            ]}
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
