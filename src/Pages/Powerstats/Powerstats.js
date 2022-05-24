import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import "./Powerstats.css"
import axios from "axios";
import {questionsPower} from "../../data/questionsPower";


function Powerstats() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const {handleSubmit} = useForm();
    const [showResult, setShowResult] = useState("")
    const [intelligence, setIntelligence] = useState("")
    const [strength, setStrength] = useState("")
    const [speed, setSpeed] = useState("")
    const [durability, setDurability] = useState("")
    const [power, setPower] = useState("")
    const [combat, setCombat] = useState("")
    const [character, setCharacter] =useState([])

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
        if (questionsPower[currentQuestion].questionText === 'What is your intelligence?') {
            return(
                    questionsPower[currentQuestion].answerOptions.map((answerOption) =>
                            <label htmlFor={answerOption.answerText} key={answerOption.id}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={(e) => setIntelligence(e.target.value)}
                                    value={intelligence}
                                    checked={intelligence === answerOption.answerText}
                                    placeholder= "0"
                                    required={true}
                                />
                                {answerOption.answerText}
                            </label >
                    )
            )}
        else if (questionsPower[currentQuestion].questionText === 'What is your strength?') {
            return(
                    questionsPower[currentQuestion].answerOptions.map((answerOption) =>
                            <label htmlFor={answerOption.answerText} key={answerOption.id}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={(e) => setStrength(e.target.value)}
                                    value={strength}
                                    checked={strength === answerOption.answerText}
                                    placeholder= "0"
                                    required={true}
                                />
                                {answerOption.answerText}
                            </label >
                    )
            )}
        else if (questionsPower[currentQuestion].questionText === 'What is your speed?') {
            return(
                    questionsPower[currentQuestion].answerOptions.map((answerOption) =>
                            <label htmlFor={answerOption.answerText} key={answerOption.id}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={(e) => setSpeed(e.target.value)}
                                    value={speed}
                                    checked={speed === answerOption.answerText}
                                    placeholder= "0"
                                    required={true}
                                />
                                {answerOption.answerText}
                            </label >
                    )
            )}
        else if (questionsPower[currentQuestion].questionText === 'What is your durability?') {
            return(
                <div>
                    {questionsPower[currentQuestion].answerOptions.map((answerOption) =>
                            <label htmlFor={answerOption.answerText} key={answerOption.id}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={(e) => setDurability(e.target.value)}
                                    value={durability}
                                    checked={durability === answerOption.answerText}
                                    placeholder= "0"
                                    required={true}
                                />
                                {answerOption.answerText}
                            </label >
                    )}
                </div>
            )}
        else if (questionsPower[currentQuestion].questionText === 'What is your power?') {
            return(
                <div>
                    {questionsPower[currentQuestion].answerOptions.map((answerOption) =>
                            <label htmlFor={answerOption.answerText} key={answerOption.id}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={(e) => setPower(e.target.value)}
                                    value={power}
                                    checked={power === answerOption.answerText}
                                    placeholder= "0"
                                    required={true}
                                />
                                {answerOption.answerText}
                            </label >
                    )}
                </div>
            )}
        else if (questionsPower[currentQuestion].questionText === 'What is your combat?') {
            return(
                <div>
                    {questionsPower[currentQuestion].answerOptions.map((answerOption) =>
                            <label htmlFor={answerOption.answerText} key={answerOption.id}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={(e) => setCombat(e.target.value)}
                                    value={combat}
                                    checked={combat === answerOption.answerText}
                                    placeholder= "0"
                                    required={true}
                                />
                                {answerOption.answerText}
                            </label >
                    )}
                </div>
            )}
    }


    function handleAnswerInput(e) {
        if (currentQuestion + 1 < questionsPower.length) {
            setCurrentQuestion(currentQuestion + 1)
            // setResponse(response + 1)
            console.log( specificCharacter, intelligence, strength, speed, durability, power, combat);
            // setResponse(response+1)
        }
        else{
            setShowResult (intelligence, strength, speed, durability, power, combat)
        }
    }

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setIntelligence("")
        setStrength("")
        setSpeed("")
        setDurability("")
        setPower("")
        setCombat("")
        setShowResult("")
    };


    const specificCharacter = character && character.map((character) => {
            if (character.powerstats.intelligence == intelligence
                // && character.powerstats.strength === strength
                // && character.powerstats.speed === speed
                // && character.powerstats.durability === durability
                // && character.powerstats.power === power
                // && character.powerstats.combat === combat
            )
                return (
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
        })


    return (
        <>
            {showResult ? (
                    <div className="final-results">
                        <h1>Final Results</h1>
                        <p>Intelligence: {intelligence}</p>
                        <p>Strength: {strength}</p>
                        <p>Speed: {speed}</p>
                        <p>Durability:{durability}</p>
                        <p>Power: {power} </p>
                        <p>Combat: {combat}</p>
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
                            <div className="question-text">{questionsPower[currentQuestion].questionText}</div>
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


export default Powerstats;