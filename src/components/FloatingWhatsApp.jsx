import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const MEU_NUMERO = "5511920144864";

// Mapa de rota -> produto, para a mensagem do WhatsApp já vir
// contextualizada com o que a pessoa estava vendo no site.
const PRODUTO_POR_ROTA = {
  '/': 'uma consultoria',
  '/encontre-seu-plano': 'um Plano de Saúde',
  '/odontologico': 'um Plano Odontológico',
  '/seguro-auto': 'um Seguro Auto',
  '/seguro-vida': 'um Seguro de Vida',
  '/seguro-residencial': 'um Seguro Residencial',
  '/seguro-empresa': 'um Seguro Empresarial',
  '/responsabilidade-civil': 'um Seguro de Responsabilidade Civil',
  '/seguro-garantia': 'um Seguro Garantia',
  '/protecao-veicular': 'a Proteção Veicular APVS',
  '/consorcios': 'um Consórcio',
  '/hapvida': 'um plano Hapvida',
  '/hapvida-campinas': 'um plano Hapvida em Campinas',
  '/hapvida-ribeirao-preto': 'um plano Hapvida em Ribeirão Preto',
  '/hapvida-sao-bernardo-do-campo': 'um plano Hapvida em São Bernardo',
  '/hapvida-sorocaba': 'um plano Hapvida em Sorocaba',
  '/bradescosaude': 'um plano Bradesco Saúde',
  '/bradescosaude-campinas': 'um plano Bradesco Saúde em Campinas',
  '/bradescosaude-ribeirao-preto': 'um plano Bradesco Saúde em Ribeirão Preto',
  '/bradescosaude-sao-bernardo-do-campo': 'um plano Bradesco Saúde em São Bernardo',
  '/bradescosaude-sorocaba': 'um plano Bradesco Saúde em Sorocaba',
  '/amil': 'um plano Amil',
  '/amil-campinas': 'um plano Amil em Campinas',
  '/amil-ribeirao-preto': 'um plano Amil em Ribeirão Preto',
  '/amil-sao-bernardo-do-campo': 'um plano Amil em São Bernardo',
  '/amil-sorocaba': 'um plano Amil em Sorocaba',
  '/medsenior': 'um plano MedSênior',
  '/medsenior-campinas': 'um plano MedSênior em Campinas',
  '/medsenior-sao-bernardo-do-campo': 'um plano MedSênior em São Bernardo',
  '/sulamerica': 'um plano SulAmérica',
  '/unimed': 'um plano Unimed',
  '/porto': 'um plano Porto Saúde',
  '/alice': 'um plano Alice',
  '/plena-saude': 'um plano Plena Saúde',
  '/biovida': 'um plano Biovida',
  '/unihosp': 'um plano Unihosp',
  '/garantia-saude': 'um plano Garantia de Saúde',
  '/trasmontano': 'um plano Trasmontano',
  '/sao-cristovao': 'um plano São Cristóvão',
  '/sao-miguel': 'um plano São Miguel',
  '/loovi': 'o Seguro Auto Loovi',
};

function getMensagemContextual(pathname) {
  const produto = PRODUTO_POR_ROTA[pathname];
  if (produto) return `Olá Rodrigo, vim pelo site e quero cotar ${produto}`;
  if (pathname.startsWith('/blog')) return 'Olá Rodrigo, vim pelo blog da Elevance e quero saber mais';
  return 'Olá Rodrigo, vim pelo site da Elevance e quero saber mais';
}

const FloatingWhatsApp = () => {
  const location = useLocation();
  const [recolhido, setRecolhido] = useState(false);

  // Recolhe o botão quando o ScrollCTA está visível no mobile
  // (mesmo gatilho de scroll que o ScrollCTA usa: 45% da altura da página),
  // evitando dois elementos flutuantes sobrepostos na mesma área.
  useEffect(() => {
    const LIMIAR_PORCENTAGEM = 0.45;
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
        const porcentagemRolada = alturaTotal > 0 ? window.scrollY / alturaTotal : 0;
        setRecolhido(porcentagemRolada > LIMIAR_PORCENTAGEM);
      } else {
        setRecolhido(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const mensagem = getMensagemContextual(location.pathname);
  const href = `https://wa.me/${MEU_NUMERO}?text=${encodeURIComponent(mensagem)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: recolhido ? 0 : 1, opacity: recolhido ? 0 : 1 }}
      transition={{ delay: recolhido ? 0 : 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: recolhido ? 0 : 1.1 }}
      style={{ pointerEvents: recolhido ? 'none' : 'auto' }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 flex items-center justify-center group cursor-pointer"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-75"></div>
      
      {/* Official WhatsApp Icon SVG */}
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-8 h-8 md:w-10 md:h-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>

      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale Conosco
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
