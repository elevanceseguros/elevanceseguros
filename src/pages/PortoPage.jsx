import React, { useEffect } from 'react';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const PortoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Tradição e solidez da Porto Seguro", "Ampla rede credenciada em São Paulo", "Cobertura hospitalar e ambulatorial completa", "Planos individuais, familiares e empresariais", "Atendimento 24h em emergências"];

  return (
    <>
      <Helmet>
        <title>Plano Porto Saúde em São Paulo | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Porto Saúde: plano de saúde com ampla cobertura, rede credenciada de qualidade e atendimento 24h em São Paulo." />
        <meta name="keywords" content="Porto Saúde plano, Porto Seguro saúde SP, cotação Porto saúde" />
        <link rel="canonical" href="https://www.elevanceseguros.com/porto" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Porto Saúde", "item": "https://www.elevanceseguros.com/porto"}
          ]
        })}`}</script>
              <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital em São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Porto Saúde" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img className="animate-fade-in"
          src="/logos/portoseguro.svg" 
          alt="Logo Porto Saúde" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#0c2340]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in"
            >
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Tradição e confiança
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Proteja sua saúde com a <span className="text-blue-600">Porto Saúde</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Porto Saúde traz a tradição e solidez da Porto Seguro para o setor de saúde. Planos com ampla rede credenciada, cobertura completa e atendimento de excelência.
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
              <OperatorQuoteForm operatorName="Porto Saúde" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Porto Saúde"
        cor="#1d4ed8"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 234,80', apto: 'R$ 328,70'},
          {idade: '19 a 23', enf: 'R$ 279,00', apto: 'R$ 390,60'},
          {idade: '24 a 28', enf: 'R$ 334,80', apto: 'R$ 468,70'}
        ]}
        hospitais={[
          {nome: 'Hospital Santa Catarina', regiao: 'Paulista, SP', desc: 'Alta complexidade, UTI e maternidade.'},
          {nome: 'Hospital São Luiz Alphaville', regiao: 'Barueri, SP', desc: 'Rede Rede D-Or — UTI e cirurgias.'},
          {nome: 'Hospital 9 de Julho', regiao: 'Jardins, SP', desc: 'Emergência 24h e internações.'},
          {nome: 'Hospital Vitória (Vila Mariana)', regiao: 'Vila Mariana, SP', desc: 'Pronto-socorro e consultas.'}
        ]}
        depoimento={{
          inicial: "P",
          nome: "Paulo",
          local: "Barueri, SP",
          texto: "Estava precisando de um plano com hospital perto de Alphaville. O Rodrigo me mostrou o Porto Saúde e foi perfeito!"
        }}
      />

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
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "Porto Saúde tem boa rede em São Paulo?", resposta: "Sim! A Porto Seguro Saúde tem rede credenciada robusta em São Paulo, incluindo hospitais de referência e ampla cobertura de especialidades. É conhecida pela facilidade no uso do plano e boa resolução de casos." },
    { pergunta: "Porto Saúde aceita portabilidade?", resposta: "Sim! A Porto Seguro Saúde aceita portabilidade de carências de outros planos ANS. O processo é feito diretamente com o corretor, que verifica a compatibilidade entre os planos." },
    { pergunta: "Porto Saúde oferece plano individual?", resposta: "A disponibilidade de planos individuais Porto Saúde em SP pode variar. Atualmente, as principais opções são planos coletivos por adesão. Entre em contato para verificar as opções disponíveis para o seu perfil." }
  ]} />


      {/* Links internos — outras operadoras */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Também trabalhamos com</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-sky-300 font-black hover:underline">Amil</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/alice" className="text-[#0d1f3c] font-black hover:underline">Alice</a> · <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Porto" />
    </>
  );
};

export default PortoPage;
