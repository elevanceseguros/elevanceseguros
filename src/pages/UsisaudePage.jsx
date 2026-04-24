import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Users } from 'lucide-react';
import HealthOperatorForm from '@/components/HealthOperatorForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const UsisaudePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Operadora da Fundação São Francisco Xavier",
    "Forte atuação em MG e região",
    "Planos odontológicos inclusos em algumas modalidades",
    "Rede credenciada diversificada",
    "Foco em assistência familiar e industrial"
  ];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Usisaúde | Fundação São Francisco Xavier</title>
        <meta name="description" content="Planos Usisaúde com a qualidade da Fundação São Francisco Xavier. Cobertura completa, planos familiares e empresariais. Faça sua cotação." />
        <meta name="keywords" content="Usisaúde, plano usisaúde, fundação são francisco xavier, fsfx, plano de saúde mg" />
      </Helmet>

      {/* Logo Section */}
      <div className="pt-28 pb-6 md:pt-32 md:pb-8 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/7a205f96e0cc86a716b356a666870fa4.png" 
          alt="Logo Usisaúde" 
          className="w-full max-w-[150px] md:max-w-[200px] h-auto object-contain"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-orange-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <Users className="w-4 h-4" /> Cuidado Cooperativo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Usisaúde: Proteção <br/><span className="text-orange-600">Completa e Acessível</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A operadora de saúde que une a excelência da Fundação São Francisco Xavier com a proximidade que sua família precisa.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
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
              <HealthOperatorForm operatorName="Usisaúde" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre a Usisaúde</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              Administrada pela Fundação São Francisco Xavier, braço social da Usiminas, a Usisaúde é uma das maiores operadoras filantrópicas do país.
            </p>
            <p className="mb-4">
              Reconhecida pela gestão ética e humanizada, a Usisaúde oferece planos com ótima relação custo-benefício, sendo uma escolha inteligente para quem busca acesso a hospitais de qualidade (como o Hospital Márcio Cunha) com valores justos.
            </p>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
};

export default UsisaudePage;