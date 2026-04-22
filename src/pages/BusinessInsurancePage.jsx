import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ShieldCheck, PieChart, Users, Send, CheckCircle2, Loader2 } from 'lucide-react';
import Hero from '@/components/Hero';
import LeadFormSincero from '@/components/LeadFormSincero';
import ContactForm from '@/components/ContactForm';

const WEBHOOK_URL = "https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead";

const BusinessInsurancePage = () => {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          nome, 
          whatsapp: whatsapp.replace(/\D/g, ""), 
          origem: "elevanceseguros.com/business",
          produto: "Seguro Empresarial" 
        }),
      });
      setEnviado(true);
    } catch (err) {
      alert("Erro ao enviar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Seguro Empresarial | Proteja seu Negócio - Elevance Seguros</title>
      </Helmet>

      <Hero customTitle="Seguro Empresarial" />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Sua empresa em boas mãos</h2>
            <p className="text-gray-600">Proteção contra incêndio, roubo, danos elétricos e responsabilidade civil.</p>
          </div>

          <LeadFormSincero />

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: <Building2 />, title: "Patrimonial", desc: "Cobre a estrutura física e equipamentos." },
              { icon: <ShieldCheck />, title: "Responsabilidade Civil", desc: "Proteção contra danos a terceiros." },
              { icon: <PieChart />, title: "Lucros Cessantes", desc: "Garante a renda se o negócio parar." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default BusinessInsurancePage;
