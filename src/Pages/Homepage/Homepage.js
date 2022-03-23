import React from 'react';
import mainbanner from "../../assets/hoofdbanner3.1.png"
import "./Homepage.css"
import girlWithGlasses from "../../assets/girl-with-glasses.jpg"

function HomePage() {
    return (
        <>
            <img src={mainbanner} className="homepage-banner" alt="superhero-background-city"/>
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
            <article className="container-article1">
                <img src={girlWithGlasses} alt="Pop art girl with glasses" className="image-appearance"/>
                <p id="title-article">Superhero or Villain</p>
                <p id="description">Find out based on your</p>
                <p>Appearance</p>
                <button
                type="button"
                >
                    Do the quiz!
                </button>
            </article>
        </>
    )
}

export default HomePage