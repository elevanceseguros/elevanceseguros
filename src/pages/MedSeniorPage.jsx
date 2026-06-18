import React, { useEffect } from 'react';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
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
        <title>Plano MedSênior | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano de saúde MedSênior especialmente desenvolvido para a melhor idade. Cobertura completa com foco no cuidado do idoso em São Paulo, com a Elevance Seguros." />
        <meta name="keywords" content="MedSênior plano de saúde, plano saúde idoso, plano terceira idade" />
              <link rel="canonical" href="https://www.elevanceseguros.com/medsenior" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "MedSênior", "item": "https://www.elevanceseguros.com/medsenior"}
          ]
        })}`}</script>
              <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital em São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="MedSênior" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img className="animate-fade-in"
          src="/logos/medsenior.webp" 
          alt="Logo MedSênior" 
          className="max-h-24 w-auto object-contain mx-auto" style={{maxWidth:"220px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#1a4731]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #4ade80 1px, transparent 1px), radial-gradient(circle at 80% 20%, #86efac 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in"
            >
              <div className="inline-block bg-blue-100 text-sky-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Especialista na melhor idade
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Cuidado especial com a <span className="text-[#0d1f3c]">MedSênior</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                O MedSênior é um plano de saúde desenvolvido especialmente para pessoas acima de 49 anos, com cobertura completa e foco no cuidado integral da melhor idade.
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
              <OperatorQuoteForm operatorName="MedSênior" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="MedSênior"
        cor="#059669"
        tabela={[
          {idade: '49 a 53', enf: 'R$ 855,78', apto: 'R$ 1.198,10'},
          {idade: '54 a 58', enf: 'R$ 1.026,93', apto: 'R$ 1.437,70'},
          {idade: '59 ou +', enf: 'R$ 1.232,32', apto: 'R$ 1.725,25'}
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
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "MedSênior é específico para idosos?", resposta: "Sim! A MedSênior é uma operadora especializada em pessoas a partir de 49 anos. Por isso, oferece planos com melhor custo-benefício para essa faixa etária em comparação com operadoras tradicionais, que cobram valores muito mais altos para idosos." },
    { pergunta: "MedSênior cobre cirurgias cardíacas?", resposta: "Sim! A MedSênior cobre cirurgias cardíacas, ortopédicas e oncológicas conforme o rol da ANS. A rede credenciada em SP inclui hospitais especializados em cardiologia e geriatria." },
    { pergunta: "Posso incluir meu cônjuge no plano MedSênior?", resposta: "Sim, desde que o cônjuge também tenha 49 anos ou mais. Caso o cônjuge seja mais jovem, ele precisaria contratar um plano em outra operadora." }
  ]} />


      {/* Links internos — outras operadoras */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Atendemos também em</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/medsenior-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/medsenior-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Também trabalhamos com</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Hapvida</a> · <a href="/porto" className="text-[#0d1f3c] font-black hover:underline">Porto Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde MedSenior" />
    </>
  );
};

export default MedSeniorPage;
