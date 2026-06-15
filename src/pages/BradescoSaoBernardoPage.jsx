import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const BradescoSaoBernardoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Maior rede credenciada do país, presente no ABC Paulista",
    "Acesso ao Hospital ABC e Hospital São Bernardo",
    "Hospital Itacolomy no Jardim do Mar",
    "Cobertura também em Santo André e cidades vizinhas",
    "Plano empresarial PME a partir de 3 vidas"
  ];

  return (
    <>
      <Helmet>
        <title>Plano Bradesco Saúde em São Bernardo do Campo | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano de saúde Bradesco Saúde PME em São Bernardo do Campo. Rede credenciada com Hospital ABC, Hospital São Bernardo e Hospital Itacolomy. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Bradesco Saúde São Bernardo do Campo, plano de saúde empresarial ABC, Bradesco PME São Bernardo, cotação Bradesco Saúde ABC" />
        <link rel="canonical" href="https://www.elevanceseguros.com/bradescosaude-sao-bernardo-do-campo" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Bradesco Saúde", "item": "https://www.elevanceseguros.com/bradescosaude"},
            {"@type": "ListItem", "position": 3, "name": "São Bernardo do Campo", "item": "https://www.elevanceseguros.com/bradescosaude-sao-bernardo-do-campo"}
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
                <MapPin className="w-4 h-4" /> Plano Empresarial PME · ABC Paulista
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Bradesco Saúde em <span className="text-[#0d1f3c]">São Bernardo do Campo</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                No ABC Paulista, o Bradesco Saúde dá acesso a hospitais de referência como Hospital ABC, Hospital São Bernardo e Hospital Itacolomy, com cobertura que se estende também a Santo André e cidades vizinhas.
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
              <OperatorQuoteForm operatorName="Bradesco Saúde São Bernardo do Campo" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Bradesco Saúde São Bernardo do Campo"
        cor="#dc2626"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 162,40', apto: 'R$ 228,90'},
          {idade: '19 a 23', enf: 'R$ 189,75', apto: 'R$ 267,30'},
          {idade: '24 a 28', enf: 'R$ 224,10', apto: 'R$ 315,80'}
        ]}
        hospitais={[
          {nome: 'Hospital ABC', regiao: 'São Bernardo do Campo', desc: 'Um dos hospitais de referência do ABC Paulista, com atendimento de alta complexidade.'},
          {nome: 'Hospital São Bernardo', regiao: 'São Bernardo do Campo', desc: 'Estrutura hospitalar completa, com pronto-socorro e internação.'},
          {nome: 'Hospital Itacolomy', regiao: 'Jardim do Mar, São Bernardo do Campo', desc: 'Atendimento hospitalar e pronto-socorro no Jardim do Mar.'},
          {nome: 'Rede regional do ABC', regiao: 'Santo André e cidades vizinhas', desc: 'Cobertura estendida para Hospital e Maternidade Brasil, Sociedade Portuguesa de Beneficência e demais unidades da região.'}
        ]}
        depoimento={{
          inicial: "P",
          nome: "Paulo",
          local: "São Bernardo do Campo, SP",
          texto: "Fechei pela Elevance porque o Rodrigo conhecia bem a rede do Bradesco aqui no ABC. Confirmou que o Hospital ABC entra na cobertura antes de eu assinar."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Bradesco em São Bernardo do Campo: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">O Bradesco Saúde mantém a <strong>maior rede credenciada do país</strong>, e no ABC Paulista isso inclui hospitais de peso como o <strong>Hospital ABC</strong>, o <strong>Hospital São Bernardo</strong> e o <strong>Hospital Itacolomy</strong>, no Jardim do Mar.</p>
            <p className="mb-4">
              A cobertura na região também se estende a <strong>Santo André</strong> e cidades vizinhas, com acesso a unidades como Hospital e Maternidade Brasil e Sociedade Portuguesa de Beneficência, conforme a categoria do plano contratado (Efetivo, Flex, Nacional ou Nacional Plus).
            </p>
            <p className="mb-4">
              O Bradesco Saúde é comercializado na modalidade PME (a partir de 3 vidas) ou por adesão via entidades de classe. Na Elevance Seguros, calculamos a melhor opção para sua empresa ou categoria profissional em São Bernardo do Campo, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de São Bernardo do Campo e quero cotar um plano Bradesco Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "O plano Bradesco Saúde em São Bernardo dá acesso ao Hospital ABC?", resposta: "Sim, o Hospital ABC faz parte da rede credenciada Bradesco Saúde, conforme a categoria do plano contratado (Nacional, Nacional Plus ou Top Nacional)." },
        { pergunta: "O Bradesco Saúde em São Bernardo é só para empresas?", resposta: "A Bradesco Saúde não comercializa plano individual/familiar diretamente. O acesso se dá via plano PME (empresarial, a partir de 3 vidas) ou por adesão a entidades de classe. A Elevance Seguros ajuda a encontrar a melhor via para o seu caso." },
        { pergunta: "Quem mora em Santo André pode usar a rede de São Bernardo?", resposta: "Sim, a rede credenciada do Bradesco Saúde no ABC é integrada — moradores de Santo André, São Bernardo, São Caetano e demais cidades da região acessam os hospitais credenciados independente do município de residência." },
        { pergunta: "O Hospital Itacolomy faz parte da rede?", resposta: "Sim, o Hospital Itacolomy, no Jardim do Mar, faz parte da rede credenciada Bradesco Saúde na região do ABC." },
        { pergunta: "Qual a carência para internação no Bradesco Saúde?", resposta: "As carências seguem o padrão regulatório da ANS — normalmente 180 dias para internações e 300 dias para partos. Consulte a Elevance Seguros para confirmar as condições vigentes do plano escolhido." }
      ]} />

      <FloatingWhatsApp />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Bradesco Saúde em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/bradescosaude-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/bradescosaude-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a> · <a href="/bradescosaude-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/hapvida-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">Hapvida São Bernardo</a> · <a href="/medsenior-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">MedSênior São Bernardo</a> · <a href="/amil-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">Amil São Bernardo</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Bradesco em São Bernardo do Campo" />
    </>
  );
};

export default BradescoSaoBernardoPage;
