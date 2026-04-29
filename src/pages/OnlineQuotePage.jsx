import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import LeadFormSincero from '@/components/LeadFormSincero';
import ContactForm from '@/components/ContactForm';

const OnlineQuotePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cotação Online | Elevance Seguros</title>
        <meta name="description" content="Solicite sua cotação de seguro de forma rápida e simples." />
      </Helmet>

      <Hero customTitle="Cotação Online" />
      
      <div className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Falta pouco!</h2>
            <p className="text-slate-600 mt-2">Informe seus dados básicos e um especialista entrará em contato.</p>
          </div>
          
          <LeadFormSincero produto="Cotacao Online" />
        </div>
      </div>

      <ContactForm produto="Cotacao Online" />
    </>
  );
};

export default OnlineQuotePage;
