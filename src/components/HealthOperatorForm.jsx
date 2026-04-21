import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const HealthOperatorForm = ({ operatorName, className, thankYouPath = '/thank-you' }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', state: '', plan_type: '',
    lives: '', ages: '', profession: '', has_cnpj: '', is_mei: ''
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
      let msg = `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nOperadora de Saúde: ${operatorName}\nMensagem: Cotação de plano de saúde\n`;
      
      if (formData.city) msg += `\nCidade: ${formData.city}`;
      if (formData.state) msg += `\nEstado: ${formData.state}`;
      if (formData.plan_type) msg += `\nTipo de Plano: ${formData.plan_type}`;
      msg += `\nVidas: ${formData.lives}`;
      msg += `\nIdades: ${formData.ages}`;
      msg += `\nPossui CNPJ: ${formData.has_cnpj}`;
      if (formData.has_cnpj === 'Sim' && formData.is_mei) msg += `\nÉ MEI: ${formData.is_mei}`;
      if (formData.profession) msg += `\nProfissão: ${formData.profession}`;

      const encodedMessage = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/5511920144864?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Solicitação Enviada!",
        description: `Recebemos seu pedido de cotação para ${operatorName}.`,
        className: "bg-green-50 border-green-200 text-green-900"
      });
      
      navigate(thankYouPath, { state: { name: formData.name, operator: operatorName } });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: "Não foi possível redirecionar para o WhatsApp. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-100", className)}>
      <h3 className="text-xl font-bold text-gray-800 mb-6">Cotação {operatorName}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Nome Completo</label>
          <input required name="name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" placeholder="Seu nome" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" placeholder="seu@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Telefone</label>
            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" placeholder="(11) 99999-9999" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Cidade</label>
            <input required name="city" value={formData.city} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" placeholder="Sua cidade" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Estado</label>
            <input required name="state" value={formData.state} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" placeholder="UF" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Tipo de Plano</label>
            <select name="plan_type" value={formData.plan_type} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white text-slate-900">
              <option value="">Selecione...</option>
              <option value="Individual">Individual</option>
              <option value="Familiar">Familiar</option>
              <option value="Empresarial">Empresarial</option>
              <option value="Coletivo por Adesão">Coletivo por Adesão</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Quantidade de Vidas *</label>
            <input type="number" name="lives" required min="1" value={formData.lives} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" placeholder="Ex: 2" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Idades (separadas por vírgula) *</label>
          <input required name="ages" value={formData.ages} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" placeholder="Ex: 35, 32, 5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Possui CNPJ? *</label>
             <select required name="has_cnpj" value={formData.has_cnpj} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white text-slate-900">
              <option value="">Selecione</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
          {formData.has_cnpj === 'Sim' && (
             <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">É MEI?</label>
                 <select name="is_mei" value={formData.is_mei} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white text-slate-900">
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Profissão</label>
          <input name="profession" value={formData.profession} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" placeholder="Sua profissão (opcional)" />
        </div>

        <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg mt-4 font-bold shadow-md hover:shadow-lg transition-all">
          {isLoading ? <Loader2 className="animate-spin mr-2" /> : 'Solicitar Cotação'}
        </Button>
      </form>
    </div>
  );
};
export default HealthOperatorForm;