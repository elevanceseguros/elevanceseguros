export const BUSINESS_CONFIG = {
  brandName: 'Elevance Seguros',
  consultantName: 'Rodrigo Farias',
  phoneDisplay: '(11) 92014-4864',
  whatsappNumber: '5511920144864',
  email: 'contato@elevanceseguros.com',
  websiteUrl: 'https://www.elevanceseguros.com',
  leadWebhookUrl: 'https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead',
  social: {
    instagram: 'https://instagram.com/elevanceseguros',
    tiktok: 'https://tiktok.com/@elevance.seguros',
    kwai: 'https://kwai.com/@elevanceseguros',
    youtube: 'https://youtube.com/@elevanceseguros',
  },
};

export const PRODUCT_BY_ROUTE = {
  '/': 'uma consultoria',
  '/encontre-seu-plano': 'um Plano de Saúde',
  '/odontologico': 'um Plano Odontológico',
  '/seguro-auto': 'um Seguro Auto',
  '/seguro-vida': 'um Seguro de Vida',
  '/seguro-residencial': 'um Seguro Residencial',
  '/seguro-empresa': 'um Seguro Empresarial',
  '/responsabilidade-civil': 'um Seguro de Responsabilidade Civil',
  '/seguro-garantia': 'um Seguro Garantia',
  '/protecao-veicular': 'a Proteção Veicular APVS',
  '/consorcios': 'um Consórcio',
  '/hapvida': 'um plano Hapvida',
  '/hapvida-campinas': 'um plano Hapvida em Campinas',
  '/hapvida-ribeirao-preto': 'um plano Hapvida em Ribeirão Preto',
  '/hapvida-sao-bernardo-do-campo': 'um plano Hapvida em São Bernardo',
  '/hapvida-sorocaba': 'um plano Hapvida em Sorocaba',
  '/bradescosaude': 'um plano Bradesco Saúde',
  '/bradescosaude-campinas': 'um plano Bradesco Saúde em Campinas',
  '/bradescosaude-ribeirao-preto': 'um plano Bradesco Saúde em Ribeirão Preto',
  '/bradescosaude-sao-bernardo-do-campo': 'um plano Bradesco Saúde em São Bernardo',
  '/bradescosaude-sorocaba': 'um plano Bradesco Saúde em Sorocaba',
  '/amil': 'um plano Amil',
  '/amil-campinas': 'um plano Amil em Campinas',
  '/amil-ribeirao-preto': 'um plano Amil em Ribeirão Preto',
  '/amil-sao-bernardo-do-campo': 'um plano Amil em São Bernardo',
  '/amil-sorocaba': 'um plano Amil em Sorocaba',
  '/medsenior': 'um plano MedSênior',
  '/medsenior-campinas': 'um plano MedSênior em Campinas',
  '/medsenior-sao-bernardo-do-campo': 'um plano MedSênior em São Bernardo',
  '/sulamerica': 'um plano SulAmérica',
  '/unimed': 'um plano Unimed',
  '/porto': 'um plano Porto Saúde',
  '/alice': 'um plano Alice',
  '/plena-saude': 'um plano Plena Saúde',
  '/biovida': 'um plano Biovida',
  '/unihosp': 'um plano Unihosp',
  '/garantia-saude': 'um plano Garantia de Saúde',
  '/trasmontano': 'um plano Trasmontano',
  '/sao-cristovao': 'um plano São Cristóvão',
  '/sao-miguel': 'um plano São Miguel',
  '/loovi': 'o Seguro Auto Loovi',
};

export function getRouteProduct(pathname = '/') {
  if (pathname.startsWith('/blog')) return 'conteúdo do blog da Elevance';
  return PRODUCT_BY_ROUTE[pathname] || 'uma consultoria';
}

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildContextualWhatsAppMessage(pathname = '/') {
  const product = getRouteProduct(pathname);
  if (pathname.startsWith('/blog')) {
    return 'Olá Rodrigo, vim pelo blog da Elevance e quero saber mais.';
  }
  return `Olá Rodrigo, vim pelo site da Elevance e quero cotar ${product}.`;
}
