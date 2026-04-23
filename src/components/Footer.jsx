import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, ShieldCheck, Globe } from 'lucide-react';

const Footer = () => {
  const logo = "/logo.png";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3a52] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Coluna 1: Logo e Sobre */}
        <div className="space-y-6">
          <div className="bg-white p-2 rounded-xl inline-block shadow-lg">
            <img src={logo} alt="Elevance Seguros" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-blue-100/60 text-sm leading-relaxed">
            Sua consultoria de seguros 100% digital. Especialistas em proteger o que é mais importante para você com agilidade e transparência.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/elevanceseguros" target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-pink-600 rounded-xl transition-all">
              <Instagram size={20}/>
            </a>
          </div>
        </div>
        
        {/* Coluna 2: Nossos Serviços (Restaurado) */}
        <div>
          <h4 className="font-black text-blue-400 uppercase text-xs tracking-[0.2em] mb-6">Nossas Soluções</h4>
          <ul className="space-y-4 text-sm font-bold text-blue-100/70">
            <li><Link to="/seguros-auto" className="hover:text-white transition-colors">Seguro Automotivo</Link></li>
            <li><Link to="/planos-saude" className="hover:text-white transition-colors">Planos de Saúde</Link></li>
            <li><Link to="/business-insurance" className="hover:text-white transition-colors">Seguro Empresarial</Link></li>
            <li><Link to="/consorcios" className="hover:text-white transition-colors">Consórcios</Link></li>
            <li><Link to="/health-plans" className="hover:text-white transition-colors">Planos Odontológicos</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Links e Blog (Restaurado) */}
        <div>
          <h4 className="font-black text-blue-400 uppercase text-xs tracking-[0.2em] mb-6">Institucional</h4>
          <ul className="space-y-4 text-sm font-bold text-blue-100/70">
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Dicas</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">Fale Conosco</Link></li>
            <li><Link to="/online-quote" className="hover:text-white transition-colors">Cotação Online</Link></li>
            <li><Link to="/customer-support" className="hover:text-white transition-colors">Suporte ao Cliente</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Contato e Credibilidade */}
        <div className="space-y-6">
          <h4 className="font-black text-blue-400 uppercase text-xs tracking-[0.2em] mb-6">Contato</h4>
          <div className="space-y-4 text-sm font-medium text-blue-100/70">
            <p className="flex items-start gap-3 italic">
              <MapPin size={18} className="text-blue-500 shrink-0"/> 
              Atendimento Digital: Penha / São Miguel - São Paulo, SP
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0"/> 
              (11) 92014-4864
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0"/> 
              contato@elevanceseguros.com
            </p>
          </div>

          <div className="pt-4">
            <div className="bg-white/5 p-6 rounded-[30px] border border-white/10 text-center">
              <ShieldCheck size={32} className="text-blue-400 mx-auto mb-3" />
              <p className="text-[10px] font-black uppercase bg-blue-600 px-4 py-1 rounded-full inline-block">Susep Ativa</p>
              <p className="text-[9px] text-blue-100/30 mt-3 uppercase tracking-widest font-bold">Parceiro Oficial APVS Brasil</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé Final */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">
          © {currentYear} Elevance Seguros • Todos os direitos reservados
        </p>
        <p className="text-[10px] font-bold text-white/20 tracking-[0.2em] uppercase">
          Desenvolvido por Rodrigo e Equipe
        </p>
      </div>
    </footer>
  );
};

export default Footer;
