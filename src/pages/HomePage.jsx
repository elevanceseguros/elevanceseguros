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
      {/* Ajustei o PB para 24 para dar o espaço correto entre estrelas e formulário */}
      <section className="bg-[#1a3a52] pt-12 md:pt-16 pb-24 md:pb-32 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-8">
            <ShieldCheck className="w-4 h-4" />
            <span>Sua corretora de confiança em SP</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Seguro que cabe no seu bolso, <span className="text-blue-400">sem enrolação</span>
          </h1>

          {/* Ajustei o MB para 12 para desgrudar do seu nome */}
          <p className="text-blue-100/80 text-sm md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Informe o seu nome e WhatsApp. Em minutos recebe as melhores opções de seguro e saúde direto no seu telemóvel.
          </p>

          {/* Card do Corretor com espaçamento original */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img 
                src="/preview.webp" 
                alt="Rodrigo Farias" 
                className="w-20 h-20 rounded-full border-4 border-white/10 mb-3 object-cover shadow-2xl"
                onError={(e) => { e.target.src = "https://via.placeholder.com/80?text=RF"; }}
              />
              <div className="absolute bottom-4 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-[#1a3a52]"></div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold text-lg leading-tight">Rodrigo Farias</h3>
              <p className="text-blue-300 text-sm font-medium mt-1">Corretor de Seguros · São Paulo</p>
              <div className="flex justify-center gap-1 text-yellow-400 mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Margem negativa suave (-mt-16) para o formulário aparecer sem cobrir as estrelas */}
      <div className="-mt-16 md:-mt-20 px-4 relative z-20 max-w-md mx-auto">
        <div className="bg-white rounded-[32px] p-2 shadow-2xl">
          <LeadFormSincero />
        </div>
      </div>

      <div className="pt-12">
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
