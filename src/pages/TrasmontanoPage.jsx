import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const TrasmontanoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "PF e PME disponíveis — contratação por CPF ou CNPJ sem restrição de modalidade",
    "Linhas Smart (SP capital), Mix 300 e Care Litoral (Santos, SP+ABC, litoral paulista)",
    "TrasFarma: farmácia própria com desconto de até 70% em medicamentos para beneficiários",
    "Telemedicina com especialistas + programas de prevenção integrados ao plano",
    "Linha Care para 44+ — opção para quem busca cobertura para a faixa madura sem pagar plano sênior",
    "PME empresarial a partir de R$ 128,44 · PF a partir de R$ 294,88",
  ];
  return (
    <>
      <Helmet>
        <title>Plano Trasmontano Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Trasmontano Saúde SP 2026: PF e PME disponíveis, TrasFarma com 70% de desconto, telemedicina, linha Care 44+. PME a partir de R$ 128,44. Cotação gratuita com a Elevance Seguros." />
        <link rel="canonical" href="https://www.elevanceseguros.com/trasmontano" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Trasmontano", "item": "https://www.elevanceseguros.com/trasmontano"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="Trasmontano" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/trasmontano.png" alt="Logo Trasmontano" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#1e3a5f"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> PF · PME · Linha Sênior 49+
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Plano Trasmontano: <span className="text-yellow-300">tradição regional</span> em saúde com linha Sênior</h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">O Trasmontano Saúde é uma operadora regional paulistana com décadas de tradição no mercado de saúde suplementar. Oferece planos para PF, PME, MEI e linha Sênior para beneficiários a partir de 49 anos, com rede credenciada na Grande SP.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="Trasmontano" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="Trasmontano"
        cor="#1e3a5f"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "39 a 43", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "49 a 53 (Sênior)", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59 em diante", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Rede credenciada Trasmontano — Grande SP", "regiao": "São Paulo e Grande SP", "desc": "Hospitais e clínicas credenciados Trasmontano na capital paulista e região metropolitana."}]}
        depoimento={{ inicial: "E", nome: "Eduardo", local: "São Paulo, SP", texto: "Conheço o Trasmontano há anos pela família. O Rodrigo me ajudou a migrar para o plano certo e o processo foi rápido." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Trasmontano Sênior: plano especializado para a terceira idade em SP</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A linha Trasmontano Sênior é desenvolvida especificamente para beneficiários a partir de 49 anos, sem cobertura obstétrica. É uma das operadoras com maior tradição nesse segmento em São Paulo, com décadas de experiência no atendimento da terceira idade.</p>
            <p className="mb-4">Para quem valoriza uma operadora com histórico sólido no mercado paulistano e boa relação custo-benefício, o Trasmontano é uma escolha confiável — especialmente para a faixa sênior.</p>
            <p>Para cotação com valores por faixa etária, entre em contato pelo WhatsApp com seu perfil (idade, modalidade, número de beneficiários).</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Trasmontano" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "Trasmontano tem plano para idosos?", resposta: "Sim. A linha Trasmontano Sênior é específica para beneficiários a partir de 49 anos. Não cobre obstetrícia, mas garante cobertura completa para internações, cirurgias, consultas e exames." },
        { pergunta: "Trasmontano atende na Grande SP?", resposta: "Sim. O Trasmontano é uma operadora regional com rede concentrada em São Paulo capital e Grande SP. Para urgências, há cobertura mais ampla conforme as regras da ANS." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a> · 
            <a href="/biovida" className="text-[#0d1f3c] font-black hover:underline">Biovida</a> · 
            <a href="/unihosp" className="text-[#0d1f3c] font-black hover:underline">UniHosp</a> · 
            <a href="/garantia-saude" className="text-[#0d1f3c] font-black hover:underline">Garantia de Saúde</a> · 
            <a href="/sao-cristovao" className="text-[#0d1f3c] font-black hover:underline">São Cristóvão</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano Trasmontano Saúde" />
    </>
  );
};
export default TrasmontanoPage;
