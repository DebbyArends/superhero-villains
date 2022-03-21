import React from "react";
import {NavLink} from "react-router-dom";
import './Navigation.css'

function Navigation() {

    return(
        <nav>
            <div className="nav-container">
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
                </ul>
            </div>
        </nav>

    );
}

export default Navigation