import React from 'react';
import { 
  Instagram, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  ShieldCheck,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5511920144864";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá Rodrigo, vi seu site e gostaria de uma cotação!`;
  const instagramUrl = "https://www.instagram.com/elevanceseguros";

  const linksUteis = [
    { name: 'Seguro Auto', href: '/seguro-auto' },
    { name: 'Planos de Saúde', href: '/health-plans' },
    { name: 'Seguro Empresa', href: '/business-insurance' },
    { name: 'Consórcios', href: '/consorcios' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer className="bg-[#1a3a52] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Sobre a Empresa */}
          <div className="space-y-6">
            <img 
              src="/logos/elevance-logo.png" 
              alt="Elevance Seguros" 
              className="h-12 brightness-0 invert opacity-90" 
            />
            <p className="text-blue-100/70 text-sm leading-relaxed">
              Consultoria de seguros 100% digital. 
              Levamos a melhor proteção até você, onde quer que esteja, com a agilidade que o mundo moderno exige.
            </p>
            <div className="flex gap-4">
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/5 hover:bg-pink-600 rounded-xl transition-all shadow-sm"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-blue-400">Nossas Soluções</h4>
            <ul className="space-y-4">
              {linksUteis.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-blue-100/70 hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all text-sm font-bold"
                  >
                    <ArrowUpRight size={14} className="text-blue-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Atendimento Digital */}
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-blue-400">Atendimento</h4>
            <ul className="space-y-4 text-sm font-medium text-blue-100/70">
              <li className="flex items-center gap-3">
                <Globe className="text-blue-500 shrink-0" size={18} />
                <span>Atendimento em todo o Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  (11) 92014-4864
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={18} />
                <a href="mailto:contato@elevanceseguros.com" className="hover:text-white transition-colors">
                  contato@elevanceseguros.com
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Credibilidade */}
          <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 text-center flex flex-col justify-center">
            <ShieldCheck size={48} className="text-blue-400 mx-auto mb-4" />
            <h4 className="font-black text-sm mb-2">Segurança Garantida</h4>
            <p className="text-[10px] text-blue-100/50 leading-tight">
              Parceiro Oficial APVS Brasil e as maiores seguradoras do mercado.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
               <span className="text-[10px] font-black bg-blue-600 px-4 py-1.5 rounded-full uppercase tracking-tighter">Susep Autorizada</span>
            </div>
          </div>

        </div>

        {/* Linha Final */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/30">
          <p>© {currentYear} Elevance Seguros • Rodrigo e Equipe</p>
          <div className="flex gap-8">
            <a href="/privacidade" className="hover:text-white transition-colors">Privacidade</a>
            <a href="/termos" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
