import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Smartphone } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const AlicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Gestora de saúde digital e moderna",
    "Time de Saúde dedicado 24/7 pelo app",
    "Hospitais premium (Einstein, Sírio, etc.)",
    "Foco em resultados de saúde, não só doença",
    "Sem burocracia e com tecnologia de ponta"
  ];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Alice | Gestora de Saúde - Elevance Seguros</title>
        <meta name="description" content="Conheça a Alice, a gestora de saúde que conecta você aos melhores hospitais e médicos. Tecnologia, sem burocracia e foco na sua saúde." />
        <meta name="keywords" content="Alice saúde, plano Alice, gestora de saúde, plano premium, hospitais de ponta" />
        <link rel="canonical" href="https://elevanceseguros.com/alice" />
      </Helmet>

      <CorretorHero operadora="Alice" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/d99e1d08bfc2df463658d326c4aafc4d.jpg" 
          alt="Logo Alice" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-fuchsia-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-fuchsia-100 text-fuchsia-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> Saúde na palma da mão
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Mais que um plano <span className="text-fuchsia-600">Alice Saúde</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A Alice reinventou o cuidado com a saúde. Com tecnologia e um Time de Saúde sempre disponível, você tem acesso aos melhores hospitais e laboratórios sem dor de cabeça.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
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
              <OperatorQuoteForm operatorName="Alice" />
            </motion.div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Alice"
        cor="#a21caf"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 350,78', apto: 'R$ 350,78'},
          {idade: '19 a 23', enf: 'R$ 416,80', apto: 'R$ 416,80'},
          {idade: '24 a 28', enf: 'R$ 500,16', apto: 'R$ 500,16'}
        ]}
        hospitais={[
          {nome: 'Hospital Israelita Albert Einstein', regiao: 'Morumbi, SP', desc: 'Referência mundial em saúde.'},
          {nome: 'Hospital Sírio-Libanês', regiao: 'Bela Vista, SP', desc: 'Alta complexidade e oncologia.'},
          {nome: 'Hospital Alemão Oswaldo Cruz', regiao: 'Bela Vista, SP', desc: 'Cardiologia, cirurgias e UTI.'},
          {nome: 'Hospital Santa Joana', regiao: 'Perdizes, SP', desc: 'Maternidade e cirurgias.'}
        ]}
        depoimento={{
          inicial: "L",
          nome: "Luísa",
          local: "Vila Olímpia, SP",
          texto: "A Alice tem um app incrível e acesso ao Einstein. O Rodrigo me explicou tudo sobre o plano PME e eu adorei!"
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como a Alice funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              Alice não se define apenas como um plano de saúde, mas como uma gestora de saúde. Todo membro tem um "Time de Saúde" (médico, enfermeiro, nutricionista) acessível diretamente pelo aplicativo.
            </p>
            <p className="mb-4">
              Seu modelo é focado em desfechos clínicos: o objetivo é deixar você mais saudável. A rede credenciada é enxuta, porém de altíssima qualidade, contando com os hospitais e laboratórios mais renomados do país (como Albert Einstein e Fleury, dependendo do plano).
            </p>
          </div>
        </div>
      </section>


      <FloatingWhatsApp />
    </>
  );
};

export default AlicePage;