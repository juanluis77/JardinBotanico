// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/inicio/Navbar';
import Inicio from './components/inicio/Inicio';
function App() {
  return ( 
 
    <Router>
     
      <Navbar />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </Router>
 
  );
}

export default App;
