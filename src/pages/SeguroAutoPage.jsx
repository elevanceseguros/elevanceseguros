import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Car, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Star, Users, LayoutList } from 'lucide-react';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const beneficios = [
  { icon: <ShieldCheck size={28} className="text-blue-600" />, titulo: "Cobertura Completa", desc: "Proteção contra roubo, furto, colisão e danos a terceiros." },
  { icon: <Car size={28} className="text-blue-600" />, titulo: "Carro Reserva", desc: "Veículo reserva enquanto o seu está em reparo." },
  { icon: <Zap size={28} className="text-blue-600" />, titulo: "Socorro 24h", desc: "Assistência imediata em qualquer situação na estrada." },
  { icon: <Star size={28} className="text-blue-600" />, titulo: "Melhor Preço", desc: "Comparamos várias seguradoras para garantir o melhor custo." },
];

const tabela = [
  { perfil: "Veículo até R$ 40k · Motorista 30 anos", franquia: "R$ 2.800", mensalidade: "R$ 120 – R$ 180" },
  { perfil: "Veículo até R$ 80k · Motorista 35 anos", franquia: "R$ 3.200", mensalidade: "R$ 200 – R$ 320" },
  { perfil: "Veículo até R$ 150k · Motorista 40 anos", franquia: "R$ 4.500", mensalidade: "R$ 350 – R$ 520" },
];

const depoimento = {
  inicial: "W", nome: "Warlei", local: "Ouro Fino, MG", produto: "Seguro Auto",
  texto: "Agradeço pela atenção! Pelas dúvidas sanadas e por conseguir o melhor preço no meu seguro auto. Recomendo o Rodrigo sem hesitar."
};

export default function SeguroAutoPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get("nome");
    const whatsapp = formData.get("whatsapp");
    const msg = encodeURIComponent("Olá Rodrigo! Me chamo " + nome + ". Vim pelo site e gostaria de cotar um Seguro Auto. Meu WhatsApp é: " + whatsapp);
    window.open("https://wa.me/" + MEU_NUMERO + "?text=" + msg, "_blank");
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Seguro Auto em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Seguro auto em São Paulo com as melhores seguradoras. Cobertura completa, melhor preço. Cotação gratuita via WhatsApp." />
        <link rel="canonical" href="https://elevanceseguros.com/seguro-auto" />
      </Helmet>

      <CorretorHero operadora="um Seguro Auto" />

      {/* HERO */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Proteção Completa</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#114d8e] leading-tight italic">
                Seu carro protegido com o <span className="text-blue-600">Seguro Auto ideal.</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                Comparamos as <span className="text-blue-600 font-black uppercase">principais seguradoras</span> e encontramos a melhor cobertura pelo menor preço para você.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {["Cobertura contra roubo, furto e colisão","Assistência 24h na estrada","Carro reserva disponível","Proteção a terceiros","Vidros e retrovisores inclusos"].map((item, i) => (
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
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#114d8e] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input name="nome" type="text" required placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <button type="submit" className="w-full bg-[#114d8e] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          SOLICITAR VIA WHATSAPP <MessageCircle size={16} />
                        </button>
                        <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic">Você será direcionado para o WhatsApp do Rodrigo</p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto"><PartyPopper size={40} /></div>
                      <h3 className="text-2xl font-black text-[#114d8e] italic">Encaminhando...</h3>
                      <p className="text-slate-500 text-sm">Se não abrir, <a href={"https://wa.me/" + MEU_NUMERO} className="text-blue-600 font-bold underline">clique aqui</a>.</p>
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
          <h2 className="text-3xl font-black text-[#114d8e] italic text-center mb-12">O que está incluso?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-[30px] p-8 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#114d8e] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm font-medium leading-relaxed">{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TABELA + DEPOIMENTO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Tabela de preços */}
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-[#114d8e] p-6 text-white flex items-center gap-3">
                <LayoutList className="w-5 h-5 opacity-80" />
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Valores Referenciais</h2>
                  <p className="text-white/70 text-xs mt-0.5">SP 2026 · Varia por perfil e seguradora</p>
                </div>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-50 text-left">
                      <th className="py-3 font-bold text-slate-400 text-xs uppercase">Perfil</th>
                      <th className="py-3 font-bold text-slate-600 text-xs uppercase">Franquia</th>
                      <th className="py-3 font-bold text-[#114d8e] text-xs uppercase">Mensalidade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {tabela.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">{item.perfil}</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">{item.franquia}</td>
                        <td className="py-3 font-black text-sm text-[#114d8e]">{item.mensalidade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-slate-400 italic mt-3">*Valores referenciais. Variam por seguradora, perfil e cidade.</p>
                <button
                  onClick={() => window.open("https://wa.me/" + MEU_NUMERO + "?text=Ol%C3%A1+Rodrigo%2C+quero+cotar+Seguro+Auto", "_blank")}
                  className="w-full mt-5 bg-[#114d8e] hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2">
                  Cotar Meu Seguro <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Depoimento + seguradoras */}
            <div className="flex flex-col gap-6">
              {/* Depoimento */}
              <div className="bg-white p-6 rounded-[30px] shadow-xl border border-slate-100 flex-1">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic font-medium">&ldquo;{depoimento.texto}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#114d8e] flex items-center justify-center text-white font-black text-sm shrink-0">
                    {depoimento.inicial}
                  </div>
                  <div>
                    <div className="font-black text-[#114d8e] text-sm">{depoimento.nome}</div>
                    <div className="text-slate-400 text-xs font-medium">{depoimento.local} · {depoimento.produto}</div>
                  </div>
                </div>
              </div>

              {/* Seguradoras parceiras */}
              <div className="bg-[#114d8e] rounded-[30px] p-6 text-white relative overflow-hidden shadow-xl">
                <h3 className="text-xl font-black mb-2">Seguradoras Parceiras</h3>
                <p className="text-blue-100 text-sm font-medium mb-5">Cotamos nas principais do mercado para você ter o melhor preço.</p>
                <div className="grid grid-cols-3 gap-2">
                  {["Porto Seguro","Tokio Marine","Allianz","Bradesco Auto","Suhai","HDI"].map((s, i) => (
                    <div key={i} className="bg-white/10 rounded-xl py-2 px-3 text-center text-xs font-black text-white/90">{s}</div>
                  ))}
                </div>
                <Users className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#114d8e] rounded-[50px] p-12 text-center">
            <h2 className="text-3xl font-black text-white italic mb-3">Pronto para proteger seu carro?</h2>
            <p className="text-blue-100 font-medium mb-8">Cotação gratuita em minutos</p>
            <a href={"https://wa.me/" + MEU_NUMERO + "?text=Ol%C3%A1%2C+quero+cotar+um+Seguro+Auto"} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
