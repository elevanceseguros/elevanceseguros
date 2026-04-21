import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, DollarSign, PhoneCall } from 'lucide-react';

const VehicleProtection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Total',
      description: 'Cobertura completa contra roubo, furto e colisão'
    },
    {
      icon: Clock,
      title: 'Socorro 24h',
      description: 'Assistência imediata em qualquer situação'
    },
    {
      icon: DollarSign,
      title: 'Economia',
      description: 'Mensalidades mais acessíveis que seguros tradicionais'
    },
    {
      icon: PhoneCall,
      title: 'Atendimento Rápido',
      description: 'Suporte especializado sempre que precisar'
    }
  ];

  return (
    <section id="protecao" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proteção <span className="text-blue-600">Veicular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A melhor alternativa em proteção veicular com custo-benefício incomparável
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img alt="Carro moderno protegido" className="rounded-2xl shadow-xl" src="https://images.unsplash.com/photo-1674816567986-602363692599" />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleProtection;