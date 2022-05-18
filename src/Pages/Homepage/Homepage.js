import React, {useEffect} from 'react';
import "./Homepage.css"
import girlWithGlasses from "../../assets/girl-with-glasses.jpg"
import dcMarvelMultiverse from "../../assets/dc-marvel-multiverse.jpg"
import powFist from "../../assets/pow-fist.jpg"
import Banner from "../../Components/Banner/Banner";
import axios from "axios";
import headbanner from "../../assets/hoofdbanner3.1.png"
import {useParams} from "react-router-dom";

function HomePage() {
const apiKey = "10228880912034222"
// let id = 0
//     for (let i = 0; i <=731; i++) {
//         console.log(i)
//         id= id + i
//     }
//  const id = useParams()
//     const id = 1 ,2
const id = [1&& 2]

    useEffect(()=> {
        async function getData(){

            try{
                const result = await axios.get(`https://superheroapi.com/api/${apiKey}/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                console.log(result.data)
            }catch (e) {
                console.error(e)
            }
        }
        getData()
    }, [])

    return (
        <>
            <div>
                <img src={headbanner} alt="Banner superhero in front of city" className="homepage-banner"/>
                <h2 id="banner-h2">Are you a</h2>
                <h1 id="banner-h1">Superhero?</h1>
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
                image={powFist}
                alternateText="Power fist"
                title="Superhero or Villain"
                description="Find out based on your"
                pageTitle="Powerstats"
                location={"/powerstats"}
                buttonTitle="Do the quiz"
            />
            <Banner
                classname="outer-container-article-3"
                image={dcMarvelMultiverse}
                alternateText="Dc and Marvel characters"
                description="Search a specific"
                pageTitle="Character"
                location={"/characters"}
                buttonTitle="Search"
            />
        </>
    )
}

export default HomePage