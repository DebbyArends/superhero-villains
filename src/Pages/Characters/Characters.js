import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Characters.css'
import{ BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import {useForm} from "react-hook-form";


function Characters() {
    const [characters, setCharacters]=useState('')
    const {register, handleSubmit}= useForm()
    // const [currentCharacter, setCurrentCharacter] = useState(0)
    // const length = characters.length

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

    function onFormSubmit(data) {
        if (data === characters.name){
                characters && characters.map((character)=> {
                    return(
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
                    )
                })
        }
        console.log(data);
    }

    return (
        <>
            <section className="slider">
                <h1>Marvel characters</h1>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="search-character">
                        <input type="text"
                               {...register("search-character")}
                        />
                    </label>
                    <button
                    type="submit">
                        Search..
                    </button>
                </form>
                <BiLeftArrow classname="left-arrow" />
                <article className="character-container">
                        {characters && characters.map((character)=> {
                        return(
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
                        )
                    })}
                </article>
                <BiRightArrow classname="right-arrow" />
            </section>
        </>

    )
}

export default Characters