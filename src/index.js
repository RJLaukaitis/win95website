import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import '98.css';//importing windows 98 libraries

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)