import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const CorretorHero = ({ operadora = "" }) => {
  return (
    <div className="bg-white border-b border-slate-100 py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Foto + info */}
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-200">
              <img src="/preview.webp" alt="Rodrigo Farias" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <div className="font-black text-[#1a3a52] text-sm">Rodrigo Farias</div>
            <div className="text-slate-400 text-xs font-medium">Corretor de Seguros · São Paulo</div>
            <div className="flex gap-0.5 mt-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />)}
            </div>
          </div>
        </div>

        {/* CTA discreto */}
        {operadora && (
          <a
            href={`https://wa.me/5511920144864?text=Olá Rodrigo, vim pelo site e quero cotar ${operadora}`}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wide transition-colors"
          >
            <MessageCircle size={14} /> Falar agora
          </a>
        )}
      </div>
    </div>
  );
};

export default CorretorHero;
