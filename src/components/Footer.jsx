import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, Globe, ShieldCheck, Heart, Car, ChevronRight } from 'lucide-react';

const Footer = () => {
  const logo = "/logo-white.png";
  const currentYear = new Date().getFullYear();

  const saudeLinks1 = [
    { name: 'Encontre seu Plano', path: '/encontre-seu-plano', destaque: true },
    { name: 'Amil', path: '/amil' },
    { name: 'Bradesco Saúde', path: '/bradescosaude' },
    { name: 'SulAmérica', path: '/sulamerica' },
    { name: 'Hapvida', path: '/hapvida' },
  ];

  const saudeLinks2 = [
    { name: 'Unimed', path: '/unimed' },
    { name: 'Porto Saúde', path: '/porto' },
    { name: 'Alice', path: '/alice' },
    { name: 'MedSênior', path: '/medsenior' },
    { name: 'Odontológico', path: '/odontologico' },
  ];

  const autoLinks = [
    { name: 'Seguro Auto', path: '/seguro-auto' },
    { name: 'Proteção Veicular', path: '/protecao-veicular' },
  ];

  const segurosLinks = [
    { name: 'Seguro de Vida', path: '/seguro-vida' },
    { name: 'Seguro Residencial', path: '/seguro-residencial' },
    { name: 'Seguro Empresarial', path: '/seguro-empresa' },
    { name: 'Responsab. Civil', path: '/responsabilidade-civil' },
    { name: 'Seguro Garantia', path: '/seguro-garantia' },
  ];

  return (
    <footer className="bg-[#114d8e] text-white pt-14 pb-8 border-t-4 border-white/20">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/20">

          {/* Coluna 1: Logo + info — 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <img src={logo} alt="Elevance Seguros" className="h-8 w-auto object-contain" loading="lazy" decoding="async" width="120" height="36" />
            <p className="text-blue-100/70 text-xs leading-relaxed font-medium">
              Consultoria de seguros 100% digital. Especialistas em proteger o que é mais importante, em todo o Brasil.
            </p>
            <div className="space-y-2 text-xs text-blue-100/70">
              <a href="tel:5511920144864" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                <Phone size={12} className="text-blue-400 shrink-0" /> (11) 92014-4864
              </a>
              <a href="mailto:contato@elevanceseguros.com" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                <Mail size={12} className="text-blue-400 shrink-0" /> contato@elevanceseguros.com
              </a>
              <div className="flex items-center gap-2 font-medium">
                <Globe size={12} className="text-blue-400 shrink-0" /> Atendimento em todo o Brasil
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <a href="https://instagram.com/elevanceseguros" target="_blank" rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-pink-600 rounded-xl transition-all" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://tiktok.com/@elevance.seguros" target="_blank" rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-slate-900 rounded-xl transition-all" title="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>
              </a>
              <a href="https://kwai.com/@elevanceseguros" target="_blank" rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-orange-500 rounded-xl transition-all" title="Kwai">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
              </a>
              <a href="https://youtube.com/@elevanceseguros" target="_blank" rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-red-600 rounded-xl transition-all" title="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Saúde + Consórcios + Blog — 5 cols */}
          <div className="lg:col-span-5">
            <h4 className="flex items-center gap-1.5 font-black text-white uppercase text-[10px] tracking-[0.2em] mb-4">
              <Heart size={11} className="text-blue-400" /> Planos de Saúde
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {[...saudeLinks1, ...saudeLinks2].map((item) => (
                <Link key={item.path} to={item.path}
                  className={`flex items-center gap-1 text-[11px] font-bold tracking-wide transition-colors hover:text-white ${item.destaque ? 'text-blue-400 hover:text-blue-300' : 'text-blue-100/70'}`}>
                  <ChevronRight size={10} className="shrink-0" /> {item.name}
                </Link>
              ))}
              <div className="col-span-2 border-t border-white/10 mt-3 pt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                <div>
                  <h4 className="flex items-center gap-1.5 font-black text-white uppercase text-[10px] tracking-[0.2em] mb-3">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    Consórcios
                  </h4>
                  <Link to="/consorcios" className="flex items-center gap-1 text-[11px] font-bold text-blue-100/70 tracking-wide transition-colors hover:text-white">
                    <ChevronRight size={10} className="shrink-0" /> Ver Consórcios
                  </Link>
                </div>
                <div>
                  <h4 className="flex items-center gap-1.5 font-black text-white uppercase text-[10px] tracking-[0.2em] mb-3">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-400"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    Blog
                  </h4>
                  <Link to="/blog" className="flex items-center gap-1 text-[11px] font-bold text-blue-100/70 tracking-wide transition-colors hover:text-white">
                    <ChevronRight size={10} className="shrink-0" /> Ver Artigos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 3: Auto + Seguros — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="flex items-center gap-1.5 font-black text-white uppercase text-[10px] tracking-[0.2em] mb-4">
                <Car size={11} className="text-blue-400" /> Auto
              </h4>
              <ul className="space-y-2">
                {autoLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="flex items-center gap-1 text-[11px] font-bold text-blue-100/70 tracking-wide transition-colors hover:text-white">
                      <ChevronRight size={10} className="shrink-0" /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white uppercase text-[10px] tracking-[0.2em] mb-4">Seguros</h4>
              <ul className="space-y-2">
                {segurosLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="flex items-center gap-1 text-[11px] font-bold text-blue-100/70 tracking-wide transition-colors hover:text-white">
                      <ChevronRight size={10} className="shrink-0" /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna 4: Credenciais — 2 cols */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-black text-white uppercase text-[10px] tracking-[0.2em] mb-4">Credenciais</h4>
            <div className="bg-white/10 p-4 rounded-[20px] border border-white/20 text-center space-y-2">
              <ShieldCheck size={24} className="text-blue-400 mx-auto" />
              <span className="text-[9px] font-black uppercase bg-blue-600 px-3 py-1 rounded-full inline-block tracking-widest">Susep Ativa</span>
              <p className="text-[8px] text-blue-100/50 uppercase tracking-widest font-bold leading-tight">Parceiro Oficial APVS Brasil</p>
            </div>
            <div className="bg-white/10 p-4 rounded-[20px] border border-white/20">
              <p className="text-[9px] font-black uppercase text-blue-100/70 tracking-widest mb-1">Atendimento</p>
              <p className="text-xs font-bold text-white">São Paulo, SP</p>
              <p className="text-[11px] text-blue-100/70 font-medium mt-0.5">🇧🇷 Todo o Brasil</p>
            </div>
          </div>

        </div>

        {/* RODAPÉ FINAL */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
            © {currentYear} Elevance Seguros · Todos os direitos reservados
          </p>
          <p className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
            Rodrigo Farias · Corretor de Seguros
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
