import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Home, Clock, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ThankYouPage = () => {
  const location = useLocation();
  const state = location.state || {};
  const { name } = state;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const primeiroNome = name ? name.split(' ')[0] : null;

  return (
    <>
      <Helmet>
        <title>Obrigado! | Elevance Seguros</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-[#071B34] flex flex-col items-center justify-center px-4 py-16 text-white">

        {/* Logo */}
        <img src="/logos/elevance-dark-horizontal-white.png" alt="Elevance Seguros"
          className="h-9 w-auto object-contain mb-14 opacity-80" />

        {/* Ícone de sucesso */}
        <div className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-green-400" />
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-black italic text-center mb-3">
          {primeiroNome ? `Recebemos, ${primeiroNome}!` : 'Recebemos seu pedido!'}
        </h1>
        <p className="text-white/55 text-center text-base max-w-sm leading-relaxed mb-10">
          Rodrigo da Elevance Seguros vai entrar em contato no seu WhatsApp em instantes com a melhor proposta.
        </p>

        {/* Passos */}
        <div className="w-full max-w-sm space-y-3 mb-10">
          {[
            { n: '1', texto: 'Seus dados foram enviados para o consultor' },
            { n: '2', texto: 'Rodrigo analisa o seu perfil e monta a cotação' },
            { n: '3', texto: 'Você recebe a proposta diretamente no WhatsApp' },
          ].map(step => (
            <div key={step.n} className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-2xl px-5 py-4">
              <div className="w-7 h-7 rounded-full bg-[#C9A84C] text-[#071B34] font-black text-xs flex items-center justify-center flex-shrink-0">{step.n}</div>
              <p className="text-sm text-white/75 font-medium">{step.texto}</p>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <a href="https://wa.me/5511920144864?text=Ol%C3%A1%20Rodrigo%2C%20acabei%20de%20preencher%20o%20formul%C3%A1rio%20no%20site%20e%20quero%20agilizar%20minha%20cota%C3%A7%C3%A3o."
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all mb-4">
          <MessageCircle size={18} /> Chamar agora no WhatsApp
        </a>

        {/* Horário */}
        <div className="flex items-center gap-2 text-white/30 text-xs mb-10">
          <Clock size={12} /> Atendimento seg–sex 9h às 18h · (11) 92014-4864
        </div>

        {/* Voltar */}
        <Link to="/" className="flex items-center gap-2 text-white/30 hover:text-white/60 text-xs font-bold transition-colors">
          <Home size={13} /> Voltar para o início
        </Link>

      </div>
    </>
  );
};

export default ThankYouPage;
