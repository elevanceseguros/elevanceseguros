import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { X, Zap, MessageCircle, PartyPopper } from 'lucide-react';

const MEU_NUMERO = "5511920144864";
const SESSION_KEY = 'elevance_exit_intent_shown';

// Rotas onde o exit-intent não deve aparecer (páginas de obrigado, admin, etc)
const ROTAS_EXCLUIDAS = ['/thank-you', '/obrigado', '/sagrada-familia/thank-you', '/admin-login', '/admin-dashboard'];

function getProdutoFromPath(pathname) {
  if (pathname.includes('seguro-auto') || pathname.includes('loovi')) return 'Seguro Auto';
  if (pathname.includes('seguro-vida')) return 'Seguro de Vida';
  if (pathname.includes('seguro-residencial')) return 'Seguro Residencial';
  if (pathname.includes('seguro-empresa')) return 'Seguro Empresarial';
  if (pathname.includes('responsabilidade-civil')) return 'Seguro de Responsabilidade Civil';
  if (pathname.includes('seguro-garantia')) return 'Seguro Garantia';
  if (pathname.includes('protecao-veicular')) return 'Proteção Veicular APVS';
  if (pathname.includes('consorcio')) return 'Consórcio';
  if (pathname.includes('odontologico')) return 'Plano Odontológico';
  if (pathname.includes('blog')) return 'Consultoria Geral';
  // operadoras e páginas regionais de saúde
  if (
    pathname.includes('hapvida') || pathname.includes('bradescosaude') || pathname.includes('amil') ||
    pathname.includes('medsenior') || pathname.includes('sulamerica') || pathname.includes('unimed') ||
    pathname.includes('porto') || pathname.includes('alice') || pathname.includes('plena-saude') ||
    pathname.includes('biovida') || pathname.includes('unihosp') || pathname.includes('garantia-saude') ||
    pathname.includes('trasmontano') || pathname.includes('sao-cristovao') || pathname.includes('sao-miguel') ||
    pathname.includes('encontre-seu-plano')
  ) return 'Plano de Saúde';
  return 'Consultoria Geral';
}

const ExitIntentModal = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const jaMostrado = useCallback(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === '1';
    } catch (_) {
      return false;
    }
  }, []);

  const marcarMostrado = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch (_) {}
  }, []);

  useEffect(() => {
    // Apenas desktop (mouseleave não existe de forma confiável em touch),
    // apenas uma vez por sessão, e nunca em páginas de obrigado/admin.
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (!isDesktop) return;
    if (ROTAS_EXCLUIDAS.includes(location.pathname)) return;
    if (jaMostrado()) return;

    let armed = false;
    const armTimer = setTimeout(() => { armed = true; }, 4000); // espera 4s antes de armar, evita disparo instantâneo

    const handleMouseLeave = (e) => {
      if (!armed) return;
      // Só dispara quando o mouse sai pela borda superior da janela (rumo à barra de endereço/aba)
      if (e.clientY <= 0 && !jaMostrado()) {
        setOpen(true);
        marcarMostrado();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      clearTimeout(armTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [location.pathname, jaMostrado, marcarMostrado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = (formData.get('whatsapp') || '').replace(/[^0-9]/g, '');
    const produto = getProdutoFromPath(location.pathname);
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, whatsapp, produto, origem: `exit-intent:${location.pathname}` }),
      });
    } catch (_) {}
    setSent(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSent(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(7,27,52,0.72)' }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[2rem] p-8 md:p-10"
            style={{ background: '#ffffff', boxShadow: '0 40px 100px rgba(7,27,52,0.4)' }}
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: '#F5F7FA', color: '#7A8899' }}
              aria-label="Fechar"
            >
              <X size={16} />
            </button>

            {!sent ? (
              <>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5"
                  style={{ background: '#FFF8EE', color: '#9B7A3A', border: '1px solid #F0E0C0' }}>
                  <Zap size={12} /> Antes de você ir
                </div>
                <h3 className="font-sora text-2xl font-bold italic mb-3" style={{ color: '#071B34' }}>
                  Quer uma cotação grátis em 2 minutos?
                </h3>
                <p className="text-sm font-light mb-6" style={{ color: '#7A8899' }}>
                  Deixa seu WhatsApp que o Rodrigo já te manda as melhores opções, sem compromisso.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="nome" type="text" required placeholder="Seu nome"
                    className="w-full rounded-xl py-3.5 px-5 text-sm outline-none transition-all font-medium"
                    style={{ background: '#F5F7FA', border: '1.5px solid #E8EDF2', color: '#071B34' }} />
                  <input name="whatsapp" type="tel" required placeholder="WhatsApp com DDD"
                    className="w-full rounded-xl py-3.5 px-5 text-sm outline-none transition-all font-medium"
                    style={{ background: '#F5F7FA', border: '1.5px solid #E8EDF2', color: '#071B34' }} />
                  <button type="submit"
                    className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
                    style={{ background: 'linear-gradient(135deg, #071B34 0%, #0d2a55 100%)', color: '#E8C98A' }}>
                    Quero Minha Cotação Grátis <MessageCircle size={14} />
                  </button>
                </form>
                <p className="text-[9px] text-center font-medium mt-4" style={{ color: '#A0AABA' }}>
                  🔒 Dados sigilosos · 🚫 Sem spam
                </p>
              </>
            ) : (
              <div className="text-center space-y-4 py-2">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{ background: '#F0FFF4', color: '#16a34a' }}>
                  <PartyPopper size={32} />
                </div>
                <h3 className="font-sora text-xl font-bold italic" style={{ color: '#071B34' }}>Solicitação enviada!</h3>
                <p className="text-sm font-light" style={{ color: '#7A8899' }}>Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
