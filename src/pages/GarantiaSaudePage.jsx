import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const GarantiaSaudePage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const benefits = [
    "Mais de 40 anos de tradição na Zona Leste de SP, Guarulhos e Alto Tietê",
    "PF e PME disponíveis — baixo custo com alta qualidade assistencial regional",
    "Rede credenciada com os melhores profissionais e hospitais da região Leste",
    "Atendimento humanizado alinhando experiência, prevenção e tecnologia",
    "Empresarial: relação custo-benefício muito vantajosa para o público da região",
    "Foco em saúde preventiva — programas de promoção da saúde sem custo adicional",
  ];
  return (
    <>
      <Helmet>
        <title>Plano Garantia de Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Garantia de Saúde SP 2026: 40+ anos na Zona Leste, Guarulhos e Alto Tietê. PF e PME disponíveis. Atendimento humanizado. Cotação gratuita com a Elevance Seguros." />
        <link rel="canonical" href="https://www.elevanceseguros.com/garantia-saude" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Garantia de Saúde", "item": "https://www.elevanceseguros.com/garantia-saude"}
          ]
        })}`}</script>
      </Helmet>
      <CorretorHero operadora="Garantia de Saúde" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/preview.webp" alt="Logo Garantia de Saúde" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#b45309"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> PF · PME · Linha Sênior
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Plano Garantia de Saúde: <span className="text-yellow-300">cobertura regional</span> com custo-benefício real</h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">A Garantia de Saúde é uma operadora regional paulistana com boa relação custo-benefício para PF, PME, MEI e linha Sênior. Voltada para quem busca cobertura de qualidade na Grande SP com mensalidades acessíveis.</p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="Garantia de Saúde" /></div>
          </div>
        </div>
      </section>
      <OperadoraPlanoSection
        operadora="Garantia de Saúde"
        cor="#b45309"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "39 a 43", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "49 a 53 (Sênior)", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "59 em diante", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Rede credenciada Garantia de Saúde", "regiao": "São Paulo e Grande SP", "desc": "Hospitais e clínicas credenciados na capital paulista e região metropolitana."}]}
        depoimento={{ inicial: "V", nome: "Vânia", local: "São Paulo, SP", texto: "Precisava de um plano com coparticipação para pagar menos mensalidade. O Rodrigo encontrou a Garantia de Saúde e ficou dentro do orçamento." }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Garantia de Saúde: quando o custo importa tanto quanto a cobertura</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A Garantia de Saúde oferece uma das mensalidades mais competitivas para planos regionais em São Paulo, especialmente na modalidade com coparticipação. Para quem tem boa saúde e usa o plano principalmente para consultas de rotina e situações de urgência, é uma escolha inteligente.</p>
            <p className="mb-4">A linha Sênior é disponível para beneficiários a partir de 49 anos, seguindo as regras da ANS para planos direcionados à terceira idade. Sem obstetrícia, mas com cobertura para internações, cirurgias e procedimentos ambulatoriais.</p>
            <p>Para valores exatos por faixa etária e modalidade, entre em contato pelo WhatsApp — a tabela varia conforme o perfil.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20quero%20cotar%20um%20plano%20Garantia%20de%20Sa%C3%BAde" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <FAQ perguntas={[{ pergunta: "Garantia de Saúde tem plano individual?", resposta: "Sim. A Garantia de Saúde oferece planos individuais e familiares para PF, além de planos PME e linha Sênior." },
        { pergunta: "O que é coparticipação na Garantia de Saúde?", resposta: "Na modalidade com coparticipação, você paga uma porcentagem de cada consulta, exame ou procedimento que utilizar (geralmente entre 20% e 30%), mas a mensalidade mensal é significativamente menor. É a escolha para quem usa pouco o plano no dia a dia." }]} />
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a> · 
            <a href="/biovida" className="text-[#0d1f3c] font-black hover:underline">Biovida</a> · 
            <a href="/unihosp" className="text-[#0d1f3c] font-black hover:underline">UniHosp</a> · 
            <a href="/trasmontano" className="text-[#0d1f3c] font-black hover:underline">Trasmontano</a> · 
            <a href="/plena-saude" className="text-[#0d1f3c] font-black hover:underline">Plena Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano Garantia de Saúde" />
    </>
  );
};
export default GarantiaSaudePage;
