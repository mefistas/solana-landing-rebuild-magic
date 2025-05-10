
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Community = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
          Join a thriving community
        </h2>
        
        <p className="text-xl mb-16 text-center max-w-3xl mx-auto">
          The Solana community is growing at an incredible pace. Build alongside and learn from community leaders.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-8 hover:bg-opacity-80 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Developer Resources</h3>
            <p className="text-gray-300 mb-12">
              Get all the knowledge and tools you need to build decentralized applications and integrate with Solana.
            </p>
            <a 
              href="https://solana.com/discord" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-solana-green flex items-center gap-2 font-medium hover:underline"
            >
              Join Discord <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 hover:bg-opacity-80 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Grant Program</h3>
            <p className="text-gray-300 mb-12">
              Seed funding for new project ideas, developer tools and community growth initiatives.
            </p>
            <a 
              href="https://solana.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-solana-green flex items-center gap-2 font-medium hover:underline"
            >
              Apply Now <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 hover:bg-opacity-80 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Hackathons</h3>
            <p className="text-gray-300 mb-12">
              Join thousands of builders creating projects and competing for prizes in our global hackathons.
            </p>
            <a 
              href="https://solana.com/events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-solana-green flex items-center gap-2 font-medium hover:underline"
            >
              Learn More <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
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
