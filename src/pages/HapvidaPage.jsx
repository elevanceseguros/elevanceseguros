import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const HapvidaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Um dos maiores grupos de saúde do Brasil", "Rede própria de hospitais e clínicas", "Planos acessíveis sem perder qualidade", "Atendimento em todo o território nacional", "Telemedicina disponível 24h"];

  return (
    <>
      <Helmet>
        <title>Plano Hapvida | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Hapvida NotreDame Intermédica: plano de saúde acessível com rede própria. Cotação gratuita em São Paulo com a Elevance Seguros." />
        <meta name="keywords" content="Hapvida plano saúde SP, NotreDame Intermédica, cotação Hapvida" />
        <link rel="canonical" href="https://www.elevanceseguros.com/hapvida" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Hapvida", "item": "https://www.elevanceseguros.com/hapvida"}
          ]
        })}`}</script>
              <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital em São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Hapvida" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img className="animate-fade-in"
          src="/logos/hapvida.webp" 
          alt="Logo Hapvida" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#92400e]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in"
            >
              <div className="inline-block bg-blue-100 text-green-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Rede própria integrada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Saúde acessível com a <span className="text-[#0d1f3c]">Hapvida</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Hapvida NotreDame Intermédica é um dos maiores grupos de saúde do Brasil, com rede própria de hospitais, clínicas e laboratórios. Planos acessíveis com cobertura completa.
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
              <OperatorQuoteForm operatorName="Hapvida" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Hapvida"
        cor="#f97316"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 143,83', apto: 'R$ 201,40'},
          {idade: '19 a 23', enf: 'R$ 170,95', apto: 'R$ 239,30'},
          {idade: '24 a 28', enf: 'R$ 205,14', apto: 'R$ 287,20'}
        ]}
        hospitais={[
          {nome: 'Hospital Hapvida (Penha)', regiao: 'Zona Leste, SP', desc: 'Pronto-socorro, internações e cirurgias.'},
          {nome: 'Hospital Hapvida (Santo André)', regiao: 'Grande ABC', desc: 'UTI, emergência 24h e internações.'},
          {nome: 'Hospital Hapvida (Guarulhos)', regiao: 'Guarulhos, SP', desc: 'Pronto-socorro e consultas.'},
          {nome: 'Hospital Hapvida (Campinas)', regiao: 'Interior SP', desc: 'Rede própria com UTI e cirurgias.'}
        ]}
        depoimento={{
          inicial: "R",
          nome: "Roberto",
          local: "São Paulo, SP",
          texto: "Melhor custo-benefício que encontrei. O Rodrigo me explicou como funciona a rede própria e fechei com tranquilidade."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona o plano Hapvida?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Hapvida possui rede própria integrada de hospitais, UPAs, clínicas e laboratórios, o que garante mais controle de qualidade e planos com custo-benefício competitivo.</p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Hapvida para você e sua família, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano Hapvida"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "Hapvida tem rede própria ou credenciada em SP?", resposta: "A Hapvida opera principalmente com rede própria — hospitais, clínicas e laboratórios próprios — o que garante maior controle de qualidade e custos. Em São Paulo, a rede Hapvida é mais restrita do que operadoras tradicionais, sendo mais forte em capitais do Nordeste e interior." },
    { pergunta: "O plano Hapvida é bom para famílias?", resposta: "O Hapvida oferece um dos menores preços do mercado para famílias, sendo uma opção acessível. A rede própria garante bom controle de custos. Para quem valoriza preço e não tem preferência por hospitais específicos, é uma boa escolha." },
    { pergunta: "Hapvida cobre parto?", resposta: "Sim, mas com carência de 300 dias para parto normal e cesárea. A Hapvida tem maternidades próprias credenciadas em São Paulo. Para gestantes que já estão grávidas na data de contratação, há regras específicas de cobertura — consulte-nos antes." },
    { pergunta: "Hapvida tem app para agendar consultas?", resposta: "Sim! O app Hapvida permite agendar consultas, ver resultados de exames, solicitar autorizações e acessar a carteirinha digital. É um dos diferenciais da operadora para facilitar o acesso aos serviços de saúde." }
  ]} />



      {/* Links internos — outras operadoras */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Atendemos também em</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/hapvida-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> · <a href="/hapvida-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/hapvida-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/hapvida-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Também trabalhamos com</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/unimed" className="text-[#0d1f3c] font-black hover:underline">Unimed</a> · <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Hapvida" />
    </>
  );
};

export default HapvidaPage;
