import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app.js';
import '/Users/taylorsheets/MVP/client/src/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);