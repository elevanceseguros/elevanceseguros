import React from 'react';
import { Link } from 'react-router-dom';
import { postsData } from '../data/posts'; // Verifique se o caminho está certo!
import { Search, Clock, ChevronRight } from 'lucide-react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-[#1a3a52] mb-8 text-center">Blog Elevance</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {postsData.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <span className="text-blue-600 font-black text-[10px] uppercase">{post.category}</span>
                <h2 className="text-2xl font-black text-[#1a3a52] mt-2 group-hover:text-blue-600">{post.title}</h2>
                <p className="text-slate-500 mt-4 text-sm line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 mt-6 text-blue-600 font-bold text-xs uppercase">
                  Ler mais <ChevronRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
