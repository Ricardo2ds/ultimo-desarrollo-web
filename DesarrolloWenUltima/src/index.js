// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Tu archivo CSS global
import App from './App'; // Importar el componente App
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
