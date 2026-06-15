import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
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
        <title>Plano Bradesco Saúde SP | Cotação Gratuita</title>
        <meta name="description" content="Bradesco Saúde: um dos maiores planos de saúde do Brasil. Ampla rede credenciada, cobertura completa em São Paulo." />
        <meta name="keywords" content="Bradesco Saúde SP, plano Bradesco São Paulo, cotação Bradesco saúde" />
        <link rel="canonical" href="https://www.elevanceseguros.com/bradescosaude" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Bradesco Saúde", "item": "https://www.elevanceseguros.com/bradescosaude"}
          ]
        })}`}</script>
              <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital em São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Bradesco Saúde" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img className="animate-fade-in"
          src="/logos/bradesco.webp" 
          alt="Logo Bradesco Saúde" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#7f1d1d]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in"
            >
              <div className="inline-block bg-blue-100 text-yellow-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Um dos maiores do Brasil
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Saúde garantida com o <span className="text-[#0d1f3c]">Bradesco Saúde</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                O Bradesco Saúde é um dos maiores e mais tradicionais planos de saúde do Brasil. Com ampla rede credenciada em São Paulo e em todo o país, oferece cobertura completa para você e sua família.
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
              <OperatorQuoteForm operatorName="Bradesco Saúde" />
            </div>
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
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "O plano Bradesco Saúde tem cobertura nacional?", resposta: "Sim! O Bradesco Saúde oferece planos com abrangência nacional, permitindo atendimento em hospitais credenciados em todo o Brasil. Ideal para quem viaja com frequência ou tem familiares em outras cidades." },
    { pergunta: "Bradesco Saúde cobre tratamento oncológico?", resposta: "Sim! Por regulamentação da ANS, todos os planos de saúde são obrigados a cobrir tratamento oncológico (quimioterapia, radioterapia e cirurgias relacionadas ao câncer). O Bradesco Saúde tem rede oncológica credenciada em São Paulo." },
    { pergunta: "Qual a diferença entre QC e QP no Bradesco Saúde?", resposta: "QC significa Quarto Coletivo (enfermaria) — compartilhado com outros pacientes. QP significa Quarto Privativo (apartamento) — individual com mais conforto e privacidade. Planos QP são mais caros mas oferecem melhor experiência de internação." },
    { pergunta: "Bradesco Saúde aceita MEI como empresa para plano PME?", resposta: "Sim! O Bradesco Saúde aceita MEI para contratação de planos empresariais (PME) a partir de 2 vidas. Isso permite ao MEI contratar um plano com preço e cobertura superiores ao plano individual." }
  ]} />

      <FloatingWhatsApp />


      {/* Links internos — outras operadoras */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Atendemos também em</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/bradescosaude-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/bradescosaude-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/bradescosaude-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a> · <a href="/bradescosaude-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Também trabalhamos com</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/porto" className="text-[#0d1f3c] font-black hover:underline">Porto Saúde</a> · <a href="/unimed" className="text-[#0d1f3c] font-black hover:underline">Unimed</a> · <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Bradesco" />
    </>
  );
};

export default BradescosaudePage;
