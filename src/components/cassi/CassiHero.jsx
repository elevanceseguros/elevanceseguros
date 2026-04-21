import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, Send, ShieldCheck, Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const CassiHero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '', email: '', whatsapp: '', plan_type: 'Familiar',
  });

  const formatWhatsApp = (value) => {
    return value.replace(/\D/g, '').replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').slice(0, 15);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      setFormData((prev) => ({ ...prev, [name]: formatWhatsApp(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.email) {
      toast({
        variant: "destructive",
        title: "Campos Incompletos",
        description: "Por favor, preencha todos os campos para continuar.",
      });
      return;
    }
    
    if (isLoading) return;
    setIsLoading(true);

    try {
      let msg = `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.whatsapp}\nMensagem: Cotação Plano de Saúde Cassi\n`;
      msg += `\nTipo de Plano: ${formData.plan_type}`;

      const encodedMessage = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/5511920144864?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Solicitação Enviada!",
        description: "Redirecionando você para a página de confirmação...",
        variant: "default",
        className: "bg-green-600 text-white border-green-700"
      });
      
      navigate('/thank-you', { state: { name: formData.name } });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro no envio",
        description: "Ocorreu um erro ao redirecionar para o WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[850px] lg:min-h-[750px] w-full flex items-center overflow-hidden pt-24 lg:pt-0">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Família feliz e protegida com plano de saúde Cassi" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-purple-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:col-span-7 lg:col-span-6 text-white space-y-6 lg:space-y-8">
            <div className="hidden md:block mb-4 md:mb-8 md:ml-0">
              <img src="https://elevance.com.br/wp-content/uploads/2023/10/logo-elevance-seguros-branca.png" alt="Logo Elevance Seguros" className="w-auto h-12 md:h-14 opacity-90 brightness-110 object-contain max-w-[70%]" style={{ height: 'auto', width: '220px' }} />
            </div>

            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-300" />
              <span>Plano de saúde Cassi</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
              Você, sua família e sua empresa merecem o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Melhor Cuidado</span>
            </h1>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed font-light max-w-lg">
              Garanta acesso aos melhores hospitais e médicos com planos Cassi. Cotação personalizada e suporte humanizado para você e sua empresa.
            </p>

            <div className="space-y-3 pt-2">
              {[ "Rede credenciada de excelência em todo território do Brasileiro", "Atendimento humanizado 24h por dia", "Planos Individuais, Familiares e Empresariais" ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + (index * 0.1) }} className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded-full flex-shrink-0"><CheckCircle className="w-5 h-5 text-green-400" /></div>
                  <span className="text-white font-medium text-base lg:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 md:pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (<div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-gray-200 overflow-hidden shadow-md"><img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={`Cliente satisfeito ${i}`} /></div>))}
              </div>
              <div>
                <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <p className="text-sm text-blue-200 mt-0.5">+2.000 vidas protegidas</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:col-span-5 lg:col-span-5 md:ml-4 lg:ml-8">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="bg-blue-600 p-6 text-center"><h2 className="text-2xl font-bold text-white">Receba sua Cotação</h2><p className="text-blue-100 text-sm mt-1">Preencha e descubra valores exclusivos</p></div>
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="hero-name" className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo</label>
                    <input type="text" id="hero-name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900" placeholder="Ex: João da Silva"/>
                  </div>
                  <div>
                    <label htmlFor="hero-email" className="block text-sm font-semibold text-gray-700 mb-1">E-mail</label>
                    <input type="email" id="hero-email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900" placeholder="seu@email.com"/>
                  </div>
                  <div>
                    <label htmlFor="hero-whatsapp" className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp</label>
                    <input type="tel" id="hero-whatsapp" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900" placeholder="(11) 99999-9999"/>
                  </div>
                  <div>
                    <label htmlFor="hero-plan" className="block text-sm font-semibold text-gray-700 mb-1">Tipo de Plano</label>
                    <select id="hero-plan" name="plan_type" value={formData.plan_type} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900 appearance-none cursor-pointer">
                      <option value="Individual">Individual (Para você)</option>
                      <option value="Familiar">Familiar (Para sua família)</option>
                      <option value="Empresarial">Empresarial (Para sua empresa)</option>
                    </select>
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full py-6 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98]">
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
                    Solicitar Cotação
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Ambiente seguro e protegido LGPD</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CassiHero;