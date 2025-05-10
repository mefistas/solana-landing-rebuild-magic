
import React from 'react';
import { Button } from '@/components/ui/button';

const Community = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join a thriving community</h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Join the thousands of developers, artists, and creators already building on Solana.
              Whether you're looking to connect with other builders or find the newest dapps,
              start with Solana community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="px-6 py-3 bg-solana-purple hover:bg-opacity-90 text-white rounded-lg">
                <a href="https://solana.com/discord" target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
              <Button variant="outline" className="px-6 py-3 border-white hover:bg-white/10 text-white rounded-lg">
                <a href="https://solana.com/ecosystem" target="_blank" rel="noopener noreferrer">
                  Explore ecosystem
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-2">400k+</h3>
              <p className="text-gray-400">Discord members</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-2">17M+</h3>
              <p className="text-gray-400">NFTs minted</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-2">$1.6B+</h3>
              <p className="text-gray-400">Daily program interactions</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-2">11M+</h3>
              <p className="text-gray-400">Active accounts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
