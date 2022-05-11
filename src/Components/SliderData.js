import React, {useEffect, useState} from "react";
import axios from "axios";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";

function SliderData() {
    const [characters, setCharacters]=useState('')
    const [currentCharacter, setCurrentCharacter] = useState(0)
    const length = SliderData.length

    function nextSlide() {
        setCurrentCharacter(currentCharacter === length - 1 ? 0 : currentCharacter + 1)

    }

    function prevSlide(){
        currentCharacter > 0? setCurrentCharacter(currentCharacter => currentCharacter -1): setCurrentCharacter(0)
    }

    console.log(currentCharacter)



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

        return(
            <div className="arrows-article-container">
                <BiLeftArrow className="left-arrow" onClick={prevSlide}/>
                <article className="character-container">
                    {characters && characters.map((character, index)=> {
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
                <BiRightArrow className="right-arrow" onClick={nextSlide}/>
            </div>
            )
}

export default SliderData