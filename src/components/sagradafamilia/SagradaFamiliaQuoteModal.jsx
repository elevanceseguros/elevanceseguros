import React, { useState, useEffect } from 'react';
import { X, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

const SagradaFamiliaQuoteModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan_type: '',
    city: '',
    state: '',
    lives: '',
    ages: '',
    has_cnpj: '',
    is_mei: '',
    profession: ''
  });

  const planTypes = ['Individual', 'Familiar', 'Empresarial', 'Coletivo por Adesão'];

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '', email: '', phone: '', plan_type: '', city: '', state: '',
        lives: '', ages: '', has_cnpj: '', is_mei: '', profession: ''
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatWhatsApp = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData((prev) => ({ ...prev, [name]: formatWhatsApp(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        variant: "destructive",
        title: "Campos Incompletos",
        description: "Por favor, preencha Nome, Email e Telefone.",
      });
      return;
    }

    if (!formData.lives || !formData.ages || !formData.has_cnpj) {
      toast({
        variant: "destructive",
        title: "Campos Incompletos",
        description: "Por favor preencha Vidas, Idades e se possui CNPJ.",
      });
      return;
    }

    setIsLoading(true);

    try {
      let msg = `Quero uma cotação para o plano Sagrada Família\n`;
      msg += `Nome: ${formData.name}\n`;
      msg += `Email: ${formData.email}\n`;
      msg += `Telefone: ${formData.phone}\n`;
      if (formData.plan_type) msg += `Interesse (Plano): ${formData.plan_type}\n`;
      if (formData.city) msg += `Cidade: ${formData.city}\n`;
      if (formData.state) msg += `Estado: ${formData.state}\n`;
      msg += `Vidas: ${formData.lives}\n`;
      msg += `Idades: ${formData.ages}\n`;
      msg += `Possui CNPJ: ${formData.has_cnpj}\n`;
      if (formData.has_cnpj === 'Sim' && formData.is_mei) msg += `É MEI: ${formData.is_mei}\n`;
      if (formData.profession) msg += `Profissão: ${formData.profession}`;

      const encodedMessage = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/5511920144864?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Solicitação Enviada!",
        description: "Sua cotação está sendo preparada e chegará em breve.",
        className: "bg-green-100 text-green-800 border-green-300"
      });
      
      onClose();
      window.location.href = 'https://elevanceseguros.com/thank-you';
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao Enviar",
        description: "Ocorreu um erro ao redirecionar para o WhatsApp.",
      });
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-5 md:p-6 overflow-y-auto max-h-[90vh] custom-scrollbar"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-5 mt-2">
            <h2 className="text-2xl font-bold text-gray-900">Receba sua Cotação</h2>
            <p className="text-gray-600 mt-1 text-sm">Preencha os dados abaixo para receber os valores.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Nome *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm" placeholder="Seu nome" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm" placeholder="seu@email.com" required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Telefone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm" placeholder="(11) 99999-9999" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Profissão</label>
                <input type="text" name="profession" value={formData.profession} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm" placeholder="Sua profissão" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Cidade</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm" placeholder="Sua cidade"/>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Estado (UF)</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm" placeholder="Ex: SP"/>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Tipo de Plano</label>
                <select name="plan_type" value={formData.plan_type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm bg-white">
                  <option value="">Selecione...</option>
                  {planTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Vidas *</label>
                <input type="number" name="lives" value={formData.lives} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm" placeholder="1" min="1" required/>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Idades *</label>
                <input type="text" name="ages" value={formData.ages} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm" placeholder="30, 28" required/>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Possui CNPJ? *</label>
                <select name="has_cnpj" value={formData.has_cnpj} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm bg-white" required>
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              {formData.has_cnpj === 'Sim' && (
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">É MEI?</label>
                  <select name="is_mei" value={formData.is_mei} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm bg-white">
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-base transition-all transform hover:scale-[1.01]"
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                Solicitar Cotação
              </Button>
              
              <p className="text-[11px] text-gray-400 text-center mt-3">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SagradaFamiliaQuoteModal;