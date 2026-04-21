import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import UnimeduniplanQuoteForm from './UnimeduniplanQuoteForm';

const UnimeduniplanHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32 overflow-hidden bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857]">
      {/* Abstract Background Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900 rounded-full blur-3xl transform translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* LEFT SIDE: Content */}
          <div className="w-full lg:w-1/2 text-left text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="flex flex-col mb-8">
                <span className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 block">
                  Uniplan
                </span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug block opacity-95">
                  Plano de Saúde com Preço Justo e Atendimento de Qualidade em Todo Brasil.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-emerald-50 mb-8 leading-relaxed max-w-xl">
                Chega de pagar caro por um atendimento ruim. Unimed Uniplan oferece cobertura nacional com preços acessíveis e médicos de confiança. Preencha o formulário e receba sua cotação em até 2 minutos.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="w-full lg:w-5/12 xl:w-4/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <UnimeduniplanQuoteForm />

              {/* Badges moved here, below the form */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {["Preço Competitivo", "Cobertura Nacional", "Atendimento de Qualidade"].map((badge, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UnimeduniplanHero;