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

// Importação das páginas do Blog (Sem lazy load para evitar conflitos iniciais)
import BlogPage from './pages/BlogPage';
import PostDetail from './pages/PostDetail';

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'));
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

  // Rotas onde Header e Footer não devem aparecer (LPs e Admin)
  const noHeaderFooterRoutes = [
    '/uniplan', 
    '/obrigado', 
    '/admin-login', 
    '/admin-dashboard', 
    '/sagrada-familia', 
    '/sagrada-familia/thank-you', 
    '/cassi-thank-you', 
    '/saude'
  ];

  // Regra para mostrar Header/Footer
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
                <Route path="/encontre-seu-plano" element={<GenericHealthPlanPage />} />

                {/* Legacy & Other Routes */}
                <Route path="/seguro-auto" element={<CarInsurancePage />} />
                <Route path="/planos-de-saude" element={<HealthInsurancePage />} />
                <Route path="/mediservice" element={<MediservicePage />} />
                <Route path="/medsenior" element={<MedSeniorPage />} />
                <Route path="/cassi" element={<CassiHomePage />} />
                <Route path="/cassi-thank-you" element={<CassiThankYouPage />} />
                <Route path="/alice" element={<AlicePage />} />
                <Route path="/saofrancisco" element={<SaoFranciscoPage />} />
                <Route path="/usisaude" element={<UsisaudePage />} />
                <Route path="/uniplan" element={<UnimeduniplanPage />} />
                <Route path="/seguros-auto" element={<ServicePage type="auto" />} />
                <Route path="/planos-saude" element={<ServicePage type="health" />} />
                <Route path="/consorcios" element={<ServicePage type="consortium" />} />
                <Route path="/contato" element={<ServicePage type="contact" />} />
                <Route path="/business-insurance" element={<BusinessInsurancePage />} />
                <Route path="/health-plans" element={<HealthPlansPage />} />
                <Route path="/online-quote" element={<OnlineQuotePage />} />
                <Route path="/customer-support" element={<CustomerSupportPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/obrigado" element={<ThankYouPage />} />

                {/* BLOCO DO BLOG - CENTRALIZADO */}
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
