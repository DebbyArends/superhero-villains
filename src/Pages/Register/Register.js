import React, {useContext} from 'react';
import './Register.css';
import {useForm} from "react-hook-form";
import {AuthContext} from "../../AuthContext/AuthContext";

function Register() {

    const authContext = useContext( AuthContext );

    const {register, formState:{errors}, handleSubmit, watch} = useForm( {
        mode:'onTouched'
    });

    function onFormRegister( _data ){

        authContext.register( _data.username, _data.email, _data.password);
        console.log( authContext );
    }


    // watch the password so it can check if it's the same
    const password = watch('password');


    return (

        <div className="outer-container-user">
            <div className="inner-container-user">
                    <form onSubmit={handleSubmit(onFormRegister)}>
                        <div className="input-fields">
                            <label htmlFor="details-username"
                                   className="input-label">
                                Username:
                                <input
                                    className="fields"
                                    type="text"
                                    id="details-username"
                                    {...register("username", {
                                        required:"Username must be filled in",
                                        minLength:{
                                            value:6,
                                            message:"Username must be longer than 5 chars"
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9_\-.]{6,}$/i,
                                            message: "No special chars are aloud"
                                        }
                                    })}
                                />
                                {errors.username && <p className="error">{errors.username.message}</p>}
                            </label>
                            <label htmlFor="details-email"
                                   className="input-label">
                                E-mail:
                                <input
                                    className="fields"
                                    type="text"
                                    id="details-email"
                                    {...register("email", {
                                        required:"E-mail must be filled in",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid e-mail address"
                                        }
                                    })}
                                />
                                {errors.email && <p className="error">{errors.email.message}</p>}
                            </label>
                            <label htmlFor="details-password"
                                   className="input-label">
                                Password:
                                <input
                                    className="fields"
                                    type="password"
                                    id="details-password"
                                    {...register("password", {
                                        required:"Password is not set",
                                        minLength:{
                                            value:6,
                                            message:"Must be longer than 5 characters"
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#~])[A-Za-z\d@$!%*?&#~]+$/gi,
                                            message: "Need capital- special char and number"
                                        }
                                    })}
                                />

                                {errors.password && <p className="error">{errors.password.message}</p>}
                            </label>
                            <label htmlFor="details-confirmPassword"
                                   className="input-label">
                                Confirm Password:
                                <input
                                    className="fields"
                                    type="password"
                                    id="details-confirmPassword"
                                    onPaste={(e) =>{
                                        e.preventDefault()
                                        return false;
                                    }}
                                    {...register("confirmPassword", {
                                        required:true,
                                        validate:(value) => value === password || "The password do not match",
                                    })}
                                />

                                {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                            </label>
                            <button
                                className="submit-button"
                                type="submit"
                                >
                                Register
                            </button>
                        </div>
                    </form>
            </div>
        </div>

    );
}

export default Register;