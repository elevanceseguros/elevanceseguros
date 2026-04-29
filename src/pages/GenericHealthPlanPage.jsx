import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, User, Baby, Building2 } from 'lucide-react';
import HealthOperatorForm from '@/components/HealthOperatorForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import HealthPlans from '@/components/HealthPlans';
import ContactForm from '@/components/ContactForm';

const GenericHealthPlanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "As melhores operadoras do mercado",
    "Opções para pessoa física, família ou empresa",
    "Ampla rede de hospitais e laboratórios",
    "Condições especiais e redução de carência",
    "Consultoria especializada e 100% gratuita"
  ];

  const planTypes = [
    {
      icon: User,
      title: 'Plano Individual',
      description: 'Cobertura completa e personalizada para você, com acesso aos melhores hospitais e laboratórios.'
    },
    {
      icon: Baby,
      title: 'Plano Familiar',
      description: 'Proteção e tranquilidade para toda a sua família em um único contrato com condições especiais.'
    },
    {
      icon: Building2,
      title: 'Plano Empresarial',
      description: 'A partir de 2 vidas (incluindo MEI). Redução de custos e benefícios exclusivos para sua equipe.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Encontre o Plano de Saúde Ideal | Elevance Seguros</title>
        <meta name="description" content="Compare e encontre o melhor plano de saúde para você, sua família ou empresa. Cotação rápida, gratuita e com as melhores operadoras do mercado." />
        <meta name="keywords" content="plano de saúde, cotação saúde, convênio médico, seguro saúde, melhores planos" />
      </Helmet>

      {/* Hero Section with Form (CASSI structure style) */}
      {/* Removed Logo Section to make form immediately visible */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 md:pt-32 overflow-hidden bg-blue-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-blue-200 text-blue-900 px-4 py-1.5 rounded-full font-semibold text-sm mb-6 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Proteção e Segurança
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                O Melhor para Você: <br/><span className="text-blue-700">Planos de Saúde</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Trabalhamos com as principais operadoras do país para oferecer planos reconhecidos pela qualidade técnica, ampla cobertura e atendimento humanizado.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HealthOperatorForm operatorName="Planos de Saúde" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tipos de Planos Section */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tipos de <span className="text-teal-600">Planos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha a modalidade ideal para sua necessidade. Temos a solução perfeita para você, sua família ou sua empresa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {planTypes.map((plan, index) => (
              <motion.article
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group border-t-4 border-teal-500"
              >
                <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <plan.icon className="w-8 h-8 text-teal-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {plan.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {plan.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Health Plans Section */}
      <HealthPlans />

      {/* Contact Form Section */}
      <ContactForm produto="Plano de Saude" />

      <FloatingWhatsApp />
    </>
  );
};

export default GenericHealthPlanPage;