import React from 'react';
import { Shirt, Award, Timer, Gift, Ticket } from 'lucide-react';
import { Button } from './ui/Button';

export const KitSection: React.FC = () => {
  const kitItems = [
    { icon: <Shirt size={32} />, title: "Camisa", desc: "Oficial do evento" },
    { icon: <Award size={32} />, title: "Medalha", desc: "Finisher" },
    { icon: <Ticket size={32} />, title: "Número de Peito", desc: "Identificação" },
    { icon: <Timer size={32} />, title: "Chip de Cronometragem", desc: "Controle de tempo" },
    { icon: <Gift size={32} />, title: "Brindes Surpresas", desc: "Dos parceiros" },
  ];

  return (
    <section id="kit" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2">
            <h2 className="text-4xl font-black italic text-brand-purple uppercase mb-6">
              O Kit do <span className="text-brand-neonDark border-b-4 border-brand-neon">Atleta</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Preparamos um kit completo para você curtir a prova com conforto e estilo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kitItems.map((item, idx) => (
                <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="text-brand-purple mr-4">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-brand-dark uppercase text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="secondary">Garantir meu Kit</Button>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-brand-neon rounded-3xl p-8 transform rotate-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/assets/evento-logo.png"
                  alt="Running Respira e Corre Experience"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};