import React from 'react';
import { Button } from './ui/Button';

export const Modalities: React.FC = () => {
  return (
    <section id="modalities" className="py-24 bg-brand-dark text-white relative clip-diagonal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic text-brand-neon uppercase mb-4">Modalidades</h2>
          <p className="text-gray-400">Escolha seu desafio e venha se divertir</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-brand-purple/10 border border-brand-purple/30 p-8 rounded-2xl hover:bg-brand-purple/20 transition-colors">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black italic text-white">Caminhada 3KM</h3>
              <span className="bg-brand-neon text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">Iniciante</span>
            </div>
            <p className="text-gray-300 mb-6 min-h-[80px]">
              Ideal para quem está começando, para famílias, idosos ou quem quer curtir o evento sem pressa. Um percurso leve e cheio de energia.
            </p>
            <ul className="space-y-3 mb-8 text-sm font-medium">
              <li className="flex items-center text-brand-neon"><span className="w-2 h-2 bg-brand-neon rounded-full mr-2"></span>Largada: 19:00</li>
              <li className="flex items-center text-brand-neon"><span className="w-2 h-2 bg-brand-neon rounded-full mr-2"></span>Concentração: Praça da Bandeira</li>
              <li className="flex items-center text-brand-neon"><span className="w-2 h-2 bg-brand-neon rounded-full mr-2"></span>Medalha de participação para todos</li>
            </ul>
            <Button variant="outline" fullWidth>Quero Caminhar</Button>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-brand-purple to-brand-purpleDark p-8 rounded-2xl shadow-2xl transform md:-translate-y-4 border border-brand-neon/20">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black italic text-white">Corrida 5KM</h3>
              <span className="bg-white text-brand-purple text-xs font-bold px-3 py-1 rounded-full uppercase">Desafio</span>
            </div>
            <p className="text-white/90 mb-6 min-h-[80px]">
              Para quem quer se superar, sentir a adrenalina e completar o percurso correndo. Ambiente seguro e motivador, sem pressão de elite.
            </p>
            <ul className="space-y-3 mb-8 text-sm font-medium text-white">
              <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>Largada: 19:00</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>Concentração: Praça da Bandeira</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>Chip de cronometragem</li>
            </ul>
            <Button variant="primary" fullWidth>Quero Correr</Button>
          </div>
        </div>
      </div>
    </section>
  );
};