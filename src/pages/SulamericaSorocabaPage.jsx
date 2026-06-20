import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const SulamericaSorocabaPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefits = [
    "Sorocaba é a 3ª maior cidade do interior paulista — SulAmérica tem tabela própria para a região",
    "Plano Direto Sorocaba: rede regional selecionada com padrão SulAmérica e menor mensalidade",
    "Plano Exato Interior: cobertura nacional com reembolso, ideal para quem viaja a trabalho",
    "MEI e PME aceitos a partir de 3 vidas com CNPJ ativo há 6 meses",
    "Cobertura estendida para Itu, Salto, Votorantim, Araçoiaba da Serra e região metropolitana",
    "Telemedicina e programa de gestão preventiva incluídos em todos os planos",
  ];

  return (
    <>
      <Helmet>
        <title>Plano SulAmérica em Sorocaba | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano SulAmérica em Sorocaba: tabela própria para o interior, linha Direto regional e Exato nacional com reembolso. MEI aceito. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="SulAmérica Sorocaba, plano de saúde Sorocaba, cotação SulAmérica Sorocaba, SulAmérica interior paulista, PME Sorocaba" />
        <link rel="canonical" href="https://www.elevanceseguros.com/sulamerica-sorocaba" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "SulAmérica", "item": "https://www.elevanceseguros.com/sulamerica"},
            {"@type": "ListItem", "position": 3, "name": "Sorocaba", "item": "https://www.elevanceseguros.com/sulamerica-sorocaba"}
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
                <MapPin className="w-4 h-4" /> 3ª Maior Cidade do Interior Paulista
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano SulAmérica em <span className="text-[#C9A84C]">Sorocaba</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Sorocaba é um dos maiores polos industriais e de serviços do interior paulista. A SulAmérica oferece tabela própria para a região com duas opções principais: rede regional acessível ou cobertura nacional completa com reembolso.
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
              <OperatorQuoteForm operatorName="SulAmérica Sorocaba" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="SulAmérica Sorocaba"
        cor="#005c99"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 158,00', apto: 'R$ 216,00'},
          {idade: '19 a 23', enf: 'R$ 182,00', apto: 'R$ 249,00'},
          {idade: '24 a 28', enf: 'R$ 213,00', apto: 'R$ 291,00'},
        ]}
        hospitais={[
          {nome: 'Hospital Regional de Sorocaba', regiao: 'Sorocaba', desc: 'Referência em urgência e emergência na região, credenciado nos principais planos SulAmérica.'},
          {nome: 'Santa Casa de Sorocaba', regiao: 'Centro, Sorocaba', desc: 'Um dos mais tradicionais hospitais da cidade com múltiplas especialidades e pronto-socorro 24h.'},
          {nome: 'Hospital Unimed Sorocaba', regiao: 'Sorocaba', desc: 'Credenciado nos planos superiores com atendimento de alta qualidade e diversas especialidades.'},
          {nome: 'Cobertura Metropolitana', regiao: 'Região Metropolitana de Sorocaba', desc: 'Planos nacionais cobrem Votorantim, Itu, Salto, Indaiatuba e toda a região metropolitana.'},
        ]}
        depoimento={{
          inicial: "A",
          nome: "Amanda",
          local: "Sorocaba, SP",
          texto: "Minha empresa tem 5 funcionários e eu precisava de um plano com custo controlado. A Elevance encontrou o SulAmérica Direto Sorocaba — economizei quase 30% em relação ao que pagava antes.",
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde SulAmérica em Sorocaba: guia completo</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">Sorocaba é a terceira maior cidade do interior paulista, com crescimento acelerado nos setores industrial, tecnológico e de serviços. A SulAmérica reconhece esse peso regional com uma <strong>tabela própria para Sorocaba</strong>, separada da tabela do interior genérico.</p>
            <p className="mb-4">Para empresas que precisam de plano com menor custo, o <strong>Direto Sorocaba</strong> utiliza rede regional selecionada. Para empresários que viajam ou precisam de atendimento em qualquer cidade, o <strong>Exato</strong> oferece cobertura nacional e reembolso por livre escolha.</p>
            <p className="mb-4">A Elevance Seguros compara as duas opções e indica qual se encaixa melhor no seu perfil e orçamento.</p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano SulAmérica em Sorocaba"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#005c99] hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "Qual a diferença entre o plano Direto e o Exato da SulAmérica em Sorocaba?", resposta: "O Direto usa rede regional em Sorocaba com mensalidade mais baixa. O Exato tem cobertura nacional, acesso a mais hospitais e reembolso — ideal para quem viaja ou quer liberdade de escolha médica." },
        { pergunta: "MEI pode contratar SulAmérica em Sorocaba?", resposta: "Sim, a partir de 3 vidas com CNPJ ativo há 6 meses. A Elevance Seguros verifica as condições atuais e faz a cotação." },
        { pergunta: "O plano cobre cidades da região de Sorocaba?", resposta: "Nos planos nacionais, sim — Votorantim, Itu, Salto, Indaiatuba e toda a região metropolitana de Sorocaba estão cobertas." },
        { pergunta: "A SulAmérica tem gestão preventiva para empresas em Sorocaba?", resposta: "Sim. O programa de gestão preventiva está disponível para PMEs contratantes e historicamente reduz sinistralidade em 18-25%." },
        { pergunta: "Como contratar o plano SulAmérica em Sorocaba?", resposta: "Pela Elevance Seguros você recebe cotação gratuita, comparação de planos e acompanhamento via WhatsApp. Contratação 100% digital." },
      ]} />

      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">SulAmérica em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/sulamerica-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/sulamerica-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> · <a href="/sulamerica-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">Plano SulAmérica</a> · <a href="/hapvida-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Hapvida Sorocaba</a> · <a href="/bradescosaude-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Bradesco Sorocaba</a> · <a href="/amil-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Amil Sorocaba</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde SulAmérica em Sorocaba" />
    </>
  );
};

export default SulamericaSorocabaPage;
