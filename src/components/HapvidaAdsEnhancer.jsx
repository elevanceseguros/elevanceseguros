import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const whatsappUrl = 'https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20vim%20pelo%20an%C3%BAncio%20da%20Hapvida%20e%20quero%20uma%20cota%C3%A7%C3%A3o.';

function isHapvidaAdsPath(pathname) {
  return window.location.hostname.startsWith('hapvida.') || pathname === '/hapvida-ads';
}

function enhanceHero() {
  const firstContainer = document.querySelector('main section .max-w-7xl');
  if (!firstContainer) return;

  const oldBrand = document.getElementById('hapvida-brand-strip');
  oldBrand?.remove();

  if (document.getElementById('hapvida-hero-brand-final')) return;

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
    <a href="${whatsappUrl}" target="_blank" rel="noreferrer" class="hidden sm:inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl">WhatsApp</a>
  `;

  firstContainer.prepend(brand);
}

function injectConversionBlocks() {
  const firstInfoSection = document.querySelector('main section.max-w-6xl');
  if (!firstInfoSection || document.getElementById('hapvida-conversion-blocks')) return;

  const blocks = document.createElement('div');
  blocks.id = 'hapvida-conversion-blocks';
  blocks.className = 'max-w-6xl mx-auto px-4 pt-12 pb-4';
  blocks.innerHTML = `
    <div class="grid lg:grid-cols-3 gap-4">
      <div class="bg-white rounded-[1.7rem] border border-slate-100 shadow-sm p-6">
        <p class="text-[10px] uppercase tracking-[0.22em] font-black text-[#0057B8] mb-2">Rede e atendimento</p>
        <h3 class="text-xl font-black text-[#071B34] italic mb-3">Confira a rede para sua região</h3>
        <p class="text-sm text-slate-500 leading-relaxed">A rede pode variar conforme cidade, plano e modalidade. Na cotação, você recebe orientação sobre pontos de atendimento disponíveis para seu perfil.</p>
      </div>
      <div class="bg-white rounded-[1.7rem] border border-slate-100 shadow-sm p-6">
        <p class="text-[10px] uppercase tracking-[0.22em] font-black text-[#FF8A00] mb-2">Ideia de valores</p>
        <h3 class="text-xl font-black text-[#071B34] italic mb-3">Simulação personalizada</h3>
        <p class="text-sm text-slate-500 leading-relaxed">Valores mudam por idade, cidade, quantidade de vidas e tipo de contratação. A simulação certa é feita com os seus dados.</p>
      </div>
      <div class="bg-white rounded-[1.7rem] border border-slate-100 shadow-sm p-6">
        <p class="text-[10px] uppercase tracking-[0.22em] font-black text-green-600 mb-2">Por que a Elevance?</p>
        <h3 class="text-xl font-black text-[#071B34] italic mb-3">Você entende antes de contratar</h3>
        <p class="text-sm text-slate-500 leading-relaxed">O atendimento é consultivo: carência, coparticipação, rede e melhor modalidade são explicados antes do fechamento.</p>
      </div>
    </div>
    <div class="mt-5 rounded-[2rem] bg-[linear-gradient(135deg,#0057B8_0%,#0876D8_60%,#FF9F1A_130%)] text-white p-7 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 shadow-xl">
      <div>
        <p class="text-[10px] uppercase tracking-[0.25em] font-black text-white/75 mb-2">Cotação Hapvida</p>
        <h2 class="text-2xl md:text-3xl font-black leading-tight">Receba orientação antes de escolher o plano</h2>
        <p class="text-sm text-white/75 mt-2 max-w-2xl">Veja opções conforme cidade, perfil, idade e quantidade de vidas.</p>
      </div>
      <a href="${whatsappUrl}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-2xl bg-white text-[#0057B8] px-6 py-4 font-black text-xs uppercase tracking-widest whitespace-nowrap">Falar no WhatsApp</a>
    </div>
  `;

  firstInfoSection.parentNode.insertBefore(blocks, firstInfoSection);
}

export default function HapvidaAdsEnhancer() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isHapvidaAdsPath(pathname)) return;

    enhanceHero();
    injectConversionBlocks();
    const timer = window.setTimeout(() => {
      enhanceHero();
      injectConversionBlocks();
    }, 400);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
