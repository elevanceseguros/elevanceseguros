import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ScrollCTA = ({ produto = "Seguro ou Plano de Saúde", pagina = "/" }) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && scrolled / total > 0.55) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] px-4 pb-4 pointer-events-none">
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <div className="bg-[#114d8e] rounded-2xl shadow-[0_-4px_30px_rgba(17,77,142,0.4)] p-4 flex items-center justify-between gap-4 border border-blue-400/20">
          <div className="flex-1 min-w-0">
            <p className="text-white font-black text-sm leading-tight">Ainda tem dúvidas sobre <span className="text-yellow-300">{produto}</span>?</p>
            <p className="text-white/70 text-[11px] mt-0.5">Rodrigo responde agora, sem compromisso.</p>
          </div>
          <a
            href={`https://wa.me/5511920144864?text=Olá Rodrigo! Tenho dúvidas sobre ${produto}`}
            target="_blank" rel="noreferrer"
            className="shrink-0 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wide transition-all shadow-lg whitespace-nowrap">
            <MessageCircle size={14} /> Falar agora
          </a>
          <button onClick={() => { setDismissed(true); setVisible(false); }}
            className="shrink-0 text-white/50 hover:text-white transition-colors p-1">
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollCTA;
