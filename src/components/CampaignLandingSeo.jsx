import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = {
  saude: {
    title: 'Plano de Saúde | Cotação Gratuita | Elevance Seguros',
    description: 'Página de campanha da Elevance Seguros para cotação de planos de saúde com atendimento pelo WhatsApp.',
    canonical: 'https://saude.elevanceseguros.com',
    image: 'https://www.elevanceseguros.com/preview.webp',
    noindex: true,
  },
  sagradaSubdomain: {
    title: 'Plano Sagrada Família SP | Tabela e Cotação Gratuita',
    description: 'Plano de Saúde Sagrada Família em São Paulo com tabela atualizada, hospitais próprios e cotação gratuita pelo WhatsApp.',
    canonical: 'https://sagradafamilia.elevanceseguros.com',
    image: 'https://sagradafamilia.elevanceseguros.com/logos/sagrada-familia-logo.png',
    noindex: false,
  },
  sagradaLegacyPath: {
    title: 'Plano Sagrada Família | Elevance Seguros',
    description: 'Rota interna da landing Sagrada Família da Elevance Seguros.',
    canonical: 'https://sagradafamilia.elevanceseguros.com',
    image: 'https://sagradafamilia.elevanceseguros.com/logos/sagrada-familia-logo.png',
    noindex: true,
  },
};

function getSeo(pathname) {
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  if (hostname.startsWith('saude.') || pathname === '/saude') return SEO.saude;
  if (hostname.startsWith('sagradafamilia.')) return SEO.sagradaSubdomain;
  if (pathname === '/sagrada-familia') return SEO.sagradaLegacyPath;

  return null;
}

export default function CampaignLandingSeo() {
  const location = useLocation();
  const seo = getSeo(location.pathname);

  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.title}</title>
      {seo.noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
}
