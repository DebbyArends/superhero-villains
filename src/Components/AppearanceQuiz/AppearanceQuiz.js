import React, {useState} from "react";
import {questions} from "../../Helpers/questions";
import {useForm} from "react-hook-form";
import "./AppearanceQuiz.css"


function AppearanceQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const {handleSubmit} = useForm();
    const [showResult, setShowResult] = useState("")
    const [response, setResponse] = useState("")
    const [height, setHeight] = useState(0)
    // const [heightInch, setHeightInch] = useState(0)



function getQuestions(){
        if (questions[currentQuestion].questionText === 'What is your gender?' ||
                questions[currentQuestion].questionText === 'What is your hair color?' ||
                questions[currentQuestion].questionText === 'What is your eye color?') {
            return(
                    <>
                        <div className="inner-container-gender">
                            <div className="inner-container-gender">
                                {questions[currentQuestion].answerOptions.map((answerOption) =>
                                    <>
                                        <label>
                                            <input
                                                type="radio"
                                                id={answerOption.answerText}
                                                name={answerOption.answerText}
                                                onChange={(e) => setResponse(e.target.value)}
                                                value={answerOption.answerText}
                                                checked={response === answerOption.answerText}
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
                            <label htmlFor="height">
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={(e) => setHeight(e.target.value)}
                                    value={height}
                                    checked={response === answerOption.answerText}
                                />
                                {answerOption.answerText}
                            </label>
                        </>
                    )
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
            setResponse(response + 1)
            console.log(response);
            console.log(height);
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