import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const BradescoCampinasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Hospital São Luiz Campinas acessível nos planos Nacional Plus e superiores",
    "Laboratório Fleury credenciado em Campinas nas linhas premium",
    "Mais de 190 hospitais credenciados no estado de SP — maior rede do interior",
    "MEI aceito a partir de 2 vidas com CNPJ ativo há 6 meses",
    "Campinas incluída nas linhas Efetivo Plus, Nacional, Nacional Plus e Premium",
    "Cobertura para área metropolitana: Valinhos, Vinhedo, Hortolândia, Sumaré e Paulínia",
  ];

  return (
    <>
      <Helmet>
        <title>Plano Bradesco Saúde em Campinas | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Bradesco Saúde em Campinas: Hospital São Luiz, Fleury credenciado. Linhas Nacional Plus e Premium disponíveis. MEI aceito. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Bradesco Saúde Campinas, plano de saúde Campinas, Hospital São Luiz Campinas, cotação Bradesco Campinas" />
        <link rel="canonical" href="https://www.elevanceseguros.com/bradescosaude-campinas" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Bradesco Saúde", "item": "https://www.elevanceseguros.com/bradescosaude"},
            {"@type": "ListItem", "position": 3, "name": "Campinas", "item": "https://www.elevanceseguros.com/bradescosaude-campinas"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital, atendemos todo o Brasil." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Bradesco Saúde" />

      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img
          src="/logos/bradescosaude.webp"
          alt="Logo Bradesco Saúde"
          className="max-h-16 w-auto object-contain mx-auto animate-fade-in"
          style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#7f1d1d]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-blue-100 text-green-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Plano Empresarial PME · Campinas
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Bradesco Saúde em <span className="text-[#0d1f3c]">Campinas</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Em Campinas, o Bradesco Saúde dá acesso a um dos polos médicos mais completos do interior paulista: Hospital Vera Cruz, São Luiz Campinas, Beneficência Portuguesa, Madre Theodora e o Centro Infantil Boldrini.
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
              <OperatorQuoteForm operatorName="Bradesco Saúde Campinas" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Bradesco Saúde Campinas"
        cor="#dc2626"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 162,40', apto: 'R$ 228,90'},
          {idade: '19 a 23', enf: 'R$ 189,75', apto: 'R$ 267,30'},
          {idade: '24 a 28', enf: 'R$ 224,10', apto: 'R$ 315,80'}
        ]}
        hospitais={[
          {nome: 'Hospital Vera Cruz', regiao: 'Centro, Campinas', desc: 'Referência em pronto-socorro, na Av. Andrade Neves.'},
          {nome: 'Hospital São Luiz Campinas', regiao: 'Centro, Campinas', desc: 'Estrutura moderna com diversas especialidades médicas.'},
          {nome: 'Hospital Madre Theodora', regiao: 'Parque das Universidades, Campinas', desc: 'Foco em maternidade e alta complexidade.'},
          {nome: 'Beneficência Portuguesa e Boldrini', regiao: 'Campinas', desc: 'Instituição tradicional na região central e centro de referência em oncologia pediátrica.'}
        ]}
        depoimento={{
          inicial: "L",
          nome: "Luciana",
          local: "Campinas, SP",
          texto: "Tenho uma empresa pequena e fechei o plano Bradesco PME pela Elevance. O Rodrigo montou a proposta certinha, com os hospitais que eu queria de cobertura aqui em Campinas."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Bradesco em Campinas: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">O Bradesco Saúde tem a <strong>maior rede credenciada do país</strong>, e em Campinas isso se traduz em acesso a alguns dos principais hospitais da região: <strong>Hospital Vera Cruz</strong> (referência em pronto-socorro no Centro), <strong>Hospital São Luiz Campinas</strong>, <strong>Beneficência Portuguesa</strong> e o <strong>Hospital Madre Theodora</strong>, no Parque das Universidades, voltado a maternidade e alta complexidade.</p>
            <p className="mb-4">
              Para famílias com crianças, vale destacar o <strong>Centro Infantil Boldrini</strong>, referência nacional em oncologia pediátrica, também presente na rede credenciada conforme o plano contratado.
            </p>
            <p className="mb-4">
              O Bradesco Saúde é comercializado na modalidade PME (a partir de 3 vidas) ou por adesão via entidades de classe. Na Elevance Seguros, calculamos a melhor opção para sua empresa ou categoria profissional em Campinas, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de Campinas e quero cotar um plano Bradesco Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "O plano Bradesco Saúde em Campinas dá acesso ao Hospital Vera Cruz?", resposta: "Sim, o Hospital Vera Cruz, referência em pronto-socorro no Centro de Campinas, faz parte da rede credenciada Bradesco Saúde, conforme a categoria do plano contratado (Nacional, Nacional Plus ou Top Nacional)." },
        { pergunta: "O Bradesco Saúde em Campinas é só para empresas?", resposta: "A Bradesco Saúde não comercializa plano individual/familiar diretamente. O acesso se dá via plano PME (empresarial, a partir de 3 vidas) ou por adesão a entidades de classe. A Elevance Seguros ajuda a encontrar a melhor via para o seu caso." },
        { pergunta: "Tem cobertura para maternidade em Campinas?", resposta: "Sim, o Hospital Madre Theodora, no Parque das Universidades, é uma das referências em maternidade e alta complexidade na rede credenciada Bradesco em Campinas." },
        { pergunta: "Crianças com câncer têm acesso ao Boldrini pelo plano?", resposta: "O Centro Infantil Boldrini, referência nacional em oncologia pediátrica, pode constar na rede credenciada conforme o plano contratado. Consulte a Elevance Seguros para confirmar a cobertura específica." },
        { pergunta: "Qual a carência para internação no Bradesco Saúde?", resposta: "As carências seguem o padrão regulatório da ANS — normalmente 180 dias para internações e 300 dias para partos. Consulte a Elevance Seguros para confirmar as condições vigentes do plano escolhido." }
      ]} />


      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Bradesco Saúde em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/bradescosaude-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/bradescosaude-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a> · <a href="/bradescosaude-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/hapvida-campinas" className="text-[#0d1f3c] font-black hover:underline">Hapvida Campinas</a> · <a href="/medsenior-campinas" className="text-[#0d1f3c] font-black hover:underline">MedSênior Campinas</a> · <a href="/amil-campinas" className="text-[#0d1f3c] font-black hover:underline">Amil Campinas</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Bradesco em Campinas" />
    </>
  );
};

export default BradescoCampinasPage;
