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
import SocialMetaSync from '@/components/SocialMetaSync';
import HealthInternalLinks from '@/components/HealthInternalLinks';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import PullToRefreshContainer from '@/components/PullToRefreshContainer';
import { SagradaFamiliaAuthProvider } from '@/contexts/SagradaFamiliaContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const HomePage = lazy(() => import('@/pages/HomePage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const PostDetail = lazy(() => import('@/pages/PostDetail'));
const ThankYouPage = lazy(() => import('@/pages/ThankYouPage'));
const MedSeniorPage = lazy(() => import('@/pages/MedSeniorPage'));
const AlicePage = lazy(() => import('@/pages/AlicePage'));
const GarantiaSaudePage = lazy(() => import('@/pages/GarantiaSaudePage'));
const SaoMiguelPage = lazy(() => import('@/pages/SaoMiguelPage'));
const TrasmontanoPage = lazy(() => import('@/pages/TrasmontanoPage'));
const SaoCristovaoPage = lazy(() => import('@/pages/SaoCristovaoPage'));
const PlenaSaudePage = lazy(() => import('@/pages/PlenaSaudePage'));
const BiovidaPage = lazy(() => import('@/pages/BiovidaPage'));
const UnihospPage = lazy(() => import('@/pages/UnihospPage'));
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
const HapvidaAdsLanding = lazy(() => import('@/pages/HapvidaAdsLanding'));
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
const SulamericaCampinasPage = lazy(() => import('@/pages/SulamericaCampinasPage'));
const SulamericaRibeiraoPretoPage = lazy(() => import('@/pages/SulamericaRibeiraoPretoPage'));
const SulamericaSaoBernardoPage = lazy(() => import('@/pages/SulamericaSaoBernardoPage'));
const SulamericaSorocabaPage = lazy(() => import('@/pages/SulamericaSorocabaPage'));
const SagradaFamiliaHomePage = lazy(() => import('@/pages/SagradaFamiliaHomePage'));
const SagradaFamiliaThankYouPage = lazy(() => import('@/pages/SagradaFamiliaThankYouPage'));
const AdminLoginPage = lazy(() => import('@/pages/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('@/pages/AdminDashboardPage'));
const SaudeLanding = lazy(() => import('@/pages/SaudeLanding'));
const HapvidaLandingPage = lazy(() => import('@/pages/HapvidaLandingPage'));

const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
    <div style={{ width: '40px', height: '40px', border: '3px solid #0d1f3c', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
  </div>
);

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useGoogleAnalytics();

  const handleRefresh = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    window.location.reload();
  }, []);

  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const isSaudeSubdomain = hostname.startsWith('saude.');
  const isSagradaSubdomain = hostname.startsWith('sagradafamilia.');
  const isHapvidaSubdomain = hostname.startsWith('hapvida.');

  const noHeaderFooterRoutes = [
    '/obrigado',
    '/admin-login',
    '/admin-dashboard',
    '/sagrada-familia',
    '/sagrada-familia/thank-you',
    '/saude',
    '/hapvida-ads',
  ];

  const showHeaderFooter = !isSaudeSubdomain && !isSagradaSubdomain && !isHapvidaSubdomain && !noHeaderFooterRoutes.some((path) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(`${path}/`))
  );

  const hideGlobalConversionWidgets = isHapvidaAdsSubdomain || isHapvidaAdsRoute;

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
                  <Route path="/" element={isSaudeSubdomain ? <SaudeLanding /> : isSagradaSubdomain ? <SagradaFamiliaHomePage /> : isHapvidaSubdomain ? <HapvidaLandingPage /> : <HomePage />} />
                  <Route path="/saude" element={<SaudeLanding />} />
                  <Route path="/hapvida-ads" element={<HapvidaAdsLanding />} />
                  <Route path="/sagrada-familia" element={<SagradaFamiliaHomePage />} />
                  <Route path="/sagrada-familia/thank-you" element={<SagradaFamiliaThankYouPage />} />
                  <Route path="/admin-login" element={<AdminLoginPage />} />
                  <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboardPage /></ProtectedRoute>} />

                  <Route path="/encontre-seu-plano" element={<><EncontreSeuPlanoPage /><HealthInternalLinks pathname="/encontre-seu-plano" /></>} />
                  <Route path="/odontologico" element={<OdontologicoPage />} />
                  <Route path="/seguro-vida" element={<SeguroVidaPage />} />
                  <Route path="/seguro-residencial" element={<SeguroResidencialPage />} />
                  <Route path="/responsabilidade-civil" element={<ResponsabilidadeCivilPage />} />
                  <Route path="/seguro-garantia" element={<SeguroGarantiaPage />} />
                  <Route path="/seguro-auto" element={<SeguroAutoPage />} />
                  <Route path="/protecao-veicular" element={<ProtecaoVeicularPage />} />
                  <Route path="/loovi" element={<LooviPage />} />
                  <Route path="/consorcios" element={<ConsorciosPage />} />
                  <Route path="/seguro-empresa" element={<SeguroEmpresaPage />} />

                  <Route path="/hapvida" element={<><HapvidaPage /><HealthInternalLinks pathname="/hapvida" /></>} />
                  <Route path="/hapvida-googleads" element={<HapvidaLandingPage />} />
                  <Route path="/hapvida-campinas" element={<><HapvidaCampinasPage /><HealthInternalLinks pathname="/hapvida-campinas" /></>} />
                  <Route path="/hapvida-ribeirao-preto" element={<><HapvidaRibeiraoPretoPage /><HealthInternalLinks pathname="/hapvida-ribeirao-preto" /></>} />
                  <Route path="/hapvida-sao-bernardo-do-campo" element={<><HapvidaSaoBernardoPage /><HealthInternalLinks pathname="/hapvida-sao-bernardo-do-campo" /></>} />
                  <Route path="/hapvida-sorocaba" element={<><HapvidaSorocabaPage /><HealthInternalLinks pathname="/hapvida-sorocaba" /></>} />
                  <Route path="/amil" element={<><AmilPage /><HealthInternalLinks pathname="/amil" /></>} />
                  <Route path="/amil-campinas" element={<><AmilCampinasPage /><HealthInternalLinks pathname="/amil-campinas" /></>} />
                  <Route path="/amil-ribeirao-preto" element={<><AmilRibeiraoPretoPage /><HealthInternalLinks pathname="/amil-ribeirao-preto" /></>} />
                  <Route path="/amil-sao-bernardo-do-campo" element={<><AmilSaoBernardoPage /><HealthInternalLinks pathname="/amil-sao-bernardo-do-campo" /></>} />
                  <Route path="/amil-sorocaba" element={<><AmilSorocabaPage /><HealthInternalLinks pathname="/amil-sorocaba" /></>} />
                  <Route path="/bradescosaude" element={<><BradescosaudePage /><HealthInternalLinks pathname="/bradescosaude" /></>} />
                  <Route path="/bradescosaude-campinas" element={<><BradescoCampinasPage /><HealthInternalLinks pathname="/bradescosaude-campinas" /></>} />
                  <Route path="/bradescosaude-ribeirao-preto" element={<><BradescoRibeiraoPretoPage /><HealthInternalLinks pathname="/bradescosaude-ribeirao-preto" /></>} />
                  <Route path="/bradescosaude-sao-bernardo-do-campo" element={<><BradescoSaoBernardoPage /><HealthInternalLinks pathname="/bradescosaude-sao-bernardo-do-campo" /></>} />
                  <Route path="/bradescosaude-sorocaba" element={<><BradescoSorocabaPage /><HealthInternalLinks pathname="/bradescosaude-sorocaba" /></>} />
                  <Route path="/medsenior" element={<><MedSeniorPage /><HealthInternalLinks pathname="/medsenior" /></>} />
                  <Route path="/medsenior-campinas" element={<><MedSeniorCampinasPage /><HealthInternalLinks pathname="/medsenior-campinas" /></>} />
                  <Route path="/medsenior-sao-bernardo-do-campo" element={<><MedSeniorSaoBernardoPage /><HealthInternalLinks pathname="/medsenior-sao-bernardo-do-campo" /></>} />
                  <Route path="/sulamerica" element={<><SulamericaPage /><HealthInternalLinks pathname="/sulamerica" /></>} />
                  <Route path="/sulamerica-campinas" element={<><SulamericaCampinasPage /><HealthInternalLinks pathname="/sulamerica-campinas" /></>} />
                  <Route path="/sulamerica-ribeirao-preto" element={<><SulamericaRibeiraoPretoPage /><HealthInternalLinks pathname="/sulamerica-ribeirao-preto" /></>} />
                  <Route path="/sulamerica-sao-bernardo-do-campo" element={<><SulamericaSaoBernardoPage /><HealthInternalLinks pathname="/sulamerica-sao-bernardo-do-campo" /></>} />
                  <Route path="/sulamerica-sorocaba" element={<><SulamericaSorocabaPage /><HealthInternalLinks pathname="/sulamerica-sorocaba" /></>} />
                  <Route path="/unimed" element={<><UnimeduniplanPage /><HealthInternalLinks pathname="/unimed" /></>} />
                  <Route path="/porto" element={<><PortoPage /><HealthInternalLinks pathname="/porto" /></>} />
                  <Route path="/alice" element={<><AlicePage /><HealthInternalLinks pathname="/alice" /></>} />

                  <Route path="/garantia-saude" element={<GarantiaSaudePage />} />
                  <Route path="/sao-miguel" element={<SaoMiguelPage />} />
                  <Route path="/trasmontano" element={<TrasmontanoPage />} />
                  <Route path="/sao-cristovao" element={<SaoCristovaoPage />} />
                  <Route path="/plena-saude" element={<PlenaSaudePage />} />
                  <Route path="/biovida" element={<BiovidaPage />} />
                  <Route path="/unihosp" element={<UnihospPage />} />

                  <Route path="/thank-you" element={<ThankYouPage />} />
                  <Route path="/obrigado" element={<ThankYouPage />} />
                  <Route path="/blog" element={<><BlogPage /><HealthInternalLinks pathname="/blog" /></>} />
                  <Route path="/blog/:slug" element={<PostDetail />} />
                  <Route path="/planos-de-saude" element={<Navigate to="/encontre-seu-plano" replace />} />
                  <Route path="/planos-saude" element={<Navigate to="/encontre-seu-plano" replace />} />
                  <Route path="/health-plans" element={<Navigate to="/encontre-seu-plano" replace />} />
                  <Route path="/seguros-auto" element={<Navigate to="/seguro-auto" replace />} />
                  <Route path="/contato" element={<Navigate to="/" replace />} />
                  <Route path="/online-quote" element={<Navigate to="/encontre-seu-plano" replace />} />
                  <Route path="/customer-support" element={<Navigate to="/" replace />} />
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
              <CampaignLandingSeo />
              <SocialMetaSync />
            </ErrorBoundary>
          </main>
          {showHeaderFooter && <Footer />}
        </PullToRefreshContainer>

        {!hideGlobalConversionWidgets && <FloatingWhatsApp />}
        {!hideGlobalConversionWidgets && <ExitIntentModal />}
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
