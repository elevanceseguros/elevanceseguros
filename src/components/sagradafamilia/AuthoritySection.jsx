import React from 'react';
import { Award, Users, MessageSquare, Target } from 'lucide-react';

const AuthoritySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Confiança que Vem de Quem Entende de Saúde
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Com mais de 15 anos de experiência e mais de 50.000 clientes satisfeitos, nossa missão é clara: oferecer um serviço ágil e uma abordagem consultiva para encontrar o plano com o melhor custo-benefício para você. Não vendemos apenas seguros, construímos relações de confiança e entregamos tranquilidade.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Award className="mx-auto w-12 h-12 text-blue-500 mb-3" />
              <p className="text-3xl font-bold text-gray-900">15+</p>
              <p className="text-gray-600 font-medium">Anos de Mercado</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Users className="mx-auto w-12 h-12 text-purple-500 mb-3" />
              <p className="text-3xl font-bold text-gray-900">50.000+</p>
              <p className="text-gray-600 font-medium">Clientes Satisfeitos</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <MessageSquare className="mx-auto w-12 h-12 text-green-500 mb-3" />
              <p className="text-2xl font-bold text-gray-900">Consultoria</p>
              <p className="text-gray-600 font-medium">Personalizada</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <Target className="mx-auto w-12 h-12 text-red-500 mb-3" />
              <p className="text-2xl font-bold text-gray-900">Foco no Cliente</p>
              <p className="text-gray-600 font-medium">Custo-Benefício</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;