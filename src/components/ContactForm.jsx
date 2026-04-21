import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ simple = false, defaultType = '', operatorName = '', className }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', insurance_type: defaultType || '', message: '',
    city: '', state: '', lives: '', ages: '', has_cnpj: '', is_mei: ''
  });

  const insuranceOptions = [
    'Seguro Auto', 'Seguro Moto', 'Seguro Caminhão', 'Seguro Empresa', 'Seguro Vida',
    'Seguro Residencial', 'Plano de Saúde', 'Proteção Veicular', 'Consórcio'
  ];

  useEffect(() => {
    if (defaultType) {
      setFormData(prev => ({ ...prev, insurance_type: defaultType }));
    }
  }, [defaultType]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isHealth = formData.insurance_type === 'Plano de Saúde' || !!operatorName;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e telefone.",
      });
      return;
    }

    if (isHealth && (!formData.lives || !formData.ages || !formData.has_cnpj)) {
      toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor, preencha Vidas, Idades e se possui CNPJ.",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      let msg = `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nMensagem: ${formData.message || 'Solicitação de Contato'}\n`;
      
      const finalInsuranceType = operatorName ? `Saúde - ${operatorName}` : formData.insurance_type;
      if (finalInsuranceType) msg += `\nTipo de Seguro: ${finalInsuranceType}`;
      if (formData.city) msg += `\nCidade: ${formData.city}`;
      if (formData.state) msg += `\nEstado: ${formData.state}`;
      
      if (isHealth) {
        msg += `\nVidas: ${formData.lives}`;
        msg += `\nIdades: ${formData.ages}`;
        msg += `\nPossui CNPJ: ${formData.has_cnpj}`;
        if (formData.has_cnpj === 'Sim' && formData.is_mei) msg += `\nÉ MEI: ${formData.is_mei}`;
      }

      const encodedMessage = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/5511920144864?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Sucesso!",
        description: "Sua mensagem foi enviada. Entraremos em contato em breve!",
        className: "bg-green-50 border-green-200 text-green-900 border-l-4"
      });
      
      setFormData({
        name: '', email: '', phone: '', insurance_type: defaultType || '', message: '',
        city: '', state: '', lives: '', ages: '', has_cnpj: '', is_mei: ''
      });
      navigate('/thank-you');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao Enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente.",
        action: <AlertCircle className="w-5 h-5" />
      });
    } finally {
      setIsLoading(false);
    }
  };

  const FormContent = () => (
    <form onSubmit={handleSubmit} className={cn("bg-gray-50 rounded-2xl p-8 shadow-xl transition-all", simple && "bg-white/95 backdrop-blur shadow-2xl p-6 md:p-8")}>
      {simple && <h3 className="text-xl font-bold text-gray-800 mb-6">Solicite sua Cotação {operatorName && `(${operatorName})`}</h3>}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 placeholder:text-gray-400" placeholder="Seu nome"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">E-mail *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 placeholder:text-gray-400" placeholder="seu@email.com"/>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Telefone *</label>
            <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900 placeholder:text-gray-400" placeholder="(11) 99999-9999"/>
          </div>
        </div>

        {!operatorName && (
          <div>
            <label htmlFor="insurance_type" className="block text-sm font-semibold text-gray-700 mb-1">Tipo de Seguro *</label>
            <select id="insurance_type" name="insurance_type" required value={formData.insurance_type} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-gray-900 cursor-pointer">
              <option value="">Selecione uma opção</option>
              {insuranceOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
            </select>
          </div>
        )}

        {isHealth && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">Cidade</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900" placeholder="São Paulo"/>
               </div>
               <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-1">UF</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900" placeholder="SP"/>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label htmlFor="lives" className="block text-sm font-semibold text-gray-700 mb-1">Quantidade de Vidas *</label>
                  <input type="number" name="lives" min="1" required value={formData.lives} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900" placeholder="Ex: 3"/>
               </div>
               <div>
                  <label htmlFor="ages" className="block text-sm font-semibold text-gray-700 mb-1">Idades *</label>
                  <input type="text" name="ages" required value={formData.ages} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-900" placeholder="Ex: 30, 28, 5"/>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="has_cnpj" className="block text-sm font-semibold text-gray-700 mb-1">Possui CNPJ? *</label>
                <select id="has_cnpj" name="has_cnpj" required value={formData.has_cnpj} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-gray-900 cursor-pointer">
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              
              {formData.has_cnpj === 'Sim' && (
                <div>
                  <label htmlFor="is_mei" className="block text-sm font-semibold text-gray-700 mb-1">É MEI?</label>
                  <select id="is_mei" name="is_mei" value={formData.is_mei} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-gray-900 cursor-pointer">
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
              )}
            </div>
          </>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Mensagem</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={simple ? 3 : 4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-gray-900" placeholder="Conte-nos mais sobre suas necessidades..."/>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-6 text-lg group shadow-md active:scale-[0.98] transition-all">
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" /> 
              Enviando...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Solicitar Cotação
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
      </div>
    </form>
  );

  if (simple) {
    return <div className={className}><FormContent /></div>;
  }

  return (
    <section id="contato" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Entre em <span className="text-blue-600">Contato</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Preencha o formulário e receba uma cotação personalizada</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Por que escolher a gente?</h3>
              <div className="space-y-4">
                {['Atendimento personalizado e humanizado', 'Mais de 20 anos de experiência no mercado', 'Parcerias com as melhores seguradoras', 'Suporte completo durante todo o processo', 'Cotação rápida e sem compromisso'].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Atendimento Rápido</h4>
              <p className="text-blue-100 mb-6">Nossa equipe está pronta para atender você com agilidade e eficiência.</p>
              <div className="space-y-3">
                <p className="flex items-center gap-2"><span className="font-semibold">Telefone:</span><a href="tel:5511920144864" className="hover:underline text-white/90">(11) 92014-4864</a></p>
                <p className="flex items-center gap-2"><span className="font-semibold">WhatsApp:</span><a href="https://wa.me/5511920144864" target="_blank" rel="noopener noreferrer" className="hover:underline text-white/90">(11) 92014-4864</a></p>
                <p className="flex items-center gap-2"><span className="font-semibold">E-mail:</span><a href="mailto:contato@elevanceseguros.com" className="hover:underline text-white/90">contato@elevanceseguros.com</a></p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <FormContent />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;