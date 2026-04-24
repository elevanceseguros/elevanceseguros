import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Car, Building2, CheckCircle, Send } from 'lucide-react';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const Consortiums = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome, 
          whatsapp: whatsapp.replace(/\D/g, ""), 
          origem: "elevanceseguros.com",
          produto: "Consórcio (Imóvel/Auto)" 
        }),
      });
      setEnviado(true);
    } catch (err) { alert("Erro ao enviar."); }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#114d8e] mb-4">Realize Seus Sonhos com Consórcio</h2>
          <p className="text-gray-500 text-lg">A forma mais inteligente de planejar a compra do seu imóvel ou veículo sem pagar juros abusivos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-blue-50 rounded-2xl text-center"><Home className="w-8 h-8 text-blue-600 mx-auto mb-2" /><span className="font-bold text-[#114d8e]">Imóveis</span></div>
             <div className="p-6 bg-blue-50 rounded-2xl text-center"><Car className="w-8 h-8 text-blue-600 mx-auto mb-2" /><span className="font-bold text-[#114d8e]">Automóveis</span></div>
             <div className="p-6 bg-blue-50 rounded-2xl text-center"><Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" /><span className="font-bold text-[#114d8e]">Pesados</span></div>
             <div className="p-6 bg-blue-50 rounded-2xl text-center"><CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" /><span className="font-bold text-[#114d8e]">Menor Taxa</span></div>
          </div>

          <AnimatePresence mode="wait">
            {!enviado ? (
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold mb-6 text-[#114d8e]">Simule agora sem compromisso</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" required placeholder="Seu Nome" value={nome} onChange={e => setNome(e.target.value)} className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="tel" required placeholder="Seu WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
                  <button type="submit" className="w-full bg-[#114d8e] text-white font-bold py-4 rounded-xl hover:bg-black transition-all flex items-center justify-center gap-2">SOLICITAR SIMULAÇÃO <Send className="w-4 h-4" /></button>
                </form>
              </div>
            ) : (
              <div className="text-center p-12 bg-green-50 rounded-3xl"><CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" /><h3 className="text-green-800 font-bold">Pedido Enviado!</h3><p className="text-green-600">Aguarde o contato no Zap.</p></div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Consortiums;
