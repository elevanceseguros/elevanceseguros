import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const HapvidaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Um dos maiores grupos de saúde do Brasil", "Rede própria de hospitais e clínicas", "Planos acessíveis sem perder qualidade", "Atendimento em todo o território nacional", "Telemedicina disponível 24h"];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Hapvida em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Hapvida NotreDame Intermédica: plano de saúde acessível com rede própria. Cotação gratuita em São Paulo." />
        <meta name="keywords" content="Hapvida plano saúde SP, NotreDame Intermédica, cotação Hapvida" />
        <link rel="canonical" href="https://elevanceseguros.com/hapvida" />
      </Helmet>

      <CorretorHero operadora="Hapvida" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/logos/hapvida.png" 
          alt="Logo Hapvida" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
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
                <ShieldCheck className="w-4 h-4" /> Rede própria integrada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Saúde acessível com a, <br/><span className="text-orange-600">Hapvida</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A Hapvida NotreDame Intermédica é um dos maiores grupos de saúde do Brasil, com rede própria de hospitais, clínicas e laboratórios. Planos acessíveis com cobertura completa.
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
              <OperatorQuoteForm operatorName="Hapvida" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona o plano Hapvida?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Hapvida possui rede própria integrada de hospitais, UPAs, clínicas e laboratórios, o que garante mais controle de qualidade e planos com custo-benefício competitivo.</p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Hapvida para você e sua família, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano Hapvida"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#114d8e] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="Hapvida"
        cor="#f97316"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 143,83', apto: 'R$ 201,40'},
          {idade: '19 a 23', enf: 'R$ 170,95', apto: 'R$ 239,30'},
          {idade: '24 a 28', enf: 'R$ 205,14', apto: 'R$ 287,20'}
        ]}
        hospitais={[
          {nome: 'Hospital Hapvida (Penha)', regiao: 'Zona Leste, SP', desc: 'Pronto-socorro, internações e cirurgias.'},
          {nome: 'Hospital Hapvida (Santo André)', regiao: 'Grande ABC', desc: 'UTI, emergência 24h e internações.'},
          {nome: 'Hospital Hapvida (Guarulhos)', regiao: 'Guarulhos, SP', desc: 'Pronto-socorro e consultas.'},
          {nome: 'Hospital Hapvida (Campinas)', regiao: 'Interior SP', desc: 'Rede própria com UTI e cirurgias.'}
        ]}
        depoimento={{
          inicial: "R",
          nome: "Roberto",
          local: "São Paulo, SP",
          texto: "Melhor custo-benefício que encontrei. O Rodrigo me explicou como funciona a rede própria e fechei com tranquilidade."
        }}
      />


      <FloatingWhatsApp />
    </>
  );
};

export default HapvidaPage;
