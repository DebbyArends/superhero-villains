import React from 'react';
import './CharacterBiographyCard.css'

function CharacterBiographyCard({
                                    characterId,
                                    classname,
                                    characterName,
                                    image,
                                    intelligence,
                                    strength,
                                    speed,
                                    durability,
                                    power,
                                    combat,
                                    fullName,
                                    gender,
                                    height,
                                    hairColor,
                                    weight,
                                    eyeColor,
                                    aliases,
                                    placeOfBirth,
                                    relatives,
                                    firstAppearance,
                                    publisher
                                }) {
    return (
            <section key={characterId}>
                <article className={classname}>
                    <div className="inner-stats-container">
                        <img src={image} alt={characterName} className="image"/>
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td className="data-center">Intelligence:</td>
                                    <td>{intelligence}</td>
                                </tr>
                                <tr>
                                    <td className="data-center">Strength:</td>
                                    <td>{strength}</td>
                                </tr>
                                <tr>
                                    <td className="data-center">Speed:</td>
                                    <td>{speed}</td>
                                </tr>
                                <tr>
                                    <td className="data-center">Durability:</td>
                                    <td>{durability}</td>
                                </tr>
                                <tr>
                                    <td className="data-center">Power:</td>
                                    <td>{power}</td>
                                </tr>
                                <tr>
                                    <td className="data-center">Combat:</td>
                                    <td>{combat}</td>
                                </tr>
                                </tbody>
                            </table>
                    </div>
                    <div className="outer-biography-container">
                        <div className="inner-biography-container">
                            <h1>{characterName}</h1>
                            <span className="full-name">{fullName}</span>
                            <table className="table-biography">
                                <tbody>
                                <tr>
                                    <td className="data-biography">Gender:</td>
                                    <td>{gender}</td>
                                </tr>
                                <tr>
                                    <td className="data-biography">Height:</td>
                                    <td>{height}</td>
                                </tr>
                                <tr>
                                    <td className="data-biography">Hair color:</td>
                                    <td>{hairColor}</td>
                                </tr>
                                <tr>
                                    <td className="data-biography">Weight:</td>
                                    <td>{weight}</td>
                                </tr>
                                <tr>
                                    <td className="data-biography">Eye color:</td>
                                    <td>{eyeColor}</td>
                                </tr>
                                <tr>
                                    <td className="data-biography">Aliases:</td>
                                    <td>{aliases}</td>
                                </tr>
                                <tr>
                                    <td className="data-biography">Place of birth:</td>
                                    <td>{placeOfBirth}</td>
                                </tr>
                                <tr>
                                    <td className="data-biography">Relatives:</td>
                                    <td>{relatives}</td>
                                </tr>
                                <tr>
                                    <td className="data-biography">First appearance:</td>
                                    <td>{firstAppearance}</td>
                                </tr>
                                <tr>
                                    <td className="data-biography">Publisher:</td>
                                    <td>{publisher}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            </section>
    );
}

export default CharacterBiographyCard;