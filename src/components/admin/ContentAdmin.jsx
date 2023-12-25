import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Breadcrumb from '../shared/Breadcrumb';
import { UserAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import {Outlet, NavLink } from 'react-router-dom';
import '../estilos/ContentAdmin.css';

import RegistrarAdmin from './RegistrarAdmin';
import RegistrarPlanta from './RegistrarPlanta';
import RegistroDeAdmin from './RegistroDeAdmin';

function ContentAdmin () {
      
      // cerrar sesion
      const { user, logOut } = UserAuth();
      const navigate = useNavigate();
      const cerrarSesion = async() =>{
        try {
          await logOut();
          navigate("/Inicio");
          alert('Cierre de cuenta exitosa');
        }catch(error){
          console.log(error);  
        }
      }; 

      // Estado para controlar qué contenido muestra
      const [content, setContent] = useState(''); 

      let ContentComponent;
      switch (content) {
        case 'RegAdmin':
          ContentComponent = <RegistrarAdmin />;
          break;
        case 'AdminRegistrados':
          ContentComponent = <RegistrarPlanta />;
          break;
        case 'RegPlanta':
          ContentComponent = <RegistroDeAdmin />;
          break;
        default:
          ContentComponent = <div>
            <p>Administrador(a): {user.displayName}</p>
                      <p>Elige un tarea del menu de la izquierda</p>
                    </div>;
      };
      const [clicked, setClicked] = useState(false)
      const handleClick = () => {
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
      }
//          <p>Administrador(a): {user.displayName}</p>
          
  return (
    <>
    <Row className="container" id="container" >
        <Col lg={10}>
        <Breadcrumb currentSubsection={content !== 'Inicio'? content:''} />
        </Col>
        <Col lg={2}>
          <button onClick={cerrarSesion} className="btn btn-outline-success btn-sm " id="btnCerrar" >cerrar Sesion</button> 
        </Col>
    </Row>
    <Row>
      <Col lg={2} className='laterales'>
        <StyledButton onClick={() => setContent('Registrar Administradores')}>Registrar administrador</StyledButton>
        <StyledButton onClick={() => setContent('Administradores Registrados')}>Registro de administradores</StyledButton>
        <StyledButton onClick={() => setContent('Registrar Plantas')}>Registrar Planta</StyledButton>
      </Col>
      <Col lg={8} className="mainColumn">
          {ContentComponent}
      </Col>
      <Col lg={2}className='laterales'>  
        <div className={`links ${clicked ?'active': '' } `}>
          <br/>
           <NavLink end to="/guia-de-bienvenida" className="nav-link">Guía de bienvenida</NavLink>
          <br/>
           <NavLink end to="/acerca-del-jardin" className="nav-link">Acerca del Jardín</NavLink>
            <br/> 
           <NavLink end to="/historia" className="nav-link">Historia</NavLink>
        </div>
        <div className={`initial ${clicked ? ' active' : ''}`}></div>
         <Outlet/>   
       </Col>
    </Row>
  </>
  );
}

export default ContentAdmin;

const StyledButton = styled.button`
  background-color: transparent;    // Fondo transparente
  border: none;                     // Sin bordes
  color: #000;                      // Texto oscuro
  padding: 10px;
  margin: 5px 0;
  text-align: left;                 // Alinea el texto a la izquierda
  width: 100%;                      // Ocupa todo el ancho disponible
  cursor: pointer;                  // Cambia el cursor para indicar que es un elemento interactivo
`;
