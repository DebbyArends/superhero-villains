import React, {useState} from 'react';
import axios from "axios";
import "./SearchCharacter.css"

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
        else if (searchTerm.length > 2) {
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
                                        <table className="table">
                                            <tr>
                                                <td className="data-center">Intelligence: </td>
                                                <td>{oneCharacter.powerstats.intelligence}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-center">Strength: </td>
                                                <td>{oneCharacter.powerstats.strength}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-center">Speed: </td>
                                                <td>{oneCharacter.powerstats.speed}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-center">Durability: </td>
                                                <td>{oneCharacter.powerstats.durability}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-center">Power: </td>
                                                <td>{oneCharacter.powerstats.power}</td>
                                            </tr>
                                            <tr>
                                                <td className="data-center">Combat: </td>
                                                <td>{oneCharacter.powerstats.combat}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="inner-container-biography">
                                        <h1>{oneCharacter.name}</h1>
                                        <span className="full-name">{oneCharacter.biography['full-name']}</span>
                                        <div className="biography">
                                            <table className="table-biography">
                                                <tr>
                                                    <td className="data-biography">Aliases: </td>
                                                    <td>{oneCharacter.biography.aliases}</td>
                                                </tr>
                                                <tr>
                                                    <td className="data-biography">Place of birth: </td>
                                                    <td>{oneCharacter.biography["place-of-birth"]}</td>
                                                </tr>
                                                <tr>
                                                    <td className="data-biography">Relatives: </td>
                                                    <td>{oneCharacter.connections.relatives}</td>
                                                </tr>
                                                <tr>
                                                    <td className="data-biography">First appearance: </td>
                                                    <td>{oneCharacter.biography["first-appearance"]}</td>
                                                </tr>
                                                <tr>
                                                    <td className="data-biography">Publisher: </td>
                                                    <td>{oneCharacter.biography.publisher}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                            </div>
        </>
    )
}

export default SearchCharacter