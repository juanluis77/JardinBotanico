import React from 'react';

import { useLocation, Link } from 'react-router-dom';
import '../estilos/Breadcrumb.css'; // Ajusta la ruta según tu estructura de carpetas

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';




const Breadcrumb = ({ currentSubsection }) => {
  const location = useLocation();
  let pathnames = location.pathname.split('/').filter(x => x);

  // Agrega la subsección actual al final de las migas de pan
 
  if (currentSubsection) {
    pathnames.push(currentSubsection);
  }
  

  return (
    <nav className="breadcrumb">
      
       <Link to="/inicio"><FontAwesomeIcon icon={faHome} /></Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = name.replace(/-/g, ' '); // reemplaza guiones con espacios para una mejor visualización
        return (
          <span key={index}>
            {' '}/{' '}
            <Link to={routeTo}>
              {displayName.charAt(0).toUpperCase() + displayName.slice(1)}
            </Link>
          </span>
        );
      })}
            
    
    </nav>
  );
};

export default Breadcrumb;