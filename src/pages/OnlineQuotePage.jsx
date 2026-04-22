import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, CheckCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import Breadcrumb from '@/components/Breadcrumb';
import { getMetaTags } from '@/lib/seoConfig';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const OnlineQuotePage = () => {
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
    if (!nome.trim()) { setErro("Por favor, informe seu nome."); return; }
    const nums = whatsapp.replace(/\D/g, "");
    if (nums.length < 10) { setErro("WhatsApp inválido. Inclua DDD."); return; }
    
    setErro("");
    setLoading(true);
    
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome: nome.trim(), 
          whatsapp: nums, 
          origem: "elevanceseguros.com/online-quote",
          produto: "Cotação Geral Site" 
        }),
      });
      setEnviado(true);
    } catch {
      setErro("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const meta = getMetaTags({
    title: 'Cotação Online | Seguro Auto e Saúde',
    description: 'Faça sua cotação online de seguro auto, plano de saúde ou consórcio. É rápido, fácil e sem compromisso.',
    url: '/online-quote',
    keywords: 'cotação online, simulação seguro, preço seguro auto, valor plano de saúde'
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta['og:url']} />
      </Helmet>

      <Hero customTitle="Solicitar Cotação" />
      <Breadcrumb items={[{ name: 'Cotação Online', path: '/online-quote' }]} />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
              Simule Agora e Proteja o Que Importa
            </h2>
            <p className="text-gray-600 text-lg">
              Preencha apenas seu nome e WhatsApp. Nossa IA entrará em contato para entender sua necessidade e buscar as melhores opções do mercado.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {!enviado ? (
                <motion.div
                  key="form-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-[#1a3a52] mb-2">Seu Nome</label>
                      <input
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Nome completo"
                        className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-[#1a3a52] mb-2">Seu WhatsApp</label>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={e => setWhatsapp(formatWhatsapp(e.target.value))}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      />
                    </div>

                    {erro && <p className="text-red-500 text-sm font-medium">{erro}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl text-lg uppercase tracking-tighter"
                    >
                      {loading ? "Enviando..." : "SOLICITAR AGORA"}
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-green-100"
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-[#1a3a52] text-2xl font-black mb-4 uppercase tracking-tighter">Pronto!</h3>
                  <p className="text-slate-500 text-lg">Fique de olho no seu WhatsApp. Nossa equipe já recebeu sua solicitação!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineQuotePage;
