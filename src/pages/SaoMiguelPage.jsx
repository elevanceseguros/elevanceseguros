import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const SaoMiguelPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "Operadora regional com foco em São Paulo e Grande SP — tradição no atendimento local",
    "PF e PME disponíveis — acesso direto sem necessidade de CNPJ para pessoa física",
    "Rede credenciada com hospitais, clínicas e laboratórios selecionados na capital e região",
    "Custo-benefício regional competitivo — ideal para quem vive e trabalha em SP",
    "Cobertura para urgência e emergência conforme regulamentação ANS",
    "Planos com ou sem coparticipação — flexibilidade para ajustar o valor da mensalidade",
  ];
  return (
    <>
      <Helmet>
        <title>Plano São Miguel Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano São Miguel Saúde SP 2026: operadora regional com PF e PME. Rede credenciada em SP e Grande SP. Custo-benefício competitivo. Cotação gratuita com a Elevance Seguros." />
        <link rel="canonical" href="https://www.elevanceseguros.com/sao-miguel" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "São Miguel", "item": "https://www.elevanceseguros.com/sao-miguel"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="São Miguel" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/preview.webp" alt="Logo São Miguel" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#0f4c75"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> PF · PME · MEI · Linha Sênior
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Plano São Miguel Saúde: <span className="text-yellow-300">opção regional</span> com custo-benefício competitivo em SP</h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">A São Miguel Saúde é uma operadora regional paulistana com planos para PF, PME e MEI e linha Sênior. Oferece cobertura de qualidade na Grande SP com mensalidades mais acessíveis do que as grandes operadoras nacionais.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="São Miguel" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="São Miguel"
        cor="#0f4c75"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "39 a 43", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "49 a 53 (Sênior)", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59 em diante", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Rede credenciada São Miguel", "regiao": "São Paulo e Grande SP", "desc": "Hospitais e clínicas credenciados na capital paulista e região metropolitana de São Paulo."}]}
        depoimento={{ inicial: "B", nome: "Bruno", local: "São Paulo, SP", texto: "Precisava de um plano acessível para minha mãe de 67 anos. O Rodrigo me apresentou o São Miguel Sênior e o custo ficou dentro do esperado." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">São Miguel Saúde: cobertura regional com foco no custo-benefício</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A São Miguel Saúde é uma operadora regional com décadas de presença no mercado paulistano. Para quem vive na Grande SP e prioriza custo-benefício sobre a amplitude da rede, é uma escolha sólida.</p>
            <p className="mb-4">A linha Sênior é voltada para beneficiários a partir de 49 anos, sem obstetrícia, com cobertura para as principais necessidades de saúde da terceira idade.</p>
            <p>Para cotação com valores exatos, entre em contato pelo WhatsApp com seu perfil completo (idade, modalidade, número de beneficiários, cidade).</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20S%C3%A3o%20Miguel" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "São Miguel Saúde tem plano individual?", resposta: "Sim. A São Miguel Saúde oferece planos individuais e familiares para PF, além de PME e linha Sênior." },
        { pergunta: "São Miguel tem boa cobertura em SP?", resposta: "Sim. A São Miguel é uma operadora regional com rede credenciada na capital paulista e Grande SP. Para atendimentos de rotina e urgência na região metropolitana, tem boa cobertura." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/trasmontano" className="text-[#0d1f3c] font-black hover:underline">Trasmontano</a> · 
            <a href="/biovida" className="text-[#0d1f3c] font-black hover:underline">Biovida</a> · 
            <a href="/sao-cristovao" className="text-[#0d1f3c] font-black hover:underline">São Cristóvão</a> · 
            <a href="/unihosp" className="text-[#0d1f3c] font-black hover:underline">UniHosp</a> · 
            <a href="/garantia-saude" className="text-[#0d1f3c] font-black hover:underline">Garantia de Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano São Miguel Saúde" />
    </>
  );
};
export default SaoMiguelPage;
