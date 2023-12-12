// Inicio.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import SeccionDeInicio from './SeccionDeInicio';
import GuiaDeBienvenida from './GuiaDeBienvenida';
import AcercaDelJardin from './AcercaDelJardin';
import Historia from './Historia';
import '../estilos/Inicio.css';

const Inicio = () => {
  const [seccionInicio] = useState({
    titulo: 'Inicio',
    descripcion: 'Bienvenido al jardín botánico',
  });

  const [contenidoCentral, setContenidoCentral] = useState(<GuiaDeBienvenida />);

  const cambiarContenido = (nuevoContenido) => {
    setContenidoCentral(nuevoContenido);
  };

  return (
    <div className="Inicio">
      <Navbar />
      <div className="miga-de-pan">
        {/* Agrega la miga de pan aquí */}
      </div>
      <div className="seccion-inicio">
        <SeccionDeInicio titulo={seccionInicio.titulo} descripcion={seccionInicio.descripcion} />
      </div>
      <div className="columnas">
        <div className="columna-izquierda">
          <a href="#" onClick={() => cambiarContenido(<GuiaDeBienvenida />)}>Guía de Bienvenida</a>
          <a href="#" onClick={() => cambiarContenido(<Historia />)}>Historia</a>
          <a href="#" onClick={() => cambiarContenido(<AcercaDelJardin />)}>Acerca del Jardín</a>
        </div>
        <div className="columna-central">
          {contenidoCentral}
          {/* Otros componentes según sea necesario */}
        </div>
        <div className="columna-derecha">
          {/* Contenido de la columna derecha */}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
