import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TopQuoteForm = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await fetch("https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome, 
          whatsapp: whatsapp.replace(/\D/g, ""), 
          origem: window.location.href,
          produto: "Lead Direto"
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center border-2 border-green-500">
        <h3 className="text-2xl font-bold text-green-600">Enviado com Sucesso!</h3>
        <p className="text-gray-600">A nossa IA chamará no seu WhatsApp em instantes.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full text-left">
          <label className="block text-sm font-bold text-gray-700 mb-2">Nome</label>
          <input
            required
            type="text"
            placeholder="Seu nome"
            className="w-full p-4 bg-gray-50 border rounded-xl outline-none focus:border-blue-500"
            onChange={e => setNome(e.target.value)}
          />
        </div>
        <div className="flex-1 w-full text-left">
          <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
          <input
            required
            type="tel"
            placeholder="(11) 99999-9999"
            className="w-full p-4 bg-gray-50 border rounded-xl outline-none focus:border-blue-500"
            onChange={e => setWhatsapp(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full md:w-auto bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition-all uppercase tracking-widest"
        >
          {status === "loading" ? "..." : "COTAR AGORA"}
        </button>
      </form>
      {status === "error" && <p className="text-red-500 mt-2">Erro ao enviar. Tente novamente.</p>}
    </div>
  );
};

export default TopQuoteForm;
