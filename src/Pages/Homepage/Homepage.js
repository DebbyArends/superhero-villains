import React from 'react';
import "./Homepage.css"
import girlWithGlasses from "../../assets/girl-with-glasses.jpg"
import dcMarvelMultiverse from "../../assets/dc-marvel-multiverse.jpg"
import powFist from "../../assets/pow-fist.jpg"

function HomePage() {
    return (
        <>
            <div className="homepage-banner-outer-container">
                <section className="homepage-banner-inner-container">
                    <h2 id="banner-h2">Are you a</h2>
                    <h1 id="banner-h1">Superhero?</h1>
                </section>
            </div>
            <h2>Which Superpowers do you have?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi consequuntur doloremque dolorum
                facilis in ipsa laudantium minus nobis pariatur perferendis placeat reiciendis, repellendus sed,
                tempora. Corporis enim odio repellat! Aspernatur consequuntur debitis doloremque, doloribus in ipsam
                ipsum laudantium maiores modi neque numquam odio perspiciatis, qui sint tempore temporibus, vitae
                voluptatum? A aliquid consequatur consequuntur corporis dolor doloremque, eaque hic incidunt, ipsa, modi
                natus nemo nisi quae quasi quidem quo quod quos rem repellendus repudiandae rerum temporibus velit?
                Consequatur ducimus est facilis fugiat hic id iusto, laudantium magnam modi nostrum, odit quae, unde.
                Aliquid debitis eius eligendi nemo numquam quis veniam. Dolorem doloremque harum illo ipsum neque omnis
                porro quo repellat. A adipisci aut commodi consequuntur culpa deleniti, dolor eaque illum ipsum itaque
                labore libero, maxime necessitatibus neque nisi obcaecati quam quidem sequi similique sunt suscipit
                totam voluptatem! At atque debitis dolor ex magnam molestias nam non nulla sint soluta?</p>
            <section className="outer-container-article-1">
                <article className="inner-container-article">
                    <img src={girlWithGlasses} alt="Pop art girl with glasses" className="image-appearance"/>
                    <div className="container-article-text">
                        <h3 className="title-article">Superhero or Villain</h3>
                        <h5 className="description">Find out based on your</h5>
                        <h2 className="page-title">Appearance</h2>
                        <button
                            type="button"
                            className="button-banner"
                        >
                            Do the quiz!
                        </button>
                    </div>
                </article>
            </section>
            <section className="outer-container-article-2">
                <article className="inner-container-article">
                    <img src={powFist} alt="Pop art girl with glasses" className="image-appearance"/>
                    <div className="container-article-text">
                        <h3 className="title-article">Superhero or Villain</h3>
                        <h5 className="description">Find out based on your</h5>
                        <h2 className="page-title">Appearance</h2>
                        <button
                            type="button"
                            className="button-banner"
                        >
                            Do the quiz!
                        </button>
                    </div>
                </article>
            </section>
            <section className="outer-container-article-3">
                <article className="inner-container-article">
                    <img src={dcMarvelMultiverse} alt="Pop art girl with glasses" className="image-appearance"/>
                    <div className="container-article-text">
                        <h3 className="title-article">Superhero or Villain</h3>
                        <h5 className="description">Find out based on your</h5>
                        <h2 className="page-title">Appearance</h2>
                        <button
                            type="button"
                            className="button-banner"
                        >
                            Do the quiz!
                        </button>
                    </div>
                </article>
            </section>
        </>
    )
}

export default HomePage