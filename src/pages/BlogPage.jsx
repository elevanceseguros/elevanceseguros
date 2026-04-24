import React from 'react';
import { Link } from 'react-router-dom';
import { postsData } from '@/data/posts';
import { ChevronRight, Clock, Tag } from 'lucide-react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Conteúdo Especializado</span>
        <h1 className="text-4xl md:text-5xl font-black text-[#1a3a52] italic">Blog Elevance</h1>
        <p className="text-slate-500 font-medium mt-3 text-base">Dicas, guias e informações sobre seguros e planos de saúde</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {postsData.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id}
            className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">

            {/* IMAGEM com badge de tempo sobreposto */}
            <div className="relative">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" loading="lazy" decoding="async" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {post.readTime && (
                  <span className="flex items-center gap-1.5 bg-[#1a3a52]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wide">
                    <Clock size={11} /> {post.readTime}
                  </span>
                )}
                {post.category && (
                  <span className="flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wide">
                    <Tag size={11} /> {post.category}
                  </span>
                )}
              </div>
            </div>

            <div className="p-8">
              {post.date && (
                <p className="text-slate-400 text-xs font-bold mb-2">{post.date}</p>
              )}
              <h2 className="text-xl font-black text-[#1a3a52] mt-1 group-hover:text-blue-600 transition-colors leading-snug italic">{post.title}</h2>
              {post.excerpt && (
                <p className="text-slate-500 text-sm font-medium mt-3 leading-relaxed line-clamp-2">{post.excerpt}</p>
              )}
              <div className="flex items-center gap-2 mt-6 text-blue-600 font-black text-xs uppercase tracking-widest">
                Ler Artigo <ChevronRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
