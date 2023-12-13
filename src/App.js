// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/inicio/Navbar';
import AcercaDelJardin from './components/inicio/AcercaDelJardin';
import GuiaDeBienvenida from './components/inicio/GuiaDeBienvenida';
import Historia from './components/inicio/Historia';
import Inicio from './components/inicio/Inicio';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/inicio" element={<Inicio />} />
        <Route path="/acerca-del-jardin" element={<AcercaDelJardin />} />
        <Route path="/guia-de-bienvenida" element={<GuiaDeBienvenida />} />
        <Route path="/historia" element={<Historia />} />
      </Routes>
    </Router>
  );
}

export default App;
