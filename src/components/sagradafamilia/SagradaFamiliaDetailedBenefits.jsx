import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Stethoscope, Activity, Baby, DollarSign, Building2, ChevronRight } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const scrollToForm = () => {
  const formElement = document.getElementById('quote-form');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const SagradaFamiliaDetailedBenefits = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* SECTION 1 - Ampla Cobertura */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ampla Cobertura
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Não é apenas uma cobertura, é a sua tranquilidade garantida. Incluímos:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Consultas e Exames</h3>
              <p className="text-slate-600">
                Todas as especialidades médicas, de Pediatria a Cardiologia, com acesso facilitado.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Procedimentos</h3>
              <p className="text-slate-600">
                Desde exames de rotina até os mais complexos, como Ressonância Magnética e Tomografia.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Internações e Cirurgias</h3>
              <p className="text-slate-600">
                Cobertura total para internações hospitalares e procedimentos cirúrgicos, conforme o rol da ANS.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Baby className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Obstetrícia</h3>
              <p className="text-slate-600">
                Acompanhamento completo para gestantes, do pré-natal ao parto, em nossa rede credenciada.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-8 text-center">
            <button 
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Consultar Rede Perto de Mim <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SECTION 2 - Excelente Custo-Benefício */}
        <div className="mb-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                <ShieldCheck className="w-8 h-8 text-green-500" />
                Excelente Custo-Benefício
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Pensado para o seu bolso, sem abrir mão da qualidade:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Sem Coparticipação</h4>
                  <p className="text-slate-600">
                    Você paga apenas a mensalidade fixa, sem surpresas ou custos adicionais por consultas e exames.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Valores Competitivos</h4>
                  <p className="text-slate-600">
                    Planos otimizados para MEI e Pequenas Empresas (PME), com condições especiais que garantem economia de até 30% em comparação com planos individuais.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToForm}
                className="inline-flex justify-center items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
              >
                Ver Tabela de Preços MEI
              </button>
              <button 
                onClick={scrollToForm}
                className="inline-flex justify-center items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Simular Plano Familiar
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 3 - Encontre o Plano Ideal para Você (Table) */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Encontre o Plano Ideal para Você
            </h2>
            <p className="text-lg text-slate-600">
              Comparamos nossas principais opções para facilitar sua escolha.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="font-bold text-slate-800 text-base py-5 min-w-[150px]">Categoria</TableHead>
                    <TableHead className="font-bold text-slate-800 text-base py-5 min-w-[200px]">Ideal para...</TableHead>
                    <TableHead className="font-bold text-slate-800 text-base py-5 min-w-[300px]">Diferencial</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="font-semibold text-blue-700 py-4">SFS/SENIOR</TableCell>
                    <TableCell className="text-slate-700 py-4">Pessoas acima de 59 anos</TableCell>
                    <TableCell className="text-slate-600 py-4">Atendimento focado na melhor idade e medicina preventiva.</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="font-semibold text-blue-700 py-4">SFS/PME (Empresarial)</TableCell>
                    <TableCell className="text-slate-700 py-4">MEI e Empresas (2 a 99 vidas)</TableCell>
                    <TableCell className="text-slate-600 py-4">Redução de custos de até 30% em relação ao plano individual.</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-slate-50/80 transition-colors">
                    <TableCell className="font-semibold text-blue-700 py-4">SFS/AD (Adesão)</TableCell>
                    <TableCell className="text-slate-700 py-4">Profissionais liberais e estudantes</TableCell>
                    <TableCell className="text-slate-600 py-4">Acesso à rede de excelência através de entidades de classe.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default SagradaFamiliaDetailedBenefits;