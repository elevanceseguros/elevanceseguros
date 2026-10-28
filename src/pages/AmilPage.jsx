import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const AmilPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = [
    "PF/Individual disponível em regiões selecionadas · Adesão via entidade (OAB, CRM, CREA etc.) · PME a partir de 2 vidas",
    "Bronze SP (regional SP+ABC), Bronze SP Mais (incluindo Campinas) até Black e One (nacionais)",
    "Amil Dental incluso por 12 meses nos planos PME e Adesão sem custo adicional",
    "BeepSaúde: coleta domiciliar de exames disponível nos planos superiores",
    "Amil Resgate e telemedicina integrados com médicos do Einstein",
    "Bronze SP MEI: R$ 150,46/mês · Adesão: R$ 223,04/mês · Empresarial: R$ 125,90/mês (faixa 0-18)",
  ];

  return (
    <>
      <Helmet>
        <title>Plano Amil | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Amil SP 2026: linhas Bronze SP, Prata, Ouro, Platinum, Black e One. PME a partir de R$ 125,90/mês. Amil Dental incluso 12 meses. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="plano amil, amil saúde SP, amil bronze, amil PME, amil MEI, amil adesão, plano de saúde amil 2026" />
        <link rel="canonical" href="https://www.elevanceseguros.com/amil" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Amil", "item": "https://www.elevanceseguros.com/amil"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano Amil | Elevance Seguros" />
        <meta name="twitter:description" content="Plano Amil com Amil Dental incluso 12 meses. PME a partir de R$ 125,90." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Amil" />

      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/amil.webp" alt="Logo Amil Saúde" className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#0066cc]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 80%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Amil Dental incluso 12 meses
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Amil: do regional ao premium, com <span className="text-yellow-300">odonto incluso</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Amil oferece o portfólio mais flexível do mercado — do plano Bronze SP (mais econômico, rede regional) ao One (rede nacional com Sírio-Libanês e reembolso ilimitado). Para PME e adesão, o Amil Dental vem incluso por 12 meses sem custo adicional.
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
            <div><OperatorQuoteForm operatorName="Amil" /></div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Amil"
        cor="#0066cc"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 125,90 (PME)', apto: 'R$ 223,04 (Adesão)'},
          {idade: '19 a 23', enf: 'R$ 148,60', apto: 'R$ 263,20'},
          {idade: '24 a 28', enf: 'R$ 178,30', apto: 'R$ 315,90'},
          {idade: '29 a 33', enf: 'R$ 213,90', apto: 'R$ 379,00'},
          {idade: '34 a 38', enf: 'R$ 249,50', apto: 'R$ 441,90'},
          {idade: '39 a 43', enf: 'R$ 302,30', apto: 'R$ 535,80'},
          {idade: '44 a 48', enf: 'R$ 389,50', apto: 'R$ 690,50'},
          {idade: '49 a 53', enf: 'R$ 503,70', apto: 'R$ 892,30'},
          {idade: '54 a 58', enf: 'R$ 698,00', apto: 'R$ 1.237,00'},
          {idade: '59 em diante', enf: 'R$ 755,80', apto: 'R$ 1.339,30'},
        ]}
        hospitais={[
          {nome: 'Hospital Israelita Albert Einstein', regiao: 'São Paulo — Morumbi', desc: 'Credenciado nas linhas Platinum, Black e One. Acesso com telemedicina Einstein inclusa em todos os planos.'},
          {nome: 'Hospital Sírio-Libanês', regiao: 'São Paulo — Bela Vista', desc: 'Disponível nas linhas Black e One. Um dos três melhores hospitais da América Latina.'},
          {nome: 'Hospital 9 de Julho', regiao: 'São Paulo — Jardim Paulista', desc: 'Disponível nas linhas Prata e superiores. Referência em cirurgias e internações na capital.'},
          {nome: 'Hospital Beneficência Portuguesa', regiao: 'São Paulo — Higienópolis', desc: 'Um dos maiores hospitais de SP, credenciado nas linhas nacionais Amil.'},
          {nome: 'Hospital Samaritano', regiao: 'São Paulo / São Bernardo do Campo', desc: 'Credenciado nas linhas Ouro e superiores. Presente também no ABC Paulista.'},
        ]}
        depoimento={{
          inicial: "C",
          nome: "Camila",
          local: "Campinas, SP",
          texto: "O Rodrigo me ajudou a entender a diferença entre o Bronze SP e o Bronze SP Mais — a inclusão de Campinas na rede fez toda a diferença para mim. Ainda veio com Amil Dental incluso por um ano."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Linhas Amil: qual escolher para o seu perfil?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              <strong>Bronze SP</strong>: rede regional cobrindo São Paulo capital, ABC Paulista, Guarulhos, Osasco e Baixada Santista. O mais barato da linha Amil — PME a partir de R$ 125,90. Campinas não está incluída nessa linha.
            </p>
            <p className="mb-4">
              <strong>Bronze SP Mais</strong>: amplia o Bronze SP para mais 53 municípios, incluindo Campinas, Hortolândia, Sumaré, Ribeirão Preto, Sorocaba, São Bernardo do Campo e outros. É a escolha para quem mora ou tem negócios no interior paulista.
            </p>
            <p className="mb-4">
              <strong>Prata, Ouro, Platinum, Black e One</strong>: cobertura nacional com rede progressivamente maior e melhores hospitais. O Ouro já inclui o Hospital Samaritano; o Platinum e o Black adicionam Einstein e Sírio; o One tem reembolso ilimitado e acesso à Rede D'Or.
            </p>
            <p>
              Um diferencial que pouca gente sabe: todos os planos Amil PME e Adesão vêm com <strong>Amil Dental incluso por 12 meses</strong>. Após esse período, o valor do dental (R$ 14,50/vida) é cobrado separadamente. É uma vantagem concreta que reduz o custo efetivo no primeiro ano.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano Amil"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "A Amil vende plano individual (CPF)?", resposta: "A Amil suspendeu as vendas de planos individuais e coletivos por adesão em 2024 em algumas regiões. Hoje, a contratação principal é via CNPJ (PME/MEI) ou por adesão vinculada a entidade de classe. Para verificar disponibilidade na sua cidade, entre em contato — a situação pode variar por região." },
        { pergunta: "Campinas está na rede Amil Bronze SP?", resposta: "Não. Campinas está disponível apenas a partir do Bronze SP Mais, que inclui mais de 53 municípios do interior e da Grande SP. Se você mora ou trabalha em Campinas, o plano correto é o Bronze SP Mais ou qualquer linha nacional (Prata em diante)." },
        { pergunta: "O Amil Dental realmente vem incluso?", resposta: "Sim. Todos os planos Amil PME e Adesão incluem o Amil Dental por 12 meses sem custo adicional. Após esse período, o valor de R$ 14,50 por beneficiário/mês passa a ser cobrado automaticamente. É possível cancelar o dental após os 12 meses gratuitos, se preferir." },
        { pergunta: "Como funciona o Amil Resgate?", resposta: "O Amil Resgate é um serviço de transporte aeromédico e terrestre para casos de urgência grave. Disponível em todos os planos, o serviço coordena a remoção do paciente de hospitais sem estrutura para unidades de referência da rede Amil, com cobertura 24h em todo o Brasil." },
        { pergunta: "MEI pode contratar plano Amil?", resposta: "Sim, a partir de 2 vidas (titular + 1 dependente ou 2 sócios). O CNPJ precisa estar ativo há pelo menos 6 meses. Você acessa a tabela PME que pode ser até 40% mais barata que o plano por adesão equivalente." },
      ]} />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Amil por cidade</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/amil-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> ·
            <a href="/amil-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> ·
            <a href="/amil-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> ·
            <a href="/amil-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Outras operadoras</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Hapvida</a> ·
            <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> ·
            <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> ·
            <a href="/alice" className="text-[#0d1f3c] font-black hover:underline">Alice</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Amil" />
    </>
  );
};

export default AmilPage;
