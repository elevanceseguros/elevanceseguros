import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, CheckCircle2, MapPin, Star, MessageCircle, PartyPopper, Zap, ArrowRight, Users, Heart, Clock, Building2, Phone } from 'lucide-react';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';

const MEU_NUMERO = "5511920144864";

// Paleta Sagrada Família
// Azul escuro: #1a4a7a | Roxo/magenta: #9b1fa8 | Fundo suave: #f4f0f8

const planos = [
  {
    nome: "Plano por Adesão",
    destaque: false,
    preco: "R$ 154,49",
    detalhe: "00–18 anos · Enfermaria · 1 a 29 vidas",
    registro: "ANS 497.308/23-9",
    foto: "/hospitais/plano-adesao.jpg",
  },
  {
    nome: "Plano Sênior",
    destaque: true,
    preco: "R$ 513,00",
    detalhe: "44 a 48 anos · Enfermaria",
    registro: "ANS 493.030/22-4",
    foto: "/hospitais/plano-senior.jpg",
  },
  {
    nome: "Plano Empresarial PME",
    destaque: false,
    preco: "R$ 119,50",
    detalhe: "00–18 anos · Enfermaria · 1 a 29 vidas",
    registro: "ANS 497.008/23-0",
    foto: "/hospitais/plano-empresarial.jpg",
  },
];

const tabelaPrecos = [
  { idade: "00 a 18", enf: "R$ 173,03", apto: "R$ 247,59" },
  { idade: "19 a 23", enf: "R$ 173,03", apto: "R$ 247,59" },
  { idade: "24 a 28", enf: "R$ 238,77", apto: "R$ 341,66" },
  { idade: "29 a 33", enf: "R$ 238,77", apto: "R$ 341,66" },
  { idade: "34 a 38", enf: "R$ 305,62", apto: "R$ 437,35" },
  { idade: "39 a 43", enf: "R$ 305,62", apto: "R$ 437,35" },
  { idade: "44 a 48", enf: "R$ 421,77", apto: "R$ 603,55" },
  { idade: "49 a 53", enf: "R$ 529,31", apto: "R$ 757,45" },
  { idade: "54 a 58", enf: "R$ 688,10", apto: "R$ 984,68" },
  { idade: "59 ou +", enf: "R$ 963,34", apto: "R$ 1.378,56" },
];

const unidades = [
  { nome: "Hosp. Sagrada Família", local: "Vila Formosa · Zona Leste SP", desc: "Pronto-socorro adulto/infantil, UTI, maternidade e exames.", foto: "/hospitais/sf-vila-formosa.jpg" },
  { nome: "Hosp. Sagrada Família", local: "Mauá · Grande ABC", desc: "Pronto-socorro 24h, UTI e internações.", foto: "/hospitais/sf-maua.jpg" },
  { nome: "Hosp. São Francisco", local: "Cotia · Grande SP", desc: "Maternidade, UTI, pronto-socorro infantil e cirúrgico.", foto: "/hospitais/hsf-cotia.jpg" },
  { nome: "Hosp. São Francisco", local: "Osasco · Grande SP", desc: "UTI, consultas e pronto-socorro 24h.", foto: "/hospitais/hsf-osasco.jpg" },
  { nome: "Hosp. São Francisco", local: "São Roque · Interior", desc: "UTI, pronto-socorro e internações.", foto: "/hospitais/hsf-sao-roque.jpg" },
];

const diferenciais = [
  { icon: <Heart size={22} className="text-white" />, titulo: "Rede própria integrada", desc: "5 hospitais próprios em SP e Grande SP sem burocracia de autorização." },
  { icon: <Clock size={22} className="text-white" />, titulo: "Pronto-socorro 24h", desc: "Atendimento imediato em todas as unidades, adulto e infantil." },
  { icon: <ShieldCheck size={22} className="text-white" />, titulo: "Sem carência para urgências", desc: "Atendimento de emergência imediato a partir da adesão." },
  { icon: <Users size={22} className="text-white" />, titulo: "Plano familiar e empresarial", desc: "Individual, familiar e PME com desconto de até 30% para CNPJ." },
];

const SagradaFamiliaHomePage = () => {
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [perfil, setPerfil] = useState('');
  const [idades, setIdades] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = whatsapp.replace(/[^0-9]/g, '');
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, whatsapp: phone, perfil, idades, produto: 'Plano de Saúde Sagrada Família', origem: window.location.href }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Plano Sagrada Família SP | Tabela 2026 — Cotação Gratuita</title>
        <meta name="description" content="Plano de Saúde Sagrada Família em São Paulo. Tabela de preços 2026, 5 hospitais próprios, cobertura completa. Cotação gratuita." />
        <link rel="canonical" href="https://sagradafamilia.elevanceseguros.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="keywords" content="plano de saúde Sagrada Família SP, plano Sagrada Família São Paulo, cotação Sagrada Família 2026, plano hospitais Sagrada Família, São Francisco saúde SP" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Plano de Saúde Sagrada Família | Tabela 2026" />
        <meta property="og:description" content="Plano de saúde com 5 hospitais próprios em SP. Tabela 2026 e cotação gratuita." />
        <meta property="og:image" content="https://sagradafamilia.elevanceseguros.com/logos/sagrada-familia-logo.png" />
        <meta property="og:url" content="https://sagradafamilia.elevanceseguros.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plano de Saúde Sagrada Família | Tabela 2026" />
        <meta name="twitter:description" content="Plano de saúde com 5 hospitais próprios em SP. Cotação gratuita." />
        <meta name="twitter:image" content="https://sagradafamilia.elevanceseguros.com/logos/sagrada-familia-logo.png" />
      </Helmet>

      <style>{`
        .sf-page * { font-family: 'Montserrat', sans-serif; }
        .sf-heading { font-family: 'Montserrat', sans-serif; font-weight: 900; }
        .sf-btn-primary { background: #9b1fa8; }
        .sf-btn-primary:hover { background: #7d1888; }
      `}</style>

      <div className="sf-page">

        {/* NAV */}
        <nav style={{ background: '#ffffff', borderBottom: '2px solid #e8d5ed' }} className="sticky top-0 z-50 py-3 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            {/* Logo Sagrada Família em destaque + Elevance menor */}
            <div className="flex items-center gap-4">
              <img
                src="/logos/sagrada-familia-logo.png"
                alt="Sagrada Família Saúde"
                className="h-10 w-auto object-contain"
                loading="eager"
              />
              <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>
              <div className="hidden sm:flex flex-col items-start">
                <span className="text-slate-400 text-[8px] uppercase tracking-widest font-bold">Corretora Autorizada</span>
                <img src="/logos/elevance-logo-branco.png" alt="Elevance Seguros" className="h-5 w-auto object-contain mt-0.5" loading="eager" />
              </div>
            </div>
            <a
              href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero cotar o plano Sagrada Família`}
              target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wide transition-all"
            >
              <MessageCircle size={13} /> Cotar agora
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: '#ffffff' }} className="relative pt-12 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #1a4a7a 1px, transparent 1px), radial-gradient(circle at 80% 20%, #9b1fa8 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">

              {/* TEXTO */}
              <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
                <img
                  src="/logos/sagrada-familia-logo.png"
                  alt="Sagrada Família Saúde"
                  className="h-16 w-auto object-contain mx-auto lg:mx-0"
                  loading="eager"
                />
                <span style={{ background: '#f3e8f5', color: '#9b1fa8' }} className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">✦ Tabela Atualizada 2026</span>
                <h1 className="sf-heading text-3xl md:text-5xl leading-tight" style={{ color: '#1a4a7a' }}>
                  Plano de Saúde <br className="hidden md:block" />
                  <span style={{ color: '#9b1fa8' }}>Sagrada Família</span>
                </h1>
                <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium">
                  Um plano sob medida para você, sua família e sua empresa — com atendimento humanizado e <span style={{ color: '#9b1fa8' }} className="font-black">cotação 100% gratuita</span>.
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
                  {[
                    "Pronto-socorro 24h",
                    "UTI adulto e neonatal",
                    "Maternidade própria",
                    "Sem carência para urgências",
                    "Plano individual e familiar",
                    "Desconto para CNPJ/MEI",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                      <CheckCircle2 size={14} className="text-green-500 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a
                    href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero cotar o plano Sagrada Família`}
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wide transition-all shadow-lg"
                  >
                    <MessageCircle size={16} /> Somente Vendas WhatsApp
                  </a>
                </div>
              </div>

              {/* FORMULÁRIO */}
              <div className="w-full lg:w-2/5">
                <div className="bg-white rounded-[40px] shadow-[0_30px_80px_rgba(26,74,122,0.15)] border border-purple-100 p-8 md:p-10 relative flex flex-col justify-center">
                  {!sent ? (
                    <>
                      <div style={{ background: '#1a4a7a' }} className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10 shadow-lg">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Solicite Sua Cotação
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                        <input
                          type="text" required placeholder="Seu nome completo"
                          value={nome} onChange={e => setNome(e.target.value)}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none transition-all"
                          style={{ '--tw-ring-color': '#9b1fa8' }}
                          onFocus={e => e.target.style.boxShadow = '0 0 0 2px #9b1fa8'}
                          onBlur={e => e.target.style.boxShadow = 'none'}
                        />
                        <input
                          type="tel" required placeholder="DDD + WhatsApp"
                          value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none transition-all"
                          onFocus={e => e.target.style.boxShadow = '0 0 0 2px #9b1fa8'}
                          onBlur={e => e.target.style.boxShadow = 'none'}
                        />
                        <select
                          required value={perfil} onChange={e => setPerfil(e.target.value)}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none transition-all text-slate-500"
                          onFocus={e => e.target.style.boxShadow = '0 0 0 2px #9b1fa8'}
                          onBlur={e => e.target.style.boxShadow = 'none'}
                        >
                          <option value="">Qual seu perfil?</option>
                          <option value="Pessoa Física">Pessoa Física</option>
                          <option value="MEI">MEI</option>
                          <option value="Empresa até 29 vidas">Empresa até 29 vidas</option>
                          <option value="Empresa acima de 30 vidas">Empresa acima de 30 vidas</option>
                        </select>
                        <input
                          type="text" required placeholder="Quantas pessoas e quais idades?"
                          value={idades} onChange={e => setIdades(e.target.value)}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none transition-all"
                          onFocus={e => e.target.style.boxShadow = '0 0 0 2px #9b1fa8'}
                          onBlur={e => e.target.style.boxShadow = 'none'}
                        />
                        <button
                          type="submit"
                          style={{ background: '#9b1fa8' }}
                          className="w-full hover:opacity-90 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2"
                        >
                          QUERO COTAÇÃO GRATUITA <ArrowRight size={16} />
                        </button>
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                          <span className="text-[9px] text-slate-400 font-bold">🔒 Dados sigilosos</span>
                          <span className="text-[9px] text-slate-400 font-bold">⚡ Resposta em até 2h</span>
                          <span className="text-[9px] text-slate-400 font-bold">🚫 Sem spam</span>
                        </div>
                      </form>
                    </>
                  ) : (
                    <div className="text-center space-y-6 py-6">
                      <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <PartyPopper size={40} />
                      </div>
                      <h3 className="sf-heading text-2xl" style={{ color: '#1a4a7a' }}>Solicitação Enviada!</h3>
                      <p className="text-slate-500 text-sm font-medium">Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊</p>
                      <a
                        href={`https://wa.me/${MEU_NUMERO}?text=Olá! Acabei de preencher o formulário para cotar o plano Sagrada Família`}
                        target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wide transition-all"
                      >
                        <MessageCircle size={14} /> Falar agora pelo WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <span style={{ background: '#f3e8f5', color: '#9b1fa8' }} className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Valores Promocionais 2025</span>
              <h2 className="sf-heading text-3xl" style={{ color: '#1a4a7a' }}>Nossos Planos</h2>
              <p className="text-slate-500 text-sm mt-2">Preços e condições sujeitos a confirmação no ato do fechamento do contrato.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planos.map((p, i) => (
                <div key={i} className={`rounded-[30px] overflow-hidden shadow-xl flex flex-col border ${p.destaque ? 'border-[#9b1fa8] ring-2 ring-[#9b1fa8]' : 'border-slate-100'}`}>
                  {p.destaque && (
                    <div style={{ background: '#9b1fa8' }} className="text-white text-center text-[10px] font-black uppercase tracking-widest py-2">
                      ⭐ Mais Procurado
                    </div>
                  )}
                  <div className="h-44 overflow-hidden">
                    <img src={p.foto} alt={p.nome} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="sf-heading text-lg mb-1" style={{ color: '#1a4a7a' }}>{p.nome}</h3>
                    <div className="text-3xl font-black text-slate-800 my-3">{p.preco}<span className="text-sm font-medium text-slate-400">/mês</span></div>
                    <p className="text-slate-500 text-xs mb-1">{p.detalhe}</p>
                    <p className="text-slate-400 text-[10px] mb-6">{p.registro}</p>
                    <a
                      href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero cotar o ${p.nome} da Sagrada Família`}
                      target="_blank" rel="noreferrer"
                      className="mt-auto w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
                    >
                      <MessageCircle size={13} /> Cotação
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE O GRUPO */}
        <section style={{ background: '#f4f0f8' }} className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <span style={{ background: '#ede1f0', color: '#9b1fa8' }} className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Quem somos</span>
                <h2 className="sf-heading text-3xl leading-tight" style={{ color: '#1a4a7a' }}>Com mais de 28 anos de história</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  O <strong>Grupo São Francisco</strong> é composto pelo Hospital São Francisco — unidades Cotia, São Roque e Osasco —, Hospital Sagrada Família — unidades São Paulo (Vila Formosa) e Mauá — e pela operadora <strong>Sagrada Família Saúde</strong>.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Com atendimento humanizado e personalizado, o Sagrada Família Saúde nasce para preencher uma lacuna das operadoras, com foco em resolutividade — suprindo as reais necessidades de quem busca assistência médica de qualidade.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Atendimento humanizado", "Equipamentos de última geração", "SP, Grande SP e interior"].map((item, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-white border border-purple-100 text-slate-600 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm">
                      <CheckCircle2 size={12} className="text-green-500" /> {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {diferenciais.map((b, i) => (
                  <div key={i} style={{ background: i % 2 === 0 ? '#1a4a7a' : '#9b1fa8' }} className="rounded-[24px] p-5 text-white space-y-2">
                    <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">{b.icon}</div>
                    <h3 className="sf-heading text-sm">{b.titulo}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TABELA + REDE */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Tabela de preços */}
              <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
                <div style={{ background: '#1a4a7a' }} className="p-6 text-white">
                  <h2 className="sf-heading text-lg uppercase tracking-tight">Tabela de Preços 2026</h2>
                  <p className="text-white/60 text-xs mt-1">QC = Enfermaria · QP = Apartamento</p>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-slate-50 text-left">
                        <th className="py-3 font-bold text-slate-400 text-xs uppercase">Idade</th>
                        <th className="py-3 font-bold text-xs uppercase" style={{ color: '#1a4a7a' }}>Enfermaria (QC)</th>
                        <th className="py-3 font-bold text-xs uppercase" style={{ color: '#9b1fa8' }}>Apartamento (QP)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {tabelaPrecos.map((row, i) => (
                        <tr key={i} className="hover:bg-purple-50 transition-colors">
                          <td className="py-2.5 font-bold text-slate-600 text-sm">{row.idade}</td>
                          <td className="py-2.5 font-semibold text-sm" style={{ color: '#1a4a7a' }}>{row.enf}</td>
                          <td className="py-2.5 font-black text-sm" style={{ color: '#9b1fa8' }}>{row.apto}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <a
                    href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero cotar o plano Sagrada Família`}
                    target="_blank" rel="noreferrer"
                    className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    Quero cotação personalizada <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Rede de hospitais */}
              <div className="space-y-4">
                <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 overflow-hidden">
                  <div style={{ background: '#1a4a7a' }} className="p-6 text-white">
                    <h2 className="sf-heading text-lg uppercase tracking-tight flex items-center gap-2">
                      <MapPin size={18} className="opacity-80" /> Rede Própria de Hospitais
                    </h2>
                    <p className="text-white/60 text-xs mt-1">Área de atuação: São Paulo, Cotia, Mauá, São Roque e Osasco</p>
                  </div>
                  <div className="p-5 space-y-3">
                    {unidades.map((u, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl hover:bg-purple-50 transition-colors">
                        <img
                          src={u.foto}
                          alt={u.nome}
                          className="w-20 h-16 object-cover rounded-xl shrink-0"
                          loading="lazy"
                        />
                        <div>
                          <p className="sf-heading text-sm" style={{ color: '#1a4a7a' }}>{u.nome}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{u.local}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{u.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MEI/CNPJ */}
                <div style={{ background: '#9b1fa8' }} className="rounded-[30px] p-6 text-white flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                    <Users size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="sf-heading text-base">Possui CNPJ ou MEI?</p>
                    <p className="text-white/70 text-sm">Desconto de até <span className="text-yellow-300 font-black">30%</span> no plano empresarial.</p>
                  </div>
                  <a
                    href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero saber sobre o plano empresarial Sagrada Família`}
                    target="_blank" rel="noreferrer"
                    className="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-2xl font-black text-[10px] uppercase tracking-wide transition-all shrink-0"
                  >
                    Saber mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTE EXISTENTE */}
        <section style={{ background: '#f4f0f8' }} className="py-10">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-[30px] border border-purple-100 shadow-sm p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: '#f3e8f5' }}>
                <Phone size={26} style={{ color: '#9b1fa8' }} />
              </div>
              <div className="flex-1">
                <h3 className="sf-heading text-lg" style={{ color: '#1a4a7a' }}>Já é Cliente?</h3>
                <p className="text-slate-500 text-sm mt-1">Quer marcar consultas ou tem dúvidas sobre seu plano? Acesse a Central de Clientes da Sagrada Família.</p>
              </div>
              <a
                href="https://3673prd-plano.cloudmv.com.br/mvsaudeweb/#/inicio"
                target="_blank" rel="noreferrer"
                style={{ background: '#1a4a7a' }}
                className="hover:opacity-90 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wide transition-all whitespace-nowrap"
              >
                Central de Clientes
              </a>
            </div>
          </div>
        </section>

        {/* DEPOIMENTO */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div style={{ background: '#f4f0f8', borderColor: '#e8d5ed' }} className="p-8 rounded-[30px] border shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-5 italic font-medium">&ldquo;Encontrei o plano Sagrada Família ideal para minha família em menos de um dia. Atendimento impecável, tudo pelo WhatsApp e sem burocracia. O hospital é excelente!&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-sm" style={{ background: '#9b1fa8' }}>M</div>
                <div>
                  <div className="sf-heading text-sm" style={{ color: '#1a4a7a' }}>Mariana</div>
                  <div className="text-slate-400 text-xs font-medium">São Paulo, SP · Plano Sagrada Família Familiar</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div style={{ background: 'linear-gradient(135deg, #1a4a7a 0%, #9b1fa8 100%)' }} className="rounded-[50px] py-14 px-8 md:px-16 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
              {/* Logo branca decorativa */}
              <img src="/logos/sagrada-familia-white.png" alt="" className="absolute right-8 bottom-4 h-16 opacity-10 hidden lg:block pointer-events-none" aria-hidden="true" />
              <div className="lg:w-1/2 space-y-4 z-10 text-center lg:text-left">
                <img src="/logos/sagrada-familia-white.png" alt="Sagrada Família Saúde" className="h-10 w-auto mb-2 mx-auto lg:mx-0 opacity-90" />
                <h2 className="sf-heading text-3xl md:text-4xl leading-tight">Pronto para proteger sua família?</h2>
                <p className="text-white/75 font-medium">Cuidar da saúde nunca foi tão simples, seguro e completo. Cotação gratuita, sem burocracia, sem compromisso.</p>
              </div>
              <div className="lg:w-1/2 w-full z-10 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${MEU_NUMERO}?text=Olá! Quero cotar o plano de saúde Sagrada Família`}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl hover:scale-105"
                >
                  <MessageCircle size={18} /> Somente Vendas WhatsApp
                </a>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-[9px] text-white/50 font-bold">🔒 100% sigiloso</span>
                  <span className="text-[9px] text-white/50 font-bold">⚡ Resposta em minutos</span>
                  <span className="text-[9px] text-white/50 font-bold">🚫 Sem spam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ perguntas={[
          { pergunta: "O plano Sagrada Família aceita portabilidade?", resposta: "Sim! Aceita portabilidade de carências de outros planos ANS, desde que você tenha cumprido o período mínimo de permanência (geralmente 2 anos). O processo é feito sem burocracia." },
          { pergunta: "Quais hospitais fazem parte da rede Sagrada Família?", resposta: "A rede própria inclui 5 hospitais: Sagrada Família Vila Formosa (Zona Leste SP), Sagrada Família Mauá (Grande ABC), São Francisco Cotia, São Francisco Osasco e São Francisco São Roque." },
          { pergunta: "O plano Sagrada Família cobre parto?", resposta: "Sim! Com carência de 300 dias para parto normal e cesárea. O Hosp. Sagrada Família Vila Formosa tem maternidade própria completa com UTI neonatal." },
          { pergunta: "Qual o prazo de carência do plano Sagrada Família?", resposta: "As carências seguem o padrão ANS: 24h para urgência e emergência, 30 dias para consultas, 180 dias para cirurgias eletivas e 300 dias para parto. Em caso de portabilidade, as carências podem ser eliminadas." },
          { pergunta: "MEI e empresas têm desconto?", resposta: "Sim! Empresas com CNPJ e MEIs têm acesso ao plano empresarial Sagrada Família com desconto de até 30% em relação ao plano individual, a partir de 2 vidas." },
          { pergunta: "Como funciona a cotação gratuita?", resposta: "Você preenche o formulário com seus dados. Entraremos em contato em instantes pelo WhatsApp, entendemos seu perfil e enviamos as melhores opções com valores. Sem visita presencial, sem burocracia." },
        ]} />

        {/* FOOTER */}
        <footer style={{ background: '#ffffff', borderTop: '2px solid #e8d5ed' }} className="py-8 px-4 text-center">
          <img src="/logos/sagrada-familia-logo.png" alt="Sagrada Família Saúde" className="h-10 w-auto mx-auto mb-3" loading="lazy" />
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-slate-400 text-[9px] uppercase tracking-widest font-bold">Corretora Autorizada</span>
            <img src="/logos/elevance-logo-branco.png" alt="Elevance Seguros" className="h-5 w-auto" loading="lazy" />
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">© 2026 · São Paulo, SP</p>
          <p className="text-slate-300 text-[9px] mt-2 max-w-lg mx-auto">
            Este site é administrado pela Elevance Seguros, Corretora Autorizada para comercialização dos produtos Sagrada Família Saúde. Todo conteúdo é de sua integral responsabilidade.
          </p>
        </footer>

        <ScrollCTA produto="Plano de Saúde Sagrada Família" />

      </div>
    </>
  );
};

export default SagradaFamiliaHomePage;
