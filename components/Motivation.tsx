import React from 'react';
import { Heart, Activity, Users } from 'lucide-react';

export const Motivation: React.FC = () => {
  const quotes = [
    { text: "Se você anda, você já começou.", author: "Iniciante" },
    { text: "Não é sobre ser o mais rápido. É sobre estar presente.", author: "Foco" },
    { text: "3km ou 5km: o importante é respirar, se mover e celebrar.", author: "Meta" },
    { text: "Evento feito para todos os corpos e todos os ritmos.", author: "Inclusão" }
  ];

  return (
    <section id="about" className="py-20 bg-brand-gray relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic text-brand-purple uppercase mb-4">Por que participar?</h2>
          <p className="text-gray-600 text-lg">
            Acreditamos que o esporte é a maior ferramenta de transformação. 
            Este não é um evento apenas para atletas de elite, é um convite para cuidar de você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-neon hover:-translate-y-2 transition-transform duration-300">
              <div className="text-brand-purple mb-4">
                {idx % 3 === 0 ? <Heart size={32} /> : idx % 3 === 1 ? <Activity size={32} /> : <Users size={32} />}
              </div>
              <p className="text-brand-dark font-bold text-lg mb-4">"{quote.text}"</p>
              <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">— {quote.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};