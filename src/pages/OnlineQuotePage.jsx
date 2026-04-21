import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Hero from '@/components/Hero';
import TopQuoteForm from '@/components/TopQuoteForm';
import Breadcrumb from '@/components/Breadcrumb';
import { getMetaTags } from '@/lib/seoConfig';

const OnlineQuotePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const meta = getMetaTags({
    title: 'Cotação Online | Seguro Auto e Saúde',
    description: 'Faça sua cotação online de seguro auto, plano de saúde ou consórcio. É rápido, fácil e sem compromisso.',
    url: '/online-quote',
    keywords: 'cotação online, simulação seguro, preço seguro auto, valor plano de saúde'
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta['og:url']} />
      </Helmet>

      <Hero customTitle="Cotação Online" />
      <Breadcrumb items={[{ name: 'Cotação Online', path: '/online-quote' }]} />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
              Simule Agora e Proteja o Que Importa
            </h2>
            <p className="text-gray-600 text-lg">
              Preencha o formulário abaixo com seus dados. Nossa equipe de especialistas analisará as melhores opções do mercado para oferecer o custo-benefício ideal para você.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-100 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Atendimento Humanizado
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-100 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Melhores Seguradoras
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-100 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Suporte Ágil
              </div>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <TopQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineQuotePage;