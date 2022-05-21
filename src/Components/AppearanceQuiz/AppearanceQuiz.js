import React, {useState} from "react";
import {questions} from "../../Helpers/questions";
import {useForm} from "react-hook-form";
import "./AppearanceQuiz.css"


function AppearanceQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const {handleSubmit} = useForm();
    const [showResult, setShowResult] = useState("")
    const [response, setResponse] = useState("")
    // const [height, setHeight] = useState(0)
    const [heightCm, setHeightCm]= useState(0)
    const [heightInch, setHeightInch] = useState(0)
    const [gender, setGender] = useState("")
    const [hairColor, setHairColor]=useState("")


// function heightSwitch(height) {
//     switch (height) {
//         case 'cm': heightCm
//         case 'inch':heightInch
//     }
// }

// function setHeightSwitch(e) {
//         switch (e) {
//             case 'cm': setHeightCm(e.target.value)
//             case 'inch':setHeightInch(e.target.value)
//         }
// }


function getQuestions(){
        if (questions[currentQuestion].questionText === 'What is your gender?') {
            return(
                    <>
                        <div className="inner-container-gender">
                            <div className="inner-container-gender">
                                {questions[currentQuestion].answerOptions.map((answerOption) =>
                                    <>
                                        <label htmlFor={answerOption.answerText}>
                                            <input
                                                type="radio"
                                                id={answerOption.answerText}
                                                name={answerOption.answerText}
                                                onChange={(e) => setGender(e.target.value)}
                                                value={answerOption.answerText}
                                                checked={gender === answerOption.answerText}
                                            />
                                            {answerOption.answerText}
                                            <div>
                                                {answerOption.image}
                                                {answerOption.image1}
                                            </div>
                                        </label>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
            )}

        if (questions[currentQuestion].questionText === "What is your height?") {
            return(
                    questions[currentQuestion].answerOptions.map((answerOption) =>
                        <>
                            <label htmlFor={answerOption.answerText1}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText1}
                                    name={answerOption.answerText1}
                                    onChange={(e) => setHeightCm(e.target.value)}
                                    value={heightCm}
                                    checked={heightCm === answerOption.answerText1}
                                />
                                {answerOption.answerText1}
                            </label >
                            <label htmlFor={answerOption.answerText2}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText2}
                                    name={answerOption.answerText2}
                                    onChange={(e) => setHeightInch(e.target.value)}
                                    value={heightInch}
                                    checked={heightInch === answerOption.answerText2}
                                />
                                {answerOption.answerText2}
                            </label>
                        </>
                    )
            )}

        else if (questions[currentQuestion].questionText === 'What is your hair color?') {
            return(
                <>
                    <div className="outer-container-hair">
                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <>
                                <div className="container-hair-color">
                                    <div className="inner-container-hair-color">
                                        <table className="table-hair-color">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <label htmlFor={answerOption.answerText1}>
                                                        <input
                                                            type="radio"
                                                            id={answerOption.answerText}
                                                            name={answerOption.answerText}
                                                            onChange={(e) => setHairColor(e.target.value)}
                                                            value={answerOption.answerText}
                                                            checked={hairColor === answerOption.answerText}
                                                        />
                                                        {answerOption.answerText}
                                                    </label>
                                                </td>
                                                <td>
                                                    {answerOption.image}
                                                    {answerOption.image1}
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}

        else if (questions[currentQuestion].questionText === "What is your weight?"){
            return (
                <>
                    {questions[currentQuestion].answerOptions.map((answerOption) =>
                    <>
                        <label htmlFor="weight-in-kg">
                        <input
                            type="numbers"
                            id={answerOption.answerText}
                            name={answerOption.answerText}
                            onChange={(e) => setResponse(e.target.value)}
                            value={answerOption.answerText}
                            checked={response === answerOption.answerText}
                        /> kg
                    </label>
                    <label htmlFor="weight-in-lbs">
                        <input
                            type="numbers"
                            id={answerOption.answerText}
                            name={answerOption.answerText}
                            onChange={(e) => setResponse(e.target.value)}
                            value={answerOption.answerText}
                            checked={response === answerOption.answerText}
                        /> lbs
                    </label>
                </>
                    )}
                    </>
            )
        }
    }


    function handleAnswerInput(e) {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            // setResponse(response + 1)
            console.log(gender,heightCm, heightInch, hairColor);
            // setResponse(response+1)
        }
        else{
            setShowResult(response)
        }
    }

    // const restartQuiz = () => {
    //     setResponse("");
    //     setCurrentQuestion(0);
    //     setShowResults(false);
    // };


    return (
        <>
            {showResult ? (
                    <div className="final-results">
                        <h1>Final Results</h1>
                        <h2>
                            {response}
                        </h2>
                        {/*<button onClick={() => restartQuiz()}>Restart quiz</button>*/}
                    </div>
                ) :
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
                            <form onSubmit={handleSubmit(handleAnswerInput)}>
                                {getQuestions()}
                                <div className="button-container-quiz">
                                    <button
                                        type="submit"
                                        className="button-banner-quiz"
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}
        </>
    )
}


export default AppearanceQuiz