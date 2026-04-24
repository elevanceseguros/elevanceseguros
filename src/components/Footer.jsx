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
    { name: 'Seguro Empresarial', path: '/seguro-empresa' },
    { name: 'Responsab. Civil', path: '/responsabilidade-civil' },
  ];

  const outrosLinks = [
    { name: 'Consórcios', path: '/consorcios' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <footer className="bg-[#114d8e] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID PRINCIPAL — 12 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/20">

          {/* Coluna 1: Logo + info — 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <img src={logo} alt="Elevance Seguros" className="h-8 w-auto object-contain" />
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
                className="p-2 bg-white/10 hover:bg-pink-600 rounded-xl transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Saúde em 2 subcolunas — 5 cols */}
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
            </div>
          </div>

          {/* Coluna 3: Auto + Outros — 2 cols */}
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
            <div>
              <h4 className="font-black text-white uppercase text-[10px] tracking-[0.2em] mb-4">Outros</h4>
              <ul className="space-y-2">
                {outrosLinks.map((item) => (
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
