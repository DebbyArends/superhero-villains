import React from "react";
import './Footer.css'
import superheroVsVillainsLogo from "../../assets/superhero-vs-villains.png"
import { IoIosArrowForward } from 'react-icons/io'

function Footer() {
    return(
        <>
            <div className="main-footer">
                <div className="outer-container-title">
                    <div className="inner-container-title">
                        <ul className="list-title">
                            <li>
                                <h4>Get in touch</h4>
                            </li>
                            <li>
                                <h4>Connect</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="outer-container-links">
                    <div className="inner-container-links">
                        <div className="list-links">
                            <div>
                                <ul className="list-unstyled">
                                    <li>
                                        <IoIosArrowForward
                                        className="arrow-forward"/>
                                        <a href="mailto:debby_arends@live.nl?subject=Contact Debby Arends" target="_blank" rel="noreferrer" className="list-items">Mail me !</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="list-links-social">
                                <ul className="list-unstyled">
                                    <li>
                                        <IoIosArrowForward
                                            className="arrow-forward"/>
                                        <a href="https://www.linkedin.com/in/debby-arends-92a97b55/" target="_blank" rel="noreferrer" className="list-items">LinkedIn</a>
                                    </li>
                                    <li>
                                        <IoIosArrowForward
                                            className="arrow-forward"/>
                                        <a href="https://www.instagram.com/kinnaris_manohara/" target="_blank" rel="noreferrer" className="list-items">Instagram</a>
                                    </li>
                                    <li>
                                        <IoIosArrowForward
                                            className="arrow-forward"/>
                                        <a href="https://www.facebook.com/debby.arends/" target="_blank" rel="noreferrer" className="list-items">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-logo">
                    <img src={superheroVsVillainsLogo} alt="Logo superhero vs villains" className="logo-superhero-vs-villains"/>
                </div>
            </div>
        </>
    );
}

export default Footer;