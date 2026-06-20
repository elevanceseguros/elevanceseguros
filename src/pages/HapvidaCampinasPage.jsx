import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const HapvidaCampinasPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Hospital Renascença Campinas — única unidade com certificação ONA Nível 3 no interior paulista",
    "Rede própria em Cambuí, Barão Geraldo, Taquaral, Nova Campinas e Jardim Guanabara",
    "PME/MEI a partir de R$ 84,53/mês — até 30% mais barato que o plano individual equivalente",
    "Campinas é HUB regional: cobertura estende-se a Valinhos, Vinhedo, Paulínia e Hortolândia",
    "Telemedicina 24h via Super App sem custo adicional",
    "Aprovação em até 24h para planos empresariais com CNPJ ativo há 6 meses",
  ];

  return (
    <>
      <Helmet>
        <title>Plano Hapvida em Campinas | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Hapvida em Campinas: Hospital Renascença (ONA Nível 3), cobertura em Cambuí, Barão Geraldo, Taquaral. PME a partir de R$ 84,53/mês. Cotação gratuita com a Elevance Seguros." />
        <meta name="keywords" content="Hapvida Campinas, plano de saúde Campinas, Hospital Renascença Campinas, cotação Hapvida Campinas, plano saúde interior paulista" />
        <link rel="canonical" href="https://www.elevanceseguros.com/hapvida-campinas" />

        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Hapvida", "item": "https://www.elevanceseguros.com/hapvida"},
            {"@type": "ListItem", "position": 3, "name": "Campinas", "item": "https://www.elevanceseguros.com/hapvida-campinas"}
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
                <MapPin className="w-4 h-4" /> Hospital Renascença · Campinas
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Plano Hapvida em <span className="text-[#0d1f3c]">Campinas</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A Hapvida tem em Campinas uma de suas redes próprias mais estruturadas do interior paulista, com destaque para o Hospital Renascença, uma das poucas unidades da rede com certificação máxima ONA Nível 3.
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
              <OperatorQuoteForm operatorName="Hapvida Campinas" />
            </div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="Hapvida Campinas"
        cor="#f97316"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 143,83', apto: 'R$ 201,40'},
          {idade: '19 a 23', enf: 'R$ 170,95', apto: 'R$ 239,30'},
          {idade: '24 a 28', enf: 'R$ 205,14', apto: 'R$ 287,20'}
        ]}
        hospitais={[
          {nome: 'Hospital Renascença', regiao: 'Campinas', desc: 'Certificação máxima ONA Nível 3 — uma das poucas unidades da rede própria Hapvida com esse selo de qualidade.'},
          {nome: 'Centros clínicos próprios', regiao: 'Cambuí, Centro e Nova Campinas', desc: 'Unidades ambulatoriais bem distribuídas para consultas e exames de rotina.'},
          {nome: 'Rede credenciada complementar', regiao: 'Barão Geraldo, Taquaral, Jardim Guanabara', desc: 'Cobertura ampliada em bairros residenciais e áreas de expansão da cidade.'},
          {nome: 'Cobertura metropolitana', regiao: 'Região Metropolitana de Campinas', desc: 'Atendimento estendido para Valinhos, Vinhedo, Indaiatuba e demais cidades da RMC.'}
        ]}
        depoimento={{
          inicial: "F",
          nome: "Fabiana",
          local: "Campinas, SP",
          texto: "Pesquisei bastante e fechei com a Elevance. O Rodrigo me passou a tabela completa e explicou a cobertura do Hospital Renascença, que é referência aqui em Campinas."
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Plano de saúde Hapvida em Campinas: como funciona?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">Campinas é um dos mercados de saúde suplementar mais relevantes do interior de São Paulo, e a Hapvida construiu ali uma das redes próprias mais estruturadas da operadora. O destaque é o <strong>Hospital Renascença</strong>, que possui certificação máxima ONA Nível 3 — um selo de qualidade que poucas unidades da rede própria Hapvida no Brasil têm.</p>
            <p className="mb-4">
              A rede credenciada e ambulatorial cobre bairros como <strong>Cambuí, Centro, Barão Geraldo, Taquaral, Nova Campinas e Jardim Guanabara</strong>, garantindo acesso facilitado independente da região da cidade onde você mora.
            </p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano Hapvida para você e sua família em Campinas, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, sou de Campinas e quero cotar um plano Hapvida"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ perguntas={[
        { pergunta: "O plano Hapvida em Campinas atende no Hospital Renascença?", resposta: "Sim. O Hospital Renascença é uma das principais unidades próprias da Hapvida em Campinas e possui certificação máxima ONA Nível 3, um dos selos de qualidade mais altos do setor de saúde." },
        { pergunta: "Quais bairros de Campinas têm cobertura Hapvida?", resposta: "A rede própria e credenciada da Hapvida cobre bairros como Cambuí, Centro, Barão Geraldo, Taquaral, Nova Campinas e Jardim Guanabara, entre outros." },
        { pergunta: "O plano cobre cidades da região metropolitana de Campinas?", resposta: "Sim, a cobertura se estende para cidades vizinhas como Valinhos, Vinhedo e Indaiatuba. Fale com a Elevance Seguros para confirmar a rede disponível na sua cidade específica." },
        { pergunta: "Hapvida cobre parto em Campinas?", resposta: "Sim, mas com carência de 300 dias para parto normal e cesárea, conforme regras gerais da operadora. Para gestantes já grávidas na data de contratação, há regras específicas — consulte-nos antes de fechar o plano." },
        { pergunta: "O plano Hapvida em Campinas é bom para famílias?", resposta: "Sim, é uma das opções com melhor custo-benefício para famílias em Campinas, especialmente considerando a estrutura do Hospital Renascença e a rede ambulatorial bem distribuída pela cidade." }
      ]} />


      {/* Links internos */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Hapvida em outras cidades</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6">
            <a href="/hapvida-ribeirao-preto" className="text-[#0d1f3c] font-black hover:underline">Ribeirão Preto</a> · <a href="/hapvida-sao-bernardo-do-campo" className="text-[#0d1f3c] font-black hover:underline">São Bernardo do Campo</a> · <a href="/hapvida-sorocaba" className="text-[#0d1f3c] font-black hover:underline">Sorocaba</a>
          </p>
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Veja também</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/hapvida" className="text-[#0d1f3c] font-black hover:underline">Plano Hapvida</a> · <a href="/amil" className="text-[#0d1f3c] font-black hover:underline">Amil</a> · <a href="/bradescosaude" className="text-[#0d1f3c] font-black hover:underline">Bradesco Saúde</a> · <a href="/sulamerica" className="text-[#0d1f3c] font-black hover:underline">SulAmérica</a> · <a href="/unimed" className="text-[#0d1f3c] font-black hover:underline">Unimed</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Hapvida em Campinas" />
    </>
  );
};

export default HapvidaCampinasPage;
