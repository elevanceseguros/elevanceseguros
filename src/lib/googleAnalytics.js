// Google Analytics & Tag Manager utility functions

const GA_MEASUREMENT_ID = 'G-0E0B48S28G';
const GTM_ID = 'GTM-PVV23QSX';

/**
 * Detecta se o acesso é humano real.
 * Bots geralmente não têm: interação de mouse/touch, navigator.webdriver = false,
 * languages definidas, hardware concurrency > 0, e não passam em checks de timing.
 */
const isHumanSession = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;

  // 1. Bloqueia bots que se identificam (headless, webdriver, puppeteer, etc.)
  if (navigator.webdriver === true) return false;
  if (window._phantom || window.__nightmare || window.callPhantom) return false;
  if (navigator.userAgent.match(/HeadlessChrome|PhantomJS|SlimerJS|Zombie|bot|crawler|spider|scraper/i)) return false;

  // 2. Browsers reais sempre têm idioma definido
  if (!navigator.language || navigator.language.length < 2) return false;

  // 3. Browsers reais têm pelo menos 1 núcleo de CPU reportado
  if (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 1) return false;

  // 4. Verifica dimensões de tela reais (bots às vezes reportam 0x0)
  if (window.screen && (window.screen.width === 0 || window.screen.height === 0)) return false;

  return true;
};

/**
 * Check if GTM/dataLayer is available
 */
export const isGtagAvailable = () => {
  return typeof window !== 'undefined' && (typeof window.gtag === 'function' || Array.isArray(window.dataLayer));
};

/**
 * Initialize Google Analytics / GTM dataLayer (called on app mount)
 */
export const initGA = () => {
  if (typeof window === 'undefined') return false;
  if (!isHumanSession()) return false; // Bloqueia na inicialização

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }

  return true;
};

/**
 * Track page views — só dispara para sessões humanas reais
 */
export const trackPageView = (pathname) => {
  if (!isHumanSession()) return; // Bloqueia bots antes de qualquer coisa

  if (!isGtagAvailable()) initGA();

  try {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
    
    window.dataLayer.push({
      event: 'page_view_custom',
      page_path: pathname
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

/**
 * Track custom events — só dispara para sessões humanas reais
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (!isHumanSession()) return; // Bloqueia bots

  if (!isGtagAvailable()) initGA();

  try {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });

    window.gtag('event', eventName, {
      ...eventParams,
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName, formType = 'form') => {
  trackEvent('form_submission', {
    form_name: formName,
    form_type: formType,
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName, buttonLocation = '') => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

/**
 * Track CTA interactions
 */
export const trackCTAClick = (ctaName, ctaType = '') => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_type: ctaType,
  });
};

/**
 * Track conversions
 */
export const trackConversion = (conversionLabel = '') => {
  trackEvent('conversion', {
    event_category: 'engagement',
    event_label: conversionLabel
  });
};

/**
 * Track insurance quote requests
 */
export const trackQuoteRequest = (insuranceType) => {
  trackEvent('quote_request', {
    insurance_type: insuranceType,
  });
  trackConversion('quote_requested');
};

export { GA_MEASUREMENT_ID, GTM_ID };
