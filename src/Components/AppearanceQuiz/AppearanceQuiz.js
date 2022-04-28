import React, {useState} from "react";
import superwoman from "../../assets/superwoman.jpg"
import superhero from "../../assets/supehero-male.jpg"
import {useForm} from "react-hook-form";
import "./AppearanceQuiz.css"

function AppearanceQuiz() {
    // const[{gender, setGender}]=useState()
    const { register } = useForm();
    
    return (
        <>
            <div className="main-quiz">
                <h5 className="question-quiz">Do the quiz to find out which superhero or villain has the same looks as you!</h5>
            </div>
            <form>
                <section className="outer-container-gender">
                    <h5 className="question-quiz">What is your gender?</h5>
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
                </section>
            </form>
        </>

    )
}


export default AppearanceQuiz