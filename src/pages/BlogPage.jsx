import React from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';

const BlogPage = () => {
  // Exemplo de como você vai organizar seus posts futuramente
  const posts = [
    {
      id: 1,
      title: "Seguro Auto vs. Proteção Veicular: Qual a melhor escolha em 2026?",
      excerpt: "Entenda as diferenças técnicas, de custo e de regulamentação para não errar na hora de proteger seu carro.",
      category: "Seguro Auto",
      date: "23 Abr, 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=400",
      slug: "seguro-auto-vs-protecao-veicular"
    },
    {
      id: 2,
      title: "Como o MEI pode economizar até 30% no Plano de Saúde",
      excerpt: "Ter um CNPJ ativo, mesmo sendo microempreendedor individual, abre portas para tabelas de preços exclusivas.",
      category: "Plano de Saúde",
      date: "22 Abr, 2026",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
      slug: "economia-plano-de-saude-mei"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header do Blog */}
      <section className="bg-[#1a3a52] py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6">Blog Elevance</h1>
            <p className="text-blue-100/70 text-lg max-w-2xl mx-auto font-medium">
              Dicas de especialistas para você proteger seu patrimônio, economizar nos seguros e cuidar da sua família.
            </p>
          </motion.div>
          
          {/* Barra de Pesquisa */}
          <div className="mt-10 max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Pesquisar um tema..." 
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-white/40 backdrop-blur-md outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <Search className="absolute right-5 top-4 text-white/40" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Categorias Rápidas */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['Todos', 'Seguro Auto', 'Saúde', 'Empresarial', 'Consórcios'].map((cat) => (
            <button key={cat} className="px-6 py-2 bg-white border border-slate-200 rounded-full text-xs font-black text-[#1a3a52] uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -8 }}
              className="group cursor-pointer bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Imagem */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-tighter shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <div className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</div>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-xl font-black text-[#1a3a52] mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest">
                    Ler artigo completo <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-24 bg-[#1a3a52] rounded-[50px] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-black mb-4">Quer receber dicas de economia?</h3>
            <p className="text-blue-100/70 mb-10 max-w-xl mx-auto font-medium">
              Inscreva-se na nossa newsletter e receba conteúdos exclusivos do Rodrigo diretamente no seu e-mail.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 bg-white/10 border border-white/20 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-2xl transition-all shadow-lg uppercase text-xs tracking-widest">
                Assinar Grátis
              </button>
            </div>
          </div>
          {/* Decoração de fundo */}
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
