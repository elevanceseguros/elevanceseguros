import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { postsData } from '@/data/posts';
import { ArrowLeft, MessageCircle, Clock, Tag, ArrowRight, Shield, Heart, Car, Building2, Home, Coins } from 'lucide-react';

const ctaConfig = {
  'Seguro Auto': {
    icon: '🚗',
    titulo: 'Seguro auto recusado ou com preço alto?',
    texto: 'A Elevance trabalha com seguros que aceitam GNV, leilão, Uber e carros antigos. Cotação gratuita em 5 minutos.',
    btnTexto: 'Cotar Seguro Auto Grátis',
    link: '/seguro-auto',
    wpp: 'Olá Rodrigo, li sobre seguro auto e quero uma cotação gratuita.',
    inlineTexto: 'Quer cotar um seguro auto sem burocracia?',
    inlineLink: '/seguro-auto',
    inlineLinkTexto: 'Faça sua cotação gratuita aqui →',
  },
  'Planos de Saúde': {
    icon: '❤️',
    titulo: 'Comparamos os melhores planos para você',
    texto: 'Hapvida, Bradesco, Amil, SulAmérica e mais. A Elevance encontra o plano certo para seu perfil e bolso.',
    btnTexto: 'Cotar Plano de Saúde Grátis',
    link: '/encontre-seu-plano',
    wpp: 'Olá Rodrigo, li sobre planos de saúde e quero uma cotação gratuita.',
    inlineTexto: 'Quer comparar planos de saúde sem pagar nada?',
    inlineLink: '/encontre-seu-plano',
    inlineLinkTexto: 'Compare planos gratuitamente →',
  },
  'Seguro de Vida': {
    icon: '🛡️',
    titulo: 'Proteja quem você ama',
    texto: 'Seguro de vida a partir de R$ 35/mês. A Elevance encontra a cobertura certa para seu momento.',
    btnTexto: 'Cotar Seguro de Vida Grátis',
    link: '/seguro-vida',
    wpp: 'Olá Rodrigo, li sobre seguro de vida e quero uma cotação gratuita.',
    inlineTexto: 'Já pensou em proteger sua família com um seguro de vida?',
    inlineLink: '/seguro-vida',
    inlineLinkTexto: 'Veja quanto custa um seguro de vida →',
  },
  'Seguro Residencial': {
    icon: '🏠',
    titulo: 'Seu imóvel protegido',
    texto: 'Seguro residencial para próprio ou alugado. Assistência 24h, cobertura contra roubo, incêndio e mais.',
    btnTexto: 'Cotar Seguro Residencial Grátis',
    link: '/seguro-residencial',
    wpp: 'Olá Rodrigo, li sobre seguro residencial e quero uma cotação gratuita.',
    inlineTexto: 'Seu imóvel está protegido por seguro?',
    inlineLink: '/seguro-residencial',
    inlineLinkTexto: 'Veja as coberturas disponíveis →',
  },
  'Seguro Empresarial': {
    icon: '🏢',
    titulo: 'Proteja seu negócio',
    texto: 'Seguro empresarial para PMEs: patrimonial, RC e vida em grupo. Cotação gratuita.',
    btnTexto: 'Cotar Seguro Empresarial Grátis',
    link: '/seguro-empresa',
    wpp: 'Olá Rodrigo, li sobre seguro empresarial e quero uma cotação gratuita.',
    inlineTexto: 'Sua empresa tem a proteção certa?',
    inlineLink: '/seguro-empresa',
    inlineLinkTexto: 'Veja coberturas para empresas →',
  },
  'Seguros Empresariais': {
    icon: '🏢',
    titulo: 'Proteja seu negócio',
    texto: 'Seguro empresarial para PMEs: patrimonial, RC e vida em grupo. Cotação gratuita.',
    btnTexto: 'Cotar Seguro Empresarial Grátis',
    link: '/seguro-empresa',
    wpp: 'Olá Rodrigo, li sobre seguro empresarial e quero uma cotação gratuita.',
    inlineTexto: 'Sua empresa tem a proteção certa?',
    inlineLink: '/seguro-empresa',
    inlineLinkTexto: 'Veja coberturas para empresas →',
  },
  'Consórcios': {
    icon: '💰',
    titulo: 'Realize seu objetivo sem juros',
    texto: 'Consórcio de imóvel, veículo e serviços. Sem juros, sem entrada obrigatória. Simule agora.',
    btnTexto: 'Simular Consórcio Grátis',
    link: '/consorcios',
    wpp: 'Olá Rodrigo, li sobre consórcio e quero uma simulação gratuita.',
    inlineTexto: 'Quer realizar esse objetivo sem pagar juros?',
    inlineLink: '/consorcios',
    inlineLinkTexto: 'Simule um consórcio gratuitamente →',
  },
  'Seguros': {
    icon: '🛡️',
    titulo: 'Encontre o seguro certo para você',
    texto: 'Seguro auto, vida, residencial e empresarial. A Elevance compara e indica a melhor opção.',
    btnTexto: 'Falar com um Especialista',
    link: '/',
    wpp: 'Olá Rodrigo, li um artigo no blog e quero uma cotação gratuita.',
    inlineTexto: 'Precisa de ajuda para escolher o seguro certo?',
    inlineLink: '/',
    inlineLinkTexto: 'Fale com um especialista →',
  },
};

const defaultCta = ctaConfig['Seguros'];

function injectInlineCtas(html, cta) {
  const callout = `<div class="blog-cta-callout"><span class="blog-cta-callout-text">${cta.inlineTexto}</span><a href="${cta.inlineLink}" class="blog-cta-callout-link">${cta.inlineLinkTexto}</a></div>`;
  const midBanner = `<div class="blog-cta-mid"><div class="blog-cta-mid-icon">${cta.icon}</div><div class="blog-cta-mid-body"><p class="blog-cta-mid-titulo">${cta.titulo}</p><p class="blog-cta-mid-texto">${cta.texto}</p></div><a href="https://wa.me/5511920144864?text=${encodeURIComponent(cta.wpp)}" target="_blank" rel="noreferrer" class="blog-cta-mid-btn">${cta.btnTexto} →</a></div>`;
  const parts = html.split('</p>');
  if (parts.length < 4) return html + callout;
  parts.splice(2, 0, callout);
  parts.splice(5, 0, midBanner);
  return parts.join('</p>');
}

const PostDetail = () => {
  const { slug } = useParams();
  const post = postsData.find((p) => p.slug === slug);
  const cta = post ? (ctaConfig[post.category] || defaultCta) : defaultCta;
  const whatsappUrl = `https://wa.me/5511920144864?text=${encodeURIComponent(cta.wpp)}`;

  const relacionados = postsData
    .filter(p => p.slug !== slug && p.category === post?.category)
    .slice(0, 2)
    .concat(
      postsData
        .filter(p => p.slug !== slug && p.category !== post?.category)
        .slice(0, Math.max(0, 2 - postsData.filter(p => p.slug !== slug && p.category === post?.category).slice(0,2).length))
    );

  if (!post) return (
    <div className="py-40 text-center">
      <p className="font-black text-2xl text-[#0d1f3c] mb-4">Post não encontrado.</p>
      <Link to="/blog" className="text-blue-600 font-bold underline">Voltar ao Blog</Link>
    </div>
  );

  const contentWithCtas = injectInlineCtas(post.content, cta);

  return (
    <div className="min-h-screen bg-white pb-20 pt-24">
      <Helmet>
        <title>{post.title} | Blog Elevance Seguros</title>
        <meta name="description" content={post.excerpt || post.title} />
        <link rel="canonical" href={`https://www.elevanceseguros.com/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Elevance Seguros`} />
        <meta name="twitter:description" content={post.excerpt || post.title} />
        <meta name="twitter:image" content="https://www.elevanceseguros.com/preview.webp" />
      </Helmet>

      <style>{`
        .blog-cta-callout {
          margin: 1.5rem 0;
          padding: 1rem 1.25rem;
          background: #f0f4ff;
          border-left: 4px solid #C9A84C;
          border-radius: 0 12px 12px 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
        }
        .blog-cta-callout-text {
          margin: 0;
          font-size: 0.875rem;
          font-weight: 600;
          color: #334155;
          flex: 1;
          min-width: 180px;
        }
        .blog-cta-callout-link {
          font-size: 0.8rem;
          font-weight: 800;
          color: #0d1f3c;
          text-decoration: none;
          border-bottom: 2px solid #C9A84C;
          padding-bottom: 1px;
          white-space: nowrap;
        }
        .blog-cta-callout-link:hover { color: #C9A84C; }
        .blog-cta-mid {
          margin: 2rem 0;
          padding: 1.5rem;
          background: #0d1f3c;
          border-radius: 20px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
        }
        .blog-cta-mid-icon { font-size: 1.8rem; flex-shrink: 0; }
        .blog-cta-mid-body { flex: 1; min-width: 0; }
        .blog-cta-mid-titulo { margin: 0 0 0.25rem; font-size: 0.95rem; font-weight: 900; color: #fff; }
        .blog-cta-mid-texto { margin: 0; font-size: 0.8rem; color: rgba(255,255,255,0.65); line-height: 1.5; }
        .blog-cta-mid-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          background: #C9A84C;
          color: #0d1f3c;
          font-size: 0.75rem;
          font-weight: 900;
          padding: 0.65rem 1.25rem;
          border-radius: 12px;
          text-decoration: none;
          white-space: nowrap;
        }
        .blog-cta-mid-btn:hover { background: #b8943e; }
      `}</style>

      <article className="max-w-3xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <Link to="/blog" className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>
          <Link to="/">
            <img src="/logos/elevance-logo.png" alt="Elevance Seguros" className="h-8 object-contain" />
          </Link>
        </div>

        {/* CATEGORIA + TEMPO */}
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            <Tag size={10} /> {post.category}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
              <Clock size={12} /> {post.readTime} de leitura
            </span>
          )}
          {post.date && <span className="text-slate-400 text-xs font-bold">{post.date}</span>}
        </div>

        {/* TÍTULO */}
        <h1 className="text-3xl md:text-5xl font-black text-[#0d1f3c] leading-tight mb-8 italic">{post.title}</h1>

        {/* BANNER CTA TOPO */}
        <div className="mb-8 p-5 rounded-2xl border-2 border-[#C9A84C]/40 bg-amber-50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0 text-2xl">{cta.icon}</div>
          <div className="flex-1 min-w-0">
            <p className="font-black text-[#0d1f3c] text-sm leading-snug">{cta.titulo}</p>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">{cta.texto}</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0d1f3c] text-white text-xs font-black px-4 py-3 rounded-xl hover:bg-blue-900 transition-all whitespace-nowrap">
            <MessageCircle size={13} /> Cotar grátis
          </a>
        </div>

        {/* IMAGEM */}
        <img src={post.image} className="w-full h-80 md:h-96 object-cover rounded-[40px] mb-12 shadow-2xl" alt={post.title} loading="eager" decoding="async" />

        {/* CONTEÚDO com CTAs inline injetados */}
        <div
          className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: contentWithCtas }}
        />

        {/* CTA FINAL */}
        <div className="mt-16 p-10 bg-[#0d1f3c] rounded-[40px] text-white text-center space-y-4">
          <div className="text-4xl">{cta.icon}</div>
          <h3 className="text-2xl font-black italic">{cta.titulo}</h3>
          <p className="text-slate-300 text-sm font-medium max-w-md mx-auto">{cta.texto}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <a href={whatsappUrl} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
              <MessageCircle size={18} /> {cta.btnTexto}
            </a>
            <Link to={cta.link}
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all">
              Saiba mais <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* POSTS RELACIONADOS */}
        {relacionados.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-black text-[#0d1f3c] italic mb-6">Leia também</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relacionados.slice(0, 2).map(rel => (
                <Link key={rel.slug} to={`/blog/${rel.slug}`}
                  className="group bg-slate-50 rounded-[24px] overflow-hidden border border-slate-100 hover:shadow-md transition-all">
                  <img src={rel.image} alt={rel.title} className="w-full h-40 object-cover" />
                  <div className="p-5">
                    <span className="text-blue-600 font-black text-[10px] uppercase">{rel.category}</span>
                    <h4 className="font-black text-[#0d1f3c] text-sm mt-1 group-hover:text-blue-600 transition-colors leading-snug">{rel.title}</h4>
                    {rel.readTime && (
                      <div className="flex items-center gap-1 mt-2 text-slate-400 text-xs font-bold">
                        <Clock size={11} /> {rel.readTime}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>
    </div>
  );
};

export default PostDetail;
