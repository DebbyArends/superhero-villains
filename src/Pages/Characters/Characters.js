import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Characters.css'
import{ BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { useForm} from "react-hook-form";


function Characters() {
    const [characters, setCharacters]=useState('')
    const {register, handleSubmit}= useForm()
    const [currentCharacter, setCurrentCharacter] = useState(5)
    const [searchCharacter, setSearchCharacter] = useState( '')
    const length = characters.length

    const [index, setIndex] = useState(0)

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

    const characterSearch = characters && characters.map((character)=> {
        return (
            [
                            <h5>{character.name}</h5>
            ]
        )
    }
    )


    function nextSlide() {
        setCurrentCharacter(currentCharacter + 5)
        setIndex(index + 5)

    }

    function prevSlide() {
        setCurrentCharacter(currentCharacter -5)
        setIndex(index- 5)
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
                        <BiLeftArrow className="left-arrow" onClick={prevSlide}/>
                        <article className="character-container">
                            {characters && characters.slice(index, currentCharacter).map((character)=> (
                                // <div className={index === currentCharacter  ? 'slide active' : 'slide'} key=
                                //     {index}>
                                //     {index === currentCharacter && (
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
                            {/*// </div>*/}
                        </article>
                        <BiRightArrow className="right-arrow" onClick={nextSlide} />
                </section>
        </>

    )
}

export default Characters