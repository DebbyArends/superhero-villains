import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Characters.css'
import {Link} from 'react-router-dom';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import{ReactComponent as Marvel} from "../../assets/Marvel_Logo.svg";
import {ReactComponent as DC} from "../../assets/DC_Comics_logo.svg";
import {ReactComponent as Divider} from "../../assets/Decorative-Border-Divider.svg";
import SearchCharacter from "../../Components/SearchCharacter/SearchCharacter";
// import CharacterBiographyCard from "../../Components/CharacterBiographyCard/CharacterBiographyCard";

function Characters() {
    const [characters, setCharacters]=useState('')
    const [currentCharacterMarvel, setCurrentCharacterMarvel] = useState(5)
    const [indexMarvel, setIndexMarvel] = useState(0)
    const [currentCharacterDC, setCurrentCharacterDC] = useState(5)
    const [indexDC, setIndexDC] = useState(0)
    const length = characters.length

    useEffect(()=> {
        async function getData(){
            try{
                const result = await axios.get('https://akabab.github.io/superhero-api/api/all.json')
                console.log(result.data)
                setCharacters(result.data)
            }catch (e) {
                console.error(e)
            }
        }
        getData()
    }, [])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 992) {
                setCurrentCharacterMarvel(5);
                setCurrentCharacterDC(5);
            }
            else if (window.innerWidth > 768) {
                setCurrentCharacterMarvel(4);
                setCurrentCharacterDC(4);
            }
            else {
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
        return character.biography.publisher === "Marvel Comics"
    })

    const charactersDC = characters.filter((character) => {
        return character.biography.publisher === "DC Comics"
    })

    function nextSlideMarvelCharacters() {
        setCurrentCharacterMarvel(currentCharacterMarvel + 1)
        setIndexMarvel(indexMarvel + 1)
    }

   function prevSlideMarvelCharacters() {
        if (window.innerWidth> 992) {
            setCurrentCharacterMarvel(currentCharacterMarvel > 5 ? currentCharacterMarvel - 1 : currentCharacterMarvel(5))
            setIndexMarvel(indexMarvel > 0 ? indexMarvel - 1 : indexMarvel(0))
        }
        else if (window.innerWidth > 768) {
            setCurrentCharacterMarvel(currentCharacterMarvel > 4 ? currentCharacterMarvel - 1 : currentCharacterMarvel(4))
            setIndexMarvel(indexMarvel > 0 ? indexMarvel - 1 : indexMarvel(0))
       }
       else {
            setCurrentCharacterMarvel(currentCharacterMarvel > 2 ? currentCharacterMarvel - 1 : currentCharacterMarvel(2))
            setIndexMarvel(indexMarvel > 0 ? indexMarvel - 1 : indexMarvel(0))
       }
    }

    function nextSlideDCCharacters() {
        setCurrentCharacterDC(currentCharacterDC + 1)
        setIndexDC(indexDC + 1)

    }

    function prevSlideDCCharacters() {
        if (window.innerWidth> 992) {
            setCurrentCharacterDC(  currentCharacterDC > 5 ? currentCharacterDC - 1: currentCharacterDC(5))
            setIndexDC (indexDC > 0 ? indexDC - 1: indexDC(0))
        }
        else if (window.innerWidth > 768) {
            setCurrentCharacterDC(  currentCharacterDC > 4 ? currentCharacterDC - 1: currentCharacterDC(4))
            setIndexDC (indexDC > 0 ? indexDC - 1: indexDC(0))
        }
        else {
            setCurrentCharacterDC(  currentCharacterDC > 2 ? currentCharacterDC - 1: currentCharacterDC(2))
            setIndexDC (indexDC > 0 ? indexDC - 1: indexDC(0))
        }
    }

    function handleClick(character){
            if (character === currentCharacterMarvel){
                return(
                    console.log(character)
                )
            }
        //             const characterclick = characters && characters.find((character) => {
        //                 return character === character.name
        //             })
        // console.log(characterclick);
                    // <CharacterBiographyCard
                    //     key={character.id}
                    //     classname="character-result"
                    //     image={character.images.lg}
                    //     characterName={character.name}
                    //     intelligence={character.powerstats.intelligence}
                    //     strength={character.powerstats.strength}
                    //     speed={character.powerstats.speed}
                    //     durability={character.powerstats.durability}
                    //     power={character.powerstats.power}
                    //     combat={character.powerstats.combat}
                    //     fullName={character.biography.fullName}
                    //     gender={character.appearance.gender}
                    //     height={character.appearance.height[1]}
                    //     hairColor={character.appearance.hairColor}
                    //     weight={character.appearance.weight[1]}
                    //     eyeColor={character.appearance.eyeColor}
                    //     aliases={character.biography.aliases.join(', ')}
                    //     placeOfBirth={character.biography.placeOfBirth}
                    //     relatives={character.connections.relatives}
                    //     firstAppearance={character.biography.firstAppearance}
                    //     publisher={character.biography.publisher}
                    // />

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
                    {charactersMarvel && charactersMarvel.slice(indexMarvel, currentCharacterMarvel).map((character)=> (
                        [
                            <ul key={character.id} className="list-items-marvel" onClick={handleClick}>
                                <li className="character-list-marvel">
                                    <div className="character-white">
                                        <img src={character.images.lg} alt={character.name} className="image-character"/>
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
                    {charactersDC && charactersDC.slice(indexDC, currentCharacterDC).map((character)=> (
                        [
                            <ul key={character.id}>
                                <li className="character-list-dc">
                                    {/*<li className="character-list-dc" onClick={handleClick}>*/}
                                    <div className="character-white">
                                        <img src={character.images.lg} alt={character.name} className="image-character"/>
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
    )
}

export default Characters;