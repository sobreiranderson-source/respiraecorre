import React from 'react';
import { Button } from './ui/Button';
import { MapPin, Navigation } from 'lucide-react';
import { LOCATION_IFRAME_SRC, LOCATION_NAME, MAP_LINK } from '../constants';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner border-4 border-gray-100 relative">
               <iframe 
                src={LOCATION_IFRAME_SRC} 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa do Local"
              ></iframe>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-black italic text-brand-dark uppercase mb-6">Onde tudo acontece</h2>
            
            <div className="bg-brand-gray p-6 rounded-xl border-l-8 border-brand-purple mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-purple mt-1 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl text-brand-dark">Concentração</h4>
                  <p className="text-gray-600 text-lg">{LOCATION_NAME}</p>
                  <p className="text-sm text-gray-400 mt-2">Ponto de referência fácil acesso no centro da cidade.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              A Praça da Bandeira oferece espaço amplo para aquecimento, tendas de parceiros e toda a estrutura de largada e chegada que preparamos para vocês.
            </p>

            <Button href={MAP_LINK} variant="primary">
              <Navigation className="mr-2" size={20} />
              Abrir no Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};