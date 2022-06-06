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

        <div className="outer-container-register">
            <div className="inner-container-register">
                    <form onSubmit={handleSubmit(onFormRegister)}>
                        <div className="user-container">
                            <h2 className="user-title">Register here!</h2>
                        </div>
                        <div className="input-fields-register">
                            <div className="input-column">
                                <label htmlFor="details-username"
                                       className="input-label">
                                    Username:
                                    <input
                                        className="fields"
                                        type="text"
                                        id="details-username"
                                        {...register("username", {
                                            required:"Username must be filled",
                                            minLength:{
                                                value:6,
                                                message:"Username must be longer than 5 characters"
                                            },
                                            pattern: {
                                                value: /^[A-Z0-9_\-.]{6,}$/i,
                                                message: "No special characters are aloud"
                                            }
                                        })}
                                    />
                                    {errors.username && <p className="error">{errors.username.message}</p>}
                                </label>
                            </div>
                            <label htmlFor="details-email"
                                   className="input-label">
                                E-mail:
                                <input
                                    className="fields"
                                    type="text"
                                    id="details-email"
                                    {...register("email", {
                                        required:"E-mail must be filled",
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
                                            message: "Needs a capital letter, special character and number"
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
                                            validate:(value) => value === password || "The passwords don't match",
                                        })}
                                    />
                                {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                            </label>
                            <div className="button-container-user">
                                <button
                                    className="button-user"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>

    );
}

export default Register;