import React from 'react';

function SearchBar(props) {
    const {handleChange, searchText} = props;

    return (
        <div>
            <input
                id="search-bar"
                type="search"
                placeholder="Search your superhero or villain..."
                onChange={handleChange}
                value={searchText}
            />
        </div>
    );
}

export default SearchBar;