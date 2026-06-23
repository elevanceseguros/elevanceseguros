import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://www.elevanceseguros.com/preview.webp';
const BASE_URL = 'https://www.elevanceseguros.com';
const HEALTH_ROUTES = ['/encontre-seu-plano', '/hapvida', '/hapvida-campinas', '/hapvida-ribeirao-preto', '/hapvida-sao-bernardo-do-campo', '/hapvida-sorocaba', '/amil', '/amil-campinas', '/amil-ribeirao-preto', '/amil-sao-bernardo-do-campo', '/amil-sorocaba', '/bradescosaude', '/bradescosaude-campinas', '/bradescosaude-ribeirao-preto', '/bradescosaude-sao-bernardo-do-campo', '/bradescosaude-sorocaba', '/medsenior', '/medsenior-campinas', '/medsenior-sao-bernardo-do-campo', '/sulamerica', '/unimed', '/porto', '/alice'];
const HAPVIDA_WA = 'https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20vim%20pelo%20an%C3%BAncio%20da%20Hapvida%20e%20quero%20uma%20cota%C3%A7%C3%A3o.';

function setMeta(selector, attrs) {
  const items = Array.from(document.head.querySelectorAll(selector));
  const element = items[0] || document.createElement('meta');
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  items.slice(1).forEach((item) => item.remove());
  if (!element.parentElement) document.head.appendChild(element);
}

function replaceHomeTrustBadge() {
  document.querySelectorAll('div, span, p').forEach((element) => {
    element.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.includes('5 Estrelas no Google')) {
        node.textContent = node.textContent.replace('5 Estrelas no Google', 'Comparação Personalizada');
      }
    });
  });
}

function applyHapvidaHeroBranding() {
  const hero = document.querySelector('main section');
  const firstContainer = hero?.querySelector('.max-w-7xl');
  if (!hero || !firstContainer) return;

  hero.style.background = 'linear-gradient(135deg, #0057B8 0%, #0876D8 42%, #071B34 100%)';
  const radial = hero.querySelector('.absolute.inset-0');
  if (radial) {
    radial.style.opacity = '1';
    radial.style.background = 'radial-gradient(circle at top right, rgba(255,155,0,.24), transparent 28%), radial-gradient(circle at bottom left, rgba(255,255,255,.10), transparent 28%)';
  }

  document.getElementById('hapvida-brand-strip')?.remove();
  if (!document.getElementById('hapvida-hero-brand-final')) {
    const brand = document.createElement('div');
    brand.id = 'hapvida-hero-brand-final';
    brand.className = 'flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10';
    brand.innerHTML = `
      <div class="inline-flex items-center gap-4 rounded-2xl bg-white/10 border border-white/10 px-4 py-3 backdrop-blur-sm w-fit">
        <img src="/logos/hapvida.webp" alt="Hapvida" class="h-10 md:h-12 w-auto object-contain bg-white rounded-xl px-2 py-1" />
        <div class="w-px h-12 bg-white/20"></div>
        <div class="flex flex-col items-start gap-1">
          <img src="/elevance.webp" alt="Elevance Seguros" class="h-14 md:h-16 w-auto max-w-[230px] object-contain" style="background:transparent; mix-blend-mode:screen;" />
          <span class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.22em] text-[#FFD26E]">Corretora parceira</span>
        </div>
      </div>
      <a href="${HAPVIDA_WA}" target="_blank" rel="noreferrer" class="hidden sm:inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl">WhatsApp</a>
    `;
    firstContainer.prepend(brand);
  }

  const oldHeader = Array.from(firstContainer.children).find((child) => child.id !== 'hapvida-hero-brand-final' && child.textContent?.includes('Corretora independente'));
  oldHeader?.remove();

  const badge = Array.from(document.querySelectorAll('div, span')).find((element) => element.textContent?.trim() === 'Cotação de Plano Hapvida');
  if (badge) {
    badge.style.background = '#FFB000';
    badge.style.color = '#072244';
    badge.style.border = 'none';
    badge.style.fontWeight = '900';
    badge.textContent = 'Cotação Hapvida com apoio da Elevance';
  }

  document.querySelectorAll('span, p').forEach((element) => {
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
}

function injectHapvidaBlocks() {
  const firstInfoSection = document.querySelector('main section.max-w-6xl');
  if (!firstInfoSection || document.getElementById('hapvida-conversion-blocks')) return;

  const blocks = document.createElement('div');
  blocks.id = 'hapvida-conversion-blocks';
  blocks.className = 'max-w-6xl mx-auto px-4 pt-12 pb-4';
  blocks.innerHTML = `
    <div class="grid lg:grid-cols-3 gap-4">
      <div class="bg-white rounded-[1.7rem] border border-slate-100 shadow-sm p-6"><p class="text-[10px] uppercase tracking-[0.22em] font-black text-[#0057B8] mb-2">Rede e atendimento</p><h3 class="text-xl font-black text-[#071B34] italic mb-3">Confira a rede para sua região</h3><p class="text-sm text-slate-500 leading-relaxed">A rede pode variar conforme cidade, plano e modalidade. Na cotação, você recebe orientação sobre pontos de atendimento disponíveis para seu perfil.</p></div>
      <div class="bg-white rounded-[1.7rem] border border-slate-100 shadow-sm p-6"><p class="text-[10px] uppercase tracking-[0.22em] font-black text-[#FF8A00] mb-2">Ideia de valores</p><h3 class="text-xl font-black text-[#071B34] italic mb-3">Simulação personalizada</h3><p class="text-sm text-slate-500 leading-relaxed">Valores mudam por idade, cidade, quantidade de vidas e tipo de contratação. A simulação certa é feita com os seus dados.</p></div>
      <div class="bg-white rounded-[1.7rem] border border-slate-100 shadow-sm p-6"><p class="text-[10px] uppercase tracking-[0.22em] font-black text-green-600 mb-2">Por que a Elevance?</p><h3 class="text-xl font-black text-[#071B34] italic mb-3">Você entende antes de contratar</h3><p class="text-sm text-slate-500 leading-relaxed">O atendimento é consultivo: carência, coparticipação, rede e melhor modalidade são explicados antes do fechamento.</p></div>
    </div>
    <div class="mt-5 rounded-[2rem] bg-[linear-gradient(135deg,#0057B8_0%,#0876D8_60%,#FF9F1A_130%)] text-white p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-xl"><div><p class="text-[10px] uppercase tracking-[0.25em] font-black text-white/75 mb-2">Cotação Hapvida</p><h2 class="text-2xl md:text-3xl font-black leading-tight">Receba orientação antes de escolher o plano</h2><p class="text-sm text-white/75 mt-2 max-w-2xl">Veja opções conforme cidade, perfil, idade e quantidade de vidas.</p></div><a href="${HAPVIDA_WA}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-2xl bg-white text-[#0057B8] px-6 py-4 font-black text-xs uppercase tracking-widest whitespace-nowrap">Falar no WhatsApp</a></div>
  `;
  firstInfoSection.parentNode.insertBefore(blocks, firstInfoSection);
}

function applyHapvidaAdsEnhancements() {
  applyHapvidaHeroBranding();
  injectHapvidaBlocks();
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
    const isHapvidaAds = window.location.hostname.startsWith('hapvida.') || pathname === '/hapvida-ads';
    if (!isHapvidaAds) return;
    applyHapvidaAdsEnhancements();
    const timer = window.setTimeout(applyHapvidaAdsEnhancements, 400);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!HEALTH_ROUTES.includes(pathname)) return;
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
