import React from 'react';
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
);