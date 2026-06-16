import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Car, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Star, Users, LayoutList } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ScrollCTA from '@/components/ScrollCTA';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const beneficios = [
  { icon: <ShieldCheck size={28} className="text-yellow-300" />, titulo: "Cobertura Completa", desc: "Proteção contra roubo, furto, colisão e danos a terceiros." },
  { icon: <Car size={28} className="text-blue-600" />, titulo: "Carro Reserva", desc: "Veículo reserva enquanto o seu está em reparo." },
  { icon: <Zap size={28} className="text-blue-600" />, titulo: "Socorro 24h", desc: "Assistência imediata em qualquer situação na estrada." },
  { icon: <Star size={28} className="text-blue-600" />, titulo: "Melhor Preço", desc: "Comparamos várias seguradoras para garantir o melhor custo." },
];

const tabela = [
  { perfil: "Veículo até R$ 40k · Motorista 30 anos", franquia: "R$ 2.800", mensalidade: "R$ 120 – R$ 180" },
  { perfil: "Veículo até R$ 80k · Motorista 35 anos", franquia: "R$ 3.200", mensalidade: "R$ 200 – R$ 320" },
  { perfil: "Veículo até R$ 150k · Motorista 40 anos", franquia: "R$ 4.500", mensalidade: "R$ 350 – R$ 520" },
];

const depoimento = {
  inicial: "W", nome: "Warlei", local: "Ouro Fino, MG", produto: "Seguro Auto",
  texto: "Agradeço pela atenção! Pelas dúvidas sanadas e por conseguir o melhor preço no meu seguro auto. Recomendo o Rodrigo sem hesitar."
};

export default function SeguroAutoPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = (formData.get('whatsapp') || '').replace(/[^0-9]/g, '');
    const veiculo = (formData.get('veiculo') || '').trim();
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, whatsapp, produto: 'Seguro Auto', origem: window.location.pathname, detalhes: veiculo ? { veiculo } : null }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Seguro Auto SP | Cotação Gratuita</title>
        <meta name="description" content="Seguro auto em São Paulo com as melhores seguradoras. Cobertura completa, melhor preço. Cotação gratuita via WhatsApp." />
        <link rel="canonical" href="https://www.elevanceseguros.com/seguro-auto" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Seguro Auto", "item": "https://www.elevanceseguros.com/seguro-auto"}
          ]
        })}`}</script>
              <meta name="keywords" content="seguro auto São Paulo, seguro carro SP, cotação seguro auto SP 2026, seguro auto barato São Paulo, seguro auto online SP" />
              <meta property="og:type" content="website" />
        <meta property="og:title" content="Seguro Auto em São Paulo | Cotação Gratuita - Elevance" />
        <meta property="og:description" content="Compare seguradoras e encontre o melhor seguro auto em SP. Allianz, Porto, HDI, Tokio Marine. Cotação gratuita." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80" />
        <meta property="og:url" content="https://www.elevanceseguros.com/seguro-auto" />
        <meta property="og:site_name" content="Elevance Seguros" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguro Auto em São Paulo | Cotação Gratuita - Elevance" />
        <meta name="twitter:description" content="Compare seguradoras e encontre o melhor seguro auto em SP. Allianz, Porto, HDI, Tokio Marine. Cotação gratuita." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80" />
      </Helmet>

      <CorretorHero operadora="um Seguro Auto" />

      {/* HERO */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 bg-[#1e3a5f] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">Proteção Completa</span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
                Seu carro está protegido se <span className="text-blue-600">alguém bater nele hoje?</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                Comparamos as <span className="text-gold-gradient font-black uppercase">principais seguradoras</span> e encontramos a melhor cobertura pelo menor preço para você.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {["Cobertura contra roubo, furto e colisão","Assistência 24h na estrada","Carro reserva disponível","Proteção a terceiros","Vidros e retrovisores inclusos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-white/70 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[320px] flex flex-col justify-center">
                
                  {!sent ? (
                    <div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d1f3c] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input name="nome" type="text" required placeholder="Ex: João Silva" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="Ex: 11 99999-9999" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <input name="veiculo" type="text" placeholder="Modelo e ano do veículo (opcional)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
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

      {/* BENEFÍCIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0d1f3c] italic text-center mb-12">O que está incluso?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <div
                className="bg-slate-50 rounded-[30px] p-8 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#0d1f3c] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm font-medium leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABELA + DEPOIMENTO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Tabela de preços */}
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-[#0d1f3c] p-6 text-white flex items-center gap-3">
                <LayoutList className="w-5 h-5 opacity-80" />
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Valores Referenciais</h2>
                  <p className="text-white/70 text-xs mt-0.5">SP 2026 · Varia por perfil e seguradora</p>
                </div>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-50 text-left">
                      <th className="py-3 font-bold text-slate-400 text-xs uppercase">Perfil</th>
                      <th className="py-3 font-bold text-slate-600 text-xs uppercase">Franquia</th>
                      <th className="py-3 font-bold text-[#0d1f3c] text-xs uppercase">Mensalidade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {tabela.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">{item.perfil}</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">{item.franquia}</td>
                        <td className="py-3 font-black text-sm text-[#0d1f3c]">{item.mensalidade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-slate-400 italic mt-3">*Valores referenciais. Variam por seguradora, perfil e cidade.</p>
                <button
                  onClick={() => window.open("https://wa.me/" + MEU_NUMERO + "?text=Ol%C3%A1+Rodrigo%2C+quero+cotar+Seguro+Auto", "_blank")}
                  className="w-full mt-5 bg-[#0d1f3c] hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2">
                  Cotar Meu Seguro <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Depoimento + seguradoras */}
            <div className="flex flex-col gap-6">
              {/* Depoimento */}
              <div className="bg-white p-6 rounded-[30px] shadow-xl border border-slate-100 flex-1">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic font-medium">&ldquo;{depoimento.texto}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0d1f3c] flex items-center justify-center text-white font-black text-sm shrink-0">
                    {depoimento.inicial}
                  </div>
                  <div>
                    <div className="font-black text-[#0d1f3c] text-sm">{depoimento.nome}</div>
                    <div className="text-slate-400 text-xs font-medium">{depoimento.local} · {depoimento.produto}</div>
                  </div>
                </div>
              </div>

              {/* Seguradoras parceiras */}
              <div className="bg-[#0d1f3c] rounded-[30px] p-6 text-white relative overflow-hidden shadow-xl">
                <h3 className="text-xl font-black mb-2">Seguradoras Parceiras</h3>
                <p className="text-blue-100 text-sm font-medium mb-5">Cotamos nas principais do mercado para você ter o melhor preço.</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {nome: "Porto Seguro", logo: "/logos/portoauto.webp"},
                    {nome: "Tokio Marine", logo: "/logos/tokio.webp"},
                    {nome: "Allianz", logo: "/logos/allianz.webp"},
                    {nome: "Bradesco Seguros", logo: "/logos/bradescoauto.webp"},
                    {nome: "Suhai", logo: "/logos/suhai.webp"},
                    {nome: "HDI", logo: "/logos/hdi.webp"},
                  ].map((s, i) => (
                    <div key={i} className="bg-white rounded-xl py-2 px-2 flex items-center justify-center" style={{minHeight: 44}}>
                      <img src={s.logo} alt={s.nome} className="max-h-7 max-w-full object-contain" loading="lazy"
                        onError={(e) => { e.target.style.display="none"; e.target.nextSibling.style.display="block"; }} />
                      <span style={{display:"none"}} className="text-[10px] font-black text-slate-700 text-center">{s.nome}</span>
                    </div>
                  ))}
                </div>
                <Users className="absolute -right-8 -bottom-8 w-40 h-40 opacity-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#0d1f3c] rounded-[50px] p-12 text-center">
            <h2 className="text-3xl font-black text-white italic mb-3">Pronto para proteger seu carro?</h2>
            <p className="text-blue-100 font-medium mb-8">Cotação gratuita em minutos</p>
            <a href={"https://wa.me/" + MEU_NUMERO + "?text=Ol%C3%A1%2C+quero+cotar+um+Seguro+Auto"} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      
      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "Qual o valor médio do seguro auto em São Paulo em 2026?", resposta: "O valor varia muito conforme perfil do motorista, CEP, modelo do veículo e cobertura escolhida. Em São Paulo, um veículo popular de até R$ 60.000 para motorista de 30 a 40 anos custa entre R$ 120 e R$ 250 por mês. Para cotação personalizada, entre em contato." },
    { pergunta: "O que é coberto pelo seguro auto completo?", resposta: "O seguro auto completo cobre: colisão (mesmo quando você é o culpado), roubo e furto, incêndio e explosão, danos a terceiros (Responsabilidade Civil), assistência 24h com guincho e carro reserva. Vidros e retrovisores podem ser incluídos opcionalmente." },
    { pergunta: "Como funciona a franquia no seguro auto?", resposta: "A franquia é o valor que você paga em caso de sinistro antes de a seguradora cobrir o restante. Por exemplo, com franquia de R$ 3.000, se o conserto custar R$ 10.000, você paga R$ 3.000 e a seguradora paga R$ 7.000. Franquias maiores reduzem o valor do seguro anual." },
    { pergunta: "Seguro auto cobre o carro de terceiros também?", resposta: "Sim! A cobertura de Responsabilidade Civil (RC) cobre danos causados a veículos e pessoas de terceiros em acidentes onde você for o responsável. Os valores de RC variam conforme a apólice contratada." },
    { pergunta: "Consigo seguro auto com histórico de sinistros?", resposta: "Sim, mas o valor será mais alto. Cada sinistro nos últimos 3 anos aumenta o prêmio. Trabalhamos com várias seguradoras e encontramos a mais competitiva para o seu perfil, mesmo com histórico de acionamentos." }
  ]} />
      <ScrollCTA produto="Seguro Auto" />
    </>
  );
}
