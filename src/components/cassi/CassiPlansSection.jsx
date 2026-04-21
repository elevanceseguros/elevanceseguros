import React from 'react';
import { CheckCircle2, User, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const plans = [
  {
    icon: User,
    name: "Plano Individual",
    target: "Para você que busca proteção e cuidado pessoal.",
    benefits: [
      "Atendimento de urgência e emergência",
      "Acesso a consultas e exames",
      "Internações em quarto privativo ou coletivo",
      "Ideal para profissionais liberais e autônomos"
    ],
    price: "A partir de R$ 154,49",
    subtext: "Consulte as condições com um especialista",
    isPopular: false
  },
  {
    icon: Users,
    name: "Plano Familiar",
    target: "Proteção completa para você e quem você mais ama.",
    benefits: [
      "Inclusão de cônjuges e filhos",
      "Ampla rede credenciada para todas as idades",
      "Programas de prevenção e bem-estar",
      "Condições especiais por vida"
    ],
    price: "A partir de R$ 154,49",
    subtext: "Consulte as condições com um especialista",
    isPopular: true
  },
  {
    icon: Building,
    name: "Plano Empresarial",
    target: "Para empresas que valorizam o bem-estar de seus colaboradores.",
    benefits: [
      "A partir de 2 vidas (com CNPJ)",
      "Redução de custos em comparação ao individual",
      "Flexibilidade na contratação",
      "Benefício que atrai e retém talentos"
    ],
    price: "A partir de R$ 104,75",
    subtext: "Consulte as condições com um especialista",
    isPopular: false
  }
];

const CassiPlansSection = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Um Plano Perfeito Para Cada Momento da Vida
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Seja para você, sua família ou sua empresa, temos a solução ideal com o melhor custo-benefício.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 ${plan.isPopular ? 'border-blue-600' : 'border-gray-100'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">MAIS POPULAR</div>
              )}
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${plan.isPopular ? 'from-blue-500 to-indigo-600' : 'from-gray-200 to-gray-300'}`}>
                    <plan.icon className={`w-7 h-7 ${plan.isPopular ? 'text-white' : 'text-gray-700'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{plan.target}</p>
                <ul className="space-y-3 mb-8">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-b-2xl mt-auto">
                <div className="text-center mb-4">
                  <p className="text-gray-900 font-extrabold text-xl">{plan.price}</p>
                  <p className="text-gray-500 text-xs mt-1">{plan.subtext}</p>
                </div>
                <Button onClick={scrollToForm} variant={plan.isPopular ? 'default' : 'outline'} className={`w-full text-base py-6 font-bold ${plan.isPopular ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : ''}`}>
                  Receber Cotação
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CassiPlansSection;