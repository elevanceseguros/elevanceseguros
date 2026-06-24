import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, HeartPulse, MessageCircle, ShieldCheck, Stethoscope, Users, WalletCards } from 'lucide-react';

const WHATSAPP_NUMBER = '5511920144864';
const WEBHOOK_URL = 'https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead';
const HAPVIDA_LOGO = '/logos/hapvida.webp';
const ELEVANCE_LOGO = '/logos/elevance-dark-horizontal-gold.png';

const benefits = [
  'Cotação gratuita e sem compromisso',
  'Atendimento com corretor especializado',
  'Comparação para pessoa física, família, MEI e empresa',
  'Explicação sobre rede, carência e coparticipação',
];

const audience = [
  { icon: <Users size={18} />, title: 'Pessoa física e família', text: 'Para quem quer contratar um plano para si ou incluir dependentes.' },
  { icon: <WalletCards size={18} />, title: 'MEI', text: 'Solução para quem busca contratação com CNPJ MEI e atendimento consultivo.' },
  { icon: <Building2 size={18} />, title: 'Empresa', text: 'Para pequenas e médias empresas que querem oferecer benefício de saúde.' },
];

const valueCards = [
  { label: 'Rede Hapvida', title: '86 hospitais próprios no Brasil', text: 'A Hapvida tem uma das maiores redes próprias do país. Você usa a mesma estrutura sem burocracia de autorização — consultas, exames e emergências integrados.' },
  { label: 'Valores reais', title: 'PF a partir de R$ 133/mês', text: 'PME e MEI têm tabela própria e costumam ser mais baratos. Na cotação você recebe o valor exato para o seu perfil, cidade e faixa etária.' },
  { label: 'Por que a Elevance?', title: 'Rodrigo explica antes de você contratar', text: 'Carência, coparticipação, rede credenciada e melhor modalidade — você entende tudo antes de assinar. Sem surpresa depois.' },
];

const faqs = [
  { q: 'A cotação da Hapvida é gratuita?', a: 'Sim. Você envia seus dados básicos e recebe orientação para escolher a opção mais adequada ao seu perfil.' },
  { q: 'Dá para cotar para família, MEI ou empresa?', a: 'Sim. A análise muda conforme quantidade de vidas, cidade, idade e tipo de contratação.' },
  { q: 'Vocês explicam carência e coparticipação?', a: 'Sim. Antes de contratar, você entende o funcionamento do plano, possíveis carências, rede e regras principais.' },
  { q: 'A Elevance é a Hapvida?', a: 'Não. A Elevance é uma corretora parceira que ajuda você a comparar e contratar planos disponíveis.' },
];

const typeOptions = ['Individual/Familiar', 'Empresa (com CNPJ)', 'Adesão/Profissão'];

export default function HapvidaAdsLanding() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tipo, setTipo] = useState('Individual/Familiar');
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Rodrigo, vim pelo anúncio da Hapvida e quero uma cotação.')}`;

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const cidadeVal = formData.get('cidade') || '';
    const vidasVal = formData.get('vidas') || '';
    const payload = {
      nome: formData.get('nome'),
      whatsapp: String(formData.get('whatsapp') || '').replace(/[^0-9]/g, ''),
      produto: `Plano de Saúde Hapvida`,
      origem: 'google_ads_hapvida_landing',
      detalhes: {
        plano: tipo,
        cidade: cidadeVal,
        pessoas: vidasVal,
      },
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

      <main className="min-h-screen bg-[#f5f8fd] text-slate-900">
        <section id="top" className="relative overflow-hidden bg-[linear-gradient(135deg,#0057B8_0%,#0876D8_42%,#071B34_100%)] text-white">
          <div className="absolute inset-0 opacity-100" style={{ background: 'radial-gradient(circle at top right, rgba(255,155,0,.24), transparent 28%), radial-gradient(circle at bottom left, rgba(255,255,255,.10), transparent 28%)' }} />
          <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-14">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <img src={HAPVIDA_LOGO} alt="Hapvida" className="h-10 md:h-12 w-auto object-contain bg-white rounded-xl px-3 py-1.5" />
                <div className="w-px h-10 bg-white/25" />
                <div className="flex flex-col items-start gap-0.5">
                  <img src={ELEVANCE_LOGO} alt="Elevance Seguros" className="h-6 md:h-8 w-auto object-contain" />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FFD26E]">Corretora parceira</span>
                </div>
              </div>
              <a href={whatsappHref} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg">
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>

            <div className="grid lg:grid-cols-[1.08fr_.92fr] gap-10 items-center">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB000] text-[#072244] text-xs font-black uppercase tracking-wider shadow-lg">
                  <HeartPulse size={15} /> Cotação Hapvida com apoio da Elevance
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-black leading-[1.02] tracking-tight">
                    Plano Hapvida com cotação <span className="text-[#FFD26E] italic">rápida, clara e consultiva</span>
                  </h1>
                  <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                    Compare opções Hapvida com atendimento da Elevance Seguros. Entenda valores, rede, carência e coparticipação para pessoa física, família, MEI ou empresa.
                  </p>
                </div>

                <div className="hidden md:grid md:grid-cols-2 gap-3 max-w-2xl">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white/85 backdrop-blur-sm">
                      <CheckCircle2 size={16} className="text-[#FFD26E] shrink-0" /> {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white text-slate-900 rounded-[2rem] p-6 md:p-8 shadow-2xl border border-white/70">
                <div className="mb-6 text-center">
                  <img src={HAPVIDA_LOGO} alt="Hapvida" className="h-12 md:h-14 w-auto object-contain mx-auto mb-3" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#FF8A00] mb-2">Resposta pelo WhatsApp</p>
                  <h2 className="text-2xl font-black text-[#0057B8] italic">Receber cotação Hapvida</h2>
                  <p className="text-sm text-slate-500 mt-2">Preencha em menos de 30 segundos.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="nome" required placeholder="Seu nome" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-4 text-sm font-semibold outline-none focus:border-[#0876D8]" />
                  <input name="whatsapp" required placeholder="WhatsApp com DDD" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-4 text-sm font-semibold outline-none focus:border-[#0876D8]" />
                  <input name="cidade" required placeholder="Cidade" className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-4 text-sm font-semibold outline-none focus:border-[#0876D8]" />
                  <select name="vidas" required className="w-full rounded-2xl bg-slate-50 border border-slate-200 px-4 py-4 text-sm font-semibold outline-none focus:border-[#0876D8]">
                    <option value="">Quantidade de vidas</option>
                    <option>1 vida</option>
                    <option>2 vidas</option>
                    <option>3 vidas</option>
                    <option>4 ou mais vidas</option>
                  </select>

                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {typeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setTipo(option)}
                        className={`h-[48px] rounded-2xl px-1 py-2 text-[9px] leading-tight font-black uppercase tracking-tight border transition-all flex items-center justify-center text-center w-full ${tipo === option ? 'bg-[#0057B8] text-white border-[#0057B8]' : 'bg-white text-slate-500 border-slate-200'}`}
                      >
                        {option === 'Individual/Familiar' ? (
                          <span className="flex flex-col leading-[1.2]">
                            <span>Individual/</span>
                            <span>Familiar</span>
                          </span>
                        ) : option === 'Empresa (com CNPJ)' ? (
                          <span className="flex flex-col leading-[1.2]">
                            <span>Empresa</span>
                            <span className="text-[8px] opacity-70">(com CNPJ)</span>
                          </span>
                        ) : option === 'Adesão/Profissão' ? (
                          <span className="flex flex-col leading-[1.2]">
                            <span>Adesão/</span>
                            <span>Profissão</span>
                          </span>
                        ) : option}
                      </button>
                    ))}
                  </div>

                  <button type="submit" disabled={loading} className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-70 text-white rounded-2xl py-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg">
                    {loading ? 'Enviando...' : 'Quero minha cotação'} <ArrowRight size={15} />
                  </button>
                </form>

                <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-green-200 bg-green-50 text-green-700 py-3 text-xs font-black uppercase tracking-widest">
                  <MessageCircle size={15} /> Falar direto no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 pt-12 pb-4">
          <div className="grid lg:grid-cols-3 gap-4">
            {valueCards.map((item, index) => (
              <div key={item.title} className="bg-white rounded-[1.7rem] border border-slate-100 shadow-sm p-6">
                <p className={`text-[10px] uppercase tracking-[0.22em] font-black mb-2 ${index === 1 ? 'text-[#FF8A00]' : index === 2 ? 'text-green-600' : 'text-[#0057B8]'}`}>{item.label}</p>
                <h3 className="text-xl font-black text-[#071B34] italic mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[2rem] bg-[linear-gradient(135deg,#0057B8_0%,#0876D8_60%,#FF9F1A_130%)] text-white p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-xl">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-black text-white/75 mb-2">Cotação Hapvida</p>
              <h2 className="text-2xl md:text-3xl font-black leading-tight">Receba orientação antes de escolher o plano</h2>
              <p className="text-sm text-white/75 mt-2 max-w-2xl">Veja opções conforme cidade, perfil, idade e quantidade de vidas.</p>
            </div>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-white text-[#0057B8] px-6 py-4 font-black text-xs uppercase tracking-widest whitespace-nowrap">Falar no WhatsApp</a>
          </div>
        </section>



        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="text-center mb-8">
            <p className="text-[10px] uppercase tracking-[0.25em] font-black text-[#0057B8] mb-2">Dúvidas comuns</p>
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
