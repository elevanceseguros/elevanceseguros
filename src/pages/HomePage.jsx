import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import LeadFormSincero from '@/components/LeadFormSincero';
import InsuranceTypes from '@/components/InsuranceTypes';
import HealthPlans from '@/components/HealthPlans';
import VehicleProtection from '@/components/VehicleProtection';
import Consortiums from '@/components/Consortiums';
import ContactForm from '@/components/ContactForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getMetaTags } from '@/lib/seoConfig';

const HomePage = () => {
  const meta = getMetaTags({
    title: 'Elevance Seguros | Seguro Auto, Saúde e Consórcios',
    description: 'Encontre o melhor Seguro Auto, Plano de Saúde e Consórcios em São Paulo. Cotação online, rápida e sem compromisso.'
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href="https://elevanceseguros.com/" />
      </Helmet>

      <SchemaMarkup />

      <Hero />
      
      <div className="-mt-10 md:-mt-16 px-4 relative z-20">
        <LeadFormSincero />
      </div>
      
      <div className="pt-8">
        <InsuranceTypes />
      </div>

      <HealthPlans />
      <VehicleProtection />
      <Consortiums />
      <ContactForm />
    </>
  );
};

export default HomePage;
