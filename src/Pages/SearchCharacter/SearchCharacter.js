import React, {useState} from 'react';
import SearchBar from "../../Components/SearchBar";
import SearchResults from "../../Components/SearchResults";
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
        if (searchTerm.length > 3) {
            searchSuperHeroes();
        }
    }
    return(
        <>
            <div className="main">
                <SearchBar searchText={searchText} handleChange={handleChange} />
                <SearchResults superheroData={superheroData}/>
            </div>
        </>
    )
}

export default SearchCharacter