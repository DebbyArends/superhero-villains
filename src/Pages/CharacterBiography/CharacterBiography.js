import React, {useEffect, useState} from 'react';
import axios from "axios";
// import CharacterBiographyCard from "../../Components/CharacterBiographyCard/CharacterBiographyCard";
import {useParams} from "react-router-dom";

function CharacterBiography() {
    const [characters, setCharacters]=useState('')
    const {characterId} = useParams()

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


    const currentCharacter = characters.find((character) => {
        return characterId === character.id
    })

    console.log(currentCharacter)

    // const currentCharacter = characters && characters.find((character) => {
    //     return characterId === character.id
    // })
    //
    // console.log(currentCharacter)
    //
    // function checkCharacter() {
    //     if (characterId === characters.id){
    //         return characters
    //     }
    // }
    //
    // console.log(checkCharacter());

    return (
        <div>
            <h1>Character biography card component</h1>
            {/*{characters && characters.map((character) => {*/}
            {/*    return(*/}
            {/*        <CharacterBiographyCard*/}
            {/*            key={character.id}*/}
            {/*            classname="character-result"*/}
            {/*            image={character.images.lg}*/}
            {/*            characterName={character.name}*/}
            {/*            intelligence={character.powerstats.intelligence}*/}
            {/*            strength={character.powerstats.strength}*/}
            {/*            speed={character.powerstats.speed}*/}
            {/*            durability={character.powerstats.durability}*/}
            {/*            power={character.powerstats.power}*/}
            {/*            combat={character.powerstats.combat}*/}
            {/*            fullName={character.biography.fullName}*/}
            {/*            gender={character.appearance.gender}*/}
            {/*            height={character.appearance.height[1]}*/}
            {/*            hairColor={character.appearance.hairColor}*/}
            {/*            weight={character.appearance.weight[1]}*/}
            {/*            eyeColor={character.appearance.eyeColor}*/}
            {/*            aliases={character.biography.aliases.join(', ')}*/}
            {/*            placeOfBirth={character.biography.placeOfBirth}*/}
            {/*            relatives={character.connections.relatives}*/}
            {/*            firstAppearance={character.biography.firstAppearance}*/}
            {/*            publisher={character.biography.publisher}*/}
            {/*        />*/}
            {/*        )*/}
            {/*})}*/}
        </div>
    );
}

export default CharacterBiography;
