import React, {useEffect, useState} from 'react';
import axios from "axios";
import CharacterBiographyCard from "../../Components/CharacterBiographyCard/CharacterBiographyCard";
import {Link, useParams} from "react-router-dom";

function CharacterBiography() {
    const [characters, setCharacters] = useState('');
    const {characterId} = useParams();

    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
                console.log(result.data);
                setCharacters(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getData();
    }, []);


    let numberCharacterId = parseInt(characterId, 10);

    const currentCharacter = characters && characters.find((character) => {
        return numberCharacterId === character.id;
    });

    console.log(currentCharacter);


    return (
            <div className="outer-container-character">
                <h2>Character biography</h2>
                {currentCharacter &&
                <CharacterBiographyCard
                    key={currentCharacter.id}
                    classname="search-result"
                    image={currentCharacter.images.lg}
                    characterName={currentCharacter.name}
                    intelligence={currentCharacter.powerstats.intelligence}
                    strength={currentCharacter.powerstats.strength}
                    speed={currentCharacter.powerstats.speed}
                    durability={currentCharacter.powerstats.durability}
                    power={currentCharacter.powerstats.power}
                    combat={currentCharacter.powerstats.combat}
                    fullName={currentCharacter.biography.fullName}
                    gender={currentCharacter.appearance.gender}
                    height={currentCharacter.appearance.height[1]}
                    hairColor={currentCharacter.appearance.hairColor}
                    weight={currentCharacter.appearance.weight[1]}
                    eyeColor={currentCharacter.appearance.eyeColor}
                    aliases={currentCharacter.biography.aliases.join(', ')}
                    placeOfBirth={currentCharacter.biography.placeOfBirth}
                    relatives={currentCharacter.connections.relatives}
                    firstAppearance={currentCharacter.biography.firstAppearance}
                    publisher={currentCharacter.biography.publisher}
                />
                }
                <div className="container-link-back">
                    <p id="link-back">Go <Link to="/characters" className="back-link">back</Link> to the characters page</p>
                </div>
            </div>
    )}

export default CharacterBiography;
