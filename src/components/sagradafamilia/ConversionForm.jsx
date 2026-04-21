import React, { useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ConversionForm = () => {
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
      
      window.location.href = 'https://elevanceseguros.com/thank-you';
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao Enviar",
        description: "Houve um problema ao redirecionar para o WhatsApp.",
      });
      setIsLoading(false);
    }
  };

  return (
    <section id="conversion-form" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Falta pouco para sua tranquilidade
          </h2>
          <p className="mt-3 text-lg text-indigo-600 font-semibold">
            Sua cotação completa em menos de 2 minutos no WhatsApp.
          </p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900" placeholder="Seu nome" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900" placeholder="seu@email.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900" placeholder="(11) 99999-9999" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Cidade</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900" placeholder="Sua cidade"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Estado (UF)</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900" placeholder="Ex: SP"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Profissão (opcional)</label>
                <input type="text" name="profession" value={formData.profession} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900" placeholder="Sua profissão" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tipo de Plano</label>
                <select name="plan_type" value={formData.plan_type} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 bg-white">
                  <option value="">Selecione...</option>
                  {planTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Número de Vidas *</label>
                <input type="number" name="lives" value={formData.lives} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900" placeholder="1" min="1" required/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Idades (Ex: 30, 28, 5) *</label>
                <input type="text" name="ages" value={formData.ages} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900" placeholder="30, 28, 5" required/>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Possui CNPJ? *</label>
                <select name="has_cnpj" value={formData.has_cnpj} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 bg-white" required>
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              {formData.has_cnpj === 'Sim' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">É MEI?</label>
                  <select name="is_mei" value={formData.is_mei} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 bg-white">
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Button type="submit" disabled={isLoading} className="w-full text-lg font-bold py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-[1.01]">
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

export default ConversionForm;