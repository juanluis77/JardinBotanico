import React from 'react';

const SeccionInicio = ({ titulo, descripcion }) => {
  return (
    <div className="seccion-inicio">
      <h1 className="titulo">{titulo}</h1>
      <p className="descripcion">{descripcion}</p>
    </div>
  );
};

export default SeccionInicio;
