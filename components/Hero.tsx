import React from 'react';
import { Button } from './ui/Button';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-brand-dark overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-purple opacity-20 transform skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-purple to-transparent opacity-30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="text-white space-y-6">
          <div className="inline-block bg-brand-neon text-brand-dark px-3 py-1 font-bold text-xs uppercase tracking-widest mb-2 transform -skew-x-12">
            1ª Edição Confirmada
          </div>

          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tight">
            Running <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-white">
              Respira e Corre
            </span> <br />
            Experience
          </h1>

          <div className="flex flex-col gap-2 text-gray-300 font-medium text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="text-brand-neon" size={20} />
              <span>Arcoverde–PE</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="text-brand-neon" size={20} />
              <span>16/05/2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-brand-neon" size={20} />
              <span>Largada às 19:00</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl font-light text-gray-200 border-l-4 border-brand-neon pl-4 py-1">
            “Um evento para todos os ritmos. Aqui, o objetivo é saúde, bem-estar e superação — não importa seu nível.”
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 mb-8">
            <Button variant="primary">Inscreva-se Agora</Button>
            <Button variant="outline" onClick={() => document.getElementById('modalities')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Detalhes
            </Button>
          </div>
        </div>

        {/* Visual Element / Event Art */}
        <div className="relative hidden md:block">
          <div className="relative w-full aspect-square max-w-md mx-auto transform hover:scale-105 transition-transform duration-500">
            {/* Main Art Container */}
            <div className="relative z-10 w-full h-full rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10">
              <img
                src="/assets/evento-logo.png"
                alt="Running Respira e Corre Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};