import React from 'react';
import LeadFormSincero from '@/components/LeadFormSincero';
import { ShieldCheck, Clock, MapPin, Users, CheckCircle2, Building2, Table, Activity, ArrowRight } from 'lucide-react';

const SagradaFamiliaHomePage = () => {
  // NÚMERO CORRIGIDO: 5511920144864
  const whatsappNumber = "5511920144864"; 
  
  const tabelaPrecos = [
    { idade: "00 a 18", enf: "R$ 213,28", apto: "R$ 287,13" },
    { idade: "19 a 23", enf: "R$ 253,50", apto: "R$ 341,29" },
    { idade: "24 a 28", enf: "R$ 304,38", apto: "R$ 409,79" },
    { idade: "29 a 33", enf: "R$ 365,24", apto: "R$ 491,73" },
    { idade: "34 a 38", enf: "R$ 438,30", apto: "R$ 590,09" },
    { idade: "39 a 43", enf: "R$ 525,93", apto: "R$ 708,07" },
    { idade: "44 a 48", enf: "R$ 631,14", apto: "R$ 849,72" },
    { idade: "49 a 53", enf: "R$ 757,36", apto: "R$ 1.019,64" },
    { idade: "54 a 58", enf: "R$ 908,82", apto: "R$ 1.223,59" },
    { idade: "59 ou +", enf: "R$ 1.280,06", apto: "R$ 1.723,54" },
  ];

  const unidadesOficiais = [
    { 
      nome: "Hosp. Sagrada Família (Vila Formosa)", 
      desc: "Pronto-socorro adulto/infantil, UTI, maternidade e exames.",
      regiao: "Zona Leste, SP"
    },
    { 
      nome: "Hosp. Sagrada Família (Mauá)", 
      desc: "Pronto-socorro 24h, UTI e internações.",
      regiao: "Grande ABC"
    },
    { 
      nome: "Hosp. São Francisco (Cotia)", 
      desc: "Maternidade, UTI, pronto-socorro infantil e cirúrgico.",
      regiao: "Grande SP"
    },
    { 
      nome: "Hosp. São Francisco (Osasco)", 
      desc: "UTI, consultas e pronto-socorro 24h.",
      regiao: "Grande SP"
    },
    { 
      nome: "Hosp. São Francisco (São Roque)", 
      desc: "UTI, pronto-socorro e internações.",
      regiao: "Interior"
    }
  ];

  const handleWhatsApp = (mensagem) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b sticky top-0 z-50 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <img 
            src="/logos/Sem%20nome%20(680%20x%20680%20px).png" 
            alt="Elevance Seguros" 
            className="h-12 md:h-16 object-contain"
          />
          <img 
            src="/logos/sagrada-familia.png" 
            alt="Sagrada Família" 
            className="h-8 md:h-12 object-contain"
          />
        </div>
      </nav>

      <section className="pt-10 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Tabela Atualizada 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a3a52] mb-6 leading-tight">
            Sagrada Família Saúde
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Atendimento completo em São Paulo e Região. O plano que cuida da sua família com preço direto da Elevance.
          </p>
          <div className="relative z-20">
            <LeadFormSincero />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-[#1a3a52] p-8 text-white">
              <div className="flex items-center gap-3">
                <Table className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold uppercase tracking-tight">Valores do Plano</h2>
              </div>
            </div>
            <div className="p-4 md:p-10">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-50 text-left">
                    <th className="py-4 font-bold text-slate-400 text-xs uppercase">Idade</th>
                    <th className="py-4 font-bold text-[#1a3a52] text-xs uppercase">Enfermaria</th>
                    <th className="py-4 font-bold text-blue-600 text-xs uppercase">Apartamento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {tabelaPrecos.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 font-bold text-slate-600">{item.idade}</td>
                      <td className="py-3.5 text-[#1a3a52] font-semibold">{item.enf}</td>
                      <td className="py-3.5 text-blue-600 font-black">{item.apto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Texto do botão mantido, apenas a mensagem handleWhatsApp foi alterada */}
              <button 
                onClick={() => handleWhatsApp("Olá, quero saber quanto sai o plano sagrada família.")}
                className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 group"
              >
                Quero Plano com Desconto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                  <Activity className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-[#1a3a52] uppercase tracking-tight">Rede Própria</h2>
              </div>
              <div className="space-y-4">
                {unidadesOficiais.map((unidade, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-[30px] border border-transparent hover:border-blue-100 transition-all group">
                    <div className="flex justify-between items-start mb-2">
                       <p className="font-black text-[#1a3a52] text-md group-hover:text-blue-700 transition-colors">{unidade.nome}</p>
                       <span className="text-[9px] bg-white px-2 py-1 rounded-md font-black text-slate-400 uppercase tracking-tighter">{unidade.regiao}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{unidade.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4 leading-tight">Possui CNPJ?</h3>
                <p className="text-blue-100 mb-8 text-lg opacity-90 font-medium leading-relaxed">
                  MEI e empresas têm acesso a descontos de até <span className="text-white font-black underline decoration-green-400 decoration-4 underline-offset-4">30%</span>.
                </p>
                <button 
                  onClick={() => handleWhatsApp("Olá, quero saber o valor do plano empresarial sagrada família.")}
                  className="w-full bg-white text-blue-900 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.15em] hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-3"
                >
                   Quero Tabela Empresarial
                   <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <Users className="absolute -right-12 -bottom-12 w-64 h-64 opacity-10 rotate-12" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-12 text-center">
         <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
           © 2026 Elevance Seguros • Sagrada Família Saúde
         </p>
      </footer>
    </div>
  );
};

export default SagradaFamiliaHomePage;
