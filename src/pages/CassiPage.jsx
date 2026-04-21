import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2 } from 'lucide-react';
import HealthOperatorForm from '@/components/HealthOperatorForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const CassiPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Maior operadora de autogestão do país",
    "Foco em servidores públicos e familiares",
    "Rede credenciada de alta qualidade",
    "Programas de saúde da família",
    "Telemedicina avançada 24h"
  ];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Cassi | Servidores e Familiares - Elevance Seguros</title>
        <meta name="description" content="Planos de saúde Cassi com cobertura completa. Ideal para familiares de funcionários do BB e conveniados. Tradição e qualidade em saúde." />
        <meta name="keywords" content="Cassi saúde, plano Cassi, servidor público, convênio banco do brasil, cassi família" />
      </Helmet>

      {/* Logo Section */}
      <div className="pt-28 pb-6 md:pt-32 md:pb-8 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/52b0fe6d25abcb6b900b4196322ccc05.png" 
          alt="Logo Cassi" 
          className="w-full max-w-[150px] md:max-w-[200px] h-auto object-contain"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-blue-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-blue-200 text-blue-900 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Tradição e Confiança
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Qualidade de Vida com <br/><span className="text-blue-700">Plano Cassi</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A Caixa de Assistência dos Funcionários do Banco do Brasil oferece planos renomados pela qualidade técnica e humanização no atendimento.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
              <HealthOperatorForm operatorName="Cassi" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre a Cassi</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              Com mais de 70 anos de história, a Cassi é referência em autogestão em saúde no Brasil. Seu modelo de atenção integral à saúde coloca o paciente no centro do cuidado, com equipes multidisciplinares (médicos, enfermeiros, nutricionistas) acompanhando todo o histórico do beneficiário.
            </p>
            <p>
              A Cassi possui parcerias estratégicas que permitem o atendimento em hospitais de ponta em todo o território nacional, garantindo segurança e tranquilidade para sua família.
            </p>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
};

export default CassiPage;