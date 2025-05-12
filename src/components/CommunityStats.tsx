
import React from 'react';

const CommunityStats = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-solana-purple opacity-10 rounded-full blur-[130px]"
          style={{
            animation: 'pulseAndMove 25s infinite alternate ease-in-out',
            right: '10%',
            top: '20%',
          }}
        ></div>
        
        <div className="absolute w-80 h-80 bg-solana-green opacity-10 rounded-full blur-[100px]"
          style={{
            animation: 'moveGlow 30s infinite alternate-reverse ease-in-out',
            left: '5%',
            bottom: '10%',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Join a community of millions.
            </h2>
          </div>
          
          <div className="space-y-16">
            {/* Stats with gradient text */}
            <div>
              <h3 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                29.7M
              </h3>
              <p className="text-gray-400 uppercase tracking-wider mt-2">
                Fee paying accounts, all time
              </p>
            </div>
            
            <div>
              <h3 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                340M+
              </h3>
              <p className="text-gray-400 uppercase tracking-wider mt-2">
                NFTs minted
              </p>
            </div>
            
            <div>
              <h3 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                $0.00064
              </h3>
              <p className="text-gray-400 uppercase tracking-wider mt-2">
                Median fee per transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
