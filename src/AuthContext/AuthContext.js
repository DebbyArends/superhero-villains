import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import tokenIsValid from "../helpers/tokenIsExpired";

export const AuthContext = createContext(null);

function AuthContextProvider( {children}){

    const [auth, toggleAuth] = useState( {
        isAuth: false,
        user: null,
        status: "pending",
    })

    useEffect( () => {

        const token = localStorage.getItem('token');

        if ( token ) {

            if ( tokenIsValid( token, 30 ) ){ // in minutes
                console.log( "Token is found and signs in" );
                fetchUserData( token );
            }else{
                console.log( "Token found but timestamp is expired" );
                toggleAuth( {
                    ...auth,
                    status:'done',
                })
                history.push( '/signin');
            }

        }else{
            console.log( "No token found" );
            toggleAuth( {
                ...auth,
                status:'done',
            })
        }
    }, []);

    const history = useHistory();

    async function fetchUserData( _token ) {
        try{
            const response = await axios.get( "https://frontend-educational-backend.herokuapp.com/api/user",{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${_token}`,
                }
            });

            console.log( response );

            toggleAuth( {
                ...auth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    username: response.data.username,
                },
                status: 'done',
            });

        }catch(e){
            console.error(e)

            toggleAuth( {
                ...auth,
                status:'done',
            })
        }
    }

    async function signUp( _username, _email, _password ){
        console.log( "SignUp");
        try {
            const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {
                "username": _username,
                "email": _email,
                "password": _password,
                "role": ["user"]
            });

            console.log(response);

            // Automatisch inloggen na registratie
            signIn( _username, _password );

        }catch(e){
            console.error(e)
            console.log( e.response );

            toggleAuth( {
                ...auth,
                status:'done',
            })
        }
    }

    async function signIn( _username, _password ){
        try {
            const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
                "username": _username,
                "password": _password,
            });

            localStorage.setItem( 'token', response.data.accessToken );

            toggleAuth( {
                ...auth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    username: response.data.username,
                },
                status: 'done',
            });
            console.log( response );

            return response;
        }catch (e) {
            console.error(e);

            toggleAuth( {
                ...auth,
                status: 'done',
            });
            return e
        }
    }


    function login( _username, _password, _accesToken ){
        signIn( _username, _password );
        history.push( '/');
    }

    function logout() {
        toggleAuth( {
            ...auth,
            isAuth:false,
            user: null,
        });

        history.push( '/');
        localStorage.clear();
    }

    function register( _username, _email, _password ) {
        signUp( _username, _email, _password )
        history.push( '/');
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        register,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;