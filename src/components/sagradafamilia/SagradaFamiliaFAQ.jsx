import React from 'react';
import FAQItem from '@/components/FAQItem';

const faqData = [
  {
    question: "Quanto tempo demora para receber a cotação?",
    answer: "Nossa equipe é ultra-rápida! Você receberá sua cotação completa e personalizada diretamente no seu WhatsApp em menos de 2 minutos após o envio do formulário.",
  },
  {
    question: "A cotação é gratuita?",
    answer: "Sim, totalmente gratuita e sem compromisso. Nosso objetivo é apresentar a melhor solução para você e sua família, com total transparência.",
  },
  {
    question: "Posso incluir dependentes no plano?",
    answer: "Com certeza! Oferecemos planos Familiares e Empresariais que permitem a inclusão de dependentes como cônjuges e filhos, garantindo a proteção de todos que você ama.",
  },
  {
    question: "O plano de saúde tem carência?",
    answer: "Os períodos de carência variam de acordo com o plano e a operadora. Durante a cotação, nosso consultor explicará todos os detalhes sobre as carências para que não haja surpresas.",
  },
  {
    question: "O plano cobre emergências?",
    answer: "Sim, todos os nossos planos possuem cobertura completa para urgências e emergências, conforme o rol de procedimentos da ANS (Agência Nacional de Saúde Suplementar).",
  },
  {
    question: "Como funciona para empresas?",
    answer: "Oferecemos planos empresariais (PME) a partir de 2 vidas, com condições e custos diferenciados. É uma excelente forma de valorizar seus colaboradores com um benefício de alta qualidade.",
  },
  {
    question: "Preciso sair de casa para contratar?",
    answer: "Não! Todo o processo, da cotação à contratação, pode ser feito de forma 100% digital e segura, com o auxílio de nossos consultores para tirar todas as suas dúvidas.",
  },
  {
    question: "Como funciona o atendimento se eu precisar?",
    answer: "Você terá acesso a uma ampla rede credenciada de hospitais, clínicas e laboratórios de excelência. Além disso, nossa equipe de suporte estará sempre à disposição para auxiliar no que for preciso.",
  },
];

const SagradaFamiliaFAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Respostas rápidas para as perguntas mais comuns.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SagradaFamiliaFAQ;