import React from 'react';
import { Helmet } from 'react-helmet';
import UnimeduniplanHeader from '@/components/UnimeduniplanHeader';
import UnimeduniplanHero from '@/components/UnimeduniplanHero';
import UnimeduniplanBenefits from '@/components/UnimeduniplanBenefits';
import UnimeduniplanPlans from '@/components/UnimeduniplanPlans';
import UnimeduniplanTestimonials from '@/components/UnimeduniplanTestimonials';
import UnimeduniplanTrust from '@/components/UnimeduniplanTrust';
import UnimeduniplanFooter from '@/components/UnimeduniplanFooter';

const UnimeduniplanPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Helmet>
        <title>Unimed Uniplan - Plano de Saúde com Preço Justo e Atendimento de Qualidade</title>
        <meta name="description" content="Chega de pagar caro por um atendimento ruim. Unimed Uniplan oferece cobertura nacional com preços acessíveis e médicos de confiança." />
      </Helmet>

      <UnimeduniplanHeader />
      
      <main>
        <UnimeduniplanHero />
        <UnimeduniplanBenefits />
        <UnimeduniplanPlans />
        <UnimeduniplanTestimonials />
        
        {/* Quote Form Removed here because it is now inside the Hero section */}
        
        <UnimeduniplanTrust />
      </main>

      <UnimeduniplanFooter />
    </div>
  );
};

export default UnimeduniplanPage;