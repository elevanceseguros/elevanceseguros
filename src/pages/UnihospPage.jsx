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

  const benefits = ["Melhor custo-benefício em SP", "Planos a partir de R$ 87,98 (PME 0-18)", "Plano individual, familiar e empresarial", "Aceita MEI e autônomos", "Rede credenciada em toda Grande SP"];

  return (
    <>
      <Helmet>
        <title>Plano UniHosp Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="A UniHosp Saúde oferece planos completos para quem busca tradição, credibilidade e um dos melhores custo-benefícios do mercado em São Paulo, com valores a partir de R$ 87,98." />
        <meta name="keywords" content="UniHosp Saúde plano, cotação UniHosp SP, plano saúde barato São Paulo UniHosp" />
        <link rel="canonical" href="https://www.elevanceseguros.com/unihosp" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Planos de Saúde", "item": "https://www.elevanceseguros.com/encontre-seu-plano"},
            {"@type": "ListItem", "position": 3, "name": "UniHosp Saúde", "item": "https://www.elevanceseguros.com/unihosp"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano UniHosp Saúde em São Paulo | Elevance Seguros" />
        <meta name="twitter:description" content="A UniHosp Saúde oferece planos completos para quem busca tradição, credibilidade e um dos melhores custo-benefícios do mercado em São Paulo, com valores a partir de R$ 87,98." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="UniHosp Saúde" />

      {/* Logo */}
      <div className="py-6 flex justify-center items-center bg-white border-b border-gray-100">
        <img
          src="/logos/unihosp.webp"
          alt="Logo UniHosp Saúde"
          className="h-14 w-auto object-contain"
          style={{maxWidth:"200px"}}
          loading="lazy"
        />
      </div>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#15803d"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
                <ShieldCheck className="w-4 h-4" /> Tradição e credibilidade em SP
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Melhor custo-benefício com a <span style={{color:'#86efac'}}>UniHosp Saúde</span>
              </h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">A UniHosp Saúde oferece planos completos para quem busca tradição, credibilidade e um dos melhores custo-benefícios do mercado em São Paulo, com valores a partir de R$ 87,98.</p>
              <ul className="space-y-3 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <OperatorQuoteForm operatorName="UniHosp Saúde" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="UniHosp Saúde"
        cor="#15803d"
        tabela={[{"idade": "00 a 18", "enf": "A partir de R$ 87,98 (PME)", "apto": "Consulte"},
          {"idade": "19 a 23", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "24 a 28", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Rede Credenciada UniHosp", "regiao": "São Paulo Capital", "desc": "Hospitais e clínicas parceiras em SP."},
          {"nome": "Grande São Paulo", "regiao": "Região Metropolitana", "desc": "Cobertura nas principais cidades da Grande SP."}]}
        depoimento={{
          inicial: "P",
          nome: "Paulo",
          local: "São Paulo, SP",
          texto: "O Rodrigo me mostrou o UniHosp como opção mais acessível para minha empresa. Contratei para 3 funcionários e todos ficaram satisfeitos."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-sora text-3xl font-bold mb-6" style={{color: "#071B34"}}>Como funciona o plano UniHosp Saúde?</h2>
          <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
            <p>A UniHosp Saúde é reconhecida pelo excelente custo-benefício no mercado paulistano, com planos acessíveis para pessoa física, famílias e PME incluindo MEI, e rede credenciada em toda a Grande São Paulo.</p>
            <p>Na Elevance Seguros, o corretor Rodrigo Farias analisa seu perfil e encontra a melhor opção de plano UniHosp Saúde para você e sua família, sem burocracia e sem custo de consultoria.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá%20Rodrigo%2C%20quero%20cotar%20um%20plano%20UniHosp%20Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-105"
              style={{background: "#16a34a"}}>
              <MessageCircle className="w-5 h-5" /> Solicitar Cotação Gratuita
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        {pergunta: "Quanto tempo leva para o plano ser ativado?", resposta: "Após a contratação e pagamento da primeira mensalidade, o plano é ativado em até 48 horas. A urgência e emergência ficam disponíveis em 24 horas após a contratação."},
        {pergunta: "Posso incluir dependentes no plano?", resposta: "Sim! Cônjuge, filhos e dependentes legais podem ser incluídos. A Elevance orienta sobre todos os procedimentos e valores por faixa etária."},
        {pergunta: "O plano cobre consultas com qualquer médico?", resposta: "O plano cobre consultas com médicos da rede credenciada. Verifique se o seu plano oferece cobertura de reembolso para atendimentos fora da rede."},
        {pergunta: "Quais são os prazos de carência?", resposta: "Seguindo as regras da ANS: 24h para urgência/emergência, 30 dias para consultas simples, 180 dias para internações e 300 dias para parto. A portabilidade pode eliminar as carências."},
        {pergunta: "Como funciona a cotação gratuita pela Elevance?", resposta: "A Elevance analisa seu perfil e orçamento para apresentar as melhores opções disponíveis. Todo o processo é gratuito e sem compromisso — você decide se e quando contratar."}
      ]} />
      <ScrollCTA produto="Plano UniHosp Saúde" />
    </>
  );
};

export default UnihospPage;
