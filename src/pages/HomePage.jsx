{/* 1. HERO SECTION - Legenda no topo, Selo Online no rodapé */}
<section className="relative pt-6 pb-20 lg:pt-12 lg:pb-32 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
      
      {/* Lado Esquerdo: Texto */}
      <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Consultoria Especializada
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a3a52] mb-6 leading-[1.1]">
            Sua tranquilidade é <br/>
            <span className="text-blue-600">nosso maior seguro.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium">
            Na Elevance Seguros, entregamos segurança real para sua família e seu patrimônio. Atendimento humano e suporte total.
          </p>
        </motion.div>
      </div>

      {/* Lado Direito: Sua Foto com Detalhes (Corrigido) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative order-1 lg:order-2 z-10" 
      >
        <div className="relative group">
          {/* Container da Foto */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-slate-200">
            <img 
              src="/preview.webp" 
              alt="Rodrigo - Corretor de Seguros" 
              className="w-full h-full object-cover"
            />
            {/* NOVO: Legenda movida para o TOPO da foto */}
            <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-5">
              <p className="text-white text-md font-black tracking-tight">Rodrigo</p>
              <p className="text-blue-300 text-[10px] font-black uppercase tracking-wider">Corretor de Seguros</p>
            </div>
          </div>

          {/* Selo Online e Estrelas (Mantido no canto inferior, sem cobrir) */}
          <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-xl z-20 flex flex-col gap-1 items-start border border-slate-50">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-black text-slate-700 uppercase">Online Agora</span>
            </div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-[30px] -z-10 opacity-10"></div>
      </motion.div>
    </div>
    
    <div className="relative z-20">
      <LeadFormSincero />
    </div>
  </div>
</section>
