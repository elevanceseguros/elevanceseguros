export function trackLeadEvent(eventName, payload = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...payload,
  });
}

export function trackLeadSubmitStart(payload = {}) {
  trackLeadEvent('lead_form_submit_start', payload);
}

export function trackLeadSubmitSuccess(payload = {}) {
  trackLeadEvent('lead_form_submit_success', payload);
}

export function trackLeadSubmitError(payload = {}) {
  trackLeadEvent('lead_form_submit_error', payload);
}

export function trackWhatsAppClick(payload = {}) {
  trackLeadEvent('whatsapp_click', payload);
}
