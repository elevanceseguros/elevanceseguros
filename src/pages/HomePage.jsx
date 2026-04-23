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
      {/* Reduzi o pt-16 para pt-8 e o pb-24 para pb-20 no mobile */}
      <section className="bg-[#1a3a52] pt-8 md:pt-16 pb-20 md:pb-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Badge menor e com margem inferior reduzida (mb-4) */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 md:mb-8">
            <ShieldCheck className="w-3 h-3" />
            <span>Sua corretora de confiança em SP</span>
          </div>

          {/* Título com leading-tight para ocupar menos linhas verticais */}
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Seguro que cabe no seu bolso, <span className="text-blue-400">sem enrolação</span>
          </h1>

          {/* Texto de apoio mais compacto no mobile */}
          <p className="text-blue-100/80 text-sm md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Informe o seu nome e WhatsApp. Em minutos recebe as melhores opções direto no seu telemóvel.
          </p>

          {/* Foto reduzida de w-20 para w-16 no mobile e margem mb-6 */}
          <div className="flex flex-col items-center mb-6 md:mb-10">
            <div className="relative">
              <img 
                src="/preview.webp" 
                alt="Rodrigo Farias" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white/10 mb-2 object-cover shadow-2xl"
                onError={(e) => { e.target.src = "https://via.placeholder.com/80?text=RF"; }}
              />
              <div className="absolute bottom-3 right-0 bg-green-500 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-[#1a3a52]"></div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold text-base md:text-lg">Rodrigo Farias</h3>
              <div className="flex justify-center gap-0.5 text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ajuste na margem negativa para o formulário subir mais no mobile (-mt-20) */}
      <div className="-mt-20 md:-mt-16 px-4 relative z-20 max-w-md mx-auto">
        <div className="bg-white rounded-[32px] p-1.5 shadow-2xl">
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
