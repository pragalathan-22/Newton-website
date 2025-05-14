import React from 'react';
import ReactDOM from 'react-dom/client'; // updated for React 18+
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// New root creation for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service worker (optional)
serviceWorker.unregister();
