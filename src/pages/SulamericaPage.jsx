import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';

const SulamericaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Mais de 120 anos de tradição no Brasil", "Ampla rede credenciada em São Paulo", "Cobertura completa ambulatorial e hospitalar", "Planos individuais, familiares e PME", "Programas de prevenção e bem-estar"];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde SulAmérica em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="SulAmérica Saúde em São Paulo: planos completos, ampla rede credenciada e atendimento personalizado. Cotação gratuita." />
        <meta name="keywords" content="SulAmérica saúde SP, plano SulAmérica São Paulo, cotação SulAmérica" />
      </Helmet>

      <CorretorHero operadora="SulAmérica" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/logos/sulamerica.png" 
          alt="Logo SulAmérica" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}}
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
                <ShieldCheck className="w-4 h-4" /> Mais de 120 anos de história
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Tradição e cuidado com a, <br/><span className="text-orange-600">SulAmérica</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A SulAmérica é uma das seguradoras mais tradicionais do Brasil, com mais de 120 anos de história. Seus planos de saúde oferecem ampla rede credenciada e cobertura completa em São Paulo.
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
              <OperatorQuoteForm operatorName="SulAmérica" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona o plano SulAmérica?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A SulAmérica oferece planos de saúde com foco na prevenção e no cuidado integral. Com uma das maiores redes credenciadas do país, garante acesso a médicos, hospitais e laboratórios de qualidade.</p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano SulAmérica para você e sua família, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano SulAmérica"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#1a3a52] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
};

export default SulamericaPage;
