
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Community = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-solana-purple opacity-15 rounded-full blur-[120px]"
          style={{
            animation: 'moveGlow 25s infinite alternate ease-in-out',
            right: '15%',
            top: '10%',
          }}
        ></div>
        
        <div className="absolute w-80 h-80 bg-solana-green opacity-15 rounded-full blur-[100px]"
          style={{
            animation: 'pulseAndMove 30s infinite alternate-reverse ease-in-out',
            left: '10%',
            bottom: '20%',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
          Designed for real world use.
        </h2>
        
        <p className="text-xl mb-16 text-center max-w-3xl mx-auto">
         Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800/80 rounded-xl p-8 hover:bg-opacity-90 transition-colors border border-gray-800/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Boba Guys</h3>
            <p className="text-gray-300 mb-12">
              Case Study: How Boba Guys Revamped Its Rewards Program With Solana
            </p>
            <a 
              href="https://solana.com/news/case-study-boba-guys" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-solana-green to-emerald-400 flex items-center gap-2 font-medium hover:underline"
            >
              Learn more <ExternalLink className="h-4 w-4 text-solana-green" />
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800/80 rounded-xl p-8 hover:bg-opacity-90 transition-colors border border-gray-800/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Homebase</h3>
            <p className="text-gray-300 mb-12">
             Case Study: Homebase is Changing Real Estate Investments with Solana
            </p>
            <a 
              href="https://solana.com/news/case-study-homebase" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-solana-green to-emerald-400 flex items-center gap-2 font-medium hover:underline"
            >
              Learn more <ExternalLink className="h-4 w-4 text-solana-green" />
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800/80 rounded-xl p-8 hover:bg-opacity-90 transition-colors border border-gray-800/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Hivemapper</h3>
            <p className="text-gray-300 mb-12">
              Case Study: Hivemapper decentralizes mapping with better real-time data and community incentives
            </p>
            <a 
              href="https://solana.com/news/case-study-hivemapper" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-transparent bg-clip-text bg-gradient-to-r from-solana-green to-emerald-400 flex items-center gap-2 font-medium hover:underline"
            >
              Learn More <ExternalLink className="h-4 w-4 text-solana-green" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Empowering Solana's
Content Creators</h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Solana Collective provides opportunities and initiatives to empower and uplift Content Creators and Projects in the Solana Ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="relative overflow-hidden group inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-solana-purple to-solana-green rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                <a href="https://solana.com/ecosystem" target="_blank" rel="noopener noreferrer">
                  <button className="relative z-10 px-6 py-3 bg-black text-white rounded-full border border-white/20 font-medium group-hover:shadow-lg group-hover:shadow-solana-purple/20">
                    Explore ecosystem
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:bg-gray-800/70 transition-colors border border-gray-800/40">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">400k+</h3>
              <p className="text-gray-400">Discord members</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:bg-gray-800/70 transition-colors border border-gray-800/40">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">17M+</h3>
              <p className="text-gray-400">NFTs minted</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:bg-gray-800/70 transition-colors border border-gray-800/40">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">$1.6B+</h3>
              <p className="text-gray-400">Daily program interactions</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:bg-gray-800/70 transition-colors border border-gray-800/40">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">11M+</h3>
              <p className="text-gray-400">Active accounts</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add keyframes for animations - these will be shared across components */}
      <style>
        {`
          @keyframes moveGlow {
            0% { transform: translate(0, 0); opacity: 0.1; }
            33% { transform: translate(50px, -30px); opacity: 0.25; }
            66% { transform: translate(-30px, 50px); opacity: 0.2; }
            100% { transform: translate(30px, 20px); opacity: 0.1; }
          }
          
          @keyframes pulseAndMove {
            0% { opacity: 0.05; transform: translate(0, 0) scale(0.9); }
            25% { opacity: 0.2; transform: translate(30px, 10px) scale(1); }
            50% { opacity: 0.3; transform: translate(10px, 40px) scale(1.1); }
            75% { opacity: 0.2; transform: translate(-20px, 10px) scale(1); }
            100% { opacity: 0.05; transform: translate(0px, -30px) scale(0.85); }
          }
        `}
      </style>
    </section>
  );
};

export default Community;
