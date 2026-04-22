import React from 'react';
import LeadFormSincero from '@/components/LeadFormSincero';
import { ShieldCheck, Clock, MapPin, Users, CheckCircle2 } from 'lucide-react';

const SagradaFamiliaHomePage = () => {
  // O componente LeadFormSincero já captura window.location.pathname automaticamente.
  // Se for o subdomínio, o n8n receberá "/" como origem, o que é perfeito.

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Agora com cara de Home Page Oficial */}
      <div className="bg-slate-50 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
            TABELA 2026 ATUALIZADA
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#1a3a52] mb-6 tracking-tight">
            Sagrada Família Saúde
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A corretora oficial da sua saúde em SP e ABC. Receba agora a tabela de preços e a rede credenciada completa.
          </p>
          
          <div className="max-w-4xl mx-auto">
             <LeadFormSincero />
          </div>
        </div>
      </div>

      {/* Grid de Benefícios Focados */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <ShieldCheck />, title: "Rede Premium", desc: "Hospitais de referência em toda SP." },
            { icon: <Clock />, title: "Plantão 24h", desc: "Atendimento especializado via WhatsApp." },
            { icon: <MapPin />, title: "Foco no ABC", desc: "A melhor rede própria de Santo André e região." },
            { icon: <Users />, title: "Preço PME", desc: "Condições imbatíveis para CNPJ e MEI." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all">
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h4 className="font-bold text-[#1a3a52] mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer de Conversão */}
      <div className="bg-[#1a3a52] py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para economizar?</h3>
          <p className="text-blue-100 mb-8">Nossos consultores estão gerando tabelas agora mesmo.</p>
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
             <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
             Atendimento em Tempo Real
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagradaFamiliaHomePage;
