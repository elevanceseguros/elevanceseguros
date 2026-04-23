import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Link do WhatsApp com seu número atualizado
  const whatsappUrl = "https://wa.me/5511920144864?text=Olá Rodrigo, vi seu site e gostaria de uma cotação!";

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
        
        {/* LOGO */}
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
            />
          </a>
        </motion.div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="relative font-bold text-[#1a3a52] text-xs uppercase tracking-[0.15em] group transition-colors"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* BOTÃO WHATSAPP - RODRIGO */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
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

      {/* Menu Mobile Lateral */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="lg:hidden fixed inset-0 z-[110]"
          >
            {/* Background escuro ao abrir o menu */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            
            <div className="absolute right-0 top-0 bottom-0 w-4/5 bg-white shadow-2xl p-8 flex flex-col gap-6">
              <div className="flex justify-between items-center mb-6">
                <span className="font-black text-[#1a3a52] tracking-widest text-sm italic">MENU</span>
                <X onClick={() => setIsOpen(false)} className="text-slate-400" />
              </div>
              
              <div className="flex flex-col gap-5">
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
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-5 rounded-[20px] text-center font-black uppercase tracking-widest text-sm shadow-lg shadow-green-100 flex items-center justify-center gap-2 mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
