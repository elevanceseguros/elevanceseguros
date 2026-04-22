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
    <div className="max-w-5xl mx-auto px-4 relative z-30">
      <AnimatePresence mode="wait">
        {!enviado ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl md:rounded-[40px] shadow-2xl p-6 md:p-8 border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              {/* Texto Lateral - Escondido no mobile para ganhar espaço, ou pequeno */}
              <div className="w-full md:w-auto md:min-w-[150px] text-center md:text-left mb-2 md:mb-0">
                <h3 className="text-[#1a3a52] font-bold text-xl md:text-lg leading-tight">Cotação Rápida</h3>
                <p className="text-slate-500 text-xs hidden md:block">Receba no WhatsApp</p>
              </div>

              {/* Input Nome */}
              <div className="w-full flex-1">
                <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase ml-1">Nome</label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800 text-sm"
                />
              </div>
              
              {/* Input WhatsApp */}
              <div className="w-full flex-1">
                <label className="block text-[10px] font-bold text-slate-400 mb-1 uppercase ml-1">WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={e => setWhatsapp(formatWhatsapp(e.target.value))}
                  placeholder="(11) 99999-9999"
                  className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800 text-sm"
                />
              </div>

              {/* Botão */}
              <div className="w-full md:w-auto pt-2 md:pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-[180px] bg-[#1a3a52] hover:bg-[#244b69] text-white font-bold h-[52px] md:h-[60px] rounded-xl md:rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
                >
                  {loading ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <>
                      <span className="text-sm md:text-base">COTAR AGORA</span>
                      <ChevronRight className="w-4 h-4 md:w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[40px] shadow-2xl p-8 text-center border-2 border-green-100"
          >
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <h3 className="text-[#1a3a52] text-xl font-bold">Solicitação Enviada!</h3>
            <p className="text-slate-500 text-sm">Chamaremos você no WhatsApp em instantes.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadFormSincero;
