import React, { useState } from 'react';
import { 
  Star, ShieldCheck, Zap, Car, Heart, 
  Building2, Wallet, CheckCircle2, Bike, 
  Users, ArrowRight, MessageCircle, Smile 
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const HomePage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const fotoHero = "/preview.webp";
  const whatsappUrl = "https://wa.me/5511920144864";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      nome: formData.get('nome'),
      whatsapp: formData.get('whatsapp'),
      origem: 'Home Page Elevance - Principal',
      data: new Date().toLocaleString('pt-BR')
    };

    try {
      // URL do seu Webhook Hostinger/n8n configurada
      const response = await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Solicitação enviada!",
          description: "Nossa IA ou o Rodrigo falarão com você em instantes.",
        });
        e.target.reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ops!",
        description: "Houve um erro no envio. Pode nos chamar no WhatsApp?",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 1. HERO - ESTILO LANDING PAGE COM BADGES LADO A LADO */}
      <section className="relative pt-24 pb-12 sm:pt-32 md:pt-44 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="flex flex-col md:flex-row items-center lg:items-start gap-6">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200">
                    <img src={fotoHero} alt="Rodrigo" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Consultoria Especializada</span>
                  <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight italic italic">
                    Sua tranquilidade é <br className="hidden md:block"/> nosso maior seguro.
                  </h1>
                </div>
              </div>
              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic italic">
                Deixe seu contato e nossa <span className="text-blue-600 font-black uppercase">Inteligência Artificial</span> junto ao Rodrigo encontrarão a melhor proteção agora.
              </p>

              {/* BADGES LADO A LADO */}
              <div className="flex flex-row justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> 5 Estrelas no Google
                </div>
                <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck size={14} className="text-blue-600" /> Melhores Operadoras
                </div>
              </div>
            </div>

            {/* FORMULÁRIO SIMPLIFICADO */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a3a52] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                  <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Atendimento via IA
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <input name="nome" type="text" required placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                  <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                  <button disabled={loading} className="w-full bg-[#1a3a52] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest">
                    {loading ? "Enviando..." : "SOLICITAR ATENDIMENTO"}
                  </button>
                  <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic italic">O Rodrigo ou nossa IA te chamará em instantes</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROTEÇÃO VEICULAR (APVS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[50px] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
            <div className="lg:w-1/2 space-y-6 z-10">
              <div className="flex gap-4">
                <div className="p-4 bg-blue-600 rounded-2xl"><Car size={32}/></div>
                <div className="p-4 bg-blue-600 rounded-2xl"><Bike size={32}/></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-black italic italic">Proteção Veicular APVS</h2>
              <p className="text-blue-100/70 font-medium italic italic">A maior da América Latina no seu carro ou moto, sem análise de perfil.</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle2 size={14} className="text-green-400"/> Sem consulta SPC/Serasa</span>
                <span className="flex items-center gap-2 text-[10px] font-bold"><CheckCircle2 size={14} className="text-green-400"/> Rastreador Grátis</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full z-10">
              <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/10 text-center">
                <h4 className="text-xl md:text-2xl font-bold mb-8 italic italic">Quanto custa proteger seu veículo?</h4>
                <a href={whatsappUrl} className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all uppercase text-xs tracking-widest shadow-lg">Solicitar Cotação via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSÓRCIOS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left italic italic">
              <Wallet size={48} className="text-blue-600 mx-auto lg:mx-0" />
              <h2 className="text-3xl md:text-4xl font-black text-[#1a3a52]">Consórcio Elevance</h2>
              <p className="text-slate-500 font-medium italic italic">Compre seu imóvel ou veículo sem juros abusivos.</p>
              <div className="pt-6">
                <a href={whatsappUrl} className="inline-flex items-center gap-3 bg-[#1a3a52] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">Simular Agora <ArrowRight size={16}/></a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="bg-white rounded-[50px] p-12 shadow-xl border border-slate-100 flex flex-col items-center">
                  <div className="text-7xl font-black text-blue-600 mb-2">0%</div>
                  <div className="text-lg font-black text-[#1a3a52] uppercase tracking-widest mb-6 italic italic">De Juros Reais</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARDS DE SERVIÇOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 italic italic">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-10 bg-blue-50 rounded-[50px] border border-blue-100 group hover:bg-[#1a3a52] transition-all duration-500 italic italic">
               <Heart size={40} className="text-blue-600 mb-6 group-hover:text-blue-400" />
               <h3 className="text-2xl font-black mb-4 group-hover:text-white italic italic">Planos Saúde</h3>
               <a href={whatsappUrl} className="block text-center bg-white text-[#1a3a52] font-black py-4 rounded-xl text-xs uppercase tracking-widest">Ver Tabelas</a>
            </div>
            <div className="p-10 bg-slate-50 rounded-[50px] border border-slate-100 group hover:bg-[#1a3a52] transition-all duration-500 italic italic">
               <Smile size={40} className="text-blue-600 mb-6 group-hover:text-blue-400" />
               <h3 className="text-2xl font-black mb-4 group-hover:text-white italic italic">Odontológico</h3>
               <a href={whatsappUrl} className="block text-center bg-[#1a3a52] text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-[#1a3a52]">Ver Planos</a>
            </div>
            <div className="p-10 bg-blue-50 rounded-[50px] border border-blue-100 group hover:bg-[#1a3a52] transition-all duration-500 italic italic">
               <Users size={40} className="text-blue-600 mb-6 group-hover:text-blue-400" />
               <h3 className="text-2xl font-black mb-4 group-hover:text-white italic italic">Seguro Vida</h3>
               <a href={whatsappUrl} className="block text-center bg-white text-[#1a3a52] font-black py-4 rounded-xl text-xs uppercase tracking-widest">Simular</a>
            </div>
            <div className="p-10 bg-slate-50 rounded-[50px] border border-slate-100 group hover:bg-[#1a3a52] transition-all duration-500 italic italic">
               <Building2 size={40} className="text-blue-600 mb-6 group-hover:text-blue-400" />
               <h3 className="text-2xl font-black mb-4 group-hover:text-white italic italic">Empresarial</h3>
               <a href={whatsappUrl} className="block text-center bg-[#1a3a52] text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-[#1a3a52]">Cotar</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL WHATSAPP */}
      <section className="py-20 bg-[#1a3a52] text-white text-center italic italic">
         <div className="max-w-4xl mx-auto px-4 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black leading-tight italic italic">Proteção real com quem entende.</h2>
            <a href={whatsappUrl} className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 px-10 py-6 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl">
               <MessageCircle size={24}/> Chamar o Rodrigo no WhatsApp
            </a>
         </div>
      </section>

    </div>
  );
};

export default HomePage;
