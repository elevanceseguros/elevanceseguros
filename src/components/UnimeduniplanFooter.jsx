import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const UnimeduniplanFooter = () => {
  const logoUrl = "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/4e1b7301eec2646077fced9d9229c132.jpg";

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="w-40 bg-white p-2 rounded-lg inline-block">
              <img 
                src={logoUrl} 
                alt="Unimed Uniplan" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Unimed Uniplan - Excelência em saúde com abrangência nacional e atendimento humanizado para você e sua família.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#10b981]">Fale Conosco</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-[#10b981]" />
                <a href="tel:5511920144864" className="hover:text-white transition-colors">(11) 92014-4864</a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-[#10b981]" />
                <a href="mailto:contato@elevanceseguros.com" className="hover:text-white transition-colors">contato@elevanceseguros.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-[#10b981] mt-1" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#10b981]">Redes Sociais</h3>
            <div className="flex gap-4 mt-2">
              <a 
                href="https://www.instagram.com/elevanceseguros/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-3 rounded-lg hover:bg-[#10b981] transition-colors"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-6">
                <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors block mb-2">Voltar para Home</Link>
                <Link to="/privacidade" className="text-sm text-slate-400 hover:text-white transition-colors block">Política de Privacidade</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Elevance Seguros. Todos os direitos reservados. Representante Autorizado.</p>
        </div>
      </div>
    </footer>
  );
};

export default UnimeduniplanFooter;