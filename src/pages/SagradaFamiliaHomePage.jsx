import React from 'react';
import LeadFormSincero from '@/components/LeadFormSincero';
import { ShieldCheck, Clock, MapPin, Users, CheckCircle2, Building2, Table } from 'lucide-react';

const SagradaFamiliaHomePage = () => {
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

  const hospitaisOficiais = [
    { nome: "Hospital Ipiranga", cidade: "Arujá" },
    { nome: "Hospital Ipiranga", cidade: "Mogi das Cruzes" },
    { nome: "Hospital Santa Maria", cidade: "Suzano" },
    { nome: "Hospital 8 de Maio", cidade: "São Paulo" },
    { nome: "Hospital e Mat. Master Clin", cidade: "São Mateus" },
    { nome: "Hospital Coração de Jesus", cidade: "Santo André" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header Profissional */}
      <nav className="bg-white border-b sticky top-0 z-50 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <img 
            src="/logos/elevance-logo.png" 
            alt="Elevance Seguros" 
            className="h-10 md:h-14 object-contain"
            onError={(e) => { e.target.src = "https://via.placeholder.com/200x60?text=Elevance+Seguros"; }} 
          />
          <img 
            src="/logos/sagrada-familia.png" 
            alt="Sagrada Família" 
            className="h-8 md:h-12 object-contain"
            onError={(e) => { e.target.src = "https://via.placeholder.com/150x50?text=Sagrada+Familia"; }}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-10 pb-16 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Tabela Oficial 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a3a52] mb-6 leading-tight">
            Sagrada Família Saúde
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A melhor rede de atendimento em São Paulo e Grande ABC. Qualidade hospitalar com o preço que você procura.
          </p>
          
          <div className="relative z-20">
            <LeadFormSincero />
          </div>
        </div>
      </section>

      {/* Conteúdo: Tabela e Rede */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Tabela de Preços */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-[#1a3a52] p-7 text-white">
              <div className="flex items-center gap-3">
                <Table className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold italic">Simule seu Plano</h2>
              </div>
            </div>
            <div className="p-4 md:p-8">
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
                      <td className="py-3.5 font-bold text-slate-700">{item.idade}</td>
                      <td className="py-3.5 text-[#1a3a52] font-semibold">{item.enf}</td>
                      <td className="py-3.5 text-blue-600 font-extrabold">{item.apto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-[11px] text-blue-800 text-center leading-snug">
                  <strong>Nota:</strong> Valores referentes ao plano individual. <br/>
                  Para <strong>CNPJ ou MEI</strong>, solicite a tabela com descontos especiais.
                </p>
              </div>
            </div>
          </div>

          {/* Rede Hospitalar Oficial */}
          <div className="space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1a3a52]">Rede de Destaque</h2>
                  <p className="text-slate-400 text-sm italic">Principais hospitais credenciados</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {hospitaisOficiais.map((hosp, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-md transition-all group">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-green-500 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1a3a52] leading-tight">{hosp.nome}</p>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">{hosp.cidade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner Especial MEI */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Possui CNPJ?</h3>
                <p className="text-blue-50 mb-8 text-lg opacity-90 leading-relaxed">
                  Planos empresariais possuem <span className="underline decoration-blue-300 underline-offset-4">preços até 30% menores</span> que o individual.
                </p>
                <button className="w-full bg-white text-blue-700 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl active:scale-95">
                   Consultar Tabela PME
                </button>
              </div>
              <Users className="absolute -right-12 -bottom-12 w-64 h-64 opacity-10 rotate-12" />
            </div>
          </div>

        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-white border-t py-12 text-center">
         <p className="text-slate-400 text-xs font-medium italic">
           © 2026 Elevance Seguros - Consultoria Autorizada Sagrada Família Saúde
         </p>
      </footer>
    </div>
  );
};

export default SagradaFamiliaHomePage;
