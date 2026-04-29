import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const UnimeduniplanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Maior cooperativa médica do mundo", "Ampla rede de médicos cooperados", "Presença em todo o território nacional", "Planos individuais, familiares e empresariais", "Atendimento humanizado de médico para médico"];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Unimed em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Planos Unimed em São Paulo com ampla rede de médicos cooperados. Cotação gratuita e personalizada via WhatsApp." />
        <meta name="keywords" content="Unimed plano saúde SP, Unimed São Paulo, cotação Unimed" />
        <link rel="canonical" href="https://elevanceseguros.com/unimed" />
      </Helmet>

      <CorretorHero operadora="Unimed" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/logos/unimed.png" 
          alt="Logo Unimed" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-green-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Cooperativa médica líder
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Saúde de qualidade com a, <br/><span className="text-green-600">Unimed</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A Unimed é a maior cooperativa médica do mundo, presente em todo o Brasil. Com planos para pessoa física, família e empresas, oferece ampla rede de médicos cooperados e hospitais de referência.
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
              <OperatorQuoteForm operatorName="Unimed" />
            </motion.div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Unimed"
        cor="#16a34a"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 263,18', apto: 'R$ 368,50'},
          {idade: '19 a 23', enf: 'R$ 312,80', apto: 'R$ 437,90'},
          {idade: '24 a 28', enf: 'R$ 375,35', apto: 'R$ 525,50'}
        ]}
        hospitais={[
          {nome: 'Hospital Unimed Paulistana', regiao: 'Vila Mariana, SP', desc: 'Hospital próprio com UTI e cirurgias.'},
          {nome: 'Hospital Santa Cruz', regiao: 'Oswaldo Cruz, SP', desc: 'Emergência 24h, internações e exames.'},
          {nome: 'Hospital São Camilo Santana', regiao: 'Santana, SP', desc: 'Alta complexidade e maternidade.'},
          {nome: 'Hospital Beneficência Portuguesa', regiao: 'Santa Cecília, SP', desc: 'Referência em SP com UTI e oncologia.'}
        ]}
        depoimento={{
          inicial: "A",
          nome: "Ana Paula",
          local: "Osasco, SP",
          texto: "A Unimed é reconhecida e o Rodrigo me ajudou a fechar um plano com excelente rede credenciada. Super atencioso!"
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona o plano Unimed?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Unimed é uma cooperativa de médicos que oferece planos de saúde com foco no atendimento humanizado. Cada médico cooperado tem compromisso com a qualidade e o bem-estar dos pacientes.</p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Unimed para você e sua família, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano Unimed"
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

export default UnimeduniplanPage;
