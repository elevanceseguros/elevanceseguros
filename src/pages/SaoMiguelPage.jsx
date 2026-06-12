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

  const benefits = ["Plano individual, familiar e empresarial", "Cobertura ambulatorial e hospitalar completa", "Rede própria e credenciada na Grande SP", "Aceita MEI — a partir de 1 vida", "Programa de medicina preventiva"];

  return (
    <>
      <Helmet>
        <title>Plano São Miguel Saúde em São Paulo | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="A São Miguel Saúde é uma operadora regional consolidada em São Paulo, com planos para pessoa física, MEI e empresas, oferecendo atendimento de qualidade na Grande São Paulo." />
        <meta name="keywords" content="São Miguel Saúde plano, cotação São Miguel Saúde SP, plano saúde individual São Paulo" />
        <link rel="canonical" href="https://www.elevanceseguros.com/sao-miguel" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Planos de Saúde", "item": "https://www.elevanceseguros.com/encontre-seu-plano"},
            {"@type": "ListItem", "position": 3, "name": "São Miguel Saúde", "item": "https://www.elevanceseguros.com/sao-miguel"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano São Miguel Saúde em São Paulo | Elevance Seguros" />
        <meta name="twitter:description" content="A São Miguel Saúde é uma operadora regional consolidada em São Paulo, com planos para pessoa física, MEI e empresas, oferecendo atendimento de qualidade na Grande São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="São Miguel Saúde" />

      {/* Logo */}
      <div className="py-6 flex justify-center items-center bg-white border-b border-gray-100">
        <img
          src="/logos/sao-miguel.png"
          alt="Logo São Miguel Saúde"
          className="h-14 w-auto object-contain"
          style={{maxWidth:"200px"}}
          loading="lazy"
        />
      </div>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#1e40af"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
                <ShieldCheck className="w-4 h-4" /> Planos individuais e PME
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Cobertura completa com a <span style={{color:'#38bdf8'}}>São Miguel Saúde</span>
              </h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">A São Miguel Saúde é uma operadora regional consolidada em São Paulo, com planos para pessoa física, MEI e empresas, oferecendo atendimento de qualidade na Grande São Paulo.</p>
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
              <OperatorQuoteForm operatorName="São Miguel Saúde" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="São Miguel Saúde"
        cor="#1e40af"
        tabela={[{"idade": "00 a 18", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "19 a 23", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "24 a 28", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Hospital São Miguel", "regiao": "São Paulo, SP", "desc": "Pronto-socorro, internações e cirurgias na capital."},
          {"nome": "Rede credenciada Grande SP", "regiao": "Região Metropolitana", "desc": "Clínicas e hospitais parceiros na Grande São Paulo."}]}
        depoimento={{
          inicial: "F",
          nome: "Fernanda",
          local: "Osasco, SP",
          texto: "Precisava de plano individual acessível em Osasco. O Rodrigo me encontrou o São Miguel com excelente rede na minha região."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-sora text-3xl font-bold mb-6" style={{color: "#071B34"}}>Como funciona o plano São Miguel Saúde?</h2>
          <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
            <p>A São Miguel Saúde é uma operadora regional com forte atuação em São Paulo e Grande SP, com planos acessíveis para pessoa física, famílias e empresas, incluindo MEI.</p>
            <p>Na Elevance Seguros, o corretor Rodrigo Farias analisa seu perfil e encontra a melhor opção de plano São Miguel Saúde para você e sua família, sem burocracia e sem custo de consultoria.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá%20Rodrigo%2C%20quero%20cotar%20um%20plano%20São%20Miguel%20Saúde"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all hover:scale-105"
              style={{background: "#16a34a"}}>
              <MessageCircle className="w-5 h-5" /> Solicitar Cotação Gratuita
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        {p: "Quanto tempo leva para o plano ser ativado?", r: "Após a contratação e pagamento da primeira mensalidade, o plano é ativado em até 48 horas. A urgência e emergência ficam disponíveis em 24 horas após a contratação."},
        {p: "Posso incluir dependentes no plano?", r: "Sim! Cônjuge, filhos e dependentes legais podem ser incluídos. A Elevance orienta sobre todos os procedimentos e valores por faixa etária."},
        {p: "O plano cobre consultas com qualquer médico?", r: "O plano cobre consultas com médicos da rede credenciada. Verifique se o seu plano oferece cobertura de reembolso para atendimentos fora da rede."},
        {p: "Quais são os prazos de carência?", r: "Seguindo as regras da ANS: 24h para urgência/emergência, 30 dias para consultas simples, 180 dias para internações e 300 dias para parto. A portabilidade pode eliminar as carências."},
        {p: "Como funciona a cotação gratuita pela Elevance?", r: "A Elevance analisa seu perfil e orçamento para apresentar as melhores opções disponíveis. Todo o processo é gratuito e sem compromisso — você decide se e quando contratar."}
      ]} />
      <ScrollCTA produto="Plano São Miguel Saúde" />
    </>
  );
};

export default SaoMiguelPage;
