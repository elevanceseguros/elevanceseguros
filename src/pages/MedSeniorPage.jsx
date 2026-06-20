import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const MedSeniorPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = [
    "Exclusivo para 49+ — toda a estrutura desenhada para as necessidades da melhor idade",
    "Sem coparticipação em todos os planos: paga mensalidade fixa, usa sem surpresa",
    "Linhas SP1 (enfermaria), SP2 (apartamento), Black e Infinite (premium)",
    "Central de Inteligência: videochamada + enfermeiro gestor do cuidado personalizado",
    "Programa Bem Envelhecer com oficinas de saúde, monitoramento e medicina preventiva",
    "PA Virtual 24h com teleconsulta, emissão de receitas e pedidos de exames",
  ];

  return (
    <>
      <Helmet>
        <title>Plano MedSênior | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano MedSênior 2026: exclusivo para 49+, sem coparticipação. Linhas SP1, SP2, Black e Infinite. Programa Bem Envelhecer, PA Virtual 24h. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="MedSênior, plano de saúde idoso, plano 49 anos, plano terceira idade SP, MedSênior preço, plano sem coparticipação" />
        <link rel="canonical" href="https://www.elevanceseguros.com/medsenior" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "MedSênior", "item": "https://www.elevanceseguros.com/medsenior"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano MedSênior | Elevance Seguros" />
        <meta name="twitter:description" content="MedSênior: plano de saúde para 49+ sem coparticipação. Medicina preventiva e acompanhamento contínuo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="MedSênior" />

      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/medsenior.webp" alt="Logo MedSênior" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#2d6a4f]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 70% 30%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-900 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Especialista em 49+ · Sem coparticipação
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                MedSênior: o plano que <span className="text-yellow-300">entende a terceira idade</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A MedSênior é a única operadora do Brasil dedicada exclusivamente a pessoas a partir de 49 anos. Sem coparticipação, com medicina preventiva como pilar e programas de acompanhamento contínuo — é um modelo de saúde, não só um convênio.
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div><OperatorQuoteForm operatorName="MedSênior" /></div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="MedSênior"
        cor="#2d6a4f"
        tabela={[
          {idade: '49 a 53', enf: 'R$ 545,51 (SP1)', apto: 'R$ 900,82 (SP2)'},
          {idade: '54 a 58', enf: 'R$ 727,30 (SP1)', apto: 'R$ 1.200,00 (SP2)'},
          {idade: '59 em diante', enf: 'R$ 900,00 (SP1)', apto: 'R$ 1.480,00 (SP2)'},
        ]}
        hospitais={[
          {nome: 'Rede de hospitais credenciados SP1/SP2', regiao: 'São Paulo e interior', desc: 'A MedSênior opera com rede credenciada especializada em geriatria e gerontologia, com mais de 45 unidades próprias no Brasil.'},
          {nome: 'Centros de Diagnóstico MedSênior', regiao: 'São Paulo', desc: 'Unidades próprias com equipamentos específicos para a faixa etária sênior, integradas à Central de Inteligência.'},
          {nome: 'Hospital credenciado em Campinas', regiao: 'Campinas, SP', desc: 'Rede credenciada MedSênior com hospitais de referência e acompanhamento preventivo na região de Campinas.'},
          {nome: 'Hospital credenciado em São Bernardo', regiao: 'São Bernardo do Campo', desc: 'Rede credenciada MedSênior no ABC Paulista com foco em medicina preventiva e geriatria.'},
        ]}
        depoimento={{
          inicial: "L",
          nome: "Luiz Carlos",
          local: "São Paulo, SP",
          texto: "Tinha 52 anos e fui orientado a olhar para o MedSênior. O que me convenceu foi a ausência de coparticipação e o enfermeiro gestor que me acompanha. O Rodrigo explicou tudo com paciência."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Por que o MedSênior não é só mais um plano de saúde?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              A maioria dos planos de saúde do mercado foi criada para a população geral — e para quem tem 50, 60, 70 anos, as necessidades de saúde são substancialmente diferentes. A MedSênior estruturou toda a sua operação em torno dessas diferenças.
            </p>
            <p className="mb-4">
              O modelo sem coparticipação é um dos mais valorizados pelos beneficiários sênior: sem surpresas financeiras após cada consulta, exame ou internação. A mensalidade é fixa e cobre tudo dentro do contrato. Para quem usa o plano com frequência, essa previsibilidade financeira é determinante.
            </p>
            <p className="mb-4">
              O <strong>Programa Bem Envelhecer</strong> vai além das consultas: envolve acompanhamento multidisciplinar, monitoramento de condições crônicas como hipertensão, diabetes e doenças cardíacas, e incentivo a hábitos saudáveis. A Central de Inteligência conecta o beneficiário a um enfermeiro gestor por videochamada, que conhece seu histórico e coordena o cuidado entre especialistas.
            </p>
            <p>
              Os planos disponíveis vão de SP1 (enfermaria) a SP2 (apartamento) e Black (premium). Não há obstetrícia — o produto é exclusivo para 49 anos acima, sem cobertura para gestação.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano MedSênior"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "O MedSênior aceita beneficiários de qualquer idade?", resposta: "Não. O MedSênior atende exclusivamente beneficiários a partir de 49 anos. Não é possível incluir filhos menores ou dependentes jovens no plano — é um produto desenhado especificamente para a faixa etária sênior." },
        { pergunta: "Qual a diferença entre SP1, SP2 e Black?", resposta: "O SP1 oferece acomodação em enfermaria e é o mais acessível. O SP2 garante apartamento (quarto privativo) nas internações. O Black é o plano premium com rede mais ampla, maiores reembolsos e serviços diferenciados. Todos os três são sem coparticipação." },
        { pergunta: "O MedSênior cobre doenças preexistentes?", resposta: "Sim, após o cumprimento das carências contratuais. Para condições preexistentes declaradas, pode haver uma CPT (Cobertura Parcial Temporária) de até 24 meses para procedimentos diretamente relacionados àquela condição — após esse período, a cobertura é plena." },
        { pergunta: "Como funciona a Central de Inteligência MedSênior?", resposta: "A Central de Inteligência é um serviço exclusivo da MedSênior: o beneficiário tem acesso a um enfermeiro gestor do cuidado por videochamada, que conhece seu histórico de saúde e coordena o acompanhamento entre os especialistas da rede. É uma referência única para dúvidas, encaminhamentos e gestão de doenças crônicas." },
        { pergunta: "Há MedSênior em Campinas e São Bernardo?", resposta: "Sim. A MedSênior atende em Campinas e São Bernardo do Campo, entre outras cidades do estado de São Paulo. Veja as páginas específicas para rede e preços atualizados de cada cidade." },
      ]} />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">MedSênior por cidade</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/medsenior-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> ·
            <a href="/medsenior-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Hapvida</a> ·
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> ·
            <a href="/trasmontano" className="text-[#0d1f3c] font-black hover:underline">Trasmontano Sênior</a> ·
            <a href="/unihosp" className="text-[#0d1f3c] font-black hover:underline">UniHosp</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano MedSênior" />
    </>
  );
};

export default MedSeniorPage;
