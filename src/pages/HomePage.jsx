import React, { useState } from 'react';
import { 
  Star, ShieldCheck, Zap, Car, Heart, 
  Building2, Wallet, CheckCircle2, Bike, 
  Users, ArrowRight, MessageCircle, Smile, PartyPopper 
} from 'lucide-react';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false); // Estado para controlar o sucesso
  const fotoHero = "/preview.webp";
  const whatsappUrl = "https://wa.me/5511920144864";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      nome: formData.get('nome'),
      whatsapp: formData.get('whatsapp'),
      origem: 'Home Page Elevance',
      data: new Date().toLocaleString('pt-BR')
    };

    try {
      const response = await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true); // Ativa a tela de sucesso no lugar do form
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Houve um erro técnico. Por favor, use o botão do WhatsApp ao lado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
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
                  <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight italic">Sua tranquilidade é <br className="hidden md:block"/> nosso maior seguro.</h1>
                </div>
              </div>

              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                Deixe seu contato e nossos <span className="text-blue-600 font-black uppercase">especialistas</span> encontrarão a melhor proteção para você agora.
              </p>

              <div className="flex flex-row justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> 5 Estrelas no Google
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck size={14} className="text-blue-600" /> Melhores Operadoras
                </div>
              </div>
            </div>

            {/* BOX DINÂMICA: FORMULÁRIO OU SUCESSO */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[350px] flex flex-col justify-center transition-all duration-500">
                
                {!sent ? (
                  <>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1a3a52] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                      <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Atendimento Imediato
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-500">
                      <input name="nome" type="text" required placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                      <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                      <button disabled={loading} className="w-full bg-[#1a3a52] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest">
                        {loading ? "ENVIANDO..." : "SOLICITAR ATENDIMENTO"}
                      </button>
                      <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic">Nossos consultores te chamarão em instantes</p>
                    </form>
                  </>
                ) : (
                  /* TELA DE SUCESSO QUE SUBSTITUI O FORM */
                  <div className="text-center space-y-6 animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <PartyPopper size={40} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-[#1a3a52] italic">Solicitação enviada!</h3>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Excelente, já recebemos seus dados. Um de nossos consultores entrará em contato agora mesmo via WhatsApp.
                      </p>
                    </div>
                    <div className="pt-4">
                       <div className="inline-block h-1 w-12 bg-blue-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REPETIR AS OUTRAS SEÇÕES ABAIXO (APVS, CONSÓRCIO, CARDS...) */}
      {/* ... (mantenha o restante do código que já estava funcionando) ... */}

    </div>
  );
};

export default HomePage;
