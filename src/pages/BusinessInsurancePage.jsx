import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Users, Truck } from 'lucide-react';
import Hero from '@/components/Hero';
import TopQuoteForm from '@/components/TopQuoteForm';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';
import { getMetaTags } from '@/lib/seoConfig';

const BusinessInsurancePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = getMetaTags({
    title: 'Seguro Empresarial | Proteção para seu Negócio',
    description: 'Seguro completo para empresas de todos os portes. Proteção patrimonial, responsabilidade civil e benefícios para funcionários.',
    url: '/business-insurance',
    keywords: 'seguro empresarial, seguro empresa, responsabilidade civil, seguro patrimonial'
  });

  const benefits = [
    {
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      title: "Proteção Patrimonial",
      description: "Cobertura contra incêndio, roubo, danos elétricos e vendaval para seu imóvel e equipamentos."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Responsabilidade Civil",
      description: "Amparo para danos causados a terceiros, garantindo a segurança jurídica do seu negócio."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Vida em Grupo",
      description: "Seguro de vida para sócios e funcionários, com coberturas flexíveis e custos acessíveis."
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: "Frotas",
      description: "Condições especiais para seguro de frotas de veículos comerciais e de passeio."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={meta['og:url']} />
      </Helmet>

      <Hero customTitle="Seguro Empresarial" />
      <Breadcrumb items={[{ name: 'Seguro Empresarial', path: '/business-insurance' }]} />
      
      <TopQuoteForm />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que contratar um Seguro Empresarial?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Garanta a continuidade dos seus negócios com coberturas que se adaptam às necessidades da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all text-center"
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default BusinessInsurancePage;