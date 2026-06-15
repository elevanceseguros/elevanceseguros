import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const BradescoRibeiraoPretoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Maior rede credenciada do país, presente em Ribeirão Preto",
    "Acesso ao Hospital São Lucas e Hospital São Lucas Ribeirânia",
    "Maternidade Sinhá Junqueira na rede credenciada",
    "Cobertura também para Sertãozinho e região",
    "Plano empresarial PME a partir de 3 vidas"
  ];

  return (
    <>
      <Helmet>
        <title>Plano Bradesco Saúde em Ribeirão Preto | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano de saúde Bradesco Saúde PME em Ribeirão Preto. Rede credenciada com Hospital São Lucas, São Lucas Ribeirânia e Maternidade Sinhá Junqueira. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Bradesco Saúde Ribeirão Preto, plano de saúde empresarial Ribeirão Preto, Bradesco PME Ribeirão Preto, cotação Bradesco Saúde Ribeirão Preto" />
        <link rel="canonical" href="https://www.elevanceseguros.com/bradescosaude-ribeirao-preto" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Bradesco Saúde", "item": "https://www.elevanceseguros.com/bradescosaude"},
            {"@type": "ListItem", "position": 3, "name": "Ribeirão Preto", "item": "https://www.elevanceseguros.com/bradescosaude-ribeirao-preto"}
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
                <MapPin className="w-4 h-4" /> Plano Empresarial PME · Ribeirão Preto
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Bradesco Saúde em <span className="text-[#0d1f3c]">Ribeirão Preto</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Em Ribeirão Preto, o Bradesco Saúde dá acesso ao Hospital São Lucas, à unidade São Lucas Ribeirânia e à Maternidade Sinhá Junqueira, com cobertura que se estende também à região, incluindo Sertãozinho.
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
              <OperatorQuoteForm operatorName="Bradesco Saúde Ribeirão Preto" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Bradesco Saúde Ribeirão Preto"
        cor="#dc2626"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 162,40', apto: 'R$ 228,90'},
          {idade: '19 a 23', enf: 'R$ 189,75', apto: 'R$ 267,30'},
          {idade: '24 a 28', enf: 'R$ 224,10', apto: 'R$ 315,80'}
        ]}
        hospitais={[
          {nome: 'Hospital São Lucas', regiao: 'Ribeirão Preto', desc: 'Ambulatório, internação e pronto-socorro, um dos hospitais de referência da rede credenciada na cidade.'},
          {nome: 'Hospital São Lucas Ribeirânia', regiao: 'Ribeirânia, Ribeirão Preto', desc: 'Unidade hospitalar e maternidade na região da Ribeirânia.'},
          {nome: 'Maternidade Sinhá Junqueira', regiao: 'Ribeirão Preto', desc: 'Referência em obstetrícia, parte da rede credenciada conforme o plano contratado.'},
          {nome: 'Cobertura regional', regiao: 'Sertãozinho e região', desc: 'Acesso ao Hospital São Francisco de Sertãozinho e demais unidades da rede credenciada na região.'}
        ]}
        depoimento={{
          inicial: "J",
          nome: "João",
          local: "Ribeirão Preto, SP",
          texto: "Pesquisei várias corretoras e fechei com a Elevance pelo atendimento direto pelo WhatsApp. O Rodrigo confirmou a rede do Bradesco aqui em Ribeirão antes de eu decidir."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Bradesco em Ribeirão Preto: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">O Bradesco Saúde mantém a <strong>maior rede credenciada do país</strong>, e em Ribeirão Preto isso inclui o <strong>Hospital São Lucas</strong>, a unidade <strong>São Lucas Ribeirânia</strong> e a <strong>Maternidade Sinhá Junqueira</strong>, referência em obstetrícia na cidade.</p>
            <p className="mb-4">
              A cobertura na região também se estende para <strong>Sertãozinho</strong>, com acesso ao Hospital São Francisco local e demais unidades da rede credenciada, conforme a categoria do plano contratado (Efetivo, Flex, Nacional ou Nacional Plus).
            </p>
            <p className="mb-4">
              O Bradesco Saúde é comercializado na modalidade PME (a partir de 3 vidas) ou por adesão via entidades de classe. Na Elevance Seguros, calculamos a melhor opção para sua empresa ou categoria profissional em Ribeirão Preto, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de Ribeirão Preto e quero cotar um plano Bradesco Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "O plano Bradesco Saúde em Ribeirão Preto dá acesso ao Hospital São Lucas?", resposta: "Sim, o Hospital São Lucas e a unidade São Lucas Ribeirânia fazem parte da rede credenciada Bradesco Saúde, conforme a categoria do plano contratado (Nacional, Nacional Plus ou Top Nacional)." },
        { pergunta: "O Bradesco Saúde em Ribeirão Preto é só para empresas?", resposta: "A Bradesco Saúde não comercializa plano individual/familiar diretamente. O acesso se dá via plano PME (empresarial, a partir de 3 vidas) ou por adesão a entidades de classe. A Elevance Seguros ajuda a encontrar a melhor via para o seu caso." },
        { pergunta: "Tem cobertura de maternidade em Ribeirão Preto?", resposta: "Sim, a Maternidade Sinhá Junqueira, referência em obstetrícia na cidade, pode constar na rede credenciada Bradesco Saúde conforme o plano contratado." },
        { pergunta: "O plano cobre Sertãozinho e cidades próximas?", resposta: "Sim, a rede credenciada Bradesco Saúde se estende para Sertãozinho e demais cidades da região de Ribeirão Preto. Fale com a Elevance Seguros para confirmar a rede disponível na sua cidade específica." },
        { pergunta: "Qual a carência para internação no Bradesco Saúde?", resposta: "As carências seguem o padrão regulatório da ANS — normalmente 180 dias para internações e 300 dias para partos. Consulte a Elevance Seguros para confirmar as condições vigentes do plano escolhido." }
      ]} />

      <FloatingWhatsApp />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Bradesco Saúde em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/bradescosaude-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/bradescosaude-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/bradescosaude-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/hapvida-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Hapvida Ribeirão Preto</a> · <a href="/amil-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Amil Ribeirão Preto</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Bradesco em Ribeirão Preto" />
    </>
  );
};

export default BradescoRibeiraoPretoPage;
