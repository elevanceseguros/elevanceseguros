import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShieldCheck, Zap, Users, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Star } from 'lucide-react';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const coberturas = [
  { icon: <Heart size={28} className="text-rose-600" />, titulo: "Morte", desc: "Capital segurado pago aos beneficiários em caso de falecimento por qualquer causa." },
  { icon: <ShieldCheck size={28} className="text-rose-600" />, titulo: "Invalidez", desc: "Indenização em caso de invalidez permanente total ou parcial por acidente." },
  { icon: <Zap size={28} className="text-rose-600" />, titulo: "Doenças Graves", desc: "Cobertura para câncer, infarto, AVC e outras doenças graves especificadas." },
  { icon: <Users size={28} className="text-rose-600" />, titulo: "Diária Hospitalar", desc: "Valor diário pago enquanto estiver internado por acidente ou doença." },
];

export default function SeguroVidaPage() {
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
        body: JSON.stringify({ nome, whatsapp, produto: 'Seguro de Vida', origem: window.location.pathname }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Seguro de Vida em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Seguro de vida com cobertura completa para você e sua família. Morte, invalidez, doenças graves e diária hospitalar. Cotação gratuita via WhatsApp." />
        <meta name="keywords" content="seguro de vida SP, seguro vida São Paulo, cotação seguro vida, seguro vida família" />
        <link rel="canonical" href="https://elevanceseguros.com/seguro-vida" />
      </Helmet>

      <CorretorHero operadora="um Seguro de Vida" />

      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Proteção para quem você ama</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#114d8e] leading-tight italic">
                Proteja o futuro <br className="hidden md:block" />
                <span className="text-rose-600">da sua família.</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                O seguro de vida garante que as pessoas que você ama estarão <span className="text-rose-600 font-black uppercase">financeiramente protegidas</span>, independente do que aconteça.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {["Cobertura para morte por qualquer causa", "Invalidez permanente total ou parcial", "Doenças graves: câncer, infarto, AVC", "Diária de internação hospitalar", "Assistência funeral para toda a família"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-row justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> A partir de R$ 30/mês
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck size={14} className="text-rose-600" /> Regulado pela SUSEP
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[320px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!sent ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#114d8e] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Simulação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input name="nome" type="text" required placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-rose-500 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-rose-500 transition-all" />
                        <button type="submit" className="w-full bg-[#114d8e] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          SIMULAR VIA WHATSAPP <MessageCircle size={16} />
                        </button>
                        <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic">Entraremos em contato no seu WhatsApp em instantes</p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto"><PartyPopper size={40} /></div>
                      <h3 className="text-2xl font-black text-[#114d8e] italic">Solicitação Enviada!</h3>
                      <p className="text-slate-500 text-sm">Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#114d8e] italic text-center mb-12">O que está coberto?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coberturas.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-rose-50 rounded-[30px] p-8 border border-rose-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#114d8e] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm font-medium leading-relaxed">{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#114d8e] rounded-[50px] p-12 text-center">
            <h2 className="text-3xl font-black text-white italic mb-3">Proteja quem você ama hoje</h2>
            <p className="text-slate-300 font-medium mb-8">Simulação gratuita e sem compromisso</p>
            <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero simular um Seguro de Vida`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
