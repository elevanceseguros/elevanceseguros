import React from 'react';
import LeadFormSincero from '@/components/LeadFormSincero';
import InsuranceTypes from '@/components/InsuranceTypes';
import HealthPlans from '@/components/HealthPlans';
import VehicleProtection from '@/components/VehicleProtection';
import Consortiums from '@/components/Consortiums';
import ContactForm from '@/components/ContactForm';
import { Star, ShieldCheck } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Reduzi o padding do topo de pt-8 para pt-6 no mobile */}
      <section className="bg-[#1a3a52] pt-6 md:pt-16 pb-20 md:pb-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          
          {/* Badge compacta */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 px-3 py-1 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-wider mb-3 md:mb-8">
            <ShieldCheck className="w-3 h-3" />
            <span>Sua corretora de confiança em SP</span>
          </div>

          {/* Título mais denso (mb-3) */}
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-3 leading-[1.1]">
            Seguro que cabe no seu bolso, <span className="text-blue-400">sem enrolação</span>
          </h1>

          {/* Texto menor no mobile para ganhar altura (text-xs) */}
          <p className="text-blue-100/80 text-xs md:text-xl mb-5 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Informe o seu nome e WhatsApp. Em minutos recebe as melhores opções direto no seu telemóvel.
          </p>

          {/* Card do Corretor Compacto */}
          <div className="flex flex-col items-center mb-5 md:mb-10">
            <div className="relative">
              <img 
                src="/preview.webp" 
                alt="Rodrigo Farias" 
                className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-white/10 mb-2 object-cover shadow-2xl"
                onError={(e) => { e.target.src = "https://via.placeholder.com/80?text=RF"; }}
              />
              <div className="absolute bottom-2 right-0 bg-green-500 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-[#1a3a52]"></div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold text-sm md:text-lg leading-none">Rodrigo Farias</h3>
              <p className="text-blue-300 text-[10px] md:text-sm font-medium mt-1">Corretor de Seguros · São Paulo</p>
              <div className="flex justify-center gap-0.5 text-yellow-400 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Margem negativa mais agressiva no mobile (-mt-24) para o Form aparecer logo */}
      <div className="-mt-24 md:-mt-16 px-4 relative z-20 max-w-md mx-auto">
        <div className="bg-white rounded-[32px] p-1 shadow-2xl">
          <LeadFormSincero />
        </div>
      </div>

      <div className="pt-8">
        <InsuranceTypes />
      </div>
      <HealthPlans />
      <VehicleProtection />
      <Consortiums />
      <ContactForm />
    </>
  );
};

export default HomePage;
