import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Map, Heart, Users } from 'lucide-react';

const UnimeduniplanBenefits = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Preço Acessível",
      desc: "Planos com preços que cabem no seu orçamento, sem comprometer a qualidade do atendimento."
    },
    {
      icon: Map,
      title: "Cobertura em Todo Brasil",
      desc: "Acesse médicos e hospitais em qualquer lugar do país. Sua saúde protegida aonde você estiver."
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      desc: "Equipe preparada para ouvir e cuidar. Atendimento rápido e eficiente quando você mais precisa."
    },
    {
      icon: Users,
      title: "Rede de Médicos Confiáveis",
      desc: "Profissionais qualificados e experientes prontos para cuidar da sua saúde."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Vantagens Exclusivas</h2>
          <p className="text-slate-600 text-lg">
            Descubra por que o Unimed Uniplan é a melhor escolha para sua saúde
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-slate-100"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-[#10b981]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnimeduniplanBenefits;