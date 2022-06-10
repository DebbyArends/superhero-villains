import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./SearchCharacter.css";
import CharacterBiographyCard from "../CharacterBiographyCard/CharacterBiographyCard";



function SearchCharacter() {
    const [searchText, setSearchText] = useState('');
    const [superheroData, setSuperheroData] = useState([]);
    // const apiKey = "10228880912034222";
    const [characters, setCharacters] = useState('')



    async function getData(){
        try{
            const result = await axios.get('https://akabab.github.io/superhero-api/api/all.json')
            // console.log(result.data)
            setCharacters(result.data)
        }catch (e) {
            console.error(e)
        }
    }


    const arrayNamesIds = characters && characters.map((character) =>{
        return(
            {
                name: character.name,
                id: character.id
            }
        )
    })

    console.log(arrayNamesIds);

    // async function searchSuperHeroes() {
    //     try {
    //         const response = await axios.get(`https://www.superheroapi.com/api.php/${apiKey}/search/${searchText}`);
    //         console.log(response.data.results);
    //         setSuperheroData(response.data.results);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    //
    function handleChange(e) {
        const searchTerm = e.target.value;

        setSearchText(searchTerm);
        if (searchTerm === arrayNamesIds.id){
            if (searchTerm.length === 0) {
                setSuperheroData([]);
            }
            if (searchTerm.length > 2) {
                getData();
            }
        }

    }

    return (
        <>
            <div className="main">
                <input
                    id="searchBar"
                    type="search"
                    placeholder="Search your superhero or villain..."
                    autoComplete="off"
                    name="searchBar"
                    onChange={handleChange}
                    value={searchText}
                    minLength="2"
                />
                {searchText.length >0 && searchText.length<3 && <p className="error">Search text must be longer than 2 characters</p>}
            </div>
            <div className="outer-container-character">
                {characters && characters.map((character) =>
                    <CharacterBiographyCard
                        key={character.id}
                        classname="search-result"
                        image={character.image.url}
                        characterName={character.name}
                        intelligence={character.powerstats.intelligence}
                        strength={character.powerstats.strength}
                        speed={character.powerstats.speed}
                        durability={character.powerstats.durability}
                        power={character.powerstats.power}
                        combat={character.powerstats.combat}
                        fullName={character.biography['full-name']}
                        gender={character.appearance.gender}
                        height={character.appearance.height[1]}
                        hairColor={character.appearance.hairColor}
                        weight={character.appearance.weight[1]}
                        eyeColor={character.appearance.eyeColor}
                        aliases={character.biography.aliases.join(', ')}
                        placeOfBirth={character.biography["place-of-birth"]}
                        relatives={character.connections.relatives}
                        firstAppearance={character.biography["first-appearance"]}
                        publisher={character.biography.publisher}
                    />
                )}
            </div>
        </>
    );
}

export default SearchCharacter;