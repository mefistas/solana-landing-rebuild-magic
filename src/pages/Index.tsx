
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Community from '../components/Community';
import AbstractExplore from '../components/AbstractExplore';
import WhatIsAbstract from '../components/WhatIsAbstract';
import JoinCreators from '../components/JoinCreators';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Community />
      <WhatIsAbstract />
      <AbstractExplore />
      <JoinCreators />
      <Footer />
    </div>
  );
};

export default Index;
