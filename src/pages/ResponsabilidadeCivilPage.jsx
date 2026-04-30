import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Building2, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Star, Scale , LayoutList} from 'lucide-react';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const modalidades = [
  { icon: <Building2 size={28} className="text-violet-600" />, titulo: "RC Geral", desc: "Proteção para danos causados a terceiros no exercício das atividades da empresa." },
  { icon: <Scale size={28} className="text-violet-600" />, titulo: "RC Profissional", desc: "Para profissionais liberais: médicos, advogados, engenheiros, consultores e outros." },
  { icon: <ShieldCheck size={28} className="text-violet-600" />, titulo: "RC Produtos", desc: "Cobre danos causados por produtos fabricados, distribuídos ou vendidos pela empresa." },
  { icon: <Star size={28} className="text-violet-600" />, titulo: "D&O", desc: "Directors & Officers — proteção para decisões de gestores e diretores de empresas." },
];

export default function ResponsabilidadeCivilPage() {
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
        body: JSON.stringify({ nome, whatsapp, produto: 'Seguro de Responsabilidade Civil', origem: window.location.pathname }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Seguro de Responsabilidade Civil | RC - Elevance Seguros</title>
        <meta name="description" content="Seguro de Responsabilidade Civil para empresas e profissionais em SP. RC Geral, RC Profissional, RC Produtos e D&O. Cotação gratuita via WhatsApp." />
        <meta name="keywords" content="seguro responsabilidade civil SP, RC profissional São Paulo, seguro RC empresa, D&O seguro" />
        <link rel="canonical" href="https://elevanceseguros.com/responsabilidade-civil" />
      </Helmet>

      <CorretorHero operadora="Seguro de Responsabilidade Civil" />

      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 bg-gradient-to-b from-violet-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-violet-100 text-violet-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">RC · Responsabilidade Civil</span>
              <h1 className="text-3xl md:text-5xl font-black text-[#114d8e] leading-tight italic">
                Proteja sua empresa <br className="hidden md:block" />
                <span className="text-violet-600">de processos e indenizações.</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                O seguro de RC cobre os danos que sua empresa ou você, como profissional, podem causar a <span className="text-violet-600 font-black uppercase">terceiros</span> no exercício das suas atividades.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {["Cobertura para danos materiais e corporais a terceiros", "RC Profissional para liberal (médico, advogado, engenheiro)", "Proteção contra erros e omissões em prestação de serviços", "Cobertura para danos causados por produtos", "D&O para diretores e gestores de empresas"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-row justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> Obrigatório em muitas licitações
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck size={14} className="text-violet-600" /> Regulado pela SUSEP
                </div>
              </div>
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
                        <input name="nome" type="text" required placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-violet-500 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-violet-500 transition-all" />
                        <button type="submit" className="w-full bg-[#114d8e] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          RECEBER CONTATO GRATUITO <MessageCircle size={16} />
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
          <h2 className="text-3xl font-black text-[#114d8e] italic text-center mb-12">Modalidades disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modalidades.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-violet-50 rounded-[30px] p-8 border border-violet-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#114d8e] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm font-medium leading-relaxed">{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabela + Depoimento */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Tabela de valores */}
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-[#114d8e] p-6 text-white flex items-center gap-3">
                <LayoutList className="w-5 h-5 opacity-80" />
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Valores Referenciais</h2>
                  <p className="text-white/70 text-xs mt-0.5">SP 2026 · Varia por atividade e capital</p>
                </div>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-50 text-left">
                      <th className="py-3 font-bold text-slate-400 text-xs uppercase">Modalidade</th>
                      <th className="py-3 font-bold text-slate-600 text-xs uppercase">Capital Segurado</th>
                      <th className="py-3 font-bold text-[#114d8e] text-xs uppercase">Prêmio anual aprox.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">RC Geral · Prestador de Serviço</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">R$ 100.000</td>
                        <td className="py-3 font-black text-sm text-[#114d8e]">R$ 800 – R$ 1.500/ano</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">RC Profissional · Liberal</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">R$ 500.000</td>
                        <td className="py-3 font-black text-sm text-[#114d8e]">R$ 1.800 – R$ 3.500/ano</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">RC Produtos · Fabricante</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">R$ 1.000.000</td>
                        <td className="py-3 font-black text-sm text-[#114d8e]">A partir de R$ 3.000/ano</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">D&O · Diretores e Gestores</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">Conforme empresa</td>
                        <td className="py-3 font-black text-sm text-[#114d8e]">Sob consulta</td>
                      </tr>
                  </tbody>
                </table>
                <p className="text-[10px] text-slate-400 italic mt-3">*Valores referenciais. Variam por seguradora, atividade e capital segurado.</p>
                <a
                  href={`https://wa.me/5511920144864?text=Ol%C3%A1+Rodrigo%2C+quero+cotar+Seguro+RC`}
                  target="_blank" rel="noreferrer"
                  className="w-full mt-5 bg-[#114d8e] hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2">
                  Solicitar Cotação de RC <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Depoimento */}
            <div className="bg-white p-6 rounded-[30px] shadow-xl border border-slate-100 flex flex-col justify-center">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic font-medium">&ldquo;Como médico, a RC Profissional é indispensável. O Rodrigo me explicou cada detalhe da cobertura e encontrou a melhor opção do mercado para minha especialidade.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#114d8e] flex items-center justify-center text-white font-black text-sm shrink-0">
                  C
                </div>
                <div>
                  <div className="font-black text-[#114d8e] text-sm">Carlos</div>
                  <div className="text-slate-400 text-xs font-medium">São Paulo, SP · RC Profissional</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#114d8e] rounded-[50px] p-12 text-center">
            <h2 className="text-3xl font-black text-white italic mb-3">Sua empresa está protegida?</h2>
            <p className="text-slate-300 font-medium mb-8">Cotação gratuita e sem compromisso</p>
            <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero cotar Seguro de Responsabilidade Civil`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
