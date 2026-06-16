import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, ShieldCheck, Zap, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Star, Flame , LayoutList} from 'lucide-react';
import FAQ from '@/components/FAQ';
import ScrollCTA from '@/components/ScrollCTA';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const coberturas = [
  { icon: <Flame size={28} className="text-yellow-300" />, titulo: "Incêndio e Explosão", desc: "Cobertura para danos causados por incêndio, explosão e queda de raio." },
  { icon: <Home size={28} className="text-amber-600" />, titulo: "Roubo e Furto", desc: "Proteção do seu patrimônio contra roubo qualificado e furto simples." },
  { icon: <ShieldCheck size={28} className="text-amber-600" />, titulo: "Danos Elétricos", desc: "Cobertura para equipamentos danificados por variação de tensão." },
  { icon: <Star size={28} className="text-amber-600" />, titulo: "Assistência 24h", desc: "Eletricista, encanador, chaveiro e vidraceiro quando você precisar." },
];

export default function SeguroResidencialPage() {
  const [sent, setSent] = useState(false);
  const [imovel, setImovel] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = (formData.get('whatsapp') || '').replace(/[^0-9]/g, '');
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, whatsapp, produto: 'Seguro Residencial', origem: window.location.pathname, detalhes: imovel ? { imovel } : null }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Seguro Residencial SP | Cotação Gratuita</title>
        <meta name="description" content="Seguro residencial para sua casa ou apartamento em SP. Cobertura contra incêndio, roubo, danos elétricos e assistência 24h. Cotação gratuita via WhatsApp." />
        <meta name="keywords" content="seguro residencial SP, seguro casa São Paulo, seguro apartamento SP, cotação seguro residencial" />
        <link rel="canonical" href="https://www.elevanceseguros.com/seguro-residencial" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Seguro Residencial", "item": "https://www.elevanceseguros.com/seguro-residencial"}
          ]
        })}`}</script>
              <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital em São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="um Seguro Residencial" />

      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 bg-[#78350f] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Proteção do seu Lar</span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
                Um incêndio ou roubo pode <br className="hidden md:block" />
                <span className="text-amber-600">destruir anos de conquista.</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                O seguro residencial protege seu imóvel e patrimônio contra <span className="text-amber-600 font-black uppercase">imprevistos</span> — incêndio, roubo, danos elétricos e muito mais.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {[
                  "Cobertura contra incêndio, explosão e queda de raio",
                  "Roubo e furto de bens do imóvel",
                  "Danos elétricos em equipamentos",
                  "Responsabilidade civil do proprietário",
                  "Assistência 24h: eletricista, encanador, chaveiro",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-row justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> A partir de R$ 25/mês
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={14} className="text-amber-600" /> Regulado pela SUSEP
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[320px] flex flex-col justify-center">
                
                  {!sent ? (
                    <div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d1f3c] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input name="nome" type="text" required placeholder="Ex: João Silva" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="Ex: 11 99999-9999" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-amber-500 transition-all" />
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">Imóvel próprio ou alugado? (opcional)</p>
                          <div className="grid grid-cols-2 gap-2">
                            {['Próprio', 'Alugado'].map((opt) => (
                              <button key={opt} type="button" onClick={() => setImovel(imovel === opt ? null : opt)}
                                className={`py-3 rounded-xl text-xs font-black uppercase transition-all ${imovel === opt ? 'bg-[#0d1f3c] text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 bg-orange-50 border border-orange-100 rounded-xl py-2 px-3">
                          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse inline-block"></span>
                          <span className="text-[10px] font-black text-orange-600">⚡ Cotação gratuita · Sem compromisso</span>
                        </div>
                        <button type="submit" className="w-full bg-[#0d1f3c] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          QUERO MINHA COTAÇÃO GRÁTIS <MessageCircle size={16} />
                        </button>
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">🔒 Dados sigilosos</span>
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">⚡ Resposta em até 2h</span>
                          <span className="text-[9px] text-slate-400 font-bold flex items-center gap-1">🚫 Sem spam</span>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto"><PartyPopper size={40} /></div>
                      <h3 className="text-2xl font-black text-[#0d1f3c] italic">Solicitação Enviada!</h3>
                      <p className="text-slate-500 text-sm">Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊</p>
                    </div>
                  )}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0d1f3c] italic text-center mb-12">O que está coberto?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coberturas.map((b, i) => (
              <div
                className="bg-amber-50 rounded-[30px] p-8 border border-amber-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#0d1f3c] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm font-medium leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabela + Depoimento */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Tabela de valores */}
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-[#0d1f3c] p-6 text-white flex items-center gap-3">
                <LayoutList className="w-5 h-5 opacity-80" />
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Valores Referenciais</h2>
                  <p className="text-white/70 text-xs mt-0.5">SP 2026 · Varia por cobertura e imóvel</p>
                </div>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-50 text-left">
                      <th className="py-3 font-bold text-slate-400 text-xs uppercase">Perfil do Imóvel</th>
                      <th className="py-3 font-bold text-slate-600 text-xs uppercase">Cobertura</th>
                      <th className="py-3 font-bold text-[#0d1f3c] text-xs uppercase">Mensalidade aprox.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">Apartamento até R$ 300k</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">Básica</td>
                        <td className="py-3 font-black text-sm text-[#0d1f3c]">R$ 30 – R$ 50</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">Apartamento até R$ 600k</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">Completa</td>
                        <td className="py-3 font-black text-sm text-[#0d1f3c]">R$ 65 – R$ 95</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">Casa até R$ 400k</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">Básica</td>
                        <td className="py-3 font-black text-sm text-[#0d1f3c]">R$ 45 – R$ 70</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">Casa até R$ 800k</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">Completa</td>
                        <td className="py-3 font-black text-sm text-[#0d1f3c]">R$ 90 – R$ 140</td>
                      </tr>
                  </tbody>
                </table>
                <p className="text-[10px] text-slate-400 italic mt-3">*Valores referenciais. Variam por seguradora, localização e coberturas escolhidas.</p>
                <a
                  href={`https://wa.me/5511920144864?text=Ol%C3%A1+Rodrigo%2C+quero+cotar+Seguro+Residencial`}
                  target="_blank" rel="noreferrer"
                  className="w-full mt-5 bg-[#0d1f3c] hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2">
                  Cotar Seguro Residencial <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Depoimento */}
            <div className="bg-white p-6 rounded-[30px] shadow-xl border border-slate-100 flex flex-col justify-center">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic font-medium">&ldquo;Tive um problema elétrico em casa e o seguro cobriu tudo. O Rodrigo me ajudou a escolher a cobertura certa e o processo de sinistro foi super tranquilo.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0d1f3c] flex items-center justify-center text-white font-black text-sm shrink-0">
                  A
                </div>
                <div>
                  <div className="font-black text-[#0d1f3c] text-sm">Ana Paula</div>
                  <div className="text-slate-400 text-xs font-medium">São Paulo, SP · Seguro Residencial</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0d1f3c] rounded-[50px] p-12 text-center">
            <h2 className="text-3xl font-black text-white italic mb-3">Proteja seu lar agora</h2>
            <p className="text-blue-100 font-medium mb-8">Cotação gratuita e sem compromisso</p>
            <a href={`https://wa.me/${MEU_NUMERO}?text=Olá, quero cotar um Seguro Residencial`} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      
      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "O que o seguro residencial cobre?", resposta: "O seguro residencial cobre: incêndio e explosão, danos elétricos (curto-circuito), roubo e furto de bens, danos causados por vendaval e granizo, responsabilidade civil do lar (danos ao vizinho), e assistência 24h (encanador, eletricista, chaveiro). Coberturas variam conforme a apólice." },
    { pergunta: "Apartamento alugado precisa de seguro residencial?", resposta: "Sim! Para imóveis alugados, o seguro residencial é obrigatório por lei (Lei do Inquilinato 8.245/91) como uma das formas de garantia locatícia. Além disso, protege o inquilino contra danos acidentais que poderiam ser cobrados pelo proprietário." },
    { pergunta: "Quanto custa o seguro residencial em SP?", resposta: "Para apartamentos em São Paulo, o seguro residencial básico começa em R$ 30 por mês. Para coberturas completas com roubo e danos elétricos, os valores ficam entre R$ 60 e R$ 120 mensais, dependendo do valor do imóvel e bens segurados." },
    { pergunta: "O seguro residencial cobre equipamentos eletrônicos?", resposta: "Depende da apólice. A cobertura básica inclui danos elétricos por curto-circuito nos equipamentos fixos do imóvel. Para eletrônicos portáteis (notebook, celular, TV), é necessário incluir a cobertura de 'equipamentos portáteis' ou 'danos a equipamentos elétricos'." }
  ]} />
      <ScrollCTA produto="Seguro Residencial" />
    </>
  );
}
