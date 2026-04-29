import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const MedSeniorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Especializado na terceira idade", "Cobertura geriatrica completa", "Ampla rede credenciada em São Paulo", "Sem carência para urgências e emergências", "Atendimento humanizado e personalizado"];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde MedSênior | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Plano de saúde MedSênior especialmente desenvolvido para a melhor idade. Cobertura completa com foco no cuidado do idoso." />
        <meta name="keywords" content="MedSênior plano de saúde, plano saúde idoso, plano terceira idade" />
              <link rel="canonical" href="https://elevanceseguros.com/medsenior" />
      </Helmet>

      <CorretorHero operadora="MedSênior" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/logos/notredame.png" 
          alt="Logo MedSênior" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-emerald-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Especialista na melhor idade
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                Cuidado especial com a, <br/><span className="text-emerald-600">MedSênior</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                O MedSênior é um plano de saúde desenvolvido especialmente para pessoas acima de 59 anos, com cobertura completa e foco no cuidado integral da melhor idade.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
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
              <OperatorQuoteForm operatorName="MedSênior" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona o plano MedSênior?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">O MedSênior foi criado para atender as necessidades específicas de saúde da melhor idade, com cobertura para consultas, exames, internações e procedimentos cirúrgicos com foco no bem-estar do idoso.</p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano MedSênior para você e sua família, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano MedSênior"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#114d8e] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="MedSênior"
        cor="#059669"
        tabela={[
          {idade: '44 a 48', enf: 'R$ 855,78', apto: 'R$ 1.198,10'},
          {idade: '49 a 53', enf: 'R$ 1.026,93', apto: 'R$ 1.437,70'},
          {idade: '54 a 58', enf: 'R$ 1.232,32', apto: 'R$ 1.725,25'}
        ]}
        hospitais={[
          {nome: 'Hospital Santa Paula', regiao: 'Vila Clementino, SP', desc: 'Referência para idosos com UTI e cardiologia.'},
          {nome: 'Hospital São Luiz Morumbi', regiao: 'Morumbi, SP', desc: 'Alta complexidade e neurologia.'},
          {nome: 'Hospital Samaritano Paulista', regiao: 'Bela Vista, SP', desc: 'Cirurgias, UTI e oncologia.'},
          {nome: 'Hospital Sancta Maggiore', regiao: 'Higienópolis, SP', desc: 'Geriatria, internações e consultas.'}
        ]}
        depoimento={{
          inicial: "T",
          nome: "Tereza",
          local: "Moema, SP",
          texto: "Minha mãe tinha dificuldades em encontrar um plano. O Rodrigo indicou o MedSênior e ela foi aceita sem problemas. Gratidão!"
        }}
      />


      <FloatingWhatsApp />
    </>
  );
};

export default MedSeniorPage;
