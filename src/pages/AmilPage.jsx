import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const AmilPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Uma das maiores redes credenciadas do Brasil", "Hospitais de referência como Albert Einstein e Sírio-Libanês", "Planos individuais, familiares e empresariais", "Cobertura ambulatorial e hospitalar completa", "Serviço de pronto-atendimento 24h"];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Amil em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Conheça os planos de saúde Amil em São Paulo. Ampla rede credenciada, cobertura completa. Cotação gratuita via WhatsApp." />
        <meta name="keywords" content="plano Amil São Paulo, Amil saúde SP, cotação Amil" />
        <link rel="canonical" href="https://elevanceseguros.com/amil" />
      </Helmet>

      <CorretorHero operadora="Amil" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/logos/amil.png" 
          alt="Logo Amil" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
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
                <ShieldCheck className="w-4 h-4" /> Ampla rede credenciada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Saúde completa com a <span className="text-indigo-600">Amil</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A Amil é uma das maiores operadoras de saúde do Brasil, com ampla rede credenciada em São Paulo e em todo o país. Planos individuais, familiares e empresariais com cobertura completa.
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
              <OperatorQuoteForm operatorName="Amil" />
            </motion.div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Amil"
        cor="#4338ca"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 235,68', apto: 'R$ 328,50'},
          {idade: '19 a 23', enf: 'R$ 279,80', apto: 'R$ 390,20'},
          {idade: '24 a 28', enf: 'R$ 335,75', apto: 'R$ 468,20'}
        ]}
        hospitais={[
          {nome: 'Hospital Samaritano Paulista', regiao: 'Bela Vista, SP', desc: 'Cirurgias, UTI e emergência 24h.'},
          {nome: 'Hospital Paulistano', regiao: 'Bela Vista, SP', desc: 'Internações, exames e consultas.'},
          {nome: 'Hospital Leforte Morumbi', regiao: 'Morumbi, SP', desc: 'Alta complexidade, UTI e maternidade.'},
          {nome: 'Hospital Metropolitano', regiao: 'Barra Funda, SP', desc: 'Pronto-socorro, cirurgias e internações.'}
        ]}
        depoimento={{
          inicial: "C",
          nome: "Carlos",
          local: "Guarulhos, SP",
          texto: "O Rodrigo me ajudou a encontrar o plano Amil ideal para minha família em menos de um dia. Atendimento incrível e sem burocracia!"
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona o plano Amil?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Amil oferece planos de saúde com ampla cobertura para consultas, exames, internações e cirurgias. Com mais de 40 anos de mercado, é referência em atendimento médico de qualidade em todo o Brasil.</p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Amil para você e sua família, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano Amil"
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

export default AmilPage;
