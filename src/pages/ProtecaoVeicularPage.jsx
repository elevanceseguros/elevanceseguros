import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Car, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Star, Users, LayoutList } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ScrollCTA from '@/components/ScrollCTA';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const beneficios = [
  { icon: <ShieldCheck size={28} className="text-green-400" />, titulo: "Sem Análise de Perfil", desc: "Aprovação imediata, sem consulta ao SPC/Serasa. Qualquer condutor habilitado pode usar." },
  { icon: <Car size={28} className="text-green-400" />, titulo: "Carro, Moto e Caminhão", desc: "Proteção para todos os tipos de veículo, incluindo frotas empresariais." },
  { icon: <Zap size={28} className="text-green-400" />, titulo: "Mensalidade até 50% menor", desc: "Sistema de rateio entre associados — sem fins lucrativos, mais economia para você." },
  { icon: <Star size={28} className="text-green-400" />, titulo: "Reboque até 1.000 km", desc: "Facility e APVS: assistência 24h com reboque de longa distância incluso." },
];

const tabela = [
  { perfil: "Moto até R$ 15k", parcela: "R$ 69 – R$ 99", associacao: "APVS / Facility" },
  { perfil: "Carro até R$ 50k", parcela: "R$ 99 – R$ 159", associacao: "APVS / Facility" },
  { perfil: "Carro até R$ 120k", parcela: "R$ 159 – R$ 249", associacao: "APVS / Facility" },
];

const depoimento = {
  inicial: "D", nome: "Diego", local: "Guarulhos, SP", produto: "Proteção Veicular",
  texto: "Tinha medo de contratar proteção veicular, mas o Rodrigo explicou tudo com clareza. Aprovei na hora, sem burocracia. Recomendo!"
};

export default function ProtecaoVeicularPage() {
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
        body: JSON.stringify({ nome, whatsapp, produto: 'Proteção Veicular', origem: window.location.pathname, detalhes: veiculo ? { veiculo } : null }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Proteção Veicular | APVS e Facility | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Proteção veicular com APVS Brasil e Facility em São Paulo. Sem análise de perfil, mensalidade até 50% menor que seguro. Cotação gratuita via WhatsApp." />
        <meta name="keywords" content="proteção veicular São Paulo, APVS Brasil SP, Facility proteção veicular, proteção veicular barata SP, proteção veicular moto São Paulo" />
        <link rel="canonical" href="https://www.elevanceseguros.com/protecao-veicular" />
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Proteção Veicular", "item": "https://www.elevanceseguros.com/protecao-veicular"}
          ]
        })}`}</script>
      </Helmet>

      <CorretorHero operadora="Proteção Veicular" />

      {/* HERO — fundo dividido: metade APVS azul, metade Facility verde */}
      <section className="relative pt-10 pb-0 overflow-hidden" style={{background: 'linear-gradient(135deg, #0033a0 0%, #0033a0 50%, #2a6b2a 50%, #1e5c1e 100%)'}}>
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">

          {/* Logos das duas associações */}
          <div className="flex items-center justify-center gap-8 pb-8">
            {/* APVS */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <img src="/logos/apvs_brasil.webp" alt="APVS Brasil" className="h-10 object-contain" />
                <img src="/logos/apvs_truck.webp" alt="APVS Truck" className="h-10 object-contain" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-blue-200">14 anos de mercado</span>
            </div>

            {/* Divisor */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-12 bg-white/20"></div>
              <span className="text-white/40 text-xs font-bold">+</span>
              <div className="w-px h-12 bg-white/20"></div>
            </div>

            {/* Facility */}
            <div className="flex flex-col items-center gap-2">
              <img src="/logos/facility-branco.svg" alt="Facility" className="h-9 object-contain" />
              <span className="text-[9px] font-black uppercase tracking-widest text-green-200">Nº 1 no Reclame Aqui</span>
            </div>
          </div>

          {/* Hero grid */}
          <div className="flex flex-col lg:flex-row items-center gap-12 pb-16">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
                Tem Facility, tá tranquilo.<br/>
                <span className="text-yellow-300">Tem APVS, tá protegido.</span>
              </h1>
              <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium">
                A Elevance trabalha com as duas maiores redes de proteção veicular do Brasil. Comparamos e indicamos a melhor para o seu perfil e veículo.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {[
                  "Sem análise de perfil ou consulta ao SPC/Serasa",
                  "Cobertura para carro, moto e caminhão",
                  "Assistência 24h — reboque, chaveiro, pane",
                  "Mensalidade até 50% menor que seguro tradicional",
                  "Carro reserva em caso de sinistro",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulário */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 p-8 relative">
                {!sent ? (
                  <>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d1f3c] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                      <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <input name="nome" type="text" required placeholder="Seu nome" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-green-500 transition-all" />
                      <input name="whatsapp" type="tel" required placeholder="WhatsApp com DDD" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-green-500 transition-all" />
                      <input name="veiculo" type="text" placeholder="Modelo e ano do veículo (opcional)" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-green-500 transition-all" />
                      <div className="flex items-center justify-center gap-1.5 bg-green-50 border border-green-100 rounded-xl py-2 px-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block"></span>
                        <span className="text-[10px] font-black text-green-700">Comparamos APVS e Facility para você · Grátis</span>
                      </div>
                      <button type="submit" className="w-full bg-[#0d1f3c] hover:bg-blue-900 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                        QUERO MINHA COTAÇÃO GRÁTIS <MessageCircle size={16} />
                      </button>
                      <div className="flex items-center justify-center gap-3 flex-wrap">
                        <span className="text-[9px] text-slate-400 font-bold">🔒 Dados sigilosos</span>
                        <span className="text-[9px] text-slate-400 font-bold">⚡ Resposta em até 2h</span>
                        <span className="text-[9px] text-slate-400 font-bold">🚫 Sem spam</span>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center space-y-6 py-4">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto"><PartyPopper size={40} /></div>
                    <h3 className="text-2xl font-black text-[#0d1f3c] italic">Solicitação Enviada!</h3>
                    <p className="text-slate-500 text-sm">Fique atento ao seu WhatsApp — vamos comparar APVS e Facility e indicar a melhor opção para você. 😊</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVO APVS vs FACILITY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0d1f3c] italic text-center mb-3">APVS Brasil vs Facility</h2>
          <p className="text-slate-500 text-center text-sm mb-10 max-w-xl mx-auto">Trabalhamos com as duas. Veja as diferenças e entenda qual faz mais sentido para o seu perfil.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse max-w-3xl mx-auto">
              <thead>
                <tr>
                  <th className="p-4 text-left text-xs font-black uppercase text-slate-400 tracking-widest">Critério</th>
                  <th className="p-4 text-center bg-blue-50 rounded-tl-2xl">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-black text-[#0033a0]">APVS Brasil</span>
                      <span className="text-[9px] text-slate-400">14+ anos · América Latina</span>
                    </div>
                  </th>
                  <th className="p-4 text-center bg-green-50 rounded-tr-2xl">
                    <div className="flex flex-col items-center gap-1">
                      <img src="/logos/facility-branco.svg" alt="Facility" className="h-5 object-contain" style={{filter: 'invert(35%) sepia(80%) saturate(500%) hue-rotate(90deg)'}} />
                      <span className="text-[9px] text-slate-400">Nº 1 Reclame Aqui</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Cobertura roubo/furto", "✓ 100% FIPE", "✓ 100% FIPE"],
                  ["Cobertura colisão", "✓ Inclusa", "✓ Inclusa"],
                  ["Assistência 24h", "✓ Nacional", "✓ Nacional"],
                  ["Reboque", "✓ Ilimitado", "✓ Até 1.000 km"],
                  ["Carro reserva", "✓ Em sinistros", "✓ Em sinistros"],
                  ["Clube de vantagens", "✓ Disponível", "✓ Cashback + descontos"],
                  ["Fenômenos da natureza", "✓ Incluso", "✓ Incluso"],
                  ["Vidros e retrovisores", "✓ Incluso", "✓ Incluso"],
                  ["Franquia roubo/furto", "✓ Isento", "✓ Isento"],
                  ["App associado", "✓ APVS App", "✓ Facility App"],
                ].map(([criterio, apvs, facility], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-3 px-4 font-semibold text-slate-600">{criterio}</td>
                    <td className="py-3 px-4 text-center text-blue-700 font-bold text-xs">{apvs}</td>
                    <td className="py-3 px-4 text-center text-green-700 font-bold text-xs">{facility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">A Elevance compara as duas e indica qual é mais vantajosa para o seu veículo e região.</p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0d1f3c] italic text-center mb-10">Por que escolher proteção veicular?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, i) => (
              <div key={i} className="bg-white rounded-[30px] p-8 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{b.icon}</div>
                <div className="font-black text-[#0d1f3c] text-sm uppercase tracking-wide mb-2 italic">{b.titulo}</div>
                <div className="text-slate-500 text-sm font-medium leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABELA + DEPOIMENTO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-[#0d1f3c] p-6 text-white flex items-center gap-3">
                <LayoutList className="w-5 h-5 opacity-80" />
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Valores de Referência</h2>
                  <p className="text-white/70 text-xs mt-0.5">APVS e Facility · SP 2026</p>
                </div>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-50 text-left">
                      <th className="py-3 font-bold text-slate-400 text-xs uppercase">Veículo</th>
                      <th className="py-3 font-bold text-slate-600 text-xs uppercase">Mensalidade</th>
                      <th className="py-3 font-bold text-[#0d1f3c] text-xs uppercase">Associação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {tabela.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-sm">{item.perfil}</td>
                        <td className="py-3 font-black text-[#0d1f3c] text-sm">{item.parcela}</td>
                        <td className="py-3 text-green-600 font-bold text-xs">{item.associacao}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-slate-400 italic mt-3">*Valores referenciais. Variam por modelo, cidade e associação.</p>
                <button
                  onClick={() => window.open("https://wa.me/" + MEU_NUMERO + "?text=Ol%C3%A1%2C+quero+cotar+Prote%C3%A7%C3%A3o+Veicular", "_blank")}
                  className="w-full mt-5 bg-[#0d1f3c] hover:bg-blue-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2">
                  Cotar Minha Proteção <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-[30px] shadow-xl border border-slate-100 flex-1">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic font-medium">&ldquo;{depoimento.texto}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0d1f3c] flex items-center justify-center text-white font-black text-sm shrink-0">{depoimento.inicial}</div>
                  <div>
                    <div className="font-black text-[#0d1f3c] text-sm">{depoimento.nome}</div>
                    <div className="text-slate-400 text-xs font-medium">{depoimento.local} · {depoimento.produto}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] p-6 text-white relative overflow-hidden shadow-xl" style={{background: 'linear-gradient(135deg, #0033a0, #1e5c1e)'}}>
                <h3 className="text-xl font-black mb-2">Seguro Auto vs Proteção Veicular</h3>
                <p className="text-white/70 text-sm font-medium mb-4">A proteção veicular é ideal para quem busca economia sem abrir mão da segurança.</p>
                <div className="space-y-2">
                  {[
                    "Sem análise de perfil ou histórico",
                    "Sem consulta ao SPC/Serasa",
                    "Mensalidade até 50% menor",
                    "Regulamentada pela Lei Complementar 213/2025",
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-[50px] p-12 text-center" style={{background: 'linear-gradient(135deg, #0033a0 0%, #1e5c1e 100%)'}}>
            <div className="flex items-center justify-center gap-6 mb-6">
              <img src="/logos/apvs_brasil.webp" alt="APVS" className="h-8 object-contain opacity-80" />
              <span className="text-white/30 text-2xl font-thin">+</span>
              <img src="/logos/facility-branco.svg" alt="Facility" className="h-7 object-contain" />
            </div>
            <h2 className="text-3xl font-black text-white italic mb-3">Proteja seu veículo agora</h2>
            <p className="text-white/70 font-medium mb-8">A Elevance compara APVS e Facility e indica a melhor opção para você</p>
            <a href={"https://wa.me/" + MEU_NUMERO + "?text=Ol%C3%A1%2C+quero+cotar+Prote%C3%A7%C3%A3o+Veicular"} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-105">
              <MessageCircle size={18} /> Chamar no WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <FAQ perguntas={[
        { pergunta: "Qual a diferença entre APVS e Facility?", resposta: "As duas são associações de proteção veicular sem fins lucrativos com coberturas similares. A APVS Brasil é a maior da América Latina com mais de 280 mil associados. A Facility é reconhecida como nº 1 no Reclame Aqui e destaca-se pelo clube de vantagens com cashback. A Elevance analisa seu perfil e indica qual entrega mais para você." },
        { pergunta: "Qual a diferença entre proteção veicular e seguro auto?", resposta: "O seguro auto é regulado pela SUSEP e oferece solidez jurídica total. A proteção veicular é um sistema de rateio entre associados, regulamentada pela Lei Complementar 213/2025. A principal vantagem da proteção veicular é o custo — até 50% menor — e a ausência de análise de perfil." },
        { pergunta: "A proteção veicular cobre motos?", resposta: "Sim. Tanto APVS quanto Facility cobrem motos de qualquer cilindrada, com proteção contra roubo, furto e colisão, além de assistência 24h." },
        { pergunta: "Carros de leilão ou GNV têm cobertura?", resposta: "Sim. Diferente de muitas seguradoras tradicionais, as associações de proteção veicular aceitam carros de leilão, com GNV e veículos que costumam ser recusados pelo mercado tradicional." },
        { pergunta: "Quanto custa a proteção veicular em SP?", resposta: "Os valores variam por modelo, ano e associação escolhida, mas em geral ficam entre R$ 99 e R$ 249 por mês para veículos populares em São Paulo — geralmente 30% a 50% mais barato que o seguro auto tradicional para perfis de maior risco." },
      ]} />
      <ScrollCTA produto="Proteção Veicular" />
    </>
  );
}
