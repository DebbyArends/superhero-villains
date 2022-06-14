import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Characters.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {ReactComponent as Marvel} from "../../assets/Marvel_Logo.svg";
import {ReactComponent as DC} from "../../assets/DC_Comics_logo.svg";
import {ReactComponent as Divider} from "../../assets/Decorative-Border-Divider.svg";
import SearchCharacter from "../../Components/SearchCharacter/SearchCharacter";

function Characters() {
    const [characters, setCharacters] = useState('');
    const [currentCharacterMarvel, setCurrentCharacterMarvel] = useState(5);
    const [indexMarvel, setIndexMarvel] = useState(0);
    const [currentCharacterDC, setCurrentCharacterDC] = useState(5);
    const [indexDC, setIndexDC] = useState(0);
    const history = useHistory();
    const length = characters.length;
    let {characterId} = useParams();

    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
                if (characters.id === characterId) {
                    console.log(result.data);
                    setCharacters(result.data);
                }
            } catch (e) {
                console.error(e);
            }
        }

        getData();
    }, []);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 992) {
                setIndexMarvel(0);
                setIndexDC(0);
                setCurrentCharacterMarvel(5);
                setCurrentCharacterDC(5);
            } else if (window.innerWidth > 768) {
                setIndexMarvel(0);
                setIndexDC(0);
                setCurrentCharacterMarvel(4);
                setCurrentCharacterDC(4);
            } else {
                setIndexMarvel(0);
                setIndexDC(0);
                setCurrentCharacterMarvel(2);
                setCurrentCharacterDC(2);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    if (!Array.isArray(characters) || length <= 0) {
        return null;
    }


    const charactersMarvel = characters.filter((character) => {
        return character.biography.publisher === "Marvel Comics";
    });

    const charactersDC = characters.filter((character) => {
        return character.biography.publisher === "DC Comics";
    });


    function nextSlideMarvelCharacters() {
        setCurrentCharacterMarvel(currentCharacterMarvel < 269 ? currentCharacterMarvel + 1 : currentCharacterMarvel(269));
        setIndexMarvel(indexMarvel < 269 ? indexMarvel + 1 : indexMarvel(269));
    }

    function prevSlideMarvelCharacters() {
        if (window.innerWidth > 992) {
            setCurrentCharacterMarvel(currentCharacterMarvel > 5 ? currentCharacterMarvel - 1 : currentCharacterMarvel(5));
            setIndexMarvel(indexMarvel > 0 ? indexMarvel - 1 : indexMarvel(0));
        } else if (window.innerWidth > 768) {
            setCurrentCharacterMarvel(currentCharacterMarvel > 4 ? currentCharacterMarvel - 1 : currentCharacterMarvel(4));
            setIndexMarvel(indexMarvel > 0 ? indexMarvel - 1 : indexMarvel(0));
        } else {
            setCurrentCharacterMarvel(currentCharacterMarvel > 2 ? currentCharacterMarvel - 1 : currentCharacterMarvel(2));
            setIndexMarvel(indexMarvel > 0 ? indexMarvel - 1 : indexMarvel(0));
        }
    }

    function nextSlideDCCharacters() {
        setCurrentCharacterDC(currentCharacterDC < 155 ? currentCharacterDC + 1 : currentCharacterDC(155));
        setIndexDC(indexDC < 155 ? indexDC + 1 : indexDC(155));

    }

    function prevSlideDCCharacters() {
        if (window.innerWidth > 992) {
            setCurrentCharacterDC(currentCharacterDC > 5 ? currentCharacterDC - 1 : currentCharacterDC(5));
            setIndexDC(indexDC > 0 ? indexDC - 1 : indexDC(0));
        } else if (window.innerWidth > 768) {
            setCurrentCharacterDC(currentCharacterDC > 4 ? currentCharacterDC - 1 : currentCharacterDC(4));
            setIndexDC(indexDC > 0 ? indexDC - 1 : indexDC(0));
        } else {
            setCurrentCharacterDC(currentCharacterDC > 2 ? currentCharacterDC - 1 : currentCharacterDC(2));
            setIndexDC(indexDC > 0 ? indexDC - 1 : indexDC(0));
        }
    }

    return (
        <>
            <div className="title">
                <h1>Characters</h1>
            </div>
            <SearchCharacter/>

            <div className="container-logos">
                <a href="https://www.marvel.com/" target="_blank" rel="noreferrer">
                    <Marvel className="logo-marvel"/>
                </a>
            </div>

            <section className="slider">
                <IoIosArrowBack
                    className="left-arrow"
                    onClick={prevSlideMarvelCharacters}
                />
                <article className="character-container">
                    {charactersMarvel && charactersMarvel.slice(indexMarvel, currentCharacterMarvel).map((character) => (
                        [
                            <ul key={character.id} className="list-items-marvel">
                                <li className="character-list-marvel"
                                    onClick={() => history.push(`/character-biography/${character.id}`)}>
                                    <div className="character-white">
                                        <img src={character.images.lg} alt={character.name}
                                             className="image-character"/>
                                        <h5>{character.name}</h5>
                                    </div>
                                </li>
                            </ul>
                        ]
                    ))}
                </article>
                <IoIosArrowForward
                    className="right-arrow"
                    onClick={nextSlideMarvelCharacters}
                />
            </section>

            <div className="container-logos">
                <Divider className="divider-line"/>
            </div>

            <div className="container-logos">
                <a href="https://www.dccomics.com/" target="_blank" rel="noreferrer"><DC className="logo-dc"/></a>
            </div>

            <section className="slider">
                <IoIosArrowBack
                    className="left-arrow"
                    onClick={prevSlideDCCharacters}
                />
                <article className="character-container">
                    {charactersDC && charactersDC.slice(indexDC, currentCharacterDC).map((character) => (
                        [
                            <ul key={character.id}>
                                <li className="character-list-dc"
                                    onClick={() => history.push(`/character-biography/${character.id}`)}>
                                    <div className="character-white">
                                        <img src={character.images.lg} alt={character.name}
                                             className="image-character"/>
                                        <h5>{character.name}</h5>
                                    </div>
                                </li>
                            </ul>
                        ]
                    ))}
                </article>
                <IoIosArrowForward
                    className="right-arrow"
                    onClick={nextSlideDCCharacters}
                />
            </section>

            <div className="container-link-back">
                <p id="link-back">Go <Link to="/" className="back-link">back</Link> to the homepage</p>
            </div>
        </>
    );
}

export default Characters;