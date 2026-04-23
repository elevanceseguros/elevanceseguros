import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const logo = "/logo.png"; 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Auto', path: '/seguros-auto' },
    { name: 'Saúde', path: '/planos-saude' },
    { name: 'Empresa', path: '/business-insurance' },
    { name: 'Consórcios', path: '/consorcios' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled || isOpen ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Elevance Seguros" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-[11px] font-black uppercase tracking-widest text-[#1a3a52] hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/5511920144864" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#1a3a52] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md"
          >
            <Phone size={14} />
            Falar com Rodrigo
          </a>
        </nav>

        {/* Botão Mobile */}
        <button 
          className="lg:hidden text-[#1a3a52] p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile (Tailwind puro, sem Framer Motion para não dar erro) */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-6">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsOpen(false)} 
              className="text-sm font-black uppercase tracking-widest text-[#1a3a52] border-b border-slate-50 pb-2"
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/5511920144864" 
            className="flex items-center justify-center gap-2 bg-[#1a3a52] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg"
          >
            <Phone size={16} /> Falar com Rodrigo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
