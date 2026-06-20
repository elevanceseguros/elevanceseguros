import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const AlicePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "Healthtech 100% digital — único plano com modelo de coordenação do cuidado no Brasil",
    "Time de Saúde: médicos e enfermeiros dedicados 24h pelo app, sem fila, sem burocracia",
    "Atenção Primária isenta de coparticipação — prevenir custa menos que tratar",
    "A partir de 1 vida para MEI — não precisa de funcionário para contratar",
    "Plano Equilíbrio Enf: R$ 310,95/mês (PME 0-18) · Plano Exclusivo: acesso ao Einstein e Sírio",
    "Aproveitamento de carências congêneres disponível — troque de plano sem esperar de novo",
  ];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Alice PME | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Alice PME/MEI 2026: Time de Saúde 24h, atenção primária sem coparticipação, a partir de 1 vida. Plano Equilíbrio a partir de R$ 310,95. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Alice Saúde, plano Alice PME, plano Alice MEI, Alice healthtech, cotação Alice Saúde, plano saúde digital" />
        <link rel="canonical" href="https://www.elevanceseguros.com/alice" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Alice", "item": "https://www.elevanceseguros.com/alice"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="Alice" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/alice.webp" alt="Logo Alice Saúde" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#7c3aed"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Healthtech · Time de Saúde 24h
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">Plano Alice: saúde gerenciada com tecnologia e <span className="text-yellow-300">Time de Saúde 24h</span></h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">A Alice não é só um plano de saúde — é uma gestora de saúde. Com médicos e enfermeiros dedicados disponíveis 24h pelo app, atenção primária sem coparticipação e acesso a hospitais de elite, é a escolha de PMEs e MEIs que querem mais do que um convênio.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="Alice" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="Alice"
        cor="#7c3aed"
        tabela={[{"idade": "00 a 18", "enf": "R$ 310,95 (Equilíbrio)", "apto": "R$ 430,00 (Conforto)"},
          {"idade": "19 a 23", "enf": "R$ 367,00", "apto": "R$ 508,00"},
          {"idade": "24 a 28", "enf": "R$ 441,00", "apto": "R$ 611,00"},
          {"idade": "29 a 33", "enf": "R$ 529,00", "apto": "R$ 734,00"},
          {"idade": "34 a 38", "enf": "R$ 617,00", "apto": "R$ 855,00"},
          {"idade": "39 a 43", "enf": "R$ 746,00", "apto": "R$ 1.034,00"},
          {"idade": "44 a 48", "enf": "R$ 970,00", "apto": "R$ 1.344,00"},
          {"idade": "49 a 53", "enf": "R$ 1.267,00", "apto": "R$ 1.756,00"},
          {"idade": "54 a 58", "enf": "R$ 1.757,00", "apto": "R$ 2.435,00"},
          {"idade": "59 em diante", "enf": "R$ 1.864,00", "apto": "R$ 2.583,00"}]}
        hospitais={[{"nome": "Hospital Oswaldo Cruz", "regiao": "São Paulo — Higienópolis", "desc": "Disponível no plano Equilíbrio. Referência em cirurgias e internações em São Paulo."},
          {"nome": "BP — Beneficência Portuguesa Mirante", "regiao": "São Paulo — Higienópolis", "desc": "Disponível no Equilíbrio. Um dos maiores hospitais de SP com UTI de alta complexidade."},
          {"nome": "Pro Matre Paulista", "regiao": "São Paulo — Santa Cecília", "desc": "Maternidade de referência nacional credenciada no plano Equilíbrio Alice."},
          {"nome": "Hospital Israelita Albert Einstein", "regiao": "São Paulo — Morumbi", "desc": "Disponível apenas na linha Exclusivo (premium) da Alice."}]}
        depoimento={{ inicial: "P", nome: "Paula", local: "São Paulo, SP", texto: "Abri MEI para ter acesso à Alice. O Time de Saúde me ligou no primeiro dia para entender meu histórico. É completamente diferente dos planos tradicionais que tive antes." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Alice: por que é diferente de todos os outros planos</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Alice foi fundada com uma premissa diferente: usar tecnologia e atenção primária proativa para reduzir o número de idas ao pronto-socorro e internações desnecessárias. O Time de Saúde — médicos e enfermeiros disponíveis 24h pelo app — funciona como seu médico de família digital, que conhece seu histórico e coordena tudo.</p>
            <p className="mb-4">A Atenção Primária é gratuita de coparticipação para quem escolhe o plano com coparticipação. Isso significa que as consultas de rotina, acompanhamento de condições crônicas e orientações preventivas são cobertas sem custo adicional — incentivando o uso preventivo em vez do curativo.</p>
            <p>A Alice opera exclusivamente no segmento empresarial. MEI com CNPJ ativo pode contratar a partir de 1 vida. Para quem quer hospitalização em Einstein ou Sírio, a linha Exclusivo oferece esse acesso, com valores mais elevados.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Alice" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "A Alice tem plano individual?", resposta: "Não. A Alice vende exclusivamente para empresas — MEI, PMEs e corporativo. Não há plano para CPF sem CNPJ ativo. Para MEI, o CNPJ precisa estar ativo. A contratação pode ser feita a partir de 1 vida (só o titular)." },
        { pergunta: "O que é o Time de Saúde Alice?", resposta: "É uma equipe exclusiva de médicos e enfermeiros que acompanha cada beneficiário pelo app 24h. Diferente do pronto-socorro virtual de outras operadoras, o Time de Saúde da Alice conhece seu histórico, coordena encaminhamentos para especialistas e monitora condições crônicas de forma proativa." },
        { pergunta: "Como funciona a coparticipação na Alice?", resposta: "Nos planos com coparticipação, as consultas de Atenção Primária (via app, com o Time de Saúde) são isentas — você não paga nada por elas. Para consultas com especialistas fora do app, há uma coparticipação fixa de R$ 45 por consulta no Equilíbrio, com teto máximo por evento para internações." },
        { pergunta: "Alice cobre Einstein e Sírio?", resposta: "Apenas na linha Exclusivo (a premium). Nos planos Equilíbrio e Conforto, a rede inclui Oswaldo Cruz, BP Mirante, Pro Matre e outros hospitais de referência, mas não Einstein e Sírio. Para quem precisa especificamente dessas instituições, é necessário contratar o Exclusivo." },
        { pergunta: "Posso migrar da Alice para outra operadora sem refazer carências?", resposta: "Sim. A Alice aceita portabilidade de carências de planos congêneres — se você já tinha outro plano há mais de 6 meses, pode trazer as carências cumpridas para a Alice. O mesmo vale na saída: ao migrar de Alice para outra operadora congênere, você pode aproveitar o tempo de carência já cumprido." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Hapvida</a> · 
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · 
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · 
            <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · 
            <a href="/porto" className="text-[#0d1f3c] font-black hover:underline">Porto Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano Alice Saúde" />
    </>
  );
};

export default AlicePage;
