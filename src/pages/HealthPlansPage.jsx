import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const HealthPlans = () => {
  const operadoras = [
    { nome: "Amil", logo: "/logos/amil.png" },
    { nome: "Bradesco", logo: "/logos/bradesco.png" },
    { nome: "SulAmérica", logo: "/logos/sulamerica.png" },
    { nome: "Hapvida", logo: "/logos/hapvida.png" },
    { nome: "NotreDame", logo: "/logos/notredame.png" },
    { nome: "Porto Seguro", logo: "/logos/portoseguro.svg" },
    { nome: "Alice", logo: "/logos/alice.webp", special: true }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Nossas Operadoras Parceiras</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Trabalhamos com as melhores empresas do mercado para garantir que você tenha o melhor atendimento médico.
        </p>

        {/* Grid de Logos Limpo (Igual ao da SaudeLanding) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {operadoras.map((op) => (
            <div 
              key={op.nome} 
              className="border border-slate-100 rounded-xl shadow-sm flex items-center justify-center overflow-hidden"
              style={{ 
                height: "90px", 
                backgroundColor: op.special ? "#f33291" : "#ffffff",
                padding: op.special ? "0" : "15px"
              }}
            >
              <img 
                src={op.logo} 
                alt={op.nome} 
                className={op.special ? "w-full h-full object-cover" : "max-h-12 w-auto object-contain"} 
              />
            </div>
          ))}
        </div>

        {/* Lista de Benefícios simples no lugar do formulário gigante */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#1a3a52] mb-6">Por que contratar conosco?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {[
              "Cotação gratuita em minutos",
              "Planos Individual, Familiar e PME",
              "Rede credenciada completa",
              "Suporte especializado pós-venda"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPlans;import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import TopQuoteForm from '@/components/TopQuoteForm';
import ContactForm from '@/components/ContactForm';
import HealthPlans from '@/components/HealthPlans';
import Breadcrumb from '@/components/Breadcrumb';
import { getMetaTags } from '@/lib/seoConfig';

const HealthPlansPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = getMetaTags({
    title: 'Planos de Saúde | Melhores Operadoras',
    description: 'Encontre o plano de saúde ideal para você, sua família ou sua empresa. Compare as melhores operadoras do mercado.',
    url: '/health-plans',
    keywords: 'plano de saúde, convênio médico, saúde bradesco, amil, sulamérica, notredame'
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={meta['og:url']} />
      </Helmet>

      <Hero customTitle="Planos de Saúde" />
      <Breadcrumb items={[{ name: 'Planos de Saúde', path: '/health-plans' }]} />
      
      <TopQuoteForm />
      
      {/* Reusing existing HealthPlans component for consistency and content */}
      <HealthPlans />

      <ContactForm />
    </>
  );
};

export default HealthPlansPage;
