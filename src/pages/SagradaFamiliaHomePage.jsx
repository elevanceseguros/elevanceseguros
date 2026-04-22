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

  const hospitais = [
    { nome: "Hospital Ipiranga", cidade: "Arujá" },
    { nome: "Hospital Ipiranga", cidade: "Mogi das Cruzes" },
    { nome: "Hospital Santa Maria", cidade: "Suzano" },
    { nome: "Hospital 8 de Maio", cidade: "São Paulo (Leste)" },
    { nome: "Hospital e Mat. Master Clin", cidade: "São Mateus" },
    { nome: "Hospital Coração de Jesus", cidade: "Santo André" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header com Logo */}
      <nav className="bg-white border-b sticky top-0 z-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <img src="/logos/elevance-logo.png" alt="Elevance Seguros" className="h-10 md:h-12 object-contain" />
          <div className="flex items-center gap-2">
             <img src="/logos/sagrada-familia.png" alt="Sagrada Família" className="h-8 md:h-10" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            Tabela Promocional 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a3a52] mb-6">
            Sagrada Família Saúde
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            O melhor custo-benefício de São Paulo e ABC. Planos individuais e empresariais com ampla rede própria.
          </p>
          
          <LeadFormSincero />
        </div>
      </section>

      {/* Seção Tabela e Hospitais - Grid Duplo */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Coluna 1: Tabela de Preços */}
          <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-slate-100">
            <div className="bg-[#1a3a52] p-6 text-white flex items-center gap-3">
              <Table className="w-6 h-6" />
              <h2 className="text-xl font-bold">Simulação de Preços</h2>
            </div>
            <div className="overflow-x-auto p-4 md:p-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-slate-50">
                    <th className="py-4 font-bold text-slate-400 uppercase text-xs">Idade</th>
                    <th className="py-4 font-bold text-[#1a3a52] uppercase text-xs">Enfermaria</th>
                    <th className="py-4 font-bold text-blue-600 uppercase text-xs">Apartamento</th>
                  </tr>
                </thead>
                <tbody>
                  {tabelaPrecos.map((item, index) => (
                    <tr key={index} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="py-4 font-bold text-slate-700">{item.idade}</td>
                      <td className="py-4 text-[#1a3a52] font-medium">{item.enf}</td>
                      <td className="py-4 text-blue-600 font-bold">{item.apto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 text-xs text-slate-400 italic text-center">
                *Valores sujeitos a alteração de acordo com a categoria e modalidade de contratação.
              </p>
            </div>
          </div>

          {/* Coluna 2: Hospitais em Destaque */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[32px] shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="text-blue-600 w-8 h-8" />
                <h2 className="text-2xl font-bold text-[#1a3a52]">Rede de Destaque</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hospitais.map((hosp, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-[#1a3a52] leading-tight">{hosp.nome}</p>
                      <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mt-1">{hosp.cidade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner de Gatilho para WhatsApp */}
            <div className="bg-blue-600 rounded-[32px] p-8 text-white relative overflow-hidden group shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Tem CNPJ ou MEI?</h3>
                <p className="opacity-90 mb-6 text-lg">
                  Consulte nossa tabela exclusiva para empresas com descontos de até <span className="font-black">30%</span>.
                </p>
                <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-2xl font-bold transition-transform group-hover:scale-105">
                   Falar com Consultor agora
                </div>
              </div>
              <Users className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10 rotate-12" />
            </div>
          </div>

        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="bg-[#1a3a52] py-12 text-center text-white opacity-90">
         <p className="text-sm">© 2026 Elevance Seguros - Especialistas em Sagrada Família Saúde</p>
         <p className="text-[10px] mt-2 opacity-50 px-4">Imagens meramente ilustrativas. Os preços e a rede credenciada podem sofrer alterações sem aviso prévio conforme as normas da ANS.</p>
      </footer>
    </div>
  );
};

export default SagradaFamiliaHomePage;
