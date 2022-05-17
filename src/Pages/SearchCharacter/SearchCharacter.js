import React, {useState} from 'react';
import axios from "axios";

function SearchCharacter() {
    const [searchText, setSearchText] = useState('');
    const [superheroData, setSuperheroData] = useState([]);
    const apiKey="10228880912034222"

    async function searchSuperHeroes () {
        const response = await axios.get(`https://www.superheroapi.com/api.php/${apiKey}/search/${searchText}`);
        console.log(response.data.results)

        setSuperheroData(response.data.results);
    }

    function handleChange (e) {
        const searchTerm = e.target.value;

        setSearchText(searchTerm);
        if (searchTerm.length === 0) {
            setSuperheroData([]);
        }
        else if (searchTerm.length > 3) {
            searchSuperHeroes();
        }
    }
    return(
        <>
            <div className="main">
                    <input
                        id="search-bar"
                        type="search"
                        placeholder="Search your superhero or villain..."
                        onChange={handleChange}
                        value={searchText}
                    />
            </div>
            <div className="outer-container-character" >
                {superheroData.map((oneCharacter) =>
                            <div className="search-result" key={oneCharacter.id}>
                                <div className="outer-image-stats-container">
                                    <div className="inner-image-stats-container">
                                        <img src={oneCharacter.image.url} alt={oneCharacter.name} className="image"/>
                                        <p>Intelligence: {oneCharacter.powerstats.intelligence}</p>
                                        <p>Strength: {oneCharacter.powerstats.strength}</p>
                                        <p>Speed: {oneCharacter.powerstats.speed}</p>
                                        <p>Durability: {oneCharacter.powerstats.durability}</p>
                                        <p>Power: {oneCharacter.powerstats.power}</p>
                                        <p>Combat: {oneCharacter.powerstats.combat}</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <h1>{oneCharacter.name}</h1>
                                    <span style={{ color:'gray', marginBottom: 5 }}>{oneCharacter.biography['full-name']}</span>
                                    <div className="biography">
                                        <p>Aliases: {oneCharacter.biography.aliases}</p>
                                        <p>Place of birth: {oneCharacter.biography["place-of-birth"]}</p>
                                        <p>First comic book appearance: {oneCharacter.biography["first-appearance"]}</p>
                                        <p>Publisher: {oneCharacter.biography.publisher} </p>
                                        <p>Relatives: {oneCharacter.connections.relatives}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                            </div>
        </>
    )
}

export default SearchCharacter