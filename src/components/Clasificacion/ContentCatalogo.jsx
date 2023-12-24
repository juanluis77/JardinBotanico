import React, { useState, } from 'react';
import styled from 'styled-components';
import Breadcrumb from '../shared/Breadcrumb';



function ContentCatalogo() {
      // Estado para controlar qué contenido mostrar
      const [content, setContent] = useState('Catalogo');
      const lateralIzquierdo = (
        <div>
          <h5>izquierda</h5>
        </div>
      );      
      const ContentComponent = (
        <div>
          <h1>este es un catalogo</h1>
        </div>
      );
      const lateralDerecho = (
        <div>
          <h5>derecha</h5>
        </div>
      );
  return (
    <>
      <Breadcrumb currentSubsection={content !== 'Catalogo' ? content : ''} />
      <LayoutCatalogo>
        <ColumnIzq> { lateralIzquierdo } </ColumnIzq>  
        <MainColumn> {ContentComponent} </MainColumn>
        <ColumnDer> { lateralDerecho} </ColumnDer>
     </LayoutCatalogo>
    </>
  );
 }

export default ContentCatalogo;
""
// Estilos con styled-components
const ColumnDer = styled.div`
width: 79.5%;                     // Cambiado de 70% a 60% si cada SideColum  n es 20%
  background-color: #5EABE3;      // Un tono más oscuro para el contenido central
  color: #000;                    // Cambia el color del texto a oscuro para que sea legible
  padding: 2rem;                  // Agrega algo de espacio alrededor del contenido
`;

const ColumnIzq = styled.div`
background-color: rgba(94, 171, 227, 0.12); // Tu color de fondo deseado para las columnas laterales
color: #000; // Cambia el color del texto a oscuro para que sea legible
padding: 1rem; // Agrega algo de espacio alrededor del contenido
width:20%;
`;

const MainColumn = styled.div`
width: 79.5%;                     // Cambiado de 70% a 60% si cada SideColum  n es 20%
  background-color: #5EABE3;      // Un tono más oscuro para el contenido central
  color: #000;                    // Cambia el color del texto a oscuro para que sea legible
  padding: 2rem;                  // Agrega algo de espacio alrededor del contenido
`;
const LayoutCatalogo = styled.div`
display: flex;
justify-content: space-between;
height: 100vh;                   // O la altura preferida
background:yellow;
`;

