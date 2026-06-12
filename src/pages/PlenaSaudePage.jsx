import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const PlenaSaudePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = ["Mais de 85 mil vidas atendidas em SP", "22 unidades ambulatoriais próprias", "2 hospitais com PS pediátrico 24h", "Cobertura na Grande São Paulo", "Plano individual, familiar e PME"];

  return (
    <>
      <Helmet>
        <title>Plano Plena Saúde em São Paulo | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="A Plena Saúde atende mais de 85 mil vidas em São Paulo com 22 unidades ambulatoriais próprias e dois hospitais completos com pronto-socorro pediátrico e ginecológico 24h." />
        <meta name="keywords" content="Plena Saúde plano, cotação Plena Saúde SP, plano saúde individual São Paulo Plena" />
        <link rel="canonical" href="https://www.elevanceseguros.com/plena-saude" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Planos de Saúde", "item": "https://www.elevanceseguros.com/encontre-seu-plano"},
            {"@type": "ListItem", "position": 3, "name": "Plena Saúde", "item": "https://www.elevanceseguros.com/plena-saude"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano Plena Saúde em São Paulo | Elevance Seguros" />
        <meta name="twitter:description" content="A Plena Saúde atende mais de 85 mil vidas em São Paulo com 22 unidades ambulatoriais próprias e dois hospitais completos com pronto-socorro pediátrico e ginecológico 24h." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Plena Saúde" />

      {/* Logo */}
      <div className="py-6 flex justify-center items-center bg-white border-b border-gray-100">
        <img
          src="/logos/plena-saude.png"
          alt="Logo Plena Saúde"
          className="h-14 w-auto object-contain"
          style={{maxWidth:"200px"}}
          loading="lazy"
        />
      </div>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#7c3aed"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
                <ShieldCheck className="w-4 h-4" /> 22 unidades ambulatoriais próprias
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Cobertura completa com a <span style={{color:'#c4b5fd'}}>Plena Saúde</span>
              </h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">A Plena Saúde atende mais de 85 mil vidas em São Paulo com 22 unidades ambulatoriais próprias e dois hospitais completos com pronto-socorro pediátrico e ginecológico 24h.</p>
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
              <OperatorQuoteForm operatorName="Plena Saúde" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Plena Saúde"
        cor="#7c3aed"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "19 a 23", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "24 a 28", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Hospital Previna", "regiao": "Região Noroeste de SP", "desc": "Consultas, exames e cirurgias de diversas especialidades."},
          {"nome": "Unidades Próprias", "regiao": "Franco da Rocha, Caieiras, Cajamar", "desc": "Rede de 22 unidades ambulatoriais próprias."},
          {"nome": "Hospitais Plena", "regiao": "São Paulo Capital", "desc": "Pronto-socorro pediátrico e ginecológico 24 horas."},
          {"nome": "Rede Credenciada", "regiao": "Grande SP", "desc": "Guarulhos, Osasco, Mogi das Cruzes e região."}]}
        depoimento={{
          inicial: "R",
          nome: "Renata",
          local: "Guarulhos, SP",
          texto: "A Plena Saúde tem excelente rede em Guarulhos. O Rodrigo me encontrou o plano certo com a melhor cobertura para minha filha."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-sora text-3xl font-bold mb-6" style={{color: "#071B34"}}>Como funciona o plano Plena Saúde?</h2>
          <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
            <p>A Plena Saúde é uma operadora regional consolidada em São Paulo, com mais de 85 mil beneficiários e forte presença na região noroeste da capital e Grande SP, incluindo Guarulhos, Osasco, Caieiras e região.</p>
            <p>Na Elevance Seguros, o corretor Rodrigo Farias analisa seu perfil e encontra a melhor opção de plano Plena Saúde para você e sua família, sem burocracia e sem custo de consultoria.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Plena%20Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-105"
              style={{background: "#16a34a"}}>
              <MessageCircle className="w-5 h-5" /> Solicitar Cotação Gratuita
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <ScrollCTA produto="Plano Plena Saúde" />
    </>
  );
};

export default PlenaSaudePage;
