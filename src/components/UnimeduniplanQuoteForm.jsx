import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const UnimeduniplanQuoteForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', plan_type: 'Individual', lives: '', ages: '', has_cnpj: '', is_mei: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (!formData.name || !formData.email || !formData.phone) {
       toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor preencha nome, email e telefone."
       });
       return;
    }

    if (!formData.lives || !formData.ages || !formData.has_cnpj) {
      toast({
        variant: "destructive",
        title: "Campos obrigatórios",
        description: "Por favor preencha Vidas, Idades e se possui CNPJ."
      });
      return;
    }

    setIsLoading(true);

    try {
      let msg = `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nPlano de Interesse: Unimed Uniplan - ${formData.plan_type}\nMensagem: Cotação Unimed Uniplan\n`;
      msg += `\nVidas: ${formData.lives}`;
      msg += `\nIdades: ${formData.ages}`;
      msg += `\nPossui CNPJ: ${formData.has_cnpj}`;
      if (formData.has_cnpj === 'Sim' && formData.is_mei) msg += `\nÉ MEI: ${formData.is_mei}`;

      const encodedMessage = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/5511920144864?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Solicitação Enviada com Sucesso!",
        description: "Em breve um de nossos consultores entrará em contato.",
        className: "bg-green-50 border-green-200 text-green-900",
      });
      
      navigate('/thank-you');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao redirecionar para o WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contato" className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
      <div className="bg-[#10b981] p-5 text-white text-center">
        <h3 className="text-xl font-bold">Solicite Sua Cotação</h3>
        <p className="text-green-50 text-xs mt-1">Preencha e receba valores exclusivos</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-5 space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">Nome e Sobrenome</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#10b981] focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm text-gray-900 bg-gray-50" placeholder="Digite seu nome completo" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">E-mail</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#10b981] focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm text-gray-900 bg-gray-50" placeholder="seu@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp</label>
            <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#10b981] focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm text-gray-900 bg-gray-50" placeholder="(11) 99999-9999" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="plan_type" className="block text-xs font-semibold text-gray-700 mb-1">Tipo de Plano</label>
            <div className="relative">
              <select id="plan_type" name="plan_type" required value={formData.plan_type} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#10b981] focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm text-gray-900 bg-gray-50 appearance-none cursor-pointer">
                <option value="Individual">Individual</option>
                <option value="Familiar">Familiar</option>
                <option value="Coletivo Empresarial">Coletivo Empresarial</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          <div>
             <label htmlFor="lives" className="block text-xs font-semibold text-gray-700 mb-1">Quantas Vidas? *</label>
            <input type="number" id="lives" name="lives" required min="1" value={formData.lives} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#10b981] focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm text-gray-900 bg-gray-50" placeholder="Ex: 2" />
          </div>
        </div>
        
        <div>
            <label htmlFor="ages" className="block text-xs font-semibold text-gray-700 mb-1">Idades (Ex: 30, 28, 5) *</label>
            <input type="text" id="ages" name="ages" required value={formData.ages} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#10b981] focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm text-gray-900 bg-gray-50" placeholder="Ex: 30, 28, 5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="has_cnpj" className="block text-xs font-semibold text-gray-700 mb-1">Possui CNPJ? *</label>
            <select id="has_cnpj" name="has_cnpj" required value={formData.has_cnpj} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#10b981] focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm text-gray-900 bg-gray-50 appearance-none cursor-pointer">
              <option value="">Selecione</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
          
          {formData.has_cnpj === 'Sim' && (
            <div>
              <label htmlFor="is_mei" className="block text-xs font-semibold text-gray-700 mb-1">É MEI?</label>
              <select id="is_mei" name="is_mei" value={formData.is_mei} onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-[#10b981] focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm text-gray-900 bg-gray-50 appearance-none cursor-pointer">
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 text-base rounded-xl shadow-lg shadow-green-200 hover:shadow-xl transition-all duration-300">
          {isLoading ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin h-5 w-5 text-white" /> Processando...</span> : <span className="flex items-center justify-center gap-2">Solicitar Cotação <Send className="w-4 h-4" /></span>}
        </Button>
      </form>
    </div>
  );
};

export default UnimeduniplanQuoteForm;