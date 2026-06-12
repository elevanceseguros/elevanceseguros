import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const GarantiaSaudePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = ["Plano individual, familiar e PME", "Cobertura ambulatorial + hospitalar completa", "Atendimento na Grande São Paulo", "Aceitação MEI e autônomos", "Planos a partir de valores acessíveis"];

  return (
    <>
      <Helmet>
        <title>Plano Garantia de Saúde em São Paulo | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="A Garantia de Saúde oferece planos regionais para São Paulo com excelente custo-benefício, cobertura ambulatorial e hospitalar completa para pessoa física, MEI e empresas." />
        <meta name="keywords" content="Garantia de Saúde plano saúde SP, cotação Garantia Saúde, plano saúde São Paulo individual" />
        <link rel="canonical" href="https://www.elevanceseguros.com/garantia-saude" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Planos de Saúde", "item": "https://www.elevanceseguros.com/encontre-seu-plano"},
            {"@type": "ListItem", "position": 3, "name": "Garantia de Saúde", "item": "https://www.elevanceseguros.com/garantia-saude"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano Garantia de Saúde em São Paulo | Elevance Seguros" />
        <meta name="twitter:description" content="A Garantia de Saúde oferece planos regionais para São Paulo com excelente custo-benefício, cobertura ambulatorial e hospitalar completa para pessoa física, MEI e empresas." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Garantia de Saúde" />

      {/* Logo */}
      <div className="py-6 flex justify-center items-center bg-white border-b border-gray-100">
        <img
          src="/logos/garantia-saude.webp"
          alt="Logo Garantia de Saúde"
          className="h-14 w-auto object-contain"
          style={{maxWidth:"200px"}}
          loading="lazy"
        />
      </div>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#16a34a"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
                <ShieldCheck className="w-4 h-4" /> Planos individuais e PME
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Saúde acessível com a <span style={{color:'#c9a84c'}}>Garantia de Saúde</span>
              </h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">A Garantia de Saúde oferece planos regionais para São Paulo com excelente custo-benefício, cobertura ambulatorial e hospitalar completa para pessoa física, MEI e empresas.</p>
              <ul className="space-y-3 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <OperatorQuoteForm operatorName="Garantia de Saúde" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Garantia de Saúde"
        cor="#16a34a"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "19 a 23", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "24 a 28", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Rede credenciada na capital", "regiao": "São Paulo, SP", "desc": "Hospitais e clínicas parceiras em toda a capital."},
          {"nome": "Grande São Paulo", "regiao": "Região Metropolitana", "desc": "Cobertura nas principais cidades da Grande SP."}]}
        depoimento={{
          inicial: "M",
          nome: "Marcos",
          local: "São Paulo, SP",
          texto: "O Rodrigo me indicou a Garantia de Saúde como melhor custo-benefício para o meu perfil. Contratei sem complicação."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-sora text-3xl font-bold mb-6" style={{color: "#071B34"}}>Como funciona o plano Garantia de Saúde?</h2>
          <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
            <p>A Garantia de Saúde é uma operadora regional que atua na cidade de São Paulo e região metropolitana, oferecendo planos de saúde com ótimo custo-benefício para quem busca cobertura completa sem pagar preços de planos nacionais.</p>
            <p>Na Elevance Seguros, o corretor Rodrigo Farias analisa seu perfil e encontra a melhor opção de plano Garantia de Saúde para você e sua família, sem burocracia e sem custo de consultoria.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Garantia%20de%20Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-105"
              style={{background: "#16a34a"}}>
              <MessageCircle className="w-5 h-5" /> Solicitar Cotação Gratuita
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <ScrollCTA produto="Plano Garantia de Saúde" />
    </>
  );
};

export default GarantiaSaudePage;
