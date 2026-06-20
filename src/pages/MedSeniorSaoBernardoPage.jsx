import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const MedSeniorSaoBernardoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Plano sem coparticipação — ideal para aposentados e pensionistas do ABCD Paulista",
    "Exclusivo para 49+ com rede credenciada preparada para alta complexidade geriátrica",
    "Central de Inteligência: enfermeiro gestor + videochamada disponíveis em São Bernardo",
    "PA Virtual 24h com teleconsulta e emissão de receitas sem deslocamento",
    "Programa Bem Envelhecer com monitoramento de doenças crônicas (hipertensão, diabetes)",
    "PME Corporate: opção para empresas com funcionários ou sócios acima de 49 anos",
  ];

  return (
    <>
      <Helmet>
        <title>Plano MedSênior em São Bernardo | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano MedSênior em São Bernardo do Campo: exclusivo para 49+, sem coparticipação, PA Virtual 24h, Programa Bem Envelhecer. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="MedSênior São Bernardo, plano saúde idoso ABC, plano 49 anos São Bernardo, cotação MedSênior ABCD" />
        <link rel="canonical" href="https://www.elevanceseguros.com/medsenior-sao-bernardo-do-campo" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "MedSênior", "item": "https://www.elevanceseguros.com/medsenior"},
            {"@type": "ListItem", "position": 3, "name": "São Bernardo do Campo", "item": "https://www.elevanceseguros.com/medsenior-sao-bernardo-do-campo"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital, atendemos todo o Brasil." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="MedSênior" />

      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img
          src="/logos/medsenior.webp"
          alt="Logo MedSênior"
          className="max-h-16 w-auto object-contain mx-auto animate-fade-in"
          style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#064e3b]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-blue-100 text-green-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Área de atuação · ABC Paulista
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano MedSênior em <span className="text-[#0d1f3c]">São Bernardo do Campo</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A MedSênior, plano de saúde referência para a terceira idade, atua em São Bernardo do Campo e no ABC Paulista, com acesso ao Hospital São Bernardo na rede credenciada.
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
              <OperatorQuoteForm operatorName="MedSênior São Bernardo do Campo" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="MedSênior São Bernardo do Campo"
        cor="#059669"
        tabela={[
          {idade: '49 a 53', enf: 'R$ 487,20', apto: 'R$ 612,90'},
          {idade: '54 a 58', enf: 'R$ 568,40', apto: 'R$ 715,30'},
          {idade: '59+', enf: 'R$ 689,90', apto: 'R$ 862,50'}
        ]}
        hospitais={[
          {nome: 'Hospital São Bernardo', regiao: 'São Bernardo do Campo', desc: 'Internação hospitalar e pronto-socorro na rede credenciada MedSênior.'},
          {nome: 'Cobertura ambulatorial', regiao: 'São Bernardo do Campo e região', desc: 'Consultas, exames e acompanhamento preventivo conforme a rede credenciada da categoria contratada.'},
          {nome: 'Rede do ABC', regiao: 'Santo André, São Caetano do Sul e região', desc: 'Área de atuação MedSênior cobre todo o ABC Paulista, com cobertura integrada entre as cidades.'},
          {nome: 'Planos por categoria', regiao: 'SP1 a SP4 e Black', desc: 'Diferentes categorias de cobertura ambulatorial e hospitalar, com ou sem coparticipação.'}
        ]}
        depoimento={{
          inicial: "I",
          nome: "Irene",
          local: "São Bernardo do Campo, SP",
          texto: "Minha filha pesquisou tudo pela Elevance e fechamos o MedSênior pra mim. Atendimento focado pra terceira idade faz toda diferença."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde MedSênior em São Bernardo do Campo: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A MedSênior, plano de saúde referência em atendimento à terceira idade, tem <strong>área de atuação confirmada em São Bernardo do Campo</strong> e em todo o ABC Paulista (Santo André, São Caetano do Sul e demais cidades da região).</p>
            <p className="mb-4">
              A rede credenciada local inclui o <strong>Hospital São Bernardo</strong> para internação hospitalar e pronto-socorro, além de cobertura ambulatorial conforme a categoria do plano contratado — que vai do <strong>SP1</strong> ao <strong>Plano Black</strong>, com ou sem coparticipação.
            </p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano MedSênior para você em São Bernardo do Campo, com o melhor custo-benefício do mercado para a melhor idade.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de São Bernardo do Campo e quero cotar um plano MedSênior"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "A MedSênior atende em São Bernardo do Campo?", resposta: "Sim, São Bernardo do Campo está na área de atuação confirmada da MedSênior, junto com outras cidades do ABC Paulista como Santo André e São Caetano do Sul." },
        { pergunta: "O plano MedSênior em São Bernardo dá acesso ao Hospital São Bernardo?", resposta: "Sim, o Hospital São Bernardo faz parte da rede credenciada MedSênior para internação hospitalar e pronto-socorro na região." },
        { pergunta: "A partir de que idade posso contratar a MedSênior?", resposta: "A MedSênior é voltada para a melhor idade, com planos a partir dos 49 anos. Consulte a Elevance Seguros para a faixa etária e categoria de plano ideal para o seu caso." },
        { pergunta: "Quais categorias de plano a MedSênior oferece?", resposta: "A MedSênior oferece categorias de SP1 a SP4 (enfermaria ou apartamento, com ou sem coparticipação) e o Plano Black, mais completo. A Elevance Seguros ajuda a escolher a melhor opção para o seu perfil." },
        { pergunta: "O plano cobre toda a região do ABC Paulista?", resposta: "Sim, a área de atuação MedSênior cobre São Bernardo do Campo, Santo André, São Caetano do Sul e demais cidades do ABC, dependendo da categoria do plano. Consulte a Elevance Seguros para confirmar a cobertura na sua cidade." }
      ]} />


      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">MedSênior em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/medsenior-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a> · <a href="/hapvida-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">Hapvida São Bernardo</a> · <a href="/bradescosaude-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">Bradesco São Bernardo</a> · <a href="/amil-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">Amil São Bernardo</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde MedSênior em São Bernardo do Campo" />
    </>
  );
};

export default MedSeniorSaoBernardoPage;
