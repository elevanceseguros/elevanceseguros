import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Car, Briefcase, Zap, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, TrendingUp, Shield, Star } from 'lucide-react';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const tipos = [
  { icon: <Home size={32} className="text-blue-600" />, titulo: "Consórcio Imóvel", desc: "Realize o sonho da casa própria sem juros abusivos. Parcelas que cabem no seu bolso.", tag: "Imóvel" },
  { icon: <Car size={32} className="text-blue-600" />, titulo: "Consórcio Veículo", desc: "Troque de carro ou moto com planejamento inteligente e zero juros.", tag: "Veículo" },
  { icon: <Briefcase size={32} className="text-blue-600" />, titulo: "Consórcio Serviços", desc: "Financie reformas, viagens, festas e muito mais sem comprometer o orçamento.", tag: "Serviços" },
];

const vantagens = [
  { icon: <TrendingUp size={28} className="text-blue-600" />, titulo: "0% de Juros", desc: "Sem juros bancários. Você paga apenas a taxa de administração." },
  { icon: <Shield size={28} className="text-blue-600" />, titulo: "100% Seguro", desc: "Regulamentado pelo Banco Central do Brasil." },
  { icon: <Star size={28} className="text-blue-600" />, titulo: "Contemplação Rápida", desc: "Possibilidade de ser contemplado a qualquer momento por lance ou sorteio." },
  { icon: <Zap size={28} className="text-blue-600" />, titulo: "Planejamento Inteligente", desc: "Ideal para quem quer conquistar bens com organização financeira." },
];

export default function ConsorciосPage() {
  const [sent, setSent] = useState(false);
  const [tipoSelecionado, setTipoSelecionado] = useState("Imóvel");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = formData.get('whatsapp');
    const mensagem = encodeURIComponent(`Olá Rodrigo! Me chamo ${nome}. Vi o site da Elevance Seguros e gostaria de simular um Consórcio de ${tipoSelecionado}. Meu WhatsApp é: ${whatsapp}`);
    window.open(`https://wa.me/${MEU_NUMERO}?text=${mensagem}`, '_blank');
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Consórcios | Imóvel, Veículo e Serviços - Elevance Seguros</title>
        <meta name="description" content="Consórcios sem juros para imóvel, veículo e serviços. Planeje suas conquistas com inteligência. Simulação gratuita via WhatsApp." />
        <meta name="keywords" content="consórcio imóvel SP, consórcio carro São Paulo, consórcio sem juros, consórcio serviços" />
      </Helmet>

      <CorretorHero operadora="um Consórcio" />

      {/* HERO */}
      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Realize seus Sonhos</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight italic">
                Conquiste mais com <br className="hidden md:block" />
                <span className="text-blue-600">0% de juros.</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                Consórcio é a forma mais <span className="text-blue-600 font-black uppercase">inteligente</span> de conquistar imóveis, veículos e serviços sem pagar juros bancários abusivos.
              </p>
              <div className="flex flex-row justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> 0% de Juros
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Shield size={14} className="text-blue-600" /> Regulado pelo Banco Central
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[380px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!sent ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a3a52] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Simulação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-3 gap-2">
                          {["Imóvel", "Veículo", "Serviços"].map((tipo) => (
                            <button key={tipo} type="button" onClick={() => setTipoSelecionado(tipo)}
                              className={`py-2 rounded-xl text-xs font-black uppercase transition-all ${tipoSelecionado === tipo ? 'bg-[#1a3a52] text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                              {tipo}
                            </button>
                          ))}
                        </div>
                        <input name="nome" type="text" required placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <button type="submit" className="w-full bg-[#1a3a52] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          SIMULAR VIA WHATSAPP <MessageCircle size={16} />
                        </button>
                        <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic">Você será direcionado para o WhatsApp do Rodrigo</p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto"><PartyPopper size={40} /></div>
                      <h3 className="text-2xl font-black text-[#1a3a52] italic">Encaminhando...</h3>
                      <p className="text-slate-500 text-sm">Se não abrir, <a href={`https://wa.me/${MEU_NUMERO}`} className="text-blue-600 font-bold underline">clique aqui</a>.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3a52] italic text-center mb-3">Tipos de Consórcio</h2>
          <p className="text-slate-500 text-center font-medium mb-12">Escolha o que faz mais sentido para você</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tipos.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-[30px] p-8 border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="mb-4">{t.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{t.tag}</span>
                <div className="font-black text-[#1a3a52] text-lg italic mt-3 mb-2">{t.titulo}</div>
                <div className="text-slate-500 text-sm font-medium leading-relaxed">{t.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[50px] p-8 md:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-black italic text-center mb-12">Por que escolher Consórcio?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vantagens.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white/5 rounded-[24px] p-6 border border-white/10">
                  <div className="mb-3">{v.icon}</div>
                  <div className="font-black text-white text-sm uppercase tracking-wide italic mb-2">{v.titulo}</div>
                  <div className="text-slate-400 text-sm font-medium leading-relaxed">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#1a3a52] italic mb-12">Como funciona?</h2>
          <div className="space-y-6 text-left">
            {[
              { n: "01", titulo: "Escolha o seu consórcio", desc: "Imóvel, veículo ou serviço — defina o valor da carta de crédito que precisa." },
              { n: "02", titulo: "Ingresse no grupo", desc: "Você passa a fazer parte de um grupo de consorciados com o mesmo objetivo." },
              { n: "03", titulo: "Seja contemplado", desc: "Todo mês há contemplações por sorteio ou lance. Quando contemplado, você usa o crédito para adquirir o bem." },
              { n: "04", titulo: "Conquiste seu sonho", desc: "Com o crédito em mãos, compre seu imóvel, carro ou invista no serviço desejado." },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="min-w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xs flex-shrink-0">{p.n}</div>
                <div>
                  <div className="font-black text-[#1a3a52] text-sm uppercase tracking-wide italic mb-1">{p.titulo}</div>
                  <div className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1a3a52] rounded-[50px] p-12 text-center">
            <h2 className="text-3xl font-black text-white italic mb-3">Pronto para conquistar seu sonho?</h2>
            <p className="text-slate-300 font-medium mb-8">Simulação gratuita e sem compromisso</p>
            <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero simular um Consórcio`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Simular no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
