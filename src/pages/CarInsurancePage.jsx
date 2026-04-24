import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Car, Wrench, AlertTriangle, Key, Clock, 
  CheckCircle2, Star, ChevronRight, Loader2, Send 
} from 'lucide-react';
import FAQItem from '@/components/FAQItem';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const CarInsurancePage = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatWhatsapp = (v) => {
    const nums = v.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 2) return nums;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome.trim()) { setErro("Informe seu nome."); return; }
    const nums = whatsapp.replace(/\D/g, "");
    if (nums.length < 10) { setErro("WhatsApp inválido."); return; }
    
    setErro("");
    setLoading(true);
    
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome: nome.trim(), 
          whatsapp: nums, 
          origem: "elevanceseguros.com/seguro-auto",
          produto: "Seguro Auto" 
        }),
      });
      setEnviado(true);
    } catch {
      setErro("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const coverages = [
    { icon: <AlertTriangle className="w-8 h-8 text-blue-600" />, title: "Colisão e Danos", desc: "Batidas, incêndios e danos da natureza." },
    { icon: <Key className="w-8 h-8 text-blue-600" />, title: "Roubo e Furto", desc: "Indenização de até 100% da tabela FIPE." },
    { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, title: "Danos a Terceiros", desc: "Cobertura para danos materiais e corporais a outros." },
    { icon: <Clock className="w-8 h-8 text-blue-600" />, title: "Assistência 24h", desc: "Guincho, chaveiro e socorro em todo Brasil." }
  ];

  return (
    <>
      <Helmet>
        <title>Seguro Auto Completo | Cotação Online - Elevance Seguros</title>
        <meta name="description" content="Proteja seu carro com o melhor seguro auto. Cobertura para roubo, colisão e assistência 24h." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1694266108404-33b6afd2c15d" alt="Seguro Auto" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Seguro Auto <br/><span className="text-blue-400">Sem Burocracia</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                Dirija protegido. Receba as melhores opções de seguro direto no seu WhatsApp em poucos minutos.
              </p>
            </motion.div>

            {/* FORMULÁRIO PADRONIZADO */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md mx-auto lg:ml-auto">
              <AnimatePresence mode="wait">
                {!enviado ? (
                  <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                    <h3 className="text-[#1a3a52] text-2xl font-bold mb-6">Cotação em 1 minuto</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Seu Nome</label>
                        <input
                          type="text"
                          required
                          value={nome}
                          onChange={e => setNome(e.target.value)}
                          placeholder="Nome completo"
                          className="w-full px-4 py-4 rounded-xl border border-slate-200 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">WhatsApp</label>
                        <input
                          type="tel"
                          required
                          value={whatsapp}
                          onChange={e => setWhatsapp(formatWhatsapp(e.target.value))}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-4 rounded-xl border border-slate-200 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      {erro && <p className="text-red-500 text-sm">{erro}</p>}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all text-lg"
                      >
                        {loading ? <Loader2 className="animate-spin" /> : <>QUERO UMA COTAÇÃO <Send className="w-5 h-5" /></>}
                      </button>
                    </form>
                  </div>
                ) : (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white p-12 rounded-3xl text-center shadow-2xl">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-[#1a3a52] font-bold text-2xl">Solicitado!</h3>
                    <p className="text-slate-500 mt-2 text-lg">Nossa equipe entrará em contato via WhatsApp agora mesmo.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverages Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Coberturas Principais</h2>
            <p className="text-lg text-slate-600">Proteção real para o seu patrimônio</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverages.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ficou com alguma dúvida?</h2>
          <p className="text-xl mb-10 opacity-80">Chame agora no WhatsApp e fale com nossos especialistas.</p>
          <a 
            href="https://wa.me/5511920144864" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl"
          >
            FALAR NO WHATSAPP <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </>
  );
};

export default CarInsurancePage;
