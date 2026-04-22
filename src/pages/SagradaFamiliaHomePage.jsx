import React from 'react';
import LeadFormSincero from '@/components/LeadFormSincero';
import { ShieldCheck, Clock, MapPin, Users, CheckCircle2 } from 'lucide-react';

const SagradaFamiliaHomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Foco em Conversão */}
      <div className="bg-slate-50 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-100 text-[#1a3a52] px-4 py-1 rounded-full text-sm font-bold mb-4">
            TABELA 2026 ATUALIZADA
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a3a52] mb-6 tracking-tight">
            Plano de Saúde Sagrada Família
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Cotação personalizada para São Paulo e Grande ABC. Encontre o equilíbrio entre preço justo e qualidade hospitalar para sua família ou empresa.
          </p>
          
          {/* Formulário Principal */}
          <LeadFormSincero />
        </div>
      </div>

      {/* Diferenciais Estratégicos para SP/ABC */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a3a52]">Por que contratar com a Elevance?</h2>
          <p className="text-slate-500 mt-2">Diferenciais do Plano Sagrada Família na sua região</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <ShieldCheck className="text-blue-600 w-7 h-7" />, 
              title: "Rede em SP e ABC", 
              desc: "Acesso aos principais hospitais e centros médicos da região." 
            },
            { 
              icon: <Clock className="text-blue-600 w-7 h-7" />, 
              title: "Carência Reduzida", 
              desc: "Consulte nossas condições especiais para portabilidade de plano." 
            },
            { 
              icon: <MapPin className="text-blue-600 w-7 h-7" />, 
              title: "Planos Regionais", 
              desc: "O melhor custo-benefício focado onde você realmente mora e trabalha." 
            },
            { 
              icon: <Users className="text-blue-600 w-7 h-7" />, 
              title: "Desconto MEI", 
              desc: "Economia de até 30% para quem possui CNPJ (mesmo individual)." 
            },
          ].map((item, i) => (
            <div key={i} className="group text-center p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-2xl hover:border-blue-100 transition-all duration-300">
              <div className="flex justify-center mb-6 p-4 bg-blue-50 w-16 h-16 mx-auto rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
                {item.icon}
              </div>
              <h4 className="font-bold text-[#1a3a52] text-lg mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Fechamento / Prova Social */}
      <div className="bg-[#1a3a52] py-16 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ainda tem dúvidas sobre as carências ou rede?</h3>
          <p className="text-blue-100 text-lg mb-8 opacity-90">
            Nossos especialistas em Sagrada Família estão online agora para te enviar a tabela completa.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/20">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Consultores disponíveis via WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagradaFamiliaHomePage;
