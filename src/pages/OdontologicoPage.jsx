import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, ShieldCheck, Zap, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Star, Heart } from 'lucide-react';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const beneficios = [
  { icon: <Smile size={28} className="text-sky-600" />, titulo: "Consultas e Limpeza", desc: "Consultas, limpeza e radiografias com custo acessível." },
  { icon: <ShieldCheck size={28} className="text-sky-600" />, titulo: "Sem Carência", desc: "Planos com carência reduzida ou zero para urgências." },
  { icon: <Heart size={28} className="text-sky-600" />, titulo: "Toda a Família", desc: "Planos individuais e familiares que cabem no orçamento." },
  { icon: <Star size={28} className="text-sky-600" />, titulo: "Rede Credenciada", desc: "Acesso a dentistas e clínicas em São Paulo e em todo o Brasil." },
];

export default function OdontologicoPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = formData.get('whatsapp');
    const mensagem = encodeURIComponent(`Olá Rodrigo! Me chamo ${nome}. Vi o site da Elevance Seguros e gostaria de cotar um Plano Odontológico. Meu WhatsApp é: ${whatsapp}`);
    window.open(`https://wa.me/${MEU_NUMERO}?text=${mensagem}`, '_blank');
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Plano Odontológico em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Planos odontológicos individuais e familiares em São Paulo. Consultas, tratamentos e urgências com a melhor rede credenciada. Cotação gratuita." />
        <meta name="keywords" content="plano odontológico SP, plano dental São Paulo, cotação plano odontológico" />
      </Helmet>

      <CorretorHero operadora="um Plano Odontológico" />

      {/* HERO */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Saúde Bucal Completa</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight italic">
                Sorria com <br className="hidden md:block" />
                <span className="text-sky-600">tranquilidade.</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                Planos odontológicos <span className="text-sky-600 font-black uppercase">acessíveis</span> para você e sua família. Consultas, tratamentos, urgências e muito mais.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {[
                  "Consultas e limpeza sem custo adicional",
                  "Tratamento de canal, extrações e restaurações",
                  "Ortodontia disponível em planos selecionados",
                  "Urgências e emergências cobertas",
                  "Rede credenciada em todo o Brasil",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-row justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> Atendimento 5 estrelas
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck size={14} className="text-sky-600" /> 100% Gratuito
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
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)"
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-sky-500 transition-all" />
                        <button type="submit"
                          className="w-full bg-[#1a3a52] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
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

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1a3a52] italic text-center mb-12">O que está incluso?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-sky-50 rounded-[30px] p-8 border border-sky-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#1a3a52] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm font-medium leading-relaxed">{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1a3a52] rounded-[50px] p-12 text-center">
            <h2 className="text-3xl font-black text-white italic mb-3">Pronto para cuidar do seu sorriso?</h2>
            <p className="text-slate-300 font-medium mb-8">Cotação gratuita e sem compromisso</p>
            <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero cotar um Plano Odontológico`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
