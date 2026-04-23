import React from 'react';
import { Star, ShieldCheck, Zap } from 'lucide-react';

const HomePage = () => {
  const fotoHero = "/preview.webp"; 

  return (
    <div className="min-h-screen bg-white">
      {/* SEÇÃO HERO - ESTILO CONVERSÃO SAÚDE */}
      <section className="relative pt-24 pb-12 sm:pt-32 md:pt-44 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* LADO ESQUERDO: TEXTO E SUA FOTO DELICADA */}
            <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="flex flex-col md:flex-row items-center lg:items-start gap-6">
                {/* Sua foto em formato redondo/delicado - estilo consultor */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200">
                    <img src={fotoHero} alt="Rodrigo" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white animate-pulse"></div>
                </div>

                <div className="space-y-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Consultoria Especializada
                  </span>
                  <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight">
                    Sua tranquilidade é <br className="hidden md:block"/> nosso maior seguro.
                  </h1>
                </div>
              </div>

              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Na Elevance Seguros, entregamos segurança real para sua família e seu patrimônio. 
                <span className="text-[#1a3a52] font-bold"> Atendimento humano e suporte total.</span>
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-70">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-slate-500">
                  <ShieldCheck size={16} className="text-blue-600" /> Especialista APVS
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-slate-500">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" /> 5 Estrelas no Google
                </div>
              </div>
            </div>

            {/* LADO DIREITO: O FORMULÁRIO JÁ À MOSTRA (CONVERSÃO) */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a3a52] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                  <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Rápida em 1 Minuto
                </div>

                <form className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Seu Nome</label>
                    <input 
                      type="text" 
                      placeholder="Ex: João Silva" 
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="(11) 99999-9999" 
                      className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">O que você precisa?</label>
                    <select className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none text-slate-500">
                      <option>Seguro Automotivo / Proteção</option>
                      <option>Plano de Saúde</option>
                      <option>Seguro de Vida</option>
                      <option>Empresarial</option>
                    </select>
                  </div>

                  <button className="w-full bg-[#1a3a52] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center gap-3 mt-6 text-sm uppercase tracking-widest">
                    SOLICITAR AGORA
                  </button>
                  
                  <p className="text-[9px] text-center text-slate-400 uppercase font-bold tracking-tighter">
                    Prometemos não enviar spam. Seus dados estão seguros.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Restante da página... */}
    </div>
  );
};

export default HomePage;
