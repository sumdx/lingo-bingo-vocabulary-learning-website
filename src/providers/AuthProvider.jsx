import React, { createContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const authInfo ={
        name: "Sumnath Das Biraz"
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;