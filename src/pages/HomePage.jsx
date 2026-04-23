import React from 'react';
import { motion } from 'framer-motion';
import LeadFormSincero from '@/components/LeadFormSincero';
import { 
  Car, Shield, Heart, Building, Users, Wallet, 
  CheckCircle2, ArrowRight, Star, Instagram, Linkedin, Activity 
} from 'lucide-react';

const HomePage = () => {
  const servicos = [
    { title: "Seguro Auto & Moto", icon: <Car className="w-8 h-8" />, desc: "Proteção completa contra roubo, furto e colisões com assistência 24h.", link: "/seguro-auto" },
    { title: "Plano de Saúde", icon: <Heart className="w-8 h-8" />, desc: "As melhores operadoras para você, sua família ou sua empresa.", link: "/health-plans" },
    { title: "Proteção Veicular", icon: <Shield className="w-8 h-8" />, desc: "A alternativa inteligente e econômica para proteger seu patrimônio.", link: "/protecao-veicular" },
    { title: "Seguro Empresarial", icon: <Building className="w-8 h-8" />, desc: "Blindagem patrimonial para o seu negócio crescer com segurança.", link: "/business-insurance" },
    { title: "Seguro de Vida", icon: <Users className="w-8 h-8" />, desc: "Tranquilidade para quem você ama com coberturas personalizadas.", link: "/planos-de-saude" },
    { title: "Consórcios", icon: <Wallet className="w-8 h-8" />, desc: "O caminho mais inteligente para conquistar sua casa ou carro novo.", link: "/consorcios" }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION - Ajustada para não cobrir o menu */}
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

            {/* Lado Direito: Sua Foto com Legenda e Pingo Online */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 lg:order-2 z-10" 
            >
              <div className="relative group">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white rotate-2 group-hover:rotate-0 transition-transform duration-500 bg-slate-200">
                  <img 
                    src="/preview.webp" 
                    alt="Rodrigo - Corretor de Seguros" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-bold">Rodrigo</p>
                    <p className="text-blue-300 text-[10px] font-black uppercase tracking-wider">Corretor de Seguros</p>
                  </div>
                </div>

                {/* Selo Online e Estrelas */}
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

      {/* 2. MOSAICO DE SERVIÇOS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1a3a52] mb-4">Como podemos te ajudar?</h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((s, i) => (
              <div key={i} className="p-8 rounded-[40px] border border-slate-100 bg-white shadow-sm hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <a href={s.link} className="flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest">
                  VER DETALHES <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOCO DE AUTORIDADE */}
      <section className="py-24 bg-[#1a3a52] text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Transparência total em <span className="text-blue-400">cada detalhe.</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["Suporte 24h no Sinistro", "Consultoria sem Custo", "Análise de Risco Real", "Zero Burocracia"].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-400 w-6 h-6 shrink-0" />
                  <span className="text-lg font-bold opacity-90">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[50px] shadow-2xl">
            <blockquote className="text-xl md:text-2xl italic font-medium leading-relaxed mb-8">
              "O Rodrigo me explicou cada cláusula que eu não entendia. Além de economizar, hoje eu durmo tranquilo."
            </blockquote>
            <p className="font-black text-lg">André Santos</p>
            <p className="text-sm text-blue-300 font-bold uppercase tracking-widest">Cliente PME - São Paulo</p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 py-16 border-t text-center">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">© 2026 Elevance Seguros • Rodrigo e Equipe</p>
      </footer>
    </div>
  );
};

export default HomePage;
