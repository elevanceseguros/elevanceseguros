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

  const benefits = ["Hospital e maternidade próprios em SP", "Plano individual, familiar e PME", "Aceita MEI — a partir de 1 vida", "Plano Bem-Estar 40+ e Viva Melhor (60+)", "Orientação médica por telefone 24h"];

  return (
    <>
      <Helmet>
        <title>Plano São Cristóvão Saúde | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="A São Cristóvão Saúde tem hospital e maternidade próprios em São Paulo, com planos para pessoa física, MEI e empresas. Ótimo custo-benefício para quem vive na Grande São Paulo." />
        <meta name="keywords" content="São Cristóvão Saúde plano, cotação São Cristóvão SP, plano saúde individual São Paulo São Cristóvão" />
        <link rel="canonical" href="https://www.elevanceseguros.com/sao-cristovao" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Planos de Saúde", "item": "https://www.elevanceseguros.com/encontre-seu-plano"},
            {"@type": "ListItem", "position": 3, "name": "São Cristóvão Saúde", "item": "https://www.elevanceseguros.com/sao-cristovao"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano São Cristóvão Saúde em São Paulo | Elevance Seguros" />
        <meta name="twitter:description" content="A São Cristóvão Saúde tem hospital e maternidade próprios em São Paulo, com planos para pessoa física, MEI e empresas. Ótimo custo-benefício para quem vive na Grande São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="São Cristóvão Saúde" />

      {/* Logo */}
      <div className="py-6 flex justify-center items-center bg-white border-b border-gray-100">
        <img
          src="/logos/sao-cristovao.png"
          alt="Logo São Cristóvão Saúde"
          className="h-14 w-auto object-contain"
          style={{maxWidth:"200px"}}
          loading="lazy"
        />
      </div>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden" style={{background: "#0e7490"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full font-semibold text-sm mb-6">
                <ShieldCheck className="w-4 h-4" /> Rede própria integrada
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Rede própria e atendimento ágil com a <span style={{color:'#67e8f9'}}>São Cristóvão Saúde</span>
              </h1>
              <p className="text-xl text-white/85 mb-8 leading-relaxed">A São Cristóvão Saúde tem hospital e maternidade próprios em São Paulo, com planos para pessoa física, MEI e empresas. Ótimo custo-benefício para quem vive na Grande São Paulo.</p>
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
              <OperatorQuoteForm operatorName="São Cristóvão Saúde" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="São Cristóvão Saúde"
        cor="#0e7490"
        tabela={[{"idade": "00 a 18", "enf": "R$ 222,06 (PME)", "apto": "R$ 388,99 (PF)"},
          {"idade": "19 a 23", "enf": "Consulte", "apto": "Consulte"},
          {"idade": "24 a 28", "enf": "Consulte", "apto": "Consulte"}]}
        hospitais={[{"nome": "Hospital São Cristóvão", "regiao": "São Paulo Capital", "desc": "Hospital próprio com pronto-socorro, UTI e cirurgias."},
          {"nome": "Maternidade São Cristóvão", "regiao": "São Paulo Capital", "desc": "Pré-natal, parto humanizado e neonatologia."},
          {"nome": "Centros Ambulatoriais", "regiao": "Grande São Paulo", "desc": "Consultas e exames em unidades próprias na capital e ABCDM."},
          {"nome": "Rede Select", "regiao": "SP + Baixada Santista", "desc": "Cobertura ampliada incluindo Guarulhos, Osasco e litoral."}]}
        depoimento={{
          inicial: "C",
          nome: "Claudia",
          local: "Santo André, SP",
          texto: "Precisava de plano com maternidade. O Rodrigo me indicou o São Cristóvão — hospital próprio excelente e preço justo."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-sora text-3xl font-bold mb-6" style={{color: "#071B34"}}>Como funciona o plano São Cristóvão Saúde?</h2>
          <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
            <p>A São Cristóvão Saúde é uma das principais operadoras regionais de São Paulo, com estrutura própria que inclui hospital, maternidade e centros ambulatoriais. Atende pessoa física, famílias e PME incluindo MEI.</p>
            <p>Na Elevance Seguros, o corretor Rodrigo Farias analisa seu perfil e encontra a melhor opção de plano São Cristóvão Saúde para você e sua família, sem burocracia e sem custo de consultoria.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá%20Rodrigo%2C%20quero%20cotar%20um%20plano%20São%20Cristóvão%20Saúde"
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
      <ScrollCTA produto="Plano São Cristóvão Saúde" />
    </>
  );
};

export default SaoCristovaoPage;
