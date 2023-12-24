import { useContext, createContext, useEffect, useState, } from "react";
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged, } from "firebase/auth";
//import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, } from "firebase/auth";
import {auth} from '../services/firebaseConfig';


const AuthContext = createContext();

export const AuthContextProvider =({children}) => {

    const[user, setUser] = useState({});
    //conectar con auth de google
    const googleSignIn = ()=>{
        const proveedor = new GoogleAuthProvider();
        //signInWithPopup(auth, proveedor);
        signInWithRedirect(auth, proveedor);
};
    //desconectarse
    const logOut = ()=>{
        signOut(auth);
    }
    //volver a logear
    useEffect(()=>{
        const  volverAlaCuenta= onAuthStateChanged(auth, (userActual)=> {
            setUser(userActual); 
        })
        return ()=> { volverAlaCuenta(); }     //suscribirse-unsubscribe
    },[]);

    return (
        <AuthContext.Provider value = { { googleSignIn, logOut, user } } >
            {children}
        </AuthContext.Provider>
    );
}

//permite usar el authcontextprovider
export const UserAuth = ()=> {
    return useContext(AuthContext);
}