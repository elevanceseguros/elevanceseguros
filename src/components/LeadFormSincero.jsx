import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, Loader2 } from 'lucide-react';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const LeadFormSincero = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const formatWhatsapp = (v) => {
    const nums = v.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 2) return nums;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome: nome.trim(), 
          whatsapp: whatsapp.replace(/\D/g, ""), 
          origem: window.location.pathname,
          produto: "Lead Site Principal" 
        }),
      });
      setEnviado(true);
    } catch (err) {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 relative z-30">
      <AnimatePresence mode="wait">
        {!enviado ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-slate-100"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-grow text-center lg:text-left">
                <h3 className="text-[#1a3a52] font-bold text-2xl mb-1">Cotação Rápida</h3>
                <p className="text-slate-500 text-sm">Receba as melhores opções no seu WhatsApp.</p>
              </div>

              <form onSubmit={handleSubmit} className="w-full lg:w-auto flex flex-col md:flex-row gap-4 items-end">
                <div className="w-full md:w-64 text-left">
                  <label className="block text-xs font-bold text-slate-400 mb-1 uppercase ml-1">Nome</label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800"
                  />
                </div>
                
                <div className="w-full md:w-64 text-left">
                  <label className="block text-xs font-bold text-slate-400 mb-1 uppercase ml-1">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={e => setWhatsapp(formatWhatsapp(e.target.value))}
                    placeholder="(11) 99999-9999"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-[#1a3a52] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "COTAR AGORA"}
                  {!loading && <ChevronRight className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-10 text-center border-2 border-green-100"
          >
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-[#1a3a52] text-2xl font-bold mb-2">Solicitação Enviada!</h3>
            <p className="text-slate-500">Nossa equipe entrará em contato via WhatsApp em instantes.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadFormSincero;
