import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const UnimeduniplanTestimonials = () => {
  const testimonials = [
    {
      text: "Finalmente encontrei um plano com preço justo! Antes pagava muito caro e tinha péssimo atendimento. Agora tenho tranquilidade",
      author: "Mariana Silva",
      photo: "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/c52baf6c78b556a35034b7f333f88158.jpg",
      rating: 5
    },
    {
      text: "Minha família toda está protegida e o preço é muito melhor que os concorrentes. Recomendo!",
      author: "Juliana Costa",
      photo: "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/26eb3b3223200cbcc92eb1afc244cb9b.jpg",
      rating: 5
    },
    {
      text: "Nossos colaboradores adoram o plano. Qualidade de atendimento excelente e preço competitivo",
      author: "Carlos Mendes",
      photo: "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/5e83e291d025a0bf94d20c0c84667c48.jpg",
      rating: 5
    },
    {
      text: "Precisei usar o plano e fui muito bem atendido. Rápido, eficiente e sem complicações",
      author: "Roberto Oliveira",
      photo: "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/391831606ef56882a8c580b8389debc9.jpg",
      rating: 5
    },
    {
      text: "Melhor decisão que tomei. Saúde da minha família em primeiro lugar com preço que cabe no bolso",
      author: "Felipe Santos",
      photo: "https://horizons-cdn.hostinger.com/31b5dfa3-4e40-4378-96a9-7dc0284f5b4c/573d07dfe9a631f80d01e04eae41a7fa.jpg",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O Que Dizem Nossos Clientes</h2>
          <div className="flex justify-center items-center gap-2">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-semibold text-slate-700">5.0 de 5.0</span>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible scrollbar-hide">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm min-w-[300px] snap-center flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6 line-clamp-4 leading-relaxed">"{t.text}"</p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#10b981] shadow-sm flex-shrink-0">
                  <img 
                    src={t.photo} 
                    alt={t.author} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                  <p className="text-xs text-[#10b981] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                    Cliente Verificado
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnimeduniplanTestimonials;