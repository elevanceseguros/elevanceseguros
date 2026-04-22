import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LeadFormSincero = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        nome, 
        whatsapp: whatsapp.replace(/\D/g, ""), 
        origem: "Home Principal",
        produto: "Lead Padronizado"
      }),
    });
    setEnviado(true);
  };

  if (enviado) return <div className="p-8 bg-white rounded-2xl shadow-xl text-center text-green-600 font-bold border-2 border-green-500">Solicitação Enviada! Chamaremos no WhatsApp.</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-2xl border-4 border-blue-500"> 
      {/* Coloquei uma borda azul grossa para você ter certeza que o código novo carregou */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
          <input required type="text" placeholder="Seu nome" className="w-full p-4 bg-gray-50 border rounded-xl" onChange={e => setNome(e.target.value)} />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
          <input required type="tel" placeholder="(11) 99999-9999" className="w-full p-4 bg-gray-50 border rounded-xl" onChange={e => setWhatsapp(e.target.value)} />
        </div>
        <button type="submit" className="w-full md:w-auto bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-black uppercase tracking-widest">COTAR AGORA</button>
      </form>
    </div>
  );
};

export default LeadFormSincero;
