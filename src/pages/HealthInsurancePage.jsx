import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeartPulse, Stethoscope, Users, Building, CheckCircle2, Loader2, Baby, Activity, Briefcase, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import FAQItem from '@/components/FAQItem';
import { useFormSubmission } from '@/hooks/useFormSubmission';

const HealthInsurancePage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const { isLoading, error, isSuccess, submitForm, resetFormState } = useFormSubmission({ 
    formType: 'Health Insurance Page - Bottom Form',
    formId: 'mdalddjn'
  });

  const { 
    isLoading: isHeroLoading, 
    error: heroError, 
    isSuccess: isHeroSuccess, 
    submitForm: submitHeroForm, 
    resetFormState: resetHeroFormState 
  } = useFormSubmission({ 
    formType: 'Health Insurance Page - Hero Form',
    formId: 'mdalddjn'
  });
  
  // State for the manual form at the bottom
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    lives: '',
    ages: '',
    has_cnpj: '',
    is_mei: ''
  });

  // State for the Hero Form
  const [heroFormData, setHeroFormData] = useState({
    name: '',
    email: '',
    phone: '',
    lives: '',
    ages: '',
    has_cnpj: '',
    is_mei: '',
    insurance_type: 'Plano de Saúde',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Success/Error for Bottom Form
  useEffect(() => {
    if (isSuccess) {
      toast({
         title: "Cotação enviada com sucesso!",
         description: "Redirecionando para página de confirmação...",
         className: "bg-teal-50 border-teal-200"
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

  // Handle Success/Error for Hero Form
  useEffect(() => {
    if (isHeroSuccess) {
      toast({
         title: "Cotação enviada com sucesso!",
         description: "Redirecionando para página de confirmação...",
         className: "bg-teal-50 border-teal-200"
      });
      navigate('/thank-you', { state: { name: heroFormData.name } });
      resetHeroFormState();
    }
    if (heroError) {
       toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: heroError,
      });
      resetHeroFormState();
    }
  }, [isHeroSuccess, heroError, toast, navigate, heroFormData.name, resetHeroFormState]);


  // Handlers for Bottom Form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (!formData.lives || !formData.ages || !formData.has_cnpj) {
      toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor preencha Vidas, Idades e se possui CNPJ.",
      });
      return;
    }

    await submitForm({
      ...formData,
      insurance_type: 'saude'
    });
  };

  // Handlers for Hero Form
  const handleHeroChange = (e) => {
    setHeroFormData({ ...heroFormData, [e.target.name]: e.target.value });
  };

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    if (isHeroLoading) return;

    if (heroFormData.insurance_type === 'Plano de Saúde' && (!heroFormData.lives || !heroFormData.ages || !heroFormData.has_cnpj)) {
       toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor preencha Vidas, Idades e se possui CNPJ.",
      });
      return;
    }

    await submitHeroForm({
        ...heroFormData,
        // Ensure city/state are empty strings if not present in this form, or remove from spread
        city: 'Hero Form',
        state: 'Hero Form'
    });
  };

  const planTypes = [
    {
      icon: <Users className="w-10 h-10 text-teal-600" />,
      title: "Plano Individual",
      desc: "Proteção completa para você com acesso aos melhores hospitais e médicos da região.",
      features: ["Cobertura ambulatorial e hospitalar", "Opção de coparticipação", "Reembolso de consultas"]
    },
    {
      icon: <Baby className="w-10 h-10 text-teal-600" />,
      title: "Plano Familiar",
      desc: "Cuide de quem você ama com condições especiais para incluir cônjuge e filhos.",
      features: ["Carência reduzida", "Desconto progressivo", "Pediatria e obstetrícia"]
    },
    {
      icon: <Building className="w-10 h-10 text-teal-600" />,
      title: "Plano Empresarial",
      desc: "A partir de 2 vidas (sócios ou funcionários). O melhor custo-benefício do mercado.",
      features: ["Custos até 40% menores", "Ampla rede credenciada", "Gestão de benefícios"]
    }
  ];

  const benefits = [
    "Consultoria especializada e humanizada",
    "Análise de perfil para o melhor custo-benefício",
    "Suporte pós-venda para agendamentos e reembolsos",
    "Trabalhamos com todas as operadoras",
    "Agilidade na implantação do plano",
    "Transparência total nas condições contratuais"
  ];

  const faqs = [
    {
      question: "Qual a diferença entre plano ambulatorial e hospitalar?",
      answer: "O ambulatorial cobre consultas e exames. O hospitalar cobre internações e cirurgias. A maioria dos planos completos (referência) cobre ambos."
    },
    {
      question: "O que é carência?",
      answer: "É o tempo que você precisa aguardar após a contratação para utilizar determinados procedimentos. Em planos empresariais, a carência pode ser reduzida ou isenta."
    },
    {
      question: "Como funciona o reembolso?",
      answer: "Alguns planos permitem que você escolha médicos fora da rede credenciada e receba parte do valor pago de volta, conforme tabela da operadora."
    },
    {
      question: "Plano com coparticipação vale a pena?",
      answer: "Sim, a mensalidade é mais barata e você paga uma pequena taxa apenas quando utiliza consultas ou exames. Ideal para quem usa pouco o plano."
    },
    {
      question: "Posso aproveitar a carência de um plano anterior?",
      answer: "Sim, através da portabilidade de carências ou compra de carência, dependendo do tempo que você ficou no plano anterior e da operadora."
    },
    {
      question: "O plano cobre parto?",
      answer: "Sim, planos com segmentação obstétrica cobrem parto, mas é necessário cumprir a carência específica para este procedimento (geralmente 10 meses)."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Seguro Saúde Familiar e Empresarial | Cotação - Elevance Seguros</title>
        <meta name="description" content="Garanta a saúde da sua família e funcionários com os melhores planos de saúde. Bradesco, Amil, SulAmérica e mais. Peça uma cotação agora." />
        <meta name="keywords" content="seguro saúde, plano de saúde, seguro saúde familiar, plano empresarial, convênio médico" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1694185752018-2ff397cb99b4" 
            alt="Família feliz - Plano de Saúde" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/80 to-teal-900/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center gap-2 mb-6 bg-teal-800/50 p-2 rounded-full px-4 border border-teal-600/50 w-fit backdrop-blur-sm">
                <HeartPulse className="w-5 h-5 text-teal-300" />
                <span className="text-teal-100 font-medium text-sm">Cuidando de quem você ama</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Plano de Saúde e <br/><span className="text-teal-300">Seguro de Vida</span>
              </h1>
              <p className="text-xl text-teal-50 mb-8 leading-relaxed max-w-xl">
                Sua saúde e de sua família é seu maior patrimônio. Garanta a essa segurança cotando o melhor plano com o melhor custo benefício.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-teal-100 font-medium">
                <div className="flex items-center gap-2">
                   <CheckCircle2 className="text-teal-400 w-5 h-5" /> Atendimento Nacional
                </div>
                <div className="flex items-center gap-2">
                   <CheckCircle2 className="text-teal-400 w-5 h-5" /> Melhores Operadoras
                </div>
                <div className="flex items-center gap-2">
                   <CheckCircle2 className="text-teal-400 w-5 h-5" /> Planos sem carência*
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
               {/* Custom Hero Quote Form */}
               <div className="bg-white/95 backdrop-blur shadow-2xl p-6 md:p-8 rounded-2xl">
                 <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicite sua Cotação</h3>
                 <form onSubmit={handleHeroSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="hero_name" className="block text-sm font-semibold text-gray-700">
                        Nome e Sobrenome
                      </label>
                      <input
                        type="text"
                        id="hero_name"
                        name="name"
                        required
                        value={heroFormData.name}
                        onChange={handleHeroChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="hero_email" className="block text-sm font-semibold text-gray-700">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="hero_email"
                          name="email"
                          required
                          value={heroFormData.email}
                          onChange={handleHeroChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                          placeholder="seu@email.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="hero_phone" className="block text-sm font-semibold text-gray-700">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="hero_phone"
                          name="phone"
                          required
                          value={heroFormData.phone}
                          onChange={handleHeroChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="hero_insurance_type" className="block text-sm font-semibold text-gray-700">
                          Tipo de Seguro
                        </label>
                        <select
                          id="hero_insurance_type"
                          name="insurance_type"
                          required
                          value={heroFormData.insurance_type}
                          onChange={handleHeroChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-gray-900"
                        >
                          <option value="Plano de Saúde">Plano de Saúde</option>
                          <option value="Seguro de Vida">Seguro de Vida</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                         <label htmlFor="hero_lives" className="block text-sm font-semibold text-gray-700">Vidas *</label>
                         <input
                           type="number"
                           id="hero_lives"
                           name="lives"
                           required
                           min="1"
                           value={heroFormData.lives}
                           onChange={handleHeroChange}
                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                           placeholder="Ex: 2"
                         />
                      </div>
                    </div>
                    
                    {heroFormData.insurance_type === 'Plano de Saúde' && (
                        <>
                            <div className="space-y-2">
                              <label htmlFor="hero_ages" className="block text-sm font-semibold text-gray-700">Idades *</label>
                              <input
                                type="text"
                                id="hero_ages"
                                name="ages"
                                required
                                value={heroFormData.ages}
                                onChange={handleHeroChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900"
                                placeholder="Ex: 30, 28, 5"
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <label htmlFor="hero_has_cnpj" className="block text-sm font-semibold text-gray-700">Possui CNPJ? *</label>
                                  <select
                                    id="hero_has_cnpj"
                                    name="has_cnpj"
                                    required
                                    value={heroFormData.has_cnpj}
                                    onChange={handleHeroChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-gray-900"
                                  >
                                    <option value="">Selecione</option>
                                    <option value="Sim">Sim</option>
                                    <option value="Não">Não</option>
                                  </select>
                                </div>
                                {heroFormData.has_cnpj === 'Sim' && (
                                    <div className="space-y-2">
                                      <label htmlFor="hero_is_mei" className="block text-sm font-semibold text-gray-700">É MEI?</label>
                                      <select
                                        id="hero_is_mei"
                                        name="is_mei"
                                        value={heroFormData.is_mei}
                                        onChange={handleHeroChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-gray-900"
                                      >
                                        <option value="">Selecione</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                      </select>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    <div className="space-y-2">
                      <label htmlFor="hero_message" className="block text-sm font-semibold text-gray-700">
                        Mensagem
                      </label>
                      <textarea
                        id="hero_message"
                        name="message"
                        value={heroFormData.message}
                        onChange={handleHeroChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-gray-900"
                        placeholder="Como podemos te ajudar?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isHeroLoading}
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-6 text-lg group"
                    >
                      {isHeroLoading ? (
                        <div className="flex items-center">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                        </div>
                      ) : (
                        <>
                          Solicitar Cotação
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                 </form>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O que é Seguro Saúde?</h2>
          <p className="text-lg text-gray-600 mb-12">
            É a garantia de atendimento médico de qualidade quando você mais precisa. Diferente do sistema público, o seguro saúde oferece rapidez, conforto e uma ampla rede de especialistas à sua disposição.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Activity />, text: "Atendimento Agilizado" },
              { icon: <HeartPulse />, text: "Rede Premium" },
              { icon: <Stethoscope />, text: "Melhores Médicos" },
              { icon: <CheckCircle2 />, text: "Tranquilidade Total" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-4 bg-teal-50 rounded-lg text-teal-800">
                {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Types */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Tipos de Planos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {planTypes.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-teal-500"
              >
                <div className="bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{plan.title}</h3>
                <p className="text-gray-600 text-center mb-6">{plan.desc}</p>
                <ul className="space-y-3">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" 
                alt="Médicos consultando" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que confiar sua saúde à Elevance?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Não vendemos apenas planos, oferecemos consultoria completa para garantir que você tenha a melhor cobertura pelo menor preço.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-teal-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Dúvidas Comuns</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-teal-100 overflow-hidden">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Manual Form - Kept as secondary CTA at bottom */}
      <section id="health-quote-form" className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-teal-600 p-8 text-white flex flex-col justify-center">
              <Briefcase className="w-12 h-12 mb-6 text-teal-100" />
              <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
              <p className="mb-6 opacity-90">Preencha o formulário abaixo que nossos especialistas entrarão em contato com você.</p>
            </div>
            
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                    <input 
                      required name="name" value={formData.name} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-gray-900"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input 
                      required type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-gray-900"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Telefone</label>
                    <input 
                      required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-gray-900"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                   <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Quantidade de Vidas *</label>
                    <input 
                      type="number" name="lives" required min="1" value={formData.lives} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-gray-900"
                      placeholder="Ex: 3"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Idades *</label>
                  <input 
                    name="ages" required value={formData.ages} onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-gray-900"
                    placeholder="Ex: 30, 28 e 5 anos"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Cidade</label>
                    <input 
                      name="city" value={formData.city} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-gray-900"
                      placeholder="São Paulo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Estado</label>
                    <input 
                      name="state" value={formData.state} onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-gray-900"
                      placeholder="SP"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="has_cnpj" className="block text-sm font-medium text-gray-700">Possui CNPJ? *</label>
                      <select
                        id="has_cnpj"
                        name="has_cnpj"
                        required
                        value={formData.has_cnpj}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none bg-white text-gray-900"
                      >
                        <option value="">Selecione</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                      </select>
                    </div>
                    {formData.has_cnpj === 'Sim' && (
                        <div className="space-y-2">
                          <label htmlFor="is_mei" className="block text-sm font-medium text-gray-700">É MEI?</label>
                          <select
                            id="is_mei"
                            name="is_mei"
                            value={formData.is_mei}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none bg-white text-gray-900"
                          >
                            <option value="">Selecione</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                          </select>
                        </div>
                    )}
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg mt-4"
                >
                  {isLoading ? <Loader2 className="animate-spin mr-2" /> : 'Solicitar Proposta'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthInsurancePage;