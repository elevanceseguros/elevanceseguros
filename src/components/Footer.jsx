import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';

const Footer = () => {
  const logo = "/logo.png";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3a52] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <img src={logo} alt="Elevance" className="h-12 brightness-0 invert opacity-90" />
          <p className="text-blue-100/60 text-sm leading-relaxed">Sua consultoria de seguros 100% digital. Proteção real onde você estiver.</p>
          <a href="https://instagram.com/elevanceseguros" target="_blank" className="inline-block p-3 bg-white/5 hover:bg-pink-600 rounded-xl transition-all"><Instagram size={20}/></a>
        </div>
        
        <div>
          <h4 className="font-black text-blue-400 uppercase text-xs tracking-widest mb-6">Navegação</h4>
          <ul className="space-y-4 text-sm font-bold text-blue-100/70">
            <li><Link to="/blog" className="hover:text-white">Blog & Notícias</Link></li>
            <li><Link to="/seguro-auto" className="hover:text-white">Seguro Auto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-blue-400 uppercase text-xs tracking-widest mb-6">Atendimento</h4>
          <div className="space-y-4 text-sm font-medium text-blue-100/70">
            <p className="flex items-center gap-2"><Phone size={16} className="text-blue-500"/> (11) 92014-4864</p>
            <p className="flex items-center gap-2"><Mail size={16} className="text-blue-500"/> contato@elevanceseguros.com</p>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 text-center">
          <ShieldCheck size={40} className="text-blue-400 mx-auto mb-4" />
          <p className="text-[10px] font-black uppercase bg-blue-600 px-4 py-1 rounded-full">Susep Ativa</p>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/10 text-center text-[10px] font-bold text-white/20 tracking-[0.3em]">
        © {currentYear} ELEVANCE SEGUROS • RODRIGO
      </div>
    </footer>
  );
};

export default Footer;
