import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Car, Wrench, AlertTriangle, Key, Clock, 
  CheckCircle2, Star, ChevronRight, Loader2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import FAQItem from '@/components/FAQItem';
import { useFormSubmission } from '@/hooks/useFormSubmission';

const CarInsurancePage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const { isLoading, error, isSuccess, submitForm, resetFormState } = useFormSubmission({ 
    formType: 'Car Insurance Page',
    formId: 'mdalddjn'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    vehicle_model: '',
    vehicle_year: '',
    vehicle_usage: 'personal'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Solicitação Enviada!",
        description: "Redirecionando para página de confirmação...",
        className: "bg-green-50 border-green-200"
      });
      navigate('/thank-you', { state: { name: formData.name } });
      resetFormState();
    }
    if (error) {
       toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: error,
      });
      resetFormState();
    }
  }, [isSuccess, error, toast, navigate, formData.name, resetFormState]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    
    await submitForm({
      ...formData,
      insurance_type: 'auto'
    });
  };

  const coverages = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-blue-600" />,
      title: "Colisão e Danos",
      desc: "Cobertura para batidas, arranhões, incêndios e danos da natureza."
    },
    {
      icon: <Key className="w-8 h-8 text-blue-600" />,
      title: "Roubo e Furto",
      desc: "Indenização de até 100% da tabela FIPE caso seu carro seja levado."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Danos a Terceiros",
      desc: "Cobertura para danos materiais e corporais causados a outras pessoas."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Assistência 24h",
      desc: "Guincho, chaveiro, troca de pneus e socorro mecânico a qualquer hora."
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Carro Reserva",
      desc: "Veículo à disposição enquanto o seu está na oficina ou aguardando indenização."
    }
  ];

  const benefits = [
    "Atendimento 24 horas por dia",
    "Melhor preço garantido",
    "Processamento rápido de sinistros",
    "Oficinas credenciadas de qualidade",
    "Descontos em parceiros",
    "Cobertura em todo território nacional"
  ];

  const faqs = [
    {
      question: "O que afeta o preço do seguro auto?",
      answer: "Vários fatores influenciam, como idade do condutor, modelo do veículo, local de residência e histórico de sinistros."
    },
    {
      question: "Como funciona a franquia?",
      answer: "A franquia é o valor que você paga em caso de conserto do veículo (perda parcial). Em caso de perda total ou roubo, não há cobrança de franquia."
    },
    {
      question: "Posso incluir condutores jovens?",
      answer: "Sim, é possível incluir condutores entre 18 e 25 anos, porém isso pode alterar o valor do prêmio devido ao maior risco estatístico."
    },
    {
      question: "O seguro cobre enchentes?",
      answer: "Sim, a cobertura compreensiva (a mais completa e comum) inclui proteção contra submersão total ou parcial em água doce proveniente de enchentes."
    },
    {
      question: "O que é bônus no seguro?",
      answer: "O bônus é um desconto progressivo concedido na renovação para segurados que não acionaram o seguro durante a vigência da apólice anterior."
    },
    {
      question: "Carro financiado pode ter seguro?",
      answer: "Sim, inclusive é altamente recomendado para proteger seu patrimônio enquanto você ainda está pagando por ele."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Seguro Auto Completo | Cotação Online - Elevance Seguros</title>
        <meta name="description" content="Proteja seu carro com o melhor seguro auto. Cobertura para roubo, colisão, terceiros e assistência 24h. Faça sua cotação online agora." />
        <meta name="keywords" content="seguro auto, seguro de carro, cotação seguro auto, seguro veículo, assistência 24h" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1694266108404-33b6afd2c15d" 
            alt="Seguro Auto" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Seguro Auto <br/><span className="text-blue-400">Completo</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              Dirija com tranquilidade sabendo que você e seu veículo estão protegidos contra qualquer imprevisto.
            </p>
            <Button 
              onClick={() => document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Solicitar Cotação
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Coverages Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Coberturas Principais</h2>
            <p className="text-lg text-slate-600">Tudo o que você precisa para rodar protegido</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Por que escolher a Elevance?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Nós entendemos que cada motorista é único. Por isso, oferecemos soluções personalizadas que cabem no seu bolso e atendem suas necessidades.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2" 
                  alt="Carro seguro" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ricardo Silva", role: "Motorista de App", text: "O atendimento foi rápido quando precisei de um guincho de madrugada. Recomendo muito!" },
              { name: "Ana Paula", role: "Empresária", text: "Consegui um preço excelente para a frota da minha empresa. A equipe é muito atenciosa." },
              { name: "Carlos Eduardo", role: "Aposentado", text: "Seguro completo e sem burocracia. Fiz tudo online e recebi a apólice no mesmo dia." }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-300 mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Perguntas Frequentes</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-blue-600 p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Cotação Rápida</h3>
              <p className="mb-6 opacity-90">Preencha seus dados e receba as melhores ofertas do mercado.</p>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4"/> Sem compromisso</li>
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4"/> 100% Seguro</li>
                <li className="flex gap-2 items-center"><CheckCircle2 className="w-4 h-4"/> Resposta rápida</li>
              </ul>
            </div>
            
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nome Completo</label>
                    <input 
                      required name="name" value={formData.name} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input 
                      required type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Telefone</label>
                    <input 
                      required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Uso do Veículo</label>
                    <select 
                      name="vehicle_usage" value={formData.vehicle_usage} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white text-slate-900"
                    >
                      <option value="personal">Pessoal / Lazer</option>
                      <option value="commercial">Comercial / Trabalho</option>
                      <option value="app">Motorista de App</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Cidade</label>
                    <input 
                      name="city" value={formData.city} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                      placeholder="São Paulo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Estado</label>
                    <input 
                      name="state" value={formData.state} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                      placeholder="SP"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Modelo do Veículo</label>
                    <input 
                      name="vehicle_model" value={formData.vehicle_model} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                      placeholder="Ex: HB20 1.0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Ano</label>
                    <input 
                      name="vehicle_year" value={formData.vehicle_year} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                      placeholder="Ex: 2023"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg mt-4"
                >
                  {isLoading ? <Loader2 className="animate-spin mr-2" /> : 'Enviar Solicitação'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarInsurancePage;