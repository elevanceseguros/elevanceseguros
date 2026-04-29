import React, { useState } from 'react';
import { Loader2, Send, Zap, PartyPopper } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ConversionForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', plan_type: '',
    city: '', state: '', lives: '', ages: '',
    has_cnpj: '', is_mei: '', profession: ''
  });

  const planTypes = ['Individual', 'Familiar', 'Empresarial', 'Coletivo por Adesão'];

  const formatWhatsApp = (value) =>
    value.replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'phone' ? formatWhatsApp(value) : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (!formData.name || !formData.email || !formData.phone) {
      toast({ variant: "destructive", title: "Campos Incompletos", description: "Por favor, preencha Nome, Email e Telefone." });
      return;
    }
    if (!formData.lives || !formData.ages || !formData.has_cnpj) {
      toast({ variant: "destructive", title: "Campos Incompletos", description: "Por favor preencha Vidas, Idades e se possui CNPJ." });
      return;
    }

    setIsLoading(true);
    try {
      await fetch('https://n8n.srv1570723.hstgr.cloud/webhook/elevance-site-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.name,
          whatsapp: (formData.phone || '').replace(/[^0-9]/g, ''),
          email: formData.email,
          produto: 'Plano de Saúde Sagrada Família',
          origem: window.location.pathname,
          detalhes: {
            plano: formData.plan_type, vidas: formData.lives, idades: formData.ages,
            cidade: formData.city, estado: formData.state, cnpj: formData.has_cnpj, mei: formData.is_mei,
          }
        }),
      });
      setSent(true);
    } catch (error) {
      toast({ variant: "destructive", title: "Erro ao Enviar", description: "Tente novamente em instantes." });
      setIsLoading(false);
    }
  };

  const inputClass = "w-full bg-slate-50 border-none rounded-2xl py-3 px-5 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all text-slate-800";
  const selectClass = "w-full bg-slate-50 border-none rounded-2xl py-3 px-5 text-sm outline-none focus:ring-2 focus:ring-blue-600 transition-all text-slate-800 appearance-none";
  const labelClass = "block text-[10px] font-bold text-slate-400 mb-1 uppercase ml-1";

  return (
    <section id="conversion-form" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-[#114d8e] italic">Falta pouco para sua tranquilidade</h2>
          <p className="mt-2 text-base text-slate-500 font-medium">Sua cotação completa em menos de 2 minutos no WhatsApp.</p>
        </div>

        <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-8 md:p-10 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#114d8e] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap z-10">
            <Zap size={14} className="text-yellow-400 fill-yellow-400" /> Cotação Gratuita
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><label className={labelClass}>Nome *</label><input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Seu nome" required /></div>
                <div><label className={labelClass}>Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="seu@email.com" required /></div>
                <div><label className={labelClass}>WhatsApp *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(11) 99999-9999" required /></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><label className={labelClass}>Cidade</label><input type="text" name="city" value={formData.city} onChange={handleChange} className={inputClass} placeholder="Sua cidade" /></div>
                <div><label className={labelClass}>Estado (UF)</label><input type="text" name="state" value={formData.state} onChange={handleChange} className={inputClass} placeholder="Ex: SP" /></div>
                <div><label className={labelClass}>Profissão (opcional)</label><input type="text" name="profession" value={formData.profession} onChange={handleChange} className={inputClass} placeholder="Sua profissão" /></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>Tipo de Plano</label>
                  <select name="plan_type" value={formData.plan_type} onChange={handleChange} className={selectClass}>
                    <option value="">Selecione...</option>
                    {planTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div><label className={labelClass}>Número de Vidas *</label><input type="number" name="lives" value={formData.lives} onChange={handleChange} className={inputClass} placeholder="1" min="1" required /></div>
                <div><label className={labelClass}>Idades (Ex: 30, 28, 5) *</label><input type="text" name="ages" value={formData.ages} onChange={handleChange} className={inputClass} placeholder="30, 28, 5" required /></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>Possui CNPJ? *</label>
                  <select name="has_cnpj" value={formData.has_cnpj} onChange={handleChange} className={selectClass} required>
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
                {formData.has_cnpj === 'Sim' && (
                  <div>
                    <label className={labelClass}>É MEI?</label>
                    <select name="is_mei" value={formData.is_mei} onChange={handleChange} className={selectClass}>
                      <option value="">Selecione</option>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#114d8e] hover:bg-blue-700 disabled:bg-slate-300 text-white font-black py-5 rounded-2xl shadow-xl transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2 mt-2"
              >
                {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <><Send size={16} /> SOLICITAR COTAÇÃO GRATUITA</>}
              </button>
              <p className="text-[9px] text-center text-slate-400 font-bold uppercase italic">
                Entraremos em contato no seu WhatsApp em instantes
              </p>
            </form>
          ) : (
            <div className="text-center space-y-6 py-8">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <PartyPopper size={40} />
              </div>
              <h3 className="text-2xl font-black text-[#114d8e] italic">Solicitação Enviada!</h3>
              <p className="text-slate-500 font-medium text-sm">Fique atento ao seu WhatsApp, entraremos em contato em instantes. 😊</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConversionForm;
