export const SEO_CONFIG = {
  companyName: "Elevance Seguros",
  domain: "https://elevanceseguros.com", // Replace with actual domain
  primaryLocation: "São Paulo, SP",
  phone: "(11) 92014-4864",
  email: "contato@elevanceseguros.com",
  social: {
    facebook: "https://facebook.com/elevanceseguros",
    instagram: "https://instagram.com/elevanceseguros",
    linkedin: "https://linkedin.com/company/elevanceseguros"
  },
  defaultTitle: "Elevance Seguros | Corretora de Seguros em São Paulo",
  defaultDescription: "Encontre o Seguro Auto bom e barato, Planos de Saúde e Consórcios que você precisa. Cotação online rápida e atendimento personalizado em São Paulo e todo Brasil.",
  defaultKeywords: "seguros, corretora de seguros, seguro auto, plano de saúde, consórcio, seguro vida, são paulo, brasil",
  defaultImage: "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/e18073f9377f3b37fca5a56ae103bbd5.png"
};

export const getMetaTags = ({ title, description, keywords, url, image, type = "website" }) => {
  const fullTitle = title 
    ? `${title} | ${SEO_CONFIG.companyName}` 
    : SEO_CONFIG.defaultTitle;
    
  const fullDescription = description || SEO_CONFIG.defaultDescription;
  const fullKeywords = keywords || SEO_CONFIG.defaultKeywords;
  const fullUrl = url ? `${SEO_CONFIG.domain}${url}` : SEO_CONFIG.domain;
  const fullImage = image || SEO_CONFIG.defaultImage;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    "og:title": fullTitle,
    "og:description": fullDescription,
    "og:image": fullImage,
    "og:url": fullUrl,
    "og:type": type,
    "og:site_name": SEO_CONFIG.companyName,
    "og:locale": "pt_BR",
    "twitter:card": "summary_large_image",
    "twitter:title": fullTitle,
    "twitter:description": fullDescription,
    "twitter:image": fullImage,
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
    "geo.position": "-23.5505;-46.6333", // Example coordinates for SP
    "ICBM": "-23.5505, -46.6333"
  };
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": SEO_CONFIG.companyName,
  "image": SEO_CONFIG.defaultImage,
  "telephone": SEO_CONFIG.phone,
  "email": SEO_CONFIG.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000", // Placeholder
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100", // Placeholder
    "addressCountry": "BR"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "url": SEO_CONFIG.domain
};