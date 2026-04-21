import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isSagradaFamiliaPage = location.pathname.startsWith('/sagrada-familia');

  if (isSagradaFamiliaPage) {
    return (
      <footer className="bg-white border-t border-gray-100 text-gray-700 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12 max-w-4xl mx-auto">
            <div>
              <div className="mb-6 inline-block w-32 overflow-hidden">
                <img
                  src="https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/c7cb817ad8d8c9af1226b5466e1b2264.png"
                  alt="Sagrada Família"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                Cuidando da saúde da sua família com dedicação, respeito e excelência. A proteção que você confia.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/elevanceseguros" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-600 hover:bg-blue-100 p-2 rounded-lg transition-all" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <span className="font-bold text-lg mb-6 block text-gray-900 border-b-2 border-blue-500 w-fit pb-1">Contato</span>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Telefone / WhatsApp</p>
                    <a href="tel:5511920144864" className="hover:text-blue-600 transition-colors text-sm block">
                      (11) 92014-4864
                    </a>
                    <a href="https://wa.me/5511920144864" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-xs mt-1 inline-flex items-center gap-1 transition-colors font-medium">
                      Chamar no WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">E-mail</p>
                    <a href="mailto:contato@elevanceseguros.com" className="hover:text-blue-600 transition-colors text-sm block break-all">
                      contato@elevanceseguros.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Atendimento</p>
                    <p className="text-sm text-gray-500">São Paulo, SP - Brasil</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Sagrada Família. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <Link to="/sagrada-familia" className="text-gray-400 hover:text-gray-600 transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/sagrada-familia" className="text-gray-400 hover:text-gray-600 transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#1a3a52] text-white pt-16 pb-8 border-t border-[#2a4a62]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6 inline-block w-40 overflow-hidden">
              <img
                src="https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/e18073f9377f3b37fca5a56ae103bbd5.png"
                alt="Elevance Seguros"
                className="w-full h-auto object-contain scale-110 origin-left"
              />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              Proteção e tranquilidade para o que mais importa. Soluções personalizadas em seguros com excelência e confiança.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/elevanceseguros" target="_blank" rel="noopener noreferrer" className="bg-[#2a4a62] hover:bg-white hover:text-[#1a3a52] p-2 rounded-lg transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <span className="font-bold text-lg mb-6 block text-white border-b-2 border-blue-500 w-fit pb-1">Seguros e Planos</span>
            <ul className="space-y-3">
              {[
                { name: 'Seguro Auto', path: '/seguro-auto' },
                { name: 'Seguro Saúde', path: '/planos-de-saude' },
                { name: 'Sagrada Família', path: '/sagrada-familia' },
                { name: 'Seguro Empresa', path: '/business-insurance' },
                { name: 'Consórcios', path: '/consorcios' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-6 block text-white border-b-2 border-blue-500 w-fit pb-1">Serviços</span>
            <ul className="space-y-3">
              <li>
                <Link to="/seguro-auto" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                  Cotação Auto
                </Link>
              </li>
              <li>
                <Link to="/planos-de-saude" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                  Cotação Saúde
                </Link>
              </li>
              <li>
                <Link to="/online-quote" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                  Cotação Online Geral
                </Link>
              </li>
              <li>
                <Link to="/customer-support#contact-form" className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                  Suporte ao Cliente
                </Link>
              </li>
              {/* ── BLOG ── */}
              <li>
                <Link to="/blog" className="text-blue-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm font-semibold">
                  📝 Dicas & Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-6 block text-white border-b-2 border-blue-500 w-fit pb-1">Contato</span>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 group">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1 group-hover:text-white transition-colors" />
                <div>
                  <p className="font-semibold text-white text-sm">Telefone / WhatsApp</p>
                  <a href="tel:5511920144864" className="hover:text-white transition-colors text-sm block">
                    (11) 92014-4864
                  </a>
                  <a href="https://wa.me/5511920144864" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-xs text-green-300 mt-1 inline-flex items-center gap-1 transition-colors">
                    Chamar no WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-300 group">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1 group-hover:text-white transition-colors" />
                <div>
                  <p className="font-semibold text-white text-sm">E-mail</p>
                  <a href="mailto:contato@elevanceseguros.com" className="hover:text-white transition-colors text-sm block break-all">
                    contato@elevanceseguros.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-300 group">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1 group-hover:text-white transition-colors" />
                <div>
                  <p className="font-semibold text-white text-sm">Atendimento</p>
                  <p className="text-sm">São Paulo, SP - Brasil</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a4a62] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Elevance Seguros. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;