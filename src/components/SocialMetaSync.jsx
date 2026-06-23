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

function replaceHomeTrustBadge() {
  const elements = Array.from(document.querySelectorAll('div, span, p'));

  elements.forEach((element) => {
    element.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.includes('5 Estrelas no Google')) {
        node.textContent = node.textContent.replace('5 Estrelas no Google', 'Comparação Personalizada');
      }
    });
  });
}

function applyHapvidaAdsBranding() {
  const hero = document.querySelector('main section');
  const firstContainer = hero?.querySelector('.max-w-7xl');

  if (hero) {
    hero.style.background = 'linear-gradient(135deg, #0057B8 0%, #0876D8 42%, #071B34 100%)';
  }

  const radial = hero?.querySelector('.absolute.inset-0');
  if (radial) {
    radial.style.opacity = '1';
    radial.style.background = 'radial-gradient(circle at top right, rgba(255,155,0,.24), transparent 28%), radial-gradient(circle at bottom left, rgba(255,255,255,.10), transparent 28%)';
  }

  if (firstContainer && !document.getElementById('hapvida-brand-strip')) {
    const brandStrip = document.createElement('div');
    brandStrip.id = 'hapvida-brand-strip';
    brandStrip.className = 'flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10';
    brandStrip.innerHTML = `
      <div class="inline-flex items-center gap-4 rounded-2xl bg-white/10 border border-white/10 px-4 py-3 backdrop-blur-sm w-fit">
        <img src="/logos/hapvida.webp" alt="Hapvida" class="h-10 md:h-12 w-auto object-contain bg-white rounded-xl px-2 py-1" />
        <div class="w-px h-10 bg-white/20"></div>
        <div class="leading-none">
          <div class="text-xl md:text-2xl font-black tracking-[0.12em] text-white">ELEVANCE</div>
          <div class="mt-1 text-[9px] md:text-[10px] font-black uppercase tracking-[0.22em] text-[#FFD26E]">Corretora parceira</div>
        </div>
      </div>
      <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20vim%20pelo%20an%C3%BAncio%20da%20Hapvida%20e%20quero%20uma%20cota%C3%A7%C3%A3o." target="_blank" rel="noreferrer" class="hidden sm:inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl">WhatsApp</a>
    `;
    firstContainer.prepend(brandStrip);

    const oldHeader = Array.from(firstContainer.children).find((child) => child !== brandStrip && child.textContent?.includes('Elevance Seguros') && child.textContent?.includes('Corretora independente'));
    oldHeader?.remove();
  }

  const badge = Array.from(document.querySelectorAll('div, span')).find((element) => element.textContent?.trim() === 'Cotação de Plano Hapvida');
  if (badge) {
    badge.style.background = '#FFB000';
    badge.style.color = '#072244';
    badge.style.border = 'none';
    badge.style.fontWeight = '900';
    badge.textContent = 'Cotação Hapvida com apoio da Elevance';
  }

  Array.from(document.querySelectorAll('span, p')).forEach((element) => {
    if (element.textContent?.includes('rápida e consultiva')) {
      element.textContent = 'rápida, clara e consultiva';
      element.style.color = '#FFD26E';
    }
    if (element.textContent?.includes('Informe seus dados básicos')) {
      element.textContent = 'Compare opções Hapvida com atendimento da Elevance Seguros. Entenda valores, rede, carência e coparticipação para pessoa física, família, MEI ou empresa.';
      element.style.color = 'rgba(255,255,255,.80)';
    }
  });

  const formTitle = Array.from(document.querySelectorAll('h2')).find((element) => element.textContent?.includes('Receber cotação Hapvida'));
  if (formTitle && !document.getElementById('hapvida-form-logo')) {
    const logo = document.createElement('img');
    logo.id = 'hapvida-form-logo';
    logo.src = '/logos/hapvida.webp';
    logo.alt = 'Hapvida';
    logo.className = 'h-12 md:h-14 w-auto object-contain mx-auto mb-3';
    formTitle.parentElement?.prepend(logo);
    formTitle.style.color = '#0057B8';
  }

  Array.from(document.querySelectorAll('p')).forEach((element) => {
    if (element.textContent?.trim() === 'Resposta pelo WhatsApp') {
      element.style.color = '#FF8A00';
    }
  });

  Array.from(document.querySelectorAll('button')).forEach((button) => {
    if (['Individual/Familiar', 'MEI', 'Empresa'].includes(button.textContent?.trim())) {
      if (button.className.includes('bg-[#071B34]')) {
        button.style.background = '#0057B8';
        button.style.color = '#ffffff';
        button.style.borderColor = '#0057B8';
      }
    }
  });
}

export default function SocialMetaSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') return;

    replaceHomeTrustBadge();
    const timer = window.setTimeout(replaceHomeTrustBadge, 300);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const hostname = window.location.hostname;
    const isHapvidaAds = hostname.startsWith('hapvida.') || pathname === '/hapvida-ads';
    if (!isHapvidaAds) return;

    applyHapvidaAdsBranding();
    const timer = window.setTimeout(applyHapvidaAdsBranding, 300);

    return () => window.clearTimeout(timer);
  }, [pathname]);

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
