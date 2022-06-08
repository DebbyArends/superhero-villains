import React, {useEffect, useState} from 'react';
import axios from "axios";
// import CharacterBiographyCard from "../../Components/CharacterBiographyCard/CharacterBiographyCard";

function CharacterBiography() {
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
        getData()
    }, [])

    return (
        <div>
            <h1>Character biography card component</h1>
            {/* <CharacterBiographyCard*/}
            {/*    key={character.id}*/}
            {/*    classname="character-result"*/}
            {/*    image={character.images.lg}*/}
            {/*    characterName={character.name}*/}
            {/*    intelligence={character.powerstats.intelligence}*/}
            {/*    strength={character.powerstats.strength}*/}
            {/*    speed={character.powerstats.speed}*/}
            {/*    durability={character.powerstats.durability}*/}
            {/*    power={character.powerstats.power}*/}
            {/*    combat={character.powerstats.combat}*/}
            {/*    fullName={character.biography.fullName}*/}
            {/*    gender={character.appearance.gender}*/}
            {/*    height={character.appearance.height[1]}*/}
            {/*    hairColor={character.appearance.hairColor}*/}
            {/*    weight={character.appearance.weight[1]}*/}
            {/*    eyeColor={character.appearance.eyeColor}*/}
            {/*    aliases={character.biography.aliases.join(', ')}*/}
            {/*    placeOfBirth={character.biography.placeOfBirth}*/}
            {/*    relatives={character.connections.relatives}*/}
            {/*    firstAppearance={character.biography.firstAppearance}*/}
            {/*    publisher={character.biography.publisher}*/}
            {/*/>*/}
        </div>
    );
}

export default CharacterBiography;
