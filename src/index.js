import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';                             // Importa tus estilos globales aquí
import App from './App';                            // Este componente debería manejar tus rutas
import 'bootstrap/dist/css/bootstrap.min.css';    // Importa Bootstrap para estilos
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <React.StrictMode>
  <BrowserRouter>
          <App />             {/* App es el componente que debería contener tu configuración de rutas */}
          </BrowserRouter>
      </React.StrictMode>
);

reportWebVitals();


