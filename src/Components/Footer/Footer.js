import React from "react";
import './Footer.css'




function Footer() {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Get in Touch</h4>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                debby_arends@live.nl
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Connect</h4>
                        <ul className="list-unstyled">
                            <li>
                                LinkedIn
                            </li>
                            <li>
                                Instagram
                            </li>
                            <li>
                                Facebook
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;