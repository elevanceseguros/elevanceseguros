import React from 'react';
import { Helmet } from 'react-helmet-async';
import { businessSchema, SEO_CONFIG } from '@/lib/seoConfig';

const SchemaMarkup = ({ pageType = 'WebPage', breadcrumbs = [] }) => {
  const schemas = [
    // Organization / LocalBusiness Schema
    businessSchema,
  ];

  // Breadcrumb Schema
  if (breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${SEO_CONFIG.domain}${item.path}`
      }))
    });
  }

  // Service Schema (added generic service schema)
  if (pageType === 'Service') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Insurance Brokerage",
      "provider": {
        "@type": "LocalBusiness",
        "name": SEO_CONFIG.companyName
      },
      "areaServed": {
        "@type": "Country",
        "name": "Brazil"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Insurance Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Seguro Auto"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Plano de Saúde"
            }
          }
        ]
      }
    });
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SchemaMarkup;