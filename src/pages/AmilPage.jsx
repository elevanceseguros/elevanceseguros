import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
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
        <title>Plano Amil em São Paulo | Cotação Gratuita</title>
        <meta name="description" content="Plano de saúde Amil em São Paulo 2026. Tabela de preços atualizada, rede com Albert Einstein e Sírio-Libanês. Cotação gratuita com corretor especializado." />
        <meta name="keywords" content="plano Amil São Paulo, Amil saúde SP, cotação Amil SP, plano Amil individual, Amil familiar São Paulo, tabela Amil 2026" />
        <link rel="canonical" href="https://www.elevanceseguros.com/amil" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Plano Amil", "item": "https://www.elevanceseguros.com/amil"}
          ]
        })}`}</script>
              <meta property="og:type" content="website" />
        <meta property="og:title" content="Plano de Saúde Amil em São Paulo | Tabela 2026 - Elevance" />
        <meta property="og:description" content="Plano Amil em SP com acesso ao Einstein e Sírio-Libanês. Tabela de preços 2026 e cotação gratuita." />
        <meta property="og:image" content="https://www.elevanceseguros.com/logos/amil.webp" />
        <meta property="og:url" content="https://www.elevanceseguros.com/amil" />
        <meta property="og:site_name" content="Elevance Seguros" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano de Saúde Amil em São Paulo | Tabela 2026 - Elevance" />
        <meta name="twitter:description" content="Plano Amil em SP com acesso ao Einstein e Sírio-Libanês. Tabela de preços 2026 e cotação gratuita." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/logos/amil.webp" />
      </Helmet>

      <CorretorHero operadora="Amil" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img className="animate-fade-in"
          src="/logos/amil.webp" 
          alt="Logo Amil" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#1e3a5f]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in"
            >
              <div className="inline-block bg-blue-100 text-yellow-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Ampla rede credenciada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano de Saúde Amil em SP: <span className="text-[#0d1f3c]">veja tabela e cobertura 2026</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Amil é uma das maiores operadoras de saúde do Brasil, com ampla rede credenciada em São Paulo e em todo o país. Planos individuais, familiares e empresariais com cobertura completa.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in"
            >
              <OperatorQuoteForm operatorName="Amil" />
            </div>
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
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "A Amil aceita portabilidade de outro plano?", resposta: "Sim! A Amil aceita portabilidade de carências de outros planos, desde que você tenha cumprido o período mínimo de permanência no plano anterior (geralmente 2 anos) e o plano de destino seja compatível em segmentação e preço." },
    { pergunta: "A Amil cobre o Hospital Albert Einstein?", resposta: "Depende do plano contratado. Os planos Amil One e planos premium têm acesso ao Einstein. Planos intermediários e básicos geralmente não cobrem hospitais de referência como Einstein e Sírio-Libanês. Consulte-nos para verificar qual plano inclui a rede que você precisa." },
    { pergunta: "Plano Amil individual ainda existe em São Paulo?", resposta: "A Amil reduziu significativamente a oferta de planos individuais em SP. Atualmente, as opções mais acessíveis são os planos coletivos por adesão da Amil. Fale com nosso corretor para verificar as opções disponíveis para sua situação." },
    { pergunta: "Qual o prazo de carência do plano Amil?", resposta: "As carências padrão da Amil seguem a ANS: 24h para urgência/emergência, 30 dias para consultas, 180 dias para cirurgias e 300 dias para parto normal e cesárea. Em casos de portabilidade, as carências podem ser reduzidas ou eliminadas." }
  ]} />



      {/* Links internos — outras operadoras */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Atendemos também em</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/amil-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/amil-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/amil-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a> · <a href="/amil-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Também trabalhamos com</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Hapvida</a> · <a href="/unimed" className="text-[#0d1f3c] font-black hover:underline">Unimed</a> · <a href="/alice" className="text-[#0d1f3c] font-black hover:underline">Alice</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Amil" />
    </>
  );
};

export default AmilPage;
