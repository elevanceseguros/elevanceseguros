import React from 'react';
import LeadFormSincero from '@/components/LeadFormSincero';
import { ShieldCheck, Star, Zap, CheckCircle2 } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#1a3a52]">
      {/* Hero Section - Padrão Saúde Landing */}
      <section className="pt-12 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Proteção completa para você e sua empresa</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Seguro que cabe no seu bolso, <span className="text-blue-400">sem enrolação</span>
          </h1>

          <p className="text-blue-100/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Informe seu nome e WhatsApp. Em minutos você recebe as melhores opções de seguro e saúde direto no seu celular.
          </p>

          {/* Card do Corretor (Rodrigo) */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative">
              <img 
                src="/rodrigo-perfil.png" // Certifique-se de que sua foto tem esse nome na pasta public
                alt="Rodrigo Farias" 
                className="w-20 h-20 rounded-full border-4 border-white/10 mb-3 object-cover shadow-2xl"
                onError={(e) => { e.target.src = "https://via.placeholder.com/80?text=RF"; }}
              />
              <div className="absolute bottom-4 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-[#1a3a52]"></div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-bold text-lg">Rodrigo Farias</h3>
              <p className="text-blue-300 text-sm mb-1">Corretor de Seguros · São Paulo</p>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Formulário de Conversão (Branco igual ao print) */}
          <div className="max-w-md mx-auto bg-white rounded-[32px] p-8 shadow-2xl">
            <h2 className="text-[#1a3a52] text-xl font-bold mb-6 text-left tracking-tight">
              Receba sua cotação gratuita
            </h2>
            <LeadFormSincero />
          </div>
        </div>
      </section>

      {/* Seção de Atalhos (Para não perder os outros ramos) */}
      <section className="bg-white py-16 px-4 rounded-t-[50px] -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[#1a3a52] text-2xl md:text-3xl font-black mb-12">O que você precisa proteger hoje?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Saúde", link: "/planos-de-saude", icon: "🏥" },
              { title: "Auto", link: "/seguro-auto", icon: "🚗" },
              { title: "Empresa", link: "/business-insurance", icon: "🏢" },
              { title: "Consórcio", link: "/consorcios", icon: "💰" }
            ].map((item, i) => (
              <a key={i} href={item.link} className="p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-500 hover:shadow-xl transition-all group">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <span className="font-bold text-[#1a3a52] group-hover:text-blue-600">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
