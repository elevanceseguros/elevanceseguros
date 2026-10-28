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
  { name: 'Trasmontano', path: '/trasmontano' },
  { name: 'São Cristóvão', path: '/sao-cristovao' },
  { name: 'São Miguel', path: '/sao-miguel' },
  { name: 'Plena Saúde', path: '/plena-saude' },
  { name: 'Biovida', path: '/biovida' },
  { name: 'UniHosp', path: '/unihosp' },
  { name: 'Garantia de Saúde', path: '/garantia-saude' },
];

const autoSubmenu = [
  { name: 'Seguro Auto', path: '/seguro-auto' },
  { name: 'Proteção Veicular', path: '/protecao-veicular' },
  { name: 'Loovi Seguros', path: '/loovi' },
];

const segurosSubmenu = [
  { name: 'Seguro de Vida', path: '/seguro-vida' },
  { name: 'Seguro Residencial', path: '/seguro-residencial' },
  { name: 'Seguro Empresarial', path: '/seguro-empresa' },
  { name: 'Responsabilidade Civil', path: '/responsabilidade-civil' },
  { name: 'Seguro Garantia', path: '/seguro-garantia' },
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
  const logo = "/logos/elevance-dark-horizontal-gold.png";

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

  const navBg = scrolled
    ? 'rgba(7,27,52,0.97)'
    : 'rgba(7,27,52,1)';

  return (
    <header className="fixed top-0 inset-x-0 z-[100] py-3 transition-all duration-300"
      style={{background: navBg, borderBottom: '1px solid rgba(200,169,107,0.12)', backdropFilter: 'blur(12px)'}}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={() => setIsOpen(false)} aria-label="Elevance Seguros">
          <img src={logo} alt="Elevance Seguros" className="h-10 md:h-12 w-auto object-contain" loading="eager" decoding="async" fetchpriority="high" width="120" height="48" />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-7">

          {/* Saúde */}
          <div ref={saudeRef} className="relative"
            onMouseEnter={() => { setSaudeOpen(true); setAutoOpen(false); setSegurosOpen(false); }}
            onMouseLeave={() => setSaudeOpen(false)}>
            <button className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors">
              <Heart size={12} style={{color: '#C8A96B'}} /> Saúde <ChevronDown size={11} className={`transition-transform text-white/40 ${saudeOpen ? 'rotate-180' : ''}`} />
            </button>
            {saudeOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 z-50" style={{width: '420px'}}>
                <div className="rounded-2xl py-3 overflow-hidden" style={{background: '#0A1F3A', border: '1px solid rgba(200,169,107,0.2)', boxShadow: '0 20px 60px rgba(7,27,52,0.6)'}}>
                  {/* Linha de destaque — 1 coluna */}
                  <Link to={saudeSubmenu[0].path} onClick={() => setSaudeOpen(false)}
                    className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors hover:bg-white/5 border-b mx-3 mb-2"
                    style={{color: '#C8A96B', borderColor: 'rgba(200,169,107,0.2)'}}>
                    ⭐ {saudeSubmenu[0].name}
                  </Link>
                  {/* Resto em 2 colunas */}
                  <div className="grid grid-cols-2 px-2">
                    {saudeSubmenu.slice(1).map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setSaudeOpen(false)}
                        className="block px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-white/5 rounded-lg"
                        style={{color: 'rgba(255,255,255,0.7)'}}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Auto */}
          <div ref={autoRef} className="relative"
            onMouseEnter={() => { setAutoOpen(true); setSaudeOpen(false); setSegurosOpen(false); }}
            onMouseLeave={() => setAutoOpen(false)}>
            <button className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors">
              <Car size={12} style={{color: '#C8A96B'}} /> Auto <ChevronDown size={11} className={`transition-transform text-white/40 ${autoOpen ? 'rotate-180' : ''}`} />
            </button>
            {autoOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-48 z-50">
                <div className="rounded-2xl py-2 overflow-hidden" style={{background: '#0A1F3A', border: '1px solid rgba(200,169,107,0.2)', boxShadow: '0 20px 60px rgba(7,27,52,0.6)'}}>
                  {autoSubmenu.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setAutoOpen(false)}
                      className="block px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-white/5"
                      style={{color: 'rgba(255,255,255,0.7)'}}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Seguros */}
          <div ref={segurosRef} className="relative"
            onMouseEnter={() => { setSegurosOpen(true); setSaudeOpen(false); setAutoOpen(false); }}
            onMouseLeave={() => setSegurosOpen(false)}>
            <button className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors">
              <Shield size={12} style={{color: '#C8A96B'}} /> Seguros <ChevronDown size={11} className={`transition-transform text-white/40 ${segurosOpen ? 'rotate-180' : ''}`} />
            </button>
            {segurosOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-52 z-50">
                <div className="rounded-2xl py-2 overflow-hidden" style={{background: '#0A1F3A', border: '1px solid rgba(200,169,107,0.2)', boxShadow: '0 20px 60px rgba(7,27,52,0.6)'}}>
                  {segurosSubmenu.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setSegurosOpen(false)}
                      className="block px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-white/5"
                      style={{color: 'rgba(255,255,255,0.7)'}}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/consorcios" className="text-[11px] font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Consórcios</Link>
          <Link to="/blog" className="text-[11px] font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Blog</Link>

          <a href="https://wa.me/5511920144864" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 hover:scale-105"
            style={{background: 'linear-gradient(135deg, #16a34a, #15803d)', boxShadow: '0 4px 15px rgba(22,163,74,0.3)'}}>
            <Phone size={13} /> Falar com um Especialista
          </a>
        </nav>

        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[calc(100dvh-64px)] overflow-y-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}
        style={{background: '#071B34', borderTop: '1px solid rgba(200,169,107,0.15)', boxShadow: '0 20px 40px rgba(7,27,52,0.5)'}}>
        <div className="flex flex-col p-6 gap-1">

          {/* Saúde */}
          <button onClick={() => setMobileSaudeOpen(!mobileSaudeOpen)}
            className="flex items-center justify-between text-sm font-semibold uppercase tracking-widest text-white/80 py-3 border-b"
            style={{borderColor: 'rgba(200,169,107,0.12)'}}>
            <span className="flex items-center gap-2"><Heart size={13} style={{color:'#C8A96B'}}/> Saúde</span>
            <ChevronDown size={14} className={`transition-transform text-white/30 ${mobileSaudeOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileSaudeOpen && (
            <div className="flex flex-col pl-5 mb-1">
              {saudeSubmenu.map((item, i) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}
                  className="text-xs font-medium uppercase tracking-wide py-2.5 border-b"
                  style={{color: i === 0 ? '#C8A96B' : 'rgba(255,255,255,0.55)', borderColor: 'rgba(255,255,255,0.06)'}}>
                  {i === 0 ? '⭐ ' + item.name : item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Auto */}
          <button onClick={() => setMobileAutoOpen(!mobileAutoOpen)}
            className="flex items-center justify-between text-sm font-semibold uppercase tracking-widest text-white/80 py-3 border-b"
            style={{borderColor: 'rgba(200,169,107,0.12)'}}>
            <span className="flex items-center gap-2"><Car size={13} style={{color:'#C8A96B'}}/> Auto</span>
            <ChevronDown size={14} className={`transition-transform text-white/30 ${mobileAutoOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileAutoOpen && (
            <div className="flex flex-col pl-5 mb-1">
              {autoSubmenu.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}
                  className="text-xs font-medium uppercase tracking-wide py-2.5 border-b"
                  style={{color: 'rgba(255,255,255,0.55)', borderColor: 'rgba(255,255,255,0.06)'}}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* Seguros */}
          <button onClick={() => setMobileSegurosOpen(!mobileSegurosOpen)}
            className="flex items-center justify-between text-sm font-semibold uppercase tracking-widest text-white/80 py-3 border-b"
            style={{borderColor: 'rgba(200,169,107,0.12)'}}>
            <span className="flex items-center gap-2"><Shield size={13} style={{color:'#C8A96B'}}/> Seguros</span>
            <ChevronDown size={14} className={`transition-transform text-white/30 ${mobileSegurosOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileSegurosOpen && (
            <div className="flex flex-col pl-5 mb-1">
              {segurosSubmenu.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}
                  className="text-xs font-medium uppercase tracking-wide py-2.5 border-b"
                  style={{color: 'rgba(255,255,255,0.55)', borderColor: 'rgba(255,255,255,0.06)'}}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <Link to="/consorcios" onClick={() => setIsOpen(false)}
            className="text-sm font-semibold uppercase tracking-widest text-white/80 py-3 border-b"
            style={{borderColor: 'rgba(200,169,107,0.12)'}}>Consórcios</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}
            className="text-sm font-semibold uppercase tracking-widest text-white/80 py-3 border-b"
            style={{borderColor: 'rgba(200,169,107,0.12)'}}>Blog</Link>

          <a href="https://wa.me/5511920144864"
            className="flex items-center justify-center gap-2 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest mt-3"
            style={{background: 'linear-gradient(135deg, #16a34a, #15803d)', boxShadow: '0 4px 15px rgba(22,163,74,0.3)'}}>
            <Phone size={15} /> Falar com um Especialista
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
