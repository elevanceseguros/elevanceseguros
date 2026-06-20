import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const SulamericaCampinasPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = [
    "Rede D'Or credenciada em Campinas — acesso aos hospitais de maior referência da região",
    "Plano Exato (mais vendido): cobertura nacional + reembolso por livre escolha de médico",
    "Linha Direto Campinas: rede regional enxuta com padrão SulAmérica a menor custo",
    "MEI aceito a partir de 3 vidas com CNPJ ativo há 6 meses",
    "Reembolso nos planos Exato e superiores — atenda-se com qualquer médico e solicite ressarcimento",
    "Telemedicina e descontos em farmácias parceiras incluídos em todos os planos",
  ];

  return (
    <>
      <Helmet>
        <title>Plano SulAmérica em Campinas | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano SulAmérica em Campinas: Rede D'Or credenciada, linha Exato com cobertura nacional e reembolso. MEI aceito. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="SulAmérica Campinas, plano de saúde Campinas, SulAmérica Exato Campinas, cotação SulAmérica Campinas, plano saúde interior paulista" />
        <link rel="canonical" href="https://www.elevanceseguros.com/sulamerica-campinas" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "SulAmérica", "item": "https://www.elevanceseguros.com/sulamerica"},
            {"@type": "ListItem", "position": 3, "name": "Campinas", "item": "https://www.elevanceseguros.com/sulamerica-campinas"}
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
                <MapPin className="w-4 h-4" /> Rede D'Or · Campinas
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano SulAmérica em <span className="text-[#C9A84C]">Campinas</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A SulAmérica é a operadora com maior presença na Rede D'Or em todo o Brasil. Em Campinas, isso significa acesso a hospitais de alta referência com cobertura nacional e opção de reembolso por livre escolha.
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
              <OperatorQuoteForm operatorName="SulAmérica Campinas" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="SulAmérica Campinas"
        cor="#005c99"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 170,00', apto: 'R$ 232,00'},
          {idade: '19 a 23', enf: 'R$ 195,00', apto: 'R$ 268,00'},
          {idade: '24 a 28', enf: 'R$ 230,00', apto: 'R$ 315,00'},
        ]}
        hospitais={[
          {nome: 'Rede D\'Or Campinas', regiao: 'Campinas', desc: 'A SulAmérica possui a maior presença em hospitais Rede D\'Or do Brasil, com acesso garantido nas linhas Exato e superiores.'},
          {nome: 'Hospital Vera Cruz', regiao: 'Campinas', desc: 'Um dos principais hospitais credenciados da região campineira, com atendimento de alta qualidade em diversas especialidades.'},
          {nome: 'ICC — Hospital do Coração', regiao: 'Botafogo, Campinas', desc: 'Referência em cardiologia e cirurgia cardiovascular no interior paulista, credenciado nos planos superiores.'},
          {nome: 'Cobertura Metropolitana', regiao: 'Região Metropolitana de Campinas', desc: 'Planos nacionais cobrem toda a RMC incluindo Valinhos, Vinhedo, Indaiatuba, Sumaré e Paulínia.'},
        ]}
        depoimento={{
          inicial: "R",
          nome: "Ricardo",
          local: "Campinas, SP",
          texto: "Trabalhava fora e precisava de um plano com reembolso. A Elevance me indicou o SulAmérica Exato em Campinas — perfeito para o meu caso, posso escolher qualquer médico.",
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde SulAmérica em Campinas: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A SulAmérica é reconhecida como a operadora com maior acesso aos hospitais da <strong>Rede D'Or</strong> em todo o Brasil. Em Campinas, isso se traduz em cobertura diferenciada nos planos Exato e superiores, com acesso a hospitais de alta complexidade e referência na região.</p>
            <p className="mb-4">Para quem busca menor custo sem abrir mão da qualidade SulAmérica, a <strong>linha Direto Campinas</strong> oferece rede regional bem estruturada com atendimento em hospitais, clínicas e laboratórios selecionados dentro da cidade — ideal para quem mora e trabalha em Campinas.</p>
            <p className="mb-4">Na Elevance Seguros, analisamos o seu perfil e indicamos a linha mais adequada: Direto para quem prefere menor mensalidade, Exato para quem valoriza cobertura nacional e reembolso, ou Especial e Prestige para quem busca o premium.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano SulAmérica em Campinas"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#005c99] hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "O plano SulAmérica em Campinas dá acesso à Rede D'Or?", resposta: "Sim, nos planos Exato e superiores. A SulAmérica é a operadora com maior presença em hospitais Rede D'Or em todo o Brasil, o que inclui acesso a unidades de alta referência na região de Campinas." },
        { pergunta: "Qual a diferença entre o plano Direto e o Exato em Campinas?", resposta: "O Direto utiliza rede regional selecionada em Campinas com menor mensalidade. O Exato oferece cobertura nacional, acesso a mais hospitais e reembolso para livre escolha de médico — é o mais vendido da SulAmérica." },
        { pergunta: "MEI pode contratar SulAmérica em Campinas?", resposta: "Sim, a SulAmérica aceita MEI a partir de 3 vidas com CNPJ ativo há pelo menos 6 meses. Fale com a Elevance Seguros para verificar as condições atuais." },
        { pergunta: "O plano cobre cidades vizinhas de Campinas?", resposta: "Nos planos nacionais (Exato em diante), sim — há cobertura em toda a região metropolitana de Campinas e em todo o Brasil. No plano Direto a rede é regional." },
        { pergunta: "Como contratar o plano SulAmérica em Campinas?", resposta: "Pela Elevance Seguros você recebe cotação gratuita, comparação de planos e acompanhamento personalizado via WhatsApp. A contratação é 100% digital." },
      ]} />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">SulAmérica em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/sulamerica-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> · <a href="/sulamerica-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/sulamerica-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">Plano SulAmérica</a> · <a href="/hapvida-campinas" className="text-[#0d1f3c] font-black hover:underline">Hapvida Campinas</a> · <a href="/bradescosaude-campinas" className="text-[#0d1f3c] font-black hover:underline">Bradesco Campinas</a> · <a href="/amil-campinas" className="text-[#0d1f3c] font-black hover:underline">Amil Campinas</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde SulAmérica em Campinas" />
    </>
  );
};

export default SulamericaCampinasPage;
