import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  // Substitua o bloco da Seção Hero (o primeiro bloco dentro do return) por este:

  return (
    <div className="min-h-screen bg-white">
      {/* SEÇÃO HERO - AJUSTADA */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna do Texto - Mantida */}
          <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              Consultoria Especializada
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#1a3a52] leading-tight">
              Sua tranquilidade é <br className="hidden md:block"/> nosso maior seguro.
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
              Na Elevance Seguros, entregamos segurança real para sua família e seu patrimônio. Atendimento humano e suporte total.
            </p>
            {/* ... botões ... */}
          </div>

          {/* Coluna da Imagem - ONDE FIZEMOS O AJUSTE */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            {/* Container Principal da Imagem - Reduzido no Mobile */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-none lg:max-w-[500px] aspect-[4/5] md:aspect-auto overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl border-4 border-white">
              <img 
                src="/rodrigo-hero.webp" // Verifique se o nome/caminho está correto na pasta public
                alt="Rodrigo - Elevance Seguros" 
                className="w-full h-full object-cover object-top md:object-center" // 'object-top' foca no rosto no mobile
              />
              
              {/* Overlay de Degradê (opcional, para dar um charme) */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a3a52]/50 to-transparent md:hidden"></div>
            </div>

            {/* Badge 'ONLINE AGORA' - Ajustado tamanho e posição */}
            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 bg-white p-3 md:p-4 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center gap-1 min-w-[160px] md:min-w-[180px]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] md:text-xs font-black uppercase text-[#1a3a52] tracking-widest">Online Agora</span>
              </div>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-500" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... restante da página (Cotação Rápida, etc) ... */}
    </div>
  );
};

export default HomePage;
