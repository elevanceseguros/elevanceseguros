import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Zap, Heart, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const operadoras = [
  { nome: "Amil", path: "/amil", logo: "/logos/amil.png", cor: "border-indigo-200 hover:border-indigo-400", tag: "bg-indigo-100 text-indigo-700" },
  { nome: "Bradesco Saúde", path: "/bradescosaude", logo: "/logos/bradesco.png", cor: "border-red-200 hover:border-red-400", tag: "bg-red-100 text-red-700" },
  { nome: "SulAmérica", path: "/sulamerica", logo: "/logos/sulamerica.png", cor: "border-orange-200 hover:border-orange-400", tag: "bg-orange-100 text-orange-700" },
  { nome: "Hapvida", path: "/hapvida", logo: "/logos/hapvida.png", cor: "border-orange-200 hover:border-orange-400", tag: "bg-orange-100 text-orange-700" },
  { nome: "NotreDame", path: "/hapvida", logo: "/logos/notredame.png", cor: "border-orange-200 hover:border-orange-400", tag: "bg-orange-100 text-orange-700" },
  { nome: "Unimed", path: "/unimed", logo: "/logos/unimed.png", cor: "border-green-200 hover:border-green-400", tag: "bg-green-100 text-green-700" },
  { nome: "Porto Saúde", path: "/porto", logo: "/logos/portoseguro.svg", cor: "border-blue-200 hover:border-blue-400", tag: "bg-blue-100 text-blue-700" },
  { nome: "Alice", path: "/alice", logo: "/logos/alice.webp", cor: "border-fuchsia-200 hover:border-fuchsia-400", tag: "bg-fuchsia-100 text-fuchsia-700" },
  { nome: "MedSênior", path: "/medsenior", logo: "/logos/notredame.png", cor: "border-emerald-200 hover:border-emerald-400", tag: "bg-emerald-100 text-emerald-700" },
];

const beneficios = [
  { icon: <Heart size={28} className="text-blue-600" />, titulo: "Comparamos para você", desc: "Analisamos todas as operadoras e encontramos o melhor custo-benefício" },
  { icon: <Zap size={28} className="text-blue-600" />, titulo: "Cotação em minutos", desc: "Resposta rápida direto no seu WhatsApp, sem burocracia" },
  { icon: <Users size={28} className="text-blue-600" />, titulo: "Atendimento humano", desc: "Fala direto com o Rodrigo, corretor especializado em saúde" },
  { icon: <ShieldCheck size={28} className="text-blue-600" />, titulo: "Sem custo adicional", desc: "Nossa consultoria é 100% gratuita para o cliente" },
];

export default function EncontreSeuPlanoPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = formData.get('whatsapp');
    const mensagem = encodeURIComponent(`Olá Rodrigo! Me chamo ${nome}. Vi o site da Elevance Seguros e gostaria de encontrar o melhor plano de saúde. Meu WhatsApp é: ${whatsapp}`);
    window.open(`https://wa.me/${MEU_NUMERO}?text=${mensagem}`, '_blank');
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Encontre seu Plano de Saúde Ideal | Elevance Seguros</title>
        <meta name="description" content="Compare os melhores planos de saúde em São Paulo. Amil, Bradesco, SulAmérica, Unimed, Hapvida e mais. Cotação gratuita via WhatsApp." />
        <meta name="keywords" content="encontre plano de saúde SP, comparar planos saúde São Paulo, melhor plano saúde" />
              <link rel="canonical" href="https://elevanceseguros.com/encontre-seu-plano" />
      </Helmet>

      <CorretorHero operadora="um plano de saúde" />

      {/* HERO */}
      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Consultoria Especializada</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight italic">
                Encontre o plano de saúde <br className="hidden md:block" />
                <span className="text-blue-600">ideal para você.</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                Trabalhamos com as <span className="text-blue-600 font-black uppercase">principais operadoras</span> do mercado. Deixe seus dados e encontraremos a melhor opção para o seu perfil e orçamento.
              </p>
              <div className="flex flex-row justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> Atendimento 5 estrelas
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck size={14} className="text-blue-600" /> 100% Gratuito
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[320px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!sent ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a3a52] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input name="nome" type="text" required placeholder="Seu Nome"
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)"
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <button type="submit"
                          className="w-full bg-[#1a3a52] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          SOLICITAR VIA WHATSAPP <MessageCircle size={16} />
                        </button>
                        <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic">Você será direcionado para o WhatsApp do Rodrigo</p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <PartyPopper size={40} />
                      </div>
                      <h3 className="text-2xl font-black text-[#1a3a52] italic">Encaminhando...</h3>
                      <p className="text-slate-500 font-medium text-sm">Estamos abrindo o WhatsApp. Se não abrir, <a href={`https://wa.me/${MEU_NUMERO}`} className="text-blue-600 font-bold underline">clique aqui</a>.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERADORAS */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-[#1a3a52] italic text-center mb-3">Ou escolha diretamente sua operadora</h2>
          <p className="text-slate-500 text-center font-medium mb-10">Clique para ver planos e cotar diretamente</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {operadoras.map((op) => (
              <Link key={op.nome} to={op.path}
                className={`bg-white border-2 ${op.cor} rounded-2xl p-5 flex flex-col items-center gap-3 transition-all hover:shadow-md hover:-translate-y-0.5`}>
                <div className="h-12 flex items-center justify-center">
                  <img src={op.logo} alt={op.nome} className="max-h-10 max-w-[100px] object-contain"
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
          <h2 className="text-3xl md:text-4xl font-black text-[#1a3a52] italic text-center mb-3">Por que usar a Elevance?</h2>
          <p className="text-slate-500 text-center font-medium mb-12">Consultoria gratuita, atendimento humano</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[30px] p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#1a3a52] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm leading-relaxed font-medium">{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1a3a52] rounded-[50px] p-12 text-center relative overflow-hidden">
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
    </>
  );
}
