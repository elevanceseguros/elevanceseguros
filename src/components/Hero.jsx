import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Hero = ({
  customTitle
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pb-28 bg-gradient-to-br from-[#114d8e] via-[#244b6a] to-[#0f2333] overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-2 mb-4 bg-[#2a4a62]/50 p-2 rounded-full px-4 border border-[#3b5d7a]/50 backdrop-blur-sm">
            <Shield className="w-5 h-5 text-blue-300" aria-hidden="true" />
            <span className="text-blue-100 font-medium text-sm">Segurança e confiança em São Paulo e em todo Brasil</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white max-w-4xl">
            {customTitle || (
              <>
                Plano de Saúde e Seguro Auto <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">Bom e Barato</span>
              </>
            )}
          </h1>

          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed opacity-90">
            Cote online em instantes. Encontre as melhores opções de seguros, planos de saúde e consórcios com cobertura nacional.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;