import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Zap, Car, CheckCircle2, MessageCircle, PartyPopper, ArrowRight } from 'lucide-react';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const beneficios = [
  { icon: <ShieldCheck size={28} className="text-blue-600" />, titulo: "Cobertura Completa", desc: "Proteção contra roubo, furto, colisão e danos a terceiros" },
  { icon: <Zap size={28} className="text-blue-600" />, titulo: "Socorro 24h", desc: "Assistência imediata em qualquer situação na estrada" },
  { icon: <Car size={28} className="text-blue-600" />, titulo: "Carro Reserva", desc: "Veículo reserva enquanto o seu está em reparo" },
  { icon: <Star size={28} className="text-blue-600" />, titulo: "Melhor Preço", desc: "Comparamos várias seguradoras para garantir o melhor custo" },
];

export default function SeguroAutoPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = formData.get('whatsapp');
    const mensagem = encodeURIComponent(`Olá Rodrigo! Me chamo ${nome}. Vi o site da Elevance Seguros e gostaria de cotar um Seguro Auto. Meu WhatsApp é: ${whatsapp}`);
    window.open(`https://wa.me/${MEU_NUMERO}?text=${mensagem}`, '_blank');
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Seguro Auto em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Seguro auto em São Paulo com as melhores seguradoras. Cobertura completa, melhor preço. Cotação gratuita via WhatsApp." />
        <meta name="keywords" content="seguro auto SP, seguro carro São Paulo, cotação seguro auto" />
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Seguro Auto","provider":{"@type":"InsuranceAgency","name":"Elevance Seguros","telephone":"(11) 92014-4864","url":"https://elevanceseguros.com"},"areaServed":{"@type":"Country","name":"Brasil"},"name":"Seguro Auto"}`}} />
        <link rel="canonical" href="https://elevanceseguros.com/seguro-auto" />
      </Helmet>

      <CorretorHero operadora="um Seguro Auto" />

      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Proteção Completa</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight italic">
                Seu carro protegido com o <br className="hidden md:block" />
                <span className="text-blue-600">Seguro Auto ideal.</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                Comparamos as <span className="text-blue-600 font-black uppercase">principais seguradoras</span> e encontramos a melhor cobertura pelo menor preço para você.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {["Cobertura contra roubo, furto e colisão", "Assistência 24h na estrada", "Carro reserva disponível", "Proteção a terceiros", "Vidros e retrovisores inclusos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[320px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!sent ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a3a52] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input name="nome" type="text" required placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <button type="submit" className="w-full bg-[#1a3a52] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          SOLICITAR VIA WHATSAPP <MessageCircle size={16} />
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

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1a3a52] italic text-center mb-12">O que está incluso?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[30px] p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#1a3a52] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm font-medium leading-relaxed">{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1a3a52] rounded-[50px] p-12 text-center">
            <h2 className="text-3xl font-black text-white italic mb-3">Pronto para proteger seu carro?</h2>
            <p className="text-slate-300 font-medium mb-8">Cotação gratuita em minutos</p>
            <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero cotar um Seguro Auto`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
