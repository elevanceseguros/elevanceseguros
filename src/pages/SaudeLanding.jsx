import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, CheckCircle, Phone, MessageCircle, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const LOGO_URL = "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/e18073f9377f3b37fca5a56ae103bbd5.png";

const operadoras = [
  { nome: "Amil", logo: "/logos/amil.png" },
  { nome: "Bradesco Saúde", logo: "/logos/bradesco.png" },
  { nome: "SulAmérica", logo: "/logos/sulamerica.png" },
  { nome: "Hapvida", logo: "/logos/hapvida.png" },
  { nome: "NotreDame", logo: "/logos/notredame.png" },
  { nome: "Unimed", logo: "/logos/unimed.png" },
  { nome: "Porto Seguro", logo: "/logos/portoseguro.svg" },
  { nome: "Alice", logo: "/logos/alice.webp", special: "alice" }, // Adicionei 'special' para identificar a Alice
];

const beneficios = [
  { icon: "🏥", titulo: "Rede credenciada ampla", desc: "Hospitais e clínicas em São Paulo e em todo Brasil" },
  { icon: "⚡", titulo: "Cotação em minutos", desc: "Você recebe opções no WhatsApp sem burocracia" },
  { icon: "🤝", titulo: "Atendimento humano", desc: "Fala direto com o corretor, sem call center" },
  { icon: "💰", titulo: "Melhor custo-benefício", desc: "Comparamos várias operadoras para você economizar" },
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

  const handleSubmit = async () => {
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
        <title>Plano de Saúde em São Paulo | Cotação Gratuita - Elevance Seguros</title>
        <meta name="description" content="Compare planos de saúde em São Paulo com a Elevance Seguros. Cotação gratuita e personalizada em minutos via WhatsApp. Amil, Bradesco, SulAmérica, Unimed e mais." />
        <meta name="keywords" content="plano de saúde São Paulo, cotação plano de saúde, plano de saúde barato SP, plano de saúde individual SP, plano de saúde familiar SP" />
        <meta property="og:title" content="Plano de Saúde em São Paulo | Cotação Gratuita - Elevance Seguros" />
        <meta property="og:description" content="Compare planos de saúde em São Paulo. Cotação gratuita em minutos via WhatsApp. Sem burocracia." />
        <meta property="og:url" content="https://saude.elevanceseguros.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://saude.elevanceseguros.com/preview.webp" />
        <link rel="canonical" href="https://saude.elevanceseguros.com" />
      </Helmet>

      {/* TOP BAR */}
      <div className="hidden lg:block bg-[#1a3a52] text-white py-2">
        <div className="container mx-auto px-4 flex justify-end gap-6 text-sm font-medium">
          <a href="tel:5511920144864" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
            <Phone className="w-4 h-4" /> (11) 92014-4864
          </a>
          <a href="https://wa.me/5511920144864" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-green-300 transition-colors">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <img src={LOGO_URL} alt="Elevance Seguros" className="w-12 h-auto object-contain" />
          </Link>
          <a
            href="https://wa.me/5511920144864"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1a3a52] via-[#244b6a] to-[#0f2333] pt-16 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-blue-100 text-sm font-medium">Planos de Saúde em São Paulo</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Plano de saúde que cabe no seu bolso,{" "}
              <span className="text-blue-300">sem enrolação</span>
            </h1>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Informe seu nome e WhatsApp. Em minutos você recebe opções personalizadas direto no seu celular.
            </p>

            {/* APRESENTAÇÃO */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <img
                src="/preview.webp"
                alt="Rodrigo Farias"
                className="w-14 h-14 rounded-full object-cover object-center border-2 border-blue-400"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="text-left">
                <div className="text-white font-semibold">Rodrigo Farias</div>
                <div className="text-slate-400 text-sm">Corretor de Seguros · São Paulo</div>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <AnimatePresence mode="wait">
              {!enviado ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto"
                >
                  <h2 className="text-[#1a3a52] font-bold text-xl mb-5 text-left">Receba sua cotação gratuita</h2>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5 text-left">Seu nome</label>
                    <input
                      type="text"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      placeholder="Como posso te chamar?"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5 text-left">Seu WhatsApp</label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={e => setWhatsapp(formatWhatsapp(e.target.value))}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 text-sm outline-none transition-all"
                    />
                  </div>

                  {erro && <p className="text-red-500 text-sm mb-3 text-left">{erro}</p>}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-[#1a3a52] hover:bg-[#132b3d] disabled:bg-slate-300 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    {loading ? "Enviando..." : <>Quero minha cotação gratuita <ChevronRight className="w-4 h-4" /></>}
                  </button>

                  <p className="text-slate-400 text-xs mt-3 text-center">🔒 Seus dados são confidenciais. Sem spam.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto"
                >
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-[#1a3a52] text-2xl font-bold mb-2">Perfeito, {nome.split(" ")[0]}!</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Em instantes você va recebe uma mensagem no WhatsApp. Fique de olho!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* OPERADORAS - SEÇÃO CORRIGIDA */}
      <section className="bg-slate-50 py-10 px-4 border-b border-slate-100">
        <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-6">Algumas das operadoras que trabalhamos</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {operadoras.map(op => {
            const isAlice = op.special === "alice";
            return (
              <div
                key={op.nome}
                className={`border border-slate-100 rounded-xl shadow-sm flex items-center justify-center overflow-hidden transition-all`}
                style={{
                  height: "90px",
                  // Alice preenche tudo com o rosa dela. Outras ficam em branco.
                  backgroundColor: isAlice ? "#f33291" : "#ffffff",
                  // Dá um respiro interno para os logos normais, mas não para a Alice.
                  padding: isAlice ? "0" : "12px 20px"
                }}
              >
                <img
                  src={op.logo}
                  alt={op.nome}
                  style={{
                    // Configuração geral responsiva
                    width: "auto",
                    maxWidth: "100%",
                    // Ajuste de preenchimento
                    height: isAlice ? "100%" : "auto",
                    maxHeight: isAlice ? "100%" : "48px",
                    objectFit: isAlice ? "cover" : "contain", // Alice preenche todo o box
                    width: isAlice ? "100%" : "auto", // Alice preenche toda a largura
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                
                />
                <span style={{ display: "none" }} className="text-slate-600 text-sm font-semibold text-center">{op.nome}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a52] text-center mb-2">Por que escolher a Elevance?</h2>
            <p className="text-slate-500 text-center mb-10">Atendimento de corretor de verdade, não de plataforma</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {beneficios.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{b.icon}</div>
                <div className="font-bold text-[#1a3a52] text-sm mb-1">{b.titulo}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-[#1a3a52] py-16 px-4">
        <div className="max-w-lg mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Como funciona</h2>
            <p className="text-slate-400 text-center mb-10">Simples assim</p>
          </motion.div>
          <div className="space-y-6">
            {[
              { n: "1", titulo: "Preencha o formulário", desc: "Só nome e WhatsApp. Leva 10 segundos." },
              { n: "2", titulo: "Receba a mensagem", desc: "Nosso assistente te manda uma mensagem e entende o que você precisa." },
              { n: "3", titulo: "Escolha seu plano", desc: "Rodrigo apresenta as melhores opções e te ajuda a decidir." },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4">
                <div className="min-w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{p.n}</div>
                <div>
                  <div className="text-white font-semibold mb-1">{p.titulo}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a52] text-center mb-10">Dúvidas frequentes</h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button onClick={() => setFaqAberto(faqAberto === i ? null : i)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-semibold text-[#1a3a52] text-sm pr-4">{item.q}</span>
                  <span className="text-blue-500 text-xl flex-shrink-0">{faqAberto === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {faqAberto === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} style={{ overflow: "hidden" }}>
                      <p className="px-5 pb-4 text-slate-500 text-sm leading-relaxed">{item.r}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* DEPOIMENTOS */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a52] text-center mb-2">O que dizem nossos clientes</h2>
            <p className="text-slate-500 text-center mb-10">Pessoas reais, resultados reais</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;Agradeço de coração todo seu empenho. Precisando, logicamente vou te procurar novamente.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1a3a52] font-bold text-sm">S</div>
                <div>
                  <div className="font-semibold text-[#1a3a52] text-sm">Simone</div>
                  <div className="text-slate-400 text-xs">São Roque, SP · Plano de Saúde</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;Agradeço pela atenção! Pelas dúvidas sanadas e por conseguir o melhor preço.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#1a3a52] font-bold text-sm">W</div>
                <div>
                  <div className="font-semibold text-[#1a3a52] text-sm">Warlei</div>
                  <div className="text-slate-400 text-xs">Ouro Fino, MG · Seguro Auto</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-br from-[#1a3a52] to-[#0f2333] py-16 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ainda tem dúvidas?</h2>
          <p className="text-slate-400 mb-8">Fale diretamente com o Rodrigo no WhatsApp</p>
          <a href="https://wa.me/5511920144864?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20plano%20de%20sa%C3%BAde"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-colors shadow-lg">
            <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f1f2e] py-8 px-4 text-center">
        <img src={LOGO_URL} alt="Elevance Seguros" className="w-10 h-auto mx-auto mb-3 opacity-70" />
        <p className="text-slate-500 text-xs">© 2026 Elevance Seguros · São Paulo, SP</p>
        <p className="text-slate-600 text-xs mt-1">
          <a href="https://elevanceseguros.com" className="hover:text-slate-400 transition-colors">elevanceseguros.com</a>
        </p>
      </footer>

    </div>
  );
}
