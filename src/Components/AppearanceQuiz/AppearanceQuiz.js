import React, {useState} from "react";
import superwoman from "../../assets/superwoman.jpg"
import superhero from "../../assets/supehero-male.jpg"
import femaleAuburn from "../../assets/hairColors/female-auburn.png"
import femaleBlack from "../../assets/hairColors/female-black.png"
import femaleBlond from "../../assets/hairColors/female-blond.png"
import femaleBlue from "../../assets/hairColors/female-blue.png"
import femaleBrown from "../../assets/hairColors/female-brown.png"
import femaleBrownWhite from "../../assets/hairColors/female-brown-white.png"
import femaleGold from "../../assets/hairColors/female-gold.png"
import femaleGreen from "../../assets/hairColors/female-green.png"
import femaleGrey from "../../assets/hairColors/female-grey.png"
import femaleIndigo from "../../assets/hairColors/female-indigo.png"
import femaleMagenta from "../../assets/hairColors/female-magenta.png"
import femaleOrange from "../../assets/hairColors/female-orange.png"
import femaleOrangeRed from "../../assets/hairColors/female-orange-red.png"
import femaleOrangeWhite from "../../assets/hairColors/female-orange-white.png"
import femalePink from "../../assets/hairColors/female-pink.png"
import femalePurple from "../../assets/hairColors/female-purple.png"
import femaleRed from "../../assets/hairColors/female-red.png"
import femaleSilver from "../../assets/hairColors/female-silver.png"
import femaleStrawberryBlond from "../../assets/hairColors/female-strawberry-blond.png"
import femaleWhite from "../../assets/hairColors/female-white.png"
import femaleYellow from "../../assets/hairColors/female-yellow.png"
import maleAuburn from "../../assets/hairColors/male-auburn.png"
import maleBlack from "../../assets/hairColors/blackM.png"
import maleBlond from "../../assets/hairColors/male-blond.png"
import maleBlue from "../../assets/hairColors/male-blue.png"
import maleBrown from "../../assets/hairColors/male-brown.png"
import maleBrownWhite from "../../assets/hairColors/male-brown-white.png"
import maleGold from "../../assets/hairColors/male-gold.png"
import maleGreen from "../../assets/hairColors/male-green.png"
import maleGrey from "../../assets/hairColors/male-grey.png"
import maleIndigo from "../../assets/hairColors/male-indigo.png"
import maleMagenta from "../../assets/hairColors/male-magenta.png"
import maleOrange from "../../assets/hairColors/male-orange.png"
import maleOrangeRed from "../../assets/hairColors/male-red-orange.png"
import maleOrangeWhite from "../../assets/hairColors/male-orang-white.png"
import malePink from "../../assets/hairColors/male-pink.png"
import malePurple from "../../assets/hairColors/male-purple.png"
import maleRed from "../../assets/hairColors/male-red.png"
import maleSilver from "../../assets/hairColors/male-silver.png"
import maleStrawberryBlond from "../../assets/hairColors/male-strawberry-blond.png"
import maleWhite from "../../assets/hairColors/male-white.png"
import maleYellow from "../../assets/hairColors/male-yellow.png"


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
                {answerText: 'Female',image: <img src={superwoman} alt="superhero female pop art" className="gender-image"/>},
            ]
        },
        {
            questionText: 'What is your height?',
            answerOptions: [
                {answerText: "cm"},
                {answerText: "inch"},
            ]
        },
        {
            questionText: 'What is your hair color?',
            answerOptions: [
                {answerText: '-'
                },
                {answerText: 'No Hair'
                },
                {answerText: 'Black',
                    image: <img src={femaleBlack} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBlack} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Blond',
                    image: <img src={femaleBlond} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBlond} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Brown',
                    image: <img src={femaleBrown} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBrown} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'White',
                    image: <img src={femaleWhite} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleWhite} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Purple',
                    image: <img src={femalePurple} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={malePurple} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Orange',
                    image: <img src={femaleOrange} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleOrange} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Pink',
                    image: <img src={femalePink} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={malePink} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Red',
                    image: <img src={femaleRed} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleRed} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Auburn',
                    image: <img src={femaleAuburn} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleAuburn} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Strawberry Blond',
                    image: <img src={femaleStrawberryBlond} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleStrawberryBlond} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Blue',
                    image: <img src={femaleBlue} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBlue} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Green',
                    image: <img src={femaleGreen} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleGreen} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Magenta',
                    image: <img src={femaleMagenta} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleMagenta} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Silver',
                    image: <img src={femaleSilver} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleSilver} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Grey',
                    image: <img src={femaleGrey} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleGrey} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Orange / White',
                    image: <img src={femaleOrangeWhite} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleOrangeWhite} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Brown / White',
                    image: <img src={femaleBrownWhite} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBrownWhite} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Yellow',
                    image: <img src={femaleYellow} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleYellow} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Gold',
                    image: <img src={femaleGold} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleGold} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'Red / Orange',
                    image: <img src={femaleOrangeRed} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleOrangeRed} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {answerText: 'indigo',
                    image: <img src={femaleIndigo} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleIndigo} alt="Hairstyle black male silhouette" className="hair"/>
                },
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
                                    {answerOption.image1}
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