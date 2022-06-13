import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./SearchCharacter.css";
import CharacterBiographyCard from "../CharacterBiographyCard/CharacterBiographyCard";



function SearchCharacter() {
    const [searchText, setSearchText] = useState('');
    const [superheroData, setSuperheroData] = useState([]);
    const [id , setId]= useState([])
    const [searchTerm, setSearchTerm] = useState('')
    // const apiKey = "10228880912034222";



useEffect(()=> {
    async function getData(){
        try{
            const result = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
            // console.log(result.data)
            // setSuperheroData(result.data)
        }catch (e) {
            console.error(e)
        }
    }
    getData()
}, [id])

    useEffect(()=> {
        async function getData(){
            try{
                const result = await axios.get(`https://akabab.github.io/superhero-api/api/all.json`)
                // console.log(result.data)
                setSuperheroData(result.data)
            }catch (e) {
                console.error(e)
            }
        }
        getData()
    }, [])

    let arrayNamesIds = superheroData && superheroData.map((character) =>{
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

    function handleChange(e) {
        setSearchTerm( e.target.value);
        // const object = {name: e.target.value}
        // arrayNamesIds && arrayNamesIds.map(() => {
        //
        // })
        const checkName = object => object.id === e.target.value

        console.log(arrayNamesIds.some(checkName));
        // if (arrayNamesIds.name.includes(searchTerm)){
        //     return(
        //         setId(arrayNamesIds.id)
        //     )
        // }
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
                    value={searchTerm}
                    minLength="2"
                />
                {searchText.length >0 && searchText.length<3 && <p className="error">Search text must be longer than 2 characters</p>}
            </div>
            <div className="outer-container-character">
                {superheroData && superheroData.map((character) =>
                    <CharacterBiographyCard
                        key= {character.id}
                        classname="search-result"
                        image={character.images.lg}
                        characterName={character.name}
                        intelligence={character.powerstats.intelligence}
                        strength={character.powerstats.strength}
                        speed={character.powerstats.speed}
                        durability={character.powerstats.durability}
                        power={character.powerstats.power}
                        combat={character.powerstats.combat}
                        fullName={character.biography.fullName}
                        gender={character.appearance.gender}
                        height={character.appearance.height[1]}
                        hairColor={character.appearance.hairColor}
                        weight={character.appearance.weight[1]}
                        eyeColor={character.appearance.eyeColor}
                        aliases={character.biography.aliases.join(', ')}
                        placeOfBirth={character.biography.placeOfBirth}
                        relatives={character.connections.relatives}
                        firstAppearance={character.biography.firstAppearance}
                        publisher={character.biography.publisher}
                    />
                )}
            </div>
        </>
    );
}

export default SearchCharacter;