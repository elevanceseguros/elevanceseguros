import React from 'react';
import { Zap, Award, Rocket, MonitorSmartphone, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Receba sua cotação personalizada em menos de 2 minutos, diretamente no seu WhatsApp.",
  },
  {
    icon: Award,
    title: "Custo-Benefício",
    description: "Analisamos as melhores opções para garantir a melhor relação entre preço e cobertura para você.",
  },
  {
    icon: Rocket,
    title: "Agilidade Total",
    description: "Nosso processo é otimizado para que você não perca tempo com burocracias desnecessárias.",
  },
  {
    icon: MonitorSmartphone,
    title: "Facilidade Digital",
    description: "Contrate seu plano de forma 100% digital, com segurança e o suporte de nossos especialistas.",
  },
  {
    icon: ShieldCheck,
    title: "Cobertura Ampla",
    description: "Acesso aos melhores hospitais, laboratórios e uma rede credenciada de excelência.",
  }
];

const WhyChooseSagradaFamilia = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sagrada Família?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Oferecemos mais do que um plano de saúde. Entregamos agilidade, segurança e o melhor cuidado para sua família.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${index === 0 || index === 4 ? 'lg:col-span-1' : ''} ${index === 1 || index === 2 || index === 3 ? 'lg:col-span-1' : ''} ${index === 0 ? 'lg:row-span-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white' : 'bg-white'}`}
            >
              <div className={`mb-6 inline-block p-4 rounded-full ${index === 0 ? 'bg-white/20' : 'bg-blue-100'}`}>
                <feature.icon className={`w-8 h-8 ${index === 0 ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${index === 0 ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
              <p className={index === 0 ? 'text-blue-100' : 'text-gray-600'}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSagradaFamilia;