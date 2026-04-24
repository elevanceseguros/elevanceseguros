import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, Globe, ShieldCheck, Heart, Car, ChevronRight } from 'lucide-react';

const Footer = () => {
  const logo = "/logo.png";
  const currentYear = new Date().getFullYear();

  const saudeLinks1 = [
    { name: 'Encontre seu Plano', path: '/encontre-seu-plano' },
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

  const outrosLinks = [
    { name: 'Seguro Empresa', path: '/seguro-empresa' },
    { name: 'Consórcios', path: '/consorcios' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <footer className="bg-[#0f1f2e] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

          {/* Coluna 1: Logo + sobre */}
          <div className="space-y-5">
            <div className="bg-white p-2 rounded-xl inline-block shadow-lg">
              <img src={logo} alt="Elevance Seguros" className="h-9 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Consultoria de seguros 100% digital. Especialistas em proteger o que é mais importante para você, em todo o Brasil.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <a href="tel:5511920144864" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                <Phone size={14} className="text-blue-400 shrink-0" /> (11) 92014-4864
              </a>
              <a href="mailto:contato@elevanceseguros.com" className="flex items-center gap-2 hover:text-white transition-colors font-medium">
                <Mail size={14} className="text-blue-400 shrink-0" /> contato@elevanceseguros.com
              </a>
              <div className="flex items-center gap-2 font-medium">
                <Globe size={14} className="text-blue-400 shrink-0" /> Atendimento em todo o Brasil
              </div>
            </div>
            <div className="flex gap-3 pt-1">
              <a href="https://instagram.com/elevanceseguros" target="_blank" rel="noreferrer"
                className="p-2.5 bg-white/5 hover:bg-pink-600 rounded-xl transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Planos de Saúde - 2 subcolunas */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="flex items-center gap-2 font-black text-white uppercase text-[10px] tracking-[0.2em] mb-5">
              <Heart size={13} className="text-blue-400" /> Planos de Saúde
            </h4>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2">
                {saudeLinks1.map((item, i) => (
                  <li key={item.path}>
                    <Link to={item.path}
                      className={`flex items-center gap-1 text-[11px] font-bold tracking-wide transition-colors hover:text-white ${i === 0 ? 'text-blue-400 hover:text-blue-300' : 'text-slate-400'}`}>
                      <ChevronRight size={10} className="shrink-0" /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {saudeLinks2.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}
                      className="flex items-center gap-1 text-[11px] font-bold text-slate-400 tracking-wide transition-colors hover:text-white">
                      <ChevronRight size={10} className="shrink-0" /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna 3: Auto */}
          <div className="space-y-8">
            <div>
              <h4 className="flex items-center gap-2 font-black text-white uppercase text-[10px] tracking-[0.2em] mb-5">
                <Car size={13} className="text-blue-400" /> Auto
              </h4>
              <ul className="space-y-2.5">
                {autoLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}
                      className="flex items-center gap-1 text-[11px] font-bold text-slate-400 tracking-wide transition-colors hover:text-white">
                      <ChevronRight size={11} className="shrink-0" /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white uppercase text-[10px] tracking-[0.2em] mb-5">Outros</h4>
              <ul className="space-y-2.5">
                {outrosLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}
                      className="flex items-center gap-1 text-[11px] font-bold text-slate-400 tracking-wide transition-colors hover:text-white">
                      <ChevronRight size={11} className="shrink-0" /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna 4: Credenciais */}
          <div className="space-y-5">
            <h4 className="font-black text-white uppercase text-[10px] tracking-[0.2em] mb-5">Credenciais</h4>
            <div className="bg-white/5 p-6 rounded-[24px] border border-white/10 text-center space-y-3">
              <ShieldCheck size={28} className="text-blue-400 mx-auto" />
              <span className="text-[10px] font-black uppercase bg-blue-600 px-4 py-1.5 rounded-full inline-block tracking-widest">Susep Ativa</span>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Parceiro Oficial APVS Brasil</p>
            </div>
            <div className="bg-white/5 p-5 rounded-[24px] border border-white/10">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Atendimento</p>
              <p className="text-sm font-bold text-white">São Paulo, SP</p>
              <p className="text-xs text-slate-400 font-medium mt-1">🇧🇷 Todo o Brasil</p>
            </div>
          </div>

        </div>

        {/* RODAPÉ FINAL */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">
            © {currentYear} Elevance Seguros · Todos os direitos reservados
          </p>
          <p className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">
            Rodrigo Farias · Corretor de Seguros
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
