import React from 'react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; // Import createRoot

import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


