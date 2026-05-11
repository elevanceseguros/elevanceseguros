import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const FAQ = ({ perguntas }) => {
  const [aberto, setAberto] = useState(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": perguntas.map(p => ({
      "@type": "Question",
      "name": p.pergunta,
      "acceptedAnswer": { "@type": "Answer", "text": p.resposta }
    }))
  };

  return (
    <section className="py-16 bg-slate-50">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#114d8e]/10 text-[#114d8e] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">FAQ</span>
          <h2 className="text-3xl font-black text-[#114d8e] italic">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-3">
          {perguntas.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setAberto(aberto === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="font-black text-slate-800 text-sm">{item.pergunta}</span>
                <ChevronDown size={18} className={`text-[#114d8e] shrink-0 transition-transform duration-300 ${aberto === i ? 'rotate-180' : ''}`} />
              </button>
              {aberto === i && (
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-3">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
