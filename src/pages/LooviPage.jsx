import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Car, CheckCircle2, Star, ArrowRight, Smartphone, Clock, Ban, Wrench } from 'lucide-react';
import ScrollCTA from '@/components/ScrollCTA';
import CorretorHero from '@/components/CorretorHero';
import FAQ from '@/components/FAQ';

const LOOVI_URL = "https://loovi.com.br/52562/Q0FUX0FERVNBT18yOTk=?utm_source=escvir&utm_medium=meusite";

const coberturas = [
  { icon: <ShieldCheck size={24} className="text-[#5A78FF]" />, titulo: "Colisão Completa", desc: "Pagamento integral ou parcial em caso de colisão, alagamento e granizo." },
  { icon: <Car size={24} className="text-[#5A78FF]" />, titulo: "Furto e Roubo", desc: "Indenização 100% FIPE em caso de furto ou roubo do veículo." },
  { icon: <Zap size={24} className="text-[#5A78FF]" />, titulo: "Assistência 24h", desc: "Reboque, chaveiro, pane elétrica, mecânica e muito mais em todo o Brasil." },
  { icon: <Car size={24} className="text-[#5A78FF]" />, titulo: "Carro Reserva", desc: "7 dias de carro reserva em caso de colisão, incêndio, roubo ou furto." },
  { icon: <ShieldCheck size={24} className="text-[#5A78FF]" />, titulo: "Terceiros", desc: "Danos materiais e corporais a terceiros com cobertura de até R$ 100 mil." },
  { icon: <Wrench size={24} className="text-[#5A78FF]" />, titulo: "Vidros Completo", desc: "Troca ou reparo de para-brisa, vidros laterais, retrovisores, lanternas e faróis." },
];

const diferenciais = [
  { icon: <Ban size={20} />, texto: "Sem análise de perfil do condutor" },
  { icon: <Clock size={20} />, texto: "Ative seu seguro em 5 minutos" },
  { icon: <Smartphone size={20} />, texto: "100% digital — sem burocracia" },
  { icon: <Car size={20} />, texto: "Aceita carros a partir de 1986" },
  { icon: <Star size={20} />, texto: "Aceita carros de app, táxi e GNV" },
  { icon: <Zap size={20} />, texto: "Pagamento mês a mês, sem comprometer limite" },
];

const faqs = [
  { pergunta: "O que é a Loovi?", resposta: "A Loovi é uma insurtech que disponibiliza seguros e serviços para veículos através de sua plataforma digital. Representa a LTI Seguros S.A., participante do Sandbox Regulatório da SUSEP." },
  { pergunta: "Quais veículos a Loovi aceita?", resposta: "A Loovi aceita carros a partir de 1986, incluindo veículos de app (Uber, 99), táxi, carros com GNV, híbridos, elétricos, modificados e de leilão." },
  { pergunta: "Como funciona a cotação online?", resposta: "A cotação é feita 100% pelo site em menos de 30 segundos. Após contratar, o seguro é ativado em até 5 minutos — sem vistoria presencial obrigatória." },
  { pergunta: "O valor muda dependendo de quem dirige?", resposta: "Não! A Loovi não analisa o perfil do condutor. Não importa quem vai dirigir, onde mora ou a idade — o valor não muda." },
  { pergunta: "Qual é a franquia em caso de sinistro?", resposta: "Para veículos de passeio: 5% do valor FIPE (mínimo R$ 2.500). Veículos diferenciados: 8% (mín. R$ 3.500). Importados: 10% (mín. R$ 5.000)." },
  { pergunta: "Por que contratar pela Elevance?", resposta: "Somos parceiros oficiais da Loovi e podemos te ajudar a entender a melhor cobertura para o seu perfil, tirar dúvidas e dar suporte em caso de sinistro." },
];

export default function LooviPage() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Seguro Auto Loovi em SP | Cotação Online em 5 Minutos — Elevance</title>
        <meta name="description" content="Seguro auto Loovi com cotação 100% online. Sem análise de perfil, aceita carros de app e táxi, ative em 5 minutos. Parceiro oficial Elevance Seguros SP." />
        <link rel="canonical" href="https://www.elevanceseguros.com/loovi" />
      </Helmet>

      <CorretorHero operadora="um Seguro Loovi" />

      {/* HERO */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden" style={{background: "linear-gradient(135deg, #1a1f3c 0%, #2d3580 50%, #3d47b0 100%)"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #5A78FF 1px, transparent 1px), radial-gradient(circle at 80% 20%, #54DEF8 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">

              {/* Badge Loovi */}
              <div className="flex items-center justify-center lg:justify-start">
                <img src="/logos/loovi.webp" alt="Loovi Seguros" className="h-8 mb-1" />
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 bg-[#5A78FF]/20 border border-[#5A78FF]/30 text-[#a0b4ff] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  <span className="w-2 h-2 bg-[#5A78FF] rounded-full animate-pulse inline-block"></span>
                  Parceiro Oficial Loovi
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
                Seguro auto completo.<br/>
                <span style={{color: "#5A78FF"}}>Ative em 5 minutos.</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium">
                Cotação <span className="text-[#54DEF8] font-black">100% online</span>, sem análise de perfil, sem burocracia. A insurtech que está revolucionando o seguro auto no Brasil.
              </p>

              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {["Sem análise de perfil do condutor", "Aceita Uber, táxi, GNV e carros de leilão", "Carro reserva por 7 dias incluído", "Assistência 24h em todo o Brasil", "Pagamento mês a mês — igual Netflix"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{color: "#5A78FF"}} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10" style={{background: "#5A78FF"}}>
                  <Zap size={14} className="text-yellow-300 fill-yellow-300" /> Cotação Gratuita
                </div>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2 mt-4">Seguro Auto Digital</p>
                <h4 className="text-slate-800 text-xl md:text-2xl font-black italic mb-2">Quanto custa proteger seu carro?</h4>
                <p className="text-slate-500 text-sm mb-8">Cote em 30 segundos, ative em 5 minutos</p>
                <a
                  href={LOOVI_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-white font-black py-5 rounded-2xl transition-all uppercase text-xs tracking-widest shadow-lg hover:opacity-90 hover:scale-105 mb-3"
                  style={{background: "linear-gradient(135deg, #5A78FF, #54DEF8)"}}
                >
                  Cotar 100% Online <ArrowRight size={14} className="inline ml-1" />
                </a>
                <p className="text-slate-400 text-[10px]">Sem compromisso · Dados sigilosos · Resposta imediata</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#114d8e] italic text-center mb-3">O que está incluído</h2>
          <p className="text-slate-500 text-center font-medium mb-12">Cobertura completa para você dirigir sem preocupação</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coberturas.map((c, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-all">
                <div className="mb-3">{c.icon}</div>
                <h3 className="font-black text-[#114d8e] mb-2">{c.titulo}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #1a1f3c 0%, #2d3580 100%)"}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white italic mb-3">Por que a Loovi é diferente?</h2>
            <p className="text-white/60 font-medium">A insurtech que nasceu para simplificar o seguro auto</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {diferenciais.map((d, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/10 rounded-2xl px-6 py-4">
                <div className="flex-shrink-0" style={{color: "#54DEF8"}}>{d.icon}</div>
                <span className="text-white font-medium text-sm">{d.texto}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={LOOVI_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-white font-black px-10 py-5 rounded-2xl transition-all uppercase text-xs tracking-widest shadow-xl hover:scale-105"
              style={{background: "linear-gradient(135deg, #5A78FF, #54DEF8)"}}
            >
              Fazer Cotação Online <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={faqs} />

      <ScrollCTA produto="Seguro Auto Loovi" pagina="/loovi" />
    </div>
  );
}
