import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import HealthOperatorForm from '@/components/HealthOperatorForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const MediservicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Ampla rede credenciada em todo o Brasil",
    "Gestão de saúde focada em prevenção",
    "Programas de bem-estar corporativo",
    "Tecnologia integrada para agendamentos",
    "Cobertura completa para exames complexos"
  ];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Mediservice | Cotação Online - Elevance Seguros</title>
        <meta name="description" content="Conheça os planos de saúde Mediservice. Cobertura nacional, ampla rede credenciada e gestão de saúde completa. Solicite sua cotação online." />
        <meta name="keywords" content="Mediservice saúde, plano Mediservice, cotação mediservice, convênio médico, cobertura nacional" />
      </Helmet>

      {/* Logo Section */}
      <div className="pt-28 pb-6 md:pt-32 md:pb-8 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/582f7b7f37fc019ca470ba0ad7c2cd93.jpg" 
          alt="Logo Mediservice" 
          className="w-full max-w-[150px] md:max-w-[200px] h-auto object-contain"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-slate-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
                Rede Nacional
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Planos de Saúde <br/><span className="text-blue-600">Mediservice</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Referência em gestão de saúde, a Mediservice oferece soluções completas para empresas e famílias que buscam qualidade e abrangência nacional.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
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
              <HealthOperatorForm operatorName="Mediservice" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Por que escolher a Mediservice?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              A Mediservice é uma empresa do Grupo Bradesco Seguros, o que garante solidez e confiança. Com foco em gestão de saúde, seus planos são desenhados para oferecer o máximo de eficiência no atendimento, reduzindo burocracias e facilitando o acesso a médicos e hospitais de excelência.
            </p>
            <p className="mb-4">
              Seus diferenciais incluem uma plataforma digital robusta, onde beneficiários podem consultar rede credenciada, agendar consultas e acompanhar autorizações de exames com total transparência.
            </p>
            <p>
              Ideal para quem busca um plano com excelente custo-benefício e a garantia de atendimento em uma das maiores redes do país.
            </p>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
};

export default MediservicePage;