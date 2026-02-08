import React from 'react';
import { Droplets, Music, ShieldPlus, Trophy, Apple } from 'lucide-react';

export const StructureSection: React.FC = () => {
  const benefits = [
    { icon: <Droplets />, title: "Hidratação", desc: "Pontos estratégicos no percurso" },
    { icon: <ShieldPlus />, title: "Apoio Médico", desc: "Ambulância e socorristas" },
    { icon: <Apple />, title: "Frutas", desc: "Mesa de frutas na chegada" },
    { icon: <Trophy />, title: "Troféus", desc: "Celebração para os primeiros colocados" },
    { icon: <Music />, title: "Música", desc: "Animação na arena do evento" },
  ];

  return (
    <section id="structure" className="py-20 bg-brand-purple text-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase">Estrutura Premium</h2>
          <p className="text-brand-neon font-medium mt-2">Segurança e conforto para você só se preocupar em correr</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl flex flex-col items-center text-center hover:bg-white/20 transition-colors">
              <div className="text-brand-neon mb-4 scale-150">
                {benefit.icon}
              </div>
              <h3 className="font-bold uppercase mb-2">{benefit.title}</h3>
              <p className="text-xs text-gray-200">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};