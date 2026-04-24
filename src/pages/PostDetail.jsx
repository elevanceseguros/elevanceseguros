import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { postsData } from '@/data/posts';
import { ArrowLeft, MessageCircle, Clock, Tag } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams();
  const post = postsData.find((p) => p.slug === slug);
  const whatsappUrl = `https://wa.me/5511920144864?text=Olá Rodrigo, li seu artigo sobre ${post?.title}`;

  // Posts relacionados (exceto o atual)
  const relacionados = postsData.filter(p => p.slug !== slug).slice(0, 2);

  if (!post) return (
    <div className="py-40 text-center">
      <p className="font-black text-2xl text-[#1a3a52] mb-4">Post não encontrado.</p>
      <Link to="/blog" className="text-blue-600 font-bold underline">Voltar ao Blog</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-20 pt-24">
      <article className="max-w-3xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <Link to="/blog" className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>
          <Link to="/">
            <img src="/logo.png" alt="Elevance" className="h-10 object-contain" />
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
          {post.date && (
            <span className="text-slate-400 text-xs font-bold">{post.date}</span>
          )}
        </div>

        {/* TÍTULO */}
        <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight mb-8 italic">{post.title}</h1>

        {/* IMAGEM */}
        <img src={post.image} className="w-full h-80 md:h-96 object-cover rounded-[40px] mb-12 shadow-2xl" alt={post.title} />

        {/* CONTEÚDO */}
        <div
          className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 p-10 bg-[#1a3a52] rounded-[40px] text-white text-center space-y-4">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto">
            <MessageCircle size={24} className="text-green-400" />
          </div>
          <h3 className="text-2xl font-black italic">Gostou do conteúdo?</h3>
          <p className="text-slate-300 text-sm font-medium">Fale com o Rodrigo e receba uma cotação personalizada</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all mx-auto">
            <MessageCircle size={18} /> Chamar no WhatsApp
          </a>
        </div>

        {/* POSTS RELACIONADOS */}
        {relacionados.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-black text-[#1a3a52] italic mb-6">Leia também</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relacionados.map(rel => (
                <Link key={rel.slug} to={`/blog/${rel.slug}`}
                  className="group bg-slate-50 rounded-[24px] overflow-hidden border border-slate-100 hover:shadow-md transition-all">
                  <img src={rel.image} alt={rel.title} className="w-full h-40 object-cover" />
                  <div className="p-5">
                    <span className="text-blue-600 font-black text-[10px] uppercase">{rel.category}</span>
                    <h4 className="font-black text-[#1a3a52] text-sm mt-1 group-hover:text-blue-600 transition-colors leading-snug">{rel.title}</h4>
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
