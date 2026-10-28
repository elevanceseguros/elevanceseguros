import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const UnihospPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "Atuando desde 1996 com sede em Santo André — tradição e credibilidade no ABC Paulista",
    "PME empresarial a partir de R$ 87,98/mês (0-18 anos) — melhor custo-benefício para jovens",
    "Medicina preventiva integrada: ações de prevenção sem custo adicional para todos os planos",
    "Plano Sênior UniHosp (54+) com atendimento humanizado e desconto em farmácias parceiras",
    "Consultas e exames básicos agendados em até 24h após a contratação",
    "Rede credenciada abrangente em diversas regiões de SP com hospitais e clínicas de ponta",
  ];
  return (
    <>
      <Helmet>
        <title>Plano UniHosp Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano UniHosp SP 2026: desde 1996, PME a partir de R$ 87,98/mês, medicina preventiva, linha Sênior 54+. Credenciamento em 24h. Cotação gratuita com a Elevance Seguros." />
        <link rel="canonical" href="https://www.elevanceseguros.com/unihosp" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "UniHosp", "item": "https://www.elevanceseguros.com/unihosp"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="UniHosp" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/preview.webp" alt="Logo UniHosp" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#1a3a6c"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> PF · PME · Linha Sênior 49+
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Plano UniHosp: <span className="text-yellow-300">saúde regional</span> com linha específica para a terceira idade</h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">A UniHosp Saúde é uma operadora regional paulistana com planos para PF, PME e linha Sênior dedicada a beneficiários a partir de 49 anos. Excelente custo-benefício para quem busca cobertura na Grande SP sem pagar as mensalidades das grandes operadoras nacionais.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="UniHosp" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="UniHosp"
        cor="#1a3a6c"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "39 a 43", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "49 a 53 (Sênior)", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59 em diante", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Rede credenciada UniHosp — Grande SP", "regiao": "São Paulo e Grande SP", "desc": "Hospitais e clínicas credenciados na capital paulista e região metropolitana de São Paulo."}]}
        depoimento={{ inicial: "J", nome: "Jorge", local: "São Paulo, SP", texto: "Minha mãe tem 63 anos e precisava de um plano acessível. O Rodrigo me apresentou o UniHosp Sênior e o custo ficou dentro do que esperávamos." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">UniHosp Sênior: uma alternativa regional acessível para a terceira idade</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">O UniHosp Sênior é desenhado especificamente para beneficiários a partir de 49 anos, sem cobertura obstétrica, seguindo as diretrizes da ANS para planos direcionados à terceira idade. É uma opção de custo mais acessível para quem busca cobertura regional na Grande SP.</p>
            <p className="mb-4">Para quem não precisa de cobertura nacional e usa o plano principalmente em São Paulo e região metropolitana, a UniHosp oferece uma relação custo-benefício difícil de encontrar nas grandes operadoras.</p>
            <p>A cotação com valores exatos por faixa etária é feita no WhatsApp — a tabela UniHosp varia conforme o perfil, modalidade e número de vidas.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20UniHosp" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "UniHosp atende na Grande SP?", resposta: "Sim. A UniHosp é uma operadora regional com rede concentrada na capital paulista e Grande SP. Para consultas eletivas, a cobertura é regional. Para urgências, há cobertura mais ampla conforme as regras da ANS." },
        { pergunta: "UniHosp tem plano para idosos?", resposta: "Sim. A linha UniHosp Sênior é específica para beneficiários a partir de 49 anos, sem obstetrícia. É uma alternativa regional de custo-benefício para a terceira idade em São Paulo." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a> · 
            <a href="/biovida" className="text-[#0d1f3c] font-black hover:underline">Biovida</a> · 
            <a href="/trasmontano" className="text-[#0d1f3c] font-black hover:underline">Trasmontano</a> · 
            <a href="/garantia-saude" className="text-[#0d1f3c] font-black hover:underline">Garantia de Saúde</a> · 
            <a href="/plena-saude" className="text-[#0d1f3c] font-black hover:underline">Plena Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano UniHosp Saúde" />
    </>
  );
};
export default UnihospPage;
