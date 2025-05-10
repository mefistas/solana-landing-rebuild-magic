
import React from 'react';
import { Button } from '@/components/ui/button';

const JoinCreators = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            It's time to join thousands of creators, artists, and developers on Solana
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Start building the future today on the world's most performant blockchain.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-solana-purple hover:bg-opacity-90 text-white px-8 py-6 text-lg">
              <a href="https://solana.com/developers" target="_blank" rel="noopener noreferrer">
                Start Building
              </a>
            </Button>
            <Button size="lg" className="bg-solana-purple hover:bg-opacity-90 text-white px-8 py-6 text-lg">
              <a href="https://solana.com/news" target="_blank" rel="noopener noreferrer">
                Read The Blog
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCreators;
