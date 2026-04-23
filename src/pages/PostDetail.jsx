import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { postsData } from '../data/posts';
import { Calendar, Clock, ArrowLeft, MessageCircle, Share2 } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams();
  const post = postsData.find((p) => p.slug === slug);
  const whatsappUrl = "https://wa.me/5511920144864?text=Olá Rodrigo, li seu artigo sobre " + post?.title + " e queria uma cotação!";

  if (!post) {
    return <div className="py-20 text-center text-2xl font-bold">Post não encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <header className="pt-32 pb-12 px-4 max-w-4xl mx-auto">
        <Link to="/blog" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs uppercase mb-8 transition-colors">
          <ArrowLeft size={16} /> Voltar ao Blog
        </Link>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{post.category}</span>
        <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight mt-6">{post.title}</h1>
        <div className="flex items-center gap-6 text-slate-400 text-xs font-bold border-b border-slate-100 pb-8 mt-8">
          <div className="flex items-center gap-2"><Calendar size={14}/> {post.date}</div>
          <div className="flex items-center gap-2"><Clock size={14}/> {post.readTime}</div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4">
        <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-[40px] mb-12 shadow-xl" />
        <div 
          className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* Assinatura do Rodrigo */}
        <div className="mt-20 p-8 bg-blue-50 rounded-[40px] border border-blue-100 flex flex-col md:flex-row items-center gap-6">
          <img src="/preview.webp" alt="Rodrigo" className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover" />
          <div>
            <h4 className="text-[#1a3a52] font-black text-xl mb-2">Escrito por Rodrigo</h4>
            <p className="text-sm text-slate-600 mb-4 font-medium">Especialista em Seguros e Proteção Patrimonial na Elevance Seguros.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-black text-xs uppercase hover:underline">
              Falar com o Rodrigo <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
