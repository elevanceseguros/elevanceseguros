import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { postsData } from '@/data/posts';
import { ArrowLeft, MessageCircle, Calendar, Clock } from 'lucide-react';
import logo from '@/assets/logo.png'; // Este é o caminho que criamos

const PostDetail = () => {
  const { slug } = useParams();
  const post = postsData.find((p) => p.slug === slug);
  const whatsappUrl = `https://wa.me/5511920144864?text=Olá Rodrigo, li seu artigo sobre ${post?.title} e queria uma cotação!`;

  if (!post) {
    return (
      <div className="py-40 text-center font-bold">
        <img src={logo} alt="Elevance" className="h-12 mx-auto mb-6" />
        <p>Post não encontrado!</p>
        <Link to="/blog" className="text-blue-600 underline">Voltar ao Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20 pt-24">
      <article className="max-w-3xl mx-auto px-4">
        {/* Topo com Logo e Voltar */}
        <div className="flex justify-between items-center mb-12">
          <Link to="/blog" className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} /> Voltar
          </Link>
          <Link to="/">
            <img src={logo} alt="Elevance Seguros" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          {post.category}
        </span>
        
        <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight mt-6 mb-8">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-slate-400 text-xs font-bold mb-10">
          <div className="flex items-center gap-2"><Calendar size={14}/> {post.date}</div>
          <div className="flex items-center gap-2"><Clock size={14}/> {post.readTime}</div>
        </div>

        <img src={post.image} className="w-full h-[400px] object-cover rounded-[40px] mb-12 shadow-2xl" alt={post.title} />
        
        <div 
          className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Call to Action Final */}
        <div className="mt-16 p-10 bg-[#1a3a52] rounded-[40px] text-white flex flex-col items-center text-center">
          <img src={logo} alt="Elevance" className="h-12 mb-6 brightness-0 invert" />
          <h3 className="text-2xl font-black mb-4">Gostou do conteúdo?</h3>
          <p className="text-blue-100/80 mb-8 max-w-md">Fale agora com o Rodrigo e tire suas dúvidas sobre proteção e seguros.</p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-black flex items-center gap-3 transition-all transform hover:scale-105"
          >
            <MessageCircle size={20} /> CHAMAR NO WHATSAPP
          </a>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
