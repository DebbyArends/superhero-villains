import React, {useState} from "react";
import superwoman from "../../assets/superwoman.jpg"
import superhero from "../../assets/supehero-male.jpg"
import progressBar from "../../assets/yellow-speedline.jpg"
import {useForm} from "react-hook-form";
import "./AppearanceQuiz.css"
import {getKeyEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

function AppearanceQuiz() {
    // const[{gender, setGender}]=useState()
    const { register } = useForm();
    
    return (
        <>
                <form>
                    <section className="outer-container-gender">
                        <h5 className="question-quiz">Do the quiz to find out which superhero or villain has the same looks as you!</h5>
                        <div className="container-progress-bar">
                            <p>hoi
                            </p>
                        </div>
                        <article className="inner-container-gender">
                            <div className="container-input">
                                <label htmlFor="radio-male">
                                    <input
                                        type="radio"
                                        {...register("radio-male")}
                                    />
                                    Male
                                </label>
                                <img src={superhero} alt="superhero male pop art" className="gender-image"/>
                            </div>

                            <div className="container-input">
                                <label htmlFor="radio-female">
                                    <input
                                        type="radio"
                                        {...register("radio-female")}
                                    />
                                    Female
                                </label>
                                <img src={superwoman} alt="superhero female pop art"className="gender-image"/>
                            </div>
                        </article>
                        <button
                            type="submit"
                        >
                            Next
                        </button>
                    </section>
                </form>
        </>

    )
}


export default AppearanceQuiz