import ScrollCTA from '@/components/ScrollCTA';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Zap, Heart, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";
const MEU_NUMERO = "5511920144864";

const operadoras = [
  { nome: "Amil",          logo: "/logos/amil.webp" },
  { nome: "Bradesco Saúde", logo: "/logos/bradesco.webp" },
  { nome: "SulAmérica",    logo: "/logos/sulamerica.webp" },
  { nome: "Hapvida",       logo: "/logos/hapvida.webp" },
  { nome: "NotreDame",     logo: "/logos/notredame.webp" },
  { nome: "Unimed",        logo: "/logos/unimed.png" },
  { nome: "Porto Seguro",  logo: "/logos/portoseguro.svg" },
  { nome: "Alice",         logo: "/logos/alice.webp" },
];

const beneficios = [
  { icon: <Heart size={28} className="text-blue-600" />, titulo: "Rede Credenciada Ampla", desc: "Hospitais e clínicas em São Paulo e em todo Brasil" },
  { icon: <Zap size={28} className="text-blue-600" />, titulo: "Cotação em Minutos", desc: "Você recebe opções no WhatsApp sem burocracia" },
  { icon: <Users size={28} className="text-blue-600" />, titulo: "Atendimento Humano", desc: "Fala direto com o corretor, sem call center" },
  { icon: <ShieldCheck size={28} className="text-blue-600" />, titulo: "Melhor Custo-Benefício", desc: "Comparamos várias operadoras para você economizar" },
];

const faq = [
  { q: "Quanto tempo leva para receber minha cotação?", r: "Em até 2 horas úteis você já recebe opções personalizadas no seu WhatsApp." },
  { q: "Preciso pagar alguma coisa para cotar?", r: "Não. A cotação é 100% gratuita e sem compromisso." },
  { q: "Quais operadoras vocês trabalham?", r: "Trabalhamos com as principais do mercado: Amil, Bradesco, SulAmérica, Hapvida, NotreDame, Unimed, Alice e outras." },
  { q: "Posso cotar para minha empresa?", r: "Sim! Atendemos pessoa física, família e PME — incluindo MEI." },
];

export default function SaudeLanding() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [faqAberto, setFaqAberto] = useState(null);

  const formatWhatsapp = (v) => {
    const nums = v.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 2) return nums;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome.trim()) { setErro("Por favor informe seu nome."); return; }
    const nums = whatsapp.replace(/\D/g, "");
    if (nums.length < 10) { setErro("WhatsApp inválido. Inclua DDD."); return; }
    setErro("");
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: nome.trim(), whatsapp: nums, origem: "saude.elevanceseguros.com", produto: "Plano de Saúde" }),
      });
      setEnviado(true);
    } catch {
      setErro("Erro ao enviar. Tente novamente ou chame no WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Plano de Saúde SP | Cotação Gratuita</title>
        <meta name="description" content="Compare planos de saúde em São Paulo com a Elevance Seguros. Cotação gratuita e personalizada em minutos via WhatsApp. Amil, Bradesco, SulAmérica, Unimed e mais." />
        <meta name="keywords" content="plano de saúde São Paulo, cotação plano de saúde, plano de saúde barato SP, plano de saúde individual SP, plano de saúde familiar SP" />
        <meta property="og:title" content="Plano de Saúde em São Paulo | Cotação Gratuita - Elevance Seguros" />
        <meta property="og:description" content="Compare planos de saúde em São Paulo. Cotação gratuita em minutos via WhatsApp. Sem burocracia." />
        <meta property="og:url" content="https://saude.elevanceseguros.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://saude.elevanceseguros.com/logos/elevance-icon.png" />
        <link rel="canonical" href="https://saude.elevanceseguros.com" />
              <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" content=" />
        <meta name="twitter:description" content=" content=" />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/logos/elevance-icon.png" />
      </Helmet>

      {/* NAV */}
      <nav className="bg-[#0d1f3c] sticky top-0 z-50 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/"><img src="/logos/elevance-dark-horizontal-white.png" alt="Elevance Seguros" className="h-8 w-auto object-contain" loading="eager" /></Link>
          <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, vim pela página de planos de saúde e quero uma cotação`}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wide transition-all">
            <MessageCircle size={13} /> Cotar agora
          </a>
        </div>
      </nav>

      {/* CORRETOR HERO */}
      <div className="bg-white border-b border-slate-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="w-11 h-11 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-200">
                <img src="/logos/elevance-icon.png" alt="Rodrigo Farias" className="w-full h-full object-cover object-top" loading="eager" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 w-3 h-3 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <div className="font-black text-[#0d1f3c] text-sm">Rodrigo Farias</div>
              <div className="flex gap-0.5 my-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={9} className="text-yellow-400 fill-yellow-400" />)}</div>
              <div className="text-green-600 text-[10px] font-black flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block"></span>
                Online agora · Responde em minutos
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-xl px-3 py-1.5 ml-2">
              <span className="text-[10px] font-black text-blue-600">⚡ Cotação gratuita · Sem compromisso</span>
            </div>
          </div>
          <a href={`https://wa.me/${MEU_NUMERO}?text=Olá Rodrigo, vim pela página de planos de saúde e quero uma cotação gratuita`}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wide transition-colors shadow-md whitespace-nowrap">
            <MessageCircle size={13} /> Falar agora — é gratuito
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative pt-12 pb-16 bg-[#0d1f3c] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">✦ Consultoria Especializada em SP</span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
                Plano de saúde do jeito certo, <br className="hidden md:block" />
                <span className="text-yellow-300">sem enrolação.</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium">
                Deixe seu contato e o <span className="text-yellow-300 font-black">Rodrigo Farias</span> encontrará o melhor plano para você em minutos — de graça.
              </p>
              <div className="grid grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
                {["Amil, Bradesco, SulAmérica", "Hapvida, Unimed, Alice", "Individual e familiar", "MEI e PME empresarial", "Cotação em minutos", "Sem burocracia"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                    <CheckCircle2 size={14} className="text-green-400 shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <Star size={11} className="text-yellow-400 fill-yellow-400" /> 5 Estrelas no Google
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={11} className="text-green-400" /> Melhores Operadoras
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[320px] flex flex-col justify-center transition-all duration-500">
                <AnimatePresence mode="wait">
                  {!enviado ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d1f3c] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input
                          type="text" required placeholder="Ex: João Silva"
                          value={nome} onChange={e => setNome(e.target.value)}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        />
                        <input
                          type="tel" required placeholder="Ex: 11 99999-9999"
                          value={whatsapp} onChange={e => setWhatsapp(formatWhatsapp(e.target.value))}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        />
                        {erro && <p className="text-red-500 text-xs px-2">{erro}</p>}
                        <button type="submit" disabled={loading}
                          className="w-full bg-[#0d1f3c] hover:bg-blue-700 disabled:bg-slate-300 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          {loading ? "Enviando..." : <><MessageCircle size={16} /> Quero minha cotação
      <ScrollCTA produto="Plano de Saúde" />
</>}
                        </button>
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                          <span className="text-[9px] text-slate-400 font-bold">🔒 Dados sigilosos</span>
                          <span className="text-[9px] text-slate-400 font-bold">⚡ Resposta em até 2h</span>
                          <span className="text-[9px] text-slate-400 font-bold">🚫 Sem spam</span>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <PartyPopper size={40} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-[#0d1f3c] italic">Perfeito, {nome.split(" ")[0]}!</h3>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed">
                          Em instantes você vai receber uma mensagem no WhatsApp. Fique de olho!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERADORAS */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-slate-400 text-[10px] font-black uppercase tracking-widest mb-8">Algumas das operadoras que trabalhamos</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {operadoras.map(op => (
              <div key={op.nome} className="bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center" style={{ height: "80px", padding: "12px 20px", backgroundColor: "#ffffff" }}>
                <img src={op.logo} alt={op.nome}
                  style={{ maxHeight: "48px", maxWidth: "100%", width: "auto", objectFit: "contain" }}
                  onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
                />
                <span style={{ display: "none" }} className="text-slate-600 text-sm font-bold text-center">{op.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1f3c] italic mb-2">Por que escolher a Elevance?</h2>
            <p className="text-slate-500 font-medium">Atendimento de corretor de verdade, não de plataforma</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <div
                className="bg-white rounded-[30px] p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#0d1f3c] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm leading-relaxed font-medium">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0d1f3c] rounded-[50px] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
            <div className="lg:w-1/2 space-y-8 z-10">
              <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Como funciona</span>
              <h2 className="text-3xl md:text-4xl font-black italic">Simples assim.</h2>
              <div className="space-y-6">
                {[
                  { n: "01", titulo: "Preencha o formulário", desc: "Só nome e WhatsApp. Leva 10 segundos." },
                  { n: "02", titulo: "Receba a mensagem", desc: "Nosso assistente te manda uma mensagem e entende o que você precisa." },
                  { n: "03", titulo: "Escolha seu plano", desc: "Rodrigo apresenta as melhores opções e te ajuda a decidir." },
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="min-w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xs flex-shrink-0">{p.n}</div>
                    <div>
                      <div className="text-white font-black text-sm uppercase tracking-wide italic mb-1">{p.titulo}</div>
                      <div className="text-slate-400 text-sm font-medium leading-relaxed">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full z-10">
              <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/10 text-center">
                <h4 className="text-xl md:text-2xl font-black mb-2 italic">Pronto para cuidar da sua saúde?</h4>
                <p className="text-slate-400 text-sm font-medium mb-8">Cotação gratuita e sem compromisso</p>
                <a href={`https://wa.me/${MEU_NUMERO}?text=Olá Rodrigo, vim pelo site e quero cotar um plano de saúde`}
                  target="_blank" rel="noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-400 text-white font-black py-5 rounded-2xl transition-all uppercase text-xs tracking-widest shadow-lg flex items-center justify-center gap-2">
                  <MessageCircle size={16} /> Solicitar via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1f3c] italic mb-2">O que dizem nossos clientes</h2>
            <p className="text-slate-500 font-medium">Pessoas reais, resultados reais</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { inicial: "S", nome: "Simone", local: "São Roque, SP", produto: "Plano de Saúde", texto: "Agradeço de coração todo seu empenho. Precisando, logicamente vou te procurar novamente." },
              { inicial: "W", nome: "Warlei", local: "Ouro Fino, MG", produto: "Seguro Auto", texto: "Agradeço pela atenção! Pelas dúvidas sanadas e por conseguir o melhor preço." },
            ].map((d, i) => (
              <div
                className="bg-white rounded-[30px] p-8 shadow-sm border border-slate-100">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic font-medium">&ldquo;{d.texto}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0d1f3c] font-black text-sm">{d.inicial}</div>
                  <div>
                    <div className="font-black text-[#0d1f3c] text-sm">{d.nome}</div>
                    <div className="text-slate-400 text-xs font-medium">{d.local} · {d.produto}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-[#0d1f3c] italic text-center mb-12">Dúvidas frequentes</h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button onClick={() => setFaqAberto(faqAberto === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-black text-[#0d1f3c] text-sm uppercase tracking-wide pr-4 italic">{item.q}</span>
                  <span className="text-blue-600 text-xl flex-shrink-0 font-black">{faqAberto === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {faqAberto === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} style={{ overflow: "hidden" }}>
                      <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed font-medium">{item.r}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0d1f3c] rounded-[50px] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-white italic">Ainda tem dúvidas?</h2>
              <p className="text-slate-300 font-medium">Fale diretamente com o Rodrigo no WhatsApp</p>
              <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, vim pelo site e quero saber mais sobre plano de saúde`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
                <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d1f3c] py-8 px-4 text-center">
        <img src="/logos/elevance-dark-horizontal-white.png" alt="Elevance Seguros" className="h-8 w-auto mx-auto mb-3 opacity-80" loading="lazy" />
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">© 2026 Elevance Seguros · São Paulo, SP</p>
        <p className="text-slate-600 text-xs mt-1">
          <a href="https://www.elevanceseguros.com" className="hover:text-white/60 transition-colors text-white/30">elevanceseguros.com</a>
        </p>
      </footer>
    </div>
  );
}
