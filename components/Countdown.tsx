import React, { useEffect, useState } from 'react';
import { EVENT_DATE } from '../constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEventOver, setIsEventOver] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(EVENT_DATE) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsEventOver(true);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // initial call

    return () => clearInterval(timer);
  }, []);

  if (isEventOver) {
    return (
      <div className="bg-brand-purple py-12 text-center text-white">
        <h2 className="text-2xl font-bold uppercase">O evento já aconteceu</h2>
        <p className="mt-2">Acompanhe as próximas edições!</p>
      </div>
    );
  }

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-6">
      <div className="bg-brand-dark/20 backdrop-blur-sm w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg border border-white/20 shadow-inner">
        <span className="text-2xl md:text-4xl font-black text-white font-mono">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm font-bold uppercase mt-2 text-brand-dark">{label}</span>
    </div>
  );

  return (
    <section className="bg-brand-neon py-12 relative mt-8 mb-12 mx-4 md:mx-auto max-w-5xl rounded-xl shadow-2xl flex flex-col items-center justify-center">
      <h3 className="text-brand-dark font-black uppercase tracking-widest mb-6 text-sm md:text-base">Contagem Regressiva</h3>
      <div className="flex flex-wrap justify-center gap-2">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>
    </section>
  );
};