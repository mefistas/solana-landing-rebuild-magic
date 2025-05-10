
import React from 'react';
import { Button } from '@/components/ui/button';

const JoinCommunityMillions = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Join a community of millions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Free Account</h3>
              <p className="text-gray-300 mb-6">
                Create a free account to get started on your blockchain journey with minimal commitment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-solana-purple mr-3"></div>
                  <span>Basic storage features</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-solana-purple mr-3"></div>
                  <span>Access to community</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-solana-purple mr-3"></div>
                  <span>Simple integrations</span>
                </div>
              </div>
              <Button className="mt-8 w-full bg-transparent hover:bg-white/10 border border-white">
                Sign Up Free
              </Button>
            </div>
            
            <div className="bg-solana-purple rounded-xl p-8 hover:bg-opacity-90 transition-colors">
              <div className="bg-white text-solana-purple text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">POPULAR</div>
              <h3 className="text-2xl font-bold mb-4">Pro Account</h3>
              <p className="text-white mb-6">
                Unlock more features and capabilities for serious developers and creators.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-white mr-3"></div>
                  <span>Everything in Free</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-white mr-3"></div>
                  <span>Advanced storage options</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-white mr-3"></div>
                  <span>Priority support</span>
                </div>
              </div>
              <Button className="mt-8 w-full bg-white text-solana-purple hover:bg-opacity-90">
                Get Started
              </Button>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <p className="text-gray-300 mb-6">
                Custom solutions for businesses that need advanced features and dedicated support.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-solana-green mr-3"></div>
                  <span>Everything in Pro</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-solana-green mr-3"></div>
                  <span>Dedicated support team</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-solana-green mr-3"></div>
                  <span>Custom integrations</span>
                </div>
              </div>
              <Button className="mt-8 w-full bg-transparent hover:bg-white/10 border border-solana-green text-solana-green">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunityMillions;
