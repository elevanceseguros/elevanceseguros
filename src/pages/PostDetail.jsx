import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { postsData } from '@/data/posts';
import { ArrowLeft, MessageCircle, Calendar, Clock } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams();
  const post = postsData.find((p) => p.slug === slug);
  const logo = "/logo.png";
  const whatsappUrl = `https://wa.me/5511920144864?text=Olá Rodrigo, li seu artigo sobre ${post?.title}`;

  if (!post) return <div className="py-40 text-center font-bold">Post não encontrado.</div>;

  return (
    <div className="min-h-screen bg-white pb-20 pt-24">
      <article className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <Link to="/blog" className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} /> Voltar
          </Link>
          <Link to="/">
            <img src={logo} alt="Elevance" className="h-10 object-contain" />
          </Link>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight mb-8">{post.title}</h1>
        <img src={post.image} className="w-full h-96 object-cover rounded-[40px] mb-12 shadow-2xl" alt={post.title} />
        
        <div 
          className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <div className="mt-16 p-10 bg-[#1a3a52] rounded-[40px] text-white text-center">
          <img src={logo} alt="Elevance" className="h-12 mb-6 brightness-0 invert mx-auto" />
          <h3 className="text-2xl font-black mb-4">Gostou do conteúdo?</h3>
          <a href={whatsappUrl} target="_blank" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-black flex items-center justify-center gap-3 transition-all mx-auto w-fit">
            <MessageCircle size={20} /> CHAMAR NO WHATSAPP
          </a>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
