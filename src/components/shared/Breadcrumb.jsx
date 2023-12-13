import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../estilos/Breadcrumb.css'; // Ajusta la ruta según tu estructura de carpetas

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="breadcrumb">
      <Link to="/">Inicio</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <span key={index}>
            {' '}/{' '}
            <Link to={routeTo}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
