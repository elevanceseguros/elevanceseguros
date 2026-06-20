import ErrorBoundary from '@/components/ErrorBoundary';
import React, { useCallback, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ExitIntentModal from '@/components/ExitIntentModal';
import CampaignLandingSeo from '@/components/CampaignLandingSeo';
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
const GarantiaSaudePage = lazy(() => import('@/pages/GarantiaSaudePage'));
const SaoMiguelPage = lazy(() => import('@/pages/SaoMiguelPage'));
const TrasmontanoPage = lazy(() => import('@/pages/TrasmontanoPage'));
const SaoCristovaoPage = lazy(() => import('@/pages/SaoCristovaoPage'));
const PlenaSaudePage = lazy(() => import('@/pages/PlenaSaudePage'));
const BiovidaPage = lazy(() => import('@/pages/BiovidaPage'));
const UnihospPage = lazy(() => import('@/pages/UnihospPage'));
const SaoFranciscoPage = lazy(() => import('@/pages/SaoFranciscoPage'));
const UsisaudePage = lazy(() => import('@/pages/UsisaudePage'));
const UnimeduniplanPage = lazy(() => import('@/pages/UnimeduniplanPage'));
const AmilPage = lazy(() => import('@/pages/AmilPage'));
const EncontreSeuPlanoPage = lazy(() => import('@/pages/EncontreSeuPlanoPage'));
const OdontologicoPage = lazy(() => import('@/pages/OdontologicoPage'));
const SeguroVidaPage = lazy(() => import('@/pages/SeguroVidaPage'));
const SeguroResidencialPage = lazy(() => import('@/pages/SeguroResidencialPage'));
const ResponsabilidadeCivilPage = lazy(() => import('@/pages/ResponsabilidadeCivilPage'));
const SeguroGarantiaPage = lazy(() => import('@/pages/SeguroGarantiaPage'));
const ConsorciosPage = lazy(() => import('@/pages/ConsorciosPage'));
const SeguroEmpresaPage = lazy(() => import('@/pages/SeguroEmpresaPage'));
const SeguroAutoPage = lazy(() => import('@/pages/SeguroAutoPage'));
const ProtecaoVeicularPage = lazy(() => import('@/pages/ProtecaoVeicularPage'));
const LooviPage = lazy(() => import('@/pages/LooviPage'));
const PortoPage = lazy(() => import('@/pages/PortoPage'));
const BradescosaudePage = lazy(() => import('@/pages/BradescosaudePage'));
const HapvidaPage = lazy(() => import('@/pages/HapvidaPage'));
const HapvidaRibeiraoPretoPage = lazy(() => import('@/pages/HapvidaRibeiraoPretoPage'));
const HapvidaCampinasPage = lazy(() => import('@/pages/HapvidaCampinasPage'));
const HapvidaSaoBernardoPage = lazy(() => import('@/pages/HapvidaSaoBernardoPage'));
const HapvidaSorocabaPage = lazy(() => import('@/pages/HapvidaSorocabaPage'));
const BradescoCampinasPage = lazy(() => import('@/pages/BradescoCampinasPage'));
const BradescoSaoBernardoPage = lazy(() => import('@/pages/BradescoSaoBernardoPage'));
const BradescoSorocabaPage = lazy(() => import('@/pages/BradescoSorocabaPage'));
const BradescoRibeiraoPretoPage = lazy(() => import('@/pages/BradescoRibeiraoPretoPage'));
const MedSeniorCampinasPage = lazy(() => import('@/pages/MedSeniorCampinasPage'));
const MedSeniorSaoBernardoPage = lazy(() => import('@/pages/MedSeniorSaoBernardoPage'));
const AmilCampinasPage = lazy(() => import('@/pages/AmilCampinasPage'));
const AmilSaoBernardoPage = lazy(() => import('@/pages/AmilSaoBernardoPage'));
const AmilSorocabaPage = lazy(() => import('@/pages/AmilSorocabaPage'));
const AmilRibeiraoPretoPage = lazy(() => import('@/pages/AmilRibeiraoPretoPage'));
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
  <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100%'}}>
    <div style={{width:'40px',height:'40px',border:'3px solid #0d1f3c',borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.8s linear infinite'}} />
    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
  </div>
);

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Garante scroll no topo após lazy load completar
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    return () => clearTimeout(timer);
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
        <meta name="theme-color" content="#0d1f3c" />
      </Helmet>
      
      <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
        <PullToRefreshContainer onRefresh={handleRefresh}>
          {showHeaderFooter && <Header />}
          <main className="flex-grow">
            <ErrorBoundary>
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
                <Route path="/odontologico" element={<OdontologicoPage />} />
                <Route path="/seguro-vida" element={<SeguroVidaPage />} />
                <Route path="/seguro-residencial" element={<SeguroResidencialPage />} />
                <Route path="/responsabilidade-civil" element={<ResponsabilidadeCivilPage />} />
                <Route path="/seguro-garantia" element={<SeguroGarantiaPage />} />
                <Route path="/seguro-auto" element={<SeguroAutoPage />} />
                <Route path="/protecao-veicular" element={<ProtecaoVeicularPage />} />
                <Route path="/loovi" element={<LooviPage />} />

                {/* Legacy & Other Routes */}
                <Route path="/porto" element={<PortoPage />} />
                <Route path="/medsenior" element={<MedSeniorPage />} />
                <Route path="/hapvida" element={<HapvidaPage />} />
                <Route path="/hapvida-ribeirao-preto" element={<HapvidaRibeiraoPretoPage />} />
                <Route path="/hapvida-campinas" element={<HapvidaCampinasPage />} />
                <Route path="/hapvida-sao-bernardo-do-campo" element={<HapvidaSaoBernardoPage />} />
                <Route path="/hapvida-sorocaba" element={<HapvidaSorocabaPage />} />
                <Route path="/bradescosaude-campinas" element={<BradescoCampinasPage />} />
                <Route path="/bradescosaude-sao-bernardo-do-campo" element={<BradescoSaoBernardoPage />} />
                <Route path="/bradescosaude-sorocaba" element={<BradescoSorocabaPage />} />
                <Route path="/bradescosaude-ribeirao-preto" element={<BradescoRibeiraoPretoPage />} />
                <Route path="/medsenior-campinas" element={<MedSeniorCampinasPage />} />
                <Route path="/medsenior-sao-bernardo-do-campo" element={<MedSeniorSaoBernardoPage />} />
                <Route path="/amil-campinas" element={<AmilCampinasPage />} />
                <Route path="/amil-sao-bernardo-do-campo" element={<AmilSaoBernardoPage />} />
                <Route path="/amil-sorocaba" element={<AmilSorocabaPage />} />
                <Route path="/amil-ribeirao-preto" element={<AmilRibeiraoPretoPage />} />
                <Route path="/garantia-saude" element={<GarantiaSaudePage />} />
                <Route path="/sao-miguel" element={<SaoMiguelPage />} />
                <Route path="/trasmontano" element={<TrasmontanoPage />} />
                <Route path="/sao-cristovao" element={<SaoCristovaoPage />} />
                <Route path="/plena-saude" element={<PlenaSaudePage />} />
                <Route path="/biovida" element={<BiovidaPage />} />
                <Route path="/unihosp" element={<UnihospPage />} />
                <Route path="/alice" element={<AlicePage />} />
                <Route path="/amil" element={<AmilPage />} />
                <Route path="/bradescosaude" element={<BradescosaudePage />} />
                <Route path="/unimed" element={<UnimeduniplanPage />} />
                <Route path="/consorcios" element={<ConsorciosPage />} />
                <Route path="/seguro-empresa" element={<SeguroEmpresaPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/obrigado" element={<ThankYouPage />} />

                {/* BLOCO DO BLOG */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<PostDetail />} />
                
                {/* Fallback to main home */}
                {/* Redirects de URLs legacy */}
                <Route path="/planos-de-saude" element={<Navigate to="/encontre-seu-plano" replace />} />
                <Route path="/planos-saude" element={<Navigate to="/encontre-seu-plano" replace />} />
                <Route path="/health-plans" element={<Navigate to="/encontre-seu-plano" replace />} />
                <Route path="/seguros-auto" element={<Navigate to="/seguro-auto" replace />} />
                <Route path="/customer-support" element={<Navigate to="/" replace />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
            <CampaignLandingSeo />
    </ErrorBoundary>
          </main>
          {showHeaderFooter && <Footer />}
        </PullToRefreshContainer>
        
        <FloatingWhatsApp />
        <ExitIntentModal />
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
