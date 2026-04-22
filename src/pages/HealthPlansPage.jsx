import React, { useEffect } from 'react';
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
      
      {/* Formulário de Topo Padronizado */}
      <TopQuoteForm />
      
      {/* Componente com os Logos das Operadoras (que ajustamos antes) */}
      <HealthPlans />

      {/* Formulário de Rodapé Padronizado */}
      <ContactForm />
    </>
  );
};

export default HealthPlansPage;
