import React from 'react';
import '../estilos/Inicio.css';
const Navbar = () => {
  return (
    <div>
      {/* Iniciar Sesión */}
      <div className="text-right p-2 bg-light">
        <a href="/iniciar-sesion" className="text-dark">Iniciar sesión</a>
      </div>

      {/* Barra de Navegación */}
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/">
        <img src="/imagenes/logodejardin.png" alt="Jardín Botánico Martín Cárdenas" width="80" height="70"  />
        <span className="ml-2 custom-brand-text">Jardín Botánico Martín Cárdenas</span>

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/clasificacion">Clasificación de las plantas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/escaner">Escanear planta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/como-llegar">¿Cómo llegar?</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

