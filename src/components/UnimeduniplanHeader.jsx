import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const UnimeduniplanHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoUrl = "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/4e1b7301eec2646077fced9d9229c132.jpg";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/95 backdrop-blur-sm py-3 border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Reduced size by 20% (from w-14/w-20 to w-[45px]/w-[64px]) */}
        <Link to="/uniplan" className="block w-[45px] md:w-[64px]">
          <img 
            src={logoUrl} 
            alt="Unimed Uniplan Logo" 
            className="w-full h-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/" className="text-gray-600 hover:text-[#10b981] font-medium transition-colors text-sm">
            Home
          </Link>
          <button 
            onClick={() => scrollToSection('planos')}
            className="text-gray-600 hover:text-[#10b981] font-medium transition-colors text-sm"
          >
            Planos
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')}
            className="text-gray-600 hover:text-[#10b981] font-medium transition-colors text-sm"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-[#10b981] hover:bg-[#059669] text-white px-5 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4">
          <Link 
            to="/"
            className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <button 
            onClick={() => scrollToSection('planos')}
            className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Planos
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')}
            className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-[#10b981] text-white py-3 rounded-lg font-bold shadow text-center"
          >
            Contato
          </button>
        </div>
      )}
    </header>
  );
};

export default UnimeduniplanHeader;