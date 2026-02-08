import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Motivation } from './components/Motivation';
import { Modalities } from './components/Modalities';
import { KitSection } from './components/KitSection';
import { StructureSection } from './components/StructureSection';
import { OrganizersCarousel } from './components/OrganizersCarousel';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { useScrollAnimations } from './hooks/useScrollAnimations';

const App: React.FC = () => {
  // Ativar animações ao scroll
  useScrollAnimations();

  return (
    <div className="min-h-screen font-sans selection:bg-brand-neon selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <div className="animate-on-scroll"><Countdown /></div>
        <div className="animate-on-scroll"><Motivation /></div>
        <div className="animate-on-scroll"><Modalities /></div>
        <div className="animate-on-scroll"><KitSection /></div>
        <div className="animate-on-scroll"><StructureSection /></div>
        <div className="animate-on-scroll"><OrganizersCarousel /></div>
        <div className="animate-on-scroll"><LocationSection /></div>
        <div className="animate-on-scroll"><FAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;