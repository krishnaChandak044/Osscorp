import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './page';
import PolicyPage from './policy-pages';
import './globals.css';

const path = window.location.pathname.replace(/\/$/, '');
const app = path === '/privacy-policy'
  ? <PolicyPage kind="privacy" />
  : path === '/disclaimer'
    ? <PolicyPage kind="disclaimer" />
    : <Home />;

createRoot(document.getElementById('root')!).render(<React.StrictMode>{app}</React.StrictMode>);
