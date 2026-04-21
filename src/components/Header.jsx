import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronRight, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isSagradaFamiliaPage = location.pathname.startsWith('/sagrada-familia');

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 20;
      if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const healthOperators = [
    { label: 'Sagrada Família', href: '/sagrada-familia' },
    { label: 'Mediservice', href: '/mediservice' },
    { label: 'MedSênior', href: '/medsenior' },
    { label: 'Encontre seu Plano', href: '/encontre-seu-plano' },
    { label: 'Alice', href: '/alice' },
    { label: 'São Francisco', href: '/saofrancisco' },
    { label: 'Usisaúde', href: '/usisaude' },
    { label: 'Unimed Uniplan', href: '/uniplan' },
    { label: 'Todos os Planos', href: '/encontre-seu-plano' },
  ];

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Seguro Auto', href: '/seguro-auto' },
    { label: 'Sagrada Família', href: '/sagrada-familia' },
    { label: 'Encontre seu Plano', href: '/encontre-seu-plano' },
    { label: 'Consórcios', href: '/consorcios' },
    { label: 'Contato', href: '/contato' }
  ];

  const scrollToQuote = useCallback(() => {
    const element = document.querySelector('#quote-form') || document.querySelector('#health-quote-form') || document.querySelector('#conversion-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/online-quote');
    }
    setIsMobileMenuOpen(false);
  }, [navigate]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const currentPath = decodeURIComponent(location.pathname);
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/') 
    ? currentPath.slice(0, -1) 
    : currentPath;

  const isLightBackgroundPage = [
    '/mediservice', 
    '/medsenior', 
    '/cassi', 
    '/alice', 
    '/saofrancisco', 
    '/usisaude',
    '/uniplan',
    '/online-quote',
    '/thank-you',
    '/sagrada-familia/thank-you',
    '/encontre-seu-plano'
  ].includes(normalizedPath);

  const shouldShowDarkTheme = isScrolled || isLightBackgroundPage || isMobileMenuOpen;
  
  // Custom colors for the menu items: Default #3B82F6 (blue-500), Hover #1E40AF (blue-800)
  const textColorClass = shouldShowDarkTheme ? 'text-[#1a3a52]' : 'text-[#3B82F6]';
  const hoverColorClass = 'hover:text-[#1E40AF]';
  const textShadowStyle = shouldShowDarkTheme ? 'none' : '0 1px 2px rgba(0,0,0,0.1)';
  
  const logoSrc = isSagradaFamiliaPage
    ? "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/364b1a22d1eb63174eda34fa93a370ab.webp"
    : "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/e18073f9377f3b37fca5a56ae103bbd5.png";

  const logoAlt = isSagradaFamiliaPage ? "Plano de Saúde Sagrada Família" : "Logotipo Elevance Seguros";
  const homeLink = isSagradaFamiliaPage ? "/sagrada-familia" : "/";

  const logoClass = isSagradaFamiliaPage ? "w-16 md:w-20" : "w-12 md:w-14";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        shouldShowDarkTheme
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100' 
          : 'bg-transparent'
      }`}
      style={{ willChange: 'transform, opacity, background-color' }}
    >
      <div 
        className={`hidden lg:block overflow-hidden transition-all duration-300 ease-in-out ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100 bg-[#1a3a52] text-white py-2'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-end gap-6 text-sm font-medium">
           <a href="tel:5511920144864" className="flex items-center gap-1 hover:text-blue-200 transition-colors" aria-label="Ligar para (11) 92014-4864">
             <Phone className="w-4 h-4" /> (11) 92014-4864
           </a>
           <a href="https://wa.me/5511920144864" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-300 transition-colors" aria-label="Contatar via WhatsApp">
             <MessageCircle className="w-4 h-4" /> WhatsApp
           </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to={homeLink}
            className="flex items-center gap-3 group relative z-50"
            aria-label={logoAlt}
            onClick={closeMenu}
          >
            <div className={`${logoClass} flex items-center transition-all duration-300 overflow-visible`}>
               <img 
                 src={logoSrc}
                 alt={logoAlt}
                 className="w-full h-auto object-contain"
               />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-6 items-center" role="navigation">
              <Link
                to="/"
                className={`text-sm font-bold transition-colors ${textColorClass} ${hoverColorClass}`}
                style={{ textShadow: textShadowStyle }}
              >
                Início
              </Link>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button
                    className={`flex items-center gap-1 text-sm font-bold transition-colors outline-none ${textColorClass} ${hoverColorClass}`}
                    style={{ textShadow: textShadowStyle }}
                  >
                    Planos de Saúde <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenu.Trigger>
                
                <DropdownMenu.Portal>
                  <DropdownMenu.Content 
                    className="min-w-[220px] bg-white rounded-lg shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-200 border border-slate-100"
                    sideOffset={5}
                  >
                    {healthOperators.map((op) => (
                      <DropdownMenu.Item key={op.label} asChild>
                        <Link
                          to={op.href}
                          className="flex items-center w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md outline-none cursor-pointer transition-colors"
                        >
                          {op.label}
                        </Link>
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <Link
                to="/sagrada-familia"
                className={`text-sm font-bold transition-colors ${textColorClass} ${hoverColorClass}`}
                style={{ textShadow: textShadowStyle }}
              >
                Sagrada Família
              </Link>

              {menuItems.filter(item => !['Início', 'Sagrada Família'].includes(item.label)).map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-bold transition-colors ${textColorClass} ${hoverColorClass}`}
                  style={{ textShadow: textShadowStyle }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button 
              onClick={scrollToQuote}
              className={`font-semibold transition-all hover:scale-105 shadow-md ${
                shouldShowDarkTheme
                  ? 'bg-[#1a3a52] hover:bg-[#132b3d] text-white' 
                  : 'bg-white text-[#1a3a52] hover:bg-slate-100'
              }`}
              aria-label="Solicitar Cotação Online"
            >
              Cotação Online
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center relative z-50 ${
              shouldShowDarkTheme
                ? 'hover:bg-slate-100 text-[#1a3a52]' 
                : 'hover:bg-white/10 text-[#3B82F6]'
            }`}
            aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
        style={{ 
          willChange: 'opacity, transform', 
          maxHeight: 'calc(100vh - 80px)' 
        }}
      >
        <div className="container mx-auto px-4 py-4 space-y-2 overflow-y-auto max-h-[80vh]">
          {menuItems.map(item => (
            <Link key={item.label} to={item.href} onClick={closeMenu} className="block py-3 px-4 text-slate-600 hover:text-[#1a3a52] hover:bg-slate-50 rounded-xl transition-colors font-medium">{item.label}</Link>
          ))}
          
          <div className="py-2 px-4">
            <span className="block text-slate-900 font-semibold mb-2">Planos de Saúde</span>
            <div className="pl-4 border-l-2 border-slate-100 space-y-2">
                {healthOperators.map(op => (
                  <Link key={op.label} to={op.href} onClick={closeMenu} className="block py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors">{op.label}</Link>
                ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 mt-2 space-y-3">
            <a href="tel:5511920144864" className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                <Phone className="w-5 h-5 text-[#1a3a52]" /> (11) 92014-4864
            </a>
            <a href="https://wa.me/5511920144864" className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                <MessageCircle className="w-5 h-5 text-green-600" /> WhatsApp
            </a>
            <Button 
              onClick={scrollToQuote}
              className="w-full bg-[#1a3a52] hover:bg-[#132b3d] text-white mt-2 active:scale-95 transition-transform"
            >
              Fazer Cotação Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;