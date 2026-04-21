import React from 'react';
import { motion } from 'framer-motion';
import { Car, Bike, Truck, Building2, Heart, Home, Users, Briefcase } from 'lucide-react';

const InsuranceTypes = () => {
  const insuranceTypes = [
    {
      icon: Car,
      title: 'Seguro Auto',
      description: 'Proteção completa para seu carro com coberturas personalizadas'
    },
    {
      icon: Bike,
      title: 'Seguro Moto',
      description: 'Segurança e tranquilidade para você e sua motocicleta'
    },
    {
      icon: Truck,
      title: 'Seguro Caminhão',
      description: 'Cobertura especializada para veículos de carga'
    },
    {
      icon: Building2,
      title: 'Seguro Empresa',
      description: 'Proteção integral para seu negócio e patrimônio'
    },
    {
      icon: Heart,
      title: 'Seguro Vida',
      description: 'Garanta o futuro da sua família com tranquilidade'
    },
    {
      icon: Home,
      title: 'Seguro Residencial',
      description: 'Proteja seu lar contra imprevistos'
    },
    {
      icon: Users,
      title: 'Seguro Familiar',
      description: 'Proteção completa para toda a família'
    },
    {
      icon: Briefcase,
      title: 'Seguro Profissional',
      description: 'Cobertura para profissionais liberais'
    }
  ];

  return (
    <section id="seguros" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tipos de <span className="text-blue-600">Seguros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos as melhores soluções em seguros para proteger o que é mais importante para você em São Paulo e todo o Brasil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insuranceTypes.map((insurance, index) => (
            <motion.article
              key={insurance.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <insurance.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {insurance.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {insurance.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypes;