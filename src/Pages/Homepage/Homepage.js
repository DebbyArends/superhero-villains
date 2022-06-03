import React from 'react';
import "./Homepage.css";
import girlWithGlasses from "../../assets/girl-with-glasses.jpg";
import dcMarvelMultiverse from "../../assets/dc-marvel-multiverse.jpg";

import Banner from "../../Components/Banner/Banner";
import headbanner from "../../assets/hoofdbanner3.1.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"


function HomePage() {
    return (
        <>
            <div>
                <img src={headbanner} alt="Banner superhero in front of city" className="homepage-banner"/>
                <h2 id="banner-h2">Are you a</h2>
                <h1 id="banner-h1">Superhero?</h1>
            </div>
            <article className="main-article">
                <div className="title-article">
                    <h2>Which Superpowers do you have?</h2>
                </div>
                <div className="description-article">
                    <p>Are you also <strong>'Geeking-out'</strong> when a new superhero movie or series is coming out?</p>
                    <span className="quote-container">
                        <FaQuoteLeft
                            className="quote-icon"
                        />
                        <h4>Me, too!</h4>
                        <FaQuoteRight
                            className="quote-icon"
                        />
                    </span>
                    <p>Personally, I'm a real <strong>'Geek'</strong> and I love to experience the different universes through the
                        movies, series or comics.</p>
                    <p>Would you like to know which superhero or villain you would be in the
                        multiverse? Let's find out...!</p>
                </div>
            </article>
            <Banner
                classname="outer-container-article-1"
                image={girlWithGlasses}
                alternateText="Pop art girl with glasses"
                title="Superhero or Villain"
                description="Find out based on your"
                pageTitle="Appearance"
                location={"/appearance"}
                buttonTitle="Do the quiz"
            />
            <Banner
                classname="outer-container-article-2"
                image={dcMarvelMultiverse}
                alternateText="Dc and Marvel characters"
                description="Search a specific"
                pageTitle="Character"
                location={"/characters"}
                buttonTitle="Search"
            />
        </>
    );
}

export default HomePage;