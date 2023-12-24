
import React, { useEffect}  from 'react';
import {UserAuth} from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../estilos/ContentLogin.css' 

import LogoGoogle from './../../images/LogoGoogle.png';
import jardin from './../../images/Jardin.png';



const ContentLogin = () => {

   const { user, googleSignIn } = UserAuth();
   const navigate = useNavigate();
   const iniciarSesion = async() =>{
     try {
         await googleSignIn();
     }catch(error){
         console.log(error);  
     }
   }; 
   useEffect(()=>{
      if(user!==null){
         navigate('/Admin')
      }
   },[user]);

   return ( 
      <div className="container align-items-center text-center" >
         <h1 className = "cuenta"> ¡  Hola  Administrador(a)  ! </h1> 
         <div className="containerCard  align-items-center text-center">
            <div className = "card rounded-10 border border-warning ">
               <div className="card-body align-content-end flex-wrap text-center ">
                  <h2>Iniciar sesión</h2>
                  <p>elige una cuenta</p>
                  <button onClick={iniciarSesion} className= "border border-warning rounded-pill">
                     <img  id="logoGoogle" src = { LogoGoogle} />
                     <span> Iniciar con Gmail </span>
                  </button>
               </div>
               <div className="imgJardin">
                  <img id="logoJardin" src = { jardin } />
               </div>
            </div>
         </div>
      </div>
   );
}

export default ContentLogin;