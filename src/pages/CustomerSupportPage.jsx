import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, HelpCircle } from 'lucide-react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';
import { getMetaTags } from '@/lib/seoConfig';

const CustomerSupportPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const timer = setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const meta = getMetaTags({
    title: 'Suporte ao Cliente | Elevance Seguros',
    description: 'Central de atendimento ao cliente. Tire suas dúvidas, solicite segunda via de boletos ou fale com um especialista.',
    url: '/customer-support',
    keywords: 'suporte elevance, atendimento ao cliente, telefone seguro, contato corretora'
  });

  const faqs = [
    {
      question: "Como aciono o sinistro do meu seguro?",
      answer: "Em caso de sinistro, entre em contato imediatamente com nossa central de atendimento ou diretamente com a seguradora pelo 0800 disponível no seu cartão de apólice. Nossa equipe dará todo suporte necessário."
    },
    {
      question: "Como renovar meu seguro?",
      answer: "Entraremos em contato próximo ao vencimento da sua apólice. Se preferir, você pode nos chamar pelo WhatsApp ou telefone para antecipar a renovação e garantir as melhores condições."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Trabalhamos com diversas formas de pagamento, incluindo débito em conta, cartão de crédito (com opções de parcelamento sem juros) e boleto bancário, dependendo da seguradora escolhida."
    },
    {
      question: "Posso alterar as coberturas do meu plano?",
      answer: "Sim, é possível realizar endossos na sua apólice para incluir ou excluir coberturas. Entre em contato com seu consultor para avaliar as possibilidades e custos."
    }
  ];

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta['og:url']} />
      </Helmet>

      <Hero customTitle="Suporte ao Cliente" />
      <Breadcrumb items={[{ name: 'Suporte', path: '/customer-support' }]} />

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Contact Channels */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#114d8e] mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">Segunda a Sexta, 9h às 18h</p>
              <a href="tel:5511920144864" className="text-lg font-bold text-blue-600 hover:underline">
                (11) 92014-4864
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#114d8e] mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Atendimento Ágil</p>
              <a 
                href="https://wa.me/5511920144864" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-bold text-green-600 hover:underline"
              >
                Iniciar Conversa
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-600">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#114d8e] mb-2">E-mail</h3>
              <p className="text-gray-600 mb-4">Respostas em até 24h</p>
              <a href="mailto:contato@elevanceseguros.com" className="text-lg font-bold text-indigo-600 hover:underline break-all">
                contato@elevanceseguros.com
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <HelpCircle className="w-8 h-8 text-[#114d8e]" />
              <h2 className="text-3xl font-bold text-[#114d8e]">Perguntas Frequentes</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with ID */}
      <section id="contact-form">
        <ContactForm />
      </section>
    </>
  );
};

export default CustomerSupportPage;