import React from 'react';
import { ShieldOff, Clock, DollarSign, AlertTriangle, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: ShieldOff,
    pain: "Medo de ficar sem atendimento",
    benefit: "Rede credenciada de excelência e qualidade"
  },
  {
    icon: Clock,
    pain: "Filas e atendimentos demorados",
    benefit: "Cotação rápida em 2 minutos"
  },
  {
    icon: DollarSign,
    pain: "Altos custos de consultas e exames",
    benefit: "Custo-benefício otimizado"
  },
  {
    icon: AlertTriangle,
    pain: "Insegurança com imprevistos",
    benefit: "Proteção total para emergências"
  },
  {
    icon: HeartHandshake,
    pain: "Preocupação com a família",
    benefit: "Segurança e tranquilidade para todos"
  }
];

const CassiBenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Transforme Preocupações em Tranquilidade
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Deixe para trás as inseguranças do sistema de saúde. Veja como resolvemos seus maiores medos.
          </p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 border border-transparent hover:border-blue-200"
            >
              <div className="flex-shrink-0 bg-red-100 text-red-600 rounded-full p-3">
                <item.icon className="w-8 h-8" />
              </div>
              <p className="font-semibold text-red-600 text-center md:text-left text-lg flex-1">
                {item.pain}
              </p>
              <ArrowRight className="text-gray-400 w-8 h-8 transform rotate-90 md:rotate-0" />
              <div className="flex items-center gap-3 text-blue-700 flex-1 justify-center md:justify-start">
                 <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                    <item.icon className="w-8 h-8" />
                 </div>
                <p className="font-bold text-lg text-center md:text-left">
                  {item.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CassiBenefitsSection;