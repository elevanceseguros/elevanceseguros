import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const PlenaSaudePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "Mais de 30 anos de mercado com foco nas Zonas Norte e Leste de SP e Grande ABC",
    "22 unidades ambulatoriais próprias + 2 hospitais 24h com pronto-socorro completo",
    "PF disponível sem necessidade de CNPJ — diferencial raro entre operadoras regionais",
    "PME aceito a partir de 2 vidas — ideal para MEI e pequenas empresas do ABC e Alto Tietê",
    "Telemedicina 24h incluída sem custo adicional em todas as linhas",
    "Absorveu carteira do plano Cuidar-me (mai/2024) — estrutura ampliada e consolidada",
  ];
  return (
    <>
      <Helmet>
        <title>Plano Plena Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Plena Saúde SP 2026: 30 anos de mercado, 22 unidades próprias, 2 hospitais 24h. PF disponível. PME a partir de 2 vidas. Foco no ABC, Leste e Norte de SP. Cotação gratuita." />
        <link rel="canonical" href="https://www.elevanceseguros.com/plena-saude" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Plena Saúde", "item": "https://www.elevanceseguros.com/plena-saude"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="Plena Saúde" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/preview.webp" alt="Logo Plena Saúde" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#1a6b3c"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Rede Própria · Telemedicina 24h
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Plena Saúde: excelente custo-benefício com <span className="text-yellow-300">rede própria regional</span></h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">A Plena Saúde é a operadora com a melhor relação custo-benefício para quem mora e trabalha na Grande SP, ABCD, Campinas e Alto Tietê. Com 22 unidades ambulatoriais próprias e 2 hospitais 24h, entrega atendimento de qualidade sem as mensalidades das grandes operadoras nacionais.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="Plena Saúde" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="Plena Saúde"
        cor="#1a6b3c"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "19 a 23", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "39 a 43", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "49 a 53", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59 em diante", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Hospital Plena Saúde — Zona Norte", "regiao": "São Paulo — Zona Norte", "desc": "Hospital próprio com pronto-socorro pediátrico e ginecológico 24h. Internações e cirurgias."},
          {"nome": "Hospital Plena Saúde — Zona Leste", "regiao": "São Paulo — Zona Leste", "desc": "Segundo hospital próprio com pronto-socorro 24h e UTI. Foco nas zonas Norte e Leste de SP."},
          {"nome": "Hospital Mogiano (Mogi das Cruzes)", "regiao": "Mogi das Cruzes — Alto Tietê", "desc": "Nova aquisição da Plena Saúde. Atende beneficiários de Mogi das Cruzes e região."},
          {"nome": "22 Unidades Ambulatoriais Dr. Previna", "regiao": "Grande SP e interior", "desc": "Clínicas de consultas e exames espalhadas por São Paulo, Guarulhos, Caieiras, Jundiaí, Osasco e outras cidades."}]}
        depoimento={{ inicial: "R", nome: "Renata", local: "Guarulhos, SP", texto: "Moro em Guarulhos e queria um plano individual sem pagar uma fortuna. O Rodrigo me apresentou a Plena Saúde e o custo-benefício é muito melhor do que eu imaginava." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plena Saúde: o plano certo para quem não precisa de cobertura nacional</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Plena Saúde opera com rede regionalizada — e essa é exatamente a razão pela qual os preços são mais acessíveis. Se você mora, trabalha e usa o plano na Grande SP, ABCD, Campinas, Alto Tietê ou Ribeirão Pires, paga uma mensalidade menor por uma rede de qualidade equivalente.</p>
            <p className="mb-4">O grande diferencial da Plena frente à maioria das operadoras regionais é a rede própria extensa: 22 unidades ambulatoriais Dr. Previna distribuídas por toda a região metropolitana, mais 2 hospitais com pronto-socorro pediátrico e ginecológico 24h. Isso garante atendimento mesmo em situações de urgência sem precisar de credenciada.</p>
            <p>A Plena é uma das poucas operadoras que ainda vende plano individual (PF) sem exigir CNPJ — um diferencial importante para autônomos que não querem ou não podem abrir MEI.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Plena%20Sa%C3%BAde" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "Plena Saúde tem plano individual?", resposta: "Sim. A Plena Saúde é uma das poucas operadoras que ainda comercializa planos individuais e familiares diretamente para PF, sem necessidade de CNPJ. Ideal para autônomos, freelancers e quem não tem vínculo empregatício." },
        { pergunta: "Plena Saúde cobre Campinas?", resposta: "Sim. Campinas está na área de cobertura da Plena Saúde, assim como outras cidades do interior paulista como Jundiaí, Americana e Santa Bárbara d'Oeste." },
        { pergunta: "A Plena Saúde tem hospitais próprios?", resposta: "Sim. A Plena possui 2 hospitais próprios com pronto-socorro 24h e 22 unidades ambulatoriais Dr. Previna distribuídas pela Grande SP e interior paulista. É uma das redes próprias mais extensas entre as operadoras regionais." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Hapvida</a> · 
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · 
            <a href="/alice" className="text-[#0d1f3c] font-black hover:underline">Alice</a> · 
            <a href="/unihosp" className="text-[#0d1f3c] font-black hover:underline">UniHosp</a> · 
            <a href="/garantia-saude" className="text-[#0d1f3c] font-black hover:underline">Garantia de Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano Plena Saúde" />
    </>
  );
};
export default PlenaSaudePage;
