import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ScrollCTA = ({ produto }) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const meuNumero = "5511920144864";

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed && window.scrollY > 400) setVisible(true);
      else if (window.scrollY <= 400) setVisible(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[90] transition-all duration-500"
      style={{filter: 'drop-shadow(0 20px 40px rgba(7,27,52,0.4))'}}>
      <div className="relative rounded-2xl p-4 flex items-center gap-4"
        style={{background: '#071B34', border: '1px solid rgba(200,169,107,0.25)', boxShadow: '0 0 40px rgba(200,169,107,0.1)'}}>
        {/* Linha dourada topo */}
        <div className="absolute top-0 left-8 right-8 h-px" style={{background: 'linear-gradient(to right, transparent, rgba(200,169,107,0.5), transparent)'}}></div>

        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm leading-tight">
            Ainda tem dúvidas sobre <span className="text-gold-gradient font-bold">{produto}</span>?
          </p>
          <p className="text-xs mt-0.5" style={{color: 'rgba(255,255,255,0.4)'}}>Rodrigo responde agora, sem compromisso.</p>
        </div>

        <a href={`https://wa.me/${meuNumero}?text=Olá! Tenho dúvidas sobre ${produto}`}
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shrink-0 transition-all hover:scale-105"
          style={{background: '#16a34a'}}>
          <MessageCircle size={14}/> Falar Agora
        </a>

        <button onClick={() => setDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{background: '#071B34', border: '1px solid rgba(200,169,107,0.3)', color: 'rgba(255,255,255,0.5)'}}>
          <X size={11}/>
        </button>
      </div>
    </div>
  );
};

export default ScrollCTA;
