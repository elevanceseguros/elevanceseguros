import React, { useCallback, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import PullToRefreshContainer from '@/components/PullToRefreshContainer';
import { SagradaFamiliaAuthProvider } from '@/contexts/SagradaFamiliaContext';
import ProtectedRoute from '@/components/ProtectedRoute';

// Lazy load pages for better performance (Incluindo o Blog no padrão do projeto)
const HomePage = lazy(() => import('@/pages/HomePage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const PostDetail = lazy(() => import('@/pages/PostDetail'));
const ServicePage = lazy(() => import('@/pages/ServicePage'));
const ThankYouPage = lazy(() => import('@/pages/ThankYouPage'));
const BusinessInsurancePage = lazy(() => import('@/pages/BusinessInsurancePage'));
const HealthPlansPage = lazy(() => import('@/pages/HealthPlansPage'));
const OnlineQuotePage = lazy(() => import('@/pages/OnlineQuotePage'));
const CustomerSupportPage = lazy(() => import('@/pages/CustomerSupportPage'));
const CarInsurancePage = lazy(() => import('@/pages/CarInsurancePage'));
const HealthInsurancePage = lazy(() => import('@/pages/HealthInsurancePage'));
const MediservicePage = lazy(() => import('@/pages/MediservicePage'));
const MedSeniorPage = lazy(() => import('@/pages/MedSeniorPage'));
const AlicePage = lazy(() => import('@/pages/AlicePage'));
const SaoFranciscoPage = lazy(() => import('@/pages/SaoFranciscoPage'));
const UsisaudePage = lazy(() => import('@/pages/UsisaudePage'));
const UnimeduniplanPage = lazy(() => import('@/pages/UnimeduniplanPage'));
const AmilPage = lazy(() => import('@/pages/AmilPage'));
const EncontreSeuPlanoPage = lazy(() => import('@/pages/EncontreSeuPlanoPage'));
const ConsorciосPage = lazy(() => import('@/pages/ConsorciосPage'));
const SeguroEmpresaPage = lazy(() => import('@/pages/SeguroEmpresaPage'));
const SeguroAutoPage = lazy(() => import('@/pages/SeguroAutoPage'));
const ProtecaoVeicularPage = lazy(() => import('@/pages/ProtecaoVeicularPage'));
const PortoPage = lazy(() => import('@/pages/PortoPage'));
const BradescosaudePage = lazy(() => import('@/pages/BradescosaudePage'));
const HapvidaPage = lazy(() => import('@/pages/HapvidaPage'));
const SulamericaPage = lazy(() => import('@/pages/SulamericaPage'));

// Generic Pages
const GenericHealthPlanPage = lazy(() => import('@/pages/GenericHealthPlanPage'));

// Sagrada Familia Pages
const SagradaFamiliaHomePage = lazy(() => import('@/pages/SagradaFamiliaHomePage'));
const SagradaFamiliaThankYouPage = lazy(() => import('@/pages/SagradaFamiliaThankYouPage'));
const AdminLoginPage = lazy(() => import('@/pages/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('@/pages/AdminDashboardPage'));

// Cassi Pages
const CassiHomePage = lazy(() => import('@/pages/CassiHomePage'));
const CassiThankYouPage = lazy(() => import('@/pages/CassiThankYouPage'));

// Saúde Landing Page
const SaudeLanding = lazy(() => import('@/pages/SaudeLanding'));

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen w-full">
    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useGoogleAnalytics();

  const handleRefresh = useCallback(async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    window.location.reload();
  }, []);

  // Detecção de subdomínios
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const isSaudeSubdomain = hostname.startsWith('saude.');
  const isSagradaSubdomain = hostname.startsWith('sagradafamilia.');

  // Rotas onde Header e Footer não devem aparecer
  const noHeaderFooterRoutes = [
        '/obrigado', 
    '/admin-login', 
    '/admin-dashboard', 
    '/sagrada-familia', 
    '/sagrada-familia/thank-you', 
        '/saude'
  ];

  const showHeaderFooter = !isSaudeSubdomain && !isSagradaSubdomain && !noHeaderFooterRoutes.some(path => 
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path + '/'))
  );

  return (
    <>
      <Helmet>
        <html lang="pt-br" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1a3a52" />
      </Helmet>
      
      <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
        <PullToRefreshContainer onRefresh={handleRefresh}>
          {showHeaderFooter && <Header />}
          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* Lógica de Rota Raiz */}
                <Route 
                  path="/" 
                  element={
                    isSaudeSubdomain ? <SaudeLanding /> : 
                    isSagradaSubdomain ? <SagradaFamiliaHomePage /> : 
                    <HomePage />
                  } 
                />
                
                {/* Rotas Explícitas */}
                <Route path="/saude" element={<SaudeLanding />} />
                <Route path="/sagrada-familia" element={<SagradaFamiliaHomePage />} />
                <Route path="/sagrada-familia/thank-you" element={<SagradaFamiliaThankYouPage />} />
                
                {/* Admin Routes */}
                <Route path="/admin-login" element={<AdminLoginPage />} />
                <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboardPage /></ProtectedRoute>} />

                {/* Generic Routes */}
                <Route path="/sulamerica" element={<SulamericaPage />} />
                <Route path="/encontre-seu-plano" element={<EncontreSeuPlanoPage />} />
                <Route path="/seguro-auto" element={<SeguroAutoPage />} />
                <Route path="/protecao-veicular" element={<ProtecaoVeicularPage />} />

                {/* Legacy & Other Routes */}
                <Route path="/seguro-auto" element={<CarInsurancePage />} />
                <Route path="/planos-de-saude" element={<HealthInsurancePage />} />
                <Route path="/porto" element={<PortoPage />} />
                <Route path="/medsenior" element={<MedSeniorPage />} />
                <Route path="/hapvida" element={<HapvidaPage />} />
                <Route path="/alice" element={<AlicePage />} />
                <Route path="/amil" element={<AmilPage />} />
                <Route path="/bradescosaude" element={<BradescosaudePage />} />
                <Route path="/unimed" element={<UnimeduniplanPage />} />
                <Route path="/seguros-auto" element={<ServicePage type="auto" />} />
                <Route path="/planos-saude" element={<ServicePage type="health" />} />
                <Route path="/consorcios" element={<ConsorciосPage />} />
                <Route path="/contato" element={<ServicePage type="contact" />} />
                <Route path="/seguro-empresa" element={<SeguroEmpresaPage />} />
                <Route path="/health-plans" element={<HealthPlansPage />} />
                <Route path="/online-quote" element={<OnlineQuotePage />} />
                <Route path="/customer-support" element={<CustomerSupportPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/obrigado" element={<ThankYouPage />} />

                {/* BLOCO DO BLOG */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<PostDetail />} />
                
                {/* Fallback to main home */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          {showHeaderFooter && <Footer />}
        </PullToRefreshContainer>
        
        <FloatingWhatsApp />
        <Toaster />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <SagradaFamiliaAuthProvider>
        <AppContent />
      </SagradaFamiliaAuthProvider>
    </Router>
  );
}

export default App;
