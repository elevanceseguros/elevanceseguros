import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, Send, ShieldCheck, Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SagradaFamiliaHero = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    birthDate: '',
    gender: '',
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
      if (formData.cpf) msg += `CPF: ${formData.cpf}\n`;
      if (formData.birthDate) msg += `Data de Nascimento: ${formData.birthDate}\n`;
      if (formData.gender) msg += `Gênero: ${formData.gender}\n`;
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
        description: "Redirecionando você para a página de confirmação...",
        variant: "default",
        className: "bg-green-600 text-white border-green-700"
      });
      
      window.location.href = 'https://elevanceseguros.com/thank-you';
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro no envio",
        description: "Ocorreu um erro ao redirecionar para o WhatsApp.",
      });
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[850px] lg:min-h-[750px] w-full flex items-center overflow-hidden pt-24 lg:pt-0">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1685995833594-8c35ffa8ccb0" alt="Família feliz e protegida com plano de saúde" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-purple-900/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="md:col-span-6 lg:col-span-6 text-white space-y-6 pt-8">
            <div className="hidden md:block mb-4 md:mb-8 md:ml-0">
              <img src="https://elevance.com.br/wp-content/uploads/2023/10/logo-elevance-seguros-branca.png" alt="Logo Elevance Seguros" className="w-auto h-12 md:h-14 opacity-90 brightness-110 object-contain max-w-[70%]" style={{ height: 'auto', width: '220px' }}/>
            </div>

            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-300" />
              <span>Plano de saúde Sagrada Família</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
              Sua Família Merece o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Melhor Cuidado</span>
            </h1>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed font-light max-w-lg">
              Garanta acesso aos melhores hospitais e médicos com planos Sagrada Família. Cotação personalizada e suporte humanizado para você e sua empresa.
            </p>

            <div className="space-y-3 pt-2">
              {["Rede credenciada de excelência em todo Estado de São Paulo", "Atendimento humanizado 24h por dia", "Planos Individuais, Familiares e Empresariais"].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + (index * 0.1) }} className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded-full flex-shrink-0"><CheckCircle className="w-5 h-5 text-green-400" /></div>
                  <span className="text-white font-medium text-base lg:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 md:pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (<div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-gray-200 overflow-hidden shadow-md"><img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={`Cliente Satisfeito ${i}`} /></div>))}
              </div>
              <div>
                <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <p className="text-sm text-blue-200 mt-0.5">+2.000 vidas protegidas</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:col-span-6 lg:col-span-6 md:ml-4 lg:ml-8">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10 relative max-h-[80vh] overflow-y-auto custom-scrollbar">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="bg-blue-600 p-6 text-center sticky top-0 z-10"><h2 className="text-2xl font-bold text-white">Receba sua Cotação</h2><p className="text-blue-100 text-sm mt-1">Preencha e descubra valores exclusivos</p></div>
              <div className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Nome *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" placeholder="Seu nome" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" placeholder="seu@email.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Telefone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" placeholder="(11) 99999-9999" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">CPF</label>
                      <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" placeholder="000.000.000-00" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Data de Nascimento</label>
                      <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Gênero</label>
                      <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none">
                        <option value="">Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Cidade</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" placeholder="Sua cidade"/>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Estado (UF)</label>
                      <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" placeholder="Ex: SP"/>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Tipo de Plano</label>
                      <select name="plan_type" value={formData.plan_type} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none">
                         <option value="">Selecione...</option>
                        {planTypes.map(type => <option key={type} value={type}>{type}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Vidas *</label>
                      <input type="number" name="lives" value={formData.lives} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" placeholder="1" min="1" required/>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Idades *</label>
                      <input type="text" name="ages" value={formData.ages} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" placeholder="Ex: 30, 28, 5" required/>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Profissão</label>
                      <input type="text" name="profession" value={formData.profession} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" placeholder="Sua profissão" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">CNPJ? *</label>
                      <select name="has_cnpj" value={formData.has_cnpj} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none" required>
                        <option value="">Selecione</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                      </select>
                    </div>
                    {formData.has_cnpj === 'Sim' && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">É MEI?</label>
                        <select name="is_mei" value={formData.is_mei} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 appearance-none">
                          <option value="">Selecione</option>
                          <option value="Sim">Sim</option>
                          <option value="Não">Não</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full py-6 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98]">
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
                    Solicitar Cotação
                  </Button>
                </form>
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400"><ShieldCheck className="w-3 h-3" /><span>Ambiente seguro e protegido LGPD</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SagradaFamiliaHero;