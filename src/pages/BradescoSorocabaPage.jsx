import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const BradescoSorocabaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Rede credenciada ampla em Sorocaba nas linhas Efetivo Plus e Nacional",
    "Mais de 190 hospitais credenciados em SP — cobertura estende-se à região metropolitana",
    "MEI e PME aceitos a partir de 2 vidas com CNPJ ativo há 6 meses",
    "Linhas Nacional e Nacional Plus disponíveis com cobertura nacional completa",
    "Cobertura para urgência em todo o Brasil independente da linha contratada",
    "Gestão corporativa do plano via portal Bradesco Saúde para empresas",
  ];

  return (
    <>
      <Helmet>
        <title>Plano Bradesco Saúde em Sorocaba | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Bradesco Saúde em Sorocaba: rede credenciada premium, linhas Nacional e Nacional Plus. MEI aceito. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Bradesco Saúde Sorocaba, plano de saúde Sorocaba, cotação Bradesco Sorocaba, PME Sorocaba" />
        <link rel="canonical" href="https://www.elevanceseguros.com/bradescosaude-sorocaba" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Bradesco Saúde", "item": "https://www.elevanceseguros.com/bradescosaude"},
            {"@type": "ListItem", "position": 3, "name": "Sorocaba", "item": "https://www.elevanceseguros.com/bradescosaude-sorocaba"}
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
                <MapPin className="w-4 h-4" /> Plano Empresarial PME · Sorocaba
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Bradesco Saúde em <span className="text-[#0d1f3c]">Sorocaba</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Em Sorocaba, o Bradesco Saúde dá acesso ao Hospital e Maternidade Samaritano Sorocaba e à Fundação Santa Casa, garantindo cobertura de pronto-socorro, internação e maternidade na cidade.
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
              <OperatorQuoteForm operatorName="Bradesco Saúde Sorocaba" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Bradesco Saúde Sorocaba"
        cor="#dc2626"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 162,40', apto: 'R$ 228,90'},
          {idade: '19 a 23', enf: 'R$ 189,75', apto: 'R$ 267,30'},
          {idade: '24 a 28', enf: 'R$ 224,10', apto: 'R$ 315,80'}
        ]}
        hospitais={[
          {nome: 'Hospital e Maternidade Samaritano Sorocaba', regiao: 'Sorocaba', desc: 'Atendimento de pronto-socorro, internação e maternidade.'},
          {nome: 'Fundação Santa Casa / Hospital Santa Lucinda', regiao: 'Sorocaba', desc: 'Internação, maternidade e pronto-socorro, tradicional na cidade.'},
          {nome: 'Cobertura ambulatorial', regiao: 'Sorocaba e região', desc: 'Clínicas e laboratórios credenciados distribuídos pela cidade.'},
          {nome: 'Cobertura regional', regiao: 'Região Metropolitana de Sorocaba', desc: 'Acesso à rede credenciada também em cidades vizinhas da RMS.'}
        ]}
        depoimento={{
          inicial: "A",
          nome: "André",
          local: "Sorocaba, SP",
          texto: "Empresa pequena, mas conseguimos um plano Bradesco com boa rede aqui em Sorocaba pela Elevance. Atendimento todo pelo WhatsApp, bem prático."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Bradesco em Sorocaba: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">O Bradesco Saúde mantém a <strong>maior rede credenciada do país</strong>, e em Sorocaba o destaque é o <strong>Hospital e Maternidade Samaritano Sorocaba</strong>, com atendimento de pronto-socorro, internação e maternidade, além da <strong>Fundação Santa Casa</strong> (Hospital Santa Lucinda), tradicional na cidade.</p>
            <p className="mb-4">
              A cobertura varia conforme a categoria do plano contratado (Efetivo, Flex, Nacional ou Nacional Plus), e a rede credenciada se estende também para cidades da Região Metropolitana de Sorocaba.
            </p>
            <p className="mb-4">
              O Bradesco Saúde é comercializado na modalidade PME (a partir de 3 vidas) ou por adesão via entidades de classe. Na Elevance Seguros, calculamos a melhor opção para sua empresa ou categoria profissional em Sorocaba, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de Sorocaba e quero cotar um plano Bradesco Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "O plano Bradesco Saúde em Sorocaba dá acesso ao Hospital Samaritano?", resposta: "Sim, o Hospital e Maternidade Samaritano Sorocaba faz parte da rede credenciada Bradesco Saúde, conforme a categoria do plano contratado (Nacional, Nacional Plus ou Top Nacional)." },
        { pergunta: "O Bradesco Saúde em Sorocaba é só para empresas?", resposta: "A Bradesco Saúde não comercializa plano individual/familiar diretamente. O acesso se dá via plano PME (empresarial, a partir de 3 vidas) ou por adesão a entidades de classe. A Elevance Seguros ajuda a encontrar a melhor via para o seu caso." },
        { pergunta: "Tem cobertura de maternidade em Sorocaba?", resposta: "Sim, o Hospital e Maternidade Samaritano Sorocaba oferece cobertura de maternidade na rede credenciada Bradesco Saúde." },
        { pergunta: "O plano cobre cidades da região metropolitana de Sorocaba?", resposta: "Sim, a rede credenciada Bradesco Saúde se estende para cidades vizinhas da Região Metropolitana de Sorocaba. Fale com a Elevance Seguros para confirmar a rede disponível na sua cidade específica." },
        { pergunta: "Qual a carência para internação no Bradesco Saúde?", resposta: "As carências seguem o padrão regulatório da ANS — normalmente 180 dias para internações e 300 dias para partos. Consulte a Elevance Seguros para confirmar as condições vigentes do plano escolhido." }
      ]} />


      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Bradesco Saúde em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/bradescosaude-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/bradescosaude-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/bradescosaude-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/hapvida-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Hapvida Sorocaba</a> · <a href="/amil-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Amil Sorocaba</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Bradesco em Sorocaba" />
    </>
  );
};

export default BradescoSorocabaPage;
