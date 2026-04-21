
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Check, Phone, Mail, MapPin, ArrowRight, Users, Heart, Shield, Star, Award, Clock } from 'lucide-react';

const SaudeLanding = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    tipoPlano: '',
    quantidadeVidas: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://your-n8n-webhook-url.com';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          cidade: '',
          tipoPlano: '',
          quantidadeVidas: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const beneficios = [
    { icon: Shield, text: 'Cobertura completa e abrangente' },
    { icon: Users, text: 'Planos individuais, familiares e empresariais' },
    { icon: Heart, text: 'Rede credenciada de qualidade' },
    { icon: Clock, text: 'Atendimento 24h' },
    { icon: Award, text: 'Melhor custo-benefício do mercado' },
    { icon: Star, text: 'Atendimento personalizado' }
  ];

  const depoimentos = [
    {
      nome: 'Maria Silva',
      cargo: 'Empresária',
      texto: 'Contratei o plano para minha empresa e todos ficaram muito satisfeitos com a qualidade do atendimento.',
      rating: 5
    },
    {
      nome: 'João Santos',
      cargo: 'Autônomo',
      texto: 'Excelente relação custo-benefício. Recomendo para todos que procuram um bom plano de saúde.',
      rating: 5
    },
    {
      nome: 'Ana Paula',
      cargo: 'Professora',
      texto: 'O atendimento é impecável e a rede credenciada é muito boa. Estou muito satisfeita!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planos de Saúde - Proteção Completa para Você e Sua Família</title>
        <meta name="description" content="Encontre o plano de saúde ideal com cobertura completa, rede credenciada de qualidade e atendimento personalizado. Solicite sua cotação agora!" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Cuide da Sua Saúde com Tranquilidade
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                  Planos de saúde completos com a melhor rede credenciada e atendimento humanizado
                </p>
                <ul className="space-y-4 mb-8">
                  {beneficios.slice(0, 3).map((beneficio, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      className="flex items-center text-lg"
                    >
                      <Check className="w-6 h-6 mr-3 text-green-400" />
                      <span>{beneficio.text}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href="#formulario"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  Solicitar Cotação Grátis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block"
              >
                <img 
                  src="/rodrigo.jpg" 
                  alt="Rodrigo - Consultor de Planos de Saúde"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  style={{ border: '4px solid white' }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Por Que Escolher Nossos Planos?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Oferecemos as melhores soluções em saúde com atendimento personalizado e rede credenciada de excelência
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <beneficio.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {beneficio.text}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Veja a experiência de quem já confia em nossos serviços
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-xl"
                >
                  <div className="flex mb-4">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{depoimento.texto}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">{depoimento.nome}</p>
                    <p className="text-gray-600 text-sm">{depoimento.cargo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário Section */}
        <section id="formulario" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Solicite Sua Cotação
                </h2>
                <p className="text-xl text-gray-600">
                  Preencha o formulário e receba uma proposta personalizada em minutos
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="Sua cidade"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Tipo de Plano *
                    </label>
                    <select
                      name="tipoPlano"
                      value={formData.tipoPlano}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Selecione...</option>
                      <option value="Individual">Individual</option>
                      <option value="Familiar">Familiar</option>
                      <option value="Empresarial">Empresarial</option>
                      <option value="MEI">MEI</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Quantidade de Vidas *
                    </label>
                    <input
                      type="number"
                      name="quantidadeVidas"
                      value={formData.quantidadeVidas}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      placeholder="1"
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Formulário enviado com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Erro ao enviar formulário. Por favor, tente novamente.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Cotação Grátis
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-gray-600 text-sm mt-4">
                  Ao enviar, você concorda com nossa política de privacidade
                </p>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Fale Conosco
              </h2>
              <p className="text-xl text-blue-100">
                Estamos prontos para atendê-lo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Telefone</h3>
                <p className="text-blue-100">(11) 92014-4864</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">E-mail</h3>
                <p className="text-blue-100">contato@elevanceseguros.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Localização</h3>
                <p className="text-blue-100">São Paulo, SP</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SaudeLanding;
