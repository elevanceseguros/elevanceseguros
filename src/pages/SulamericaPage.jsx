import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const SulamericaPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = [
    "Maior rede credenciada de SP — maior presença nos Hospitais Rede D'Or de todo o Brasil",
    "Linhas Direto (regional), Exato (nacional, mais vendido), Especial e Prestige (premium)",
    "MEI aceito com CNPJ ativo há 6 meses a partir de 3 vidas — até 40% mais barato que o individual",
    "Gestão preventiva corporativa: redução de 18% a 25% na sinistralidade documentada",
    "Adesão disponível via entidade de classe (CREA, CRA, COREN e similares)",
    "Reembolso disponível nos planos Exato e superiores para livre escolha de médico",
  ];

  return (
    <>
      <Helmet>
        <title>Plano SulAmérica | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano SulAmérica 2026: maior rede credenciada de SP com Rede D'Or. Linhas Direto, Exato, Especial e Prestige. MEI aceito. Gestão preventiva. Cotação gratuita via Elevance Seguros." />
        <meta name="keywords" content="SulAmérica Saúde, plano sulamerica SP, sulamerica PME, sulamerica MEI, plano saúde rede D'Or, cotação SulAmérica" />
        <link rel="canonical" href="https://www.elevanceseguros.com/sulamerica" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "SulAmérica", "item": "https://www.elevanceseguros.com/sulamerica"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano SulAmérica | Elevance Seguros" />
        <meta name="twitter:description" content="SulAmérica: maior rede credenciada de SP. PME a partir de 3 vidas com Rede D'Or." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="SulAmérica" />

      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/sulamerica.webp" alt="Logo SulAmérica Saúde" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#e85d04]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 60%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-900 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Maior rede credenciada de SP
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano SulAmérica: acesso à <span className="text-yellow-300">Rede D'Or</span> com gestão preventiva
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Adquirida pela Rede D'Or em 2022, a SulAmérica se tornou a operadora com maior presença nos hospitais D'Or de São Paulo. Com gestão preventiva que reduz sinistralidade em até 25%, é a escolha estratégica para empresas que usam o plano como ferramenta de gestão de saúde.
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="SulAmérica" /></div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="SulAmérica"
        cor="#e85d04"
        tabela={[
          {idade: '00 a 18', enf: 'Consulte', apto: 'Consulte'},
          {idade: '19 a 23', enf: 'Consulte', apto: 'Consulte'},
          {idade: '24 a 28', enf: 'Consulte', apto: 'Consulte'},
          {idade: '29 a 33', enf: 'Consulte', apto: 'Consulte'},
          {idade: '34 a 38', enf: 'Consulte', apto: 'Consulte'},
          {idade: '39 a 43', enf: 'Consulte', apto: 'Consulte'},
          {idade: '44 a 48', enf: 'Consulte', apto: 'Consulte'},
          {idade: '49 a 53', enf: 'Consulte', apto: 'Consulte'},
          {idade: '54 a 58', enf: 'Consulte', apto: 'Consulte'},
          {idade: '59 em diante', enf: 'Consulte', apto: 'Consulte'},
        ]}
        hospitais={[
          {nome: 'Hospital Albert Einstein', regiao: 'São Paulo — Morumbi', desc: 'Disponível nas linhas Especial e Prestige. Referência global em medicina de alta complexidade.'},
          {nome: 'Hospital Sírio-Libanês', regiao: 'São Paulo — Bela Vista', desc: 'Presente nas linhas Especial e Prestige. Um dos três melhores hospitais da América Latina.'},
          {nome: 'Hospitais Rede D\'Or SP', regiao: 'São Paulo e Grande SP', desc: 'Copa D\'Or, Rio Mar, Norte D\'Or e outros. SulAmérica é a operadora com maior acesso à Rede D\'Or em SP.'},
          {nome: 'Hospital Oswaldo Cruz', regiao: 'São Paulo — Higienópolis', desc: 'Disponível nas linhas Exato e superiores. Referência em oncologia e cardiologia.'},
          {nome: 'Hospital Samaritano', regiao: 'São Paulo — Higienópolis', desc: 'Credenciado nas linhas nacionais. Um dos hospitais mais tradicionais de SP.'},
        ]}
        depoimento={{
          inicial: "A",
          nome: "André",
          local: "São Paulo, SP",
          texto: "Para a minha empresa a SulAmérica foi a melhor escolha. O Rodrigo comparou as linhas e o Exato Nacional cobria os hospitais que precisávamos com um preço justo."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">SulAmérica Exato: o plano mais vendido no segmento PME</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              O plano SulAmérica <strong>Exato</strong> é o produto mais vendido da operadora no segmento PME — e não é por acaso. Ele combina cobertura nacional, acesso a uma das maiores redes credenciadas do Brasil (incluindo hospitais Rede D'Or) e reembolso por livre escolha, com mensalidade competitiva para empresas de 3 a 99 vidas.
            </p>
            <p className="mb-4">
              A linha <strong>Direto</strong> opera com rede regional mais enxuta, ideal para empresas cujos colaboradores vivem e trabalham na mesma cidade. É a porta de entrada mais acessível. Já as linhas <strong>Especial</strong> e <strong>Prestige</strong> adicionam Einstein, Sírio e reembolso premium — para empresas que oferecem o plano como diferencial estratégico para cargos de liderança.
            </p>
            <p>
              A gestão preventiva corporativa da SulAmérica é um diferencial concreto: o programa monitora a sinistralidade do grupo e propõe ações preventivas que historicamente reduzem os custos de saúde em 18-25%. Isso impacta diretamente no reajuste anual do contrato — empresas com boa gestão preventiva tendem a ter reajustes menores.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano SulAmérica"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "SulAmérica tem plano individual (CPF)?", resposta: "Não diretamente. A SulAmérica comercializa planos coletivos empresariais (com CNPJ, a partir de 3 vidas) e por adesão (via entidade de classe). Não há plano individual vendido diretamente para CPF avulso sem vínculo empregatício ou entidade." },
        { pergunta: "Por que a SulAmérica tem a maior rede D'Or em SP?", resposta: "Porque a Rede D'Or adquiriu a SulAmérica em 2022. A integração entre a maior rede hospitalar privada do Brasil (D'Or) e uma das maiores operadoras de saúde criou um ecossistema único: beneficiários SulAmérica têm acesso preferencial a todos os hospitais D'Or do estado de São Paulo." },
        { pergunta: "SulAmérica aceita MEI?", resposta: "Sim. MEI com CNPJ ativo há pelo menos 6 meses pode contratar plano SulAmérica a partir de 3 vidas (titular + 2 dependentes, ou titular + sócio + 1 dependente). É uma das formas mais inteligentes de um autônomo acessar a rede SulAmérica com preços de PME." },
        { pergunta: "O que é o Amil Dental na SulAmérica?", resposta: "A SulAmérica não inclui Amil Dental — mas oferece a opção de contratar o SulAmérica Odonto como produto combinado, com desconto para empresas que contratam saúde e odonto juntos. Consulte-nos para verificar condições de combo." },
        { pergunta: "Como funciona o reembolso na SulAmérica?", resposta: "Nas linhas Exato e superiores, o reembolso permite consultar médicos fora da rede credenciada e ser reembolsado até o valor da tabela da operadora. O percentual de reembolso e o teto variam por linha. No Prestige, o reembolso é premium e inclui atendimentos no exterior." },
      ]} />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Hapvida</a> ·
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> ·
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> ·
            <a href="/alice" className="text-[#0d1f3c] font-black hover:underline">Alice</a> ·
            <a href="/porto" className="text-[#0d1f3c] font-black hover:underline">Porto Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano SulAmérica Saúde" />
    </>
  );
};

export default SulamericaPage;
