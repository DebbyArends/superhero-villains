import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Characters.css'
import{ BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { useForm} from "react-hook-form";


function Characters() {
    const [characters, setCharacters]=useState('')
    const {register, handleSubmit}= useForm()
    const [currentCharacterMarvel, setCurrentCharacterMarvel] = useState(7)
    const [indexMarvel, setIndexMarvel] = useState(0)
    const [currentCharacterDC, setCurrentCharacterDC] = useState(7)
    const [indexDC, setIndexDC] = useState(0)
    const [searchCharacter, setSearchCharacter] = useState( '')
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


    // find methode naar


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
        setCurrentCharacterMarvel(  currentCharacterMarvel - 1)
        setIndexMarvel (indexMarvel - 1)
    }

    function nextSlideDCCharacters() {
        setCurrentCharacterDC(currentCharacterDC + 1)
        setIndexDC(indexDC + 1)

    }

    function prevSlideDCCharacters() {
        setCurrentCharacterDC(  currentCharacterDC - 1)
        setIndexDC (indexDC - 1)
    }



    function onFormSubmit(e) {
        e.preventDefault()
        console.log(searchCharacter)
        }



    return (
        <>
            <section className="slider">
                <h1>Characters</h1>
                <form onSubmit={(onFormSubmit)}>
                    <label htmlFor="search-character">
                        <input type="text"
                               placeholder="Type the name of a superhero or villain..."
                               name="search-character"
                               className={!searchCharacter === characters.name ? 'input-error' : 'input-normal'}
                               value={searchCharacter}
                               onChange={(e) => setSearchCharacter(e.target.value)}
                        />
                    </label>
                    <button
                        type="submit">
                        Search..
                    </button>
                </form>
            </section>
                <section className="slider">
                    <button
                        onClick={prevSlideMarvelCharacters}
                    >
                        <BiLeftArrow className="left-arrow"/>
                    </button>
                        <article className="character-container">
                            {charactersMarvel && charactersMarvel.slice(indexMarvel, currentCharacterMarvel).map((character)=> (
                                [
                                    <ul key={character.id}>
                                        <li className="character-list">
                                            <div className="character-white">
                                                <img src={character.images.lg} alt={character.name} className="image-character"/>
                                                <h5>{character.name}</h5>
                                                <h6>Naam: {character.biography.fullName}</h6>
                                                <h6>Publisher: {character.biography.publisher}</h6>
                                            </div>
                                        </li>
                                    </ul>
                                ]
                            ))}
                        </article>
                        <BiRightArrow className="right-arrow" onClick={nextSlideMarvelCharacters} />
                    <button
                        onClick={prevSlideDCCharacters}
                    >
                        <BiLeftArrow className="left-arrow-dc"/>
                    </button>
                    <article className="character-container">
                        {charactersDC && charactersDC.slice(indexDC, currentCharacterDC).map((character)=> (
                            [
                                <ul key={character.id}>
                                    <li className="character-list">
                                        <div className="character-white">
                                            <img src={character.images.lg} alt={character.name} className="image-character"/>
                                            <h5>{character.name}</h5>
                                            <h6>Naam: {character.biography.fullName}</h6>
                                            <h6>Publisher: {character.biography.publisher}</h6>
                                        </div>
                                    </li>
                                </ul>
                            ]
                        ))}
                    </article>
                    <BiRightArrow className="right-arrow-dc" onClick={nextSlideDCCharacters} />
                </section>
        </>

    )
}

export default Characters