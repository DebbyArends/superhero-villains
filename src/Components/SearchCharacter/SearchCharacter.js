import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./SearchCharacter.css";
import CharacterBiographyCard from "../CharacterBiographyCard/CharacterBiographyCard";


function SearchCharacter() {
    const [allHeroes, setAllHeroes] = useState([]);
    const [searchMatches, setSearchMatches] = useState([]);
    const [heroDetails, setHeroDetails] = useState({});
    const [id, setId] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function getSpecificSuperHero() {
            try {
                const result = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
                console.log(result.data);
                setHeroDetails(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getSpecificSuperHero();
        setSearchMatches([]);
        setSearchTerm('');
    }, [id]);

    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get(`https://akabab.github.io/superhero-api/api/all.json`);
                console.log(result.data);
                setAllHeroes(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getData();
    }, []);

    function searchHero(e) {
        e.preventDefault();
        setId(searchMatches[0].id);
    }

    function handleChange(e) {
        const query = e.target.value.toLowerCase();
        setSearchTerm(query);
        if (query.length > 2) {
            const matches = allHeroes.filter((character) => {
                return character.name.toLowerCase().includes(query);
            });
            console.log(matches);
            setSearchMatches(matches);
        }
    }

    return (
        <>
            <div className="main">
                <form onSubmit={searchHero}>
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
                    <ul className="auto-complete">
                        {searchMatches.map((searchMatch) => {
                            return (
                                <li key={searchMatch.id} onClick={() => setId(searchMatch.id)}>
                                    {searchMatch.name}
                                </li>
                            );
                        })}
                    </ul>
                    {searchTerm.length > 0 && searchTerm.length < 3 &&
                    <p className="error">Search text must be longer than 2 characters</p>}
                </form>
            </div>
            <div className="outer-container-character">
                {Object.keys(heroDetails).length > 0 &&
                <CharacterBiographyCard
                    key={heroDetails.id}
                    classname="search-result"
                    image={heroDetails.images.lg}
                    characterName={heroDetails.name}
                    intelligence={heroDetails.powerstats.intelligence}
                    strength={heroDetails.powerstats.strength}
                    speed={heroDetails.powerstats.speed}
                    durability={heroDetails.powerstats.durability}
                    power={heroDetails.powerstats.power}
                    combat={heroDetails.powerstats.combat}
                    fullName={heroDetails.biography.fullName}
                    gender={heroDetails.appearance.gender}
                    height={heroDetails.appearance.height[1]}
                    hairColor={heroDetails.appearance.hairColor}
                    weight={heroDetails.appearance.weight[1]}
                    eyeColor={heroDetails.appearance.eyeColor}
                    aliases={heroDetails.biography.aliases.join(', ')}
                    placeOfBirth={heroDetails.biography.placeOfBirth}
                    relatives={heroDetails.connections.relatives}
                    firstAppearance={heroDetails.biography.firstAppearance}
                    publisher={heroDetails.biography.publisher}
                />}
            </div>
        </>
    );
}

export default SearchCharacter;