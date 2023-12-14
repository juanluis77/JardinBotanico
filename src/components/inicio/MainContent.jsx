//MainContent.jsx
import React, { useState } from 'react';
import AcercaDelJardin from '../inicio/AcercaDelJardin';
import GuiaDeBienvenida from '../inicio/GuiaDeBienvenida';
import Historia from '../inicio/Historia';
import styled from 'styled-components';
import Breadcrumb from '../shared/Breadcrumb';

function MainContent() {
    // Estado para controlar qué contenido mostrar
    const [content, setContent] = useState('Inicio');
  
    let ContentComponent;
    switch (content) {
      case 'guia-de-bienvenida':
        ContentComponent = <GuiaDeBienvenida />;
        break;
      case 'acerca-del-jardin':
        ContentComponent = <AcercaDelJardin />;
        break;
      case 'historia':
        ContentComponent = <Historia />;
        break;
      default:
        ContentComponent = <div>Bienvenido al Jardín Botánico Martín Cárdenas</div>;
    }
  
    return (
      <>
      <Breadcrumb currentSubsection={content !== 'Inicio' ? content : ''} />

      <ContentLayout>
            <SideColumn>
                 <StyledButton onClick={() => setContent('guia-de-bienvenida')}>Guía de bienvenida</StyledButton>
                 <StyledButton onClick={() => setContent('acerca-del-jardin')}>Acerca del Jardín</StyledButton>
                 <StyledButton onClick={() => setContent('historia')}>Historia</StyledButton>
            </SideColumn>
            
             <MainColumn>
                {ContentComponent}
            </MainColumn>
      </ContentLayout>
      </>
    );
  }

export default MainContent;

// Estilos con styled-components

const ContentLayout = styled.div`
display: flex;
justify-content: space-between;
height: 100vh; // O la altura que prefieras
`;

const SideColumn = styled.div`
background-color: rgba(94, 171, 227, 0.12); // Tu color de fondo deseado para las columnas laterales
color: #000; // Cambia el color del texto a oscuro para que sea legible
// Añade aquí otros estilos para las columnas laterales
padding: 1rem; // Agrega algo de espacio alrededor del contenido
width:20%;
`;

const MainColumn = styled.div`
width: 79.5%; // Cambiado de 70% a 60% si cada SideColumn es 20%
  background-color: #5EABE3; // Un tono más oscuro para el contenido central
  color: #000; // Cambia el color del texto a oscuro para que sea legible
  // Añade aquí otros estilos para la columna principal
  padding: 2rem; // Agrega algo de espacio alrededor del contenido
`;
// Si estás usando botones y quieres que parezcan enlaces, podrías estilizarlos así:
const StyledButton = styled.button`
  background-color: transparent; // Fondo transparente
  border: none; // Sin bordes
  color: #000; // Texto oscuro
  padding: 10px;
  margin: 5px 0;
  text-align: left; // Alinea el texto a la izquierda
  width: 100%; // Ocupa todo el ancho disponible
  cursor: pointer; // Cambia el cursor para indicar que es un elemento interactivo

  &:hover {
    background-color: rgba(94, 171, 227, 0.12); // Cambia el fondo al pasar el mouse
  }
`;