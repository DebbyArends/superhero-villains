import superhero from "../assets/supehero-male.jpg";
import superwoman from "../assets/superwoman.jpg";
import femaleBlack from "../assets/hairColors/female-black.png";
import maleBlack from "../assets/hairColors/blackM.png";
import femaleBlond from "../assets/hairColors/female-blond.png";
import maleBlond from "../assets/hairColors/male-blond.png";
import femaleBrown from "../assets/hairColors/female-brown.png";
import maleBrown from "../assets/hairColors/male-brown.png";
import femaleWhite from "../assets/hairColors/female-white.png";
import maleWhite from "../assets/hairColors/male-white.png";
import femalePurple from "../assets/hairColors/female-purple.png";
import malePurple from "../assets/hairColors/male-purple.png";
import femaleOrange from "../assets/hairColors/female-orange.png";
import maleOrange from "../assets/hairColors/male-orange.png";
import femalePink from "../assets/hairColors/female-pink.png";
import malePink from "../assets/hairColors/male-pink.png";
import femaleRed from "../assets/hairColors/female-red.png";
import maleRed from "../assets/hairColors/male-red.png";
import femaleAuburn from "../assets/hairColors/female-auburn.png";
import maleAuburn from "../assets/hairColors/male-auburn.png";
import femaleStrawberryBlond from "../assets/hairColors/female-strawberry-blond.png";
import maleStrawberryBlond from "../assets/hairColors/male-strawberry-blond.png";
import femaleBlue from "../assets/hairColors/female-blue.png";
import maleBlue from "../assets/hairColors/male-blue.png";
import femaleGreen from "../assets/hairColors/female-green.png";
import maleGreen from "../assets/hairColors/male-green.png";
import femaleMagenta from "../assets/hairColors/female-magenta.png";
import maleMagenta from "../assets/hairColors/male-magenta.png";
import femaleSilver from "../assets/hairColors/female-silver.png";
import maleSilver from "../assets/hairColors/male-silver.png";
import femaleGrey from "../assets/hairColors/female-grey.png";
import maleGrey from "../assets/hairColors/male-grey.png";
import femaleOrangeWhite from "../assets/hairColors/female-orange-white.png";
import maleOrangeWhite from "../assets/hairColors/male-orang-white.png";
import femaleBrownWhite from "../assets/hairColors/female-brown-white.png";
import maleBrownWhite from "../assets/hairColors/male-brown-white.png";
import femaleYellow from "../assets/hairColors/female-yellow.png";
import maleYellow from "../assets/hairColors/male-yellow.png";
import femaleGold from "../assets/hairColors/female-gold.png";
import maleGold from "../assets/hairColors/male-gold.png";
import femaleOrangeRed from "../assets/hairColors/female-orange-red.png";
import maleOrangeRed from "../assets/hairColors/male-red-orange.png";
import femaleIndigo from "../assets/hairColors/female-indigo.png";
import maleIndigo from "../assets/hairColors/male-indigo.png";
import React from "react";

 export const questions = [
        {
            id: 1,
            questionText: 'What is your gender?',
            answerOptions: [
                {
                    id: 1,
                    answerText: 'Male',
                    image: <img src={superhero} alt="superhero male pop art" className="gender-image"/>},
                {
                    id: 2,
                    answerText: 'Female',
                    image: <img src={superwoman} alt="superhero female pop art" className="gender-image"/>},
            ]
        },
        {
            id: 2,
            questionText: 'What is your height?',
            answerOptions: [
                {
                    id: 3,
                    answerText: "cm"},
            ]
        },
        {
            id: 3,
            questionText: 'What is your hair color?',
            answerOptions: [
                {
                    id: 4,
                    answerText: 'Black',
                    image: <img src={femaleBlack} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBlack} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 5,
                    answerText: 'Blond',
                    image: <img src={femaleBlond} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBlond} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 6,
                    answerText: 'Brown',
                    image: <img src={femaleBrown} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBrown} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 7,
                    answerText: 'White',
                    image: <img src={femaleWhite} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleWhite} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 8,
                    answerText: 'Purple',
                    image: <img src={femalePurple} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={malePurple} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 9,
                    answerText: 'Orange',
                    image: <img src={femaleOrange} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleOrange} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 10,
                    answerText: 'Pink',
                    image: <img src={femalePink} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={malePink} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 11,
                    answerText: 'Red',
                    image: <img src={femaleRed} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleRed} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 12,
                    answerText: 'Auburn',
                    image: <img src={femaleAuburn} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleAuburn} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 13,
                    answerText: 'Strawberry Blond',
                    image: <img src={femaleStrawberryBlond} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleStrawberryBlond} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 14,
                    answerText: 'Blue',
                    image: <img src={femaleBlue} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBlue} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 15,
                    answerText: 'Green',
                    image: <img src={femaleGreen} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleGreen} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 16,
                    answerText: 'Magenta',
                    image: <img src={femaleMagenta} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleMagenta} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 17,
                    answerText: 'Silver',
                    image: <img src={femaleSilver} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleSilver} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 18,
                    answerText: 'Grey',
                    image: <img src={femaleGrey} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleGrey} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 19,
                    answerText: 'Orange / White',
                    image: <img src={femaleOrangeWhite} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleOrangeWhite} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 20,
                    answerText: 'Brown / White',
                    image: <img src={femaleBrownWhite} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleBrownWhite} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 21,
                    answerText: 'Yellow',
                    image: <img src={femaleYellow} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleYellow} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 22,
                    answerText: 'Gold',
                    image: <img src={femaleGold} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleGold} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 23,
                    answerText: 'Red / Orange',
                    image: <img src={femaleOrangeRed} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleOrangeRed} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 24,
                    answerText: 'indigo',
                    image: <img src={femaleIndigo} alt="Hairstyle black female silhouette" className="hair"/>,
                    image1: <img src={maleIndigo} alt="Hairstyle black male silhouette" className="hair"/>
                },
                {
                    id: 25,
                    answerText: '-'
                },
                {
                    id: 26,
                    answerText: 'No Hair'
                },
            ]
        },
        {
            id: 4,
            questionText: 'What is your weight?',
            answerOptions: [
                {
                    id: 27,
                    answerText: "kg"},
            ]
        },
        {
            id: 5,
            questionText: 'What is your eye color?',
            answerOptions: [
                {
                    id: 28,
                    answerText: "-"},
                {
                    id: 29,
                    answerText: "Amber"},
                {
                    id: 30,
                    answerText: "Black"},
                {
                    id: 31,
                    answerText: "Blue"},
                {
                    id: 32,
                    answerText: "Blue / White"},
                {
                    id: 33,
                    answerText: "Brown"},
                {
                    id: 34,
                    answerText: "Gold"},
                {
                    id: 35,
                    answerText: "Green"},
                {
                    id: 36,
                    answerText: "Green / Blue"},
                {
                    id: 37,
                    answerText: "Grey"},
                {
                    id: 38,
                    answerText: "Hazel"},
                {
                    id: 39,
                    answerText: "Indigo"},
                {
                    id: 40,
                    answerText: "Purple"},
                {
                    id: 41,
                    answerText: "Red"},
                {
                    id: 42,
                    answerText: "Silver"},
                {
                    id: 43,
                    answerText: "Violet"},
                {
                    id: 44,
                    answerText: "White"},
                {
                    id: 45,
                    answerText: "White / Red"},
                {
                    id: 46,
                    answerText: "Yellow"},
                {
                    id: 47,
                    answerText: "Yellow (without irises)"},
                {
                    id: 48,
                    answerText: "Yellow / Red"},
                {
                    id: 49,
                    answerText: "Yellow / Blue"},

            ]
        },
    ]



