import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Characters.css'
import { useHistory } from 'react-router-dom'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import{ReactComponent as Marvel} from "../../assets/Marvel_Logo.svg";
import {ReactComponent as DC} from "../../assets/DC_Comics_logo.svg";
import {ReactComponent as Divider} from "../../assets/Decorative-Border-Divider.svg";
import SearchCharacter from "../../Components/SearchCharacter/SearchCharacter";

function Characters() {
    const [characters, setCharacters]=useState('')
    const [currentCharacterMarvel, setCurrentCharacterMarvel] = useState(7)
    const [indexMarvel, setIndexMarvel] = useState(0)
    const [currentCharacterDC, setCurrentCharacterDC] = useState(7)
    const [indexDC, setIndexDC] = useState(0)
    const history = useHistory()
    const length = characters.length

    useEffect(()=> {
        async function getData(){
            try{
                const result = await axios.get('https://akabab.github.io/superhero-api/api/all.json')
                console.log(result.data)
                setCharacters(result.data)
            }catch (e) {
                console.error(e)
            }
        }
        getData()
    }, [])


    if (!Array.isArray(characters) || length <= 0) {
        return null;
    }


    const charactersMarvel = characters.filter((character) => {
        return character.biography.publisher === "Marvel Comics"
    })

    const charactersDC = characters.filter((character) => {
        return character.biography.publisher === "DC Comics"
    })

    function nextSlideMarvelCharacters() {
        setCurrentCharacterMarvel(currentCharacterMarvel + 1)
        setIndexMarvel(indexMarvel + 1)
    }

    function prevSlideMarvelCharacters() {
        setCurrentCharacterMarvel(  currentCharacterMarvel > 7 ? currentCharacterMarvel - 1: currentCharacterMarvel (7))
        setIndexMarvel (indexMarvel > 0 ? indexMarvel - 1: indexMarvel (0))
    }

    function nextSlideDCCharacters() {
        setCurrentCharacterDC(currentCharacterDC + 1)
        setIndexDC(indexDC + 1)

    }

    function prevSlideDCCharacters() {
        setCurrentCharacterDC(  currentCharacterDC > 7 ? currentCharacterDC - 1: currentCharacterDC(7))
        setIndexDC (indexDC > 0 ? indexDC - 1: indexDC(0))
    }

    function handleClick() {
        history.push("/character-biography")
    }


    return (
        <>
            <div className="title">
                <h1>Characters</h1>
            </div>
            <SearchCharacter/>
            <div className="container-logos">
                <Marvel className="logo-marvel"/>
            </div>
            <section className="slider">
                <IoIosArrowBack
                    className="left-arrow"
                    onClick={prevSlideMarvelCharacters}
                />
                <article className="character-container">
                    {charactersMarvel && charactersMarvel.slice(indexMarvel, currentCharacterMarvel).map((character)=> (
                        [
                            <ul key={character.id} className="list-items-marvel">
                                <li className="character-list-marvel" onClick={handleClick}>
                                    <div className="character-white">
                                        <img src={character.images.lg} alt={character.name} className="image-character"/>
                                        <h5>{character.name}</h5>
                                    </div>
                                </li>
                            </ul>
                        ]
                    ))}
                </article>
                <IoIosArrowForward
                    className="right-arrow"
                    onClick={nextSlideMarvelCharacters}
                />
            </section>

            <div className="container-logos">
                <Divider className="divider-line"/>
            </div>

            <div className="container-logos">
                <DC className="logo-dc"/>
            </div>

            <section className="slider">
                <IoIosArrowBack
                    className="left-arrow"
                    onClick={prevSlideDCCharacters}
                />
                <article className="character-container">
                    {charactersDC && charactersDC.slice(indexDC, currentCharacterDC).map((character)=> (
                        [
                            <ul key={character.id}>
                                <li className="character-list-dc" onClick={handleClick}>
                                    <div className="character-white">
                                        <img src={character.images.lg} alt={character.name} className="image-character"/>
                                        <h5>{character.name}</h5>
                                    </div>
                                </li>
                            </ul>
                        ]
                    ))}
                </article>
                <IoIosArrowForward
                    className="right-arrow"
                    onClick={nextSlideDCCharacters}
                />
            </section>
        </>

    )
}

export default Characters