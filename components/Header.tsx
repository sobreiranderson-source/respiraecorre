import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Sobre', id: 'about' },
    { name: 'Modalidades', id: 'modalities' },
    { name: 'Kit', id: 'kit' },
    { name: 'Estrutura', id: 'structure' },
    { name: 'Organizadores', id: 'organizers' },
    { name: 'Local', id: 'location' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10 shadow-xl">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="cursor-pointer flex flex-col items-start"
        >
          <span className="text-brand-neon font-black italic text-xl leading-none">RUNNING</span>
          <span className="text-white text-xs tracking-widest uppercase">Respira e Corre</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-gray-300 hover:text-brand-neon text-sm font-semibold uppercase tracking-wide transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:block">
          <Button variant="primary" className="py-2 px-4 text-sm">Inscreva-se</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white hover:text-brand-neon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-brand-dark border-b border-brand-purple p-6 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-left text-white hover:text-brand-neon font-bold text-lg uppercase"
            >
              {item.name}
            </button>
          ))}
          <Button fullWidth variant="primary">Inscreva-se Agora</Button>
        </div>
      )}
    </header>
  );
};