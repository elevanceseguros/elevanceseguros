import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, MessageCircle } from 'lucide-react';

const PostDetail = () => {
  const whatsappUrl = "https://wa.me/5511920144864?text=Olá Rodrigo, li seu artigo no blog e queria tirar uma dúvida!";

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Progresso de Leitura sutil no topo */}
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-100 z-[110]">
        <motion.div 
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
        />
      </div>

      {/* Header do Artigo */}
      <header className="pt-32 pb-12 px-4 max-w-4xl mx-auto">
        <a href="/blog" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-widest mb-8 transition-colors">
          <ArrowLeft size={16} /> Voltar ao Blog
        </a>
        
        <div className="space-y-6">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            Seguro Auto & Proteção
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#1a3a52] leading-tight">
            Seguro Auto ou Proteção Veicular: Qual a melhor escolha em 2026?
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-bold border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2"><Calendar size={14}/> 23 de Abril, 2026</div>
            <div className="flex items-center gap-2"><Clock size={14}/> 5 min de leitura</div>
            <div className="flex items-center gap-2 text-blue-600"><Share2 size={14}/> Compartilhar</div>
          </div>
        </div>
      </header>

      {/* Conteúdo do Artigo */}
      <article className="max-w-3xl mx-auto px-4 prose prose-slate prose-lg lg:prose-xl">
        <p className="lead text-xl text-slate-600 font-medium">
          Você já deve ter passado por isso: cotou o seguro do seu carro e o valor quase te derrubou da cadeira. 
          Logo depois, apareceu uma oferta de "Proteção Veicular" pela metade do preço.
        </p>

        <h2 className="text-[#1a3a52] font-black mt-10">1. O que é o Seguro Auto Tradicional?</h2>
        <p>
          O seguro é um contrato (apólice) garantido por uma Seguradora e fiscalizado pela <strong>SUSEP</strong>. 
          É um produto financeiro sólido, ideal para quem busca segurança jurídica máxima e não quer correr o risco de "rateio" de prejuízos.
        </p>

        <h2 className="text-[#1a3a52] font-black mt-10">2. O que é a Proteção Veicular (APVS)?</h2>
        <p>
          Diferente do seguro, a proteção veicular funciona através de ajuda mútua. Somos parceiros oficiais da <strong>APVS Brasil</strong>, 
          a maior da América Latina. O custo é reduzido porque não há análise de perfil rigorosa (como idade do condutor).
        </p>

        {/* Quadro Comparativo */}
        <div className="my-12 bg-slate-50 rounded-[32px] p-8 border border-slate-100 shadow-inner">
          <h3 className="text-[#1a3a52] font-bold mb-6 text-center">Comparativo Rápido</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="font-bold text-slate-400 uppercase text-[10px]">Característica</div>
            <div className="font-bold text-blue-600 uppercase text-[10px]">Proteção APVS</div>
            
            <div className="border-t py-2 font-bold text-[#1a3a52]">Custo</div>
            <div className="border-t py-2">Muito mais acessível</div>
            
            <div className="border-t py-2 font-bold text-[#1a3a52]">Perfil</div>
            <div className="border-t py-2">Sem análise de idade</div>
            
            <div className="border-t py-2 font-bold text-[#1a3a52]">Adesão</div>
            <div className="border-t py-2">Rápida e sem burocracia</div>
          </div>
        </div>

        <h2 className="text-[#1a3a52] font-black mt-10">Conclusão: Qual escolher?</h2>
        <p>
          Não existe uma resposta única. O <strong>Seguro Auto</strong> é um produto de alta garantia. 
          A <strong>Proteção Veicular</strong> é uma solução inteligente de economia. 
          Na Elevance, nós analisamos seu caso e indicamos o melhor caminho.
        </p>

        {/* Bloco de Autoridade do Rodrigo */}
        <div className="mt-20 p-8 bg-blue-50 rounded-[40px] border border-blue-100 flex flex-col md:flex-row items-center gap-6">
          <img 
            src="/preview.webp" 
            alt="Rodrigo" 
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div>
            <h4 className="text-[#1a3a52] font-black text-xl mb-2">Escrito por Rodrigo</h4>
            <p className="text-sm text-slate-600 mb-4 font-medium">
              Especialista em Seguros e Proteção Patrimonial, focado em encontrar o equilíbrio entre segurança e economia.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest hover:underline"
            >
              Falar com o autor <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </article>

      {/* CTA Fixo Mobile para o WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a 
          href={whatsappUrl}
          target="_blank"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <MessageCircle size={30} />
        </a>
      </div>
    </div>
  );
};

export default PostDetail;
