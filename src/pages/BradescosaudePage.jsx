import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const BradescosaudePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Um dos maiores planos de saúde do Brasil", "Ampla rede credenciada em São Paulo", "Cobertura nacional em mais de 3.700 municípios", "Planos individuais, familiares e empresariais", "App para gestão de saúde e telemedicina"];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Bradesco em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Bradesco Saúde: um dos maiores planos de saúde do Brasil. Ampla rede credenciada, cobertura completa em São Paulo." />
        <meta name="keywords" content="Bradesco Saúde SP, plano Bradesco São Paulo, cotação Bradesco saúde" />
        <link rel="canonical" href="https://elevanceseguros.com/bradescosaude" />
      </Helmet>

      <CorretorHero operadora="Bradesco Saúde" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/logos/bradesco.png" 
          alt="Logo Bradesco Saúde" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-red-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-red-100 text-red-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Um dos maiores do Brasil
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Saúde garantida com o, <br/><span className="text-red-600">Bradesco Saúde</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                O Bradesco Saúde é um dos maiores e mais tradicionais planos de saúde do Brasil. Com ampla rede credenciada em São Paulo e em todo o país, oferece cobertura completa para você e sua família.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
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
              <OperatorQuoteForm operatorName="Bradesco Saúde" />
            </motion.div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Bradesco Saúde"
        cor="#dc2626"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 218,35', apto: 'R$ 306,70'},
          {idade: '19 a 23', enf: 'R$ 259,40', apto: 'R$ 364,20'},
          {idade: '24 a 28', enf: 'R$ 311,30', apto: 'R$ 436,80'}
        ]}
        hospitais={[
          {nome: 'Hospital Sírio-Libanês', regiao: 'Bela Vista, SP', desc: 'Referência nacional em alta complexidade.'},
          {nome: 'Hospital Leforte Liberdade', regiao: 'Liberdade, SP', desc: 'Cirurgias, UTI e maternidade.'},
          {nome: 'Hospital Igesp', regiao: 'Paraíso, SP', desc: 'Internações, exames e consultas.'},
          {nome: 'Pro Matre Paulista', regiao: 'Santa Cecília, SP', desc: 'Referência em maternidade em SP.'}
        ]}
        depoimento={{
          inicial: "M",
          nome: "Márcia",
          local: "Santo André, SP",
          texto: "Finalmente consegui um plano com o Hospital Sírio-Libanês dentro do orçamento. O Rodrigo fez a cotação e fechamos no mesmo dia!"
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona o plano Bradesco Saúde?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">O Bradesco Saúde oferece planos com cobertura completa para consultas, exames, internações e cirurgias, com a solidez e tradição do Grupo Bradesco.</p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Bradesco Saúde para você e sua família, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano Bradesco Saúde"
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

export default BradescosaudePage;
