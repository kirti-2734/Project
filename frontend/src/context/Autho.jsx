import React, { createContext, useState } from 'react'
import { useContext } from 'react';

export const AuthoContaxt = createContext();
export default function AuthoProvider({children}){

    const InitialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser ] = useState(

        InitialAuthUser ? JSON.parse(InitialAuthUser):undefined
    );

    return(
       <AuthoContaxt.Provider value={[authUser,setAuthUser]}>
        {children}
       </AuthoContaxt.Provider>
    )
}

export const useAuth = ()=> useContext(AuthoContaxt);