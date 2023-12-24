import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext';

import Inicio from '../components/inicio/Inicio';
import Catalogo from '../views/Catalogo'; 
import Login from '../views/Login'; 
import Administrador from '../views/Administrador';
import rutaProtegida from './rutaProtegida';
import AcercaDelJardin from '../components/inicio/AcercaDelJardin';
import GuiaDeBienvenida from '../components/inicio/GuiaDeBienvenida';
import Historia from '../components/inicio/Historia';
import RegistrarAdmin from '../components/admin/RegistrarAdmin';
import RegistrarPlanta from '../components/admin/RegistrarPlanta';
import RegistroDeAdmin from '../components/admin/RegistroDeAdmin';



function Rutas() {
  
    const {user} = UserAuth();
    const RequireAuth = ({children})=>{
      return user? children: <Navigate to={"/Login"} />;
    };

   return  (
    <Routes>
      <Route path="/" element={ <Inicio/>} />
      <Route path="/Inicio" element={<Inicio/>} />
      <Route path="/Clasificacion-de-las-plantas" element={<Catalogo/>} />
      <Route path="/Login" element={ <Login/> } />
      <Route path="/Admin" element={ <RequireAuth> <Administrador/> </RequireAuth> } />
      <Route path="/guia-de-bienvenida" element={<GuiaDeBienvenida/> } />
      <Route path="/acerca-del-jardin" element={ <AcercaDelJardin/> } />
      <Route path="/historia" element={ <Historia/> } />
      <Route path="/Registrar Administradores" element={ <rutaProtegida> <RegistrarAdmin/> </rutaProtegida> }/>
      <Route path="/Administradores Registrados" element={ <rutaProtegida> <RegistroDeAdmin/> </rutaProtegida> }/>
      <Route path="/Registrar Plantas" element={ <rutaProtegida> <RegistrarPlanta/> </rutaProtegida> }/>
    </Routes>  
  );
}

export default Rutas;