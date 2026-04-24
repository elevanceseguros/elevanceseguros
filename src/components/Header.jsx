import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Heart, Car, Shield } from 'lucide-react';

const saudeSubmenu = [
  { name: 'Encontre seu Plano', path: '/encontre-seu-plano' },
  { name: 'Amil', path: '/amil' },
  { name: 'Bradesco Saúde', path: '/bradescosaude' },
  { name: 'SulAmérica', path: '/sulamerica' },
  { name: 'Hapvida', path: '/hapvida' },
  { name: 'Unimed', path: '/unimed' },
  { name: 'Porto Saúde', path: '/porto' },
  { name: 'Alice', path: '/alice' },
  { name: 'MedSênior', path: '/medsenior' },
  { name: 'Odontológico', path: '/odontologico' },
];

const autoSubmenu = [
  { name: 'Seguro Auto', path: '/seguro-auto' },
  { name: 'Proteção Veicular', path: '/protecao-veicular' },
];

const segurosSubmenu = [
  { name: 'Seguro de Vida', path: '/seguro-vida' },
  { name: 'Seguro Empresarial', path: '/seguro-empresa' },
  { name: 'Responsabilidade Civil', path: '/responsabilidade-civil' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [saudeOpen, setSaudeOpen] = useState(false);
  const [autoOpen, setAutoOpen] = useState(false);
  const [segurosOpen, setSegurosOpen] = useState(false);
  const [mobileSaudeOpen, setMobileSaudeOpen] = useState(false);
  const [mobileAutoOpen, setMobileAutoOpen] = useState(false);
  const [mobileSegurosOpen, setMobileSegurosOpen] = useState(false);
  const saudeRef = useRef(null);
  const autoRef = useRef(null);
  const segurosRef = useRef(null);
  const logo = "/logo-white.png";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (saudeRef.current && !saudeRef.current.contains(e.target)) setSaudeOpen(false);
      if (autoRef.current && !autoRef.current.contains(e.target)) setAutoOpen(false);
      if (segurosRef.current && !segurosRef.current.contains(e.target)) setSegurosOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] bg-[#114d8e] shadow-lg py-3">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Elevance Seguros" className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-8">

          {/* Saúde com submenu */}
          <div ref={saudeRef} className="relative">
            <button
              onClick={() => { setSaudeOpen(!saudeOpen); setAutoOpen(false); }}
              className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white hover:text-blue-200 transition-colors"
            >
              <Heart size={13} /> Saúde <ChevronDown size={13} className={`transition-transform ${saudeOpen ? 'rotate-180' : ''}`} />
            </button>
            {saudeOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                {saudeSubmenu.map((item, i) => (
                  <Link key={item.path} to={item.path}
                    onClick={() => setSaudeOpen(false)}
                    className={`block px-5 py-2.5 text-xs font-black uppercase tracking-wide text-[#114d8e] hover:bg-blue-50 hover:text-blue-600 transition-colors ${i === 0 ? 'border-b border-slate-100 mb-1 text-blue-600' : ''}`}>
                    {i === 0 ? '⭐ ' + item.name : item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Auto com submenu */}
          <div ref={autoRef} className="relative">
            <button
              onClick={() => { setAutoOpen(!autoOpen); setSaudeOpen(false); }}
              className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white hover:text-blue-200 transition-colors"
            >
              <Car size={13} /> Auto <ChevronDown size={13} className={`transition-transform ${autoOpen ? 'rotate-180' : ''}`} />
            </button>
            {autoOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                {autoSubmenu.map((item) => (
                  <Link key={item.path} to={item.path}
                    onClick={() => setAutoOpen(false)}
                    className="block px-5 py-2.5 text-xs font-black uppercase tracking-wide text-[#114d8e] hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>


          {/* Seguros com submenu */}
          <div ref={segurosRef} className="relative">
            <button
              onClick={() => { setSegurosOpen(!segurosOpen); setSaudeOpen(false); setAutoOpen(false); }}
              className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white hover:text-blue-200 transition-colors"
            >
              <Shield size={13} /> Seguros <ChevronDown size={13} className={`transition-transform ${segurosOpen ? 'rotate-180' : ''}`} />
            </button>
            {segurosOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                {segurosSubmenu.map((item) => (
                  <Link key={item.path} to={item.path}
                    onClick={() => setSegurosOpen(false)}
                    className="block px-5 py-2.5 text-xs font-black uppercase tracking-wide text-[#114d8e] hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/consorcios" className="text-[11px] font-black uppercase tracking-widest text-white hover:text-blue-200 transition-colors">Consórcios</Link>
          <Link to="/blog" className="text-[11px] font-black uppercase tracking-widest text-white hover:text-blue-200 transition-colors">Blog</Link>

          <a href="https://wa.me/5511920144864" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-md">
            <Phone size={14} /> Falar com Rodrigo
          </a>
        </nav>

        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#114d8e] border-t border-blue-400/30 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[700px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-2">

          {/* Saúde mobile */}
          <button onClick={() => setMobileSaudeOpen(!mobileSaudeOpen)}
            className="flex items-center justify-between text-sm font-black uppercase tracking-widest text-white border-b border-blue-400/30 pb-3">
            <span className="flex items-center gap-2"><Heart size={14} /> Saúde</span>
            <ChevronDown size={16} className={`transition-transform ${mobileSaudeOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileSaudeOpen && (
            <div className="flex flex-col gap-1 pl-4 mb-2">
              {saudeSubmenu.map((item, i) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}
                  className={`text-xs font-black uppercase tracking-wide py-2 border-b border-slate-50 ${i === 0 ? 'text-blue-600' : 'text-slate-600'}`}>
                  {i === 0 ? '⭐ ' + item.name : item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Auto mobile */}
          <button onClick={() => setMobileAutoOpen(!mobileAutoOpen)}
            className="flex items-center justify-between text-sm font-black uppercase tracking-widest text-white border-b border-blue-400/30 pb-3">
            <span className="flex items-center gap-2"><Car size={14} /> Auto</span>
            <ChevronDown size={16} className={`transition-transform ${mobileAutoOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileAutoOpen && (
            <div className="flex flex-col gap-1 pl-4 mb-2">
              {autoSubmenu.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}
                  className="text-xs font-black uppercase tracking-wide text-blue-100 py-2 border-b border-blue-400/20">
                  {item.name}
                </Link>
              ))}
            </div>
          )}


          {/* Seguros mobile */}
          <button onClick={() => setMobileSegurosOpen(!mobileSegurosOpen)}
            className="flex items-center justify-between text-sm font-black uppercase tracking-widest text-white border-b border-blue-400/30 pb-3">
            <span className="flex items-center gap-2"><Shield size={14} /> Seguros</span>
            <ChevronDown size={16} className={`transition-transform ${mobileSegurosOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileSegurosOpen && (
            <div className="flex flex-col gap-1 pl-4 mb-2">
              {segurosSubmenu.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}
                  className="text-xs font-black uppercase tracking-wide text-blue-100 py-2 border-b border-blue-400/20">
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <Link to="/consorcios" onClick={() => setIsOpen(false)} className="text-sm font-black uppercase tracking-widest text-white border-b border-blue-400/30 pb-3">Consórcios</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-sm font-black uppercase tracking-widest text-white border-b border-blue-400/30 pb-3">Blog</Link>

          <a href="https://wa.me/5511920144864"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg mt-2">
            <Phone size={16} /> Falar com Rodrigo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
