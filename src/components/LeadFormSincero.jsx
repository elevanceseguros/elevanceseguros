import React, { useState } from 'react';

const LeadFormSincero = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, whatsapp, origem: "Home Novo", produto: "Lead Padronizado" }),
    });
    setEnviado(true);
  };

  if (enviado) return <div className="p-10 bg-green-100 text-green-800 rounded-2xl text-center font-bold">SOLICITAÇÃO RECEBIDA!</div>;

  return (
    <div className="max-w-4xl mx-auto bg-yellow-400 p-10 rounded-3xl shadow-2xl border-8 border-black"> 
      {/* AMARELO E PRETO: impossível não ver se atualizar */}
      <h2 className="text-black font-black text-2xl mb-6 text-center uppercase">Faça sua Cotação Agora</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full text-left">
          <label className="block text-sm font-black text-black mb-2 uppercase">Nome</label>
          <input required type="text" placeholder="Seu nome" className="w-full p-4 bg-white border-2 border-black rounded-none" onChange={e => setNome(e.target.value)} />
        </div>
        <div className="flex-1 w-full text-left">
          <label className="block text-sm font-black text-black mb-2 uppercase">WhatsApp</label>
          <input required type="tel" placeholder="(11) 99999-9999" className="w-full p-4 bg-white border-2 border-black rounded-none" onChange={e => setWhatsapp(e.target.value)} />
        </div>
        <button type="submit" className="w-full md:w-auto bg-black text-white font-black px-10 py-4 rounded-none hover:bg-white hover:text-black transition-all uppercase">COTAR AGORA</button>
      </form>
    </div>
  );
};

export default LeadFormSincero;
