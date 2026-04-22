import React from 'react';
import LeadFormSincero from '@/components/LeadFormSincero';
import { ShieldCheck, Clock, MapPin, Users } from 'lucide-react';

const SagradaFamiliaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-50 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-100 text-[#1a3a52] px-4 py-1 rounded-full text-sm font-bold mb-4">
            TABELA 2026 ATUALIZADA
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a3a52] mb-6">
            Plano de Saúde Sagrada Família
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Atendimento humanizado em São Paulo e Grande ABC. Encontre o equilíbrio entre preço justo e qualidade hospitalar.
          </p>
          
          {/* Nosso Formulário Super Otimizado */}
          <LeadFormSincero />
        </div>
      </div>

      {/* Diferenciais Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck className="text-blue-600" />, title: "Rede Completa", desc: "Hospitais próprios e credenciados." },
            { icon: <Clock className="text-blue-600" />, title: "Sem Burocracia", desc: "Aprovação rápida para novos contratos." },
            { icon: <MapPin className="text-blue-600" />, title: "Foco Regional", desc: "O melhor custo-benefício de SP e ABC." },
            { icon: <Users className="text-blue-600" />, title: "MEI e PME", desc: "Descontos especiais para CNPJ." },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-all">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="font-bold text-[#1a3a52] mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Extra de Confiança */}
      <div className="bg-[#1a3a52] py-12 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Ficou com alguma dúvida?</h3>
        <p className="opacity-90 mb-0">Especialistas da Elevance Seguros prontos para te ajudar no WhatsApp.</p>
      </div>
    </div>
  );
};

export default SagradaFamiliaPage;
