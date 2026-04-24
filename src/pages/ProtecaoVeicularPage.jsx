import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Zap, Car, CheckCircle2, MessageCircle, PartyPopper, ArrowRight } from 'lucide-react';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const beneficios = [
  { icon: <ShieldCheck size={28} className="text-blue-600" />, titulo: "Sem Análise de Perfil", desc: "Aprovação imediata, sem consulta ao SPC/Serasa" },
  { icon: <Car size={28} className="text-blue-600" />, titulo: "Rastreador Grátis", desc: "Rastreador instalado sem custo adicional" },
  { icon: <Zap size={28} className="text-blue-600" />, titulo: "Menor Mensalidade", desc: "Economia de até 50% comparado ao seguro tradicional" },
  { icon: <Star size={28} className="text-blue-600" />, titulo: "Maior da América Latina", desc: "APVS: maior rede de proteção veicular do continente" },
];

export default function ProtecaoVeicularPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = formData.get('whatsapp');
    const mensagem = encodeURIComponent(`Olá Rodrigo! Me chamo ${nome}. Vi o site da Elevance Seguros e gostaria de cotar Proteção Veicular. Meu WhatsApp é: ${whatsapp}`);
    window.open(`https://wa.me/${MEU_NUMERO}?text=${mensagem}`, '_blank');
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Proteção Veicular em São Paulo | APVS - Elevance Seguros</title>
        <meta name="description" content="Proteção veicular APVS em São Paulo. Sem análise de perfil, rastreador grátis, menor mensalidade. Cotação gratuita via WhatsApp." />
        <meta name="keywords" content="proteção veicular SP, APVS São Paulo, proteção carro sem SPC" />
      </Helmet>

      <CorretorHero operadora="Proteção Veicular" />

      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">APVS · Maior da América Latina</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight italic">
                Proteção Veicular <br className="hidden md:block" />
                <span className="text-blue-600">sem burocracia.</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                A <span className="text-blue-600 font-black uppercase">maior rede de proteção veicular</span> da América Latina no seu carro ou moto. Sem consulta ao SPC/Serasa.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {["Aprovação imediata, sem análise de perfil", "Rastreador instalado gratuitamente", "Mensalidade até 50% menor que seguro tradicional", "Cobertura para carro e moto", "Assistência 24h em todo o Brasil"].map((item, i) => (
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
          <h2 className="text-3xl font-black text-[#1a3a52] italic text-center mb-12">Vantagens da Proteção Veicular</h2>
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
            <h2 className="text-3xl font-black text-white italic mb-3">Proteja seu veículo agora</h2>
            <p className="text-slate-300 font-medium mb-8">Sem burocracia, aprovação imediata</p>
            <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero cotar Proteção Veicular APVS`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
