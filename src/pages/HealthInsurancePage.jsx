import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Users, Building, CheckCircle2, Loader2, Baby, Activity, Stethoscope, Send, ChevronRight } from 'lucide-react';
import FAQItem from '@/components/FAQItem';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const HealthInsurancePage = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatWhatsapp = (v) => {
    const nums = v.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 2) return nums;
    if (nums.length <= 7) return `(${nums.slice(0, 2)}) ${nums.slice(2)}`;
    return `(${nums.slice(0, 2)}) ${nums.slice(2, 7)}-${nums.slice(7)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome.trim()) { setErro("Informe seu nome."); return; }
    const nums = whatsapp.replace(/\D/g, "");
    if (nums.length < 10) { setErro("WhatsApp inválido."); return; }
    
    setErro("");
    setLoading(true);
    
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome: nome.trim(), 
          whatsapp: nums, 
          origem: "elevanceseguros.com/planos-de-saude",
          produto: "Plano de Saúde / Vida" 
        }),
      });
      setEnviado(true);
    } catch {
      setErro("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const planTypes = [
    {
      icon: <Users className="w-10 h-10 text-teal-600" />,
      title: "Plano Individual",
      desc: "Proteção completa para você com acesso aos melhores hospitais e médicos da região.",
      features: ["Cobertura ambulatorial e hospitalar", "Opção de coparticipação", "Reembolso de consultas"]
    },
    {
      icon: <Baby className="w-10 h-10 text-teal-600" />,
      title: "Plano Familiar",
      desc: "Cuide de quem você ama com condições especiais para incluir cônjuge e filhos.",
      features: ["Carência reduzida", "Desconto progressivo", "Pediatria e obstetrícia"]
    },
    {
      icon: <Building className="w-10 h-10 text-teal-600" />,
      title: "Plano Empresarial",
      desc: "A partir de 2 vidas (sócios ou funcionários). O melhor custo-benefício do mercado.",
      features: ["Custos até 40% menores", "Ampla rede credenciada", "Gestão de benefícios"]
    }
  ];

  const faqs = [
    { question: "Qual a diferença entre plano ambulatorial e hospitalar?", answer: "O ambulatorial cobre consultas e exames. O hospitalar cobre internações e cirurgias." },
    { question: "O que é carência?", answer: "É o tempo que você precisa aguardar após a contratação para utilizar determinados procedimentos." },
    { question: "Como funciona o reembolso?", answer: "Alguns planos permitem que você escolha médicos fora da rede e receba parte do valor pago de volta." }
  ];

  return (
    <>
      <Helmet>
        <title>Seguro Saúde Familiar e Empresarial | Cotação - Elevance Seguros</title>
        <meta name="description" content="Garanta a saúde da sua família e funcionários com os melhores planos de saúde." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1694185752018-2ff397cb99b4" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-900/80 to-teal-900/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Plano de Saúde e <br/><span className="text-teal-300">Seguro de Vida</span>
              </h1>
              <p className="text-xl text-teal-50 mb-8 max-w-xl">
                Sua saúde é seu maior patrimônio. Receba agora uma cotação personalizada com o melhor custo-benefício.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
              <AnimatePresence mode="wait">
                {!enviado ? (
                  <div className="bg-white/95 backdrop-blur shadow-2xl p-8 rounded-3xl border border-white/20">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Receber Cotação Grátis</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                        <input
                          type="text"
                          required
                          value={nome}
                          onChange={e => setNome(e.target.value)}
                          placeholder="Ex: João Silva"
                          className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp</label>
                        <input
                          type="tel"
                          required
                          value={whatsapp}
                          onChange={e => setWhatsapp(formatWhatsapp(e.target.value))}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-gray-900"
                        />
                      </div>
                      {erro && <p className="text-red-500 text-sm">{erro}</p>}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all text-lg shadow-xl"
                      >
                        {loading ? <Loader2 className="animate-spin" /> : <>SOLICITAR COTAÇÃO <Send className="w-5 h-5" /></>}
                      </button>
                    </form>
                  </div>
                ) : (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-12 rounded-3xl text-center shadow-2xl">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900">Solicitação Enviada!</h3>
                    <p className="text-gray-600 mt-2">Nossa equipe entrará em contato via WhatsApp em instantes.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plan Types */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">O plano ideal para cada momento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {planTypes.map((plan, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-teal-500">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">{plan.icon}</div>
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.desc}</p>
                <ul className="space-y-3">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Comuns</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-teal-600 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ainda tem dúvidas?</h2>
          <p className="text-xl mb-10 opacity-90">Fale diretamente com um especialista agora mesmo.</p>
          <a 
            href="https://wa.me/5511920144864" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-teal-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-teal-50 transition-all shadow-2xl"
          >
            CHAMAR NO WHATSAPP <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </>
  );
};

export default HealthInsurancePage;
