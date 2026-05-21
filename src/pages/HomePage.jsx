import { postsData } from '@/data/posts';
import ScrollCTA from '@/components/ScrollCTA';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Star, ShieldCheck, Zap, Car, Heart, 
  Building2, CheckCircle2,
  Users, ArrowRight, MessageCircle, Smile, PartyPopper, Home,
  Lock, PhoneCall, Layers, Wrench, BookOpen, FileCheck, Quote} from 'lucide-react';

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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros | Corretora Digital em São Paulo" />
        <meta name="twitter:description" content="Planos de saúde, seguro auto, vida, residencial, empresarial e consórcios em SP." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <div className="min-h-screen font-sans" style={{background: '#F5F7FA'}}>

      {/* ═══════════════════════════════
          HERO
      ═══════════════════════════════ */}
      <section className="relative pt-24 pb-0 sm:pt-28 md:pt-32 overflow-hidden"
        style={{background: 'linear-gradient(160deg, #071B34 0%, #0a2244 60%, #0d2a55 100%)'}}>

        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200,169,107,0.08) 0%, transparent 70%)'}}></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{background: 'radial-gradient(circle, rgba(200,169,107,0.05) 0%, transparent 70%)'}}></div>
        <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage: 'radial-gradient(circle, #C8A96B 1px, transparent 1px)', backgroundSize: '48px 48px'}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{background: 'linear-gradient(to top, #F5F7FA, transparent)'}}></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pb-24">

            {/* ESQUERDA */}
            <div className="w-full lg:w-[55%] space-y-8 text-center lg:text-left">
              <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden"
                    style={{boxShadow: '0 0 0 2px rgba(200,169,107,0.5), 0 0 0 6px rgba(200,169,107,0.12), 0 0 30px rgba(200,169,107,0.15)'}}>
                    <img src={fotoHero} alt="Rodrigo Farias" className="w-full h-full object-cover object-top" fetchpriority="high" width="96" height="96" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-[3px] border-[#071B34] animate-pulse"></div>
                </div>
                <div className="space-y-1 text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest"
                    style={{background: 'rgba(200,169,107,0.12)', border: '1px solid rgba(200,169,107,0.3)', color: '#E8C98A'}}>
                    ✦ Consultoria Especializada
                  </div>
                  <p className="text-xs font-medium" style={{color: 'rgba(255,255,255,0.5)'}}>Rodrigo Farias · Corretor · SP</p>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="font-sora text-[2.6rem] sm:text-5xl md:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight">
                  Proteção inteligente<br/>
                  <span className="text-gold-gradient-bright italic">para sua vida.</span>
                </h1>
                <p className="text-base md:text-lg max-w-lg mx-auto lg:mx-0 font-light leading-relaxed" style={{color: 'rgba(255,255,255,0.55)'}}>
                  Planos de saúde, seguros e consórcios com atendimento <span className="font-semibold" style={{color: 'rgba(255,255,255,0.9)'}}>humanizado e consultivo</span> — sem burocracia.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto lg:mx-0">
                {[
                  { num: "+500", label: "Clientes" },
                  { num: "+15", label: "Operadoras" },
                  { num: "R$ 0", label: "Consultoria" },
                ].map((item, i) => (
                  <div key={i} className="text-center rounded-2xl py-3 px-2"
                    style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(200,169,107,0.15)'}}>
                    <div className="text-gold-gradient font-sora font-bold text-lg leading-none mb-1">{item.num}</div>
                    <div className="text-[9px] font-medium uppercase tracking-wider" style={{color: 'rgba(255,255,255,0.4)'}}>{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold"
                  style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)'}}>
                  <Star size={11} className="text-yellow-400 fill-yellow-400" /> 5 Estrelas no Google
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold"
                  style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.65)'}}>
                  <ShieldCheck size={11} className="text-green-400" /> Melhores Operadoras
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="w-full lg:w-[45%]">
              <div className="relative rounded-[32px] p-8 md:p-10"
                style={{background: '#ffffff', boxShadow: '0 30px 80px rgba(7,27,52,0.35), 0 0 0 1px rgba(200,169,107,0.12)'}}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10"
                  style={{background: '#071B34', color: '#E8C98A', border: '1px solid rgba(200,169,107,0.35)'}}>
                  <Zap size={12} style={{color: '#C8A96B'}} /> Cotação Gratuita
                </div>
                {!sent ? (
                  <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                    <input name="nome" type="text" required placeholder="Seu nome"
                      className="w-full rounded-xl py-4 px-5 text-sm outline-none transition-all font-medium"
                      style={{background: '#F5F7FA', border: '1.5px solid #E8EDF2', color: '#071B34'}}
                      onFocus={e => e.target.style.borderColor = '#C8A96B'}
                      onBlur={e => e.target.style.borderColor = '#E8EDF2'} />
                    <input name="whatsapp" type="tel" required placeholder="WhatsApp com DDD"
                      className="w-full rounded-xl py-4 px-5 text-sm outline-none transition-all font-medium"
                      style={{background: '#F5F7FA', border: '1.5px solid #E8EDF2', color: '#071B34'}}
                      onFocus={e => e.target.style.borderColor = '#C8A96B'}
                      onBlur={e => e.target.style.borderColor = '#E8EDF2'} />
                    <div className="flex items-center justify-center gap-1.5 rounded-xl py-2.5 px-3"
                      style={{background: '#FFF8EE', border: '1px solid #F0E0C0'}}>
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse inline-block"></span>
                      <span className="text-[10px] font-semibold" style={{color: '#9B7A3A'}}>⚡ Cotação gratuita · Sem compromisso</span>
                    </div>
                    <button type="submit"
                      className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
                      style={{background: 'linear-gradient(135deg, #071B34 0%, #0d2a55 100%)', color: '#E8C98A'}}>
                      Receber Contato Gratuito <ArrowRight size={14}/>
                    </button>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <span className="text-[9px] font-medium" style={{color: '#A0AABA'}}>🔒 Dados sigilosos</span>
                      <span className="text-[9px] font-medium" style={{color: '#A0AABA'}}>⚡ Resposta em até 2h</span>
                      <span className="text-[9px] font-medium" style={{color: '#A0AABA'}}>🚫 Sem spam</span>
                    </div>
                  </form>
                ) : (
                  <div className="text-center space-y-6 py-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{background: '#F0FFF4', color: '#16a34a'}}>
                      <PartyPopper size={32} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sora text-xl font-bold" style={{color: '#071B34'}}>Solicitação Enviada!</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊</p>
                    </div>
                    <a href={`https://wa.me/${meuNumero}`} target="_blank" rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-white bg-green-500 hover:bg-green-400 transition-all">
                      <MessageCircle size={14}/> Falar agora pelo WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          PARCEIROS
      ═══════════════════════════════ */}
      <section className="py-10 border-y overflow-hidden" style={{background: '#ffffff', borderColor: '#EAEEF3'}}>
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest" style={{color: '#A0AABA'}}>Parceiros e Operadoras</p>
        </div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee-track { animation: marquee 30s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="flex overflow-hidden mb-4">
          <div className="marquee-track flex gap-8 items-center whitespace-nowrap">
            {[
              {src:"/logos/amil.webp",alt:"Amil"},{src:"/logos/bradesco.webp",alt:"Bradesco Saúde"},
              {src:"/logos/sulamerica.webp",alt:"SulAmérica"},{src:"/logos/hapvida.webp",alt:"Hapvida"},
              {src:"/logos/unimed.png",alt:"Unimed"},{src:"/logos/alice.webp",alt:"Alice"},
              {src:"/logos/notredame.webp",alt:"Notre Dame"},{src:"/logos/medsenior.webp",alt:"MedSênior"},
              {src:"/logos/portoseguro.svg",alt:"Porto Seguro Saúde"},
              {src:"/logos/amil.webp",alt:"Amil"},{src:"/logos/bradesco.webp",alt:"Bradesco Saúde"},
              {src:"/logos/sulamerica.webp",alt:"SulAmérica"},{src:"/logos/hapvida.webp",alt:"Hapvida"},
              {src:"/logos/unimed.png",alt:"Unimed"},{src:"/logos/alice.webp",alt:"Alice"},
              {src:"/logos/notredame.webp",alt:"Notre Dame"},{src:"/logos/medsenior.webp",alt:"MedSênior"},
              {src:"/logos/portoseguro.svg",alt:"Porto Seguro Saúde"},
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-28 h-12 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                <img src={logo.src} alt={logo.alt} className="max-h-10 max-w-[100px] object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-8 items-center whitespace-nowrap" style={{animationDirection:'reverse',animationDuration:'25s'}}>
            {[
              {src:"/logos/allianz.webp",alt:"Allianz"},{src:"/logos/bradescoauto.webp",alt:"Bradesco Seguros"},
              {src:"/logos/hdi.webp",alt:"HDI"},{src:"/logos/tokio.webp",alt:"Tokio Marine"},
              {src:"/logos/portoauto.webp",alt:"Porto Seguro Auto"},{src:"/logos/suhai.webp",alt:"Suhai"},
              {src:"/logos/allianz.webp",alt:"Allianz"},{src:"/logos/bradescoauto.webp",alt:"Bradesco Seguros"},
              {src:"/logos/hdi.webp",alt:"HDI"},{src:"/logos/tokio.webp",alt:"Tokio Marine"},
              {src:"/logos/portoauto.webp",alt:"Porto Seguro Auto"},{src:"/logos/suhai.webp",alt:"Suhai"},
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-28 h-12 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                <img src={logo.src} alt={logo.alt} className="max-h-10 max-w-[100px] object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          PROTEÇÃO VEICULAR
      ═══════════════════════════════ */}
      <section className="py-20" style={{background: '#F5F7FA'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[2rem] overflow-hidden" style={{background: '#0033a0'}}>
            <div className="flex items-center justify-center gap-8 px-8 pt-10 pb-6 border-b border-white/10">
              <img src="/logos/apvs_brasil.webp" alt="APVS Brasil" className="h-10" />
              <div className="w-px h-8 bg-white/20"/>
              <img src="/logos/apvs_truck.webp" alt="APVS Truck" className="h-12" />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12">
              <div className="lg:w-1/2 space-y-5 text-white">
                <Link to="/protecao-veicular" className="block font-sora text-3xl md:text-4xl font-bold italic hover:opacity-80 transition-opacity leading-tight">
                  Proteção Veicular<br/>sem burocracia
                </Link>
                <p className="font-light leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>Seu carro pode ser roubado ainda hoje — e sem proteção, o prejuízo é 100% seu.</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Sem consulta SPC/Serasa", "Rastreador Grátis", "Carro, moto e caminhão"].map(item => (
                    <span key={item} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase bg-white/10">
                      <CheckCircle2 size={11} className="text-yellow-400"/>{item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="rounded-2xl p-8 text-center" style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)'}}>
                  <p className="text-xs mb-2 uppercase tracking-widest font-semibold" style={{color: 'rgba(255,255,255,0.4)'}}>Simule agora</p>
                  <h4 className="font-sora text-white text-xl font-bold italic mb-6">Quanto custa proteger seu veículo?</h4>
                  <a href={`https://wa.me/${meuNumero}?text=Olá Rodrigo, quero cotar Proteção Veicular APVS`}
                    target="_blank" rel="noreferrer"
                    className="block w-full font-bold py-4 rounded-xl transition-all uppercase text-xs tracking-widest hover:opacity-90"
                    style={{background: '#C8A96B', color: '#071B34'}}>
                    Solicitar Cotação via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          LOOVI
      ═══════════════════════════════ */}
      <section className="py-16" style={{background: '#F5F7FA'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[2rem] overflow-hidden p-8 md:p-12" style={{background: 'linear-gradient(135deg, #1a1f3c 0%, #2d3580 100%)'}}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <img src="/logos/loovi.webp" alt="Loovi" className="h-7" />
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{background: 'rgba(90,120,255,0.2)', border: '1px solid rgba(90,120,255,0.3)', color: '#a0b4ff'}}>
                  <span className="w-1.5 h-1.5 bg-[#5A78FF] rounded-full animate-pulse inline-block"></span>
                  Parceiro Oficial
                </span>
              </div>
              <a href="https://loovi.com.br/52562/Q0FUX0FERVNBT18yOTk=?utm_source=escvir&utm_medium=meusite"
                target="_blank" rel="noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-xs uppercase tracking-widest hover:opacity-90 transition-all"
                style={{background: 'linear-gradient(135deg, #5A78FF, #54DEF8)'}}>
                Cotar 100% Online <ArrowRight size={13}/>
              </a>
            </div>
            <h2 className="font-sora text-2xl md:text-4xl font-bold text-white italic leading-tight mb-8">
              Seguro auto completo, sem análise de perfil.<br/>
              <span style={{color: '#54DEF8'}}>Ative em 5 minutos.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { icon: <ShieldCheck size={18} style={{color:'#54DEF8'}}/>, titulo: "Colisão", desc: "Pagamento integral ou parcial" },
                { icon: <Lock size={18} style={{color:'#54DEF8'}}/>, titulo: "Furto e Roubo", desc: "100% da tabela FIPE" },
                { icon: <PhoneCall size={18} style={{color:'#54DEF8'}}/>, titulo: "Assistência 24h", desc: "Reboque em todo o Brasil" },
                { icon: <Car size={18} style={{color:'#54DEF8'}}/>, titulo: "Carro Reserva", desc: "7 dias incluídos" },
                { icon: <Layers size={18} style={{color:'#54DEF8'}}/>, titulo: "Vidros", desc: "Para-brisa e laterais" },
              ].map(item => (
                <div key={item.titulo} className="rounded-2xl p-4 transition-all hover:bg-white/10"
                  style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)'}}>
                  <div className="mb-2">{item.icon}</div>
                  <p className="text-white font-bold text-sm italic mb-1">{item.titulo}</p>
                  <p className="text-xs leading-tight" style={{color: 'rgba(255,255,255,0.45)'}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CONSÓRCIOS
      ═══════════════════════════════ */}
      <section className="py-20 overflow-hidden" style={{background: '#F5F7FA'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[2rem] overflow-hidden" style={{background: '#00441f'}}>
            <div className="text-center px-8 pt-12 pb-8">
              <div className="flex items-center justify-center gap-6 mb-3">
                <img src="/logos/rodobens_white.webp" alt="Rodobens" className="h-8 opacity-90" />
                <div className="w-px h-6 bg-white/20"/>
                <img src="/logos/embracon_white.webp" alt="Embracon" className="h-8 opacity-90" />
              </div>
              <p className="text-[10px] uppercase tracking-widest font-semibold mb-6" style={{color: 'rgba(255,255,255,0.35)'}}>Parceiros das maiores administradoras do Brasil</p>
              <h2 className="font-sora text-3xl md:text-5xl font-bold text-white italic mb-4">
                Conquiste seu bem<br/><span className="text-green-400">sem pagar juros.</span>
              </h2>
              <p className="text-base max-w-xl mx-auto font-light" style={{color: 'rgba(255,255,255,0.55)'}}>No financiamento você paga até 2x o valor do bem. No consórcio, você paga só pelo bem.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pb-8">
              {[
                { icon: <Home size={22} className="text-green-300"/>, tipo: "Imóvel", desc: "Casa, apartamento ou terreno.", valor: "até R$ 500 mil" },
                { icon: <Car size={22} className="text-green-300"/>, tipo: "Veículo", desc: "Carro novo, usado ou moto.", valor: "até R$ 200 mil" },
                { icon: <Wrench size={22} className="text-green-300"/>, tipo: "Serviços", desc: "Reforma, viagem, educação e mais.", valor: "até R$ 30 mil" },
              ].map((item) => (
                <div key={item.tipo} className="rounded-2xl p-6 transition-all hover:bg-white/10"
                  style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)'}}>
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-sora text-sm font-bold text-white italic mb-1">Consórcio de {item.tipo}</h3>
                  <p className="text-xs leading-relaxed mb-3" style={{color: 'rgba(255,255,255,0.5)'}}>{item.desc}</p>
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full" style={{background: 'rgba(74,222,128,0.15)', color: '#4ade80'}}>{item.valor}</span>
                </div>
              ))}
            </div>
            <div className="border-t px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{borderColor: 'rgba(255,255,255,0.08)'}}>
              <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
                {[
                  { num: "0%", label: "Juros reais" },
                  { num: "+180k", label: "Consorciados Rodobens" },
                  { num: "60x", label: "Parcelas facilitadas" },
                ].map((d) => (
                  <div key={d.label} className="flex flex-col">
                    <span className="font-sora text-3xl font-bold text-green-400 italic">{d.num}</span>
                    <span className="text-[10px] font-medium uppercase tracking-wide" style={{color: 'rgba(255,255,255,0.4)'}}>{d.label}</span>
                  </div>
                ))}
              </div>
              <a href={`https://wa.me/${meuNumero}?text=Olá Rodrigo, quero simular um Consórcio`}
                target="_blank" rel="noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:scale-105"
                style={{background: '#16a34a'}}>
                Simular Agora <ArrowRight size={15}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CARDS DE SERVIÇO — redesenhados
      ═══════════════════════════════ */}
      <section className="py-24" style={{background: '#ffffff'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
              style={{background: 'rgba(7,27,52,0.06)', color: '#071B34'}}>Proteções</span>
            <h2 className="font-sora text-3xl md:text-4xl font-bold italic" style={{color: '#071B34'}}>Qual proteção você ainda não tem?</h2>
          </div>
          <p className="text-center font-light mb-14" style={{color: '#7A8899'}}>Cada uma dessas situações pode acontecer amanhã. Esteja preparado.</p>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {[
              { icon: <Heart size={26}/>, title: "Planos de Saúde", desc: "Sem plano, uma internação pode custar R$ 30.000 ou mais do seu bolso.", cta: "Proteger minha saúde", path: "/encontre-seu-plano", accent: "#3B82F6" },
              { icon: <Smile size={26}/>, title: "Plano Odontológico", desc: "Uma extração ou canal sem plano pode custar até R$ 2.000. Com plano, R$ 0.", cta: "Ver planos odonto", path: "/odontologico", accent: "#0EA5E9" },
              { icon: <Users size={26}/>, title: "Seguro de Vida", desc: "Se você faltar amanhã, sua família consegue manter o padrão de vida?", cta: "Proteger minha família", path: "/seguro-vida", accent: "#EF4444" },
            ].map((item, i) => (
              <Link key={i} to={item.path}
                className="group rounded-[2rem] p-8 flex flex-col transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
                style={{background: '#F8FAFB', border: '1.5px solid #EAEEF3', boxShadow: '0 2px 12px rgba(7,27,52,0.04)'}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{background: `${item.accent}15`, color: item.accent}}>{item.icon}</div>
                <h3 className="font-sora text-lg font-bold italic mb-2" style={{color: '#071B34'}}>{item.title}</h3>
                <p className="text-sm font-light leading-relaxed mb-6 flex-1" style={{color: '#7A8899'}}>{item.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-3" style={{color: item.accent}}>
                  {item.cta} <ArrowRight size={13}/>
                </div>
              </Link>
            ))}
          </div>

          {/* 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {[
              { icon: <Building2 size={26}/>, title: "Seguro Empresarial", desc: "Um único processo trabalhista ou sinistro pode comprometer anos de trabalho.", cta: "Proteger minha empresa", path: "/seguro-empresa", accent: "#64748B" },
              { icon: <ShieldCheck size={26}/>, title: "Responsabilidade Civil", desc: "Você responde pessoalmente por decisões da sua empresa. Está protegido?", cta: "Entender minha exposição", path: "/responsabilidade-civil", accent: "#7C3AED" },
            ].map((item, i) => (
              <Link key={i} to={item.path}
                className="group rounded-[2rem] p-8 flex flex-col transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
                style={{background: '#F8FAFB', border: '1.5px solid #EAEEF3', boxShadow: '0 2px 12px rgba(7,27,52,0.04)'}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{background: `${item.accent}15`, color: item.accent}}>{item.icon}</div>
                <h3 className="font-sora text-lg font-bold italic mb-2" style={{color: '#071B34'}}>{item.title}</h3>
                <p className="text-sm font-light leading-relaxed mb-6 flex-1" style={{color: '#7A8899'}}>{item.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-3" style={{color: item.accent}}>
                  {item.cta} <ArrowRight size={13}/>
                </div>
              </Link>
            ))}
          </div>

          {/* 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: <Home size={26}/>, title: "Seguro Residencial", desc: "Um incêndio ou roubo pode destruir em horas o que você construiu em anos.", cta: "Proteger minha casa", path: "/seguro-residencial", accent: "#D97706" },
              { icon: <FileCheck size={26}/>, title: "Seguro Garantia", desc: "Exigido em licitações — e muito mais barato que a fiança bancária.", cta: "Simular agora", path: "/seguro-garantia", accent: "#059669" },
            ].map((item, i) => (
              <Link key={i} to={item.path}
                className="group rounded-[2rem] p-8 flex flex-col transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
                style={{background: '#F8FAFB', border: '1.5px solid #EAEEF3', boxShadow: '0 2px 12px rgba(7,27,52,0.04)'}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{background: `${item.accent}15`, color: item.accent}}>{item.icon}</div>
                <h3 className="font-sora text-lg font-bold italic mb-2" style={{color: '#071B34'}}>{item.title}</h3>
                <p className="text-sm font-light leading-relaxed mb-6 flex-1" style={{color: '#7A8899'}}>{item.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-3" style={{color: item.accent}}>
                  {item.cta} <ArrowRight size={13}/>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          SEÇÃO RODRIGO — presença humana
      ═══════════════════════════════ */}
      <section className="py-24 overflow-hidden" style={{background: '#F5F7FA'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row"
            style={{background: 'linear-gradient(135deg, #071B34 0%, #0d2a55 100%)', boxShadow: '0 40px 100px rgba(7,27,52,0.25)'}}>

            {/* Foto */}
            <div className="lg:w-2/5 relative overflow-hidden min-h-[280px] lg:min-h-0">
              <img src={fotoHero} alt="Rodrigo Farias" className="w-full h-full object-cover object-top opacity-80" loading="lazy"/>
              <div className="absolute inset-0" style={{background: 'linear-gradient(to right, transparent 60%, #0d2a55 100%)'}}></div>
              <div className="absolute inset-0" style={{background: 'linear-gradient(to top, #071B34 0%, transparent 40%)'}}></div>
            </div>

            {/* Conteúdo */}
            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center space-y-6 relative">
              <div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(to right, rgba(200,169,107,0.4), transparent)'}}></div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit"
                style={{background: 'rgba(200,169,107,0.1)', border: '1px solid rgba(200,169,107,0.25)', color: '#E8C98A'}}>
                ✦ Quem está por trás da Elevance
              </div>

              <h2 className="font-sora text-2xl md:text-3xl font-bold italic text-white leading-tight">
                Atendimento consultivo,<br/>
                <span className="text-gold-gradient-bright">sem enrolação.</span>
              </h2>

              <p className="text-base font-light leading-relaxed" style={{color: 'rgba(255,255,255,0.6)'}}>
                Sou o Rodrigo Farias, corretor de seguros com atuação 100% digital. Não vendo produto — encontro a melhor proteção para o seu momento de vida, com transparência e sem pressão.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "+500", label: "Famílias protegidas" },
                  { num: "+15", label: "Operadoras parceiras" },
                  { num: "100%", label: "Digital e sem burocracia" },
                  { num: "R$ 0", label: "Taxa de consultoria" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="font-sora font-bold text-lg text-gold-gradient">{item.num}</span>
                    <span className="text-xs font-light" style={{color: 'rgba(255,255,255,0.5)'}}>{item.label}</span>
                  </div>
                ))}
              </div>

              <a href={`https://wa.me/${meuNumero}?text=Olá Rodrigo, quero conversar sobre proteção`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 w-fit text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:scale-105"
                style={{background: '#16a34a', boxShadow: '0 4px 15px rgba(22,163,74,0.3)'}}>
                <MessageCircle size={14}/> Falar com o Rodrigo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          DEPOIMENTOS — estilo WhatsApp
      ═══════════════════════════════ */}
      <section className="py-24" style={{background: '#ffffff'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
              style={{background: 'rgba(7,27,52,0.06)', color: '#071B34'}}>Depoimentos reais</span>
            <h2 className="font-sora text-3xl md:text-4xl font-bold italic" style={{color: '#071B34'}}>O que dizem nossos clientes</h2>
            <p className="mt-2 font-light" style={{color: '#7A8899'}}>Mensagens reais recebidas no WhatsApp da Elevance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                avatar: "/avatars/simone.png",
                nome: "Simone",
                local: "São Roque, SP",
                produto: "Plano de Saúde",
                texto: "Agradeço de coração todo seu empenho. Precisando, logicamente vou te procurar novamente.",
                data: "Dez 2025",
                cor: "#2A52A0"
              },
              {
                avatar: "/avatars/warlei.png",
                nome: "Warlei",
                local: "Ouro Fino, MG",
                produto: "Seguro Auto",
                texto: "Agradeço pela atenção! Pelas dúvidas sanadas e por conseguir o melhor preço.",
                data: "Fev 2026",
                cor: "#1E6450"
              },
              {
                avatar: "/avatars/patricia.png",
                nome: "Patricia",
                local: "São Paulo, SP",
                produto: "Plano de Saúde PME",
                texto: "O Rodrigo resolveu a contratação do plano da minha empresa em tempo record. Super atencioso e competente!",
                data: "Mar 2026",
                cor: "#782860"
              },
              {
                avatar: "/avatars/lucas.png",
                nome: "Lucas",
                local: "São Paulo, SP",
                produto: "Consórcio de Imóvel",
                texto: "Economizei mais de R$ 40 mil em juros optando pelo consórcio. O Rodrigo explicou tudo com paciência e clareza.",
                data: "Abr 2026",
                cor: "#3C328C"
              },
            ].map((d, i) => (
              <div key={i} className="rounded-[1.75rem] overflow-hidden"
                style={{background: '#F8FAFB', border: '1.5px solid #EAEEF3', boxShadow: '0 4px 20px rgba(7,27,52,0.06)'}}>

                {/* Header WhatsApp style */}
                <div className="flex items-center gap-3 px-5 py-3"
                  style={{background: '#075E54', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                  <img src={d.avatar} alt={d.nome} className="w-8 h-8 rounded-full object-cover" loading="lazy"/>
                  <div className="flex-1">
                    <p className="text-white font-bold text-xs">{d.nome}</p>
                    <p className="text-green-300 text-[10px] font-medium">{d.local} · {d.produto}</p>
                  </div>
                  <span className="text-[9px] font-medium" style={{color: 'rgba(255,255,255,0.5)'}}>{d.data}</span>
                </div>

                {/* Bubble de mensagem */}
                <div className="p-5">
                  <div className="relative ml-2">
                    {/* Bolinha WhatsApp */}
                    <div className="absolute -left-2 top-2 w-3 h-3 rounded-full" style={{background: '#DCF8C6'}}></div>
                    <div className="rounded-2xl rounded-tl-sm p-4" style={{background: '#DCF8C6'}}>
                      <p className="text-sm font-light leading-relaxed" style={{color: '#1a1a1a'}}>{d.texto}</p>
                      <div className="flex items-center justify-end gap-1 mt-2">
                        <span className="text-[9px]" style={{color: 'rgba(0,0,0,0.4)'}}>{d.data}</span>
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                          <path d="M1 5l3 3 9-8" stroke="#34B7F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 5l3 3 5-7" stroke="#34B7F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer com estrelas */}
                <div className="px-5 pb-4 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                    style={{background: 'rgba(7,27,52,0.06)', color: '#071B34'}}>via WhatsApp</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          BLOG
      ═══════════════════════════════ */}
      <section className="py-24" style={{background: '#F5F7FA'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
                style={{background: 'rgba(7,27,52,0.06)', color: '#071B34'}}>Blog</span>
              <h2 className="font-sora text-3xl md:text-4xl font-bold italic leading-tight" style={{color: '#071B34'}}>
                Conteúdo que <span style={{color: '#C8A96B'}}>educa e protege</span>
              </h2>
            </div>
            <a href="/blog" className="hidden md:flex items-center gap-2 font-bold text-sm hover:opacity-70 transition-opacity shrink-0" style={{color: '#071B34'}}>
              Ver todos <BookOpen size={15} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...postsData].reverse().slice(0, 3).map(post => (
              <a key={post.id} href={`/blog/${post.slug}`}
                className="rounded-[2rem] overflow-hidden transition-all duration-300 group hover:-translate-y-1"
                style={{background: '#ffffff', border: '1.5px solid #EAEEF3', boxShadow: '0 2px 12px rgba(7,27,52,0.04)'}}>
                <div className="relative overflow-hidden h-44">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
                  <span className="absolute top-3 left-3 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{background: '#071B34'}}>{post.category}</span>
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-medium uppercase" style={{color: '#A0AABA'}}>
                    <span>{post.date}</span><span>·</span><span>{post.readTime} de leitura</span>
                  </div>
                  <h3 className="font-sora font-bold text-sm leading-snug line-clamp-2" style={{color: '#071B34'}}>{post.title}</h3>
                  <p className="text-xs font-light leading-relaxed line-clamp-2" style={{color: '#7A8899'}}>{post.excerpt}</p>
                  <span className="inline-block text-xs font-bold mt-1 group-hover:underline" style={{color: '#C8A96B'}}>Ler artigo →</span>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <a href="/blog" className="inline-flex items-center gap-2 font-bold text-sm" style={{color: '#071B34'}}>
              Ver todos os artigos <BookOpen size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CTA FINAL
      ═══════════════════════════════ */}
      <section className="py-16" style={{background: '#F5F7FA'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-[2.5rem] py-16 px-8 md:px-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden"
            style={{background: 'linear-gradient(135deg, #071B34 0%, #0a2244 100%)', boxShadow: '0 40px 100px rgba(7,27,52,0.4), 0 0 0 1px rgba(200,169,107,0.15)'}}>

            <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(200,169,107,0.07) 0%, transparent 70%)'}}></div>
            <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #C8A96B 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
            <div className="absolute top-0 left-16 right-16 h-px" style={{background: 'linear-gradient(to right, transparent, rgba(200,169,107,0.4), transparent)'}}></div>

            <div className="lg:w-1/2 space-y-5 z-10 text-center lg:text-left">
              <span className="inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                style={{background: 'rgba(200,169,107,0.12)', border: '1px solid rgba(200,169,107,0.25)', color: '#E8C98A'}}>
                Atendimento 100% Digital
              </span>
              <h2 className="font-sora text-3xl md:text-4xl font-bold leading-tight italic text-white">
                Cada dia sem proteção<br className="hidden md:block"/> é um risco desnecessário.
              </h2>
              <p className="font-light text-base" style={{color: 'rgba(255,255,255,0.5)'}}>Rodrigo responde em minutos. Cotação gratuita, sem burocracia, sem compromisso.</p>
            </div>

            <div className="lg:w-1/2 w-full z-10">
              <div className="rounded-[1.75rem] p-8 md:p-10 text-center space-y-4"
                style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,169,107,0.15)', backdropFilter: 'blur(12px)'}}>
                <p className="font-sora text-white font-bold text-lg italic">Fale agora com o Rodrigo</p>
                <p className="text-sm font-light" style={{color: 'rgba(255,255,255,0.45)'}}>Sem formulário, sem espera. Direto no WhatsApp.</p>
                <a href={`https://wa.me/${meuNumero}`} target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-white bg-green-500 hover:bg-green-400 transition-all hover:scale-105 shadow-lg">
                  <MessageCircle size={16}/> Chamar no WhatsApp
                </a>
                <div className="flex items-center justify-center gap-4 pt-1">
                  <span className="text-[9px] font-medium" style={{color: 'rgba(255,255,255,0.3)'}}>🔒 100% sigiloso</span>
                  <span className="text-[9px] font-medium" style={{color: 'rgba(255,255,255,0.3)'}}>⚡ Resposta em minutos</span>
                  <span className="text-[9px] font-medium" style={{color: 'rgba(255,255,255,0.3)'}}>🚫 Sem spam</span>
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
