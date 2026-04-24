import React from 'react';
import { MessageCircle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary capturou:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">😕</span>
            </div>
            <h1 className="text-2xl font-black text-[#1a3a52] italic mb-3">Algo deu errado</h1>
            <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">
              Ocorreu um erro inesperado nesta página. Tente recarregar ou volte para o início.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => { this.setState({ hasError: false, error: null }); window.location.reload(); }}
                className="flex items-center justify-center gap-2 bg-[#1a3a52] hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
              >
                <RefreshCw size={14} /> Recarregar
              </button>
              <a href="/"
                className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#1a3a52] px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
              >
                <Home size={14} /> Início
              </a>
              <a href="https://wa.me/5511920144864" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
