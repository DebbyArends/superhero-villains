import React, {useEffect, useState} from 'react';
import axios from "axios";

function Characters() {
    const [characters, setCharacters]=useState('')

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
    getData(characters)
}, [])

    return (
        <>
            <h1>Characters</h1>
            <h2>Searching characters</h2>
            <article className="outer-container-characters">
                {characters && characters.map((character)=> {
                    return(
                        <ul key={character.id}>
                            <li>
                                <img src={character.images.lg} alt={character.name}/>
                                <h5>{character.name}</h5>
                                <h6>Naam: {character.biography.fullName}</h6>
                                <h6>Publisher:{character.biography.publisher}</h6>
                            </li>
                        </ul>
                    )
                })}
            </article>
        </>
    )
}

export default Characters