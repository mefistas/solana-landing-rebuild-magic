
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WhatIsAbstract = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-solana-green">What is Abstract?</h2>
            <div className="space-y-6 text-lg">
              <p>
                Abstract is a secure, multi-chain storage solution for gaming and consumer applications. 
                Built on the fastest, most secure, and most sustainable blockchain, Abstract offers versatile 
                solutions to assist you in your endeavors.
              </p>
              <p>
                With Abstract, you have the capability to store NFTs, tokens, and personal data in a secure, 
                self-custodial wallet. This provides you with unparalleled freedom to have your assets and 
                information available whenever and wherever needed.
              </p>
              <p>
                As a scalable solution, Abstract is designed to accommodate an unlimited number of users, 
                but with no bearing on performance. Whether you're a developer or a user, Abstract's capabilities 
                make it an essential tool in your blockchain journey.
              </p>
              <Button className="mt-4 bg-solana-green text-black hover:bg-opacity-90">
                <a 
                  href="https://www.abs.xyz/blog/articles/what-is-abstract" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-solana-green/20 to-transparent p-8 rounded-2xl">
            {/* Logo placeholder - you'll add the SVG logo later */}
            <div className="h-64 flex items-center justify-center">
              <div className="text-solana-green text-7xl font-bold">Abstract</div>
            </div>
            <p className="text-center text-gray-300 mt-4">
              The secure, multi-chain storage solution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAbstract;
