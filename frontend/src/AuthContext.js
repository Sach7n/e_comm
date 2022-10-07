import useAuth from './hooks/useAuth'
import React, { useState, useEffect,useContext } from 'react';


const AuthContext = React.createContext()

const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

    const {user,status}=useAuth(file,'http://localhost:5000/admin/')


    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}

export { useAuthContext, AuthProvider}