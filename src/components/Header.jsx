import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Auto', href: '/seguro-auto' },
    { name: 'Saúde', href: '/health-plans' },
    { name: 'Empresa', href: '/business-insurance' },
    { name: 'Consórcios', href: '/consorcios' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO - Ajustada para visibilidade */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-shrink-0"
        >
          <a href="/" className="flex items-center">
            <img 
              src="/logos/elevance-logo.png" 
              alt="Elevance Seguros" 
              className={`transition-all duration-300 object-contain ${
                scrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
              }`}
              // Se a logo for escura e o fundo do topo for escuro, 
              // podes adicionar um filtro de brilho quando scrolled for false:
              // style={{ filter: !scrolled ? 'brightness(1.2)' : 'none' }}
            />
          </a>
        </motion.div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`relative font-bold text-xs uppercase tracking-[0.15em] group transition-colors ${
                scrolled ? 'text-[#1a3a52]' : 'text-[#1a3a52]' 
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href="/contato" 
            className="flex items-center gap-2 bg-[#1a3a52] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95 shadow-md"
          >
            <Phone size={14} className="animate-pulse" />
            Falar com Rodrigo
          </a>
        </nav>

        {/* Botão Mobile */}
        <button 
          className="lg:hidden p-2 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-200 text-[#1a3a52]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full inset-x-0 bg-white border-b shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-5">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-lg font-black text-[#1a3a52] flex justify-between items-center border-b border-slate-50 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <ChevronRight size={18} className="text-blue-600" />
                </a>
              ))}
              <a 
                href="/contato" 
                className="bg-blue-600 text-white p-5 rounded-[20px] text-center font-black uppercase tracking-widest text-sm"
                onClick={() => setIsOpen(false)}
              >
                Falar com Rodrigo agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
