import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

interface Organizer {
  id: number;
  name: string;
  role: string;
  description: string;
  image?: string; // Optional, defaults to placeholder if missing
}

const organizers: Organizer[] = [
  {
    id: 1,
    name: "DRA. MAYARA SAMPAIO",
    role: "Médica Ortopedista",
    description: "Entusiasta da prática de exercício físico, estimula a realização de atividades físicas como parte essencial da saúde. Com a Respira e Corre, não seria diferente.",
    image: "/organizers/mayara-sampaio.jfif"
  },
  {
    id: 2,
    name: "DR. BRUNO TENÓRIO ROCHA",
    role: "Médico Pneumologista",
    description: "Correr faz parte de quem ele é. Por isso, acredita profundamente no poder desse esporte simples, acessível e transformador.",
    image: "/organizers/bruno-rocha.jfif"
  },
  {
    id: 3,
    name: "DRA. NELLY SAMPAIO",
    role: "Médica Cardiologista",
    description: "Apesar da rotina intensa, é praticante de exercícios como CrossFit. Estimula seus pacientes à prática esportiva e, desde 2025, colocou como meta pessoal evoluir nos exercícios cardiovasculares e investir na corrida.",
    image: "/organizers/nelly-sampaio.jfif"
  },
  {
    id: 4,
    name: "DRA. LUANNA GUIDO",
    role: "Médica, atua em Endocrinologia",
    description: "Acredita no esporte como parte do cuidado integral com a saúde, alinhando movimento e endocrinologia para mais equilíbrio, prevenção e qualidade de vida.",
    image: "/organizers/luanna-guido.jfif"
  },
];

export const OrganizersCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // card width + margin
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="organizers" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black italic text-brand-dark uppercase">Conheça os Organizadores</h2>
            <p className="text-gray-600 mt-2">Uma equipe médica unida pelo propósito da saúde.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll('left')} className="p-3 bg-white rounded-full shadow hover:bg-brand-neon hover:text-brand-dark transition-colors">
              <ChevronLeft />
            </button>
            <button onClick={() => scroll('right')} className="p-3 bg-brand-dark text-white rounded-full shadow hover:bg-brand-purple transition-colors">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory"
        >
          {organizers.map((org) => (
            <div
              key={org.id}
              className="min-w-[320px] md:min-w-[380px] bg-white rounded-xl shadow-lg overflow-hidden snap-center flex-shrink-0 border-b-4 border-brand-purple flex flex-col"
            >
              {/* Image / Placeholder Area */}
              <div className="h-48 bg-gray-200 overflow-hidden relative">
                {org.image ? (
                  <img src={org.image} alt={org.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <div className="bg-white p-4 rounded-full mb-2">
                      <User size={48} className="text-brand-purple" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">Foto em breve</span>
                  </div>
                )}
                <span className="absolute top-4 right-4 bg-brand-neon text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Médico(a)
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-lg text-brand-dark mb-1 leading-tight">{org.name}</h3>
                <p className="text-brand-purple text-xs font-bold mb-4 uppercase tracking-wide">{org.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {org.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="md:hidden text-center text-gray-400 text-xs mt-4 uppercase tracking-widest">
          Arraste para ver mais
        </p>
      </div>
    </section>
  );
};