import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import OperatorQuoteForm from '@/components/OperatorQuoteForm';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CorretorHero from '@/components/CorretorHero';
import OperadoraPlanoSection from '@/components/OperadoraPlanoSection';

const SulamericaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = ["Mais de 120 anos de tradição no Brasil", "Ampla rede credenciada em São Paulo", "Cobertura completa ambulatorial e hospitalar", "Planos individuais, familiares e PME", "Programas de prevenção e bem-estar"];

  return (
    <>
      <Helmet>
        <title>Plano de Saúde SulAmérica em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="SulAmérica Saúde em São Paulo: planos completos, ampla rede credenciada e atendimento personalizado. Cotação gratuita." />
        <meta name="keywords" content="SulAmérica saúde SP, plano SulAmérica São Paulo, cotação SulAmérica" />
        <link rel="canonical" href="https://elevanceseguros.com/sulamerica" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "SulAmérica Saúde", "item": "https://www.elevanceseguros.com/sulamerica"}
          ]
        })}`}</script>
      </Helmet>

      <CorretorHero operadora="SulAmérica" />

      {/* Logo Section */}
      <div className="pt-6 pb-4 flex justify-center items-center bg-white">
        <motion.img 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/logos/sulamerica.png" 
          alt="Logo SulAmérica" 
          className="max-h-16 w-auto object-contain mx-auto" style={{maxWidth:"180px"}} loading="lazy" decoding="async"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-12 md:py-16 overflow-hidden bg-[#1e3a5f]">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-blue-100 text-yellow-300 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Mais de 120 anos de história
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Tradição e cuidado com a <span className="text-[#114d8e]">SulAmérica</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A SulAmérica é uma das seguradoras mais tradicionais do Brasil, com mais de 120 anos de história. Seus planos de saúde oferecem ampla rede credenciada e cobertura completa em São Paulo.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <OperatorQuoteForm operatorName="SulAmérica" />
            </motion.div>
          </div>
        </div>
      </section>

      <OperadoraPlanoSection
        operadora="SulAmérica"
        cor="#ea580c"
        tabela={[
          {idade: '00 a 18', enf: 'R$ 255,99', apto: 'R$ 358,40'},
          {idade: '19 a 23', enf: 'R$ 304,10', apto: 'R$ 425,80'},
          {idade: '24 a 28', enf: 'R$ 364,90', apto: 'R$ 511,00'}
        ]}
        hospitais={[
          {nome: 'Hospital Alemão Oswaldo Cruz', regiao: 'Bela Vista, SP', desc: 'Alta complexidade, oncologia e cardiologia.'},
          {nome: 'Hospital 9 de Julho', regiao: 'Jardins, SP', desc: 'Cirurgias, UTI e maternidade.'},
          {nome: 'Hospital São Camilo', regiao: 'Pompeia, SP', desc: 'Emergência 24h, internações e cirurgias.'},
          {nome: 'Hospital São Luiz Morumbi', regiao: 'Morumbi, SP', desc: 'Rede Rede D-Or — alta complexidade.'}
        ]}
        depoimento={{
          inicial: "F",
          nome: "Fernanda",
          local: "São Bernardo, SP",
          texto: "Precisava de um plano com o Oswaldo Cruz e o Rodrigo me mostrou as melhores opções da SulAmérica. Fechei em menos de 2 dias!"
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Como funciona o plano SulAmérica?</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">A SulAmérica oferece planos de saúde com foco na prevenção e no cuidado integral. Com uma das maiores redes credenciadas do país, garante acesso a médicos, hospitais e laboratórios de qualidade.</p>
            <p className="mb-4">
              Na Elevance Seguros, nosso corretor especializado analisa seu perfil e encontra a melhor opção de plano SulAmérica para você e sua família, com o melhor custo-benefício do mercado.
            </p>
          </div>
          <div className="mt-10">
            <a href="https://wa.me/5511920144864?text=Olá Rodrigo, quero cotar um plano SulAmérica"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#114d8e] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all">
              <MessageCircle size={16} /> Cotar via WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "SulAmérica Saúde é boa? Qual sua reputação?", resposta: "A SulAmérica é uma das maiores e mais tradicionais operadoras do Brasil, com mais de 100 anos de mercado. É reconhecida pela ampla rede credenciada em SP, atendimento digital avançado (app SulAmérica Saúde) e boa resolução de sinistros. Bem avaliada no mercado corporativo." },
    { pergunta: "A SulAmérica Saúde cobre psicologia e psiquiatria?", resposta: "Sim! Por determinação da ANS, todos os planos de saúde devem cobrir consultas com psicólogos e psiquiatras, além de internações em clínicas psiquiátricas quando necessário. A SulAmérica tem ampla rede de saúde mental em São Paulo." },
    { pergunta: "SulAmérica tem telemedicina?", resposta: "Sim! A SulAmérica oferece telemedicina (consulta médica por vídeo) pelo aplicativo, disponível 24h para diversas especialidades. É um diferencial importante para quem precisa de atendimento rápido sem sair de casa." },
    { pergunta: "Posso usar o plano SulAmérica em outro estado?", resposta: "Depende do plano contratado. Planos com abrangência nacional permitem atendimento em toda a rede credenciada SulAmérica no Brasil. Planos com abrangência regional (só SP ou Grande SP) têm cobertura limitada fora da área contratada, exceto em emergências." }
  ]} />

      <FloatingWhatsApp />


      {/* Links internos — outras operadoras */}
      <section className="py-8 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Também trabalhamos com</p>
          <p className="text-sm font-medium text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <a href="/amil" className="text-[#114d8e] font-black hover:underline">Amil</a> · <a href="/bradescosaude" className="text-[#114d8e] font-black hover:underline">Bradesco Saúde</a> · <a href="/hapvida" className="text-[#114d8e] font-black hover:underline">Hapvida</a> · <a href="/alice" className="text-[#114d8e] font-black hover:underline">Alice</a> · <a href="/porto" className="text-[#114d8e] font-black hover:underline">Porto Saúde</a>
          </p>
        </div>
      </section>
      <ScrollCTA produto="Plano de Saúde Sulamerica" />
    </>
  );
};

export default SulamericaPage;
