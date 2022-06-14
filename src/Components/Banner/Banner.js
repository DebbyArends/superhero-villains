import React from 'react';
import {useHistory} from "react-router-dom";
import './Banner.css';

function Banner({classname, image, alternateText, title, description, pageTitle, location, buttonTitle}) {
    const history = useHistory();
    return (
        <section className={classname}>
            <article className="inner-container-article">
                <img src={image} alt={alternateText} className="image-appearance"/>
                <div className="container-article-text">
                    <h3 className="title-article">{title}</h3>
                    <h5 className="description">{description}</h5>
                    <h2 className="page-title">{pageTitle}</h2>
                    <div className="button-container">
                        <button
                            type="button"
                            className="button-banner"
                            onClick={(e) => (history.push(`${location}`))}
                        >
                            {buttonTitle}
                        </button>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Banner;