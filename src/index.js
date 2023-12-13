import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Este componente debería manejar tus rutas
import './index.css'; // Importa tus estilos globales aquí
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap para estilos

ReactDOM.render(
  <React.StrictMode>
    
      <App  /> {/* App es el componente que debería contener tu configuración de rutas */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Inicio from './components/inicio/Inicio'; // Asegúrate de que el nombre del archivo sea correcto y la ruta sea precisa
import './index.css'; // Si tienes un archivo de estilos global, puedes importarlo aquí
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>,
  document.getElementById('root')
);*/