import React, {useState, createContext } from "react";

const AuthContext = createContext();
const {Provider} = AuthContext;

const AuthProvider = ({ children})=>{
    
  const userId = localStorage.getItem('userId');
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  
    const [authState, setAuthState] = React.useState({
                userId,
                firstName,
                lastName
             });
    
    const setAuthInfo = ({userId, firstName,lastName})=>{
        
        localStorage.setItem('userId', userId);
        
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
    
    

        setAuthState({
            userId,
            firstName,
            lastName
            
        });

    };

    // const isAuthenticated=()=>{

    //     if(!authState.token || !authState.expiresAt){
    //         return false;
    //     }
        
    //     return new Date().getTime() / 1000 < authState.expiresAt;

    // }

    

    const logOut = () => {
        localStorage.removeItem('token');
    
        localStorage.removeItem('expiresAt');
        setAuthState({
            token: null,
            expiresAt:null,

        });

    }

    return (
        <Provider 
            value = {{
            authState,
            setAuthState: authInfo => setAuthInfo(authInfo),   
            logOut,
            // isAuthenticated,
            
            } } 
        > 
        { children }
        </Provider>
    );
};

export {AuthContext , AuthProvider};