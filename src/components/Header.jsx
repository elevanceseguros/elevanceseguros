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
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/">
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
            className="flex items-center gap-2 bg-[#1a3a52] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md"
          >
            <Phone size={14} />
            Falar com Rodrigo
          </a>
        </nav>

        {/* Botão Mobile */}
        <button className="lg:hidden text-[#1a3a52]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden bg-white border-b border-slate-100 absolute w-full p-6 space-y-4 shadow-xl">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="block text-sm font-black uppercase text-[#1a3a52]">
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
