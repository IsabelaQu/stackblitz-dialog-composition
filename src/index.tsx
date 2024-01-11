import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App name="DialogWithComposition" />
  </StrictMode>
);