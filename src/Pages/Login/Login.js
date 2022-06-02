import React, {useContext} from 'react';
import './Login.css';
import {useForm} from "react-hook-form";
import {AuthContext} from "../../AuthContext/AuthContext";

function LoginPage() {

    const authContext = useContext( AuthContext );

    const {register, formState:{errors}, handleSubmit} = useForm( {
        mode:'onTouched'
    });

    function onFormLogin( _data ){
        authContext.login( _data.username, _data.password);
        console.log( authContext );
    }

    return (
        <div className="outer-container-user">
            <div className="inner-container-user">
                    <form onSubmit={handleSubmit(onFormLogin)}>
                        <fieldset className="input-fields">
                            <label htmlFor="details-username"
                                   className="input-label">
                                Username:
                                <input
                                    className="fields"
                                    type="text"
                                    id="details-username"
                                    {...register("username", {
                                        required: "Username must be filled in",
                                    })}
                                />
                            </label>
                            {(errors.username || errors.username) && <p className="error">Username must be filled in</p>}
                            <label htmlFor="details-password"
                                   className="input-label">
                                Password:
                                <input
                                    className="fields"
                                    type="password"
                                    id="details-password"
                                    {...register("password", {
                                        required: "Password is not set",
                                    })}
                                />
                                {(errors.password || errors.password) && <p className="error">Password is not set</p>}
                                {/*{(errors.password || errors.username) && <p className="error">Account doesn't exist</p>}*/}
                            </label>
                            <button
                                className="button-user"
                                type="submit">
                                Login
                            </button>
                        </fieldset>
                    </form>
            </div>
        </div>
    );
}

export default LoginPage;