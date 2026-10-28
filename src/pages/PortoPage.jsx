import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const PortoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "Linha Bairros (econômica regional), Linha P / Mediservice, Linha Pro e Tradicional (premium)",
    "Proteção Combinada Turbinada: Odonto + Vida + Ocupacional sem custo adicional nos planos superiores",
    "MEI aceito com CNPJ ativo há 6 meses a partir de 3 vidas",
    "Regiões atendidas: SP, Campinas, São José dos Campos, Brasília e Rio de Janeiro",
    "Coleta domiciliar de exames laboratoriais nas categorias superiores sem taxa adicional",
    "Dependentes indiretos aceitos: pai, mãe, sogro(a), sobrinhos, netos e irmãos",
  ];

  return (
    <>
      <Helmet>
        <title>Plano Porto Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Porto Saúde 2026: linhas Bairros, P, Pro e Tradicional. Proteção Combinada Turbinada (Odonto + Vida). MEI aceito. Coleta domiciliar. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Porto Saúde, Porto Seguro Saúde, plano Porto PME, Porto Saúde MEI, cotação Porto Saúde SP" />
        <link rel="canonical" href="https://www.elevanceseguros.com/porto" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Porto Saúde", "item": "https://www.elevanceseguros.com/porto"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="Porto Saúde" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/portoseguro.svg" alt="Logo Porto Saúde" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#005baa"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> PME e MEI · Proteção Combinada Turbinada
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">Plano Porto Saúde: <span className="text-yellow-300">odonto e vida inclusos</span> sem custo adicional</h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">A Porto Saúde reformulou seu portfólio em 2025 e criou um diferencial concreto: a Proteção Combinada Turbinada, que inclui Odontológico, Seguro de Vida e Cobertura Ocupacional sem valor adicional nas linhas superiores. É o plano com o melhor pacote de benefícios combinados do mercado PME.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="Porto Saúde" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="Porto Saúde"
        cor="#005baa"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "19 a 23", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "24 a 28", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "29 a 33", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "34 a 38", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "39 a 43", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "44 a 48", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "49 a 53", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "54 a 58", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59 em diante", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Hospital Albert Einstein", "regiao": "São Paulo — Morumbi", "desc": "Disponível na linha Diamante com salas VIP. Referência global em medicina de alta complexidade."},
          {"nome": "Hospital Sírio-Libanês", "regiao": "São Paulo — Bela Vista", "desc": "Acesso na linha Diamante. Um dos três melhores hospitais da América Latina."},
          {"nome": "Hospital BP — Beneficência Portuguesa", "regiao": "São Paulo — Higienópolis", "desc": "Credenciado nas linhas Pro e superiores. Um dos maiores e mais completos hospitais de SP."},
          {"nome": "Hospital Leforte / São Luiz", "regiao": "São Paulo — Morumbi e Itaim", "desc": "Rede São Luiz/Leforte credenciada nas linhas P (Mediservice) e superiores."},
          {"nome": "Hospital São Luiz Campinas", "regiao": "Campinas, SP", "desc": "Disponível nas linhas premium Porto Saúde para beneficiários de Campinas."}]}
        depoimento={{ inicial: "G", nome: "Gustavo", local: "São Paulo, SP", texto: "O diferencial da Porto para mim foi o Odonto e o Vida inclusos. Fechei o Pro e já economizei o que pagaria em separado. O Rodrigo foi direto ao ponto na comparação." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Proteção Combinada Turbinada: o diferencial que a Porto criou</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A grande inovação do portfólio Porto Saúde 2025 foi a Proteção Combinada Turbinada — um pacote que inclui, sem custo adicional nas linhas Pro e superiores: plano odontológico, seguro de vida individual e cobertura ocupacional (acidentes de trabalho). São três proteções que, se contratadas separadamente, custariam entre R$ 80 e R$ 150/mês a mais por colaborador.</p>
            <p className="mb-4">A linha Bairros é a porta de entrada econômica, com rede regional selecionada. A linha P (Mediservice) já oferece rede ampliada com hospitais de referência como São Luiz e Leforte. A linha Pro é a mais vendida para PMEs de médio porte. O Diamante é o produto premium com Einstein, Sírio e salas VIP — para executivos e diretoria.</p>
            <p>Dependentes indiretos como pai, mãe, sogro(a) e irmãos também podem ser incluídos nos planos Porto — um diferencial frente à maioria das operadoras que limita a dependentes diretos.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Porto%20Sa%C3%BAde" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "O que está incluído na Proteção Combinada Turbinada?", resposta: "Odontológico (cobertura completa para consultas, extrações, restaurações e ortodontia básica), Seguro de Vida individual (cobertura por morte e invalidez) e Cobertura Ocupacional (acidentes relacionados ao trabalho). Tudo sem custo adicional nas linhas Pro e superiores da Porto Saúde." },
        { pergunta: "Porto Saúde aceita MEI?", resposta: "Sim. MEI com CNPJ ativo há pelo menos 6 meses pode contratar Porto Saúde a partir de 3 vidas. A adesão mínima para grupos de 4 a 9 vidas é de pelo menos 1 vida PJ (pessoa jurídica), o que se aplica ao MEI." },
        { pergunta: "Qual a diferença entre a linha P e a linha Pro?", resposta: "A linha P (Mediservice) é intermediária com boa rede de hospitais incluindo São Luiz e Leforte. A linha Pro é superior com rede mais ampla, mais hospitais de referência e inclui a Proteção Combinada Turbinada (Odonto + Vida + Ocupacional). Para empresas que querem o pacote completo, o Pro costuma ser mais vantajoso." },
        { pergunta: "Porto Saúde cobre fora de São Paulo?", resposta: "As linhas Pro, Tradicional e Diamante têm cobertura nacional. A linha Bairros é regional (SP, Campinas, SJC). A Porto também cobre nas linhas superiores em Brasília e Rio de Janeiro, e inclui seguro viagem internacional nos planos Diamante." },
        { pergunta: "Posso incluir meus pais no plano Porto?", resposta: "Sim. A Porto Saúde permite inclusão de dependentes indiretos — pai, mãe, sogro(a), sobrinhos consanguíneos, irmãos e netos — o que é raro entre as operadoras. Ideal para empresários que querem estender a cobertura para a família mais ampla." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Hapvida</a> · 
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · 
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · 
            <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · 
            <a href="/alice" className="text-[#0d1f3c] font-black hover:underline">Alice</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano Porto Saúde" />
    </>
  );
};

export default PortoPage;
