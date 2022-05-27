import React, {useEffect, useState} from "react";
import {questions} from "../../data/questions";
import {useForm} from "react-hook-form";
import "./AppearanceQuiz.css"
import axios from "axios";
import {Link} from "react-router-dom";



function AppearanceQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const {handleSubmit} = useForm();
    const [showResult, setShowResult] = useState("")
    const [heightCm, setHeightCm]= useState("")
    const [gender, setGender] = useState("")
    const [hairColor, setHairColor]=useState("")
    const [weightKg, setWeightKg]=useState("")
    const [eyeColor, setEyeColor]=useState("")
    const [character, setCharacter] =useState([])
    const [radioCheck, setRadioCheck] = useState( true)
    const [findCharacter, setFindCharacter]= useState('')

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

function handleChange(e) {
        if (questions[currentQuestion].questionText === 'What is your gender?'){
            return (
                setGender(e.target.value),
            setRadioCheck(false)
            )
        }
        else if (questions[currentQuestion].questionText === 'What is your height?'){
            return (
                setHeightCm(e.target.value),
                    setRadioCheck(false)
            )
        }
        else if (questions[currentQuestion].questionText === 'What is your hair color?'){
            return (
                setHairColor(e.target.value),
                setRadioCheck(false)
            )
    }
        else if (questions[currentQuestion].questionText === 'What is your weight?'){
            return (
                setWeightKg(e.target.value),
                    setRadioCheck(false)
            )
        }
        else if (questions[currentQuestion].questionText === 'What is your eye color?'){
            return (
                setEyeColor(e.target.value),
                    setRadioCheck(false)
            )
        }
    }

function getQuestions(){
        if (questions[currentQuestion].questionText === 'What is your gender?') {
            return(
                        <div className="outer-container-gender">
                            <div className="inner-container-gender">
                                {questions[currentQuestion].answerOptions.map((answerOption) =>
                                        <label key={answerOption.id}>
                                            <input
                                                type="radio"
                                                id={answerOption.answerText}
                                                name={answerOption.answerText}
                                                onChange={handleChange}
                                                value={answerOption.answerText}
                                                checked={gender === answerOption.answerText}
                                            />
                                            {answerOption.answerText}
                                            <div>
                                                {answerOption.image}
                                                {answerOption.image1}
                                            </div>
                                        </label>
                                )}
                            </div>
                        </div>
            )}
        if (questions[currentQuestion].questionText === "What is your height?") {
            return(
                <div>
                    {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <label htmlFor={answerOption.answerText} key={answerOption.id}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={handleChange}
                                    value={heightCm}
                                    checked={heightCm === answerOption.answerText}
                                    placeholder= "0"
                                    required={true}
                                />
                                {answerOption.answerText}
                            </label >
                    )}
                </div>
            )}

        else if (questions[currentQuestion].questionText === 'What is your hair color?') {
            return(
                    <div className="outer-container-hair">
                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <div className="inner-container-hair-color" key={answerOption.id}>
                                <label htmlFor={answerOption.answerText} >
                                    <input
                                        type="radio"
                                        id={answerOption.answerText}
                                        name={answerOption.answerText}
                                        onChange={handleChange}
                                        value={answerOption.answerText}
                                        checked={hairColor === answerOption.answerText}
                                    />
                                    {answerOption.answerText}
                                </label>
                            </div>
                        )}
                    </div>
            )}

        else if (questions[currentQuestion].questionText === "What is your weight?"){
            return (
                <div>
                    {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <label htmlFor={answerOption.answerText} key={answerOption.id}>
                                <input
                                    type="numbers"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={handleChange}
                                    value={weightKg}
                                    checked={weightKg === answerOption.answerText}
                                    placeholder= "0"
                                    required={true}
                                />
                                {answerOption.answerText}
                            </label >
                    )}
                </div>
            )
        }

        else if (questions[currentQuestion].questionText === 'What is your eye color?') {
            return(
                <div className="outer-container-hair">
                    {questions[currentQuestion].answerOptions.map((answerOption) =>
                        <div className="inner-container-hair-color" key={answerOption.id}>
                            <label htmlFor={answerOption.answerText}>
                                <input
                                    type="radio"
                                    id={answerOption.answerText}
                                    name={answerOption.answerText}
                                    onChange={handleChange}
                                    value={answerOption.answerText}
                                    checked={eyeColor === answerOption.answerText}
                                />
                                {answerOption.answerText}
                            </label>
                        </div>
                    )}
                </div>
            )}
    }


    function handleAnswerInput(e) {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
            setRadioCheck(true)
            console.log(gender,heightCm , hairColor, weightKg, eyeColor);
            // console.log(specificCharacter);
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


    function getClosestHeight1() {
        let heightCharacters = filter1 && filter1.map((character) => {
            return(
                parseInt(character.appearance.height[1].replaceAll(" cm", ""), 10)
            )
        })

        let goal = parseInt(heightCm, 10)

        let closest = heightCharacters.reduce(function(prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });

        return(
            closest
            // console.log(heightCharacters, closest, test)
        )
    }

    function getClosestHeight2() {
        let heightCharacters = filter2 && filter2.map((character) => {
            return(
                parseInt(character.appearance.height[1].replaceAll(" cm", ""), 10)
            )
        })

        let goal = parseInt(heightCm, 10)

        let closest = heightCharacters.reduce(function(prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });

        return(
            closest
            // console.log(heightCharacters, closest, test)
        )
    }

    function getClosestHeight3() {
        let heightCharacters = filter3 && filter3.map((character) => {
            return(
                parseInt(character.appearance.height[1].replaceAll(" cm", ""), 10)
            )
        })

        let goal = parseInt(heightCm, 10)

        let closest = heightCharacters.reduce(function(prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });

        return(
            closest
            // console.log(heightCharacters, closest, test)
        )
    }

    function getClosestWeight1() {
        let weightCharacters = filter1 && filter1.map((character) => {
            return(
                parseInt(character.appearance.weight[1].replaceAll(" kg", ""), 10)
            )
        })

        let goal = parseInt(weightKg, 10)

        let closest = weightCharacters.reduce(function(prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });
        return(
            closest
            // console.log(heightCharacters, numbers, closest)
        )
    }

    function getClosestWeight2() {
        let weightCharacters = filter2 && filter2.map((character) => {
            return(
                parseInt(character.appearance.weight[1].replaceAll(" kg", ""), 10)
            )
        })

        let goal = parseInt(weightKg, 10)

        let closest = weightCharacters.reduce(function(prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });
        return(
            closest
            // console.log(heightCharacters, numbers, closest)
        )
    }

    function getClosestWeight3() {
        let weightCharacters = filter3 && filter3.map((character) => {
            return(
                parseInt(character.appearance.weight[1].replaceAll(" kg", ""), 10)
            )
        })

        let goal = parseInt(weightKg, 10)

        let closest = weightCharacters.reduce(function(prev, curr) {
            return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });
        return(
            closest
            // console.log(heightCharacters, numbers, closest)
        )
    }

    const filter1 = character.filter((character) => {
        return character.appearance.gender === gender
        && character.appearance.hairColor === hairColor
        && character.appearance.eyeColor === eyeColor
    })


    let find1 = filter1.find((character) => {
    return parseInt(character.appearance.height[1].replaceAll(" cm", ""), 10) === getClosestHeight1(filter1)
        ||
        parseInt(character.appearance.weight[1].replaceAll(" kg", ""), 10) === getClosestWeight1(filter1)
    })


    const filter2 = character.filter((character) => {
        return character.appearance.gender === gender
            &&  character.appearance.eyeColor === eyeColor
            && character.appearance.hairColor !== hairColor
    })

    let find2 = filter2.find((character) => {
        return parseInt(character.appearance.height[1].replaceAll(" cm", ""), 10) === getClosestHeight2(filter2)
            ||
            parseInt(character.appearance.weight[1].replaceAll(" kg", ""), 10) === getClosestWeight2(filter2)
    })

    const filter3 = character.filter((character) => {
        return character.appearance.gender === gender
            && character.appearance.eyeColor !== eyeColor
            && character.appearance.hairColor === hairColor
    })

    let find3 = filter3.find((character) => {
        return parseInt(character.appearance.height[1].replaceAll(" cm", ""), 10) === getClosestHeight3(filter3)
            ||
            parseInt(character.appearance.weight[1].replaceAll(" kg", ""), 10) === getClosestWeight3(filter3)
    })

    const resultQuiz = character && character.map((character) => {
        if (find1 === character)
        return (
            <>
                <div className="character-result" key={character.id}>
                    <div className="inner-character-container">
                        <img src={character.images.lg} alt={character.name} className='image'/>
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
                    <div className="right" key={character.id}>
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
            if (find2 === character)
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
                            <div className="right" key={character.id}>
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
        if (find3 === character)
            return (
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
                        <div className="right" key={character.id}>
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
        else if (find1 === undefined)
            return(
            <>
                <h1>Sorry...</h1>
                <p>There is no character that matches your appearance</p>
                <h4>Try out our <Link to="/powerstats" className="back-link">Powerstats</Link> quiz</h4>
            </>
            )
    })


    return (
        <>
            {showResult ? (
                    <div className="final-results">
                        {/*<h1>Final Result</h1>*/}
                        {/*<p>Gender: {gender}</p>*/}
                        {/*<p>Height: {heightCm}</p>*/}
                        {/*<p>Hair color: {hairColor}</p>*/}
                        {/*<p>Weight:{weightKg}</p>*/}
                        {/*<p>Eye color: {eyeColor} </p>*/}
                        <h1>These characters match your appearance!</h1>
                        {/*{console.log(fetchCharacterQuiz())}*/}
                        {resultQuiz}
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
                                        disabled={radioCheck}
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