import React, {useState} from "react";
import SliderData from "./SliderData";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
// import './ImageSlider.css'

function ImageSlider(slider) {
    return(
        <section className= "slider">
            <BiLeftArrow className="left-arrow" />
            <BiRightArrow className="right-arrow"/>
            {SliderData()}
        </section>
    )
}

export default ImageSlider