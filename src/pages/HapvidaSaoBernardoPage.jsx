import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const HapvidaSaoBernardoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Maior rede própria do ABC Paulista — 8 unidades na cidade",
    "Hospital São Bernardo: referência em Hemodinâmica",
    "Maternidade NotreCare ABC com Medicina Fetal exclusiva",
    "Mais de 350 leitos na rede própria local",
    "Pronto-Socorro 24h e laboratórios próprios"
  ];

  return (
    <>
      <Helmet>
        <title>Plano Hapvida em São Bernardo do Campo | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano de saúde Hapvida em São Bernardo do Campo. Maior rede própria do ABC: Hospital São Bernardo, Maternidade NotreCare ABC, mais de 350 leitos. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Hapvida São Bernardo do Campo, plano de saúde São Bernardo, Hospital São Bernardo Hapvida, cotação Hapvida ABC" />
        <link rel="canonical" href="https://www.elevanceseguros.com/hapvida-sao-bernardo-do-campo" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Hapvida", "item": "https://www.elevanceseguros.com/hapvida"},
            {"@type": "ListItem", "position": 3, "name": "São Bernardo do Campo", "item": "https://www.elevanceseguros.com/hapvida-sao-bernardo-do-campo"}
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
                <MapPin className="w-4 h-4" /> 8 unidades próprias · São Bernardo do Campo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Hapvida em <span className="text-[#0d1f3c]">São Bernardo do Campo</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                São Bernardo do Campo tem a maior rede própria Hapvida de todo o ABC Paulista: 3 hospitais 24h, 2 maternidades, 3 laboratórios e mais de 350 leitos, com Medicina Fetal exclusiva na Maternidade NotreCare ABC.
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
              <OperatorQuoteForm operatorName="Hapvida São Bernardo do Campo" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Hapvida São Bernardo do Campo"
        cor="#f97316"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 143,83', apto: 'R$ 201,40'},
          {idade: '19 a 23', enf: 'R$ 170,95', apto: 'R$ 239,30'},
          {idade: '24 a 28', enf: 'R$ 205,14', apto: 'R$ 287,20'}
        ]}
        hospitais={[
          {nome: 'Hospital São Bernardo', regiao: 'São Bernardo do Campo', desc: 'Referência regional em Hemodinâmica, com Pronto-Socorro 24h.'},
          {nome: 'Maternidade NotreCare ABC', regiao: 'São Bernardo do Campo', desc: 'Única maternidade NotreCare do Brasil, com Medicina Fetal exclusiva.'},
          {nome: 'Unidades de Saúde da Mulher e Diagnóstico', regiao: 'Centro e Jardim do Mar', desc: 'Ginecologia, obstetrícia, mastologia, análises clínicas e exames de imagem.'},
          {nome: 'Rede integrada do ABC', regiao: 'São Bernardo, Santo André e região', desc: 'Prontuário eletrônico unificado entre as 8 unidades próprias da cidade.'}
        ]}
        depoimento={{
          inicial: "C",
          nome: "Carlos",
          local: "São Bernardo do Campo, SP",
          texto: "Fechei meu plano com a Elevance pelo WhatsApp mesmo, sem complicação. O Rodrigo conhece bem a rede própria aqui do ABC e me ajudou a escolher certo."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Hapvida em São Bernardo do Campo: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">São Bernardo do Campo concentra a <strong>maior rede própria Hapvida de todo o ABC Paulista</strong>, com 8 unidades na cidade: 3 hospitais com atendimento 24h, 2 maternidades, 3 laboratórios e mais de 350 leitos. O <strong>Hospital São Bernardo</strong> é referência regional em Hemodinâmica, e a <strong>Maternidade NotreCare ABC</strong> é a única do tipo no Brasil, com Medicina Fetal exclusiva.</p>
            <p className="mb-4">
              A rede ambulatorial cobre regiões como Centro e Jardim do Mar, com unidades de Saúde da Mulher, diagnóstico por imagem e análises clínicas. A integração de sistemas entre as unidades foi concluída em dezembro de 2023, unificando o prontuário eletrônico de todos os beneficiários do ABC.
            </p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Hapvida para você e sua família em São Bernardo do Campo, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de São Bernardo do Campo e quero cotar um plano Hapvida"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ perguntas={[
        { pergunta: "O plano Hapvida em São Bernardo do Campo tem hospital próprio?", resposta: "Sim, e mais de um: São Bernardo do Campo tem a maior rede própria Hapvida do ABC Paulista, com 3 hospitais 24h, incluindo o Hospital São Bernardo, referência regional em Hemodinâmica." },
        { pergunta: "Tem maternidade na rede própria de São Bernardo?", resposta: "Sim, a Maternidade NotreCare ABC é a única do tipo no Brasil, com Medicina Fetal exclusiva, localizada em São Bernardo do Campo." },
        { pergunta: "O plano cobre moradores de Santo André e outras cidades do ABC?", resposta: "Sim, a rede própria de São Bernardo do Campo também atende pacientes de Santo André e demais cidades do ABC, já que o prontuário eletrônico é unificado entre as unidades da região." },
        { pergunta: "Hapvida cobre parto em São Bernardo do Campo?", resposta: "Sim, mas com carência de 300 dias para parto normal e cesárea, conforme regras gerais da operadora. Para gestantes já grávidas na data de contratação, há regras específicas — consulte-nos antes de fechar o plano." },
        { pergunta: "Quais bairros de São Bernardo têm unidades Hapvida?", resposta: "As unidades próprias estão concentradas principalmente no Centro e no Jardim do Mar, com cobertura ambulatorial e diagnóstica nesses bairros e atendimento hospitalar para toda a cidade." }
      ]} />


      {/* Links internos */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Hapvida em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/hapvida-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> · <a href="/hapvida-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/hapvida-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Plano Hapvida</a> · <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/unimed" className="text-[#0d1f3c] font-black hover:underline">Unimed</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Hapvida em São Bernardo do Campo" />
    </>
  );
};

export default HapvidaSaoBernardoPage;
