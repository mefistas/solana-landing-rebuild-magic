
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Community from '../components/Community';
import AbstractExplore from '../components/AbstractExplore';
import WhatIsAbstract from '../components/WhatIsAbstract';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Community />
      <WhatIsAbstract />
      <AbstractExplore />
      <Footer />
    </div>
  );
};

export default Index;
