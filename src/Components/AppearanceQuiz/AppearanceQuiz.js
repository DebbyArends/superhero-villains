import React, {useState} from "react";
import superwoman from "../../assets/superwoman.jpg"
import superhero from "../../assets/supehero-male.jpg"
import {useForm} from "react-hook-form";
import "./AppearanceQuiz.css"


function AppearanceQuiz() {
    // const[{gender, setGender}]=useState()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const { register, handleSubmit } = useForm();
    const questions = [
        {
            questionText: 'What is your gender?',
            answerOptions: [
                {answerText: 'Male', image: <img src={superhero} alt="superhero male pop art" className="gender-image"/>},
                {answerText: 'Female',image: <img src={superwoman} alt="superhero female pop art"className="gender-image"/>},
            ]
        },
        {
            questionText: 'What is your height?',
            answerOptions: [
                { answerText: "cm"},
                { answerText: "inch"},
            ]
        },
        {
            questionText: 'What is your hair color?',
            answerOptions: [
                {answerText: 'No Hair'},
                {answerText: 'Black'},
                {answerText: 'Blond'},
                {answerText: 'Brown'},
                {answerText: 'White'},
                {answerText: 'Purple'},
                {answerText: 'Orange'},
                {answerText: 'Pink'},
                {answerText: 'Red'},
                {answerText: 'Auburn'},
                {answerText: 'Strawberry Blond'},
                {answerText: 'Blue'},
                {answerText: 'Green'},
                {answerText: 'Magenta'},
                {answerText: 'Silver'},
                {answerText: 'Grey'},
                {answerText: 'Orange / White'},
                {answerText: 'Brown / White'},
                {answerText: 'Yellow'},
                {answerText: '-'},
                {answerText: 'Gold'},
                {answerText: 'Red / Orange'},
                {answerText: 'indigo'},
            ]
        },
        {
            questionText: 'What is your weight?',
            answerOptions: [
                { answerText: "kg"},
                { answerText: "lbs"},
            ]
        },
        {
            questionText: 'What is your eye color?',
            answerOptions: [
                { answerText: "-"},
                { answerText: "Amber"},
                { answerText: "Black"},
                { answerText: "Blue"},
                { answerText: "Blue / White"},
                { answerText: "Brown"},
                { answerText: "Gold"},
                { answerText: "Green"},
                { answerText: "Green / Blue"},
                { answerText: "Grey"},
                { answerText: "Hazel"},
                { answerText: "Indigo"},
                { answerText: "Purple"},
                { answerText: "Red"},
                { answerText: "Silver"},
                { answerText: "Violet"},
                { answerText: "White"},
                { answerText: "White / Red"},
                { answerText: "Yellow"},
                { answerText: "Yellow (without irises)"},
                { answerText: "Yellow / Red"},
                { answerText: "Yellow / Blue"},

            ]
        },
    ]

function getQuestions(){
        if (questions[currentQuestion].questionText === 'What is your gender?' ||
                questions[currentQuestion].questionText === 'What is your hair color?' ||
                questions[currentQuestion].questionText === 'What is your eye color?') {
            return(
                    <>
                        {questions[currentQuestion].answerOptions.map((answerOption)=>
                            <label htmlFor="gender">
                                <input
                                    type="radio"
                                    {...register("gender")}
                                />
                                {answerOption.answerText}
                                <div>
                                    {answerOption.image}
                                </div>
                            </label>
                        )}
                    </>
            )}

        if (questions[currentQuestion].questionText === "What is your height?") {
            return(
                <>
                    <label htmlFor="height-in-cm">
                        <input
                            type="numbers"
                            {...register("height-in-cm")}
                        /> cm
                    </label>
                    <label htmlFor="height-in-inch">
                        <input
                            type="numbers"
                            {...register("height-in-inch")}
                        /> inch
                    </label>
                </>
            )
        }
        else if (questions[currentQuestion].questionText === "What is your weight?"){
            return (
                <>
                    <label htmlFor="weight-in-kg">
                        <input
                            type="numbers"
                            {...register("weight-in-kg")}
                        /> kg
                    </label>
                    <label htmlFor="weight-in-lbs">
                        <input
                            type="numbers"
                            {...register("weight-in-lbs")}
                        /> lbs
                    </label>
                </>
            )
        }
    }

    function handleAnswerInput() {
        const nextQuestion = currentQuestion + 1
        setCurrentQuestion(nextQuestion)
    }
    
    return (
        <>
                {/*<form>*/}
                {/*    <section className="outer-container-gender">*/}
                {/*        <h5 className="question-quiz">Do the quiz to find out which superhero or villain has the same looks as you!</h5>*/}
                {/*        <div className="container-progress-bar">*/}
                {/*            <p>25%</p>*/}
                {/*        </div>*/}
                {/*        <article className="inner-container-gender">*/}
                {/*            <div className="container-input">*/}
                {/*                <label htmlFor="radio-male">*/}
                {/*                    <input*/}
                {/*                        type="radio"*/}
                {/*                        {...register("radio-male")}*/}
                {/*                    />*/}
                {/*                    Male*/}
                {/*                </label>*/}
                {/*                <img src={superhero} alt="superhero male pop art" className="gender-image"/>*/}
                {/*            </div>*/}

                {/*            <div className="container-input">*/}
                {/*                <label htmlFor="radio-female">*/}
                {/*                    <input*/}
                {/*                        type="radio"*/}
                {/*                        {...register("radio-female")}*/}
                {/*                    />*/}
                {/*                    Female*/}
                {/*                </label>*/}
                {/*                <img src={superwoman} alt="superhero female pop art"className="gender-image"/>*/}
                {/*            </div>*/}
                {/*        </article>*/}
                {/*        <button*/}
                {/*            type="submit"*/}
                {/*        >*/}
                {/*            Next*/}
                {/*        </button>*/}
                {/*    </section>*/}
                {/*</form>*/}
            <div className="question-section">
                <div className="question-count">
                    <span>{questions.length}</span>
                </div>
                <div className="question-text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer-section">
                <form onSubmit={handleSubmit(handleAnswerInput)}>
                    {getQuestions()}
                    <button
                        type="submit">
                        Next
                    </button>
                </form>
            </div>
        </>

    )
}


export default AppearanceQuiz