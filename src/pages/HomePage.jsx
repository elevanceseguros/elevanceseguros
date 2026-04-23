import React from 'react';
import { 
  Star, ShieldCheck, Zap, Car, Heart, 
  Building2, Wallet, CheckCircle2, Bike, 
  Users, ArrowRight, MessageCircle 
} from 'lucide-react';

const HomePage = () => {
  const fotoHero = "/preview.webp";
  const logo = "/logo.png";
  const whatsappUrl = "https://wa.me/5511920144864";

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 1. HERO - ESTILO LANDING PAGE (SAÚDE) */}
      <section className="relative pt-24 pb-12 sm:pt-32 md:pt-44 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="flex flex-col md:flex-row items-center lg:items-start gap-6">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200">
                    <img src={fotoHero} alt="Rodrigo" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Consultoria Especializada</span>
                  <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight italic">
                    Sua tranquilidade é <br className="hidden md:block"/> nosso maior seguro.
                  </h1>
                </div>
              </div>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium">
                Na Elevance Seguros, entregamos segurança real para sua família e seu patrimônio. 
                <span className="text-[#1a3a52] font-bold italic"> Atendimento humano e suporte total.</span>
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-70">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500"><ShieldCheck size={16} className="text-blue-600" /> Parceiro Oficial APVS</div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500"><Star size={16} className="text-yellow-500 fill-yellow-500" /> Especialista Susep</div>
              </div>
            </div>

            {/* FORMULÁRIO DE CONVERSÃO IMEDIATA */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a3a52] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                  <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Resposta em minutos
                </div>
                <form className="space-y-4 mt-4">
                  <input type="text" placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                  <input type="tel" placeholder="WhatsApp (DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
                  <select className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600 outline-none appearance-none font-bold text-[#1a3a52] text-[10px] uppercase">
                    <option>Proteção Veicular / Seguro Auto</option>
                    <option>Plano de Saúde</option>
                    <option>Seguro de Vida</option>
                    <option>Consórcios</option>
                  </select>
                  <button className="w-full bg-[#1a3a52] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest">Solicitar Agora</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROTEÇÃO VEICULAR & MOTO (COM CTA) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[50px] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="flex gap-4">
                <div className="p-4 bg-blue-600 rounded-2xl"><Car size={32}/></div>
                <div className="p-4 bg-blue-600 rounded-2xl"><Bike size={32}/></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-black italic">Proteção Veicular APVS</h2>
              <p className="text-blue-100/70 font-medium">Roubo, furto, colisão e assistência 24h sem análise de perfil. A maior da América Latina no seu carro ou moto.</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle2 size={14} className="text-green-400"/> Sem consulta SPC/Serasa</span>
                <span className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle2 size={14} className="text-green-400"/> Rastreador Grátis</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/10 text-center">
                <h4 className="text-xl font-bold mb-6">Quanto custa proteger seu veículo?</h4>
                <a href={whatsappUrl} className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all uppercase text-xs tracking-widest shadow-lg">Cotas via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSÓRCIOS (COM CTA) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <Wallet size={48} className="text-blue-600 mx-auto lg:mx-0" />
              <h2 className="text-3xl md:text-4xl font-black text-[#1a3a52] italic">Consórcio Elevance</h2>
              <p className="text-slate-500 font-medium leading-relaxed">A forma mais barata de comprar seu imóvel ou trocar de carro sem pagar os juros abusivos do financiamento.</p>
              <div className="space-y-4">
                {["Cartas para Imóvel", "Cartas para Veículos", "Lance Embutido"].map(item => (
                  <div key={item} className="flex items-center gap-3 font-bold text-[#1a3a52] justify-center lg:justify-start">
                    <CheckCircle2 size={18} className="text-blue-600"/> {item}
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <a href={whatsappUrl} className="inline-flex items-center gap-3 bg-[#1a3a52] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
                  Simular Consórcio <ArrowRight size={16}/>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="bg-white rounded-[50px] p-10 shadow-xl border border-slate-100 flex flex-col items-center">
                  <div className="text-6xl font-black text-blue-600 mb-2">0%</div>
                  <div className="text-lg font-black text-[#1a3a52] uppercase tracking-widest mb-6">De Juros Reais</div>
                  <p className="text-center text-slate-400 text-sm mb-8 font-medium italic italic">"Planeje seu patrimônio com quem entende de investimento seguro."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMPRESA, VIDA & SAÚDE (CARDS RÁPIDOS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-blue-50 rounded-[50px] border border-blue-100 group hover:bg-[#1a3a52] transition-all duration-500">
               <Building2 size={40} className="text-blue-600 mb-6 group-hover:text-blue-400" />
               <h3 className="text-2xl font-black mb-4 group-hover:text-white italic italic">Seguro Empresa</h3>
               <p className="text-slate-500 text-sm font-medium mb-8 group-hover:text-blue-100/70 leading-relaxed">Proteja seu estoque, equipamentos e seu CNPJ com coberturas sob medida.</p>
               <a href={whatsappUrl} className="block text-center bg-white text-[#1a3a52] font-black py-4 rounded-xl text-xs uppercase tracking-widest">Cotar Empresa</a>
            </div>
            <div className="p-10 bg-slate-50 rounded-[50px] border border-slate-100 group hover:bg-[#1a3a52] transition-all duration-500">
               <Users size={40} className="text-blue-600 mb-6 group-hover:text-blue-400" />
               <h3 className="text-2xl font-black mb-4 group-hover:text-white italic italic">Seguro de Vida</h3>
               <p className="text-slate-500 text-sm font-medium mb-8 group-hover:text-blue-100/70 leading-relaxed">Garanta o futuro de quem você ama. Cobertura para doenças graves e invalidez.</p>
               <a href={whatsappUrl} className="block text-center bg-[#1a3a52] text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-[#1a3a52]">Ver Planos</a>
            </div>
            <div className="p-10 bg-blue-50 rounded-[50px] border border-blue-100 group hover:bg-[#1a3a52] transition-all duration-500">
               <Heart size={40} className="text-blue-600 mb-6 group-hover:text-blue-400" />
               <h3 className="text-2xl font-black mb-4 group-hover:text-white italic italic">Planos de Saúde</h3>
               <p className="text-slate-500 text-sm font-medium mb-8 group-hover:text-blue-100/70 leading-relaxed">Individual, familiar ou empresarial. Redução de custos e carências.</p>
               <a href={whatsappUrl} className="block text-center bg-white text-[#1a3a52] font-black py-4 rounded-xl text-xs uppercase tracking-widest">Tabela de Preços</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA FINAL */}
      <section className="py-20 bg-[#1a3a52] text-white text-center">
         <div className="max-w-4xl mx-auto px-4 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black italic italic leading-tight">Ainda em dúvida sobre qual o melhor para você?</h2>
            <p className="text-blue-100/60 text-lg font-medium italic italic">Me chama agora. Eu mesmo, o Rodrigo, vou te atender e tirar todas as suas dúvidas sem compromisso.</p>
            <a href={whatsappUrl} className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 px-10 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl">
               <MessageCircle size={24}/> Chamar o Rodrigo no WhatsApp
            </a>
         </div>
      </section>

    </div>
  );
};

export default HomePage;
