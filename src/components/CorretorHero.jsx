import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, Clock } from 'lucide-react';

const CorretorHero = ({ operadora = "" }) => {
  const [atendimentos, setAtendimentos] = useState(0);

  useEffect(() => {
    // Número pseudo-realista baseado na hora do dia
    const hora = new Date().getHours();
    const base = hora < 9 ? 2 : hora < 12 ? 5 : hora < 15 ? 8 : hora < 18 ? 11 : hora < 21 ? 7 : 3;
    setAtendimentos(base + Math.floor(Math.random() * 3));
  }, []);

  return (
    <div className="bg-white border-b border-slate-100 py-3 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Foto */}
          <div className="relative shrink-0">
            <div className="w-11 h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-200">
              <img src="/preview.webp" alt="Rodrigo Farias" className="w-full h-full object-cover object-center" loading="eager" decoding="async" fetchpriority="high" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 w-3 h-3 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          {/* Info */}
          <div>
            <div className="font-black text-[#114d8e] text-sm leading-tight">Rodrigo Farias</div>
            <div className="flex gap-0.5 my-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={9} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <div className="flex items-center gap-1 text-green-600 text-[10px] font-black">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block"></span>
              Online agora · Responde em minutos
            </div>
          </div>
          {/* Divisor */}
          <div className="hidden sm:flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-xl px-3 py-1.5 ml-2">
            <Clock size={11} className="text-blue-500" />
            <span className="text-[10px] font-black text-blue-600">{atendimentos} pessoas consultaram hoje</span>
          </div>
        </div>

        {operadora && (
          <a href={`https://wa.me/5511920144864?text=Olá Rodrigo, vim pelo site e quero cotar ${operadora}`}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wide transition-colors whitespace-nowrap shadow-md">
            <MessageCircle size={13} /> Falar agora — é gratuito
          </a>
        )}
      </div>
    </div>
  );
};

export default CorretorHero;
