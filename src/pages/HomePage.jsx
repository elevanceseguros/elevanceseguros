import React from 'react';
import { Star, Phone, ArrowRight } from 'lucide-react';

const HomePage = () => {
  // Caminho direto da pasta public
  const fotoHero = "/preview.webp"; 

  return (
    <div className="min-h-screen bg-white">
      {/* SEÇÃO HERO */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna do Texto */}
          <div className="order-2 md:order-1 space-y-5 text-center md:text-left mt-8 md:mt-0">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              Consultoria Especializada
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#1a3a52] leading-tight">
              Sua tranquilidade é <br className="hidden md:block"/> nosso maior seguro.
            </h1>
            <p className="text-slate-600 text-base md:text-xl max-w-xl mx-auto md:mx-0 font-medium leading-relaxed">
              Na Elevance Seguros, entregamos segurança real para sua família e seu patrimônio. Atendimento humano e suporte total.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
              <a href="https://wa.me/5511920144864" className="w-full sm:w-auto bg-[#1a3a52] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-2">
                Falar com Especialista
              </a>
            </div>
          </div>

          {/* Coluna da Imagem - CORRIGIDA PARA O PREVIEW.WEBP */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            
            {/* Container com tamanho controlado no Mobile para não ficar gigante */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-none lg:max-w-[500px] aspect-[4/5] md:aspect-auto overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl border-4 border-white bg-white">
              
              <img 
                src={fotoHero} 
                alt="Rodrigo - Elevance Seguros" 
                className="w-full h-full object-cover object-center"
              />
              
            </div>

            {/* Badge de Avaliação */}
            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 bg-white p-3 md:p-4 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center gap-1 min-w-[160px] md:min-w-[180px] z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] md:text-xs font-black uppercase text-[#1a3a52] tracking-widest">Atendimento Online</span>
              </div>
              <div className="flex items-center gap-0.5 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-500" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... restante do código ... */}
    </div>
  );
};

export default HomePage;
