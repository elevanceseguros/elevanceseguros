import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart } from 'lucide-react';
import HealthOperatorForm from '@/components/HealthOperatorForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const MedSeniorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Especializado na terceira idade (Geração+)",
    "Foco total em medicina preventiva",
    "Sem coparticipação",
    "Oficinas de saúde e bem-estar",
    "Rede própria de atendimento"
  ];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde MedSênior | Especializado em Idosos - Elevance</title>
        <meta name="description" content="Conheça o plano de saúde MedSênior, feito especialmente para a terceira idade. Medicina preventiva, sem coparticipação e cuidado humanizado." />
        <meta name="keywords" content="MedSênior, plano saúde senior, plano idosos, medicina preventiva, plano sem coparticipação" />
      </Helmet>

      {/* Logo Section */}
      <div className="pt-28 pb-6 md:pt-32 md:pb-8 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/c9c9323111251c4b05e96ec84bddc575.png" 
          alt="Logo MedSênior" 
          className="w-full max-w-[150px] md:max-w-[200px] h-auto object-contain"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-emerald-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <Heart className="w-4 h-4 fill-current" /> Especializado na 3ª Idade
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Saúde e Carinho com <br/><span className="text-emerald-600">MedSênior</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                O plano de saúde que não apenas trata doenças, mas promove a saúde. Diferente dos planos comuns, a MedSênior é especialista em cuidar de quem já cuidou tanto da gente.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HealthOperatorForm operatorName="MedSênior" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">O Diferencial MedSênior</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              A MedSênior nasceu com um propósito claro: oferecer assistência médica de qualidade para a terceira idade com preços acessíveis. Seu modelo de "Medicina Preventiva" acompanha o beneficiário de perto, evitando que doenças se agravem.
            </p>
            <p className="mb-4">
              Os planos geralmente não possuem coparticipação, o que garante previsibilidade financeira. Além disso, a operadora oferece o "Programa de Medicina Preventiva", com núcleos de prevenção e oficinas de arte, memória e nutrição.
            </p>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
};

export default MedSeniorPage;