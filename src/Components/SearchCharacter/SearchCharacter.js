import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./SearchCharacter.css";
import CharacterBiographyCard from "../CharacterBiographyCard/CharacterBiographyCard";



function SearchCharacter() {
    const [allHeroes, setAllHeroes] = useState([]);
    const [searchMatches, setSearchMatches] = useState([]);
    const [heroDetails, setHeroDetails] = useState({});
    const [id, setId] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    // Wanneer de id wordt veranderd willen we de gegevens van die specifieke hero ophalen
    useEffect(() => {
        async function getSpecificSuperHero() {
            try {
                const result = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
                console.log(result.data)
                setHeroDetails(result.data)
            } catch (e) {
                console.error(e)
            }
        }
        getSpecificSuperHero();
        // Reset alle oude matches en de ingevoerde zoekopdracht:
        setSearchMatches([]);
        setSearchTerm('');
    }, [id])
    // Wanneer de pagina laadt, halen we alle helden op zodat we deze kunnen doorzoeken
    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get(`https://akabab.github.io/superhero-api/api/all.json`)
                console.log(result.data)
                setAllHeroes(result.data)
            } catch (e) {
                console.error(e)
            }
        }
        getData()
    }, []);
    // Als we op enter drukken, willen de de ID setten van de eerste match (ongeacht hoeveel matches er over zijn)
    function searchHero(e) {
        e.preventDefault();
        setId(searchMatches[0].id);
    }
    // Wanneer de input veranderd, wordt deze functie uitgevoerd
    function handleChange(e) {
        // We slaan de zoekopdracht op in kleine letters
        const query = e.target.value.toLowerCase();
        // We zetten de zoekterm in de state;
        setSearchTerm(query);
        if (query.length > 2) {
            // Filter op alle helden
            const matches = allHeroes.filter((character) => {
                // En geef een resultaat terug wanneer de naam, in KLEINE letters, een stukje van de zoekterm bevat
                return character.name.toLowerCase().includes(query);
            });
            console.log(matches);
            // Zet de resultaten (dit kunnen er 0 of 1 of bijvoorbeeld 5 zijn) in de state zodat we deze kunnen laten zien
            setSearchMatches(matches);
        }
    }
    return (
        <>
            <div className="main">
                {/*Ik heb er een formulier omheen gezet, zodat de gebruiker ook kan zoeken met Enter!*/}
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
                    {/*Dit is de auto-complete, hierin mappen we over alle huidige matches heen*/}
                    <ul className="auto-complete">
                        {searchMatches.map((searchMatch) => {
                            return (
                                // De gebruiker kan erop klikken, dan wordt de id van die hero in de state geplaatst en de gegevens daarover opgehaald
                                <li key={searchMatch.id} onClick={() => setId(searchMatch.id)}>
                                    {searchMatch.name}
                                </li>
                            )
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