import React from 'react';
import { Check } from 'lucide-react';

const UnimeduniplanTrust = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            "Sem compromisso",
            "Resposta rápida",
            "Melhor preço garantido"
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="w-5 h-5 text-[#10b981]" />
              </div>
              <span className="font-bold text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnimeduniplanTrust;