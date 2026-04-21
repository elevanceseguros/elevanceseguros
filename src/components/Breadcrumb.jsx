import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 py-3 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <ol className="flex items-center flex-wrap gap-2 text-sm text-slate-600">
          <li className="flex items-center gap-2">
            <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1" aria-label="Voltar para Início">
              <Home className="w-4 h-4" />
              <span className="sr-only">Início</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-slate-400" />
              {index === items.length - 1 ? (
                <span className="font-semibold text-blue-600" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-blue-600 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;