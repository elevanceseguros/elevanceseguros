import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const HapvidaRibeiraoPretoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Hospital São Francisco — referência em Ribeirão Preto desde 1945",
    "Mais de 600 leitos e 65 leitos de UTI",
    "Maternidade Sinhá Junqueira na rede",
    "Pronto Atendimento próprio na Ribeirânia",
    "Cobertura para toda a região de Ribeirão Preto"
  ];

  return (
    <>
      <Helmet>
        <title>Plano Hapvida em Ribeirão Preto | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano de saúde Hapvida (Hospital São Francisco) em Ribeirão Preto. Rede própria com mais de 600 leitos, Maternidade Sinhá Junqueira e PA na Ribeirânia. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Hapvida Ribeirão Preto, plano de saúde Ribeirão Preto, Hospital São Francisco Ribeirão Preto, cotação Hapvida Ribeirão Preto" />
        <link rel="canonical" href="https://www.elevanceseguros.com/hapvida-ribeirao-preto" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Hapvida", "item": "https://www.elevanceseguros.com/hapvida"},
            {"@type": "ListItem", "position": 3, "name": "Ribeirão Preto", "item": "https://www.elevanceseguros.com/hapvida-ribeirao-preto"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital, atendemos todo o Brasil." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Hapvida" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img
          src="/logos/hapvida.webp"
          alt="Logo Hapvida"
          className="max-h-16 w-auto object-contain mx-auto animate-fade-in"
          style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#92400e]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-blue-100 text-green-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Hospital São Francisco · Ribeirão Preto
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Hapvida em <span className="text-[#0d1f3c]">Ribeirão Preto</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Hapvida assumiu a operação do tradicional Hospital São Francisco em Ribeirão Preto, referência na cidade desde 1945. Rede própria robusta, Maternidade Sinhá Junqueira e Pronto Atendimento na Ribeirânia.
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

            <div className="animate-fade-in">
              <OperatorQuoteForm operatorName="Hapvida Ribeirão Preto" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Hapvida Ribeirão Preto"
        cor="#f97316"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 143,83', apto: 'R$ 201,40'},
          {idade: '19 a 23', enf: 'R$ 170,95', apto: 'R$ 239,30'},
          {idade: '24 a 28', enf: 'R$ 205,14', apto: 'R$ 287,20'}
        ]}
        hospitais={[
          {nome: 'Hospital São Francisco', regiao: 'Centro, Ribeirão Preto', desc: 'Mais de 600 leitos e 65 leitos de UTI. Referência hospitalar na cidade desde 1945.'},
          {nome: 'Maternidade Sinhá Junqueira', regiao: 'Ribeirão Preto', desc: 'Maternidade integrada à rede para acompanhamento de gestantes e parto.'},
          {nome: 'PA Mais Saúde (Ribeirânia)', regiao: 'Ribeirânia, Ribeirão Preto', desc: 'Pronto Atendimento próprio com emergência 24h na Av. Leão XIII.'},
          {nome: 'Rede regional Hapvida', regiao: 'Região de Ribeirão Preto', desc: 'Cobertura ambulatorial estendida às cidades vizinhas da região.'}
        ]}
        depoimento={{
          inicial: "M",
          nome: "Mariana",
          local: "Ribeirão Preto, SP",
          texto: "Fechei o plano pela Elevance e o Rodrigo me explicou direitinho como funciona a rede do São Francisco aqui em Ribeirão. Atendimento rápido pelo WhatsApp."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Hapvida em Ribeirão Preto: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">Em Ribeirão Preto, a Hapvida opera através da estrutura do tradicional <strong>Hospital São Francisco</strong>, fundado em 1945 e considerado o maior hospital particular da cidade, com mais de 600 leitos e 65 leitos de UTI. A rede inclui ainda a <strong>Maternidade Sinhá Junqueira</strong> e o Pronto Atendimento na Ribeirânia, na Av. Leão XIII.</p>
            <p className="mb-4">
              Quem mora em Ribeirão Preto e região mantém o atendimento já conhecido do São Francisco, agora com a tecnologia e solidez nacional da marca Hapvida — telemedicina 24h, app para agendamento de consultas e carteirinha digital.
            </p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Hapvida para você e sua família em Ribeirão Preto, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de Ribeirão Preto e quero cotar um plano Hapvida"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ perguntas={[
        { pergunta: "O plano Hapvida em Ribeirão Preto atende no Hospital São Francisco?", resposta: "Sim. A Hapvida assumiu a operação do Hospital São Francisco, tradicional na cidade desde 1945, com mais de 600 leitos e 65 leitos de UTI. É a principal unidade de referência para os beneficiários Hapvida em Ribeirão Preto." },
        { pergunta: "A Maternidade Sinhá Junqueira está incluída no plano?", resposta: "Sim, a Maternidade Sinhá Junqueira faz parte da rede Hapvida em Ribeirão Preto, sendo referência para acompanhamento de gestantes e parto na região." },
        { pergunta: "Tem Pronto Atendimento próprio em Ribeirão Preto?", resposta: "Sim, a Hapvida conta com Pronto Atendimento próprio na Ribeirânia (Av. Leão XIII), com emergência 24h, além do pronto-socorro do Hospital São Francisco no Centro." },
        { pergunta: "Moro na região de Ribeirão Preto, posso contratar o plano?", resposta: "Sim. A cobertura ambulatorial da Hapvida em Ribeirão Preto se estende às cidades vizinhas da região. Fale com a Elevance Seguros para confirmar a rede disponível na sua cidade específica." },
        { pergunta: "Hapvida cobre parto em Ribeirão Preto?", resposta: "Sim, mas com carência de 300 dias para parto normal e cesárea, conforme regras gerais da operadora. Para gestantes já grávidas na data de contratação, há regras específicas — consulte-nos antes de fechar o plano." }
      ]} />

      <FloatingWhatsApp />

      {/* Links internos */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Plano Hapvida</a> · <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/unimed" className="text-[#0d1f3c] font-black hover:underline">Unimed</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Hapvida em Ribeirão Preto" />
    </>
  );
};

export default HapvidaRibeiraoPretoPage;
