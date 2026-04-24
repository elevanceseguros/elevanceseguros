import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import LeadFormSincero from '@/components/LeadFormSincero'; // Nome novo aqui
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
    description: 'Encontre o plano de saúde ideal para você, sua família ou sua empresa.',
    url: '/health-plans'
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <Hero customTitle="Planos de Saúde" />
      <Breadcrumb items={[{ name: 'Planos de Saúde', path: '/health-plans' }]} />
      
      <LeadFormSincero /> {/* Componente novo aqui */}
      
      <HealthPlans />

      <ContactForm />
    </>
  );
};

export default HealthPlansPage;
