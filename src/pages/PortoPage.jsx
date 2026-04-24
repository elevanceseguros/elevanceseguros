import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';

const PortoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Tradição e solidez da Porto Seguro", "Ampla rede credenciada em São Paulo", "Cobertura hospitalar e ambulatorial completa", "Planos individuais, familiares e empresariais", "Atendimento 24h em emergências"];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Porto em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Porto Saúde: plano de saúde com ampla cobertura, rede credenciada de qualidade e atendimento 24h em São Paulo." />
        <meta name="keywords" content="Porto Saúde plano, Porto Seguro saúde SP, cotação Porto saúde" />
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Plano de Saúde Porto","provider":{"@type":"InsuranceAgency","name":"Elevance Seguros","telephone":"(11) 92014-4864","url":"https://elevanceseguros.com"},"areaServed":{"@type":"Country","name":"Brasil"},"name":"Plano de Saúde Porto"}`}} />
        <link rel="canonical" href="https://elevanceseguros.com/porto" />
      </Helmet>

      <CorretorHero operadora="Porto Saúde" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/logos/portoseguro.svg" 
          alt="Logo Porto Saúde" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}}
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
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Tradição e confiança
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Proteja sua saúde com a, <br/><span className="text-blue-600">Porto Saúde</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A Porto Saúde traz a tradição e solidez da Porto Seguro para o setor de saúde. Planos com ampla rede credenciada, cobertura completa e atendimento de excelência.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
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
              <OperatorQuoteForm operatorName="Porto Saúde" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona o plano Porto Saúde?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Porto Saúde oferece planos de saúde com cobertura completa para consultas, exames, internações e cirurgias, com a segurança e tradição do Grupo Porto Seguro.</p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Porto Saúde para você e sua família, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano Porto Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#114d8e] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
};

export default PortoPage;
