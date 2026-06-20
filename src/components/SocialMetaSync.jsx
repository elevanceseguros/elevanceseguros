import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://www.elevanceseguros.com/preview.webp';
const BASE_URL = 'https://www.elevanceseguros.com';

const SYNC_ROUTES = [
  '/encontre-seu-plano',
  '/hapvida',
  '/hapvida-campinas',
  '/hapvida-ribeirao-preto',
  '/hapvida-sao-bernardo-do-campo',
  '/hapvida-sorocaba',
  '/amil',
  '/amil-campinas',
  '/amil-ribeirao-preto',
  '/amil-sao-bernardo-do-campo',
  '/amil-sorocaba',
  '/bradescosaude',
  '/bradescosaude-campinas',
  '/bradescosaude-ribeirao-preto',
  '/bradescosaude-sao-bernardo-do-campo',
  '/bradescosaude-sorocaba',
  '/medsenior',
  '/medsenior-campinas',
  '/medsenior-sao-bernardo-do-campo',
  '/sulamerica',
  '/unimed',
  '/porto',
  '/alice',
];

function setMeta(selector, attrs) {
  const items = Array.from(document.head.querySelectorAll(selector));
  const element = items[0] || document.createElement('meta');

  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  items.slice(1).forEach((item) => item.remove());
  if (!element.parentElement) document.head.appendChild(element);
}

export default function SocialMetaSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!SYNC_ROUTES.includes(pathname)) return;

    const timer = window.setTimeout(() => {
      const title = document.title;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || `${BASE_URL}${pathname}`;

      setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
      setMeta('meta[property="og:title"]', { property: 'og:title', content: title });
      setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
      setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
      setMeta('meta[property="og:image"]', { property: 'og:image', content: DEFAULT_IMAGE });
      setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
      setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
      setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
      setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: DEFAULT_IMAGE });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
