import React from 'react';
import { MessageCircle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary:', error, info);
  }

  componentDidUpdate(prevProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'16px',background:'#f8fafc'}}>
          <div style={{textAlign:'center',maxWidth:'400px'}}>
            <div style={{fontSize:'48px',marginBottom:'16px'}}>😕</div>
            <h2 style={{fontSize:'24px',fontWeight:'900',color:'#114d8e',marginBottom:'12px'}}>Algo deu errado</h2>
            <p style={{color:'#64748b',marginBottom:'24px',fontSize:'14px'}}>
              Ocorreu um erro nesta página. Tente recarregar ou volte ao início.
            </p>
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              <button onClick={() => window.location.reload()}
                style={{background:'#114d8e',color:'white',padding:'12px 24px',borderRadius:'16px',border:'none',fontWeight:'900',cursor:'pointer',fontSize:'12px',textTransform:'uppercase'}}>
                Recarregar
              </button>
              <a href="/" style={{background:'#f1f5f9',color:'#114d8e',padding:'12px 24px',borderRadius:'16px',fontWeight:'900',fontSize:'12px',textTransform:'uppercase',textDecoration:'none'}}>
                Início
              </a>
              <a href="https://wa.me/5511920144864" target="_blank" rel="noreferrer"
                style={{background:'#22c55e',color:'white',padding:'12px 24px',borderRadius:'16px',fontWeight:'900',fontSize:'12px',textTransform:'uppercase',textDecoration:'none'}}>
                WhatsApp
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
