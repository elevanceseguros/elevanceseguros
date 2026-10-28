import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { HelmetProvider } from 'react-helmet-async';
import { installLeadRuntimeTracking } from '@/lib/leadRuntimeTracking';
import '@/index.css';

installLeadRuntimeTracking();

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider><App /></HelmetProvider>
);
