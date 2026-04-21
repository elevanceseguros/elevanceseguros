import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Mariana Costa",
    plan: "Plano Familiar",
    photo: "https://images.unsplash.com/photo-1694185752018-2ff397cb99b4",
    text: "Estava apavorada com a ideia de não ter um bom suporte médico para meus filhos. A equipe da Sagrada Família me atendeu em minutos e encontrou um plano perfeito para nosso orçamento. Hoje durmo tranquila!"
  },
  {
    name: "João Ferreira",
    plan: "Plano Individual",
    photo: "https://images.unsplash.com/photo-1685580388390-576100ae9ce3",
    text: "Como autônomo, sempre adiei a contratação de um plano. O processo 100% digital foi um diferencial. Resolvi tudo pelo celular e agora me sinto muito mais seguro para focar no meu trabalho."
  },
  {
    name: "Carla & Ricardo",
    plan: "Plano Empresarial",
    photo: "https://images.unsplash.com/photo-1601388544359-1776d0f899d3",
    text: "Oferecer um plano de saúde de qualidade para nossos funcionários era uma meta. O atendimento consultivo nos ajudou a escolher a melhor opção para nossa pequena empresa. Nossos colaboradores estão muito satisfeitos."
  },
  {
    name: "Fernanda Lima",
    plan: "Plano Familiar",
    photo: "https://images.unsplash.com/photo-1639931723005-483ded9ab43b",
    text: "Tive uma emergência e fui atendida rapidamente, sem burocracia. A tranquilidade de saber que minha família está coberta em momentos difíceis não tem preço. Recomendo de olhos fechados!"
  },
    {
    name: "Lucas Martins",
    plan: "Plano Individual",
    photo: "https://images.unsplash.com/photo-1592599457566-c660153d9548",
    text: "Fiquei surpreso com a agilidade. Em poucos minutos já tinha a cotação no meu WhatsApp. Contratei no mesmo dia. Atendimento nota 1000!"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Quem Confia, Recomenda
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Veja o que nossos clientes dizem sobre a experiência de ter a saúde protegida.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
              <div className="mt-6 flex items-center">
                <img src={testimonial.photo} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.plan}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;