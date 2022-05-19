import React, {useState} from 'react';
import axios from "axios";

function CharacterBiography() {
    const [superheroData, setSuperheroData] = useState([]);

    async function searchSuperHeroes () {
        const response = await axios.get(`https://www.superheroapi.com/api.php/${apiKey}/${id}`);
        console.log(response.data.results)

        setSuperheroData(response.data.results);
    }

    function handleChange (e) {
        const id = e.target.value;

        setSuperheroData(id);
        if (id === 0) {
            setSuperheroData([]);
        }
        else if (searchTerm.length > 2) {
            searchSuperHeroes();
        }
    }

    return(
        <h1>karakter</h1>
    )
}

export default CharacterBiography