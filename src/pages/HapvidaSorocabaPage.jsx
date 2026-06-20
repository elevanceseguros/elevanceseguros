import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const HapvidaSorocabaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Hospital Modelo (ONA Nível 3) — referência em maternidade e cirurgias de alta complexidade em Sorocaba",
    "Hospital NotreCare Sorocaba — pronto-socorro 24h para urgências gerais",
    "Método Canguru e Hospital Amigo da Criança no Hospital Modelo",
    "2ª maior cidade do interior paulista com rede estruturada para a região metropolitana",
    "PME/MEI aceito com CNPJ ativo há 6 meses — compra de carência disponível para quem já tem outro plano",
    "Odonto Interodonto incluído em promoções para planos contratados na região",
  ];

  return (
    <>
      <Helmet>
        <title>Plano Hapvida em Sorocaba | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Hapvida em Sorocaba: Hospital Modelo (ONA Nível 3, Método Canguru) e Hospital NotreCare 24h. PME/MEI aceito. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Hapvida Sorocaba, plano de saúde Sorocaba, Hospital Modelo Sorocaba, Hospital NotreCare, cotação Hapvida Sorocaba" />
        <link rel="canonical" href="https://www.elevanceseguros.com/hapvida-sorocaba" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Hapvida", "item": "https://www.elevanceseguros.com/hapvida"},
            {"@type": "ListItem", "position": 3, "name": "Sorocaba", "item": "https://www.elevanceseguros.com/hapvida-sorocaba"}
          ]
        })}`}</script>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital, atendemos todo o Brasil." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Hapvida" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <img
          src="/logos/hapvida.webp"
          alt="Logo Hapvida"
          className="max-h-16 w-auto object-contain mx-auto animate-fade-in"
          style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#92400e]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-blue-100 text-green-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Hospital Modelo · Sorocaba
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Hapvida em <span className="text-[#0d1f3c]">Sorocaba</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Hapvida NotreDame Intermédica mantém em Sorocaba dois hospitais próprios: o Hospital Modelo, com certificação máxima ONA Nível 3 e maternidade referência, e o Hospital NotreCare, geral com Pronto-Socorro 24h.
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
              <OperatorQuoteForm operatorName="Hapvida Sorocaba" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Hapvida Sorocaba"
        cor="#f97316"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 143,83', apto: 'R$ 201,40'},
          {idade: '19 a 23', enf: 'R$ 170,95', apto: 'R$ 239,30'},
          {idade: '24 a 28', enf: 'R$ 205,14', apto: 'R$ 287,20'}
        ]}
        hospitais={[
          {nome: 'Hospital Modelo (Geral e Maternidade)', regiao: 'Trujillo, Sorocaba', desc: 'Certificação máxima ONA Nível 3, Pronto-Socorro 24h, UTI Neonatal/Adulta, Centro Cirúrgico Robótico e selo Hospital Amigo da Criança (Método Canguru).'},
          {nome: 'Hospital NotreCare', regiao: 'Santa Terezinha, Sorocaba', desc: 'Atendimento geral com Pronto-Socorro 24h, opção de urgência mais rápida na cidade.'},
          {nome: 'Centro Qualivida', regiao: 'Sorocaba', desc: 'Unidade de medicina preventiva integrada à rede própria.'},
          {nome: 'Cobertura regional', regiao: 'Região Metropolitana de Sorocaba', desc: 'Atendimento estendido para cidades vizinhas da RM de Sorocaba (cerca de 2,26 milhões de habitantes).'}
        ]}
        depoimento={{
          inicial: "R",
          nome: "Renata",
          local: "Sorocaba, SP",
          texto: "Achei pela internet e fechei rapidinho com a Elevance. O Rodrigo explicou a diferença entre o Hospital Modelo e o NotreCare, ajudou muito na escolha."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Hapvida em Sorocaba: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">Sorocaba é a segunda maior cidade do interior paulista e conta com <strong>dois hospitais próprios</strong> da Hapvida NotreDame Intermédica: o <strong>Hospital Modelo</strong>, no bairro Trujillo, com certificação máxima ONA Nível 3, maternidade referência (Método Canguru, selo Hospital Amigo da Criança) e Centro Cirúrgico Robótico; e o <strong>Hospital NotreCare</strong>, na Santa Terezinha, com atendimento geral e Pronto-Socorro 24h.</p>
            <p className="mb-4">
              Esse modelo verticalizado garante acesso direto às duas unidades, sem depender de autorização de rede credenciada externa para os procedimentos cobertos. A rede ainda conta com o Centro Qualivida, voltado à medicina preventiva.
            </p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Hapvida para você e sua família em Sorocaba, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de Sorocaba e quero cotar um plano Hapvida"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ perguntas={[
        { pergunta: "O plano Hapvida em Sorocaba dá acesso ao Hospital Modelo?", resposta: "Sim. O Hospital Modelo faz parte da rede própria da Hapvida NotreDame Intermédica em Sorocaba, com certificação máxima ONA Nível 3, Pronto-Socorro 24h, maternidade e UTI Neonatal/Adulta." },
        { pergunta: "Qual a diferença entre o Hospital Modelo e o Hospital NotreCare?", resposta: "O Hospital Modelo, no Trujillo, é geral e materno-infantil, com maternidade referência e Centro Cirúrgico Robótico. O Hospital NotreCare, na Santa Terezinha, é uma opção de urgência mais rápida, com atendimento geral e Pronto-Socorro 24h." },
        { pergunta: "O Hospital Modelo é referência em maternidade em Sorocaba?", resposta: "Sim, possui o selo Hospital Amigo da Criança (IHAC) da OMS/UNICEF e adota o Método Canguru para recém-nascidos prematuros, sendo uma das maternidades mais respeitadas da cidade." },
        { pergunta: "Hapvida cobre parto em Sorocaba?", resposta: "Sim, mas com carência de 300 dias para parto normal e cesárea, conforme regras gerais da operadora. Para gestantes já grávidas na data de contratação, há regras específicas — consulte-nos antes de fechar o plano." },
        { pergunta: "O plano cobre cidades da região metropolitana de Sorocaba?", resposta: "Sim, a cobertura se estende para a região metropolitana de Sorocaba, que reúne cerca de 2,26 milhões de habitantes. Fale com a Elevance Seguros para confirmar a rede disponível na sua cidade específica." }
      ]} />


      {/* Links internos */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Hapvida em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/hapvida-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> · <a href="/hapvida-campinas" className="text-[#0d1f3c] font-black hover:underline">Campinas</a> · <a href="/hapvida-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Plano Hapvida</a> · <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/unimed" className="text-[#0d1f3c] font-black hover:underline">Unimed</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Hapvida em Sorocaba" />
    </>
  );
};

export default HapvidaSorocabaPage;
