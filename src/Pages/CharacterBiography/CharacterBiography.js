import React, {useState} from "react";
import {questions} from "../../Helpers/questions";
import {useForm} from "react-hook-form";
import "./AppearanceQuiz.css"


function AppearanceQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    // const [responseGender, setResponseGender] = useState( [])
    // const [responseHeight, setResponseHeight] = useState( 0)
    // const [responseHairColor, setResponseHairColor] = useState( [])
    // const [responseWeight, setResponseWeight] = useState( 0)
    // const [responseEyeColor, setResponseEyeColor] = useState( [])
    const {register, handleSubmit} = useForm();
    // const [showResult, setShowResult] = useState("")
    const [choice, toggleChoice] = useState(false);
    const [response, setResponse] = useState("")


    //functie onclick

// function getQuestions(){
//         // if (questions[currentQuestion].questionText === 'What is your gender?' ||
//         //         questions[currentQuestion].questionText === 'What is your hair color?' ||
//         //         questions[currentQuestion].questionText === 'What is your eye color?') {
//             if (questions[currentQuestion].questionText === 'What is your gender?'){
//             return(
//                     <>
//                         <div className="inner-container-gender">
//                             {questions[currentQuestion].answerOptions.map((answerOption)=>
//                                 <>
//                                     <label htmlFor="gender">
//                                         <input
//                                             type="radio"
//                                             {...register("gender",
//                                             {onChange:(e) => console.log(setResponseGender(e)),
//                                                 value:answerOption.answerText,
//                                             })}
//                                         />
//                                         {answerOption.answerText}
//
//                                         <div>
//                                             {answerOption.image}
//                                             {answerOption.image1}
//                                         </div>
//                                         <button
//                                             type="submit"
//                                             className="button-banner-quiz"
//                                         >
//                                             Next
//                                         </button>
//                                     </label>
//                                 </>
//                             )}
//                         </div>
//                     </>
//             )}
//
//         if (questions[currentQuestion].questionText === "What is your height?") {
//             return(
//                 <>
//                     <label htmlFor="height-in-cm">
//                         <input
//                             type="numbers"
//                             {...register("height-in-cm", {
//                                 valueAsNumber: true
//                             })}
//                         /> cm
//                     </label>
//                     <label htmlFor="height-in-inch">
//                         <input
//                             type="numbers"
//                             {...register("height-in-inch")}
//                         /> inch
//                     </label>
//                 </>
//             )
//         }
//         else if (questions[currentQuestion].questionText === "What is your weight?"){
//             return (
//                 <>
//                     <label htmlFor="weight-in-kg">
//                         <input
//                             type="numbers"
//                             {...register("weight-in-kg")}
//                         /> kg
//                     </label>
//                     <label htmlFor="weight-in-lbs">
//                         <input
//                             type="numbers"
//                             {...register("weight-in-lbs")}
//                         /> lbs
//                     </label>
//                 </>
//             )
//         }
//     }

    const optionClicked = (answerText) => {
        console.log( answerText = response)
        // if (answerText) {
        //     console.log(response)
        // }
    }

    function handleAnswerInput(e) {
        // const nextQuestion = currentQuestion + 1
        // setCurrentQuestion(nextQuestion)
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        }
        // else{
        //     setShowResult()
        // }
        // console.log(e.target.checked);
        // console.log({answerOption.answerText});
        // console.log(setResponseGender)
    }

//
//     function optionClicked() {
//         if (choice){
//             questions[currentQuestion].answerOptions.map((answerOption)=>
//                 answerOption.answerText.choices === false
//             )
//         }
//
//             return
//         toggleChoice(true)
// }

    // console.log(toggleChoice());

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
            {/*{showResult ? (*/}
            {/*    <div className="final-results">*/}
            {/*        <h1>Final Results</h1>*/}
            {/*        <h2>*/}
            {/*            {questions[currentQuestion].answerOptions.answerText}*/}
            {/*        </h2>*/}
            {/*        /!*<button onClick={() => restartGame()}>Restart game</button>*!/*/}
            {/*    </div>*/}
            {/*):*/}
            <div className="shadow-box-quiz">
                <div className="container-quiz">
                    <div className="inner-container-quiz">
                        <div className="quiz-title">
                            <h4>Do the quiz to find out which superhero or villain has your looks!</h4>
                        </div>
                    </div>
                    <div className="question-section">
                        <div className="question-text">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className="answer-section">
                        {/*<form onSubmit={handleSubmit(handleAnswerInput)}>*/}
                        {/*{getQuestions()}*/}
                        <div className="inner-container-gender">
                            <div className="inner-container-gender">
                                {/*    {questions[currentQuestion].answerOptions.map((answerOption)=>*/}
                                {/*        <>*/}
                                {/*<label htmlFor="gender">*/}
                                {/*    <input*/}
                                {/*        type="radio"*/}
                                {/*        {...register("gender",*/}
                                {/*        {onChange:(e) => (toggleChoice(!answerOption.answerText.choices)),*/}
                                {/*            value:answerOption.answerText.choices,*/}
                                {/*        })}*/}
                                {/*    />*/}
                                {/*    {answerOption.answerText}*/}

                                {/*<div>*/}
                                {/*    {answerOption.image}*/}
                                {/*    {answerOption.image1}*/}
                                {/*</div>*/}
                                {/*                <button*/}
                                {/*                    type="submit"*/}
                                {/*                    className="button-banner-quiz"*/}
                                {/*                >*/}
                                {/*                    Next*/}
                                {/*                </button>*/}
                                {/*            </label>*/}
                                {/*        </>*/}
                                {/*    )}*/}
                                {/*</div>*/}
                                {questions[currentQuestion].answerOptions.map((answerOption) =>
                                    <>
                                        <li
                                            key={answerOption.id}
                                            onClick={() => optionClicked()}
                                        >
                                            {answerOption.answerText}
                                        </li>
                                        {/*<div>*/}
                                        {/*    {answerOption.image}*/}
                                        {/*    {answerOption.image1}*/}
                                        {/*</div>*/}
                                    </>
                                )}
                            </div>
                        </div>
                        {/*<div className="button-container-quiz">*/}
                        {/*    <button*/}
                        {/*        type="submit"*/}
                        {/*        className="button-banner-quiz"*/}
                        {/*    >*/}
                        {/*        Next*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        {/*</form>*/}
                    </div>
                </div>
            </div>

        </>
    )
}


export default AppearanceQuiz