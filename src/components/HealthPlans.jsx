import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, Hotel as Hospital, Activity } from 'lucide-react';

const HealthPlans = () => {
  const features = [
    {
      icon: Stethoscope,
      title: 'Rede Credenciada em São Paulo',
      description: 'Acesso aos melhores hospitais e clínicas da região'
    },
    {
      icon: Hospital,
      title: 'Atendimento 24h',
      description: 'Suporte e atendimento médico a qualquer hora do dia ou noite'
    },
    {
      icon: Activity,
      title: 'Cobertura Completa',
      description: 'Exames, consultas e cirurgias com total segurança'
    }
  ];

  return (
    <section id="saude" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-blue-600" aria-hidden="true" />
              <span className="text-blue-600 font-semibold text-lg">Planos de Saúde</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cuide da sua <span className="text-blue-600">Saúde</span> com o Melhor Custo-Benefício
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Oferecemos Planos de Saúde bons e baratos com cobertura nacional 
              e rede credenciada de excelência para você e sua família.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              alt="Médico atencioso atendendo paciente em consulta de plano de saúde em São Paulo" 
              className="rounded-2xl shadow-2xl" 
              src="https://images.unsplash.com/photo-1666887359800-60e37f543dbd" 
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold mb-1">20+</p>
              <p className="text-sm">Anos de Experiência</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthPlans;