import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Importing sections
import SagradaFamiliaHero from '@/components/sagradafamilia/SagradaFamiliaHero';
import AuthoritySection from '@/components/sagradafamilia/AuthoritySection';
import TestimonialsSection from '@/components/sagradafamilia/TestimonialsSection';
import NetworkCoverageSection from '@/components/sagradafamilia/NetworkCoverageSection';
import PlansSection from '@/components/sagradafamilia/PlansSection';
import ConversionForm from '@/components/sagradafamilia/ConversionForm';
import SagradaFamiliaDetailedBenefits from '@/components/sagradafamilia/SagradaFamiliaDetailedBenefits';
import PainBenefitSection from '@/components/sagradafamilia/PainBenefitSection';
import WhyChooseSagradaFamilia from '@/components/sagradafamilia/WhyChooseSagradaFamilia';
import SagradaFamiliaFAQ from '@/components/sagradafamilia/SagradaFamiliaFAQ';

const SagradaFamiliaHomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Plano de Saúde Sagrada Família | Cotação Online - Elevance Seguros</title>
        <meta name="description" content="Conheça o Plano de Saúde Sagrada Família. Atendimento humanizado, rede própria de qualidade e preços acessíveis. Solicite sua cotação via WhatsApp." />
        <meta name="keywords" content="Sagrada Família saúde, plano Sagrada Família, convênio médico, saúde sp, hospital sagrada família, elevance seguros" />
      </Helmet>

      {/* Header */}
      <Header />

      <main>
        {/* 1. SagradaFamiliaHero */}
        <SagradaFamiliaHero />

        {/* 2. AuthoritySection (Confiança que Vem de Quem Entende de Saúde) */}
        <AuthoritySection />

        {/* 3. TestimonialsSection (Quem Confia, Recomenda) */}
        <TestimonialsSection />

        {/* 4. NetworkCoverageSection (Onde Você Pode Contar Conosco?) */}
        <NetworkCoverageSection />

        {/* 5. PlansSection (Um Plano Perfeito Para Cada Momento da Vida) */}
        <PlansSection />

        {/* 6. ConversionForm (Encontre o Plano Ideal para Você - MOVED HERE) */}
        <ConversionForm />

        {/* 7. SagradaFamiliaDetailedBenefits (Ampla Cobertura) */}
        <SagradaFamiliaDetailedBenefits />

        {/* 8. PainBenefitSection (Excelente Custo-Benefício) */}
        <PainBenefitSection />

        {/* 9. WhyChooseSagradaFamilia (Transforme Preocupações em Tranquilidade) */}
        <WhyChooseSagradaFamilia />

        {/* 10. SagradaFamiliaFAQ (Dúvidas Frequentes) */}
        <SagradaFamiliaFAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingWhatsApp />
    </>
  );
};

export default SagradaFamiliaHomePage;