import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o estilo do menu ao rolar a página
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
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Logo com animação simples */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex-shrink-0"
        >
          <a href="/">
            <img 
              src="/logos/elevance-logo.png" 
              alt="Elevance Seguros" 
              className="h-10 md:h-12 object-contain" 
            />
          </a>
        </motion.div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="relative text-[#1a3a52] font-bold text-xs uppercase tracking-[0.15em] group"
            >
              {item.name}
              {/* Linha animada no hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Botão Principal com pulso sutil */}
          <a 
            href="/contato" 
            className="flex items-center gap-2 bg-[#1a3a52] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95"
          >
            <Phone size={14} className="animate-bounce" />
            Falar com Rodrigo
          </a>
        </nav>

        {/* Botão Mobile */}
        <button 
          className="lg:hidden p-2 bg-white rounded-xl shadow-sm border border-slate-100 text-[#1a3a52]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-5">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-lg font-black text-[#1a3a52] flex justify-between items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <ChevronRight size={18} className="text-blue-600" />
                </a>
              ))}
              <a 
                href="/contato" 
                className="bg-blue-600 text-white p-5 rounded-[20px] text-center font-black uppercase tracking-widest text-sm shadow-lg shadow-blue-100"
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

// Pequeno ícone auxiliar para o mobile
const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

export default Header;
