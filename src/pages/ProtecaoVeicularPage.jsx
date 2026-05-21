import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Car, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Star, Users, LayoutList } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ScrollCTA from '@/components/ScrollCTA';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const beneficios = [
  { icon: <ShieldCheck size={28} className="text-teal-300" />, titulo: "Sem Análise de Perfil", desc: "Aprovação imediata, sem consulta ao SPC/Serasa." },
  { icon: <Car size={28} className="text-blue-600" />, titulo: "Rastreador Grátis", desc: "Rastreador instalado sem custo adicional." },
  { icon: <Zap size={28} className="text-blue-600" />, titulo: "Menor Mensalidade", desc: "Economia de até 50% comparado ao seguro tradicional." },
  { icon: <Star size={28} className="text-blue-600" />, titulo: "Maior da América Latina", desc: "APVS: maior rede de proteção veicular do continente." },
];

const tabela = [
  { perfil: "Moto até R$ 15k", parcela: "R$ 69 – R$ 99", rastreador: "Grátis" },
  { perfil: "Carro até R$ 50k", parcela: "R$ 99 – R$ 159", rastreador: "Grátis" },
  { perfil: "Carro até R$ 120k", parcela: "R$ 159 – R$ 249", rastreador: "Grátis" },
];

const depoimento = {
  inicial: "D", nome: "Diego", local: "Guarulhos, SP", produto: "Proteção Veicular APVS",
  texto: "Tinha medo de contratar proteção veicular, mas o Rodrigo explicou tudo com clareza. Aprovei na hora, sem burocracia e com rastreador grátis. Recomendo!"
};

export default function ProtecaoVeicularPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = (formData.get('whatsapp') || '').replace(/[^0-9]/g, '');
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, whatsapp, produto: 'Proteção Veicular APVS', origem: window.location.pathname }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Proteção Veicular APVS SP | Cotação Gratuita</title>
        <meta name="description" content="Proteção veicular APVS em São Paulo. Sem análise de perfil, rastreador grátis, menor mensalidade. Cotação gratuita via WhatsApp." />
        <link rel="canonical" href="https://www.elevanceseguros.com/protecao-veicular" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Proteção Veicular", "item": "https://www.elevanceseguros.com/protecao-veicular"}
          ]
        })}`}</script>
              <meta name="keywords" content="proteção veicular São Paulo, APVS Brasil SP, proteção veicular barata SP, proteção veicular moto São Paulo, proteção veicular sem análise perfil" />
              <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital em São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Proteção Veicular" />

      {/* HERO */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 bg-[#0033a0] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <img src="/logos/apvs_brasil.webp" alt="APVS Brasil" className="h-10" />
                <div className="w-px h-7 bg-white/30"/>
                <img src="/logos/apvs_truck.webp" alt="APVS Truck" className="h-12" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
                Seu carro pode ser roubado <span className="text-gold-gradient-bright">ainda hoje. Está protegido?</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                A <span className="text-gold-gradient font-black uppercase">maior rede de proteção veicular</span> da América Latina no seu carro ou moto. Sem consulta ao SPC/Serasa.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {["Aprovação imediata, sem análise de perfil","Rastreador instalado gratuitamente","Mensalidade até 50% menor que seguro tradicional","Cobertura para carro e moto","Assistência 24h em todo o Brasil"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" /> {item}
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
                        <div className="flex items-center justify-center gap-1.5 bg-orange-50 border border-orange-100 rounded-xl py-2 px-3">
                          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse inline-block"></span>
                          <span className="text-[10px] font-black text-orange-600">⚡ Cotação gratuita · Sem compromisso</span>
                        </div>
                        <button type="submit" className="w-full bg-[#0d1f3c] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          RECEBER CONTATO GRATUITO <MessageCircle size={16} />
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
          <h2 className="text-3xl font-black text-[#0d1f3c] italic text-center mb-12">Vantagens da Proteção Veicular</h2>
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

            {/* Tabela */}
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-[#0d1f3c] p-6 text-white flex items-center gap-3">
                <LayoutList className="w-5 h-5 opacity-80" />
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Valores Mensais APVS</h2>
                  <p className="text-white/70 text-xs mt-0.5">Rastreador incluso · Referência SP 2026</p>
                </div>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-50 text-left">
                      <th className="py-3 font-bold text-slate-400 text-xs uppercase">Veículo</th>
                      <th className="py-3 font-bold text-slate-600 text-xs uppercase">Mensalidade</th>
                      <th className="py-3 font-bold text-[#0d1f3c] text-xs uppercase">Rastreador</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {tabela.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-sm">{item.perfil}</td>
                        <td className="py-3 font-black text-[#0d1f3c] text-sm">{item.parcela}</td>
                        <td className="py-3 text-green-600 font-black text-sm">{item.rastreador}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-slate-400 italic mt-3">*Valores referenciais. Variam por modelo, cidade e associação.</p>
                <button
                  onClick={() => window.open("https://wa.me/" + MEU_NUMERO + "?text=Ol%C3%A1+Rodrigo%2C+quero+cotar+Prote%C3%A7%C3%A3o+Veicular+APVS", "_blank")}
                  className="w-full mt-5 bg-[#0d1f3c] hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2">
                  Cotar Minha Proteção <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Depoimento + diferenciais */}
            <div className="flex flex-col gap-6">
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

              <div className="bg-[#0d1f3c] rounded-[30px] p-6 text-white relative overflow-hidden shadow-xl">
                <h3 className="text-xl font-black mb-2">Seguro Auto vs Proteção Veicular</h3>
                <p className="text-blue-100 text-sm font-medium mb-4">A proteção veicular é ideal para quem busca economia sem abrir mão da segurança.</p>
                <div className="space-y-2">
                  {[
                    "Sem análise de perfil ou histórico",
                    "Sem consulta ao SPC/Serasa",
                    "Mensalidade até 50% menor",
                    "Rastreador instalado grátis",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-white/90">
                      <CheckCircle2 size={14} className="text-green-400 shrink-0" /> {item}
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
            <h2 className="text-3xl font-black text-white italic mb-3">Proteja seu veículo agora</h2>
            <p className="text-blue-100 font-medium mb-8">Sem burocracia, aprovação imediata</p>
            <a href={"https://wa.me/" + MEU_NUMERO + "?text=Ol%C3%A1%2C+quero+cotar+Prote%C3%A7%C3%A3o+Veicular+APVS"} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      
      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "Qual a diferença entre proteção veicular e seguro auto?", resposta: "O seguro auto é regulado pela SUSEP e oferece solidez jurídica total. A proteção veicular APVS é um contrato entre associados, geralmente mais acessível e sem análise de perfil rígida. Ambos cobrem roubo, furto e colisão, mas a proteção veicular costuma ter custo menor para perfis que as seguradoras penalizam." },
    { pergunta: "A proteção veicular APVS cobre motos?", resposta: "Sim! A APVS Brasil oferece proteção para motos com cobertura contra roubo, furto e colisão, além de assistência 24h. Uma das poucas opções do mercado que aceita motocicletas sem restrição de cilindrada." },
    { pergunta: "Carros modificados ou rebaixados têm cobertura?", resposta: "Sim! Diferente de muitas seguradoras tradicionais que recusam veículos modificados, a proteção veicular APVS aceita carros rebaixados, tuning e modificações estéticas, sem cobrança adicional pelo perfil do veículo." },
    { pergunta: "Quanto custa a proteção veicular APVS em SP?", resposta: "O valor varia conforme o modelo e ano do veículo, mas em geral fica entre R$ 100 e R$ 250 por mês para veículos populares em São Paulo. É comum ser 30% a 50% mais barato que o seguro auto tradicional para perfis de alto risco." }
  ]} />
      <ScrollCTA produto="Proteção Veicular" />
    </>
  );
}
