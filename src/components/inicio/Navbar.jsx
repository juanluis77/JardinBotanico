import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import '../estilos/Navbar.css'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
      <LogoAndTitle>
      <img src="/imagenes/logodejardin.png" width="80" height="70" alt="Logo del Jardín Botánico Martín Cárdenas" />
<h2>Jardín Botánico <span>Martín Cárdenas</span></h2>
</LogoAndTitle>
        <div className={`links ${clicked ? 'active' : ''}`}>
        <Link to="/inicio" className="nav-link">Inicio</Link>
          <Link to="/clasificacion-de-las-plantas" className="nav-link">Clasificación de las plantas</Link>
          <Link to="/escanear-planta" className="nav-link">Escanear planta</Link>
          <Link to="/como-llegar" className="nav-link">¿Cómo llegar?</Link>
          <Link to="/Iniciar-sesion" className="nav-link">Iniciar Sesion</Link>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto; /* Asegura que el contenedor de enlaces se empuje hacia la derecha */

  img {
    margin-right: 10px; /* Ajusta este valor según sea necesario para acercar el texto al logo */
  }

  h2 {
    margin: 0; /* Elimina el margen por defecto del h2 si es necesario */
    color: white;
    font-weight: 400;

    span {
      font-weight: bold;
    }
  }
`;

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: green; /* Cambiado a verde */
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: black; /* Cambiado a negro */
    text-decoration: none;
    margin-right: 1rem;
    transition: text-shadow 0.3s ease; /* Transición para el efecto de sombra */

    &:hover {
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); /* Efecto de sombra al pasar el cursor */
    }
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`