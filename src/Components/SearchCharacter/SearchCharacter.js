import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./SearchCharacter.css";
import CharacterBiographyCard from "../CharacterBiographyCard/CharacterBiographyCard";



function SearchCharacter() {
    const [searchText, setSearchText] = useState('');
    const [superheroData, setSuperheroData] = useState([]);
    const [oneSuperhero, setOneSuperhero] = useState([])
    const [id , setId]= useState([])
    const [searchTerm, setSearchTerm] = useState('')
    // const apiKey = "10228880912034222";



useEffect(()=> {
    async function getData(){
        try{
            const result = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
            console.log(result.data)
            setOneSuperhero(result.data)
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
                console.log(result.data)
                setSuperheroData(result.data)
            }catch (e) {
                console.error(e)
            }
        }
        getData()
    }, [])


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
        let arrayNamesIds = superheroData && superheroData.map((character) =>{
            return(
                {
                    name: character.name,
                    id: character.id
                }
            )
        })
        console.log(arrayNamesIds);

        setSearchTerm( e.target.value);

        const test= arrayNamesIds.find(element=> {
            if (element.name === e.target.value) {
                return true
            }
            return false
        })
        setId(test.id);
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
                {/*{superheroData.length > 1? superheroData.map((character) =>*/}
                {/*    <CharacterBiographyCard*/}
                {/*        key= {character.id}*/}
                {/*        classname="search-result"*/}
                {/*        image={character.images.lg}*/}
                {/*        characterName={character.name}*/}
                {/*        intelligence={character.powerstats.intelligence}*/}
                {/*        strength={character.powerstats.strength}*/}
                {/*        speed={character.powerstats.speed}*/}
                {/*        durability={character.powerstats.durability}*/}
                {/*        power={character.powerstats.power}*/}
                {/*        combat={character.powerstats.combat}*/}
                {/*        fullName={character.biography.fullName}*/}
                {/*        gender={character.appearance.gender}*/}
                {/*        height={character.appearance.height[1]}*/}
                {/*        hairColor={character.appearance.hairColor}*/}
                {/*        weight={character.appearance.weight[1]}*/}
                {/*        eyeColor={character.appearance.eyeColor}*/}
                {/*        aliases={character.biography.aliases.join(', ')}*/}
                {/*        placeOfBirth={character.biography.placeOfBirth}*/}
                {/*        relatives={character.connections.relatives}*/}
                {/*        firstAppearance={character.biography.firstAppearance}*/}
                {/*        publisher={character.biography.publisher}*/}
                {/*    />*/}
                {Object.keys(oneSuperhero).length > 0 &&
                <CharacterBiographyCard
                    key= {oneSuperhero.id}
                    classname="search-result"
                    image={oneSuperhero.images.lg}
                    characterName={oneSuperhero.name}
                    intelligence={oneSuperhero.powerstats.intelligence}
                    strength={oneSuperhero.powerstats.strength}
                    speed={oneSuperhero.powerstats.speed}
                    durability={oneSuperhero.powerstats.durability}
                    power={oneSuperhero.powerstats.power}
                    combat={oneSuperhero.powerstats.combat}
                    fullName={oneSuperhero.biography.fullName}
                    gender={oneSuperhero.appearance.gender}
                    height={oneSuperhero.appearance.height[1]}
                    hairColor={oneSuperhero.appearance.hairColor}
                    weight={oneSuperhero.appearance.weight[1]}
                    eyeColor={oneSuperhero.appearance.eyeColor}
                    aliases={oneSuperhero.biography.aliases.join(', ')}
                    placeOfBirth={oneSuperhero.biography.placeOfBirth}
                    relatives={oneSuperhero.connections.relatives}
                    firstAppearance={oneSuperhero.biography.firstAppearance}
                    publisher={oneSuperhero.biography.publisher}
                />}
            </div>
        </>
    );
}

export default SearchCharacter;