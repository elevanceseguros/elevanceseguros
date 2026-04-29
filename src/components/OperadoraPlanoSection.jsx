import React from 'react';
import { Table, Activity, Users, ArrowRight, Star } from 'lucide-react';

const OperadoraPlanoSection = ({ tabela, hospitais, depoimento, cor, operadora }) => {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/5511920144864?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* COLUNA ESQUERDA: Tabela + Depoimento */}
          <div className="flex flex-col gap-6">

            {/* Tabela de Preços */}
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100 flex-1">
              <div style={{ background: cor }} className="p-6 text-white">
                <div className="flex items-center gap-3">
                  <Table className="w-5 h-5 opacity-80" />
                  <h2 className="text-lg font-black uppercase tracking-tight">Valores do Plano</h2>
                </div>
                <p className="text-white/70 text-xs mt-1 font-medium">3 primeiras faixas · Referência SP 2026</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-50 text-left">
                      <th className="py-3 font-bold text-slate-400 text-xs uppercase">Faixa</th>
                      <th className="py-3 font-bold text-slate-600 text-xs uppercase">Enfermaria</th>
                      <th className="py-3 font-bold text-xs uppercase" style={{ color: cor }}>Apartamento</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {tabela.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 font-bold text-slate-600 text-sm">{item.idade}</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">{item.enf}</td>
                        <td className="py-3 font-black text-sm" style={{ color: cor }}>{item.apto}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-slate-400 italic mt-3">*Valores referenciais. Sujeitos a alteração.</p>
                <button
                  onClick={() => handleWhatsApp(`Olá Rodrigo, vim pelo site e quero cotar o plano ${operadora}. Pode me enviar a tabela completa?`)}
                  className="w-full mt-5 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 hover:opacity-90"
                  style={{ background: cor }}
                >
                  Ver Tabela Completa <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Depoimento */}
            <div className="bg-white p-6 rounded-[30px] shadow-xl border border-slate-100">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic font-medium">&ldquo;{depoimento.texto}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-sm shrink-0" style={{ background: cor }}>
                  {depoimento.inicial}
                </div>
                <div>
                  <div className="font-black text-[#114d8e] text-sm">{depoimento.nome}</div>
                  <div className="text-slate-400 text-xs font-medium">{depoimento.local} · {operadora}</div>
                </div>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: Hospitais + MEI */}
          <div className="flex flex-col gap-6">

            {/* Hospitais */}
            <div className="bg-white p-6 rounded-[40px] shadow-xl border border-slate-100 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl" style={{ background: cor + '20' }}>
                  <Activity className="w-5 h-5" style={{ color: cor }} />
                </div>
                <h2 className="text-base font-black text-[#114d8e] uppercase tracking-tight">Principais Hospitais SP</h2>
              </div>
              <div className="space-y-3">
                {hospitais.map((h, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-[20px] border border-transparent hover:border-blue-100 transition-all">
                    <div className="flex justify-between items-start">
                      <p className="font-black text-[#114d8e] text-sm">{h.nome}</p>
                      <span className="text-[9px] bg-white px-2 py-1 rounded-lg font-black text-slate-400 uppercase ml-2 shrink-0">{h.regiao}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 font-medium">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA PME */}
            <div className="rounded-[30px] p-6 text-white relative overflow-hidden shadow-xl flex flex-col justify-between" style={{ background: `linear-gradient(135deg, ${cor}, ${cor}cc)` }}>
              <div>
                <h3 className="text-xl font-black mb-2 leading-tight">Tem CNPJ ou MEI?</h3>
                <p className="text-white/80 mb-5 text-sm font-medium leading-relaxed">
                  Planos empresariais com até <span className="text-white font-black underline decoration-4 underline-offset-4">30% menos</span> que o individual.
                </p>
              </div>
              <button
                onClick={() => handleWhatsApp(`Olá Rodrigo, quero saber sobre o plano empresarial ${operadora} para MEI/CNPJ.`)}
                className="w-full bg-white py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2"
                style={{ color: cor }}
              >
                Quero Tabela Empresarial <ArrowRight className="w-4 h-4" />
              </button>
              <Users className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OperadoraPlanoSection;
