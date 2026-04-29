import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const ContactForm = ({ produto = "Contato Geral" }) => {
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
    if (!nome.trim()) { setErro("Por favor, informe o seu nome."); return; }
    const nums = whatsapp.replace(/\D/g, "");
    if (nums.length < 10) { setErro("WhatsApp inválido. Inclua o DDD."); return; }
    
    setErro("");
    setLoading(true);
    
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome: nome.trim(), 
          whatsapp: nums, 
          origem: window.location.pathname,
          produto 
        }),
      });
      setEnviado(true);
    } catch {
      setErro("Erro ao enviar. Tente novamente ou use o botão do WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Lado Esquerdo - Info */}
          <div className="bg-[#114d8e] p-8 md:p-12 text-white md:w-2/5">
            <h2 className="text-3xl font-bold mb-6 text-white">Ainda tem dúvidas?</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Deixe os seus dados e a nossa consultoria inteligente entrará em contacto consigo em minutos.
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-blue-300" />
                  </div>
                  <span className="text-sm">Atendimento via WhatsApp</span>
               </div>
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="p-8 md:p-12 md:w-3/5">
            <AnimatePresence mode="wait">
              {!enviado ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 text-left">Nome Completo</label>
                    <input
                      type="text"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      placeholder="Como se chama?"
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 text-left">WhatsApp (com DDD)</label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={e => setWhatsapp(formatWhatsapp(e.target.value))}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>

                  {erro && <p className="text-red-500 text-sm font-medium">{erro}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg"
                  >
                    {loading ? "A enviar..." : <>Falar com Consultor <Send className="w-4 h-4" /></>}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-[#114d8e] text-2xl font-bold mb-2">Mensagem Recebida!</h3>
                  <p className="text-slate-500">A nossa IA já foi notificada. Fique atento ao seu WhatsApp.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
