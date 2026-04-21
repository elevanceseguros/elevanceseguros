import React from 'react';
import { motion } from 'framer-motion';
import { Home, Car, Briefcase, TrendingUp } from 'lucide-react';

const Consortiums = () => {
  const options = [
    {
      icon: Home,
      title: 'Consórcio Imóvel',
      description: 'Realize o sonho da casa própria com planejamento inteligente'
    },
    {
      icon: Car,
      title: 'Consórcio Veículo',
      description: 'Adquira seu carro ou moto novo de forma planejada'
    },
    {
      icon: Briefcase,
      title: 'Consórcio Serviços',
      description: 'Financie reformas, viagens, festas e muito mais'
    }
  ];

  return (
    <section id="consorcios" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <TrendingUp className="w-8 h-8 text-blue-600" aria-hidden="true" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Consórcios Brasil</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planeje suas conquistas de forma inteligente e sem juros com os melhores consórcios do mercado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {options.map((option, index) => (
            <motion.article
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <option.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {option.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {option.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Vantagens do Consórcio</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Sem juros, com planejamento e a possibilidade de ser contemplado a qualquer momento. 
            A forma mais inteligente de realizar seus sonhos.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">0%</p>
              <p className="text-blue-100">Juros</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-blue-100">Seguro</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-blue-100">Atendimento</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Consortiums;