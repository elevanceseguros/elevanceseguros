import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
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
        <link rel="canonical" href="https://www.elevanceseguros.com/unimed" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Unimed", "item": "https://www.elevanceseguros.com/unimed"}
          ]
        })}`}</script>
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
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#064e3b]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-blue-100 text-green-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Cooperativa médica líder
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Saúde de qualidade com a <span className="text-[#114d8e]">Unimed</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Unimed é a maior cooperativa médica do mundo, presente em todo o Brasil. Com planos para pessoa física, família e empresas, oferece ampla rede de médicos cooperados e hospitais de referência.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" />
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


      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "Unimed é confiável? Como funciona o sistema cooperativista?", resposta: "A Unimed é uma cooperativa de médicos — os próprios médicos são donos da operadora. Com mais de 50 anos de história, é a maior cooperativa de saúde do mundo e uma das mais confiáveis do Brasil. O sistema cooperativista garante alinhamento entre os interesses dos médicos e dos pacientes." },
    { pergunta: "Posso usar o plano Unimed em qualquer Unimed do Brasil?", resposta: "Depende do plano. Planos com abrangência nacional (Unimed Uniplan ou planos inter-cooperativas) permitem atendimento em qualquer Unimed do país. Planos locais ficam restritos à região da cooperativa contratada. Viajantes frequentes devem optar por planos nacionais." },
    { pergunta: "Unimed Uniplan é diferente de Unimed?", resposta: "A Unimed-BH/Uniplan é uma operadora específica do sistema Unimed que opera em nível nacional. Já a Unimed São Paulo é a cooperativa local. Ambas pertencem ao sistema Unimed, mas são entidades diferentes com contratos, redes e preços distintos." },
    { pergunta: "Qual a carência do plano Unimed?", resposta: "As carências seguem o padrão ANS: 24h para urgência, 30 dias para consultas, 180 dias para cirurgias eletivas e 300 dias para parto. Em casos de portabilidade de plano, é possível eliminar as carências do novo plano." }
  ]} />

      <FloatingWhatsApp />


      {/* Links internos — outras operadoras */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Também trabalhamos com</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-[#114d8e] font-black hover:underline">Amil</a> · <a href="/sulamerica" className="text-[#114d8e] font-black hover:underline">SulAmérica</a> · <a href="/bradescosaude" className="text-[#114d8e] font-black hover:underline">Bradesco Saúde</a> · <a href="/porto" className="text-[#114d8e] font-black hover:underline">Porto Saúde</a> · <a href="/alice" className="text-[#114d8e] font-black hover:underline">Alice</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Unimeduniplan" />
    </>
  );
};

export default UnimeduniplanPage;
