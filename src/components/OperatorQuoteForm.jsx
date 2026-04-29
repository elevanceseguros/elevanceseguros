import React, { useState } from 'react';
import { MessageCircle, Zap, PartyPopper } from 'lucide-react';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const OperatorQuoteForm = ({ operatorName }) => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = (formData.get('whatsapp') || '').replace(/[^0-9]/g, '');
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, whatsapp, produto: `Plano de Saúde ${operatorName}`, origem: window.location.pathname }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[320px] flex flex-col justify-center transition-all duration-500">
      {!sent ? (
        <>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#114d8e] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
            <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              name="nome" type="text" required placeholder="Seu Nome"
              className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
            <input
              name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)"
              className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all"
            />
            <button
              type="submit"
              className="w-full bg-[#114d8e] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2"
            >
              RECEBER CONTATO GRATUITO <MessageCircle size={16} />
            </button>
            <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic">
              Entraremos em contato no seu WhatsApp em instantes
            </p>
          </form>
        </>
      ) : (
        <div className="text-center space-y-6 animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <PartyPopper size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-[#114d8e] italic">Solicitação Enviada!</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OperatorQuoteForm;
