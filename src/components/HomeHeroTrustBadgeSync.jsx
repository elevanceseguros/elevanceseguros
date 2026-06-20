import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomeHeroTrustBadgeSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') return;

    const timer = window.setTimeout(() => {
      const all = Array.from(document.querySelectorAll('div'));
      const item = all.find((el) => el.textContent && el.textContent.trim() === '5 Estrelas no Google');
      if (!item) return;
      item.lastChild.textContent = ' Comparação Personalizada';
    }, 250);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
