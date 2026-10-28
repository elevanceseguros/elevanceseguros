import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, Globe, ShieldCheck, Heart, Car, ChevronRight } from 'lucide-react';

const Footer = () => {
  const logo = "/logos/elevance-dark-horizontal-gold.png";
  const currentYear = new Date().getFullYear();

  const saudeLinks = [
    { name: 'Encontre seu Plano', path: '/encontre-seu-plano', destaque: true },
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

  const saudeLinksExtras = [
    { name: 'Trasmontano', path: '/trasmontano' },
    { name: 'São Cristóvão', path: '/sao-cristovao' },
    { name: 'São Miguel', path: '/sao-miguel' },
    { name: 'Plena Saúde', path: '/plena-saude' },
    { name: 'Biovida', path: '/biovida' },
    { name: 'UniHosp', path: '/unihosp' },
    { name: 'Garantia de Saúde', path: '/garantia-saude' },
  ];

  const autoLinks = [
    { name: 'Seguro Auto', path: '/seguro-auto' },
    { name: 'Proteção Veicular', path: '/protecao-veicular' },
    { name: 'Loovi Seguros', path: '/loovi' },
  ];

  const segurosLinks = [
    { name: 'Seguro de Vida', path: '/seguro-vida' },
    { name: 'Seguro Residencial', path: '/seguro-residencial' },
    { name: 'Seguro Empresarial', path: '/seguro-empresa' },
    { name: 'Resp. Civil', path: '/responsabilidade-civil' },
    { name: 'Seguro Garantia', path: '/seguro-garantia' },
  ];

  const linkStyle = {color: 'rgba(255,255,255,0.45)'};
  const linkHoverClass = "flex items-center gap-1 text-[11px] font-medium tracking-wide transition-colors hover:text-white";

  return (
    <footer className="text-white pt-16 pb-8"
      style={{background: '#071B34', borderTop: '1px solid rgba(200,169,107,0.2)'}}>

      {/* Linha dourada topo */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px w-32 mb-12 mx-auto md:mx-0" style={{background: 'linear-gradient(to right, #C8A96B, transparent)'}}></div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12"
          style={{borderBottom: '1px solid rgba(255,255,255,0.06)'}}>

          {/* Col 1 — Logo + info */}
          <div className="lg:col-span-3 space-y-5">
            <img src={logo} alt="Elevance Seguros" className="h-10 w-auto object-contain" loading="lazy" width="120" height="36" />
            <p className="text-xs font-light leading-relaxed" style={{color: 'rgba(255,255,255,0.45)'}}>
              Consultoria de seguros 100% digital. Especialistas em proteger o que é mais importante, em todo o Brasil.
            </p>
            <div className="space-y-2.5 text-xs">
              <a href="tel:5511920144864" className="flex items-center gap-2 hover:text-white transition-colors" style={{color: 'rgba(255,255,255,0.45)'}}>
                <Phone size={11} style={{color: '#C8A96B'}} /> (11) 92014-4864
              </a>
              <a href="mailto:contato@elevanceseguros.com" className="flex items-center gap-2 hover:text-white transition-colors" style={{color: 'rgba(255,255,255,0.45)'}}>
                <Mail size={11} style={{color: '#C8A96B'}} /> contato@elevanceseguros.com
              </a>
              <div className="flex items-center gap-2" style={{color: 'rgba(255,255,255,0.45)'}}>
                <Globe size={11} style={{color: '#C8A96B'}} /> Atendimento em todo o Brasil
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              {[
                { href: "https://instagram.com/elevanceseguros", title: "Instagram", hover: "#E1306C", icon: <Instagram size={15}/> },
                { href: "https://tiktok.com/@elevance.seguros", title: "TikTok", hover: "#010101", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg> },
                { href: "https://kwai.com/@elevanceseguros", title: "Kwai", hover: "#FF6600", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg> },
                { href: "https://youtube.com/@elevanceseguros", title: "YouTube", hover: "#FF0000", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg> },
              ].map((s) => (
                <a key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title}
                  className="p-2 rounded-xl transition-all hover:scale-110"
                  style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)'}}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Saúde */}
          <div className="lg:col-span-4">
            <h4 className="flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-widest mb-5"
              style={{color: '#C8A96B'}}>
              <Heart size={10}/> Planos de Saúde
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-4">
              {saudeLinks.map((item) => (
                <Link key={item.path} to={item.path} className={linkHoverClass}
                  style={item.destaque ? {color: '#C8A96B'} : linkStyle}>
                  <ChevronRight size={9} className="shrink-0" /> {item.name}
                </Link>
              ))}
            </div>
            {/* Regionais — separadas visualmente */}
            <div className="pt-3 border-t" style={{borderColor: 'rgba(200,169,107,0.1)'}}>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-2.5" style={{color: 'rgba(200,169,107,0.5)'}}>Regionais SP</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {saudeLinksExtras.map((item) => (
                  <Link key={item.path} to={item.path} className={linkHoverClass} style={linkStyle}>
                    <ChevronRight size={9} className="shrink-0" /> {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-5 grid grid-cols-2 gap-4" style={{borderTop: '1px solid rgba(255,255,255,0.06)'}}>
              <div>
                <h4 className="font-bold uppercase text-[10px] tracking-widest mb-3" style={{color: '#C8A96B'}}>Consórcios</h4>
                <Link to="/consorcios" className={linkHoverClass} style={linkStyle}>
                  <ChevronRight size={9} className="shrink-0" /> Ver Consórcios
                </Link>
              </div>
              <div>
                <h4 className="font-bold uppercase text-[10px] tracking-widest mb-3" style={{color: '#C8A96B'}}>Blog</h4>
                <Link to="/blog" className={linkHoverClass} style={linkStyle}>
                  <ChevronRight size={9} className="shrink-0" /> Ver Artigos
                </Link>
              </div>
            </div>
          </div>

          {/* Col 3 — Auto + Seguros */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-widest mb-5" style={{color: '#C8A96B'}}>
                <Car size={10}/> Auto
              </h4>
              <div className="space-y-2.5">
                {autoLinks.map((item) => (
                  <Link key={item.path} to={item.path} className={linkHoverClass} style={linkStyle}>
                    <ChevronRight size={9} className="shrink-0" /> {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase text-[10px] tracking-widest mb-5" style={{color: '#C8A96B'}}>Seguros</h4>
              <div className="space-y-2.5">
                {segurosLinks.map((item) => (
                  <Link key={item.path} to={item.path} className={linkHoverClass} style={linkStyle}>
                    <ChevronRight size={9} className="shrink-0" /> {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4 — Credenciais */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold uppercase text-[10px] tracking-widest mb-5" style={{color: '#C8A96B'}}>Credenciais</h4>
            <div className="rounded-2xl p-4 text-center space-y-2"
              style={{background: 'rgba(200,169,107,0.06)', border: '1px solid rgba(200,169,107,0.15)'}}>
              <ShieldCheck size={22} style={{color: '#C8A96B'}} className="mx-auto" />
              <span className="text-[9px] font-bold uppercase px-3 py-1 rounded-full inline-block tracking-widest"
                style={{background: 'rgba(200,169,107,0.15)', color: '#C8A96B'}}>Susep Ativa</span>
              <p className="text-[8px] uppercase tracking-widest font-medium leading-tight" style={{color: 'rgba(255,255,255,0.3)'}}>Parceiro Oficial APVS Brasil</p>
            </div>
            <div className="rounded-2xl p-4" style={{background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)'}}>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{color: 'rgba(255,255,255,0.35)'}}>Atendimento</p>
              <p className="text-xs font-semibold text-white">São Paulo, SP</p>
              <p className="text-[11px] mt-0.5" style={{color: 'rgba(255,255,255,0.4)'}}>🇧🇷 Todo o Brasil</p>
            </div>
          </div>

        </div>

        {/* Rodapé final */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[10px] font-medium uppercase tracking-widest" style={{color: 'rgba(255,255,255,0.25)'}}>
            © {currentYear} Elevance Seguros · Todos os direitos reservados
          </p>
          <p className="text-[10px] font-medium uppercase tracking-widest" style={{color: 'rgba(255,255,255,0.25)'}}>
            Rodrigo Farias · Fundador & CEO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
