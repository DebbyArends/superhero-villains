import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import tokenIsValid from "../helpers/tokenIsValid";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext(null);

function AuthContextProvider( {children} ){

    const [auth, toggleAuth] = useState( {
        isAuth: false,
        user: null,
        status: "pending",
    })

    useEffect( () => {

        const token = localStorage.getItem('token');

        if ( token ) {

            if ( tokenIsValid( token, 30 )){
                console.log( "Token is found" );
                fetchUserData( token );
            }else{
                console.log( "Token found but timestamp is expired" );
                toggleAuth( {
                    ...auth,
                    status:'done',
                })
                history.push( '/login');
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

    // async function testEndpoint(){
    //     try {
    //         const result = await axios.get("https://frontend-educational-backend.herokuapp.com/api/test/user")
    //         console.log(result)
    //     }
    //     catch (e){
    //         console.error(e)
    //     }
    // }
    //
    // testEndpoint()

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
        }
        catch(e){
            console.error(e)

            toggleAuth( {
                ...auth,
                status:'done',
            })
        }
    }

    async function signUp( _username, _email, _password ){
        try {
            const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {
                "username": _username,
                "email": _email,
                "password": _password,
                "role": ["user"]
            });

            console.log(response);
            console.log("De gebruiker is geregistreerd");

            // Automatisch inloggen na registratie
            signIn( _username, _password );

        }
        catch(e){
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
            // fetchUserData('token')
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
            console.log("De gebruiker is ingelogd");

            return response;
        }
        catch (e) {
            console.error(e);

            toggleAuth( {
                ...auth,
                status: 'done',
            });
            return e
        }
    }

    function register( _username, _email, _password ) {
        signUp( _username, _email, _password )
        history.push( '/');
    }

    function login( _username, _password ){
        signIn( _username, _password);
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
        console.log("De gebruiker is uitgelogd");
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