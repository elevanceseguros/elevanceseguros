import { postsData } from '@/data/posts';
import ScrollCTA from '@/components/ScrollCTA';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Star, ShieldCheck, Zap, Car, Heart, 
  Building2, Wallet, CheckCircle2, Bike, 
  Users, ArrowRight, MessageCircle, Smile, PartyPopper, Home
, BookOpen, FileCheck} from 'lucide-react';

const HomePage = () => {
  const [sent, setSent] = useState(false);
  const fotoHero = "/preview.webp";
  const meuNumero = "5511920144864";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = (formData.get('whatsapp') || '').replace(/[^0-9]/g, '');
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, whatsapp, produto: 'Consultoria Geral', origem: window.location.pathname }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Elevance Seguros | Planos de Saúde e Seguros SP</title>
        <meta name="description" content="Elevance Seguros: consultoria 100% digital em planos de saúde, seguro auto, proteção veicular e consórcios em São Paulo e todo o Brasil. Cotação gratuita via WhatsApp." />
        <link rel="canonical" href="https://www.elevanceseguros.com" />
              <meta property="og:type" content="website" />
        <meta property="og:title" content="Elevance Seguros | Corretora Digital em São Paulo" />
        <meta property="og:description" content="Planos de saúde, seguro auto, vida, residencial, empresarial e consórcios em SP. Cotação gratuita com o corretor Rodrigo Farias." />
        <meta property="og:image" content="https://www.elevanceseguros.com/preview.webp" />
        <meta property="og:url" content="https://www.elevanceseguros.com" />
        <meta property="og:site_name" content="Elevance Seguros" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros | Corretora Digital em São Paulo" />
        <meta name="twitter:description" content="Planos de saúde, seguro auto, vida, residencial, empresarial e consórcios em SP. Cotação gratuita com o corretor Rodrigo Farias." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>
      <div className="min-h-screen bg-white font-sans">
      
      {/* 1. HERO */}
      <section className="relative pt-24 pb-16 sm:pt-28 md:pt-36 overflow-hidden bg-[#114d8e]">
        {/* Fundo com padrão geométrico sutil */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        {/* Gradiente de transição para branco */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* ESQUERDA */}
            <div className="w-full lg:w-3/5 space-y-7 text-center lg:text-left">
              {/* Foto + nome + badge online */}
              <div className="flex flex-row items-center lg:items-center gap-5">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 aspect-square rounded-full overflow-hidden bg-blue-800 shrink-0 shadow-[0_0_0_4px_rgba(255,255,255,0.3),0_0_0_8px_rgba(255,255,255,0.1)]">
                    <img src={fotoHero} alt="Rodrigo Farias" className="w-full h-full object-cover object-top" fetchpriority="high" width="144" height="144" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-400 w-6 h-6 rounded-full border-4 border-[#114d8e] animate-pulse shadow-lg"></div>
                </div>
                <div className="space-y-1 text-left">
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-sm">✦ Consultoria Especializada</span>
                  <p className="text-white/80 text-xs sm:text-sm font-semibold">Rodrigo Farias · Corretor · SP</p>
                </div>
              </div>

              {/* Headline principal */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] italic tracking-tight">
                  Sua tranquilidade é<br/>
                  <span className="text-yellow-300">nosso maior seguro.</span>
                </h1>
                <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Deixe seu contato e nossos <span className="text-white font-black">especialistas</span> encontrarão a melhor proteção para você — de graça e sem burocracia.
                </p>
              </div>

              {/* Números de impacto */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: "+500", label: "Clientes atendidos" },
                  { num: "+15", label: "Operadoras parceiras" },
                  { num: "R$ 0", label: "Taxa de consultoria" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-3 text-center">
                    <div className="text-yellow-300 font-black text-lg sm:text-xl leading-none">{item.num}</div>
                    <div className="text-white/70 text-[9px] sm:text-[10px] font-bold uppercase mt-1 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-row justify-center lg:justify-start gap-3 flex-wrap">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <Star size={13} className="text-yellow-400 fill-yellow-400" /> 5 Estrelas no Google
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={13} className="text-green-400" /> Melhores Operadoras
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.25)] p-8 md:p-10 relative min-h-[340px] flex flex-col justify-center">
                {!sent ? (
                  <>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#114d8e] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10 shadow-lg">
                      <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Iniciar Atendimento
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                      <input name="nome" type="text" required placeholder="Ex: João Silva"
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                      <input name="whatsapp" type="tel" required placeholder="Ex: 11 99999-9999"
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                      <div className="flex items-center justify-center gap-1.5 bg-orange-50 border border-orange-100 rounded-xl py-2 px-3">
                          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse inline-block"></span>
                          <span className="text-[10px] font-black text-orange-600">⚡ Cotação gratuita · Sem compromisso</span>
                        </div>
                      <button type="submit" className="w-full bg-[#114d8e] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                        RECEBER CONTATO GRATUITO <MessageCircle size={16}/>
                      </button>
                      <div className="flex items-center justify-center gap-3 flex-wrap">
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">🔒 Dados sigilosos</span>
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">⚡ Resposta em até 2h</span>
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">🚫 Sem spam</span>
                        </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <PartyPopper size={40} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-[#114d8e] italic">Solicitação Enviada!</h3>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PARCEIROS & OPERADORAS — carrossel infinito */}
      <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Parceiros e Operadoras</p>
        </div>
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track { animation: marquee 30s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>

        {/* Linha 1 — Planos de Saúde */}
        <div className="flex overflow-hidden mb-4">
          <div className="marquee-track flex gap-8 items-center whitespace-nowrap">
            {[
              { src: "/logos/amil.webp",        alt: "Amil" },
              { src: "/logos/bradesco.webp",     alt: "Bradesco Saúde" },
              { src: "/logos/sulamerica.webp",   alt: "SulAmérica" },
              { src: "/logos/hapvida.webp",      alt: "Hapvida" },
              { src: "/logos/unimed.png",       alt: "Unimed" },
              { src: "/logos/alice.webp",       alt: "Alice" },
              { src: "/logos/notredame.webp",    alt: "Notre Dame" },
              { src: "/logos/medsenior.webp",    alt: "MedSênior" },
              { src: "/logos/portoseguro.svg",  alt: "Porto Seguro Saúde" },
              // duplicata para loop infinito
              { src: "/logos/amil.webp",        alt: "Amil" },
              { src: "/logos/bradesco.webp",     alt: "Bradesco Saúde" },
              { src: "/logos/sulamerica.webp",   alt: "SulAmérica" },
              { src: "/logos/hapvida.webp",      alt: "Hapvida" },
              { src: "/logos/unimed.png",       alt: "Unimed" },
              { src: "/logos/alice.webp",       alt: "Alice" },
              { src: "/logos/notredame.webp",    alt: "Notre Dame" },
              { src: "/logos/medsenior.webp",    alt: "MedSênior" },
              { src: "/logos/portoseguro.svg",  alt: "Porto Seguro Saúde" },
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-28 h-12 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={logo.src} alt={logo.alt} className="max-h-10 max-w-[100px] object-contain"  loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Linha 2 — Seguros (direção oposta) */}
        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-8 items-center whitespace-nowrap" style={{animationDirection: "reverse", animationDuration: "25s"}}>
            {[
              { src: "/logos/allianz.webp",       alt: "Allianz" },
              { src: "/logos/bradescoauto.webp",alt: "Bradesco Seguros" },
              { src: "/logos/hdi.webp",            alt: "HDI" },
              { src: "/logos/tokio.webp",          alt: "Tokio Marine" },
              { src: "/logos/portoauto.webp",      alt: "Porto Seguro Auto" },
              { src: "/logos/suhai.webp",          alt: "Suhai" },
              // duplicata
              { src: "/logos/allianz.webp",       alt: "Allianz" },
              { src: "/logos/bradescoauto.webp",alt: "Bradesco Seguros" },
              { src: "/logos/hdi.webp",            alt: "HDI" },
              { src: "/logos/tokio.webp",          alt: "Tokio Marine" },
              { src: "/logos/portoauto.webp",      alt: "Porto Seguro Auto" },
              { src: "/logos/suhai.webp",          alt: "Suhai" },
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-28 h-12 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img src={logo.src} alt={logo.alt} className="max-h-10 max-w-[100px] object-contain"  loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 2. PROTEÇÃO VEICULAR (APVS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0033a0] rounded-[2.5rem] overflow-hidden">

            {/* Logos APVS */}
            <div className="flex items-center justify-center gap-8 px-8 pt-10 pb-6 border-b border-white/10">
              <img src="/logos/apvs_brasil.webp" alt="APVS Brasil" className="h-10" />
              <div className="w-px h-8 bg-white/20"/>
              <img src="/logos/apvs_truck.webp" alt="APVS Truck" className="h-12" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12">
              <div className="lg:w-1/2 space-y-6 text-white italic">
                <Link to="/protecao-veicular" className="block text-3xl md:text-4xl font-black hover:text-yellow-300 transition-colors">Proteção Veicular sem burocracia</Link>
                <p className="text-white/70 font-medium not-italic">Seu carro pode ser roubado ainda hoje — e sem proteção, o prejuízo é 100% seu.</p>
                <div className="flex flex-wrap gap-3 pt-2 not-italic">
                  {["Sem consulta SPC/Serasa", "Rastreador Grátis", "Carro, moto e caminhão"].map(item => (
                    <span key={item} className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full text-[10px] font-bold uppercase">
                      <CheckCircle2 size={12} className="text-yellow-400"/>{item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
                  <p className="text-white/60 text-sm mb-2 uppercase tracking-widest font-bold">Simule agora</p>
                  <h4 className="text-white text-xl md:text-2xl font-black italic mb-8">Quanto custa proteger seu veículo?</h4>
                  <a
                    href={`https://wa.me/${meuNumero}?text=Olá Rodrigo, quero cotar Proteção Veicular APVS`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full bg-yellow-400 hover:bg-yellow-300 text-[#0033a0] font-black py-4 rounded-2xl transition-all uppercase text-xs tracking-widest shadow-lg"
                  >
                    Solicitar Cotação via WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CONSÓRCIOS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#00441f] rounded-[2.5rem] overflow-hidden">

            {/* Header dentro do bloco */}
            <div className="text-center px-8 pt-12 pb-8">
              <img src="/logos/rodobens_white.webp" alt="Rodobens Consórcio" className="h-16 mx-auto mb-5" />
              <h2 className="text-3xl md:text-5xl font-black text-white italic mb-4">
                Conquiste seu bem<br/><span className="text-green-400">sem pagar juros.</span>
              </h2>
              <p className="text-white/60 text-base max-w-xl mx-auto">No financiamento você paga até 2x o valor do bem. No consórcio, você paga só pelo bem — sem juros reais.</p>
            </div>

            {/* Cards dos 3 tipos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pb-8">
              {[
                { emoji: "🏠", tipo: "Imóvel", desc: "Casa, apartamento ou terreno. Cartas de até R$ 500 mil.", valor: "até R$ 500 mil" },
                { emoji: "🚗", tipo: "Veículo", desc: "Carro novo, usado ou moto. Parcelas que cabem no bolso.", valor: "até R$ 200 mil" },
                { emoji: "🛠️", tipo: "Serviços", desc: "Reforma, viagem, cirurgia estética, educação e muito mais.", valor: "até R$ 30 mil" },
              ].map((item) => (
                <div key={item.tipo} className="bg-white/10 hover:bg-white/15 rounded-2xl p-6 transition-all">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="text-base font-black text-white mb-2">Consórcio de {item.tipo}</h3>
                  <p className="text-white/60 text-sm mb-4">{item.desc}</p>
                  <span className="inline-block bg-green-500/20 text-green-300 text-xs font-black px-3 py-1 rounded-full">{item.valor}</span>
                </div>
              ))}
            </div>

            {/* Rodapé com números + CTA */}
            <div className="border-t border-white/10 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
                {[
                  { num: "0%", label: "Juros reais" },
                  { num: "+180k", label: "Consorciados Rodobens" },
                  { num: "60x", label: "Parcelas facilitadas" },
                ].map((d) => (
                  <div key={d.label} className="flex flex-col">
                    <span className="text-3xl font-black text-green-400 italic">{d.num}</span>
                    <span className="text-xs text-white/50 font-medium uppercase tracking-wide">{d.label}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/${meuNumero}?text=Olá Rodrigo, quero simular um Consórcio`}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-lg"
              >
                Simular Agora <ArrowRight size={16}/>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CARDS SERVIÇOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#114d8e] italic text-center mb-3">Qual proteção você ainda não tem?</h2>
          <p className="text-slate-500 text-center font-medium mb-12">Cada uma dessas situações pode acontecer amanhã. Esteja preparado.</p>
          {/* Linha 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { icon: <Heart size={36}/>, title: "Planos de Saúde", desc: "Sem plano de saúde, uma internação pode custar R$ 30.000 ou mais do seu bolso.", btn: "Ver Planos", path: "/encontre-seu-plano", bg: "bg-blue-50", cor: "text-blue-600" },
              { icon: <Smile size={36}/>, title: "Plano Odontológico", desc: "Uma extração ou canal sem plano pode custar até R$ 2.000. Com plano, R$ 0.", btn: "Ver Planos", path: "/odontologico", bg: "bg-sky-50", cor: "text-sky-600" },
              { icon: <Users size={36}/>, title: "Seguro de Vida", desc: "Se você faltar amanhã, sua família consegue manter o padrão de vida?", btn: "Simular", path: "/seguro-vida", bg: "bg-rose-50", cor: "text-rose-600" },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} rounded-[40px] p-8 border border-slate-100 group hover:bg-[#114d8e] transition-all duration-500 flex flex-col`}>
                <div className={`${item.cor} mb-5 group-hover:text-blue-400 transition-colors`}>{item.icon}</div>
                <h3 className="text-xl font-black text-[#114d8e] group-hover:text-white italic mb-2 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors mb-6 flex-1">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <Link to={item.path} className="bg-white text-[#114d8e] font-black py-3 px-5 rounded-2xl text-[10px] uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">{item.btn}</Link>
                  <Link to={item.path} className="text-slate-400 group-hover:text-blue-300 transition-colors"><ArrowRight size={18} /></Link>
                </div>
              </div>
            ))}
          </div>
          {/* Linha 2 — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { icon: <Building2 size={36}/>, title: "Seguro Empresarial", desc: "Um único processo trabalhista ou sinistro pode comprometer anos de trabalho.", btn: "Cotar", path: "/seguro-empresa", bg: "bg-slate-50", cor: "text-slate-600" },
              { icon: <ShieldCheck size={36}/>, title: "Responsabilidade Civil", desc: "Você responde pessoalmente por decisões da sua empresa. Está protegido?", btn: "Cotar", path: "/responsabilidade-civil", bg: "bg-violet-50", cor: "text-violet-600" },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} rounded-[40px] p-8 border border-slate-100 group hover:bg-[#114d8e] transition-all duration-500 flex flex-col`}>
                <div className={`${item.cor} mb-5 group-hover:text-blue-400 transition-colors`}>{item.icon}</div>
                <h3 className="text-xl font-black text-[#114d8e] group-hover:text-white italic mb-2 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors mb-6 flex-1">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <Link to={item.path} className="bg-white text-[#114d8e] font-black py-3 px-5 rounded-2xl text-[10px] uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">{item.btn}</Link>
                  <Link to={item.path} className="text-slate-400 group-hover:text-blue-300 transition-colors"><ArrowRight size={18} /></Link>
                </div>
              </div>
            ))}
          </div>
          {/* Linha 3 — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Home size={36}/>, title: "Seguro Residencial", desc: "Um incêndio ou roubo pode destruir em horas o que você construiu em anos.", btn: "Cotar", path: "/seguro-residencial", bg: "bg-amber-50", cor: "text-amber-600" },
              { icon: <FileCheck size={36}/>, title: "Seguro Garantia", desc: "Exigido em licitações — e muito mais barato que a fiança bancária.", btn: "Cotar", path: "/seguro-garantia", bg: "bg-emerald-50", cor: "text-emerald-600" },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} rounded-[40px] p-8 border border-slate-100 group hover:bg-[#114d8e] transition-all duration-500 flex flex-col`}>
                <div className={`${item.cor} mb-5 group-hover:text-blue-400 transition-colors`}>{item.icon}</div>
                <h3 className="text-xl font-black text-[#114d8e] group-hover:text-white italic mb-2 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors mb-6 flex-1">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <Link to={item.path} className="bg-white text-[#114d8e] font-black py-3 px-5 rounded-2xl text-[10px] uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">{item.btn}</Link>
                  <Link to={item.path} className="text-slate-400 group-hover:text-blue-300 transition-colors"><ArrowRight size={18} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* DEPOIMENTOS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#114d8e] italic mb-2">O que dizem nossos clientes</h2>
            <p className="text-slate-500 font-medium">Pessoas reais, resultados reais</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { inicial: "S", nome: "Simone", local: "São Roque, SP", produto: "Plano de Saúde", texto: "Agradeço de coração todo seu empenho. Precisando, logicamente vou te procurar novamente." },
              { inicial: "W", nome: "Warlei", local: "Ouro Fino, MG", produto: "Seguro Auto", texto: "Agradeço pela atenção! Pelas dúvidas sanadas e por conseguir o melhor preço." },
              { inicial: "P", nome: "Patricia", local: "São Paulo, SP", produto: "Plano de Saúde PME", texto: "O Rodrigo resolveu a contratação do plano da minha empresa em tempo record. Super atencioso e competente!" },
              { inicial: "L", nome: "Lucas", local: "São Paulo, SP", produto: "Consórcio de Imóvel", texto: "Economizei mais de R$ 40 mil em juros optando pelo consórcio. O Rodrigo explicou tudo com paciência e clareza." },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-[30px] p-8 shadow-sm border border-slate-100">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic font-medium">&ldquo;{d.texto}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-[#114d8e] font-black text-sm">{d.inicial}</div>
                  <div>
                    <div className="font-black text-[#114d8e] text-sm">{d.nome}</div>
                    <div className="text-slate-400 text-xs font-medium">{d.local} · {d.produto}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG — 3 últimos posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block bg-[#114d8e]/10 text-[#114d8e] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Blog</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic leading-tight">Conteúdo que <span className="text-[#114d8e]">educa e protege</span></h2>
            </div>
            <a href="/blog" className="hidden md:flex items-center gap-2 text-[#114d8e] font-black text-sm hover:underline shrink-0">
              Ver todos <BookOpen size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...postsData].reverse().slice(0, 3).map(post => (
              <a key={post.id} href={`/blog/${post.slug}`}
                className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-xl transition-all group border border-slate-100">
                <div className="relative overflow-hidden h-44">
                  <img
                    src={post.image} alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   loading="lazy" />
                  <span className="absolute top-3 left-3 bg-[#114d8e] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                  <h3 className="font-black text-slate-900 text-sm leading-snug group-hover:text-[#114d8e] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <span className="inline-block text-[#114d8e] font-black text-xs mt-1 group-hover:underline">Ler artigo →</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <a href="/blog" className="inline-flex items-center gap-2 text-[#114d8e] font-black text-sm hover:underline">
              Ver todos os artigos <BookOpen size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#114d8e] rounded-[50px] py-16 px-8 md:px-16 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
            {/* Padrão de fundo sutil */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
            <div className="lg:w-1/2 space-y-4 z-10 text-center lg:text-left">
              <span className="inline-block bg-white/15 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Atendimento 100% Digital</span>
              <h2 className="text-3xl md:text-5xl font-black leading-tight italic">Cada dia sem proteção <br className="hidden md:block"/>é um risco desnecessário.</h2>
              <p className="text-white/75 font-medium text-base">Rodrigo responde em minutos. Cotação gratuita, sem burocracia, sem compromisso.</p>
            </div>
            <div className="lg:w-1/2 w-full z-10">
              <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/10 text-center space-y-4">
                <p className="text-white font-black text-xl italic">Fale agora com o Rodrigo</p>
                <p className="text-white/60 text-sm">Sem formulário, sem espera. Direto no WhatsApp.</p>
                <a href={`https://wa.me/${meuNumero}`} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl hover:scale-105 w-full">
                  <MessageCircle size={18}/> Chamar no WhatsApp
                </a>
                <div className="flex items-center justify-center gap-4 pt-1">
                  <span className="text-[9px] text-white/50 font-bold">🔒 100% sigiloso</span>
                  <span className="text-[9px] text-white/50 font-bold">⚡ Resposta em minutos</span>
                  <span className="text-[9px] text-white/50 font-bold">🚫 Sem spam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

      <ScrollCTA produto="Seguros e Planos de Saúde" />
    </>
  );
};

export default HomePage;