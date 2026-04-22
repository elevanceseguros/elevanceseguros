import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import LeadFormSincero from '@/components/LeadFormSincero';
import InsuranceTypes from '@/components/InsuranceTypes';
import HealthPlans from '@/components/HealthPlans';
import VehicleProtection from '@/components/VehicleProtection';
import Consortiums from '@/components/Consortiums';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getMetaTags } from '@/lib/seoConfig';

const ServicePage = ({ type }) => {
  // Ensure page scrolls to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  let content = null;
  let meta = {};
  let breadcrumbs = [];

  switch (type) {
    case 'auto':
      meta = getMetaTags({
        title: 'Seguro Auto Bom e Barato | Cotação Online',
        description: 'Proteja seu veículo com o melhor Seguro Auto em São Paulo. Cobertura completa contra roubo, furto e acidentes. Cote agora!',
        url: '/seguros-auto',
        keywords: 'seguro auto, seguro carro, seguro moto, proteção veicular, cotação seguro auto'
      });
      breadcrumbs = [{ name: 'Seguros Auto', path: '/seguros-auto' }];
      content = (
        <>
          <InsuranceTypes />
          <VehicleProtection />
        </>
      );
      break;

    case 'health':
      meta = getMetaTags({
        title: 'Planos de Saúde | Familiar e Empresarial',
        description: 'Melhores Planos de Saúde em São Paulo e Brasil. Atendimento 24h, ampla rede credenciada e preços acessíveis. Confira!',
        url: '/planos-saude',
        keywords: 'plano de saúde, convênio médico, saúde empresarial, saúde familiar'
      });
      breadcrumbs = [{ name: 'Planos de Saúde', path: '/planos-saude' }];
      content = <HealthPlans />;
      break;
      
    case 'consortium':
      meta = getMetaTags({
        title: 'Consórcios | Imóveis, Veículos e Serviços',
        description: 'Realize seus sonhos com os Consórcios Elevance. Taxa zero de juros para imóveis, carros e motos. Planeje seu futuro hoje.',
        url: '/consorcios',
        keywords: 'consórcio, consórcio imóvel, consórcio carro, consórcio moto, investimento'
      });
      breadcrumbs = [{ name: 'Consórcios', path: '/consorcios' }];
      content = <Consortiums />;
      break;

    case 'contact':
      meta = getMetaTags({
        title: 'Contato | Elevance Seguros',
        description: 'Fale conosco. Tire suas dúvidas sobre seguros, planos de saúde e consórcios. Atendimento rápido via WhatsApp e Telefone.',
        url: '/contato'
      });
      breadcrumbs = [{ name: 'Contato', path: '/contato' }];
      content = null; 
      break;

    default:
      content = <InsuranceTypes />;
  }

  return (
    <>
       <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta['og:title']} />
        <meta property="og:description" content={meta['og:description']} />
        <meta property="og:url" content={meta['og:url']} />
        <link rel="canonical" href={meta['og:url']} />
      </Helmet>

      <SchemaMarkup pageType="Service" breadcrumbs={breadcrumbs} />

      <Hero customTitle={meta.title.split('|')[0]} />
      <Breadcrumb items={breadcrumbs} />
      
      {/* TopQuoteForm is present on all service pages for quick conversion */}
      <TopQuoteForm />
      
      {content}
      
      {/* ContactForm is displayed at the bottom of all service pages */}
      <ContactForm />
    </>
  );
};

export default ServicePage;
