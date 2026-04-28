import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Star, ShieldCheck, Zap, Car, Heart, 
  Building2, Wallet, CheckCircle2, Bike, 
  Users, ArrowRight, MessageCircle, Smile, PartyPopper, Home
} from 'lucide-react';

const HomePage = () => {
  const [sent, setSent] = useState(false);
  const fotoHero = "/preview.webp";
  const meuNumero = "5511920144864";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsappLead = formData.get('whatsapp');

    // Prepara a mensagem para o seu WhatsApp
    const mensagem = encodeURIComponent(`Olá Rodrigo! Me chamo ${nome}. Vi o site da Elevance Seguros e gostaria de uma consultoria. Meu WhatsApp é: ${whatsappLead}`);
    
    // Abre o WhatsApp em uma nova aba
    window.open(`https://wa.me/${meuNumero}?text=${mensagem}`, '_blank');

    // Transforma o formulário em sucesso na tela
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Elevance Seguros | Planos de Saúde, Seguro Auto e Consórcios em SP</title>
        <meta name="description" content="Elevance Seguros: consultoria 100% digital em planos de saúde, seguro auto, proteção veicular e consórcios em São Paulo e todo o Brasil. Cotação gratuita via WhatsApp." />
        <link rel="canonical" href="https://elevanceseguros.com" />
      </Helmet>
      <div className="min-h-screen bg-white font-sans">
      
      {/* 1. HERO - DIRETO PARA WHATSAPP */}
      <section className="relative pt-24 pb-12 sm:pt-32 md:pt-44 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="flex flex-col md:flex-row items-center lg:items-start gap-6">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200">
                    <img src={fotoHero} alt="Rodrigo" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Consultoria Especializada</span>
                  <h1 className="text-3xl md:text-5xl font-black text-[#114d8e] leading-tight italic">Sua tranquilidade é <br className="hidden md:block"/> nosso maior seguro.</h1>
                </div>
              </div>

              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic italic">
                Deixe seu contato e nossos <span className="text-blue-600 font-black uppercase">especialistas</span> encontrarão a melhor proteção para você agora.
              </p>

              <div className="flex flex-row justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> 5 Estrelas no Google
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck size={14} className="text-blue-600" /> Melhores Operadoras
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[350px] flex flex-col justify-center transition-all duration-500">
                
                {!sent ? (
                  <>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#114d8e] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                      <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Iniciar Atendimento
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input name="nome" type="text" required placeholder="Seu Nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                      <input name="whatsapp" type="tel" required placeholder="WhatsApp (DDD)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                      <button className="w-full bg-[#114d8e] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                        SOLICITAR VIA WHATSAPP <MessageCircle size={16}/>
                      </button>
                      <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic">Você será direcionado para o WhatsApp do Rodrigo</p>
                    </form>
                  </>
                ) : (
                  <div className="text-center space-y-6 animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <PartyPopper size={40} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-[#114d8e] italic">Encaminhando...</h3>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Estamos abrindo o WhatsApp. Se não abrir automaticamente, <a href={`https://wa.me/${meuNumero}`} className="text-blue-600 font-bold underline">clique aqui</a>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROTEÇÃO VEICULAR (APVS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[50px] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
            <div className="lg:w-1/2 space-y-6 z-10 italic">
              <div className="flex gap-4">
                <div className="p-4 bg-blue-600 rounded-2xl"><Car size={32}/></div>
                <div className="p-4 bg-blue-600 rounded-2xl"><Bike size={32}/></div>
              </div>
              <Link to="/protecao-veicular" className="text-3xl md:text-4xl font-black hover:text-blue-300 transition-colors underline-offset-4 hover:underline">Proteção Veicular APVS</Link>
              <p className="text-blue-100/70 font-medium">A maior da América Latina no seu carro ou moto, sem análise de perfil.</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="flex items-center gap-2 text-[10px] font-bold uppercase"><CheckCircle2 size={14} className="text-green-400"/> Sem consulta SPC/Serasa</span>
                <span className="flex items-center gap-2 text-[10px] font-bold uppercase"><CheckCircle2 size={14} className="text-green-400"/> Rastreador Grátis</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full z-10">
              <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/10 text-center">
                <h4 className="text-xl md:text-2xl font-bold mb-8 italic">Quanto custa proteger seu veículo?</h4>
                <a href={`https://wa.me/${meuNumero}?text=Olá Rodrigo, quero cotar Proteção Veicular APVS`} target="_blank" className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all uppercase text-xs tracking-widest shadow-lg">Solicitar Cotação via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSÓRCIOS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 italic">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <Wallet size={48} className="text-blue-600 mx-auto lg:mx-0" />
              <Link to="/consorcios" className="text-3xl md:text-4xl font-black text-[#114d8e] hover:text-blue-600 transition-colors underline-offset-4 hover:underline">Consórcio Elevance</Link>
              <p className="text-slate-500 font-medium">Compre seu imóvel ou veículo sem juros abusivos.</p>
              <div className="pt-6">
                <a href={`https://wa.me/${meuNumero}?text=Olá Rodrigo, quero simular um Consórcio`} className="inline-flex items-center gap-3 bg-[#114d8e] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">Simular Agora <ArrowRight size={16}/></a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="bg-white rounded-[50px] p-12 shadow-xl border border-slate-100 flex flex-col items-center">
                  <div className="text-7xl font-black text-blue-600 mb-2">0%</div>
                  <div className="text-lg font-black text-[#114d8e] uppercase tracking-widest mb-6">De Juros Reais</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARDS SERVIÇOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#114d8e] italic text-center mb-3">O que podemos fazer por você</h2>
          <p className="text-slate-500 text-center font-medium mb-12">Clique para conhecer cada solução</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Heart size={36}/>, title: "Planos de Saúde", desc: "Individuais, familiares e PME. Compare as melhores operadoras.", btn: "Ver Planos", path: "/encontre-seu-plano", bg: "bg-blue-50", cor: "text-blue-600" },
              { icon: <Smile size={36}/>, title: "Plano Odontológico", desc: "Sorria com tranquilidade. Planos acessíveis para toda a família.", btn: "Ver Planos", path: "/odontologico", bg: "bg-sky-50", cor: "text-sky-600" },
              { icon: <Users size={36}/>, title: "Seguro de Vida", desc: "Proteja o futuro da sua família com coberturas completas.", btn: "Simular", path: "/seguro-vida", bg: "bg-rose-50", cor: "text-rose-600" },
              { icon: <Building2 size={36}/>, title: "Seguro Empresarial", desc: "Patrimônio, PME, responsabilidade civil e vida em grupo.", btn: "Cotar", path: "/seguro-empresa", bg: "bg-slate-50", cor: "text-slate-600" },
              { icon: <ShieldCheck size={36}/>, title: "Responsabilidade Civil", desc: "RC Geral, Profissional, Produtos e D&O para sua empresa.", btn: "Cotar", path: "/responsabilidade-civil", bg: "bg-violet-50", cor: "text-violet-600" },
              { icon: <Home size={36}/>, title: "Seguro Residencial", desc: "Proteja sua casa ou apartamento contra incêndio, roubo e danos.", btn: "Cotar", path: "/seguro-residencial", bg: "bg-amber-50", cor: "text-amber-600" }
            ].map((item, i) => (
              <div key={i} className={`${item.bg} rounded-[40px] p-8 border border-slate-100 group hover:bg-[#114d8e] transition-all duration-500 flex flex-col`}>
                <div className={`${item.cor} mb-5 group-hover:text-blue-400 transition-colors`}>{item.icon}</div>
                <h3 className="text-xl font-black text-[#114d8e] group-hover:text-white italic mb-2 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors mb-6 flex-1">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <Link to={item.path} className="bg-white text-[#114d8e] font-black py-3 px-5 rounded-2xl text-[10px] uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    {item.btn}
                  </Link>
                  <Link to={item.path} className="text-slate-400 group-hover:text-blue-300 transition-colors">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* DEPOIMENTOS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#114d8e] italic mb-2">O que dizem nossos clientes</h2>
            <p className="text-slate-500 font-medium">Pessoas reais, resultados reais</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { inicial: "S", nome: "Simone", local: "São Roque, SP", produto: "Plano de Saúde", texto: "Agradeço de coração todo seu empenho. Precisando, logicamente vou te procurar novamente." },
              { inicial: "W", nome: "Warlei", local: "Ouro Fino, MG", produto: "Seguro Auto", texto: "Agradeço pela atenção! Pelas dúvidas sanadas e por conseguir o melhor preço." },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-[30px] p-8 shadow-sm border border-slate-100">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic font-medium">&ldquo;{d.texto}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-[#114d8e] font-black text-sm">{d.inicial}</div>
                  <div>
                    <div className="font-black text-[#114d8e] text-sm">{d.nome}</div>
                    <div className="text-slate-400 text-xs font-medium">{d.local} · {d.produto}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#114d8e] rounded-[50px] py-16 px-8 text-white text-center space-y-6">
            <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Atendimento 100% Digital</span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight italic">Sua segurança <br className="hidden md:block"/>não pode esperar.</h2>
            <p className="text-blue-100 font-medium text-base max-w-xl mx-auto">Fale com o Rodrigo agora e receba uma cotação personalizada em minutos.</p>
            <a href={`https://wa.me/${meuNumero}`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl hover:scale-105">
              <MessageCircle size={20}/> Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default HomePage;