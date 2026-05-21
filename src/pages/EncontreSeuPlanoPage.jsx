import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, ShieldCheck, Zap, Heart, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import ScrollCTA from '@/components/ScrollCTA';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const operadoras = [
  { nome: "Amil", path: "/amil", logo: "/logos/amil.webp", cor: "border-indigo-200 hover:border-indigo-400", tag: "bg-indigo-100 text-indigo-700" },
  { nome: "Bradesco Saúde", path: "/bradescosaude", logo: "/logos/bradesco.webp", cor: "border-red-200 hover:border-red-400", tag: "bg-red-100 text-red-700" },
  { nome: "SulAmérica", path: "/sulamerica", logo: "/logos/sulamerica.webp", cor: "border-orange-200 hover:border-orange-400", tag: "bg-orange-100 text-orange-700" },
  { nome: "Hapvida", path: "/hapvida", logo: "/logos/hapvida.webp", cor: "border-orange-200 hover:border-orange-400", tag: "bg-orange-100 text-orange-700" },
  { nome: "NotreDame", path: "/hapvida", logo: "/logos/notredame.webp", cor: "border-orange-200 hover:border-orange-400", tag: "bg-orange-100 text-orange-700" },
  { nome: "Unimed", path: "/unimed", logo: "/logos/unimed.png", cor: "border-green-200 hover:border-green-400", tag: "bg-green-100 text-green-700" },
  { nome: "Porto Saúde", path: "/porto", logo: "/logos/portoseguro.svg", cor: "border-blue-200 hover:border-blue-400", tag: "bg-blue-100 text-blue-700" },
  { nome: "Alice", path: "/alice", logo: "/logos/alice.webp", cor: "border-fuchsia-200 hover:border-fuchsia-400", tag: "bg-fuchsia-100 text-fuchsia-700" },
  { nome: "MedSênior", path: "/medsenior", logo: "/logos/medsenior.webp", cor: "border-emerald-200 hover:border-emerald-400", tag: "bg-emerald-100 text-emerald-700" },
];

const beneficios = [
  { icon: <Heart size={28} className="text-yellow-300" />, titulo: "Comparamos para você", desc: "Analisamos todas as operadoras e encontramos o melhor custo-benefício" },
  { icon: <Zap size={28} className="text-blue-600" />, titulo: "Cotação em minutos", desc: "Resposta rápida direto no seu WhatsApp, sem burocracia" },
  { icon: <Users size={28} className="text-blue-600" />, titulo: "Atendimento humano", desc: "Fala direto com o Rodrigo, corretor especializado em saúde" },
  { icon: <ShieldCheck size={28} className="text-blue-600" />, titulo: "Sem custo adicional", desc: "Nossa consultoria é 100% gratuita para o cliente" },
];

export default function EncontreSeuPlanoPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = (formData.get('whatsapp') || '').replace(/[^0-9]/g, '');
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, whatsapp, produto: 'Plano de Saúde', origem: window.location.pathname }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Encontre seu Plano de Saúde Ideal | Elevance Seguros</title>
        <meta name="description" content="Compare os melhores planos de saúde em São Paulo. Amil, Bradesco, SulAmérica, Unimed, Hapvida e mais. Cotação gratuita via WhatsApp." />
        <meta name="keywords" content="encontre plano de saúde SP, comparar planos saúde São Paulo, melhor plano saúde" />
              <link rel="canonical" href="https://www.elevanceseguros.com/encontre-seu-plano" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Encontre seu Plano", "item": "https://www.elevanceseguros.com/encontre-seu-plano"}
          ]
        })}`}</script>
              <meta property="og:type" content="website" />
        <meta property="og:title" content="Encontre seu Plano de Saúde em SP | Cotação Gratuita - Elevance" />
        <meta property="og:description" content="Compare Amil, Bradesco, SulAmérica, Hapvida, Unimed e mais. Cotação gratuita de plano de saúde em São Paulo." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" />
        <meta property="og:url" content="https://www.elevanceseguros.com/encontre-seu-plano" />
        <meta property="og:site_name" content="Elevance Seguros" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Encontre seu Plano de Saúde em SP | Cotação Gratuita - Elevance" />
        <meta name="twitter:description" content="Compare Amil, Bradesco, SulAmérica, Hapvida, Unimed e mais. Cotação gratuita de plano de saúde em São Paulo." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" />
      </Helmet>

      <CorretorHero operadora="um plano de saúde" />

      {/* HERO */}
      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 bg-[#0d1f3c] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">Consultoria Especializada</span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
                Encontre o plano de saúde <br className="hidden md:block" />
                <span className="text-yellow-300">ideal para você.</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                Trabalhamos com as <span className="text-yellow-300 font-black uppercase">principais operadoras</span> do mercado. Deixe seus dados e encontraremos a melhor opção para o seu perfil e orçamento.
              </p>
              <div className="flex flex-row justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> Atendimento 5 estrelas
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={14} className="text-blue-600" /> 100% Gratuito
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[320px] flex flex-col justify-center">
                
                  {!sent ? (
                    <div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d1f3c] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input name="nome" type="text" required placeholder="Ex: João Silva"
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="Ex: 11 99999-9999"
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <div className="flex items-center justify-center gap-1.5 bg-orange-50 border border-orange-100 rounded-xl py-2 px-3">
                          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse inline-block"></span>
                          <span className="text-[10px] font-black text-orange-600">⚡ Cotação gratuita · Sem compromisso</span>
                        </div>
                        <button type="submit"
                          className="w-full bg-[#0d1f3c] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          RECEBER CONTATO GRATUITO <MessageCircle size={16} />
                        </button>
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">🔒 Dados sigilosos</span>
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">⚡ Resposta em até 2h</span>
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">🚫 Sem spam</span>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <PartyPopper size={40} />
                      </div>
                      <h3 className="text-2xl font-black text-[#0d1f3c] italic">Solicitação Enviada!</h3>
                      <p className="text-slate-500 font-medium text-sm">Estamos abrindo o WhatsApp. Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊</p>
                    </div>
                  )}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERADORAS */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#0d1f3c] italic text-center mb-3">Ou escolha diretamente sua operadora</h2>
          <p className="text-slate-500 text-center font-medium mb-10">Clique para ver planos e cotar diretamente</p>

          {/* Grid desktop: 3x3 | Mobile: Amil wide + 2x2 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Amil — ocupa 2 cols no mobile, 1 no desktop */}
            <Link to="/amil"
              className="col-span-2 md:col-span-1 bg-white border-2 border-indigo-200 hover:border-indigo-400 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all hover:shadow-md hover:-translate-y-0.5">
              <div className="h-14 flex items-center justify-center">
                <img src="/logos/amil.webp" alt="Amil" className="max-h-12 max-w-[140px] object-contain" loading="lazy" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">Amil</span>
            </Link>
            {/* Demais operadoras — 1 col cada */}
            {operadoras.slice(1).map((op) => (
              <Link key={op.nome} to={op.path}
                className={`bg-white border-2 ${op.cor} rounded-2xl p-5 flex flex-col items-center gap-3 transition-all hover:shadow-md hover:-translate-y-0.5`}>
                <div className="h-12 flex items-center justify-center">
                  <img src={op.logo} alt={op.nome} className="max-h-10 max-w-[100px] object-contain" loading="lazy"
                    onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }} />
                  <span style={{ display: "none" }} className="text-slate-700 font-black text-sm">{op.nome}</span>
                </div>
                <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${op.tag}`}>{op.nome}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#0d1f3c] italic text-center mb-3">Por que usar a Elevance?</h2>
          <p className="text-slate-500 text-center font-medium mb-12">Consultoria gratuita, atendimento humano</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <div
                className="bg-white rounded-[30px] p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#0d1f3c] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm leading-relaxed font-medium">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0d1f3c] rounded-[50px] p-12 text-center relative overflow-hidden">
            <h2 className="text-3xl font-black text-white italic mb-3">Ainda com dúvidas?</h2>
            <p className="text-slate-300 font-medium mb-8">Fale com o Rodrigo agora mesmo</p>
            <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero encontrar o melhor plano de saúde`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      

      {/* Comparativo de operadoras */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#0d1f3c]/10 text-[#0d1f3c] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Comparativo</span>
            <h2 className="text-3xl font-black text-[#0d1f3c] italic">Qual operadora é certa para você?</h2>
            <p className="text-slate-500 mt-2 text-sm font-medium">Resumo das principais operadoras disponíveis em São Paulo</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0d1f3c] text-white">
                  <th className="p-4 text-left rounded-tl-2xl text-xs font-black uppercase">Operadora</th>
                  <th className="p-4 text-center text-xs font-black uppercase">Rede</th>
                  <th className="p-4 text-center text-xs font-black uppercase">Preço</th>
                  <th className="p-4 text-center text-xs font-black uppercase">Perfil ideal</th>
                  <th className="p-4 text-center rounded-tr-2xl text-xs font-black uppercase">Destaque</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { op: "Amil", rede: "⭐⭐⭐⭐⭐", preco: "$$$$", perfil: "Quem quer o Einstein / Sírio", destaque: "Maior rede do Brasil" },
                  { op: "Bradesco Saúde", rede: "⭐⭐⭐⭐⭐", preco: "$$$$", perfil: "Cobertura nacional", destaque: "Tradição e abrangência" },
                  { op: "SulAmérica", rede: "⭐⭐⭐⭐", preco: "$$$", perfil: "App e telemedicina", destaque: "Melhor app do mercado" },
                  { op: "Hapvida", rede: "⭐⭐⭐", preco: "$$", perfil: "Menor custo", destaque: "Rede própria controlada" },
                  { op: "Unimed", rede: "⭐⭐⭐⭐", preco: "$$$", perfil: "Confiança e tradição", destaque: "Cooperativa médica" },
                  { op: "Alice", rede: "⭐⭐⭐", preco: "$$$", perfil: "PME digital", destaque: "Melhor experiência digital" },
                  { op: "Porto Saúde", rede: "⭐⭐⭐⭐", preco: "$$$", perfil: "Custo-benefício SP", destaque: "Boa resolução de casos" },
                  { op: "MedSênior", rede: "⭐⭐⭐", preco: "$$", perfil: "A partir de 49 anos", destaque: "Especialista em idosos" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                    <td className="p-4 font-black text-[#0d1f3c]">{row.op}</td>
                    <td className="p-4 text-center">{row.rede}</td>
                    <td className="p-4 text-center font-bold text-slate-600">{row.preco}</td>
                    <td className="p-4 text-center text-slate-600 text-xs">{row.perfil}</td>
                    <td className="p-4 text-center"><span className="bg-blue-100 text-[#0d1f3c] text-[10px] font-black px-3 py-1 rounded-full">{row.destaque}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-slate-400 italic mt-3 text-center">*Avaliação orientativa. Preços e redes variam conforme plano e perfil.</p>
        </div>
      </section>
      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "Como escolher o melhor plano de saúde em São Paulo?", resposta: "Os principais critérios são: rede credenciada (verifique se seus médicos e hospitais favoritos estão incluídos), tipo de acomodação (enfermaria ou apartamento), coparticipação (se há e quanto é cobrado por consulta/exame), abrangência geográfica e, claro, o valor da mensalidade. Um corretor especializado como o Rodrigo pode fazer essa análise gratuitamente." },
    { pergunta: "Plano individual ou coletivo por adesão: qual é melhor?", resposta: "Planos individuais têm reajuste controlado pela ANS, mas são escassos em SP e mais caros. Planos coletivos por adesão têm mais opções, costumam ser mais baratos para famílias e têm redes mais amplas — mas o reajuste é livre. Para a maioria das famílias em SP, o coletivo por adesão oferece melhor custo-benefício." },
    { pergunta: "Quanto tempo leva para ativar o plano de saúde?", resposta: "Após a aprovação cadastral e pagamento da primeira mensalidade, a carteirinha é emitida em 2 a 5 dias úteis. A carência para consultas começa a ser contada a partir da data de início de vigência. Em casos de portabilidade, a cobertura pode ser imediata." },
    { pergunta: "O que é coparticipação no plano de saúde?", resposta: "Coparticipação é o valor fixo ou percentual que o beneficiário paga no momento de usar o plano — por consulta, exame ou internação. Planos com coparticipação têm mensalidade menor, mas podem gerar custos altos para quem usa muito o plano. Ideal para quem usa pouco." }
  ]} />
      <ScrollCTA produto="Plano de Saúde" />
    </>
  );
}
