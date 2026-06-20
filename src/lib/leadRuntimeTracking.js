import { BUSINESS_CONFIG } from '@/config/business';
import { trackLeadSubmitError, trackLeadSubmitStart, trackLeadSubmitSuccess, trackWhatsAppClick } from '@/lib/leadTracking';

const TRACKED_HEADER = 'X-Elevance-Tracked';
let installed = false;

function getRequestUrl(input) {
  if (typeof input === 'string') return input;
  if (input?.url) return input.url;
  return '';
}

function getRequestHeaders(input, init = {}) {
  const headers = new Headers(init.headers || input?.headers || {});
  return headers;
}

function parseLeadPayload(init = {}) {
  if (!init.body || typeof init.body !== 'string') return {};

  try {
    return JSON.parse(init.body);
  } catch (_) {
    return {};
  }
}

function isLeadWebhook(url = '') {
  return url.includes(BUSINESS_CONFIG.leadWebhookUrl);
}

function isWhatsAppUrl(url = '') {
  return url.includes('wa.me/') || url.includes('api.whatsapp.com/send');
}

export function installLeadRuntimeTracking() {
  if (installed || typeof window === 'undefined') return;
  installed = true;

  const originalFetch = window.fetch?.bind(window);

  if (originalFetch) {
    window.fetch = async (input, init = {}) => {
      const url = getRequestUrl(input);
      const headers = getRequestHeaders(input, init);
      const alreadyTracked = headers.get(TRACKED_HEADER) === '1';

      if (!alreadyTracked && isLeadWebhook(url)) {
        const payload = parseLeadPayload(init);
        trackLeadSubmitStart({ produto: payload.produto, origem: payload.origem || window.location.pathname });

        try {
          const response = await originalFetch(input, init);
          trackLeadSubmitSuccess({ produto: payload.produto, origem: payload.origem || window.location.pathname });
          return response;
        } catch (error) {
          trackLeadSubmitError({ produto: payload.produto, origem: payload.origem || window.location.pathname });
          throw error;
        }
      }

      return originalFetch(input, init);
    };
  }

  document.addEventListener('click', (event) => {
    const link = event.target?.closest?.('a[href]');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    if (!isWhatsAppUrl(href)) return;

    trackWhatsAppClick({
      origem: window.location.pathname,
      canal: 'link_whatsapp',
      produto: href,
    });
  }, true);

  const originalOpen = window.open?.bind(window);

  if (originalOpen) {
    window.open = (url, target, features) => {
      if (typeof url === 'string' && isWhatsAppUrl(url)) {
        trackWhatsAppClick({
          origem: window.location.pathname,
          canal: 'window_open_whatsapp',
          produto: url,
        });
      }

      return originalOpen(url, target, features);
    };
  }
}

export { TRACKED_HEADER };
