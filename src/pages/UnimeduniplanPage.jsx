import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const UnimeduniplanPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "Cooperativa médica com tradição e foco em qualidade de atendimento regional",
    "Rede credenciada com médicos cooperados — atendimento humanizado e continuado",
    "Planos individual, familiar e empresarial disponíveis conforme a regional",
    "Reembolso disponível para consultas fora da rede em planos superiores",
    "PME e MEI aceitos conforme as regras da regional atendida",
    "Cobertura para urgência e emergência em todo o sistema Unimed nacional",
  ];
  return (
    <>
      <Helmet>
        <title>Plano Unimed | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Unimed SP 2026: cooperativa médica com atendimento humanizado, planos individual, familiar e empresarial. Cotação gratuita com a Elevance Seguros." />
        <link rel="canonical" href="https://www.elevanceseguros.com/unimed" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Unimed", "item": "https://www.elevanceseguros.com/unimed"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="Unimed" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/unimed.png" alt="Logo Unimed" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#009966"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Cooperativa Médica · Rede Nacional
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Plano Unimed: <span className="text-yellow-300">cooperativa médica</span> com presença em todo o Brasil</h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">A Unimed é o maior sistema cooperativo de saúde do mundo, com presença em mais de 380 municípios brasileiros. Médicos proprietários e gestores garantem um modelo de atendimento humanizado e com foco na qualidade assistencial.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="Unimed" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="Unimed"
        cor="#009966"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "19 a 23", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "39 a 43", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "49 a 53", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59 em diante", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Hospitais Unimed credenciados SP", "regiao": "São Paulo e interior", "desc": "A Unimed opera com rede de hospitais próprios e credenciados em toda a Grande SP e interior paulista."},
          {"nome": "Unimed SP — hospitais cooperados", "regiao": "São Paulo capital", "desc": "Hospitais próprios da Unimed São Paulo com foco em qualidade assistencial e humanização."}]}
        depoimento={{ inicial: "S", nome: "Sandra", local: "São Paulo, SP", texto: "Sempre quis ter plano Unimed pela reputação. O Rodrigo me ajudou a encontrar a linha certa para o meu perfil e o processo foi todo digital." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Por que a Unimed tem essa reputação no mercado?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Unimed é uma cooperativa: os médicos são os proprietários e gestores do sistema. Isso cria um alinhamento de interesses único — o médico que atende você tem interesse direto na qualidade do serviço, porque é ele quem responde pela operação.</p>
            <p className="mb-4">No Brasil, existem várias cooperativas Unimed (Unimed SP, Unimed Nacional, Unimed Fesp, entre outras), cada uma com sua própria rede e tabela de preços. A Elevance trabalha com as Unimeds disponíveis para contratação via PME, MEI e adesão na região de São Paulo.</p>
            <p>O reembolso por livre escolha é um dos diferenciais mais valorizados nos planos Unimed superiores — permite consultar qualquer médico credenciado pelo CRM, dentro ou fora da rede, com reembolso até o teto da tabela Unimed.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Unimed" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "Qual Unimed atende em São Paulo?", resposta: "Em São Paulo operam principalmente a Unimed SP (capital e Grande SP), Unimed Fesp e outras cooperativas regionais do interior. Os planos e redes variam por cooperativa. Entre em contato para verificar qual está disponível para o seu CEP." },
        { pergunta: "Unimed tem plano individual?", resposta: "Algumas cooperativas Unimed ainda oferecem planos individuais, mas em 2024 várias suspenderam as vendas para reformulação. A forma mais acessível é via PME/MEI ou adesão por entidade de classe." },
        { pergunta: "Unimed aceita MEI?", resposta: "Sim. A maioria das cooperativas Unimed aceita MEI com CNPJ ativo há pelo menos 6 meses. Entre em contato para verificar condições da cooperativa disponível na sua região." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
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
      <ScrollCTA produto="Plano Unimed" />
    </>
  );
};
export default UnimeduniplanPage;
