import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const TopQuoteForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [insuranceType, setInsuranceType] = useState('Saúde');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cpf: '',
    plate: '',
    vehicle_model: '',
    vehicle_year: '',
    vehicle_usage: '',
    plan_type: 'Individual',
    lives: '',
    ages: '',
    has_cnpj: '',
    is_mei: '',
    profession: '',
    city: '', 
  });

  const insuranceOptions = [
    'Saúde', 'Auto', 'Moto', 'Caminhão', 'Empresa', 'Vida',
    'Proteção Veicular', 'Consórcio'
  ];
  const planTypes = ['Individual', 'Familiar', 'PME', 'Adesão'];
  const professionOptions = [
    'Médico', 'Engenheiro', 'Professor', 'Advogado', 'Empresário', 'Autônomo', 'Outro'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (e) => {
    setInsuranceType(e.target.value);
    setFormData(prev => ({
      ...prev,
      cpf: '', plate: '', vehicle_model: '', vehicle_year: '', vehicle_usage: '',
      plan_type: 'Individual', lives: '', ages: '', has_cnpj: '', is_mei: '', profession: ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        variant: "destructive",
        title: "Dados obrigatórios",
        description: "Por favor preencha Nome, Email e Telefone."
      });
      return;
    }

    if (insuranceType === 'Saúde' && (!formData.lives || !formData.ages || !formData.has_cnpj)) {
      toast({
        variant: "destructive",
        title: "Dados obrigatórios",
        description: "Por favor preencha Vidas, Idades e se possui CNPJ."
      });
      return;
    }

    setIsLoading(true);

    try {
      let msg = `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nPlano de Interesse: ${insuranceType}\nMensagem: ${formData.message || 'Solicitação de Cotação'}\n`;
      
      if (formData.city) msg += `\nCidade: ${formData.city}`;

      if (['Auto', 'Moto', 'Caminhão', 'Proteção Veicular'].includes(insuranceType)) {
        if (formData.plate) msg += `\nPlaca: ${formData.plate}`;
        if (formData.cpf) msg += `\nCPF: ${formData.cpf}`;
        if (formData.vehicle_model) msg += `\nModelo: ${formData.vehicle_model}`;
        if (formData.vehicle_year) msg += `\nAno: ${formData.vehicle_year}`;
        if (formData.vehicle_usage) msg += `\nUso: ${formData.vehicle_usage}`;
      }

      if (insuranceType === 'Saúde') {
        msg += `\nTipo de Plano: ${formData.plan_type}`;
        msg += `\nVidas: ${formData.lives}`;
        msg += `\nIdades: ${formData.ages}`;
        msg += `\nPossui CNPJ: ${formData.has_cnpj}`;
        if (formData.has_cnpj === 'Sim' && formData.is_mei) msg += `\nÉ MEI: ${formData.is_mei}`;
        if (formData.profession) msg += `\nProfissão: ${formData.profession}`;
      }

      const encodedMessage = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/5511920144864?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Sucesso!",
        description: "Sua solicitação está sendo redirecionada para o WhatsApp."
      });
      
      navigate('/thank-you');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro ao gerar a mensagem. Tente novamente."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg relative z-20"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Solicitar Cotação</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Seguro</label>
          <select value={insuranceType} onChange={handleTypeChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white">
            {insuranceOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="Seu nome" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="seu@email.com" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="(11) 99999-9999" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cidade</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="Sua cidade"/>
          </div>
        </div>
        
        {['Auto', 'Moto', 'Caminhão', 'Proteção Veicular'].includes(insuranceType) && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Placa do Veículo</label>
                <input type="text" name="plate" value={formData.plate} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="ABC-1234" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CPF</label>
                <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="000.000.000-00"/>
              </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Modelo do Veículo</label>
                <input type="text" name="vehicle_model" value={formData.vehicle_model} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="Ex: Honda Civic"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ano do Veículo</label>
                <input type="text" name="vehicle_year" value={formData.vehicle_year} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="2023"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Uso do Veículo</label>
              <select name="vehicle_usage" value={formData.vehicle_usage} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white">
                <option value="">Selecione</option>
                <option value="Particular">Particular</option>
                <option value="Comercial">Comercial</option>
                <option value="Aluguel">Aluguel</option>
              </select>
            </div>
          </>
        )}

        {insuranceType === 'Saúde' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Plano</label>
                <select name="plan_type" value={formData.plan_type} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white">
                  {planTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Número de Vidas *</label>
                <input type="number" name="lives" value={formData.lives} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="1" min="1" required/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Idades (Ex: 30, 28, 5) *</label>
              <input type="text" name="ages" value={formData.ages} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="30, 28, 5" required/>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Possui CNPJ? *</label>
                <select name="has_cnpj" value={formData.has_cnpj} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white" required>
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              {formData.has_cnpj === 'Sim' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">É MEI?</label>
                  <select name="is_mei" value={formData.is_mei} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white">
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profissão (opcional)</label>
              <select name="profession" value={formData.profession} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white">
                <option value="">Selecione sua profissão</option>
                {professionOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem Adicional</label>
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900" placeholder="Deixe sua mensagem aqui..." rows="4"/>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2">
          {isLoading ? (<><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>) : (<><Send className="w-5 h-5" /> Solicitar Cotação</>)}
        </Button>
      </form>
    </motion.div>
  );
};

export default TopQuoteForm;