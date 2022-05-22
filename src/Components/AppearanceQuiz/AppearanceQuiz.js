import React, {useEffect, useState} from "react";
import {questions} from "../../Helpers/questions";
import {useForm} from "react-hook-form";
import "./AppearanceQuiz.css"
import axios from "axios";


function AppearanceQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const {handleSubmit} = useForm();
    const [showResult, setShowResult] = useState("")
    const [heightCm, setHeightCm]= useState("")
    const [gender, setGender] = useState("")
    const [hairColor, setHairColor]=useState("")
    const [weightKg, setWeightKg]=useState("")
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
                                        <label key={questions.id}>
                                            <input
                                                type="radio"
                                                id={answerOption.answerText}
                                                name={answerOption.answerText}
                                                onChange={(e) => setGender(e.target.value)}
                                                value={answerOption.answerText}
                                                checked={gender === answerOption.answerText}
                                                // required= {true}
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
                            <label htmlFor={answerOption.answerText} key={questions.id}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={(e) => setHeightCm(e.target.value)}
                                    value={heightCm}
                                    checked={heightCm === answerOption.answerText}
                                    placeholder= "0"
                                    required={true}
                                />
                                {answerOption.answerText}
                            </label >
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
                                <div className="container-hair-color" key={questions.id}>
                                    <div className="inner-container-hair-color" >
                                                    <label htmlFor={answerOption.answerText} >
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
                        <label htmlFor={answerOption.answerText} key={questions.id}>
                            <input
                                type="numbers"
                                id={answerOption.answerText}
                                name={answerOption.answerText}
                                onChange={(e) => setWeightKg(e.target.value)}
                                value={weightKg}
                                checked={weightKg === answerOption.answerText}
                                placeholder= "0"
                                required={true}
                            />
                            {answerOption.answerText}
                        </label >
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
                                <div key={questions.id}>
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
            console.log(gender,heightCm , hairColor, weightKg, eyeColor);
            // setResponse(response+1)
        }
        else{
            setShowResult(gender, heightCm , hairColor, weightKg, eyeColor)
        }
    }

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setHeightCm("")
        setGender("")
        setHairColor("")
        setWeightKg("")
        setEyeColor("")
        setShowResult("")
    };


    const specificCharacter =
        character && character.map((character) => {
        if (  character.appearance.gender === gender
            && character.appearance.eyeColor === eyeColor
            && character.appearance.hairColor === hairColor
            && character.appearance.height[1] === heightCm + " cm"
            && character.appearance.weight[1] === weightKg + " kg"){
                return(
                    <>
                        <div className="character-result" key={character.id}>
                            <div className="inner-character-container">
                                <img src={character.images.lg} alt={character.name} className='image'/>
                                <div className="border5">
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td className="data-center">Intelligence: </td>
                                            <td>{character.powerstats.intelligence}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Strength: </td>
                                            <td>{character.powerstats.strength}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Speed: </td>
                                            <td>{character.powerstats.speed}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Durability: </td>
                                            <td>{character.powerstats.durability}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Power: </td>
                                            <td>{character.powerstats.power}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Combat: </td>
                                            <td>{character.powerstats.combat}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="right">
                                <div className="inner-container-biography">
                                    <h1>{character.name}</h1>
                                    <span className="full-name">{character.biography.fullName}</span>
                                    <div className="biography">
                                        <table className="table-biography">
                                            <tbody>
                                            <tr>
                                                <td className="data-biography">Gender: </td>
                                                <td>{character.appearance.gender}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Height: </td>
                                                <td>{character.appearance.height[1]}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Hair color: </td>
                                                <td>{character.appearance.hairColor}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Weight: </td>
                                                <td>{character.appearance.weight[1]}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Eye color: </td>
                                                <td>{character.appearance.eyeColor}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Aliases: </td>
                                                <td>{character.biography.aliases.join(', ')}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Place of birth: </td>
                                                <td>{character.biography.placeOfBirth}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Relatives: </td>
                                                <td>{character.connections.relatives}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">First appearance: </td>
                                                <td>{character.biography.firstAppearance}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Publisher: </td>
                                                <td>{character.biography.publisher}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <div className="character-result" key={character.id}>
                            <div className="inner-character-container">
                                <img src={character.images.lg} alt={character.name} className='image'/>
                                <div className="border4">
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td className="data-center">Intelligence: </td>
                                            <td>{character.powerstats.intelligence}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Strength: </td>
                                            <td>{character.powerstats.strength}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Speed: </td>
                                            <td>{character.powerstats.speed}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Durability: </td>
                                            <td>{character.powerstats.durability}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Power: </td>
                                            <td>{character.powerstats.power}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-center">Combat: </td>
                                            <td>{character.powerstats.combat}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="right">
                                <div className="inner-container-biography">
                                    <h1>{character.name}</h1>
                                    <span className="full-name">{character.biography.fullName}</span>
                                    <div className="biography">
                                        <table className="table-biography">
                                            <tbody>
                                            <tr>
                                                <td className="data-biography">Gender: </td>
                                                <td>{character.appearance.gender}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Height: </td>
                                                <td>{character.appearance.height[1]}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Hair color: </td>
                                                <td>{character.appearance.hairColor}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Weight: </td>
                                                <td>{character.appearance.weight[1]}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Eye color: </td>
                                                <td>{character.appearance.eyeColor}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Aliases: </td>
                                                <td>{character.biography.aliases.join(', ')}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Place of birth: </td>
                                                <td>{character.biography.placeOfBirth}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Relatives: </td>
                                                <td>{character.connections.relatives}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">First appearance: </td>
                                                <td>{character.biography.firstAppearance}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-biography">Publisher: </td>
                                                <td>{character.biography.publisher}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <div className="character-result" key={character.id}>
                        <div className="inner-character-container">
                            <img src={character.images.lg} alt={character.name} className='image'/>
                            <div className="border3">
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td className="data-center">Intelligence: </td>
                                        <td>{character.powerstats.intelligence}</td>
                                    </tr>
                                    <tr>
                                        <td className="data-center">Strength: </td>
                                        <td>{character.powerstats.strength}</td>
                                    </tr>
                                    <tr>
                                        <td className="data-center">Speed: </td>
                                        <td>{character.powerstats.speed}</td>
                                    </tr>
                                    <tr>
                                        <td className="data-center">Durability: </td>
                                        <td>{character.powerstats.durability}</td>
                                    </tr>
                                    <tr>
                                        <td className="data-center">Power: </td>
                                        <td>{character.powerstats.power}</td>
                                    </tr>
                                    <tr>
                                        <td className="data-center">Combat: </td>
                                        <td>{character.powerstats.combat}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="right">
                            <div className="inner-container-biography">
                                <h1>{character.name}</h1>
                                <span className="full-name">{character.biography.fullName}</span>
                                <div className="biography">
                                    <table className="table-biography">
                                        <tbody>
                                        <tr>
                                            <td className="data-biography">Gender: </td>
                                            <td>{character.appearance.gender}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-biography">Height: </td>
                                            <td>{character.appearance.height[1]}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-biography">Hair color: </td>
                                            <td>{character.appearance.hairColor}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-biography">Weight: </td>
                                            <td>{character.appearance.weight[1]}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-biography">Eye color: </td>
                                            <td>{character.appearance.eyeColor}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-biography">Aliases: </td>
                                            <td>{character.biography.aliases.join(', ')}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-biography">Place of birth: </td>
                                            <td>{character.biography.placeOfBirth}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-biography">Relatives: </td>
                                            <td>{character.connections.relatives}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-biography">First appearance: </td>
                                            <td>{character.biography.firstAppearance}</td>
                                        </tr>
                                        <tr>
                                            <td className="data-biography">Publisher: </td>
                                            <td>{character.biography.publisher}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <p>Height: {heightCm}</p>
                        <p>Hair color: {hairColor}</p>
                        <p>Weight:{weightKg}</p>
                        <p>Eye color: {eyeColor} </p>
                        <h1>These character(s) match your appearance!</h1>
                            {specificCharacter}
                        <button
                            onClick={() => restartQuiz()}
                            className="button-banner-quiz"
                        >Restart quiz</button>
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
                            <form
                                onSubmit={handleSubmit(handleAnswerInput)}
                            >
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