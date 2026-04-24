import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Phone, CheckCircle, Send } from 'lucide-react';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const VehicleProtection = () => {
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
          nome, 
          whatsapp: whatsapp.replace(/\D/g, ""), 
          origem: "elevanceseguros.com",
          produto: "Proteção Veicular APVS" 
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
    <section className="py-20 bg-[#114d8e] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proteção Veicular <span className="text-blue-400 text-5xl">APVS</span></h2>
            <p className="text-blue-100 text-lg mb-8">A proteção que seu veículo precisa com o custo que você pode pagar. Roubo, furto, colisão e assistência 24h em todo Brasil.</p>
            <div className="space-y-4 mb-8">
              {["Sem análise de perfil/condutor", "Sem consulta SPC/Serasa", "Assistência 24h completa"].map((t, i) => (
                <div key={i} className="flex items-center gap-3"><CheckCircle className="text-blue-400 w-5 h-5" /> <span>{t}</span></div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <AnimatePresence mode="wait">
              {!enviado ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-8 rounded-3xl shadow-2xl">
                  <h3 className="text-[#114d8e] text-2xl font-bold mb-6 text-center">Cotação APVS em 1 minuto</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" required placeholder="Seu Nome" value={nome} onChange={e => setNome(e.target.value)} className="w-full p-4 rounded-xl border border-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="tel" required placeholder="WhatsApp (DDD)" value={whatsapp} onChange={e => setWhatsapp(formatWhatsapp(e.target.value))} className="w-full p-4 rounded-xl border border-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                      {loading ? "Enviando..." : "SOLICITAR PREÇO APVS"} <Send className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <div className="bg-white p-12 rounded-3xl text-center"><CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" /><h3 className="text-gray-900 font-bold text-xl">Solicitado!</h3><p className="text-gray-500">Nossa IA já te chamará no Zap.</p></div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleProtection;
