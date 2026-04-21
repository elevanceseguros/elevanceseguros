import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield } from 'lucide-react';
import HealthOperatorForm from '@/components/HealthOperatorForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const SaoFranciscoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Grupo com vasta tradição em saúde",
    "Excelente custo-benefício regional",
    "Planos odontológicos integrados (opcional)",
    "Rede própria de hospitais e clínicas",
    "Atendimento humanizado e próximo"
  ];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde São Francisco | Tradição e Qualidade - Elevance</title>
        <meta name="description" content="Planos de saúde São Francisco. Tradição, qualidade e ampla rede própria. Confira as opções para você e sua empresa. Cotação online." />
        <meta name="keywords" content="São Francisco saúde, plano São Francisco, convênio médico, saúde regional, hospital são francisco" />
      </Helmet>

      {/* Logo Section */}
      <div className="pt-28 pb-6 md:pt-32 md:pb-8 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/22c63779d9948cb81984996c5be7e2a5.jpg" 
          alt="Logo São Francisco Vida" 
          className="w-full max-w-[150px] md:max-w-[200px] h-auto object-contain"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-indigo-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Tradição em Cuidar
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Planos São Francisco <br/><span className="text-indigo-600">Saúde Integral</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Uma das operadoras mais tradicionais do país, oferecendo segurança e uma estrutura completa de atendimento para você e seus colaboradores.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
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
              <HealthOperatorForm operatorName="São Francisco" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Conheça o Grupo São Francisco</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              O Grupo São Francisco construiu sua reputação baseada em investimentos constantes em tecnologia e infraestrutura própria. Seus hospitais são referência em procedimentos de alta complexidade em diversas regiões.
            </p>
            <p>
              Os planos são flexíveis e adaptáveis às necessidades de empresas de todos os portes, oferecendo desde cobertura básica ambulatorial até planos completos com acomodação em apartamento e ampla rede externa.
            </p>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
};

export default SaoFranciscoPage;