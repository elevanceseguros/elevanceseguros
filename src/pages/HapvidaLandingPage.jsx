import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, CheckCircle2, MapPin, Star, MessageCircle, Zap, ArrowRight, Users, Heart, Clock, Building2, ChevronDown } from 'lucide-react';
import ScrollCTA from '@/components/ScrollCTA';
import FAQ from '@/components/FAQ';

const MEU_NUMERO = "5511920144864";
const WPP_BASE = `https://wa.me/${MEU_NUMERO}?text=`;

const tabelaPrecos = [
  { idade: "00 a 18", enf: "R$ 133,10", apto: "R$ 190,47" },
  { idade: "19 a 23", enf: "R$ 133,10", apto: "R$ 190,47" },
  { idade: "24 a 28", enf: "R$ 183,52", apto: "R$ 262,68" },
  { idade: "29 a 33", enf: "R$ 183,52", apto: "R$ 262,68" },
  { idade: "34 a 38", enf: "R$ 234,86", apto: "R$ 336,09" },
  { idade: "39 a 43", enf: "R$ 234,86", apto: "R$ 336,09" },
  { idade: "44 a 48", enf: "R$ 324,01", apto: "R$ 463,61" },
  { idade: "49 a 53", enf: "R$ 406,46", apto: "R$ 581,66" },
  { idade: "54 a 58", enf: "R$ 528,40", apto: "R$ 756,16" },
  { idade: "59 ou +", enf: "R$ 739,76", apto: "R$ 1.058,39" },
];

const unidades = [
  { nome: "Hospital Renascença", local: "São Paulo · Capital", desc: "Hospital próprio de grande porte com UTI adulto/neonatal, maternidade e pronto-socorro 24h.", foto: "/hospitais/hapvida-renascenca.jpg" },
  { nome: "Hospital NotreCare", local: "São Bernardo do Campo · ABC", desc: "Única unidade com Medicina Fetal no ABC. Maternidade de alto risco, UTI e pronto-socorro.", foto: "/hospitais/hapvida-notrecare-abc.jpg" },
  { nome: "Hospital Modelo", local: "Sorocaba", desc: "Certificação ONA Nível 3, Método Canguru e Hospital Amigo da Criança.", foto: "/hospitais/hapvida-modelo-sorocaba.jpg" },
  { nome: "Diagnóstico Hapvida", local: "Campinas e Região", desc: "Exames de imagem, laboratoriais e telemedicina integrados ao plano sem burocracia.", foto: "/hospitais/hapvida-campinas.jpg" },
];

const diferenciais = [
  { icon: <Heart size={20} className="text-white" />, titulo: "Rede própria integrada", desc: "86 hospitais e 352 clínicas próprias. Sem pedido de autorização para a maioria dos atendimentos." },
  { icon: <Clock size={20} className="text-white" />, titulo: "Urgência em 24h", desc: "Cobertura para urgência e emergência a partir da contratação. Sem carência para casos graves." },
  { icon: <Zap size={20} className="text-white" />, titulo: "Super App Hapvida", desc: "Carteirinha digital, agendamentos, teleconsulta e exames — tudo no celular sem fila." },
  { icon: <Users size={20} className="text-white" />, titulo: "PF, PME e Adesão", desc: "Atende pessoa física, MEI, empresas e adesão via entidade de classe. A partir de 1 vida." },
  { icon: <ShieldCheck size={20} className="text-white" />, titulo: "Qualivida Preventivo", desc: "Programas de medicina preventiva incluídos sem custo adicional em todos os planos." },
  { icon: <Building2 size={20} className="text-white" />, titulo: "Cobertura nacional", desc: "Rede própria em todo o Brasil — mais de 30 estados cobertos com estrutura integrada." },
];

const depoimentos = [
  { inicial: "A", nome: "Ana Paula", local: "São Paulo, SP", texto: "Contratei pelo Rodrigo da Elevance e foi super tranquilo. Em 2 dias já tinha a carteirinha digital no app. Recomendo!" },
  { inicial: "M", nome: "Marcos", local: "Campinas, SP", texto: "Tinha dificuldade de cotar Hapvida diretamente. A Elevance resolveu tudo em 1 dia e o preço ficou melhor do que eu esperava." },
  { inicial: "F", nome: "Fernanda", local: "São Bernardo, SP", texto: "Precisava de um plano PME para minha empresa. O Rodrigo comparou opções e encontrou o que cabia no orçamento sem abrir mão da rede." },
];

const HapvidaLandingPage = () => {
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [perfil, setPerfil] = useState('');
  const [idades, setIdades] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = whatsapp.replace(/[^0-9]/g, '');
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          whatsapp: phone,
          produto: 'Plano de Saúde Hapvida',
          origem: 'hapvida.elevanceseguros.com',
          detalhes: { plano: perfil, idades },
        }),
      });
      setSent(true);
    } catch {
      setSent(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Plano Hapvida | Cotação Gratuita | Elevance Seguros</title>
        <meta name="description" content="Plano Hapvida com cotação gratuita via Elevance Seguros. PF a partir de R$ 133,10/mês, PME a partir de R$ 110,08. 86 hospitais próprios. Fale agora no WhatsApp." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://hapvida.elevanceseguros.com" />
      </Helmet>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#0d1f3c]"
        style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.15) 0%, transparent 70%), radial-gradient(circle at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 50%)' }}>

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #C9A84C 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 container mx-auto px-5 py-16 max-w-5xl">

          {/* Logos */}
          <div className="flex items-center justify-between mb-14">
            <img src="/logos/hapvida.webp" alt="Hapvida" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" loading="eager" />
            <div className="flex items-center gap-2">
              <span className="text-white/30 text-xs font-bold uppercase tracking-widest hidden sm:block">via</span>
              <img src="/logos/elevance-dark-horizontal-white.png" alt="Elevance Seguros" className="h-7 md:h-9 w-auto object-contain" loading="eager" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Zap size={11} /> Cotação gratuita · Resposta em minutos
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.0] tracking-tight mb-5">
            Plano Hapvida<br />
            <span className="text-[#C9A84C] italic">sem complicação.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            86 hospitais próprios, Super App, urgência coberta em 24h. Cotação gratuita via WhatsApp — resultado na hora.
          </p>

          {/* Pills de prova */}
          <div className="flex flex-wrap gap-3 mb-12">
            {["PF a partir de R$ 133/mês", "PME/MEI a partir de R$ 110/mês", "Adesão via entidade", "86 hospitais próprios"].map(t => (
              <span key={t} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 text-xs font-semibold px-4 py-2 rounded-full">
                <CheckCircle2 size={12} className="text-[#C9A84C]" /> {t}
              </span>
            ))}
          </div>

          {/* CTA Grid */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg">
            <a href={WPP_BASE + encodeURIComponent("Olá Rodrigo! Quero cotar um plano Hapvida. Pode me ajudar?")}
              target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-[#b8943e] text-[#0d1f3c] font-black text-sm px-6 py-4 rounded-2xl transition-all">
              <MessageCircle size={18} /> Cotar via WhatsApp
            </a>
            <a href="#formulario"
              className="flex items-center justify-center gap-3 bg-white/8 hover:bg-white/12 border border-white/15 text-white font-bold text-sm px-6 py-4 rounded-2xl transition-all">
              Receber cotação por email <ArrowRight size={16} />
            </a>
          </div>

        </div>

        {/* Scroll hint */}
        <div className="relative z-10 flex justify-center pb-8 animate-bounce">
          <ChevronDown size={24} className="text-white/20" />
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="formulario" className="py-16 bg-white">
        <div className="container mx-auto px-5 max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-2">Cotação gratuita</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1f3c] italic leading-tight">
              Receba sua proposta<br />personalizada agora
            </h2>
            <p className="text-slate-500 text-sm mt-3">Preencha abaixo e a Elevance entra em contato via WhatsApp em minutos.</p>
          </div>

          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-black text-[#0d1f3c] mb-2">Recebemos sua solicitação!</h3>
              <p className="text-slate-500 text-sm">Rodrigo da Elevance vai entrar em contato no seu WhatsApp em breve com a melhor proposta.</p>
              <a href={WPP_BASE + encodeURIComponent("Olá Rodrigo! Acabei de preencher o formulário do site para cotar o Hapvida.")}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-[#0d1f3c] text-white font-black text-xs px-6 py-3 rounded-xl">
                <MessageCircle size={14} /> Chamar agora no WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-50 rounded-3xl p-8 space-y-5 border border-slate-100">
              <div>
                <label className="block text-xs font-black text-[#0d1f3c] uppercase tracking-widest mb-2">Seu nome</label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} required
                  placeholder="Como prefere ser chamado?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#C9A84C] bg-white" />
              </div>
              <div>
                <label className="block text-xs font-black text-[#0d1f3c] uppercase tracking-widest mb-2">WhatsApp</label>
                <input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#C9A84C] bg-white" />
              </div>
              <div>
                <label className="block text-xs font-black text-[#0d1f3c] uppercase tracking-widest mb-2">Tipo de plano</label>
                <select value={perfil} onChange={e => setPerfil(e.target.value)} required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#C9A84C] bg-white text-slate-600">
                  <option value="">Selecione</option>
                  <option value="Individual/Familiar">Individual ou Familiar</option>
                  <option value="PME/Empresarial">PME / Empresarial</option>
                  <option value="Adesão">Adesão via Entidade</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black text-[#0d1f3c] uppercase tracking-widest mb-2">Idades dos beneficiários</label>
                <input type="text" value={idades} onChange={e => setIdades(e.target.value)}
                  placeholder="Ex: 35, 32, 8 anos"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#C9A84C] bg-white" />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#0d1f3c] hover:bg-blue-900 text-white font-black text-sm py-4 rounded-2xl transition-all">
                <MessageCircle size={16} /> Quero minha cotação gratuita
              </button>
              <p className="text-center text-xs text-slate-400">Seus dados são usados apenas para enviar sua cotação. Sem spam.</p>
            </form>
          )}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-16 bg-[#0d1f3c]">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-2">Por que Hapvida</p>
            <h2 className="text-3xl md:text-4xl font-black text-white italic">O que você ganha com<br />esse plano</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {diferenciais.map((d, i) => (
              <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-9 h-9 bg-[#C9A84C]/20 rounded-xl flex items-center justify-center flex-shrink-0">{d.icon}</div>
                <div>
                  <p className="font-black text-white text-sm mb-1">{d.titulo}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABELA DE PREÇOS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-2">Tabela de preços</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1f3c] italic">Quanto custa o plano Hapvida?</h2>
            <p className="text-slate-500 text-sm mt-3">Valores de referência para pessoa física. PME e Adesão têm tabela própria — solicite cotação.</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#0d1f3c] text-white">
                <tr>
                  <th className="py-4 px-5 text-left text-xs font-black uppercase tracking-widest">Faixa etária</th>
                  <th className="py-4 px-5 text-center text-xs font-black uppercase tracking-widest">Enfermaria</th>
                  <th className="py-4 px-5 text-center text-xs font-black uppercase tracking-widest">Apartamento</th>
                </tr>
              </thead>
              <tbody>
                {tabelaPrecos.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-3 px-5 font-bold text-[#0d1f3c]">{row.idade}</td>
                    <td className="py-3 px-5 text-center font-black text-[#C9A84C]">{row.enf}</td>
                    <td className="py-3 px-5 text-center font-semibold text-slate-500">{row.apto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">Valores aproximados · Tabela sujeita a alteração · Solicite cotação atualizada</p>
          <div className="mt-8 text-center">
            <a href={WPP_BASE + encodeURIComponent("Olá Rodrigo! Vi a tabela de preços do Hapvida e quero uma cotação personalizada.")}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#0d1f3c] text-white font-black text-sm px-8 py-4 rounded-2xl hover:bg-blue-900 transition-all">
              <MessageCircle size={16} /> Cotar meu plano agora
            </a>
          </div>
        </div>
      </section>

      {/* HOSPITAIS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-2">Rede própria</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1f3c] italic">Hospitais e unidades<br />no seu estado</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {unidades.map((u, i) => (
              <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden flex gap-0 flex-col shadow-sm">
                <div className="h-36 bg-slate-200 flex items-center justify-center overflow-hidden">
                  <img src={u.foto} alt={u.nome} className="w-full h-full object-cover"
                    onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML='<div class="w-full h-full flex items-center justify-center bg-[#0d1f3c]/5"><span class="text-3xl">🏥</span></div>'; }} />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-[10px] font-black text-[#C9A84C] uppercase tracking-widest mb-1">
                    <MapPin size={10} /> {u.local}
                  </div>
                  <p className="font-black text-[#0d1f3c] text-sm mb-1">{u.nome}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-2">Quem já contratou</p>
            <h2 className="text-3xl font-black text-[#0d1f3c] italic">O que dizem nossos clientes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {depoimentos.map((d, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl border border-slate-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0d1f3c] text-white font-black text-sm flex items-center justify-center">{d.inicial}</div>
                  <div>
                    <p className="font-black text-[#0d1f3c] text-sm">{d.nome}</p>
                    <p className="text-[10px] text-slate-400 font-semibold">{d.local}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, j) => <Star key={j} size={11} className="text-[#C9A84C] fill-[#C9A84C]" />)}
                  </div>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed italic">"{d.texto}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ perguntas={[
        { pergunta: "O plano Hapvida atende em qual região?", resposta: "A Hapvida possui rede própria em mais de 30 estados brasileiros, com 86 hospitais e 352 clínicas. Em São Paulo, a cobertura inclui a capital, Grande ABC, Campinas, Ribeirão Preto e Sorocaba, entre outras cidades." },
        { pergunta: "Qual a diferença entre os planos PF, PME e Adesão?", resposta: "O plano PF (Pessoa Física) é contratado diretamente por indivíduos ou famílias. O PME é para empresas com CNPJ ativo — MEI é aceito a partir de 1 vida e tem tabela mais barata. A Adesão é para profissionais vinculados a entidades como OAB, CRM, CREA e similares." },
        { pergunta: "Tem carência no plano Hapvida?", resposta: "Sim, mas urgências e emergências têm cobertura a partir de 24h da contratação. Para consultas, exames e internações eletivas, a carência padrão é de 30 a 180 dias conforme o procedimento. Portabilidade elimina a carência para quem já tem plano há mais de 2 anos." },
        { pergunta: "Posso usar o plano Hapvida em outra cidade?", resposta: "Sim. A rede própria da Hapvida está presente em mais de 30 estados. Em emergências, você pode ser atendido em qualquer unidade da rede, independente de onde contratou o plano." },
        { pergunta: "Como faço para contratar pela Elevance Seguros?", resposta: "Entre em contato pelo WhatsApp com o Rodrigo da Elevance. Ele analisa seu perfil, apresenta as opções disponíveis e acompanha todo o processo de contratação sem custo adicional para você." },
        { pergunta: "A Elevance cobra alguma taxa para fazer a cotação?", resposta: "Não. A cotação e o acompanhamento da Elevance Seguros são completamente gratuitos. A corretora é remunerada pela operadora, não pelo cliente." },
      ]} />

      {/* CTA FINAL */}
      <section className="py-20 bg-[#0d1f3c]">
        <div className="container mx-auto px-5 max-w-2xl text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <img src="/logos/hapvida.webp" alt="Hapvida" className="h-8 w-auto object-contain brightness-0 invert opacity-70" />
            <span className="text-white/20 text-xl font-thin">+</span>
            <img src="/logos/elevance-dark-horizontal-white.png" alt="Elevance" className="h-7 w-auto object-contain" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white italic mb-4">Pronto para ter o<br />melhor plano?</h2>
          <p className="text-white/50 text-sm mb-10 max-w-sm mx-auto">Cotação gratuita, sem compromisso. Rodrigo da Elevance responde no WhatsApp em minutos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WPP_BASE + encodeURIComponent("Olá Rodrigo! Quero cotar um plano Hapvida. Pode me ajudar?")}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] hover:bg-[#b8943e] text-[#0d1f3c] font-black text-sm px-8 py-4 rounded-2xl transition-all">
              <MessageCircle size={18} /> Cotar agora no WhatsApp
            </a>
            <a href="#formulario"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white/80 hover:text-white font-bold text-sm px-8 py-4 rounded-2xl transition-all">
              Preencher formulário <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <ScrollCTA produto="Plano de Saúde Hapvida" />

      {/* FOOTER MÍNIMO */}
      <footer className="py-6 bg-[#071B34] text-center">
        <p className="text-white/25 text-xs">© 2026 Elevance Seguros · Corretora registrada SUSEP · <a href="https://www.elevanceseguros.com" className="hover:text-white/50 transition-colors">elevanceseguros.com</a></p>
      </footer>
    </>
  );
};

export default HapvidaLandingPage;
