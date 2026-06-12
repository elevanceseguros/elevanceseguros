import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const BiovidaPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = ["Planos individuais, familiares e sênior", "Aceita MEI e autônomos", "Rede própria na Grande SP", "Pronto-atendimento incluso", "Terceira idade com cobertura diferenciada"];

  return (
    <>
      <Helmet>
        <title>Plano Biovida Saúde em São Paulo | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="A Biovida Saúde atua na região metropolitana de São Paulo com planos para pessoa física, MEI e terceira idade, com rede própria e credenciada para pronto-atendimento e serviços ambulatoriais." />
        <meta name="keywords" content="Biovida Saúde plano, cotação Biovida SP, plano saúde sênior São Paulo Biovida" />
        <link rel="canonical" href="https://www.elevanceseguros.com/biovida" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Planos de Saúde", "item": "https://www.elevanceseguros.com/encontre-seu-plano"},
            {"@type": "ListItem", "position": 3, "name": "Biovida Saúde", "item": "https://www.elevanceseguros.com/biovida"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano Biovida Saúde em São Paulo | Elevance Seguros" />
        <meta name="twitter:description" content="A Biovida Saúde atua na região metropolitana de São Paulo com planos para pessoa física, MEI e terceira idade, com rede própria e credenciada para pronto-atendimento e serviços ambulatoriais." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Biovida Saúde" />

      {/* Logo */}
      <div className="py-6 flex justify-center items-center bg-white border-b border-gray-100">
        <img
          src="/logos/biovida.webp"
          alt="Logo Biovida Saúde"
          className="h-14 w-auto object-contain"
          style={{maxWidth:"200px"}}
          loading="lazy"
        />
      </div>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#b91c1c"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
                <ShieldCheck className="w-4 h-4" /> Individual, MEI e Sênior
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Plano acessível com a <span style={{color:'#fca5a5'}}>Biovida Saúde</span>
              </h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">A Biovida Saúde atua na região metropolitana de São Paulo com planos para pessoa física, MEI e terceira idade, com rede própria e credenciada para pronto-atendimento e serviços ambulatoriais.</p>
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
              <OperatorQuoteForm operatorName="Biovida Saúde" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Biovida Saúde"
        cor="#b91c1c"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "19 a 23", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59+ (Sênior)", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Rede Própria Biovida", "regiao": "São Paulo, SP", "desc": "Pronto-atendimento, ambulatório e exames."},
          {"nome": "Rede Credenciada Grande SP", "regiao": "Região Metropolitana", "desc": "Hospitais e clínicas parceiros na Grande São Paulo."}]}
        depoimento={{
          inicial: "J",
          nome: "José",
          local: "Mauá, SP",
          texto: "Aos 65 anos, o Rodrigo me encontrou o Biovida Sênior com excelente cobertura e preço acessível. Recomendo muito!"
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-sora text-3xl font-bold mb-6" style={{color: "#071B34"}}>Como funciona o plano Biovida Saúde?</h2>
          <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
            <p>A Biovida Saúde é uma operadora regional que atua na região metropolitana de São Paulo, com foco em planos acessíveis para pessoa física, MEI e terceira idade, com rede própria de pronto-atendimento.</p>
            <p>Na Elevance Seguros, o corretor Rodrigo Farias analisa seu perfil e encontra a melhor opção de plano Biovida Saúde para você e sua família, sem burocracia e sem custo de consultoria.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Biovida%20Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-105"
              style={{background: "#16a34a"}}>
              <MessageCircle className="w-5 h-5" /> Solicitar Cotação Gratuita
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <ScrollCTA produto="Plano Biovida Saúde" />
    </>
  );
};

export default BiovidaPage;
