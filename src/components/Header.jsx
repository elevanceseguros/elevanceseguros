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

  return (
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Elevance Seguros" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <Link to="/blog" className="text-xs font-black uppercase tracking-[0.15em] text-[#1a3a52] hover:text-blue-600 transition-colors">Blog</Link>
          <a 
            href="https://wa.me/5511920144864" 
            target="_blank" 
            className="flex items-center gap-2 bg-[#1a3a52] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md"
          >
            <Phone size={14} className="animate-pulse" />
            Falar com Rodrigo
          </a>
        </nav>

        <button className="lg:hidden text-[#1a3a52]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
