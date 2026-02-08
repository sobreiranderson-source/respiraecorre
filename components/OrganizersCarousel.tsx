import React from 'react';
import { User } from 'lucide-react';

interface Organizer {
  id: number;
  name: string;
  role: string;
  description: string;
  image?: string;
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
  return (
    <section id="organizers" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black italic text-brand-dark uppercase">Conheça os Organizadores</h2>
          <p className="text-gray-600 mt-2">Uma equipe médica unida pelo propósito da saúde.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {organizers.map((org) => (
            <div
              key={org.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-b-4 border-brand-purple flex flex-col"
            >
              {/* Image / Placeholder Area */}
              <div className="h-64 bg-white overflow-hidden relative flex items-center justify-center">
                {org.image ? (
                  <img src={org.image} alt={org.name} className="w-full h-full object-contain" />
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
      </div>
    </section>
  );
};