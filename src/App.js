// App.js
import React from 'react';
import styled from 'styled-components';
import Navbar from './components/shared/Navbar'
import Rutas from './routes/Rutas';
import { AuthContextProvider, } from './Context/AuthContext';


function App() {

  

  return ( 
    <AuthContextProvider>
            <Navbar/>
            <Rutas/>
    </AuthContextProvider>
  
  );
}

export default App;

const Contenedor= styled.div`
  max-width: 100vw;
  min-height: 100vw;  
`