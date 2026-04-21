import { useEffect } from 'react';
import { trackPageView, initGA } from '@/lib/googleAnalytics';

/**
 * Custom hook to initialize and track page views with Google Analytics
 * For single-page applications, this tracks the initial page view
 */
export const useGoogleAnalytics = () => {
  useEffect(() => {
    // Ensure GA is initialized (sets up dataLayer and shim if needed)
    initGA();

    // Track initial page view
    // We add a small delay to ensure Helmet has likely injected the script, 
    // although the shim in initGA handles immediate calls.
    const currentPath = window.location.pathname + window.location.search;
    trackPageView(currentPath);

    // For SPAs, you would typically listen to route changes here
    // Since this app doesn't use React Router, we track hash changes
    const handleHashChange = () => {
      const path = window.location.pathname + window.location.hash;
      trackPageView(path);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
};

export default useGoogleAnalytics;