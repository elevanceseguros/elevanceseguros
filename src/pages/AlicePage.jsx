import React, { useEffect } from 'react';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import { Helmet } from 'react-helmet-async';
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
        <title>Plano de Saúde Alice PME | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Conheça a Alice, a gestora de saúde que conecta você aos melhores hospitais e médicos. Tecnologia, sem burocracia e foco na sua saúde." />
        <meta name="keywords" content="Alice saúde, plano Alice, gestora de saúde, plano premium, hospitais de ponta" />
        <link rel="canonical" href="https://www.elevanceseguros.com/alice" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Alice Saúde", "item": "https://www.elevanceseguros.com/alice"}
          ]
        })}`}</script>
              <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital em São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Alice" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img className="animate-fade-in"
          src="https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/d99e1d08bfc2df463658d326c4aafc4d.jpg" 
          alt="Logo Alice" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#8b005a]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in"
            >
              <div className="inline-block bg-white/20 text-white backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> Saúde na palma da mão
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Mais que um plano <span className="text-pink-300">Alice Saúde</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Alice reinventou o cuidado com a saúde. Com tecnologia e um Time de Saúde sempre disponível, você tem acesso aos melhores hospitais e laboratórios sem dor de cabeça.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-fuchsia-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in"
            >
              <OperatorQuoteForm operatorName="Alice" />
            </div>
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

      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "Alice plano de saúde é somente para empresas?", resposta: "Sim! A Alice é uma operadora exclusiva para PME (planos empresariais), atendendo empresas a partir de 2 vidas. Não comercializa planos individuais ou familiares fora do vínculo empresarial." },
    { pergunta: "Alice saúde tem app?", resposta: "Sim! O app Alice é um dos diferenciais da operadora — permite consultas por telemedicina, agendamento, chat com médicos 24h e acesso à carteirinha digital. A Alice é conhecida pela experiência digital superior." },
    { pergunta: "Qual a cobertura da rede Alice em São Paulo?", resposta: "A Alice tem rede credenciada selecionada em São Paulo com foco em qualidade. Inclui hospitais de referência e laboratórios de exames. Por ser uma operadora mais nova, a rede é menor que as tradicionais, mas bem avaliada pelos usuários." }
  ]} />


      {/* Links internos — outras operadoras */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Também trabalhamos com</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-sky-300 font-black hover:underline">Amil</a> · <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/unimed" className="text-[#0d1f3c] font-black hover:underline">Unimed</a> · <a href="/porto" className="text-[#0d1f3c] font-black hover:underline">Porto Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Alice" />
    </>
  );
};

export default AlicePage;