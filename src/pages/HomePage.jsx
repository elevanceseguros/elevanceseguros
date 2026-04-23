import React from 'react';
import { motion } from 'framer-motion';
import LeadFormSincero from '@/components/LeadFormSincero';
import { 
  Car, Shield, Heart, Building, Users, Wallet, 
  CheckCircle2, ArrowRight, Star, Instagram, Linkedin 
} from 'lucide-react';

const HomePage = () => {
  const servicos = [
    { 
      title: "Seguro Auto & Moto", 
      icon: <Car className="w-8 h-8" />, 
      desc: "Proteção completa contra roubo, furto e colisões com assistência 24h.",
      link: "/seguro-auto"
    },
    { 
      title: "Plano de Saúde", 
      icon: <Heart className="w-8 h-8" />, 
      desc: "As melhores operadoras para você, sua família ou sua empresa.",
      link: "/health-plans"
    },
    { 
      title: "Proteção Veicular", 
      icon: <Shield className="w-8 h-8" />, 
      desc: "A alternativa inteligente e econômica para proteger seu patrimônio.",
      link: "/protecao-veicular"
    },
    { 
      title: "Seguro Empresarial", 
      icon: <Building className="w-8 h-8" />, 
      desc: "Blindagem patrimonial para o seu negócio crescer com segurança.",
      link: "/business-insurance"
    },
    { 
      title: "Seguro de Vida", 
      icon: <Users className="w-8 h-8" />, 
      desc: "Tranquilidade para quem você ama com coberturas personalizadas.",
      link: "/planos-de-saude"
    },
    { 
      title: "Consórcios", 
      icon: <Wallet className="w-8 h-8" />, 
      desc: "O caminho mais inteligente para conquistar sua casa ou carro novo.",
      link: "/consorcios"
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION - Humanizada com sua foto */}
      <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            
            {/* Lado Esquerdo: Texto de Impacto */}
            <div className="flex-1 text-center lg:text-left">
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
                <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Olá, eu sou o Rodrigo. Na Elevance Seguros, não vendemos apenas apólices, entregamos segurança real para sua família e seu patrimônio.
                </p>
              </motion.div>
            </div>

            {/* Lado Direito: Sua Foto preview.webp */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/preview.webp" 
                  alt="Rodrigo - Elevance Seguros" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Elementos decorativos atrás da foto */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-[30px] -z-10 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-100 rounded-[30px] -z-10"></div>
            </motion.div>
          </div>
          
          {/* Formulário Principal (Centralizado abaixo do conteúdo do Hero) */}
          <div className="relative z-20">
            <LeadFormSincero />
          </div>
        </div>
      </section>

      {/* 2. MOSAICO DE SERVIÇOS (Vertical e Limpo) */}
      <section className="py-24 px-4 bg-white" id="servicos">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1a3a52] mb-4">Como podemos te ajudar?</h2>
            <p className="text-slate-400 font-medium">Selecione o serviço para uma cotação personalizada</p>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[40px] border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:border-blue-50 transition-all group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <a href={s.link} className="flex items-center gap-2 text-blue-600 font-bold text-xs tracking-widest hover:gap-4 transition-all">
                  VER DETALHES <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOCO DE AUTORIDADE E CONFIANÇA */}
      <section className="py-24 bg-[#1a3a52] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((st) => (
                  <Star key={st} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Transparência total em <br/>
                <span className="text-blue-400">cada detalhe da apólice.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Suporte 24h no Sinistro",
                  "Consultoria sem Custo",
                  "Análise de Risco Real",
                  "Zero Burocracia"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-blue-400 w-6 h-6 shrink-0" />
                    <span className="text-lg font-bold opacity-90">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[50px] shadow-2xl relative">
              <blockquote className="text-xl md:text-2xl italic font-medium leading-relaxed mb-8">
                "O Rodrigo me explicou cada cláusula que eu não entendia no seguro da minha frota. Além de economizar, hoje eu durmo tranquilo sabendo exatamente o que contratei."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center font-bold text-2xl">A</div>
                <div>
                  <p className="font-black text-lg">André Santos</p>
                  <p className="text-sm text-blue-300 font-bold uppercase tracking-widest">Cliente PME - São Paulo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER / CONTATO RÁPIDO */}
      <footer className="bg-slate-50 py-20 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img src="/logos/elevance-logo.png" alt="Elevance" className="h-12 mx-auto mb-8 opacity-40 grayscale hover:grayscale-0 transition-all" />
          <p className="text-slate-500 max-w-md mx-auto mb-8 font-medium italic">
            "Minha missão é garantir que você nunca seja pego de surpresa. Conte comigo para proteger o que é seu."
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="p-3 bg-white rounded-full shadow-sm text-slate-400 hover:text-blue-600 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-sm text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
            © 2026 Elevance Seguros • Rodrigo e Equipe
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
