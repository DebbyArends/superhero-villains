import React, {useContext} from 'react';
import './Login.css';
import {useForm} from "react-hook-form";
import {AuthContext} from "../../AuthContext/AuthContext";

function LoginPage() {

    const {login} = useContext( AuthContext );

    const {register, formState:{errors}, handleSubmit} = useForm( {
        mode:'onTouched'
    });

    function onFormLogin( _data ){
        login( _data.username, _data.password);
    }

    return (
        <div className="outer-container-login">
            <div className="inner-container-login">
                    <form onSubmit={handleSubmit(onFormLogin)}>
                        <div className="user-container">
                            <h2 className="user-title">Login</h2>
                        </div>
                        <div className="input-fields">
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
                            {errors.username && <p className="error">Username must be filled in</p>}
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
                                {errors.password && <p className="error">Password is not set</p>}
                            </label>
                            <button
                                className="button-user"
                                type="submit">
                                Login
                            </button>
                        </div>
                    </form>
            </div>
        </div>
    );
}

export default LoginPage;