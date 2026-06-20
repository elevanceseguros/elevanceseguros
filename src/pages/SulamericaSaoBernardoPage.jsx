import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const SulamericaSaoBernardoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = [
    "ABCD Paulista é o maior polo industrial do Brasil — SulAmérica tem forte presença empresarial na região",
    "Plano Exato com reembolso: ideal para profissionais do setor automotivo e metalúrgico",
    "Acesso à Rede D'Or no ABC: Hospital São Luiz Itaquera nos planos Especial e superiores",
    "MEI e PME aceitos a partir de 3 vidas com CNPJ ativo há 6 meses",
    "Gestão preventiva corporativa documentada: redução de 18-25% em sinistralidade para empresas",
    "Cobertura para Santo André, São Caetano do Sul, Diadema e Mauá nos planos nacionais",
  ];

  return (
    <>
      <Helmet>
        <title>Plano SulAmérica em São Bernardo | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano SulAmérica em São Bernardo do Campo: forte presença empresarial no ABCD. Rede D'Or, Exato com reembolso, gestão preventiva. MEI aceito. Cotação gratuita." />
        <meta name="keywords" content="SulAmérica São Bernardo, plano saúde ABCD, SulAmérica empresarial ABC, cotação SulAmérica São Bernardo, plano saúde ABC Paulista" />
        <link rel="canonical" href="https://www.elevanceseguros.com/sulamerica-sao-bernardo-do-campo" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "SulAmérica", "item": "https://www.elevanceseguros.com/sulamerica"},
            {"@type": "ListItem", "position": 3, "name": "São Bernardo do Campo", "item": "https://www.elevanceseguros.com/sulamerica-sao-bernardo-do-campo"}
          ]
        })}`}</script>
      </Helmet>

      <CorretorHero operadora="SulAmérica" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/sulamerica.webp" alt="Logo SulAmérica" className="max-h-16 w-auto object-contain mx-auto animate-fade-in" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#005c99]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Capital do Automóvel · ABCD Paulista
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano SulAmérica em <span className="text-[#C9A84C]">São Bernardo</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                São Bernardo do Campo concentra montadoras, metalúrgicas e grandes empresas. A SulAmérica é a operadora ideal para esse perfil empresarial, com gestão preventiva que reduz custos de saúde para as empresas ao longo do tempo.
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
              <OperatorQuoteForm operatorName="SulAmérica São Bernardo" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="SulAmérica São Bernardo"
        cor="#005c99"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 175,00', apto: 'R$ 240,00'},
          {idade: '19 a 23', enf: 'R$ 200,00', apto: 'R$ 275,00'},
          {idade: '24 a 28', enf: 'R$ 236,00', apto: 'R$ 323,00'},
        ]}
        hospitais={[
          {nome: 'Hospital Assunção', regiao: 'São Bernardo do Campo', desc: 'Um dos principais hospitais do ABCD, credenciado nas linhas SulAmérica com atendimento de alta qualidade.'},
          {nome: 'Hospital São Luiz Itaquera (Rede D\'Or)', regiao: 'Itaquera / São Paulo', desc: 'Acessível nos planos Especial e superiores — referência em alta complexidade e cirurgias.'},
          {nome: 'Hospital Estadual Mário Covas', regiao: 'Santo André', desc: 'Referência regional em urgência e casos de alta complexidade no ABCD Paulista.'},
          {nome: 'Cobertura ABCD', regiao: 'Santo André, São Caetano, Diadema, Mauá', desc: 'Planos nacionais cobrem todo o ABC e permitem atendimento em qualquer cidade do Brasil.'},
        ]}
        depoimento={{
          inicial: "C",
          nome: "Carlos",
          local: "São Bernardo do Campo, SP",
          texto: "Tenho uma metalúrgica pequena e precisava de um plano com gestão preventiva. A Elevance me apresentou o SulAmérica Exato — ótimo custo-benefício para o meu time.",
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde SulAmérica em São Bernardo do Campo</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">São Bernardo do Campo é a <strong>Capital do Automóvel</strong> — cidade de montadoras como Volkswagen, Mercedes-Benz e Toyota, além de um vasto polo metalúrgico e industrial. Para esse perfil empresarial, a SulAmérica oferece um diferencial único: <strong>gestão preventiva corporativa</strong> com programa documentado de redução de 18% a 25% na sinistralidade.</p>
            <p className="mb-4">Para quem busca liberdade de escolha médica, o <strong>plano Exato</strong> permite reembolso para consultas fora da rede e cobertura em todo o território nacional — ideal para empresários e executivos que viajam com frequência.</p>
            <p className="mb-4">A Elevance Seguros atende toda a região do ABCD e ajuda sua empresa a encontrar o plano com melhor custo-benefício para o seu time.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano SulAmérica em São Bernardo do Campo"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#005c99] hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "A SulAmérica tem boa cobertura em São Bernardo do Campo?", resposta: "Sim. A SulAmérica possui rede credenciada robusta no ABCD com acesso ao Hospital Assunção, Hospital Estadual Mário Covas e, nos planos superiores, à Rede D'Or." },
        { pergunta: "O plano SulAmérica tem gestão preventiva para empresas?", resposta: "Sim. A SulAmérica oferece programa de gestão preventiva corporativa que historicamente reduz sinistralidade entre 18% e 25%, trazendo economia real para as empresas." },
        { pergunta: "MEI pode contratar SulAmérica em São Bernardo?", resposta: "Sim, a partir de 3 vidas com CNPJ ativo há 6 meses. Fale com a Elevance Seguros para cotação personalizada." },
        { pergunta: "O plano cobre Santo André, Diadema e São Caetano?", resposta: "Nos planos nacionais (Exato em diante), sim — toda a região do ABCD está coberta, assim como o restante do Brasil." },
        { pergunta: "Como contratar SulAmérica em São Bernardo do Campo?", resposta: "Pela Elevance Seguros você faz cotação gratuita via WhatsApp e contrata 100% digital. Atendemos toda a região do ABCD." },
      ]} />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">SulAmérica em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/sulamerica-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/sulamerica-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> · <a href="/sulamerica-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">Plano SulAmérica</a> · <a href="/hapvida-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">Hapvida São Bernardo</a> · <a href="/bradescosaude-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">Bradesco São Bernardo</a> · <a href="/amil-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">Amil São Bernardo</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde SulAmérica em São Bernardo do Campo" />
    </>
  );
};

export default SulamericaSaoBernardoPage;
