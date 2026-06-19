import { BUSINESS_CONFIG } from '@/config/business';
import { trackLeadSubmitError, trackLeadSubmitStart, trackLeadSubmitSuccess } from '@/lib/leadTracking';

export async function submitLead(payload) {
  const lead = {
    ...payload,
    origem: payload.origem || (typeof window !== 'undefined' ? window.location.pathname : ''),
  };

  trackLeadSubmitStart({ produto: lead.produto, origem: lead.origem });

  try {
    await fetch(BUSINESS_CONFIG.leadWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });

    trackLeadSubmitSuccess({ produto: lead.produto, origem: lead.origem });
    return { ok: true };
  } catch (error) {
    trackLeadSubmitError({ produto: lead.produto, origem: lead.origem });
    return { ok: false, error };
  }
}
