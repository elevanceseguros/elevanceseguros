import React from 'react';
import { MapPin, Building2, Stethoscope, CheckCircle2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const municipalities = [
  "São Paulo (Capital)",
  "Osasco",
  "Cotia",
  "Mauá",
  "São Roque"
];

const hospitalData = [
  {
    unit: "Hospital Sagrada Família",
    location: "Vila Formosa, SP",
    specialties: "Hospital Geral, Pronto Socorro 24h, Exames de Imagem."
  },
  {
    unit: "Hospital Sagrada Família",
    location: "Mauá, SP",
    specialties: "Atendimento humanizado, Urgência e Emergência."
  },
  {
    unit: "Hospital São Francisco",
    location: "Cotia, SP",
    specialties: "Hospital Dia, Ambulatório de Especialidades."
  },
  {
    unit: "Hospital São Francisco",
    location: "Osasco, SP",
    specialties: "Centro Médico completo, Exames Laboratoriais."
  },
  {
    unit: "Hospital São Francisco",
    location: "São Roque, SP",
    specialties: "Referência regional, Internações e Cirurgias."
  }
];

const NetworkCoverageSection = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 sm:text-4xl">
            Onde Você Pode Contar Conosco?
            <br />
            <span className="text-[#003B71]">Nossa Rede Credenciada e Abrangência</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estamos presentes estrategicamente para garantir o melhor atendimento onde você estiver.
          </p>
        </div>

        {/* Municipalities Grid */}
        <div className="mb-14">
          <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6 text-blue-600" />
            Municípios Atendidos
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {municipalities.map((city, index) => (
              <div 
                key={index}
                className="bg-blue-50 border border-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-sm transition-all hover:shadow-md hover:bg-blue-100"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Table */}
        <div className="mb-10">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="font-semibold text-slate-700 min-w-[200px]">Unidade</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[150px]">Localização</TableHead>
                    <TableHead className="font-semibold text-slate-700 min-w-[300px]">Especialidades de Destaque</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hospitalData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-slate-50/50 transition-colors">
                      <TableCell className="font-medium text-slate-900 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        {row.unit}
                      </TableCell>
                      <TableCell className="text-slate-600">
                        {row.location}
                      </TableCell>
                      <TableCell className="text-slate-600 flex items-start gap-2">
                        <Stethoscope className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{row.specialties}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Final Paragraph */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center">
          <p className="text-slate-700 font-medium leading-relaxed">
            Nossa rede própria e referenciada inclui o <strong className="text-slate-900">Laboratório de Análises Clínicas São Francisco</strong>, garantindo agilidade na entrega de resultados para os beneficiários.
          </p>
        </div>

      </div>
    </section>
  );
};

export default NetworkCoverageSection;