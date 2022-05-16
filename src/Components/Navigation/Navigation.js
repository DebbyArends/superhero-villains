import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import './Navigation.css'
import logoSuper from "../../assets/Logo 500x500 px_quiz2.png"
import {BiSearchAlt2} from "react-icons/bi";


function Navigation() {
    return(
        <nav>
            <div className="nav-container">
                <div className="image-container">
                    <img src={logoSuper} className="logo-image" alt="logo"/>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/appearance" activeClassName="active-link">Appearance</NavLink>
                    </li>
                    <li>
                        <NavLink to="/powerstats" activeClassName="active-link">Powerstats</NavLink>
                    </li>
                    <li>
                        <NavLink to="/characters" activeClassName="active-link">Characters</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search-character" activeClassName="active-link">Search character</NavLink>
                    </li>

                </ul>
            </div>
            <form>
                <label htmlFor="search-character">
                    <input
                        type="search"
                        id="search"
                        placeholder="Search superhero or villain..."
                        // className={!searchCharacter === characters.name ? 'input-error' : 'input-normal'}
                        // value={searchCharacter}
                        // onChange={(e) => setSearchCharacter(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    // onClick={handleSubmit}>
                >
                    <BiSearchAlt2 className="icon"/>
                </button>
            </form>
        </nav>

    );
}

export default Navigation