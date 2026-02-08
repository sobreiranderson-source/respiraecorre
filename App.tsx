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

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-neon selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Countdown />
        <Motivation />
        <Modalities />
        <KitSection />
        <StructureSection />
        <OrganizersCarousel />
        <LocationSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;