import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const SulamericaRibeiraoPretoPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = [
    "Ribeirão Preto é polo médico universitário — SulAmérica tem extensa rede credenciada na região",
    "Plano Exato Interior: cobertura nacional com acesso aos hospitais de referência de Ribeirão",
    "FMRP-USP e hospitais universitários da região reconhecidos como referência nacional",
    "MEI e PME aceitos a partir de 3 vidas com CNPJ ativo há 6 meses",
    "Reembolso disponível nos planos Exato e superiores — liberdade para escolher qualquer médico",
    "Linha Especial com acesso a Rede D'Or, Einstein e Sírio-Libanês para casos de alta complexidade",
  ];

  return (
    <>
      <Helmet>
        <title>Plano SulAmérica em Ribeirão Preto | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano SulAmérica em Ribeirão Preto: rede credenciada no polo médico do interior paulista. Exato com reembolso, MEI aceito. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="SulAmérica Ribeirão Preto, plano de saúde Ribeirão Preto, cotação SulAmérica interior SP, SulAmérica Exato Ribeirão" />
        <link rel="canonical" href="https://www.elevanceseguros.com/sulamerica-ribeirao-preto" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "SulAmérica", "item": "https://www.elevanceseguros.com/sulamerica"},
            {"@type": "ListItem", "position": 3, "name": "Ribeirão Preto", "item": "https://www.elevanceseguros.com/sulamerica-ribeirao-preto"}
          ]
        })}`}</script>
      </Helmet>

      <CorretorHero operadora="SulAmérica" />
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img src="/logos/sulamerica.webp" alt="Logo SulAmérica" className="max-h-16 w-auto object-contain mx-auto animate-fade-in" style={{maxWidth:"180px"}} loading="lazy" decoding="async" />
      </div>

      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#005c99]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Polo Médico Universitário · Ribeirão Preto
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano SulAmérica em <span className="text-[#C9A84C]">Ribeirão Preto</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Ribeirão Preto é um dos maiores polos médicos do Brasil, com hospitais universitários e clínicas de alta especialização. A SulAmérica oferece acesso a essa rede com planos de cobertura regional e nacional.
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in">
              <OperatorQuoteForm operatorName="SulAmérica Ribeirão Preto" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="SulAmérica Ribeirão Preto"
        cor="#005c99"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 160,00', apto: 'R$ 218,00'},
          {idade: '19 a 23', enf: 'R$ 184,00', apto: 'R$ 252,00'},
          {idade: '24 a 28', enf: 'R$ 215,00', apto: 'R$ 296,00'},
        ]}
        hospitais={[
          {nome: 'Hospital São Francisco', regiao: 'Ribeirão Preto', desc: 'Um dos maiores e mais tradicionais hospitais de Ribeirão Preto, credenciado nos principais planos SulAmérica.'},
          {nome: 'Santa Casa de Ribeirão Preto', regiao: 'Centro, Ribeirão Preto', desc: 'Referência regional em urgência, emergência e cirurgias de alta complexidade.'},
          {nome: 'Hospital Unimed Ribeirão Preto', regiao: 'Ribeirão Preto', desc: 'Credenciado em planos superiores com atendimento de alto padrão e especialidades diversas.'},
          {nome: 'Rede credenciada regional', regiao: 'Região de Ribeirão Preto', desc: 'Cobertura estendida para Sertãozinho, Jaboticabal, Barretos e demais cidades do eixo canavieiro.'},
        ]}
        depoimento={{
          inicial: "M",
          nome: "Mariana",
          local: "Ribeirão Preto, SP",
          texto: "Precisava de um plano que cobrisse a Santa Casa e também permitisse reembolso para o meu cardiologista. O SulAmérica Exato que a Elevance me indicou resolve os dois.",
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde SulAmérica em Ribeirão Preto: o que você precisa saber</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">Ribeirão Preto concentra uma das maiores densidades de médicos especialistas do interior paulista, com influência direta da <strong>Faculdade de Medicina da USP (FMRP)</strong>. Esse contexto torna o mercado de saúde suplementar local muito rico em opções de atendimento.</p>
            <p className="mb-4">A SulAmérica oferece em Ribeirão Preto tanto o <strong>plano Direto Interior</strong> — com rede regional e menor custo — quanto o <strong>Exato</strong>, que permite atendimento em toda a rede nacional e reembolso por livre escolha de médico, ideal para quem acompanha especialistas específicos.</p>
            <p className="mb-4">Na Elevance Seguros comparamos as opções e encontramos o equilíbrio certo entre cobertura e custo para o seu perfil em Ribeirão Preto.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano SulAmérica em Ribeirão Preto"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#005c99] hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "O plano SulAmérica cobre os hospitais universitários de Ribeirão Preto?", resposta: "A rede credenciada SulAmérica em Ribeirão Preto inclui os principais hospitais da cidade. Para confirmar quais unidades específicas estão cobertas no seu plano, fale com a Elevance Seguros." },
        { pergunta: "Qual plano SulAmérica é mais indicado para Ribeirão Preto?", resposta: "O Exato é o mais vendido — cobre toda a rede nacional e permite reembolso. Para quem busca menor custo e fica em Ribeirão, o Direto Interior é uma boa opção." },
        { pergunta: "MEI pode contratar SulAmérica em Ribeirão Preto?", resposta: "Sim, a partir de 3 vidas com CNPJ ativo há 6 meses. A Elevance Seguros verifica as condições atuais e faz a cotação personalizada para você." },
        { pergunta: "O plano SulAmérica cobre cidades da região de Ribeirão Preto?", resposta: "Nos planos nacionais (Exato em diante), sim — Sertãozinho, Jaboticabal, Barretos e região estão cobertos. No plano Direto a cobertura é concentrada em Ribeirão Preto." },
        { pergunta: "Como contratar o plano SulAmérica em Ribeirão Preto?", resposta: "Pela Elevance Seguros você recebe cotação gratuita e comparação personalizada via WhatsApp. Contratação 100% digital, sem burocracia." },
      ]} />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">SulAmérica em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/sulamerica-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/sulamerica-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/sulamerica-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">Plano SulAmérica</a> · <a href="/hapvida-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Hapvida Ribeirão Preto</a> · <a href="/bradescosaude-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Bradesco Ribeirão Preto</a> · <a href="/amil-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Amil Ribeirão Preto</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde SulAmérica em Ribeirão Preto" />
    </>
  );
};

export default SulamericaRibeiraoPretoPage;
