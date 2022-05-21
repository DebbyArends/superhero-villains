import React, {useEffect, useState} from "react";
import {questions} from "../../Helpers/questions";
import {useForm} from "react-hook-form";
import "./AppearanceQuiz.css"
import axios from "axios";


function AppearanceQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const {handleSubmit} = useForm();
    const [showResult, setShowResult] = useState("")
    // const [response, setResponse] = useState("")
    const [heightCm, setHeightCm]= useState(0)
    const [heightInch, setHeightInch] = useState(0)
    const [gender, setGender] = useState("")
    const [hairColor, setHairColor]=useState("")
    const [weightKg, setWeightKg]=useState(0)
    const [weightLbs, setWeightLbs]=useState(0)
    const [eyeColor, setEyeColor]=useState("")
    const [character, setCharacter] =useState("")


    useEffect(()=> {
        async function getData(){
            try{
                const result = await axios.get('https://akabab.github.io/superhero-api/api/all.json')
                console.log(result.data)
                setCharacter(result.data)
            }catch (e) {
                console.error(e)
            }
        }
        getData()
    }, [])


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
                <>
                    {questions[currentQuestion].answerOptions.map((answerOption) =>
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
                    )}
                </>
            )}

        else if (questions[currentQuestion].questionText === 'What is your hair color?') {
            return(
                <>
                    <div className="outer-container-hair">
                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <>
                                <div className="container-hair-color">
                                    <div className="inner-container-hair-color">
                                        {answerOption.image}
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
                                        {answerOption.image1}
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
                        <label htmlFor={answerOption.answerText1}>
                            <input
                                type="numbers"
                                id={answerOption.answerText1}
                                name={answerOption.answerText1}
                                onChange={(e) => setWeightKg(e.target.value)}
                                value={weightKg}
                                checked={weightKg === answerOption.answerText1}
                            />
                            {answerOption.answerText1}
                        </label >
                        <label htmlFor={answerOption.answerText2}>
                            <input
                                type="numbers"
                                id={answerOption.answerText2}
                                name={answerOption.answerText2}
                                onChange={(e) => setWeightLbs(e.target.value)}
                                value={weightLbs}
                                checked={weightLbs === answerOption.answerText2}
                            />
                            {answerOption.answerText2}
                        </label>
                    </>
                    )}
                    </>
            )
        }

        else if (questions[currentQuestion].questionText === 'What is your eye color?') {
            return(
                <>

                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <>
                                <div>
                                    <div>
                                        {answerOption.image}
                                        <label htmlFor={answerOption.answerText1}>
                                            <input
                                                type="radio"
                                                id={answerOption.answerText}
                                                name={answerOption.answerText}
                                                onChange={(e) => setEyeColor(e.target.value)}
                                                value={answerOption.answerText}
                                                checked={eyeColor === answerOption.answerText}
                                            />
                                            {answerOption.answerText}
                                        </label>
                                        {answerOption.image1}
                                    </div>
                                </div>
                            </>
                        )}
                </>
            )}
    }


    function handleAnswerInput(e) {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            // setResponse(response + 1)
            console.log(gender,heightCm | heightInch, hairColor, weightKg | weightLbs, eyeColor);
            // setResponse(response+1)
        }
        else{
            setShowResult(gender, heightCm | heightInch, hairColor, weightKg | weightLbs, eyeColor)
        }
    }

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setHeightCm(0)
        setHeightInch(0)
        setGender("")
        setHairColor("")
        setWeightKg(0)
        setWeightLbs(0)
        setEyeColor("")
        setShowResult("")
    };

    function heightCheck() {
        if (heightCm){
            return(
                <p>{heightCm} cm</p>
        )
        }
        else {
            return(
                <p>{heightInch} inch</p>
                )
        }
    }

    function weightCheck() {
        if (weightKg){
            return(
                <p>{weightKg} kg</p>
            )
        }
        else {
            return(
                <p>{weightLbs} Lbs</p>
            )
        }
    }

    // const specificCharacter = character.find((character) => {
    //     return (
    //         character.appearance.gender === {gender}
    //         // && character.appearance.height === {weightKg} | {weightLbs}
    //     )
    // })
    // console.log(specificCharacter);
    const specificCharacter = character && character.map((character) => {
        // return (
        //     console.log(character.appearance.weight[0])
        // )
        if (character.appearance.gender === gender
            && character.appearance.eyeColor === eyeColor
            && character.appearance.hairColor === hairColor
            // && character.appearance.height[0] === heightInch
            && character.appearance.height[1] === heightCm + " cm"
            && character.appearance.weight[0] === weightKg + " kg"
            // | character.appearance.weight[1] === weightLbs + "lb"
        ){
                return(
                    <>
                        <p>{character.name}</p>
                    </>
                )
        }
        else if (character.appearance.gender === gender
            && character.appearance.eyeColor === eyeColor
            && character.appearance.hairColor === hairColor
            && character.appearance.height[1] === heightCm + " cm"
        ){
                return(
                    <>
                        <p>{character.name}</p>
                        <img src={character.images.lg} alt={character.name}/>
                    </>
                )
        }
        else if (
            character.appearance.gender === gender
            && character.appearance.eyeColor === eyeColor
            && character.appearance.hairColor === hairColor
        ){
            return(
                <>
                    <p>{character.name}</p>
                    <img src={character.images.lg} alt={character.name}/>
                    <p>{character.biography.fullName}</p>
                    <p>{character.id}</p>
                </>
            )
        }
    })


    return (
        <>
            {showResult ? (
                    <div className="final-results">
                        <h1>Final Results</h1>
                        <p>Gender: {gender}</p>
                        <p>Height: {heightCheck()}</p>
                        <p>Hair color: {hairColor}</p>
                        <p>Weight:{weightCheck()}</p>
                        <p>Eye color: {eyeColor} </p>
                        <p>{specificCharacter}</p>
                        <button onClick={() => restartQuiz()}>Restart quiz</button>
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