import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const SaoCristovaoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "Mais de 100 anos de tradição — uma das operadoras mais consolidadas do mercado paulista",
    "PF, PME e Adesão disponíveis — flexibilidade completa de contratação",
    "Linhas Essencial, Conforto, Bem Estar 40+ e Select com cobertura progressiva",
    "Rede própria de atendimento: hospitais, centros ambulatoriais e unidades especializadas",
    "Telemedicina, orientação médica 24h e emergência domiciliar incluídos",
    "Empresarial a partir de R$ 222,06 · Individual a partir de R$ 388,99 (enfermaria)",
  ];
  return (
    <>
      <Helmet>
        <title>Plano São Cristóvão Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano São Cristóvão Saúde SP 2026: 100+ anos, PF, PME e Adesão. Linhas Essencial a Select. Rede própria, telemedicina. Empresarial a partir de R$ 222,06. Cotação gratuita." />
        <link rel="canonical" href="https://www.elevanceseguros.com/sao-cristovao" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "São Cristóvão", "item": "https://www.elevanceseguros.com/sao-cristovao"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="São Cristóvão" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/preview.webp" alt="Logo São Cristóvão" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#7b2d8b"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> PF · PME · MEI · Linha Sênior
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Plano São Cristóvão: <span className="text-yellow-300">cobertura regional</span> para SP com bom custo-benefício</h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">A São Cristóvão Saúde é uma operadora regional paulistana com planos para PF, PME e MEI. Reconhecida pelo custo-benefício na Grande SP, é uma opção sólida para quem busca cobertura de qualidade sem pagar mensalidades das grandes operadoras nacionais.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="São Cristóvão" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="São Cristóvão"
        cor="#7b2d8b"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "39 a 43", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "49 a 53 (Sênior)", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59 em diante", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Rede credenciada São Cristóvão", "regiao": "São Paulo e Grande SP", "desc": "Hospitais e clínicas credenciados na capital paulista e região metropolitana."}]}
        depoimento={{ inicial: "N", nome: "Nathália", local: "São Paulo, SP", texto: "Comparei várias opções regionais e o São Cristóvão se destacou pelo custo. O Rodrigo foi essencial para entender os detalhes da rede." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">São Cristóvão Saúde: por que é uma boa alternativa regional em SP</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">Para quem vive e trabalha na Grande São Paulo, pagar por uma cobertura nacional que nunca usa não faz sentido financeiro. A São Cristóvão Saúde oferece cobertura regional de qualidade a um custo mais competitivo.</p>
            <p className="mb-4">A linha Sênior é disponível para beneficiários a partir de 49 anos, sem cobertura obstétrica, com foco em atendimento da terceira idade na Grande SP.</p>
            <p>Para valores exatos por faixa etária, entre em contato pelo WhatsApp — a tabela São Cristóvão varia conforme o perfil e modalidade.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20S%C3%A3o%20Crist%C3%B3v%C3%A3o" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "São Cristóvão tem plano individual?", resposta: "Sim. A São Cristóvão Saúde oferece planos individuais e familiares para PF, além de PME e linha Sênior." },
        { pergunta: "São Cristóvão tem boa rede em SP?", resposta: "Sim. A São Cristóvão é uma operadora regional com rede credenciada concentrada na capital paulista e Grande SP, incluindo hospitais e clínicas de qualidade." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/trasmontano" className="text-[#0d1f3c] font-black hover:underline">Trasmontano</a> · 
            <a href="/biovida" className="text-[#0d1f3c] font-black hover:underline">Biovida</a> · 
            <a href="/unihosp" className="text-[#0d1f3c] font-black hover:underline">UniHosp</a> · 
            <a href="/sao-miguel" className="text-[#0d1f3c] font-black hover:underline">São Miguel</a> · 
            <a href="/plena-saude" className="text-[#0d1f3c] font-black hover:underline">Plena Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano São Cristóvão Saúde" />
    </>
  );
};
export default SaoCristovaoPage;
