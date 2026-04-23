import React from 'react';
import { Link } from 'react-router-dom';
import { postsData } from '@/data/posts';
import { ChevronRight, Clock } from 'lucide-react';

const BlogPage = () => {
  const logo = "/logo.png";

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <img src={logo} alt="Elevance" className="h-16 w-auto mx-auto mb-6 opacity-80" />
        <h1 className="text-4xl md:text-5xl font-black text-[#1a3a52]">Blog Elevance</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {postsData.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id} className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
            <div className="p-8">
              <span className="text-blue-600 font-black text-[10px] uppercase">{post.category}</span>
              <h2 className="text-2xl font-black text-[#1a3a52] mt-2 group-hover:text-blue-600 transition-colors">{post.title}</h2>
              <div className="flex items-center gap-2 mt-6 text-blue-600 font-bold text-xs uppercase">
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
