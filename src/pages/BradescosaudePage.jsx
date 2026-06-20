import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const BradescosaudePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = [
    "Apenas PME/Empresarial — sem plano individual, premium de qualidade focado em CNPJ",
    "MEI aceito com CNPJ ativo há 6 meses, a partir de 2 vidas (titular + dependente ou sócio)",
    "Linhas Efetivo (regional), Nacional, Nacional Plus e Premium (Einstein VIP + Sírio-Libanês)",
    "Mais de 37.000 médicos e 2.300 hospitais credenciados em 1.300 municípios",
    "Bradesco Saúde Concierge: salas VIP em SP, RJ, BH e Salvador com atendimento exclusivo",
    "Seguro viagem internacional incluso nos planos Nacional Plus, Premium e Top Nacional",
  ];

  return (
    <>
      <Helmet>
        <title>Plano Bradesco Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Bradesco Saúde PME e Empresarial: 37.000 médicos, 2.300 hospitais, linhas Efetivo, Nacional, Nacional Plus e Premium com Einstein e Sírio-Libanês. Cotação via Elevance Seguros." />
        <meta name="keywords" content="Bradesco Saúde, plano Bradesco empresarial, Bradesco PME, Bradesco MEI, plano de saúde Bradesco SP" />
        <link rel="canonical" href="https://www.elevanceseguros.com/bradescosaude" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Bradesco Saúde", "item": "https://www.elevanceseguros.com/bradescosaude"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano Bradesco Saúde | Elevance Seguros" />
        <meta name="twitter:description" content="Bradesco Saúde para empresas e MEI: maior rede credenciada do Brasil." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Bradesco Saúde" />

      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/bradesco.webp" alt="Logo Bradesco Saúde" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#cc0000]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Maior rede credenciada do Brasil
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Bradesco Saúde: <span className="text-yellow-300">qualidade premium</span> para sua empresa
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                O Bradesco Saúde opera exclusivamente no segmento empresarial — o que significa que MEIs, PMEs e empresas de qualquer porte acessam uma das redes mais completas do país, com hospitais de referência como Albert Einstein e Sírio-Libanês.
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
            <div><OperatorQuoteForm operatorName="Bradesco Saúde" /></div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Bradesco Saúde"
        cor="#cc0000"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 235,05', apto: 'R$ 329,00'},
          {idade: '19 a 23', enf: 'R$ 277,00', apto: 'R$ 388,00'},
          {idade: '24 a 28', enf: 'R$ 321,00', apto: 'R$ 450,00'},
          {idade: '29 a 33', enf: 'R$ 386,00', apto: 'R$ 541,00'},
          {idade: '34 a 38', enf: 'R$ 437,00', apto: 'R$ 612,00'},
          {idade: '39 a 43', enf: 'R$ 543,00', apto: 'R$ 760,00'},
          {idade: '44 a 48', enf: 'R$ 698,00', apto: 'R$ 977,00'},
          {idade: '49 a 53', enf: 'R$ 935,00', apto: 'R$ 1.309,00'},
          {idade: '54 a 58', enf: 'R$ 1.229,00', apto: 'R$ 1.720,00'},
          {idade: '59 em diante', enf: 'R$ 1.411,00', apto: 'R$ 1.976,00'},
        ]}
        hospitais={[
          {nome: 'Hospital Israelita Albert Einstein', regiao: 'São Paulo — Morumbi', desc: 'Disponível nas linhas Top Nacional e Premium. Referência global em medicina de alta complexidade.'},
          {nome: 'Hospital Sírio-Libanês', regiao: 'São Paulo — Bela Vista', desc: 'Acesso nas linhas superiores do Bradesco. Um dos melhores hospitais da América Latina.'},
          {nome: 'Hospital Alemão Oswaldo Cruz', regiao: 'São Paulo — Bela Vista', desc: 'Disponível a partir da linha Nacional Plus. Referência em cardiologia e oncologia.'},
          {nome: 'Hospital Assunção / IFOR', regiao: 'São Bernardo do Campo', desc: 'Hospitais credenciados Bradesco no ABC. Cobertura para PMEs da região do Grande ABC.'},
          {nome: 'Fleury Medicina e Saúde', regiao: 'SP, Campinas, SBC, Santo André', desc: 'Rede Fleury credenciada Bradesco nas linhas Nacional Plus e superiores em todo o estado.'},
        ]}
        depoimento={{
          inicial: "F",
          nome: "Felipe",
          local: "São Paulo, SP",
          texto: "Abri MEI justamente para ter acesso ao Bradesco. O Rodrigo me orientou sobre qual linha escolher e ainda consegui incluir minha esposa. Valeu muito."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Bradesco Saúde não vende plano individual — e isso é uma vantagem para empresas</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              O Bradesco Saúde comercializa exclusivamente planos coletivos — empresariais (com CNPJ) e por adesão (via entidade de classe). Não existe plano individual Bradesco para CPF avulso. Isso significa que, para acessar a rede Bradesco, você precisa de um CNPJ ativo há pelo menos 6 meses (MEI conta) ou de filiação a uma entidade de classe.
            </p>
            <p className="mb-4">
              A estratégia de atuar somente no segmento B2B permite ao Bradesco manter redes premium com hospitais como Einstein, Sírio e Fleury — que seriam inviáveis de sustentar num portfólio individual. Por isso os planos Bradesco são considerados referência em qualidade de rede no mercado paulistano.
            </p>
            <p className="mb-4">
              As 5 linhas do Bradesco seguem uma progressão clara: <strong>Efetivo</strong> (rede regional, entrada), <strong>Nacional</strong> (cobertura nacional), <strong>Nacional Plus</strong> (Fleury + hospitais premium), <strong>Top Nacional</strong> (Einstein, Sírio e Samaritano, o mais vendido PME), e <strong>Premium</strong> (Concierge, salas VIP, reembolso no exterior).
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano Bradesco Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "MEI pode contratar plano Bradesco Saúde?", resposta: "Sim. MEI com CNPJ ativo há pelo menos 6 meses pode contratar plano Bradesco empresarial. É possível incluir o titular (sócio) e seus dependentes desde a contratação. É uma das formas mais inteligentes de um autônomo ter acesso à rede Bradesco com valores de PME — até 35% mais baratos que a modalidade adesão." },
        { pergunta: "Qual a diferença entre Efetivo e Top Nacional no Bradesco?", resposta: "O Efetivo opera com rede regional selecionada — ótima qualidade, mas sem os grandes hospitais premium. É a porta de entrada ideal para pequenas empresas. O Top Nacional é o mais vendido: cobertura nacional, Hospital Albert Einstein, Sírio-Libanês, Samaritano e Fleury incluídos. Para quem usa o plano como diferencial de atração de talentos, o Top Nacional é o padrão do mercado." },
        { pergunta: "Bradesco Saúde tem plano de adesão?", resposta: "Sim. A modalidade adesão Bradesco é viabilizada por filiação a entidades de classe — sindicatos patronais, conselhos profissionais (OAB, CREA, CRM, CRO) e associações comerciais. Os preços costumam ser um pouco acima da tabela PME, mas permitem acesso sem CNPJ. Consulte-nos para verificar quais entidades estão habilitadas para sua categoria." },
        { pergunta: "O Bradesco cobre o Hospital Fleury?", resposta: "Sim, nas linhas Nacional Plus, Top Nacional e Premium. O Fleury está credenciado em São Paulo, Campinas, São Bernardo do Campo, Santo André, Santos e outras cidades do estado de SP. Nas linhas Efetivo e Nacional básico, o Fleury geralmente não está incluído." },
        { pergunta: "Bradesco Saúde funciona fora de São Paulo?", resposta: "Sim. As linhas Nacional, Nacional Plus, Top Nacional e Premium têm cobertura em todo o Brasil — acesso a hospitais credenciados em mais de 1.300 municípios. A linha Efetivo tem rede mais regional, concentrada no estado de contratação." },
      ]} />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Bradesco Saúde por cidade</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/bradesco-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> ·
            <a href="/bradesco-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> ·
            <a href="/bradesco-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> ·
            <a href="/bradesco-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Hapvida</a> ·
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> ·
            <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> ·
            <a href="/alice" className="text-[#0d1f3c] font-black hover:underline">Alice</a> ·
            <a href="/porto" className="text-[#0d1f3c] font-black hover:underline">Porto Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano Bradesco Saúde" />
    </>
  );
};

export default BradescosaudePage;
