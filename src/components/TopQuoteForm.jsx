import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, MessageCircle } from 'lucide-react';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const TopQuoteForm = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const formatWhatsapp = (v) => {
    const nums = v.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 2) return nums;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome.trim()) { setErro("Por favor, informe seu nome."); return; }
    const nums = whatsapp.replace(/\D/g, "");
    if (nums.length < 10) { setErro("WhatsApp inválido. Inclua DDD."); return; }
    
    setErro("");
    setLoading(true);
    
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome: nome.trim(), 
          whatsapp: nums, 
          origem: "elevanceseguros.com", // Identifica que veio da Home principal
          produto: "Geral / Multi-produto" // A IA do WhatsApp faz a triagem
        }),
      });
      setEnviado(true);
    } catch {
      setErro("Erro ao enviar. Tente novamente ou chame no WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!enviado ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-[#1a3a52] font-bold text-xl md:text-2xl mb-2">
                  Cotação rápida e sem compromisso
                </h3>
                <p className="text-slate-500 text-sm">
                  Receba opções personalizadas no seu WhatsApp em instantes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col md:flex-row gap-4 items-end">
                <div className="w-full md:w-56">
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider text-left">Seu nome</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="Nome completo"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                  />
                </div>
                
                <div className="w-full md:w-56">
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wider text-left">WhatsApp</label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={e => setWhatsapp(formatWhatsapp(e.target.value))}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-200 text-sm"
                >
                  {loading ? "..." : "COTAR AGORA"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
            {erro && <p className="text-red-500 text-xs mt-3 text-left font-medium">{erro}</p>}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center border border-green-100"
          >
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-[#1a3a52] text-xl font-bold mb-2">Solicitação enviada!</h3>
            <p className="text-slate-500 text-sm">Fique atento ao seu WhatsApp, nossa IA entrará em contato agora.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopQuoteForm;
