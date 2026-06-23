import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, HeartPulse, MessageCircle, ShieldCheck, Stethoscope, Users, Zap } from 'lucide-react';

const WHATSAPP_NUMBER = '5511920144864';
const WEBHOOK_URL = 'https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead';

const benefits = [
  'Cotação gratuita e sem compromisso',
  'Atendimento com corretor especializado',
  'Comparação para pessoa física, MEI e empresa',
  'Explicação sobre rede, carência e coparticipação',
];

const faqs = [
  {
    q: 'A cotação da Hapvida é gratuita?',
    a: 'Sim. Você envia seus dados básicos e recebe orientação para escolher a opção mais adequada ao seu perfil.',
  },
  {
    q: 'Dá para cotar para família, MEI ou empresa?',
    a: 'Sim. A análise muda conforme quantidade de vidas, cidade, idade e tipo de contratação.',
  },
  {
    q: 'Vocês explicam carência e coparticipação?',
    a: 'Sim. Antes de contratar, você entende o funcionamento do plano, possíveis carências, rede e regras principais.',
  },
  {
    q: 'A Elevance é a Hapvida?',
    a: 'Não. A Elevance é uma corretora independente que ajuda você a comparar e contratar planos disponíveis.',
  },
];

export default function HapvidaAdsLanding() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tipo, setTipo] = useState('Individual/Familiar');

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Rodrigo, vim pelo anúncio da Hapvida e quero uma cotação.')}`;

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      nome: formData.get('nome'),
      whatsapp: String(formData.get('whatsapp') || '').replace(/[^0-9]/g, ''),
      cidade: formData.get('cidade'),
      vidas: formData.get('vidas'),
      tipo,
      produto: 'Hapvida',
      origem: 'google_ads_hapvida_landing',
      landing: 'hapvida_subdomain',
      path: window.location.pathname,
      hostname: window.location.hostname,
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (_) {}

    navigate('/obrigado');
  }

  return (
    <>
      <Helmet>
        <title>Plano Hapvida | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Cotação gratuita de Plano Hapvida com atendimento consultivo da Elevance Seguros. Compare opções para pessoa física, MEI, família ou empresa." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://hapvida.elevanceseguros.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Plano Hapvida | Cotação Gratuita" />
        <meta property="og:description" content="Compare opções de Plano Hapvida com atendimento consultivo e cotação gratuita pelo WhatsApp." />
        <meta property="og:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <main className="min-h-screen bg-[#f4f7fb] text-slate-900">
        <section className="relative overflow-hidden bg-[#071B34] text-white">
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at top right, rgba(200,169,107,.35), transparent 35%), radial-gradient(circle at bottom left, rgba(34,197,94,.18), transparent 30%)' }} />
          <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-14">
            <div className="flex items-center justify-between gap-4 mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#E8C98A] font-black">Elevance Seguros</p>
                <p className="text-xs text-white/45 font-medium mt-1">Corretora independente · Cotação gratuita</p>
              </div>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all">
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>

            <div className="grid lg:grid-cols-[1.08fr_.92fr] gap-10 items-center">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-xs font-bold text-white/80">
                  <HeartPulse size={15} className="text-green-400" /> Cotação de Plano Hapvida
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-black leading-[1.02] tracking-tight">
                    Plano Hapvida com cotação <span className="text-[#E8C98A] italic">rápida e consultiva</span>
                  </h1>
                  <p className="text-base md:text-lg text-white/65 max-w-2xl leading-relaxed">
                    Informe seus dados básicos e receba orientação para comparar valores, rede, carência e opção ideal para pessoa física, família, MEI ou empresa.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 rounded-2xl bg-white/6 border border-white/10 px-4 py-3 text-sm text-white/75">
                      <CheckCircle2 size={16} className="text-green-400 shrink-0" /> {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white text-slate-900 rounded-[2rem] p-6 md:p-8 shadow-2xl border border-white/70">
                <div className="mb-6 text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-2">Resposta pelo WhatsApp</p>
                  <h2 className="text-2xl font-black text-[#071B34] italic">Receber cotação Hapvida</h2>
                  <p className="text-sm text-slate-500 mt-2">Preencha em menos de 30 segundos.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="nome" required placeholder="Seu nome" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-4 text-sm font-semibold outline-none focus:border-[#C8A96B]" />
                  <input name="whatsapp" required placeholder="WhatsApp com DDD" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-4 text-sm font-semibold outline-none focus:border-[#C8A96B]" />
                  <input name="cidade" required placeholder="Cidade" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-4 text-sm font-semibold outline-none focus:border-[#C8A96B]" />
                  <select name="vidas" required className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-4 text-sm font-semibold outline-none focus:border-[#C8A96B]">
                    <option value="">Quantidade de vidas</option>
                    <option>1 vida</option>
                    <option>2 vidas</option>
                    <option>3 vidas</option>
                    <option>4 ou mais vidas</option>
                  </select>

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {['Individual/Familiar', 'MEI', 'Empresa'].map((option) => (
                      <button key={option} type="button" onClick={() => setTipo(option)} className={`rounded-2xl px-3 py-3 text-[10px] font-black uppercase tracking-wide border transition-all ${tipo === option ? 'bg-[#071B34] text-[#E8C98A] border-[#C8A96B]' : 'bg-white text-slate-500 border-slate-200'}`}>
                        {option}
                      </button>
                    ))}
                  </div>

                  <button type="submit" disabled={loading} className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-70 text-white rounded-2xl py-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                    {loading ? 'Enviando...' : 'Quero minha cotação'} <ArrowRight size={15} />
                  </button>
                </form>

                <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-green-200 bg-green-50 text-green-700 py-3 text-xs font-black uppercase tracking-widest">
                  <MessageCircle size={15} /> Preferir WhatsApp agora
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-4">
          {[
            { icon: <Stethoscope size={22} />, title: 'Entenda a rede', text: 'Veja se o plano atende sua cidade e quais pontos analisar antes de contratar.' },
            { icon: <Users size={22} />, title: 'Compare por perfil', text: 'Pessoa física, família, MEI e empresa podem ter regras e preços diferentes.' },
            { icon: <ShieldCheck size={22} />, title: 'Sem promessa fake', text: 'A ideia é orientar com clareza, sem empurrar plano errado para seu caso.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-[1.7rem] p-6 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#071B34] flex items-center justify-center mb-4">{item.icon}</div>
              <h3 className="font-black text-[#071B34] italic mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="text-center mb-8">
            <p className="text-[10px] uppercase tracking-[0.25em] font-black text-blue-600 mb-2">Dúvidas comuns</p>
            <h2 className="text-3xl font-black text-[#071B34] italic">Antes de cotar Hapvida</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-3xl p-6 border border-slate-100">
                <h3 className="font-black text-[#071B34] mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="fixed bottom-4 left-4 right-4 sm:hidden z-40">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-green-500 text-white rounded-2xl py-4 font-black text-xs uppercase tracking-widest shadow-2xl">
            <MessageCircle size={16} /> Cotação Hapvida no WhatsApp
          </a>
        </div>
      </main>
    </>
  );
}
