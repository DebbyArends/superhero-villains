import React from "react";
import './Footer.css'
import superheroVsVillainsLogo from "../../assets/superhero-vs-villains.png"
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

function Footer() {
    return(
        <>
            <div className="main-footer">
                <div className="title-footer">
                    <div className="test">
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
                        <div className="row">
                            <div>
                                <ul className="list-unstyled">
                                    <li>
                                        <IoIosArrowForward/><a href="mailto:debby_arends@live.nl?subject=Contact Debby Arends" target="_blank">Mail me !</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="list-unstyled">
                                    <li>
                                        <IoIosArrowForward/>
                                        <a href="https://www.linkedin.com/in/debby-arends-92a97b55/" target="_blank">LinkedIn</a>
                                    </li>
                                    <li>
                                        <IoIosArrowForward/>
                                        <a href="https://www.instagram.com/kinnaris_manohara/" target="_blank">Instagram</a>
                                    </li>
                                    <li>
                                        <IoIosArrowForward/>
                                        <a href="https://www.facebook.com/debby.arends/" target="_blank">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={superheroVsVillainsLogo} alt="Logo superhero vs villains" className="logo-superhero-vs-villains"/>
            </div>
        </>
    );
}

export default Footer;