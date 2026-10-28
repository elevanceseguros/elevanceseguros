import React from 'react';
import { User, Users, Building2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UnimeduniplanPlans = () => {
  const plans = [
    {
      title: "Individual",
      icon: User,
      description: "Ideal para você que busca proteção e tranquilidade individual.",
      features: ["Cobertura completa", "Carência reduzida", "Urgência 24h"]
    },
    {
      title: "Familiar",
      icon: Users,
      description: "Proteção completa para toda a sua família com descontos progressivos.",
      features: ["Inclusão de dependentes", "Pediatria especializada", "Melhor custo-benefício"]
    },
    {
      title: "Coletivo Empresarial",
      icon: Building2,
      description: "Soluções corporativas para MEI e empresas de todos os portes.",
      features: ["Preços diferenciados", "Gestão de saúde", "Sem carência*"]
    }
  ];

  const scrollToQuote = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossos Planos</h2>
          <p className="text-slate-600 text-lg">Escolha a modalidade ideal para suas necessidades</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 group"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  <plan.icon className="w-8 h-8 text-[#10b981]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{plan.title}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToQuote}
                  className="w-full bg-white border-2 border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white font-bold transition-colors"
                >
                  Ver Detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnimeduniplanPlans;