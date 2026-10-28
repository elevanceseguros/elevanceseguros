import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const AmilRibeiraoPretoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Amil Fácil S80 inclui Ribeirão Preto e mais de 110 municípios paulistas",
    "Planos nacionais (Prata, Ouro, Platinum) com acesso a toda a rede credenciada SP",
    "MEI aceito a partir de 2 vidas com CNPJ ativo há 6 meses",
    "Amil Dental incluso por 12 meses nos planos empresariais",
    "Telemedicina 24h com profissionais especializados",
    "Portabilidade disponível para quem já tem outro plano há mais de 12 meses",
  ];

  return (
    <>
      <Helmet>
        <title>Plano Amil em Ribeirão Preto | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Amil em Ribeirão Preto: Amil Fácil S80 com cobertura regional, planos nacionais Prata, Ouro e Platinum. MEI aceito. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Amil Ribeirão Preto, plano de saúde Ribeirão Preto, cotação Amil interior paulista, Amil Fácil" />
        <link rel="canonical" href="https://www.elevanceseguros.com/amil-ribeirao-preto" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Amil", "item": "https://www.elevanceseguros.com/amil"},
            {"@type": "ListItem", "position": 3, "name": "Ribeirão Preto", "item": "https://www.elevanceseguros.com/amil-ribeirao-preto"}
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
                <MapPin className="w-4 h-4" /> Cobertura Nacional · Ribeirão Preto
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Amil em <span className="text-[#0d1f3c]">Ribeirão Preto</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Amil em Ribeirão Preto oferece acesso aos melhores consultórios, clínicas, laboratórios e hospitais da cidade, com telemedicina 24h, descontos em medicamentos e cobertura nacional.
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
              <OperatorQuoteForm operatorName="Amil Ribeirão Preto" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Amil Ribeirão Preto"
        cor="#4338ca"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 178,50', apto: 'R$ 245,90'},
          {idade: '19 a 23', enf: 'R$ 205,30', apto: 'R$ 282,40'},
          {idade: '24 a 28', enf: 'R$ 238,70', apto: 'R$ 329,80'}
        ]}
        hospitais={[
          {nome: 'Rede credenciada Ribeirão Preto', regiao: 'Ribeirão Preto', desc: 'Hospitais, clínicas, laboratórios e consultórios credenciados Amil na cidade.'},
          {nome: 'Amil Ligue Saúde', regiao: 'Ribeirão Preto', desc: 'Telemedicina 24h, 7 dias por semana, para esclarecer dúvidas de saúde.'},
          {nome: 'Amil Espaço Saúde', regiao: 'Ribeirão Preto e região', desc: 'Unidades exclusivas com apoio do médico de família para clientes Amil, com cuidado dos médicos do Einstein.'},
          {nome: 'Cobertura nacional', regiao: 'Todo o Brasil', desc: 'Acesso à rede credenciada Amil em mais de 1.700 hospitais no país, incluindo cobertura para viagens internacionais.'}
        ]}
        depoimento={{
          inicial: "V",
          nome: "Vanessa",
          local: "Ribeirão Preto, SP",
          texto: "Achei a Elevance pelo Instagram e fechei a Amil. Gostei da cobertura nacional e dos descontos em farmácia, que uso bastante."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Amil em Ribeirão Preto: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Amil em Ribeirão Preto oferece acesso aos <strong>melhores consultórios, clínicas, laboratórios e hospitais</strong> da cidade, com a flexibilidade de escolher o médico de preferência e ser reembolsado, dependendo do plano contratado.</p>
            <p className="mb-4">
              Os clientes contam com o <strong>Amil Ligue Saúde</strong> (telemedicina 24h, 7 dias por semana) e o <strong>Amil Espaço Saúde</strong>, com apoio do médico de família e cuidado dos médicos do <strong>Einstein</strong>. Há ainda <strong>descontos de até 35%</strong> em medicamentos nas Drogarias São Paulo e Pacheco.
            </p>
            <p className="mb-4">
              A <strong>cobertura nacional</strong> garante atendimento em outras cidades e durante viagens, com coberturas especiais para viagens internacionais. Na Elevance Seguros, nosso corretor especializado calcula a melhor categoria de plano Amil para você e sua família em Ribeirão Preto.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de Ribeirão Preto e quero cotar um plano Amil"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "A Amil tem boa rede credenciada em Ribeirão Preto?", resposta: "Sim, a Amil oferece ampla rede credenciada de hospitais, laboratórios e clínicas em Ribeirão Preto, além de cobertura nacional." },
        { pergunta: "A Amil em Ribeirão Preto dá desconto em farmácia?", resposta: "Sim, clientes Amil têm descontos de até 35% em medicamentos nas Drogarias São Paulo e Pacheco." },
        { pergunta: "O que é o Amil Espaço Saúde?", resposta: "São unidades exclusivas para clientes Amil com apoio do médico de família e cuidado dos médicos do Einstein, oferecendo atendimento no momento e local que o cliente precisa." },
        { pergunta: "A Amil em Ribeirão Preto tem cobertura para viagens internacionais?", resposta: "Sim, a Amil oferece coberturas especiais para viagens internacionais, conforme o plano contratado." },
        { pergunta: "Qual a carência para internação na Amil?", resposta: "As carências seguem o padrão regulatório da ANS — normalmente 180 dias para internações e 300 dias para partos. Consulte a Elevance Seguros para confirmar as condições vigentes do plano escolhido." }
      ]} />


      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Amil em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/amil-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/amil-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/amil-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · <a href="/hapvida-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Hapvida Ribeirão Preto</a> · <a href="/bradescosaude-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Bradesco Ribeirão Preto</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Amil em Ribeirão Preto" />
    </>
  );
};

export default AmilRibeiraoPretoPage;
