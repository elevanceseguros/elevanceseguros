import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const HapvidaPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = [
    "Maior rede própria verticalizada da América Latina — 86 hospitais, 352 clínicas e 292 unidades de diagnóstico",
    "PF a partir de R$ 133,10/mês · PME/MEI a partir de R$ 110,08/mês · Adesão via entidade de classe",
    "Linhas Nosso Plano (rede própria), Mix (própria + credenciada) e Pleno (máxima cobertura)",
    "Super App Hapvida: agendamentos, carteirinha digital e teleconsulta integrados",
    "Programas Qualivida de medicina preventiva sem custo adicional",
    "Urgência e emergência cobertos em toda a rede própria nacional após 24h",
  ];

  return (
    <>
      <Helmet>
        <title>Plano Hapvida | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Hapvida: maior rede própria do Brasil com 86 hospitais. PF a partir de R$ 133,10/mês, PME/MEI a partir de R$ 110,08. Linhas Nosso Plano, Mix e Pleno. Cotação gratuita via Elevance Seguros." />
        <meta name="keywords" content="plano hapvida, hapvida notredame, hapvida preço, hapvida PME, hapvida MEI, hapvida individual, plano de saúde hapvida" />
        <link rel="canonical" href="https://www.elevanceseguros.com/hapvida" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Hapvida", "item": "https://www.elevanceseguros.com/hapvida"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano Hapvida | Elevance Seguros" />
        <meta name="twitter:description" content="Cotação gratuita do plano Hapvida. PF a partir de R$ 133,10, PME a partir de R$ 110,08." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Hapvida" />

      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/hapvida.webp" alt="Logo Hapvida NotreDame Intermédica" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#1a4a8a]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Maior rede própria do Brasil
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Hapvida: saúde completa com <span className="text-yellow-300">rede própria</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Hapvida NotreDame Intermédica opera a maior rede verticalizada de saúde da América Latina — 86 hospitais próprios, 352 clínicas e mais de 15 milhões de beneficiários. Planos para PF, PME, MEI e adesão com os melhores preços do mercado.
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
            <div><OperatorQuoteForm operatorName="Hapvida" /></div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Hapvida"
        cor="#1a4a8a"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 133,10', apto: 'R$ 186,00'},
          {idade: '19 a 23', enf: 'R$ 148,10', apto: 'R$ 207,30'},
          {idade: '24 a 28', enf: 'R$ 163,10', apto: 'R$ 228,30'},
          {idade: '29 a 33', enf: 'R$ 189,10', apto: 'R$ 264,70'},
          {idade: '34 a 38', enf: 'R$ 204,10', apto: 'R$ 285,80'},
          {idade: '39 a 43', enf: 'R$ 244,10', apto: 'R$ 341,70'},
          {idade: '44 a 48', enf: 'R$ 319,10', apto: 'R$ 446,70'},
          {idade: '49 a 53', enf: 'R$ 429,10', apto: 'R$ 600,80'},
          {idade: '54 a 58', enf: 'R$ 584,10', apto: 'R$ 817,80'},
          {idade: '59 em diante', enf: 'R$ 798,70', apto: 'R$ 1.118,10'},
        ]}
        hospitais={[
          {nome: 'Hospital Bosque da Saúde', regiao: 'São Paulo — Zona Sul', desc: 'Certificação ONA Nível 3 (excelência máxima). UTI, cirurgias de alta complexidade e pronto-socorro 24h.'},
          {nome: 'Hospital Nossa Senhora do Rosário', regiao: 'São Paulo — Zona Leste', desc: 'Certificação ONA Nível 3. Um dos hospitais mais completos da rede própria Hapvida em SP.'},
          {nome: 'Hospital Montemagno', regiao: 'São Paulo — Vila Formosa', desc: 'Internações, cirurgias e pronto-socorro. Rede própria integrada ao prontuário eletrônico Hapvida.'},
          {nome: 'Hospital Salvalus', regiao: 'São Paulo — Mooca', desc: 'Referência em urgência e emergência na Zona Leste de São Paulo.'},
        ]}
        depoimento={{
          inicial: "M",
          nome: "Márcia",
          local: "São Paulo, SP",
          texto: "O Rodrigo me explicou tudo sobre a rede própria da Hapvida e como funciona o app para agendar consultas. Fechei o plano em um dia e já usei na semana seguinte."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">PF, PME ou Adesão: qual modalidade Hapvida é a sua?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              O plano Hapvida individual (PF) pode ser contratado por qualquer pessoa sem CNPJ, a partir de R$ 133,10/mês para a faixa 0-18 anos. É a opção para autônomos ou quem não tem vínculo empregatício e quer proteção individual ou familiar.
            </p>
            <p className="mb-4">
              Quem tem MEI ou CNPJ ativo há mais de 6 meses tem acesso ao plano PME/empresarial, que começa em R$ 110,08/mês por vida — até 40% mais barato que o plano individual equivalente, com a mesma rede e cobertura. É a modalidade mais vantajosa para autônomos que se formalizaram.
            </p>
            <p className="mb-4">
              A modalidade adesão é viabilizada por filiação a entidade de classe (sindicatos, conselhos profissionais como CREA, CRM, CRO, COREN). Oferece preços competitivos sem exigência de CNPJ e é uma alternativa para profissionais liberais que já possuem vínculo com alguma entidade.
            </p>
            <p>
              O diferencial que separa a Hapvida das demais: rede própria verticalizada. Com prontuário eletrônico integrado entre todos os hospitais, clínicas e laboratórios próprios, há mais controle de qualidade, menos fila de autorização e custos mais baixos — que se traduzem em mensalidades menores para você.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano Hapvida"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "Qual a diferença entre Hapvida 'Nosso Plano' e 'Mix'?", resposta: "O Nosso Plano atende exclusivamente na rede própria Hapvida (hospitais, clínicas e laboratórios da operadora). É o mais barato. O plano Mix combina rede própria com rede credenciada parceira, dando mais opções de especialistas e clínicas externas. Para consultas de rotina, o Nosso Plano já resolve. Para quem tem médico fora da rede própria, o Mix compensa o valor um pouco maior." },
        { pergunta: "Hapvida aceita MEI? Precisa de quanto tempo de CNPJ?", resposta: "Sim. A Hapvida aceita MEI com CNPJ ativo há pelo menos 6 meses. Com o MEI você acessa a tabela PME, que pode ser até 40% mais barata que o plano individual equivalente. O plano pode incluir o titular, cônjuge e dependentes." },
        { pergunta: "Hapvida cobre parto e obstetrícia?", resposta: "Sim, nos planos com cobertura obstétrica (ambulatorial + hospitalar + obstetrícia). A carência para parto a termo é de 300 dias. Para urgência obstétrica, a carência é de 24h. A Hapvida tem maternidades próprias em São Paulo e região com UTI neonatal." },
        { pergunta: "Como funciona o agendamento de consultas na Hapvida?", resposta: "Pelo Super App Hapvida NDI ou pelo site. O beneficiário acessa diretamente a agenda das unidades próprias, sem precisar ligar ou pedir autorização prévia para consultas eletivas na rede própria. É um dos processos mais ágeis do mercado." },
        { pergunta: "A Hapvida atende fora de São Paulo?", resposta: "Sim. A rede própria Hapvida está presente em 16 estados, com maior concentração no Nordeste, Sudeste e Centro-Oeste. Para urgência e emergência, há cobertura em toda a rede própria nacional. Para consultas eletivas, o atendimento é na rede do estado de contratação." },
      ]} />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Hapvida por cidade</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/hapvida-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> ·
            <a href="/hapvida-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> ·
            <a href="/hapvida-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> ·
            <a href="/hapvida-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> ·
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> ·
            <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> ·
            <a href="/medsenior" className="text-[#0d1f3c] font-black hover:underline">MedSênior</a> ·
            <a href="/alice" className="text-[#0d1f3c] font-black hover:underline">Alice</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Hapvida" />
    </>
  );
};

export default HapvidaPage;
