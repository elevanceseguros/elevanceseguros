import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const BiovidaPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "Uma das tabelas PME mais agressivas do mercado — destaque no ABC Paulista e Zona Leste",
    "PF disponível sem necessidade de CNPJ, aceitando beneficiários até 81 anos",
    "Linha Sênior Biovida (54+) com programa 'Alô Sênior' de atividades e bem-estar sem custo",
    "Rede credenciada com foco em SP Capital, ABC e Guarulhos",
    "Hospitais: Serra Mayor, Santa Rita, Hospital Jardins entre os credenciados",
    "MEI: CNPJ ativo há 6 meses — contratação simples e totalmente digital",
  ];
  return (
    <>
      <Helmet>
        <title>Plano Biovida Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Biovida SP 2026: tabela PME agressiva no ABC e Zona Leste, PF disponível até 81 anos, linha Sênior 54+ com Alô Sênior. Cotação gratuita com a Elevance Seguros." />
        <link rel="canonical" href="https://www.elevanceseguros.com/biovida" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Biovida", "item": "https://www.elevanceseguros.com/biovida"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="Biovida" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/preview.webp" alt="Logo Biovida" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#0a7c4e"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> PF · PME · Linha Sênior
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Plano Biovida: <span className="text-yellow-300">custo-benefício regional</span> para SP e Grande SP</h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">A Biovida Saúde é uma operadora regional paulistana reconhecida pelo custo-benefício e pela qualidade da rede credenciada na Grande SP. Atende PF, PME, MEI e possui linha específica Sênior para beneficiários acima de 49 anos.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="Biovida" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="Biovida"
        cor="#0a7c4e"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "39 a 43", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "49 a 53 (Sênior)", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59 em diante", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Rede credenciada Biovida — SP", "regiao": "São Paulo e Grande SP", "desc": "Hospitais, clínicas e laboratórios credenciados concentrados na capital paulista e região metropolitana."}]}
        depoimento={{ inicial: "T", nome: "Tatiana", local: "São Paulo, SP", texto: "Precisava de um plano acessível para toda a família. O Rodrigo comparou a Biovida com outras opções e foi a que melhor encaixou no orçamento com boa rede." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Biovida: para quem busca uma operadora regional de qualidade em SP</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Biovida Saúde é uma operadora regional com foco na Grande São Paulo. Para quem vive e usa o plano principalmente na capital e região metropolitana, oferece boa cobertura com mensalidade mais acessível do que as grandes operadoras nacionais.</p>
            <p className="mb-4">A linha Biovida Sênior é específica para beneficiários a partir de 49 anos, seguindo as diretrizes da ANS para planos direcionados à terceira idade. É uma alternativa de preço mais acessível ao MedSênior para quem prioriza o custo.</p>
            <p>Para cotação com valores precisos por faixa etária, entre em contato pelo WhatsApp — a tabela Biovida varia conforme o perfil e modalidade (PF, PME ou Sênior).</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Biovida" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "Biovida atende fora de SP?", resposta: "A Biovida é uma operadora regional com cobertura concentrada na Grande São Paulo. Para urgências e emergências, há cobertura em outros estados, mas a rede de consultas eletivas é principalmente na capital e região metropolitana." },
        { pergunta: "Biovida tem plano para 49+ (Sênior)?", resposta: "Sim. A linha Biovida Sênior é específica para beneficiários a partir de 49 anos, sem obstetrícia. É uma alternativa regional de custo-benefício para a terceira idade em São Paulo." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a> · 
            <a href="/trasmontano" className="text-[#0d1f3c] font-black hover:underline">Trasmontano</a> · 
            <a href="/unihosp" className="text-[#0d1f3c] font-black hover:underline">UniHosp</a> · 
            <a href="/garantia-saude" className="text-[#0d1f3c] font-black hover:underline">Garantia de Saúde</a> · 
            <a href="/plena-saude" className="text-[#0d1f3c] font-black hover:underline">Plena Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano Biovida Saúde" />
    </>
  );
};
export default BiovidaPage;
