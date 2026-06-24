import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, initGA } from '@/lib/googleAnalytics';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    const path = location.pathname + location.search;
    trackPageView(path);
  }, [location]);
};

export default useGoogleAnalytics;
