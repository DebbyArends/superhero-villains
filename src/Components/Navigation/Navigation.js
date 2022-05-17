import React from "react";
import {NavLink} from "react-router-dom";
import './Navigation.css'
import logoSuper from "../../assets/Logo 500x500 px_quiz2.png"



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
                </ul>
            </div>
        </nav>

    );
}

export default Navigation