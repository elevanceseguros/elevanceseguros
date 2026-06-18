import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, FileCheck, CheckCircle2, MessageCircle, PartyPopper, ArrowRight, Star, LayoutList, Scale, Building2, Briefcase } from 'lucide-react';
import FAQ from '@/components/FAQ';
import ScrollCTA from '@/components/ScrollCTA';
import CorretorHero from '@/components/CorretorHero';

const MEU_NUMERO = "5511920144864";

const modalidades = [
  { icon: <FileCheck size={28} className="text-emerald-300" />, titulo: "Garantia de Proposta", desc: "Garante que, ao vencer uma licitação, a empresa assina o contrato e cumpre os requisitos exigidos." },
  { icon: <Building2 size={28} className="text-emerald-600" />, titulo: "Garantia de Execução", desc: "Assegura a execução do contrato conforme os termos acordados. Exigida na maioria das obras e serviços públicos." },
  { icon: <Scale size={28} className="text-emerald-600" />, titulo: "Garantia Judicial", desc: "Substitui depósitos judiciais em processos administrativos, liberando capital de giro da empresa." },
  { icon: <Briefcase size={28} className="text-emerald-600" />, titulo: "Garantia de Adiantamento", desc: "Garante a devolução de valores pagos antecipadamente pelo contratante caso o serviço não seja executado." },
];

const tabela = [
  { modalidade: "Garantia de Proposta", quando: "Licitações públicas", custo: "0,5% – 1% do valor" },
  { modalidade: "Garantia de Execução", quando: "Contratos de obras e serviços", custo: "1% – 3% ao ano" },
  { modalidade: "Garantia Judicial", quando: "Processos judiciais/administrativos", custo: "2% – 5% ao ano" },
  { modalidade: "Garantia de Adiantamento", quando: "Contratos com pagamento antecipado", custo: "1% – 2% ao ano" },
];

export default function SeguroGarantiaPage() {
  const [sent, setSent] = useState(false);
  const [contrato, setContrato] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get('nome');
    const whatsapp = (formData.get('whatsapp') || '').replace(/[^0-9]/g, '');
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, whatsapp, produto: 'Seguro Garantia', origem: window.location.pathname, detalhes: contrato ? { contrato } : null }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Seguro Garantia em São Paulo | Licitações e Contratos | Elevance Seguros</title>
        <meta name="description" content="Seguro Garantia para licitações, obras públicas e contratos empresariais em SP. Garantia de proposta, execução, judicial e adiantamento. Cotação gratuita." />
        <meta name="keywords" content="seguro garantia SP, garantia licitação São Paulo, bid bond, performance bond, seguro garantia empresarial" />
        <link rel="canonical" href="https://www.elevanceseguros.com/seguro-garantia" />
      
        <script type="application/ld+json">{`${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.elevanceseguros.com"},
            {"@type": "ListItem", "position": 2, "name": "Seguro Garantia", "item": "https://www.elevanceseguros.com/seguro-garantia"}
          ]
        })}`}</script>
              <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevance Seguros" />
        <meta name="twitter:description" content="Corretora de seguros 100% digital em São Paulo." />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <CorretorHero operadora="Seguro Garantia" />

      {/* HERO */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 bg-[#052e22] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Seguro Garantia · Empresarial</span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight italic">
                Garanta contratos e <br className="hidden md:block" />
                <span className="text-emerald-600">proteja seu capital.</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-medium italic">
                O seguro garantia substitui a fiança bancária em licitações e contratos — sem comprometer o limite de crédito da sua empresa e com <span className="text-emerald-600 font-black uppercase">custo muito menor</span>.
              </p>
              <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                {[
                  "Obrigatório em licitações pela Lei 14.133/2021",
                  "Não compromete o limite de crédito bancário",
                  "Mais barato que fiança bancária e depósito em dinheiro",
                  "Cobre proposta, execução, adiantamento e garantia judicial",
                  "Aceito por órgãos públicos e grandes contratantes privados",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-row justify-center lg:justify-start gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> Exigido em licitações
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-white bg-white/15 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={14} className="text-emerald-600" /> Regulado pelo Banco Central
                </div>
              </div>
            </div>

            {/* FORMULÁRIO */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative min-h-[320px] flex flex-col justify-center">
                
                  {!sent ? (
                    <div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d1f3c] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input name="nome" type="text" required placeholder="Ex: João Silva"
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <input name="whatsapp" type="tel" required placeholder="Ex: 11 99999-9999"
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all" />
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">É para licitação ou contrato privado? (opcional)</p>
                          <div className="grid grid-cols-2 gap-2">
                            {['Licitação Pública', 'Contrato Privado'].map((opt) => (
                              <button key={opt} type="button" onClick={() => setContrato(contrato === opt ? null : opt)}
                                className={`py-3 rounded-xl text-[11px] font-black uppercase transition-all ${contrato === opt ? 'bg-[#0d1f3c] text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                        <button type="submit"
                          className="w-full bg-[#0d1f3c] hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                          QUERO MINHA COTAÇÃO GRÁTIS <MessageCircle size={16} />
                        </button>
                        <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic">
                          Entraremos em contato no seu WhatsApp em instantes
                        </p>
                      </form>
                    </div>
                  ) : (
                    <div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <PartyPopper size={40} />
                      </div>
                      <h3 className="text-2xl font-black text-[#0d1f3c] italic">Solicitação Enviada!</h3>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊
                      </p>
                    </div>
                  )}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Modalidades</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1f3c] italic">Qual garantia sua empresa precisa?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {modalidades.map((m, i) => (
              <div key={i} className="bg-emerald-50 rounded-[30px] p-6 hover:shadow-lg transition-all border border-emerald-100 space-y-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">{m.icon}</div>
                <h3 className="font-black text-[#0d1f3c] text-base">{m.titulo}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABELA + DEPOIMENTO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-[#0d1f3c] p-6 text-white flex items-center gap-3">
                <LayoutList className="w-5 h-5 opacity-80" />
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Custo por Modalidade</h2>
                  <p className="text-white/70 text-xs mt-0.5">SP 2026 · Valores referenciais</p>
                </div>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-50 text-left">
                      <th className="py-3 font-bold text-slate-400 text-xs uppercase">Modalidade</th>
                      <th className="py-3 font-bold text-slate-600 text-xs uppercase">Quando usar</th>
                      <th className="py-3 font-bold text-[#0d1f3c] text-xs uppercase">Custo aprox.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {tabela.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 text-slate-600 font-medium text-xs">{row.modalidade}</td>
                        <td className="py-3 text-slate-700 font-semibold text-sm">{row.quando}</td>
                        <td className="py-3 font-black text-sm text-[#0d1f3c]">{row.custo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-slate-400 italic mt-3">*Valores referenciais. Variam por seguradora, porte da empresa e histórico de crédito.</p>
                <a href={`https://wa.me/${MEU_NUMERO}?text=Ol%C3%A1+Rodrigo%2C+quero+cotar+Seguro+Garantia`}
                  target="_blank" rel="noreferrer"
                  className="w-full mt-5 bg-[#0d1f3c] hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2">
                  Solicitar Cotação de Garantia <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-[30px] shadow-xl border border-slate-100 flex flex-col justify-center">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic font-medium">&ldquo;Precisávamos de uma garantia de execução para um contrato público de R$ 2 milhões. O Rodrigo resolveu em 48 horas, sem burocracia e com custo muito abaixo do que o banco nos ofereceu. Fundamental para o negócio.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0d1f3c] flex items-center justify-center text-white font-black text-sm shrink-0">P</div>
                <div>
                  <div className="font-black text-[#0d1f3c] text-sm">Paulo</div>
                  <div className="text-slate-400 text-xs font-medium">São Paulo, SP · Seguro Garantia de Execução</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VANTAGEM vs FIANÇA BANCÁRIA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#0d1f3c] italic">Seguro Garantia vs Fiança Bancária</h2>
            <p className="text-slate-500 mt-2 font-medium">Por que o seguro garantia é a melhor escolha para sua empresa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { titulo: "Não compromete crédito", desc: "Diferente da fiança bancária, o seguro garantia não ocupa limite de crédito — preservando o capital de giro para outras operações.", cor: "emerald" },
              { titulo: "Custo menor", desc: "O prêmio do seguro garantia costuma ser de 1% a 3% ao ano, enquanto a taxa de fiança bancária pode chegar a 5% ao ano.", cor: "blue" },
              { titulo: "Emissão mais rápida", desc: "Com a documentação correta, o seguro garantia pode ser emitido em 24 a 72 horas — bem mais ágil do que processos bancários.", cor: "violet" },
            ].map((item, i) => (
              <div key={i} className={`bg-${item.cor}-50 rounded-[30px] p-6 border border-${item.cor}-100`}>
                <CheckCircle2 className={`w-8 h-8 text-${item.cor}-500 mb-3`} />
                <h3 className="font-black text-[#0d1f3c] text-base mb-2">{item.titulo}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-[#0d1f3c]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-white italic">Precisa de seguro garantia?</h2>
          <p className="text-white/80 text-base font-medium">Envie os dados do contrato ou licitação e receba uma cotação personalizada em até 24 horas.</p>
          <a href={`https://wa.me/${MEU_NUMERO}?text=Ol%C3%A1+Rodrigo%2C+preciso+de+Seguro+Garantia+para+um+contrato`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#22c55e] hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl">
            <MessageCircle size={18} /> Falar com Rodrigo no WhatsApp
          </a>
        </div>
      </section>

      <CorretorHero operadora="Seguro Garantia" />

      
      {/* FAQ */}
      <FAQ perguntas={[
    { pergunta: "O seguro garantia substitui a fiança bancária em licitações?", resposta: "Sim! O seguro garantia é aceito pela Lei de Licitações (14.133/2021) como substituto da fiança bancária e do depósito em dinheiro. Tem a vantagem de não comprometer o limite de crédito bancário da empresa, sendo geralmente mais barato que a fiança bancária." },
    { pergunta: "Quanto tempo leva para emitir o seguro garantia?", resposta: "Com a documentação completa (contrato, edital, dados da empresa e demonstrações financeiras), o seguro garantia pode ser emitido em 24 a 72 horas. Em casos mais complexos com capital acima de R$ 5 milhões, pode levar de 5 a 10 dias úteis." },
    { pergunta: "Empresas com restrição no SERASA conseguem seguro garantia?", resposta: "Depende da restrição e da seguradora. Restrições de pequeno valor ou relacionadas a disputas judiciais podem ser aceitas com análise. Porém, empresas com protestos relevantes ou em recuperação judicial geralmente não conseguem apólice. O corretor especializado pode indicar as seguradoras mais flexíveis." },
    { pergunta: "O seguro garantia cobre o prazo de um contrato inteiro?", resposta: "Sim! A vigência do seguro garantia acompanha o prazo do contrato. Se o contrato tiver aditivos de prazo, é necessário renovar ou aditar a apólice de garantia. O prêmio é calculado anualmente sobre o valor garantido." }
  ]} />
      <ScrollCTA produto="Seguro Garantia" />
    </>
  );
}
