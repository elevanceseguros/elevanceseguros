import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const MedSeniorCampinasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Unidade própria MedSênior no Botafogo, Campinas",
    "Atendimento especializado e humanizado para a terceira idade",
    "Acesso ao Hospital Renascença (ONA Nível 3)",
    "Cobertura também no Hospital Santa Tereza e Vera Cruz",
    "Foco em medicina preventiva para o bem envelhecer"
  ];

  return (
    <>
      <Helmet>
        <title>Plano MedSênior em Campinas | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano de saúde MedSênior em Campinas, com unidade própria no Botafogo e rede credenciada incluindo Hospital Renascença e Santa Tereza. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="MedSênior Campinas, plano de saúde idoso Campinas, MedSênior melhor idade Campinas, cotação MedSênior Campinas" />
        <link rel="canonical" href="https://www.elevanceseguros.com/medsenior-campinas" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "MedSênior", "item": "https://www.elevanceseguros.com/medsenior"},
            {"@type": "ListItem", "position": 3, "name": "Campinas", "item": "https://www.elevanceseguros.com/medsenior-campinas"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital, atendemos todo o Brasil." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="MedSênior" />

      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img
          src="/logos/medsenior.webp"
          alt="Logo MedSênior"
          className="max-h-16 w-auto object-contain mx-auto animate-fade-in"
          style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#064e3b]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-blue-100 text-green-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Unidade própria · Botafogo, Campinas
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano MedSênior em <span className="text-[#0d1f3c]">Campinas</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A MedSênior, plano de saúde referência para a terceira idade, conta com unidade própria no Botafogo, em Campinas, além de rede credenciada com o Hospital Renascença, Santa Tereza e Vera Cruz.
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
              <OperatorQuoteForm operatorName="MedSênior Campinas" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="MedSênior Campinas"
        cor="#059669"
        tabela={[
          {idade: '49 a 53', enf: 'R$ 487,20', apto: 'R$ 612,90'},
          {idade: '54 a 58', enf: 'R$ 568,40', apto: 'R$ 715,30'},
          {idade: '59+', enf: 'R$ 689,90', apto: 'R$ 862,50'}
        ]}
        hospitais={[
          {nome: 'Unidade MedSênior Campinas', regiao: 'Botafogo, Campinas', desc: 'Unidade própria com medicina preventiva e consultas eletivas, na Av. Barão de Itapura.'},
          {nome: 'Hospital Renascença', regiao: 'Campinas', desc: 'Certificação ONA Nível 3, internação hospitalar e pronto-socorro na rede credenciada.'},
          {nome: 'Hospital Geral e Maternidade Santa Tereza', regiao: 'Campinas', desc: 'Internação hospitalar e pronto-socorro na rede credenciada MedSênior.'},
          {nome: 'Casa de Saúde Vera Cruz', regiao: 'Campinas', desc: 'Internação hospitalar e pronto-socorro adicional na rede credenciada.'}
        ]}
        depoimento={{
          inicial: "T",
          nome: "Therezinha",
          local: "Campinas, SP",
          texto: "Meu filho me ajudou a fechar o plano MedSênior pela Elevance pelo WhatsApp. Achei a unidade própria aqui em Campinas bem perto de casa, no Botafogo."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde MedSênior em Campinas: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">Em 2024, a MedSênior — plano de saúde referência em atendimento à terceira idade — inaugurou sua primeira <strong>unidade própria em Campinas</strong>, localizada no Botafogo, na Avenida Barão de Itapura, oferecendo medicina preventiva e consultas eletivas com atendimento especializado e humanizado.</p>
            <p className="mb-4">
              A rede credenciada em Campinas inclui o <strong>Hospital Renascença</strong> (certificação máxima ONA Nível 3), o <strong>Hospital Geral e Maternidade Santa Tereza</strong> e a <strong>Casa de Saúde Vera Cruz</strong>, para internação hospitalar e pronto-socorro.
            </p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano MedSênior para você em Campinas, com o melhor custo-benefício do mercado para a melhor idade.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de Campinas e quero cotar um plano MedSênior"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "A MedSênior tem unidade própria em Campinas?", resposta: "Sim, desde 2024 a MedSênior tem unidade própria no Botafogo, em Campinas, na Avenida Barão de Itapura, com medicina preventiva e consultas eletivas." },
        { pergunta: "O plano MedSênior em Campinas dá acesso ao Hospital Renascença?", resposta: "Sim, o Hospital Renascença, com certificação máxima ONA Nível 3, faz parte da rede credenciada MedSênior em Campinas para internação hospitalar e pronto-socorro." },
        { pergunta: "A partir de que idade posso contratar a MedSênior?", resposta: "A MedSênior é voltada para a melhor idade, com planos a partir dos 49 anos. Consulte a Elevance Seguros para a faixa etária e categoria de plano ideal para o seu caso." },
        { pergunta: "O plano MedSênior em Campinas tem coparticipação?", resposta: "Existem opções com e sem coparticipação na MedSênior, variando conforme a categoria do plano (Enfermaria, Apartamento, Black). A Elevance Seguros ajuda a escolher a melhor opção para o seu perfil." },
        { pergunta: "O plano cobre cidades próximas a Campinas, como Indaiatuba e Sumaré?", resposta: "Sim, a área de atuação MedSênior na região inclui Campinas e cidades vizinhas como Indaiatuba e Sumaré, dependendo do plano. Consulte a Elevance Seguros para confirmar a cobertura na sua cidade." }
      ]} />

      <FloatingWhatsApp />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">MedSênior em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/medsenior-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a> · <a href="/hapvida-campinas" className="text-[#0d1f3c] font-black hover:underline">Hapvida Campinas</a> · <a href="/bradescosaude-campinas" className="text-[#0d1f3c] font-black hover:underline">Bradesco Campinas</a> · <a href="/amil-campinas" className="text-[#0d1f3c] font-black hover:underline">Amil Campinas</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde MedSênior em Campinas" />
    </>
  );
};

export default MedSeniorCampinasPage;
