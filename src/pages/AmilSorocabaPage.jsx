import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const AmilSorocabaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Cobertura nacional com rede credenciada em Sorocaba",
    "Atendimento também em Votorantim e região metropolitana",
    "Telemedicina 24h com Amil Ligue Saúde",
    "Amil Espaço Saúde com apoio do médico de família",
    "Opção de reembolso para consultas e exames"
  ];

  return (
    <>
      <Helmet>
        <title>Plano Amil em Sorocaba | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano de saúde Amil em Sorocaba. Rede credenciada com cobertura nacional, atendimento na região metropolitana e telemedicina 24h. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Amil Sorocaba, plano de saúde Amil Sorocaba, cotação Amil Sorocaba, convênio Amil Sorocaba" />
        <link rel="canonical" href="https://www.elevanceseguros.com/amil-sorocaba" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Amil", "item": "https://www.elevanceseguros.com/amil"},
            {"@type": "ListItem", "position": 3, "name": "Sorocaba", "item": "https://www.elevanceseguros.com/amil-sorocaba"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital, atendemos todo o Brasil." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Amil" />

      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img
          src="/logos/amil.webp"
          alt="Logo Amil"
          className="max-h-16 w-auto object-contain mx-auto animate-fade-in"
          style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#312e81]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-blue-100 text-green-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Cobertura Nacional · Sorocaba
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Amil em <span className="text-[#0d1f3c]">Sorocaba</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Amil em Sorocaba oferece rede credenciada com cobertura na cidade e região metropolitana, incluindo Votorantim, além de telemedicina 24h e abrangência nacional.
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
              <OperatorQuoteForm operatorName="Amil Sorocaba" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Amil Sorocaba"
        cor="#4338ca"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 178,50', apto: 'R$ 245,90'},
          {idade: '19 a 23', enf: 'R$ 205,30', apto: 'R$ 282,40'},
          {idade: '24 a 28', enf: 'R$ 238,70', apto: 'R$ 329,80'}
        ]}
        hospitais={[
          {nome: 'Rede credenciada Sorocaba', regiao: 'Sorocaba', desc: 'Hospitais, clínicas e laboratórios credenciados Amil na cidade.'},
          {nome: 'Cobertura metropolitana', regiao: 'Votorantim e região', desc: 'Rede credenciada estendida para cidades vizinhas da região metropolitana de Sorocaba.'},
          {nome: 'Amil Espaço Saúde', regiao: 'Grande São Paulo', desc: 'Unidades exclusivas com apoio do médico de família para clientes Amil.'},
          {nome: 'Cobertura nacional', regiao: 'Todo o Brasil', desc: 'Acesso à rede credenciada Amil em mais de 1.700 hospitais no país, incluindo cobertura para viagens.'}
        ]}
        depoimento={{
          inicial: "M",
          nome: "Marcos",
          local: "Sorocaba, SP",
          texto: "Pesquisei algumas opções e fechei a Amil pela Elevance. O Rodrigo explicou a rede aqui em Sorocaba e a cobertura nacional, que era importante pra mim."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Amil em Sorocaba: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Amil mantém rede credenciada em <strong>Sorocaba</strong> e na região metropolitana, incluindo <strong>Votorantim</strong> e cidades vizinhas, com hospitais, clínicas, laboratórios e consultórios.</p>
            <p className="mb-4">
              Os clientes contam com o <strong>Amil Ligue Saúde</strong> (telemedicina 24h) e o <strong>Amil Espaço Saúde</strong>, com apoio do médico de família. A <strong>cobertura nacional</strong> garante atendimento também em outras cidades e durante viagens, com mais de 1.700 hospitais credenciados no Brasil.
            </p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e calcula a melhor categoria de plano Amil para você e sua família em Sorocaba, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de Sorocaba e quero cotar um plano Amil"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "A Amil atende Sorocaba e a região metropolitana?", resposta: "Sim, a Amil tem rede credenciada em Sorocaba e em cidades da região metropolitana, como Votorantim." },
        { pergunta: "A Amil em Sorocaba tem cobertura para viagens?", resposta: "Sim, a Amil oferece cobertura nacional e coberturas especiais para viagens internacionais, conforme o plano contratado." },
        { pergunta: "O que é o Amil Espaço Saúde?", resposta: "São unidades exclusivas para clientes Amil com apoio do médico de família, oferecendo cuidado médico no momento e local que o cliente precisa." },
        { pergunta: "A Amil em Sorocaba tem opção de reembolso?", resposta: "Sim, dependendo do plano contratado, a Amil oferece opção de reembolso para consultas e exames realizados fora da rede credenciada." },
        { pergunta: "Qual a carência para internação na Amil?", resposta: "As carências seguem o padrão regulatório da ANS — normalmente 180 dias para internações e 300 dias para partos. Consulte a Elevance Seguros para confirmar as condições vigentes do plano escolhido." }
      ]} />

      <FloatingWhatsApp />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Amil em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/amil-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/amil-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/amil-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · <a href="/hapvida-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Hapvida Sorocaba</a> · <a href="/bradescosaude-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Bradesco Sorocaba</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Amil em Sorocaba" />
    </>
  );
};

export default AmilSorocabaPage;
