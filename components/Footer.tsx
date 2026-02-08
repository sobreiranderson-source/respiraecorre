import React from 'react';
import { CONTACT_EMAIL, INSTAGRAM_LINK } from '../constants';
import { Button } from './ui/Button';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black italic text-brand-neon mb-2">RUNNING</h2>
            <p className="uppercase tracking-widest text-sm text-gray-400">Respira e Corre Experience</p>
          </div>
          
          <div className="flex gap-4">
             {/* Social - Only Instagram as requested */}
             <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-brand-purple transition-colors group">
                <Instagram size={24} className="group-hover:text-white" />
             </a>
          </div>

          <div>
             <Button variant="primary">Garantir Vaga</Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 grid md:grid-cols-3 gap-8 text-sm text-gray-500 text-center md:text-left">
          <div>
            <h4 className="text-white font-bold uppercase mb-2">Contato</h4>
            <p>{CONTACT_EMAIL}</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase mb-2">Local</h4>
            <p>Arcoverde - Pernambuco</p>
            <p>Praça da Bandeira</p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase mb-2">Data</h4>
            <p>16 de Maio de 2026</p>
            <p>Largada às 19:00</p>
          </div>
        </div>

        <div className="text-center mt-16 text-xs text-gray-700">
          &copy; 2026 Running Respira e Corre Experience. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};