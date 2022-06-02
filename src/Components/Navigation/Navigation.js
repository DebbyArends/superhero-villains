import React from "react";
import {NavLink} from "react-router-dom";
import './Navigation.css'
import superheroVsVillainsLogo from "../../assets/superhero-vs-villains.png"
import {BiUserCircle} from 'react-icons/bi'



function Navigation() {
    return(
        <nav className="main-header">
                <div className="image-container">
                    <div className="inner-container-image">
                        <NavLink exact to="/" activeClassName="active-link">
                            <img src={superheroVsVillainsLogo} className="logo-superhero-vs-villains-nav" alt="logo"/>
                        </NavLink>
                    </div>
                    <div className="inner-container-user">
                        <NavLink to="/user" activeClassName="active-link"><BiUserCircle
                        className="user-icon"
                        /></NavLink>
                    </div>
                </div>
                <div className="outer-container-nav-links">
                    <div className="inner-container-nav-links">
                        <ul className="list-nav-links">
                            <li>
                                <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                            </li>
                            <li>
                                |
                            </li>
                            <li>
                                <NavLink to="/appearance" activeClassName="active-link">Appearance</NavLink>
                            </li>
                            <li>
                                |
                            </li>
                            <li>
                                <NavLink to="/characters" activeClassName="active-link">Characters</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>

    );
}

export default Navigation