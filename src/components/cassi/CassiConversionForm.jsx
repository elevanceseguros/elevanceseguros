import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CassiConversionForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '', whatsapp: '', plan_type: 'Familiar', city: '', lives: '', ages: '', has_cnpj: '', is_mei: ''
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
    if (isLoading) return;

    if (!formData.name || !formData.whatsapp || !formData.city) {
      toast({
        variant: "destructive",
        title: "Campos Incompletos",
        description: "Por favor, preencha todos os campos obrigatórios.",
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
      let msg = `Nome: ${formData.name}\nEmail: Não informado\nTelefone: ${formData.whatsapp}\nMensagem: Cotação Plano de Saúde Cassi\n`;
      msg += `\nTipo de Plano: ${formData.plan_type}`;
      msg += `\nCidade: ${formData.city}`;
      msg += `\nVidas: ${formData.lives}`;
      msg += `\nIdades: ${formData.ages}`;
      msg += `\nPossui CNPJ: ${formData.has_cnpj}`;
      if (formData.has_cnpj === 'Sim' && formData.is_mei) msg += `\nÉ MEI: ${formData.is_mei}`;

      const encodedMessage = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/5511920144864?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Solicitação Enviada!",
        description: "Sua cotação está sendo preparada e chegará em breve.",
        className: "bg-green-100 text-green-800 border-green-300"
      });
      navigate('/thank-you', { state: { name: formData.name } });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao Enviar",
        description: "Ocorreu um erro ao redirecionar para o WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="conversion-form" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Falta pouco para sua tranquilidade
          </h2>
          <p className="mt-3 text-lg text-indigo-600 font-semibold">
            Sua cotação completa em menos de 2 minutos no WhatsApp.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo *</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Seu nome" />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp *</label>
              <input type="tel" name="whatsapp" id="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="(11) 99999-9999" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="plan_type" className="block text-sm font-medium text-gray-700">Tipo de Plano</label>
                <select id="plan_type" name="plan_type" value={formData.plan_type} onChange={handleChange} className="mt-1 block w-full py-3 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900">
                  <option value="Individual">Individual</option>
                  <option value="Familiar">Familiar</option>
                  <option value="Empresarial">Empresarial</option>
                </select>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Sua Cidade *</label>
                <input type="text" name="city" id="city" required value={formData.city} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Ex: São Paulo" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label htmlFor="lives" className="block text-sm font-medium text-gray-700">Qtd. Vidas *</label>
                  <input type="number" name="lives" id="lives" required min="1" value={formData.lives} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Ex: 2" />
               </div>
               <div>
                  <label htmlFor="ages" className="block text-sm font-medium text-gray-700">Idades *</label>
                  <input type="text" name="ages" id="ages" required value={formData.ages} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900" placeholder="Ex: 30, 28, 5" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label htmlFor="has_cnpj" className="block text-sm font-medium text-gray-700">Possui CNPJ? *</label>
                  <select name="has_cnpj" id="has_cnpj" required value={formData.has_cnpj} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900">
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
               </div>
               {formData.has_cnpj === 'Sim' && (
                 <div>
                    <label htmlFor="is_mei" className="block text-sm font-medium text-gray-700">É MEI?</label>
                    <select name="is_mei" id="is_mei" value={formData.is_mei} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900">
                      <option value="">Selecione</option>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                 </div>
               )}
            </div>

            <div>
              <Button type="submit" disabled={isLoading} className="w-full text-lg font-bold py-7 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
                Solicitar Cotação
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CassiConversionForm;