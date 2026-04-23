import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, ShieldCheck, Zap, Car, Heart, 
  Building2, Wallet, CheckCircle2, MessageCircle 
} from 'lucide-react';

const HomePage = () => {
  const fotoHero = "/preview.webp";
  const logo = "/logo.png";

  return (
    <div className="min-h-screen bg-white">
      {/* SEÇÃO HERO - ALTA CONVERSÃO */}
      <section className="relative pt-24 pb-12 sm:pt-32 md:pt-44 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* LADO ESQUERDO: TEXTO E AUTORIDADE */}
            <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="flex flex-col md:flex-row items-center lg:items-start gap-6">
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

            {/* LADO DIREITO: FORMULÁRIO DE COTAÇÃO */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a3a52] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                  <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Rápida em 1 Minuto
                </div>

                <form className="space-y-4 mt-4">
                  <input type="text" placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                  <input type="tel" placeholder="Seu WhatsApp (com DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                  <select className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                    <option>Seguro Automotivo / Proteção</option>
                    <option>Plano de Saúde</option>
                    <option>Seguro de Vida</option>
                    <option>Consórcios</option>
                  </select>

                  <button className="w-full bg-[#1a3a52] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 mt-6 text-sm uppercase tracking-widest">
                    SOLICITAR AGORA
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS - RESTANTE QUE ESTAVA BOM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a3a52]">O que podemos proteger hoje?</h2>
            <p className="text-slate-500 font-medium">Soluções completas para cada momento da sua vida.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Car size={32}/>, title: "Seguro Auto", desc: "Proteção completa para seu veículo contra roubo, furto e colisões." },
              { icon: <Heart size={32}/>, title: "Saúde", desc: "Os melhores planos para você, sua família ou sua empresa." },
              { icon: <Building2 size={32}/>, title: "Empresarial", desc: "Segurança para o seu negócio crescer sem preocupações." },
              { icon: <Wallet size={32}/>, title: "Consórcios", desc: "A forma inteligente de planejar suas grandes conquistas." }
            ].map((service, index) => (
              <div key={index} className="p-8 bg-slate-50 rounded-[40px] hover:bg-[#1a3a52] hover:text-white transition-all group cursor-pointer border border-slate-100">
                <div className="text-blue-600 group-hover:text-blue-400 mb-6">{service.icon}</div>
                <h3 className="text-xl font-black mb-4">{service.title}</h3>
                <p className="text-sm opacity-70 font-medium leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE ESCOLHER A ELEVANCE */}
      <section className="py-20 bg-[#1a3a52] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black leading-tight">Por que milhares de clientes confiam na Elevance?</h2>
              <div className="space-y-6">
                {[
                  "Atendimento personalizado diretamente com o Rodrigo",
                  "Cotação rápida nas melhores seguradoras do mercado",
                  "Suporte total em caso de sinistro ou dúvidas",
                  "Transparência total em cada cláusula do contrato"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-blue-400 shrink-0" />
                    <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-[50px] p-10 border border-white/10">
               <div className="flex flex-col items-center text-center space-y-6">
                  <img src={logo} alt="Elevance" className="h-12 brightness-0 invert opacity-50" />
                  <p className="italic text-xl text-blue-100/80 font-medium">"Nosso compromisso não é apenas vender um seguro, mas garantir que você nunca fique na mão quando mais precisar."</p>
                  <div className="font-black uppercase tracking-widest text-sm text-blue-400">Rodrigo - Fundador Elevance</div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
