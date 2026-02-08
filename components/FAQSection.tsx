import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/Button';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Preciso ser atleta para participar?",
    answer: "Não! O evento é inclusivo para todos os níveis, desde quem vai caminhar pela primeira vez até corredores experientes. O foco é saúde e bem-estar."
  },
  {
    question: "Qual a diferença entre caminhada e corrida?",
    answer: "A caminhada tem 3km e é ideal para iniciantes, famílias e quem deseja começar no esporte. A corrida tem 5km e é indicada para quem prefere correr, sempre com foco em saúde, bem-estar e participação — sem pressão competitiva."
  },
  {
    question: "O que vem no kit?",
    answer: "O kit do evento inclui: Camisa, Medalha, Número de peito, Chip de cronometragem e Brindes surpresas."
  },
  {
    question: "Terá apoio médico?",
    answer: "Sim, teremos ambulância e equipe de socorristas durante todo o percurso e na arena do evento para garantir a segurança de todos."
  },
  {
    question: "Onde é a concentração?",
    answer: "A concentração será na Praça da Bandeira em Arcoverde-PE, a partir das 18h. A largada será pontualmente às 19h."
  },
  {
    question: "Como faço a inscrição?",
    answer: "As inscrições são feitas exclusivamente online através do botão 'Inscreva-se' nesta página, que leva ao site oficial de cronometragem."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black italic text-center uppercase mb-12">
          Dúvidas <span className="text-brand-neon">Frequentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-brand-neon" /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-300 border-t border-white/10 mt-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Ainda tem dúvidas? Estamos aqui para ajudar.</p>
          <Button variant="primary">Inscreva-se Agora</Button>
        </div>
      </div>
    </section>
  );
};