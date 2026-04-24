import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Home, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

const ThankYouPage = () => {
  const location = useLocation();
  const state = location.state || {};
  const { name } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Obrigado! | Elevance Seguros</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
        >
          {/* Header Section */}
          <div className="bg-[#114d8e] p-8 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="relative z-10 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-[#114d8e]"
            >
              <CheckCircle2 className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-2">
              Obrigado{name ? `, ${name}` : ''}!
            </h1>
            <p className="relative z-10 text-blue-100 text-lg font-medium">
              Sua solicitação foi recebida com sucesso.
            </p>
          </div>

          {/* Body Section */}
          <div className="p-8 md:p-10 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">O que acontece agora?</h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto">
                Nossa equipe de especialistas já está analisando seus dados. Em breve, entraremos em contato para apresentar as melhores opções personalizadas para você.
              </p>
            </div>

            {/* WhatsApp CTA Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 md:p-8 text-center shadow-sm relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-200 rounded-full blur-2xl opacity-50"></div>
              
              <h3 className="text-xl font-bold text-[#114d8e] mb-3 relative z-10">
                Quer agilizar seu atendimento?
              </h3>
              <p className="text-slate-700 mb-6 relative z-10">
                Fale agora mesmo com um consultor pelo WhatsApp e receba sua cotação mais rápido.
              </p>
              
              <Button 
                asChild
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-lg group relative z-10"
              >
                <a 
                  href="https://wa.me/5511920144864?text=Ol%C3%A1%2C%20acabei%20de%20fazer%20uma%20cota%C3%A7%C3%A3o%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Chamar no WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>(11) 92014-4864</span>
                </div>
                <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
                <div>
                    Seg a Sex: 09h às 18h
                </div>
            </div>

            {/* Return Home */}
            <div className="text-center pt-2 border-t border-slate-100">
              <Button 
                asChild 
                variant="ghost" 
                className="text-slate-600 hover:text-[#114d8e] hover:bg-blue-50 mt-4"
              >
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Voltar para Início
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ThankYouPage;