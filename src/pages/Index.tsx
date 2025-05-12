
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Community from '../components/Community';
import WhatIsAbstract from '../components/WhatIsAbstract';
import Footer from '../components/Footer';
import CommunityStats from '../components/CommunityStats';
import EngineeredForBuilders from '../components/EngineeredForBuilders';
import SolanaAbstractPartnership from '../components/SolanaAbstractPartnership';

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <WhatIsAbstract />
      <CommunityStats />
      <Community />
      <EngineeredForBuilders />
      <SolanaAbstractPartnership />
      <Footer />
    </div>
  );
};

export default Index;
