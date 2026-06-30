import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/layout.css";

import App from './App.tsx'
import { AppProviders } from './app/providers/app-providers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
)
