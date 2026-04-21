// Google Analytics & Tag Manager utility functions

const GA_MEASUREMENT_ID = 'G-0E0B48S28G';
const GTM_ID = 'GTM-PVV23QSX';

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

  // Create dataLayer if it doesn't exist (Standard for GTM)
  window.dataLayer = window.dataLayer || [];

  // Create gtag shim if it doesn't exist
  if (!window.gtag) {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
  }

  return true;
};

/**
 * Track page views
 * @param {string} pathname - The current page path
 */
export const trackPageView = (pathname) => {
  if (!isGtagAvailable()) initGA();

  try {
    // Standard GA4 / gtag page view
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
    
    // GTM specific page view event push
    window.dataLayer.push({
      event: 'page_view_custom',
      page_path: pathname
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

/**
 * Track custom events
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (!isGtagAvailable()) initGA();

  try {
    // Push to dataLayer for GTM to intercept
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });

    // Also send via gtag API
    window.gtag('event', eventName, {
      ...eventParams,
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form
 * @param {string} formType - Type of form (e.g., 'contact', 'quote')
 */
export const trackFormSubmission = (formName, formType = 'form') => {
  trackEvent('form_submission', {
    form_name: formName,
    form_type: formType,
  });
};

/**
 * Track button clicks
 * @param {string} buttonName - Name/label of the button
 * @param {string} buttonLocation - Where the button is located
 */
export const trackButtonClick = (buttonName, buttonLocation = '') => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

/**
 * Track CTA interactions
 * @param {string} ctaName - Name of the CTA
 * @param {string} ctaType - Type of CTA (e.g., 'whatsapp', 'phone', 'email')
 */
export const trackCTAClick = (ctaName, ctaType = '') => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_type: ctaType,
  });
};

/**
 * Track conversions
 * @param {string} conversionLabel - Optional conversion label
 */
export const trackConversion = (conversionLabel = '') => {
  trackEvent('conversion', {
    event_category: 'engagement',
    event_label: conversionLabel
  });
};

/**
 * Track insurance quote requests
 * @param {string} insuranceType - Type of insurance requested
 */
export const trackQuoteRequest = (insuranceType) => {
  trackEvent('quote_request', {
    insurance_type: insuranceType,
  });
  trackConversion('quote_requested');
};

export { GA_MEASUREMENT_ID, GTM_ID };